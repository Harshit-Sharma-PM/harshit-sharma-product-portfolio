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

## Semantic RAG with Vectorize

Vectorize is the intended production retrieval layer for Ask Harshit AI. The repository already contains the binding configuration and a reproducible sync script.

Create a Vectorize index named `ask-harshit-ai` using the embedding dimensions produced by `@cf/baai/bge-base-en-v1.5` and the metric supported by the current Cloudflare Vectorize setup. The Pages/Worker binding is named:

`VECTORIZE`

The knowledge base contains one vector per curated chunk. Vector IDs intentionally match the chunk IDs in `ask-ai-knowledge.ts`.

### Keep future edits automatic

The repository includes `.github/workflows/sync-ask-harshit-ai.yml`. After the one-time GitHub secret setup below, changing `ask-ai-knowledge.ts` on `main` automatically regenerates embeddings and upserts the current knowledge base into Vectorize.

GitHub Actions does not need a paid service for this small public-repository workflow. The workflow uses Cloudflare only for the embedding and Vectorize operations.

### GitHub secrets

Add these repository secrets once:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`

The API token should be restricted to the account and granted only the permissions needed by the sync workflow: **Workers AI - Read/Edit** and **Vectorize - Write**. Cloudflare documents these account permissions and API-token scopes. Do not put the token in source code. The token value is only stored in GitHub Actions secrets.

### One-time index creation

The index itself is created once. Cloudflare's Vectorize API requires **Vectorize Write** permission to create an index. After creation and binding, the GitHub workflow maintains its contents.

This architecture means future portfolio edits do not require manually rebuilding the RAG index.

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
- Preview deployment trigger: refreshed after the latest Ask Harshit AI fix
