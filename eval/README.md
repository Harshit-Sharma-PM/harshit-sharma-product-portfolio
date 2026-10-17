# Ask Harshit AI evaluation

This folder contains a manually labeled regression set for the public Ask Harshit AI endpoint.

## Run after deployment

From the repository root, with Node.js 20 or later:

```bash
node scripts/evaluate-ask-harshit.mjs
```

Optional environment variables:

- `ASK_HARSHIT_EVAL_URL`: override the endpoint, for example a preview URL.
- `ASK_HARSHIT_EVAL_DELAY_MS`: delay between requests; default is 6500ms to reduce the chance of hitting the endpoint's rate limit.

The script runs sequentially, prints pass/fail results, and writes `ask-harshit-eval-report.json` in the current directory. Do not commit the generated report unless you intend to retain that test run.

## What the automated checks measure

- HTTP failures and response latency.
- Presence of expected keywords.
- Absence of selected high-risk unsupported claims.
- Whether a relevant source title was returned.

These checks are regression signals only. They do **not** prove that an answer is factually correct, that every claim is entailed by the retrieved evidence, or that a source is the best possible source. Every case is flagged for manual review. Review all failures and sample passing answers.

## Metrics that require separate work

- **Grounded correctness:** human review or a separately validated evaluator against the retrieved evidence.
- **Retrieval relevance:** inspect returned source titles/chunks against expected evidence for each question.
- **Abstention quality:** review questions whose answers are intentionally absent from the knowledge base.
- **End-to-end latency:** the script reports request latency, including generation and network time, as a practical user-visible proxy.
- **API failure rate:** count HTTP/network errors in the report.
- **Cost per 100 questions:** use Cloudflare AI usage/billing data and a defined representative workload. Do not estimate cost from latency or token assumptions alone.

The proposed target of at least 90% grounded-answer correctness is a future acceptance criterion, not a reported achievement.
