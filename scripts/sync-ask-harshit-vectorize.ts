import { askHarshitKnowledge } from "../artifacts/harshit-portfolio/src/ask-ai-knowledge.ts";

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const apiToken = process.env.CLOUDFLARE_API_TOKEN;
const indexName = process.env.VECTORIZE_INDEX_NAME || "ask-harshit-ai";

if (!accountId || !apiToken) {
  throw new Error(
    "Set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN before running the sync."
  );
}

const headers = {
  Authorization: `Bearer ${apiToken}`,
  "Content-Type": "application/json",
};

const REQUEST_TIMEOUT_MS = 60_000;

async function cf(path: string, init: RequestInit = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}${path}`,
      {
        ...init,
        signal: controller.signal,
        headers: { ...headers, ...(init.headers || {}) },
      },
    );

    const body = await response.json().catch(() => null);
    if (!response.ok || (body && body.success === false)) {
      throw new Error(
        `Cloudflare API error ${response.status}: ${JSON.stringify(body)}`,
      );
    }
    return body;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error(`Request timed out after ${REQUEST_TIMEOUT_MS}ms: ${path}`);
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

async function main() {
  console.log(`Starting Ask Harshit AI Vectorize sync for ${askHarshitKnowledge.length} chunks.`);
  console.log(`Target index: ${indexName}`);

  console.log("Ensuring Vectorize index exists...");
  const createResponse = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/vectorize/v2/indexes`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        name: indexName,
        config: { dimensions: 384, metric: "cosine" },
      }),
    },
  );

  if (!createResponse.ok && createResponse.status !== 409) {
    const body = await createResponse.text();
    throw new Error(
      `Could not create Vectorize index: ${createResponse.status} ${body}`,
    );
  }

  console.log("Vectorize index is ready.");

  const embeddings = [];

  for (let i = 0; i < askHarshitKnowledge.length; i += 1) {
    const chunk = askHarshitKnowledge[i];
    console.log(`[Embedding ${i + 1}/${askHarshitKnowledge.length}] ${chunk.id}...`);

    const result = await cf("/ai/run/@cf/baai/bge-small-en-v1.5", {
      method: "POST",
      body: JSON.stringify({
        text: [`${chunk.title}. ${chunk.section || ""}. ${chunk.text}`],
      }),
    });

    const vector = result?.result?.data?.[0];
    if (!Array.isArray(vector) || vector.length !== 384) {
      throw new Error(
        `Invalid embedding for ${chunk.id}: expected 384 dimensions, received ${Array.isArray(vector) ? vector.length : "none"}.`,
      );
    }

    embeddings.push({
      id: chunk.id,
      values: vector,
      metadata: {
        title: chunk.title,
        section: chunk.section || "",
        text: chunk.text,
      },
    });

    console.log(`[Embedding ${i + 1}/${askHarshitKnowledge.length}] ${chunk.id} complete.`);
  }

  console.log(`Generated ${embeddings.length}/${askHarshitKnowledge.length} embeddings.`);

  const endpoint = `/vectorize/v2/indexes/${encodeURIComponent(indexName)}/upsert`;
  console.log(`Upserting ${embeddings.length} vectors into Vectorize...`);

  await cf(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-ndjson" },
    body: embeddings.map((vector) => JSON.stringify(vector)).join("\n") + "\n",
  });

  console.log(`Upsert complete: ${embeddings.length}/${askHarshitKnowledge.length} vectors.`);
  console.log("Ask Harshit AI Vectorize index synced successfully.");
}

main().catch((error) => {
  console.error("SYNC FAILED:", error);
  process.exit(1);
});
