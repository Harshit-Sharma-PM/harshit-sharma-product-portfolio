# Harshit Sharma — Product Management Portfolio

**Product management • Workflow platforms • AI product experimentation**

This repository contains the source code for my product portfolio: a public-facing portfolio experience and an independently built AI assistant that helps visitors explore the work through evidence-grounded answers.

- **Live portfolio:** https://harshit-sharma-product-portfolio.pages.dev
- **Primary case study:** Saarthi AI — a voice-first financial-inclusion concept for older adults in India
- **Technical product build:** Ask Harshit AI — a portfolio-specific Retrieval-Augmented Generation (RAG) assistant

## What this project demonstrates

- **Product thinking:** framing a user problem, defining requirements, and making explicit scope and trade-off decisions.
- **Workflow and systems thinking:** mapping how user input moves through an interface, server-side orchestration, retrieval, and response generation.
- **AI product implementation:** integrating embeddings, semantic retrieval, an API endpoint, and a language model.
- **Reliability and evaluation:** maintaining curated knowledge, automating index updates, and running a saved-question regression suite.
- **Iteration:** using observed failures to improve intent handling, source relevance, and the clarity of product boundaries.

This is a personal portfolio project. It is not presented as a production-scale commercial deployment or as evidence of measured hiring-conversion impact.

## Featured work

### Saarthi AI — financial inclusion concept

A voice-first assistant concept intended to help older adults in India navigate financial information, government schemes, and fraud-awareness guidance. The case study documents the problem framing, proposed experience, and product decisions.

### Ask Harshit AI — grounded portfolio assistant

A working portfolio-specific assistant designed to help visitors find information without searching every page manually.

**High-level request flow**

`Visitor question → API orchestration → BGE-small embedding → Cloudflare Vectorize retrieval → grounded LLM response`

A separate knowledge-indexing workflow chunks and embeds curated portfolio content and updates the vector index. GitHub Actions workflows support index synchronization and repeatable regression evaluation.

**Evaluation note:** the saved evaluation suite checks expected answer signals and source behavior. Automated keyword checks alone do not establish factual correctness. Human review is required, and pass rates should only be reported for a verified run.

## Repository layout

- `artifacts/harshit-portfolio/` — portfolio web application, case studies, assistant UI, and curated assistant knowledge
- `functions/api/ask-harshit.ts` — server-side assistant endpoint
- `.github/workflows/` — knowledge-index synchronization and evaluation workflows
- `scripts/` — evaluation and supporting scripts
- `ASK_HARSHIT_AI_SETUP.md` — setup notes for the assistant

## Tech stack

- React, TypeScript, Vite
- Cloudflare Pages Functions and Cloudflare Vectorize
- BGE-small embeddings and Retrieval-Augmented Generation (RAG)
- GitHub Actions for repeatable workflows

## Run locally

This repository uses a pnpm workspace. With a compatible Node.js version and pnpm installed:

```bash
pnpm install
pnpm --filter @workspace/harshit-portfolio dev
```

Follow the setup notes in `ASK_HARSHIT_AI_SETUP.md` for assistant-specific environment configuration. Live AI responses and vector retrieval require the appropriate Cloudflare bindings and secrets; the portfolio UI can be explored separately from that backend setup.

To build the workspace:

```bash
pnpm build
```

## How to review this repository

1. Visit the [live portfolio](https://harshit-sharma-product-portfolio.pages.dev).
2. Read the [Ask Harshit AI case study](https://harshit-sharma-product-portfolio.pages.dev) and review the architecture, product decisions, trade-offs, and evaluation limitations.
3. Browse the implementation under `artifacts/harshit-portfolio/src/` and the API endpoint under `functions/api/`.
4. Review the GitHub Actions workflows to see how indexing and evaluation are intended to be repeated.

## Contact

For product management opportunities and professional conversations, please use the contact links on my [portfolio website](https://harshit-sharma-product-portfolio.pages.dev).
