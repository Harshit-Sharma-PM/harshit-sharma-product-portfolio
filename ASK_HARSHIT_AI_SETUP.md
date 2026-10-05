# Ask Harshit AI — RAG setup

This feature adds a recruiter-facing AI assistant to the portfolio.

## Architecture

Browser UI → Cloudflare Pages Function → retrieval → grounded prompt → Workers AI

The repository contains a curated knowledge base in:

`artifacts/harshit-portfolio/src/ask-ai-knowledge.ts`

The retrieval layer currently uses deterministic keyword retrieval as a zero-dependency fallback. The API also supports Cloudflare Vectorize when a `VECTORIZE` binding is present. With Vectorize enabled, the question is embedded with `@cf/baai/bge-base-en-v1.5`, semantically searched, and the retrieved portfolio chunks are supplied to the generation model.

The generation model is `@cf/zai-org/glm-4.7-flash`, selected because Cloudflare currently lists it among Workers AI models available on the Workers Free plan.

## Cloudflare deployment steps

1. Keep the existing Pages build configuration for the portfolio. The Vite app writes to `artifacts/harshit-portfolio/dist/public`.

2. Open **Workers & Pages → your Pages project → Settings → Bindings**.

3. Add a **Workers AI** binding named:
   `AI`

4. Redeploy the Pages project.

5. The assistant will work immediately with the deterministic retrieval fallback plus Workers AI generation.

## Optional: enable semantic RAG with Vectorize

Create a Vectorize index using the same embedding model dimension and metric required by your chosen setup. The repository code expects a binding named:

`VECTORIZE`

Then bind that index to the Pages project and redeploy.

For this small portfolio knowledge base, the index only needs one vector per knowledge chunk. Keep the vector IDs equal to the IDs in `ask-ai-knowledge.ts` so retrieval can map results back to source text.

## Important security notes

Never put an API key in React code or public environment variables.

The assistant is intentionally grounded only in portfolio material. It should not invent employers, achievements, metrics, salary information, client information or projects.

The API rejects oversized questions and includes a lightweight per-IP burst limit to reduce accidental quota exhaustion.

The knowledge base is public portfolio information only. Do not add private resume/source material to this file.

## Current status

- Ask Harshit AI UI: implemented
- Portfolio knowledge chunks: implemented
- Pages Function endpoint: implemented
- Grounded generation: implemented when Workers AI binding is available
- Semantic Vectorize retrieval: supported when Vectorize binding is available
- Vector index creation and population: requires one-time Cloudflare account setup
