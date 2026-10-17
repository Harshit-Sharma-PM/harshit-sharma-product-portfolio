import { readFile } from "node:fs/promises";

const endpoint =
  process.env.ASK_HARSHIT_EVAL_URL ??
  "https://harshit-sharma-product-portfolio.pages.dev/api/ask-harshit";
const cases = JSON.parse(
  await readFile(new URL("../eval/ask-harshit-eval-cases.json", import.meta.url), "utf8"),
);
const delayMs = Number(process.env.ASK_HARSHIT_EVAL_DELAY_MS ?? 6500);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const lower = (value) => String(value ?? "").toLowerCase();

function checkCase(test, answer, sources) {
  const text = lower(answer);
  const sourceText = lower((sources ?? []).map((source) => source.title).join(" | "));
  const missingGroups = (test.mustContainAny ?? [])
    .filter((alternatives) => !alternatives.some((term) => text.includes(lower(term))))
    .map((alternatives) => alternatives.join(" OR "));
  // Use whole-word matching so a forbidden token like "Gene" does not
  // accidentally match harmless words such as "generally" or "generation".
  const forbidden = (test.mustNotContain ?? []).filter((term) => {
    const escaped = lower(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`\\b${escaped}\\b`, "i").test(text);
  });
  const expectedSourceMissing =
    test.expectedSourceTitle &&
    !sourceText.includes(lower(test.expectedSourceTitle));
  const forbiddenSourceTitles = (test.mustNotReturnSourceTitles ?? [])
    .filter((title) => sourceText.includes(lower(title)));
  const unexpectedSources = Boolean(test.mustNotReturnAnySources && (sources ?? []).length > 0);
  return {
    pass:
      missingGroups.length === 0 &&
      forbidden.length === 0 &&
      !expectedSourceMissing &&
      forbiddenSourceTitles.length === 0 &&
      !unexpectedSources,
    missingGroups,
    forbidden,
    expectedSourceMissing: Boolean(expectedSourceMissing),
    forbiddenSourceTitles,
    unexpectedSources,
  };
}

console.log(`Ask Harshit AI evaluation`);
console.log(`Endpoint: ${endpoint}`);
console.log(`Cases: ${cases.length}; delay between calls: ${delayMs}ms`);
console.log("Note: keyword/source checks are regression signals, not a substitute for human judging of factual groundedness.");
console.log("");

const results = [];
for (let index = 0; index < cases.length; index += 1) {
  const test = cases[index];
  const started = Date.now();
  let answer = "";
  let sources = [];
  let status = 0;
  let error = "";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ question: test.question, history: [] }),
      signal: AbortSignal.timeout(30000),
    });
    status = response.status;
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      error = body.error ?? `HTTP ${response.status}`;
    } else {
      answer = body.answer ?? "";
      sources = Array.isArray(body.sources) ? body.sources : [];
    }
  } catch (caught) {
    error = caught instanceof Error ? caught.message : String(caught);
  }

  const latencyMs = Date.now() - started;
  const checks = error
    ? { pass: false, missingGroups: [], forbidden: [], expectedSourceMissing: false }
    : checkCase(test, answer, sources);

  const result = {
    id: test.id,
    category: test.category,
    pass: checks.pass,
    status,
    latencyMs,
    error,
    missingGroups: checks.missingGroups,
    forbidden: checks.forbidden,
    expectedSourceMissing: checks.expectedSourceMissing,
    forbiddenSourceTitles: checks.forbiddenSourceTitles ?? [],
    unexpectedSources: checks.unexpectedSources ?? false,
    manualReview: Boolean(test.manualReview),
    answer,
    sources: sources.map((source) => source.title),
  };
  results.push(result);

  console.log(
    `[${result.pass ? "PASS" : "FAIL"}] ${test.id} | HTTP ${status || "ERR"} | ${latencyMs}ms`,
  );
  if (error) console.log(`  Error: ${error}`);
  if (checks.missingGroups.length) console.log(`  Missing expected terms: ${checks.missingGroups.join("; ")}`);
  if (checks.forbidden.length) console.log(`  Forbidden terms: ${checks.forbidden.join(", ")}`);
  if (checks.expectedSourceMissing) console.log(`  Expected source title not returned: ${test.expectedSourceTitle}`);
  if (checks.forbiddenSourceTitles?.length) console.log(`  Unexpected source titles: ${checks.forbiddenSourceTitles.join(", ")}`);
  if (checks.unexpectedSources) console.log("  Unexpected sources returned for an abstention case.");
  if (!result.pass && answer) {
    const compactAnswer = answer.replace(/\\s+/g, " ").trim();
    console.log(`  Answer excerpt: ${compactAnswer.slice(0, 420)}${compactAnswer.length > 420 ? "…" : ""}`);
  }
  console.log(`  Sources: ${result.sources.join(" | ") || "(none)"}`);

  if (index < cases.length - 1) await sleep(delayMs);
}

const passed = results.filter((result) => result.pass).length;
const failures = results.filter((result) => result.error).length;
const sortedLatency = results.map((result) => result.latencyMs).sort((a, b) => a - b);
const percentile = (p) =>
  sortedLatency.length
    ? sortedLatency[Math.min(sortedLatency.length - 1, Math.ceil(p * sortedLatency.length) - 1)]
    : 0;

const report = {
  endpoint,
  totalCases: results.length,
  passed,
  failed: results.length - passed,
  requestErrors: failures,
  passRatePercent: Number(((passed / Math.max(1, results.length)) * 100).toFixed(1)),
  latencyMs: {
    median: percentile(0.5),
    p95: percentile(0.95),
    max: Math.max(0, ...sortedLatency),
  },
  limitations: [
    "Keyword/source checks do not prove factual correctness or entailment.",
    "Review every answer flagged for manualReview and sample passing answers.",
    "Cost per 100 questions must be calculated from Cloudflare AI usage/billing data; it is not inferable from response time.",
    "The endpoint applies rate limits. Keep sequential requests and a delay between calls.",
  ],
  results,
};

await import("node:fs/promises").then(({ writeFile }) =>
  writeFile("ask-harshit-eval-report.json", JSON.stringify(report, null, 2)),
);
console.log("");
console.log(`Summary: ${passed}/${results.length} passed (${report.passRatePercent}%).`);
console.log(`Latency: median ${report.latencyMs.median}ms; p95 ${report.latencyMs.p95}ms; max ${report.latencyMs.max}ms.`);
console.log("Report written to ask-harshit-eval-report.json");
console.log("Cost per 100 questions is intentionally not estimated by this script.");
if (passed !== results.length) process.exitCode = 1;
