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

async function cf(path: string, init: RequestInit = {}) {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}${path}`,
    { ...init, headers: { ...headers, ...(init.headers || {}) } },
  );

  const body = await response.json().catch(() => null);
  if (!response.ok || (body && body.success === false)) {
    throw new Error(`Cloudflare API error ${response.status}: ${JSON.stringify(body)}`);
  }
  return body;
}

async function main() {
  console.log(`Ensuring Vectorize index "${indexName}" exists…`);
  const createResponse = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/vectorize/v2/indexes`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({ name: indexName, config: { dimensions: 384, metric: "cosine" } }),
    },
  );
  if (!createResponse.ok && createResponse.status !== 409) {
    const body = await createResponse.text();
    throw new Error(`Could not create Vectorize index: ${createResponse.status} ${body}`);
  }

  console.log(`Syncing ${askHarshitKnowledge.length} Ask Harshit AI chunks…`);

  const embeddings = [];
  for (const chunk of askHarshitKnowledge) {
    const result = await cf("/ai/run/@cf/baai/bge-small-en-v1.5", {
      method: "POST",
      body: JSON.stringify({ text: [`${chunk.title}. ${chunk.section || ""}. ${chunk.text}`] }),
    });

    const vector = result?.result?.data?.[0];
    if (!Array.isArray(vector) || vector.length === 0) {
      throw new Error(`No embedding returned for ${chunk.id}`);
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
  }

  // Vectorize HTTP API accepts batched vector upserts.
  const endpoint = `/vectorize/v2/indexes/${encodeURIComponent(indexName)}/upsert`;
  for (let i = 0; i < embeddings.length; i += 1000) {
    const batch = embeddings.slice(i, i + 1000);
    await cf(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-ndjson" },
      body: batch.map((vector) => JSON.stringify(vector)).join("\n") + "\n",
    });
    console.log(`Upserted ${Math.min(i + batch.length, embeddings.length)}/${embeddings.length}`);
  }

  console.log("Ask Harshit AI Vectorize index synced.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
