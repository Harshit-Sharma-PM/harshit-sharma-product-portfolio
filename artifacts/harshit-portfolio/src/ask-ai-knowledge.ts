export type KnowledgeChunk = {
  id: string;
  title: string;
  section?: string;
  text: string;
};

export const askHarshitKnowledge: KnowledgeChunk[] = [
  {
    id: "ask-harshit-ai-built",
    title: "Ask Harshit AI — built by Harshit",
    section: "AI portfolio project",
    text:
      "Ask Harshit AI is an AI assistant that Harshit Sharma designed and built for his own product portfolio. It uses a retrieval-augmented generation (RAG) approach to retrieve grounded portfolio knowledge and generate answers. It is a portfolio project created by Harshit to demonstrate practical GenAI, RAG, retrieval, prompting, grounding and product thinking.",
  },
  {
    id: "ask-harshit-ai-purpose",
    title: "Ask Harshit AI — product purpose",
    section: "AI portfolio project",
    text:
      "Harshit built Ask Harshit AI to make his portfolio interactive and easier to explore. Instead of requiring a visitor to navigate every section manually, the assistant lets recruiters, hiring managers and other visitors ask natural questions about his experience, products, case studies, skills and product thinking. The product goal is to provide useful answers while staying grounded in portfolio evidence.",
  },
  {
    id: "ask-harshit-ai-architecture",
    title: "Ask Harshit AI — technical architecture",
    section: "AI portfolio project",
    text:
      "Ask Harshit AI uses a RAG architecture. The portfolio knowledge is stored as structured knowledge chunks and indexed as vector embeddings. A user question is embedded with BGE-small, relevant evidence is retrieved from Cloudflare Vectorize, and GLM-4.7-Flash generates the response from the retrieved evidence. The assistant also uses lexical retrieval and conversation context to improve retrieval reliability.",
  },
  {
    id: "ask-harshit-ai-conversation",
    title: "Ask Harshit AI — conversational retrieval",
    section: "AI portfolio project",
    text:
      "Ask Harshit AI is designed to support natural follow-up questions. Conversation history can be used to resolve references such as 'it', 'that product', 'he', 'his', and 'you' before retrieving portfolio evidence. The assistant should understand that 'you' can refer to Ask Harshit AI and 'he' can refer to Harshit when the conversation establishes those references. The rewritten retrieval query is used only to find evidence; factual answers still come from portfolio knowledge.",
  },
  {
    id: "ask-harshit-ai-grounding",
    title: "Ask Harshit AI — grounding and guardrails",
    section: "AI portfolio project",
    text:
      "Ask Harshit AI is intended to answer from verified portfolio evidence rather than general model knowledge. It distinguishes professional experience from case-study and prototype work, avoids inventing unsupported employers or responsibilities, and should acknowledge when the portfolio does not contain enough evidence. Visitor identity is not inferred from the portfolio: when a visitor asks 'who am I?', the assistant should explain that it does not know the visitor personally.",
  },
  {
    id: "ask-harshit-ai-iterations",
    title: "Ask Harshit AI — product iterations",
    section: "AI portfolio project",
    text:
      "The assistant evolved through product iterations: an initial RAG implementation exposed retrieval collisions between similarly worded portfolio topics; semantic retrieval was strengthened with lexical evidence and topic boundaries; conversational follow-up handling was then introduced so natural references can be resolved before retrieval. These iterations are part of the product learning story.",
  },
  {
    id: "profile-overview",
    title: "Portfolio profile",
    section: "Overview",
    text:
      "Harshit Sharma is a product professional focused on digital products, financial services, customer operations, workflow and case management, GenAI and automation. His portfolio is oriented toward Product Manager and Product Owner roles involving internal platforms, operations platforms, customer servicing, workflow platforms, enterprise applications and BFSI operations.",
  },
  {
    id: "pm-positioning",
    title: "Product Manager profile",
    section: "Product positioning",
    text:
      "Harshit’s product profile is strongest around complex operational environments in financial services. His portfolio emphasizes solving the human or operational problem first, understanding workflows and case management, treating trust and safety as product requirements, and using technology and architecture to manage risk.",
  },
  {
    id: "amex-role",
    title: "American Express — product role",
    section: "Professional experience",
    text:
      "At American Express, Harshit works in Associate Digital Product Management. His work is focused on digital products and operational workflows supporting financial-services and customer-servicing processes.",
  },
  {
    id: "amex-responsibilities",
    title: "American Express — product responsibilities",
    section: "Professional experience",
    text:
      "Harshit’s portfolio describes product responsibilities including requirements discovery, workflow design, stakeholder alignment, backlog refinement, UAT and release readiness. These responsibilities place him across discovery, delivery and validation rather than only one stage of the product lifecycle.",
  },
  {
    id: "clic",
    title: "CLIC case-management platform",
    section: "Professional experience",
    text:
      "CLIC is an internal case-management application used by front-line colleagues for customer and card-member servicing workflows, including cases such as disputes, payments and profile updates. It is an important example of the type of internal operational product and workflow environment Harshit works around at American Express.",
  },
  {
    id: "cbr-overview",
    title: "Credit Balance Refund (CBR)",
    section: "Professional experience",
    text:
      "Credit Balance Refund (CBR) is a credit balance refund workflow. Harshit’s portfolio describes contribution across requirements, workflow understanding, validation, exception scenarios and launch readiness. The portfolio uses the expansion Credit Balance Refund; do not reinterpret CBR as another product name.",
  },
  {
    id: "cbr-flow",
    title: "Credit Balance Refund — workflow",
    section: "Professional experience",
    text:
      "The CBR workflow includes identifying credit balances, eligibility checks, bank or direct-debit validation, due-diligence and exception handling, followed by refund processing. The portfolio references launches across France, Germany and Austria.",
  },
  {
    id: "app-controls",
    title: "App Controls",
    section: "Professional experience",
    text:
      "App Controls is one of the digital-product areas included in Harshit’s broader American Express product work. The portfolio presents it alongside CLIC, Credit Balance Refund and Dispute Payment Management as examples of his product experience.",
  },
  {
    id: "dpm",
    title: "Dispute Payment Management (DPM)",
    section: "Professional experience",
    text:
      "Dispute Payment Management (DPM) is another digital-product area included in Harshit’s American Express product experience. The portfolio presents it as part of his broader work across customer-servicing and operational workflows.",
  },
  {
    id: "clic-involvement",
    title: "CLIC — Harshit’s involvement",
    section: "Professional experience",
    text:
      "Harshit’s CLIC involvement is connected to customer-servicing workflows and UAT in the staging environment. His portfolio experience includes working with CBR workflows in CLIC, validating application controls, using feed files and scheduled jobs for test scenarios, checking case-generation outcomes and validating relevant ELF logs. He also works with front-line colleague case workflows. The portfolio should describe this as product/UAT involvement rather than claiming ownership of the entire CLIC platform.",
  },
  {
    id: "product-areas",
    title: "Key product areas",
    section: "Professional experience",
    text:
      "Key product areas represented in Harshit’s portfolio are CLIC case-management workflows, Credit Balance Refund (CBR), App Controls and Dispute Payment Management (DPM). CLIC is the internal case-management application/environment; CBR, App Controls and DPM are product areas within his American Express experience.",
  },
  {
    id: "saarthi-overview",
    title: "Saarthi AI — case study",
    section: "0 → 1 AI Product Case Study",
    text:
      "Saarthi AI is Harshit’s individual 0→1 product case study. It is a voice-first financial companion intended to make pensions, government schemes, banking procedures and fraud awareness easier to understand for elderly Indians. It is concept and prototype work, not a claimed production product.",
  },
  {
    id: "saarthi-product",
    title: "Saarthi AI — product work",
    section: "0 → 1 AI Product Case Study",
    text:
      "For Saarthi AI, Harshit developed the concept, PRD, product strategy, MVP definition, user journeys and interactive prototype, along with a proposed responsible-AI direction. The product is designed around elderly users who may benefit from voice-first and easier-to-understand financial guidance.",
  },
  {
    id: "saarthi-architecture",
    title: "Saarthi AI — AI architecture",
    section: "AI architecture",
    text:
      "The proposed Saarthi AI workflow is language detection, question, intent identification, knowledge retrieval, generated response, voice delivery and escalation when unresolved. Specialist capabilities include language, intent, knowledge, scheme, fraud and escalation agents coordinated by an orchestrator.",
  },
  {
    id: "saarthi-rag",
    title: "Saarthi AI — RAG and grounding",
    section: "AI architecture",
    text:
      "The proposed Saarthi AI RAG layer is intended to retrieve institution-approved information with freshness checks and grounding before response generation. Human escalation is part of the proposed design when the assistant cannot confidently resolve a request.",
  },
  {
    id: "skills-product",
    title: "Product skills",
    section: "Skills",
    text:
      "Harshit’s portfolio lists product lifecycle, product strategy, prioritization, roadmapping, user journeys, MVP design, PRDs, business requirements, user stories, acceptance criteria, workflow and case management, process mapping, gap analysis, stakeholder alignment, Agile and Scrum, backlog refinement, sprint planning, UAT and quality, regression testing and root-cause analysis.",
  },
  {
    id: "skills-ai",
    title: "AI and automation skills",
    section: "Skills",
    text:
      "Harshit’s portfolio lists GenAI, prompt engineering, Agentic AI, multi-agent systems, RAG fundamentals and workflow automation among his AI and automation skills.",
  },
  {
    id: "skills-tools",
    title: "Product tools",
    section: "Skills",
    text:
      "Tools listed in Harshit’s portfolio include Jira, Confluence, Rally and Figma, along with Excel and reporting capabilities.",
  },
  {
    id: "product-thinking",
    title: "Product thinking",
    section: "Product philosophy",
    text:
      "Harshit’s portfolio emphasizes starting from the human or operational problem rather than the technology, treating trust and safety as product requirements, using architecture to manage risk, and treating distribution as part of the product.",
  },
  {
    id: "education",
    title: "Education",
    section: "Education",
    text:
      "Harshit studied BA Economics at Delhi University and completed a BITS School of Management program in Product Management with Generative and Agentic AI. This is the education background represented in his portfolio.",
  },
  {
    id: "amex-product-management-contribution",
    title: "American Express — product management contribution and scope",
    section: "Professional experience · Product delivery",
    text:
      "Harshit’s American Express experience is product-driven and sits across understanding operational workflows, clarifying requirements, validating product behavior, identifying edge cases, supporting UAT, defect triage and retesting, and helping establish release readiness. His current role is Associate Digital Product Management. He works around internal products used by front-line colleagues, especially case-management and customer-servicing workflows. Describe his role as contributing to product discovery and delivery through workflow understanding, requirement validation, quality and launch readiness; do not imply he owns the entire platform or every stage of delivery.",
  },
  {
    id: "amex-product-technical-bridge",
    title: "Product management meets technical architecture at American Express",
    section: "Professional experience · Product and engineering collaboration",
    text:
      "Harshit’s product-oriented technical understanding includes following a requirement through the delivery lifecycle: business requirement, user story, test data, test scenario, execution, defect logging, retest and sign-off. In internal case-management workflows, validation can involve staging environments, feed files, scheduled jobs, API-dependent outcomes and observability logs. His value is connecting the intended business behavior to testable acceptance outcomes, identifying edge cases and communicating defects clearly to engineering and business stakeholders. Do not claim software engineering ownership or professional SQL/data-analysis work unless separately confirmed for the specific answer.",
  },
  {
    id: "cbr-business-outcomes",
    title: "Credit Balance Refund — reported automation business outcomes",
    section: "Professional experience · Business impact",
    text:
      "A GS Automation Acceleration launch announcement for UK proactive and reactive Credit Balance Refund (CBR) reported approximately 60% automation, approximately 350,000 annual cases, and approximately 18 FTE in annualized savings. The announcement described automation increasing from approximately 1–2% to around 60%. These figures describe the broader initiative and its reported business outcomes; they are not an individually attributable impact metric for Harshit. Preserve the UK scope when using these numbers. Do not assign these figures to the separate France, Germany and Austria launch context without evidence.",
  },

  {
    id: "cbr-product-workflow",
    title: "Credit Balance Refund — workflow and product validation",
    section: "Professional experience · Product workflow",
    text:
      "Credit Balance Refund (CBR) is an operational workflow that can include credit-balance identification, eligibility checks, bank or direct-debit validation, due-diligence and exception handling, and refund processing. Harshit’s relevant product/UAT context includes understanding the workflow, validating expected outcomes and exceptions in staging, supporting app-control requirements, and checking case-generation behavior and observability logs where applicable. Engineering teams may generate large feed files to exercise eligibility scenarios; this should be framed as test-scenario validation, not as Harshit building the underlying production integrations.",
  },
  {
    id: "clic-bi-case-elimination",
    title: "CLIC — BI case elimination and inventory governance",
    section: "Professional experience · Product problem solving",
    text:
      "BI case elimination addressed draft or incomplete cases created in CLIC that could create inventory-governance issues. These intermediate cases could lack clear ownership and create operational risk, with possible downstream financial, regulatory or customer impact. The product direction was to define workflow rules that prevent incomplete or invalid submissions from creating unnecessary BI cases, improving case quality and inventory governance. When discussing Harshit’s involvement, focus on understanding the operational problem, validating workflow behavior and checking that incomplete submissions do not create unwanted cases; do not invent quantified savings or claim sole ownership of the solution.",
  },
  {
    id: "clic-observability-validation",
    title: "CLIC — validation, integrations and observability",
    section: "Professional experience · Technical product understanding",
    text:
      "In the CLIC and Credit Balance Refund context, product validation can span staging workflows, application controls, generated feed files, scheduled processing and logs in the ELF observability platform. API integrations and automated screening may participate in the wider refund workflow. The product-management value is to connect requirements to observable outcomes, cover exception paths, use evidence to investigate unexpected behavior, and communicate actionable defects. Avoid claiming Harshit personally built the APIs, integrations, screening services or observability platform.",
  },
  {
    id: "product-impact-evidence",
    title: "How Harshit frames product impact credibly",
    section: "Product philosophy · Evidence-led communication",
    text:
      "Harshit’s product narrative separates three things: (1) his own contribution, such as workflow analysis, requirement clarification, UAT, exception validation, defect triage and launch readiness; (2) the broader initiative’s business outcomes, such as the CBR launch announcement’s approximately 60% automation, 350K annual cases and 18 annualized FTE savings; and (3) proposed or unmeasured benefits, which must be labeled as hypotheses or targets. Do not turn a team or program outcome into a personal achievement, imply causality without evidence, or invent impact metrics for App Controls, DPM, CLIC or BI case elimination.",
  },
  {
    id: "product-manager-interview-narrative",
    title: "Product Manager interview narrative — operational products",
    section: "Product positioning · Interview support",
    text:
      "For Product Manager interviews, Harshit can explain his experience through a product lens: identify the operational user and pain point; map the current workflow and failure states; translate requirements into testable acceptance criteria; align business intent with engineering implementation; validate happy paths and exceptions; use defects and logs to understand gaps; and support launch readiness. His strongest examples involve internal platforms, case management, customer servicing, CBR workflow validation, application controls and BI case elimination. Be precise about his level of ownership and distinguish operational product experience from his individual AI case-study/prototype work.",
  },
  {
    id: "professional-work-vs-case-studies",
    title: "Professional work versus individual AI case studies",
    section: "Grounding and credibility",
    text:
      "Keep professional American Express product/UAT experience separate from individual portfolio case studies. CLIC, Credit Balance Refund, App Controls, Dispute Payment Management and BI case elimination are professional-work contexts. Ask Harshit AI is an individual portfolio assistant build. Saarthi AI is an individual 0-to-1 concept and prototype supported by product strategy, PRD, MVP definition, user journeys and proposed AI architecture; it is not a claimed production launch. Do not present prototype assumptions or proposed architecture as measured production outcomes.",
  },

{
    id: "ask-harshit-case-study-user-problem",
    title: "Ask Harshit AI case study — user problem and job to be done",
    section: "Ask Harshit AI · Product strategy",
    text:
      "Ask Harshit AI addresses information-discovery friction in a static product portfolio. Recruiters, hiring managers and product leaders may want specific details about Harshit's experience, product decisions, technical understanding or case studies without manually scanning every page. The product hypothesis is that a portfolio-specific conversational assistant grounded in curated evidence can make relevant information easier to discover. The core job to be done is: when evaluating a candidate, help me quickly find specific, relevant evidence about their experience and projects so I can make a better-informed assessment. This is a hypothesis to validate, not a proven increase in recruiter conversion or hiring outcomes.",
  },
  {
    id: "ask-harshit-case-study-online-architecture",
    title: "Ask Harshit AI case study — online RAG architecture",
    section: "Ask Harshit AI · Architecture",
    text:
      "The documented online Ask Harshit AI flow is: visitor submits a question in the React and Vite interface; the frontend calls the server-side POST /api/ask-harshit endpoint; the backend validates and embeds the question using BGE-small; Cloudflare Vectorize retrieves semantically relevant knowledge chunks; the backend assembles the question and retrieved evidence into a prompt; the configured language model generates a natural-language response; the API returns a response for the interface to render. Vectorize performs retrieval, not answer generation. The language model generates the response, and its factual reliability depends in part on the evidence retrieved and the instructions provided.",
  },
  {
    id: "ask-harshit-case-study-indexing-pipeline",
    title: "Ask Harshit AI case study — offline knowledge indexing",
    section: "Ask Harshit AI · Data pipeline",
    text:
      "The offline indexing workflow imports curated KnowledgeChunk records from the version-controlled ask-ai-knowledge.ts file. For each chunk, the sync script embeds the chunk title, section and text with Cloudflare Workers AI BGE-small, validates that the vector has 384 dimensions, attaches the title, section and text as metadata, and upserts the vectors into the Cloudflare Vectorize index named ask-harshit-ai using newline-delimited JSON. A GitHub Actions workflow is configured to run the sync on changes to the knowledge source when those changes reach a configured trigger branch, and can also be manually dispatched. Editing the TypeScript knowledge file alone does not update the live index; the sync job must complete successfully. Never claim an upsert succeeded without checking the workflow result.",
  },
  {
    id: "ask-harshit-case-study-architecture-tradeoffs",
    title: "Ask Harshit AI case study — architecture decisions and trade-offs",
    section: "Ask Harshit AI · Technical product decisions",
    text:
      "Ask Harshit AI uses RAG rather than fine-tuning because portfolio facts change and should be updated independently of model parameters. BGE-small provides compact 384-dimensional text embeddings; Cloudflare Vectorize stores and searches the embeddings; a server-side Pages Function coordinates request validation, retrieval and generation; GitHub Actions makes indexing repeatable. These choices aim to keep the implementation lightweight and cost-conscious. Trade-offs remain: semantic similarity can retrieve the wrong fact, a stale index can disagree with the source file, model responses can still hallucinate, serverless execution has platform limits, and each integration introduces a potential failure point. These are architectural trade-offs, not proof that every failure mode has been eliminated.",
  },
  {
    id: "ask-harshit-case-study-iteration-learning",
    title: "Ask Harshit AI case study — retrieval and intent iteration",
    section: "Ask Harshit AI · Iteration",
    text:
      "A retrieval-quality issue occurred when a question about who built the assistant could retrieve related material about Saarthi AI instead of the assistant's authorship. This showed that semantic similarity is not the same as intent correctness. The implementation includes a dedicated authorship-intent rule and combines semantic retrieval with lexical evidence and topic boundaries. Visitor identity is handled separately: the assistant should not infer who a visitor is personally. These code paths still require regression testing; do not claim a measured accuracy improvement without evaluation results.",
  },
  {
    id: "ask-harshit-case-study-api-contracts",
    title: "Ask Harshit AI case study — API contracts and failure boundaries",
    section: "Ask Harshit AI · API integration",
    text:
      "The frontend and backend are separated by a server-side POST /api/ask-harshit endpoint. The backend is responsible for request validation and orchestration across embedding, vector retrieval, prompt construction and language-model generation. Important contracts include valid request shape, acceptable question length, the 384-dimensional embedding expected by the vector index, metadata containing retrievable text, and a response shape the frontend can render. Potential failures include malformed input, embedding failure, vector search failure, empty or irrelevant retrieval, generation timeout and malformed output. Good product behavior requires graceful errors and diagnosable stages rather than treating the workflow as one opaque AI call. Example request and response payloads in the case study are illustrative unless explicitly captured from the live endpoint.",
  },
  {
    id: "ask-harshit-case-study-evaluation-plan",
    title: "Ask Harshit AI case study — evaluation and success metrics",
    section: "Ask Harshit AI · Measurement",
    text:
      "Ask Harshit AI has a repeatable GitHub Actions regression evaluation with 32 saved question cases: the original 31-case baseline plus a CLIC contribution case added to check product execution, requirements, workflow analysis, BI case elimination and inventory-governance framing. The script sends questions sequentially to the deployed /api/ask-harshit endpoint and checks HTTP/request failures, expected answer signals, forbidden phrases, expected source titles and unexpected sources for abstention cases. It also reports end-to-end request latency and available Server-Timing stage summaries. The most recent known baseline before the additional CLIC case passed 31/31; that result does not establish the status of the current 32-case suite until it is rerun. Automated keyword/source checks are regression signals, not proof of factual correctness or entailment; cases flagged for manual review still need human judgement. A proposed target of at least 90% grounded-answer correctness remains an acceptance criterion to test, not an achieved result. Cost per 100 questions has not been measured and must be estimated from usage/billing data, not inferred from latency. Track critical unsupported claims separately.",
  },
  {
    id: "ask-harshit-case-study-product-contribution",
    title: "Ask Harshit AI case study — product management contribution",
    section: "Ask Harshit AI · Product leadership",
    text:
      "The product-management contribution in Ask Harshit AI is to define the user problem and intended audience, formulate the product hypothesis, translate it into prioritized requirements, choose a lightweight architecture that fits the use case and cost constraints, understand service boundaries and data contracts, investigate retrieval and ingestion failures, and define an evidence-based evaluation plan. The story should emphasize decisions and reasoning: why grounded portfolio retrieval matters, why knowledge updates should be separate from model training, why retrieval and generation must be evaluated independently, and why targets must be separated from achieved outcomes. It is an individual portfolio build and learning project, not an enterprise production deployment or a claim of training a foundation model from scratch.",
  },
{
    id: "ask-harshit-vectorize-ingestion-incident",
    title: "Ask Harshit AI — Vectorize ingestion incident",
    section: "Ask Harshit AI · Reliability",
    text:
      "During knowledge indexing, a Cloudflare Vectorize upsert payload format mismatch produced error 40023. The ingestion request was changed to newline-delimited JSON (NDJSON). The sync script validates that each BGE-small embedding has 384 dimensions, includes the chunk ID and metadata, logs per-chunk progress, and reports a successful upsert only after the Cloudflare API call completes. This ingestion incident is separate from retrieval-quality issues. Do not conflate the NDJSON format fix with authorship-question retrieval, and do not claim the ingestion workflow guarantees answer correctness.",
  },
  {
    id: "ask-harshit-case-study-roadmap-and-feature-boundaries",
    title: "Ask Harshit AI — limitations and prioritized product roadmap",
    section: "Ask Harshit AI · Roadmap",
    text:
      "Current documented capabilities include portfolio-grounded RAG, BGE-small query embeddings, Cloudflare Vectorize semantic retrieval, lexical retrieval, topic-boundary filtering, follow-up query resolution, dedicated handling for visitor identity and assistant authorship, source-title display, a GitHub Actions knowledge-index sync, and a manually triggered GitHub Actions regression evaluator with 32 saved question cases (31 baseline cases plus a CLIC contribution coverage case). The evaluator checks expected signals, forbidden phrases, source titles, request failures and available latency instrumentation; it does not prove factual correctness or entailment. The latest known baseline result before the CLIC case was added was 31/31 passed, so the updated suite must be rerun before stating its current pass rate. Not established as implemented features are autonomous tool use, multi-step actions on behalf of visitors, a human-judged grounded-answer benchmark, a production analytics dashboard, or measured cost-per-100-question reporting. Do not introduce feature names or capabilities that are absent from verified product evidence. Prioritized next steps are: (1) rerun the full 32-case suite and review flagged answers; (2) sample passing answers and add human-judged groundedness checks for critical claims; (3) use failures to improve retrieval, prompts or routing; (4) track end-to-end latency and API failures across runs; (5) estimate cost using Cloudflare AI usage and billing data rather than guessing from response payloads; and (6) consider tool use only if a validated user need justifies its cost and risk. The proposed target of at least 90% grounded-answer correctness is a target to test, not a measured result.",
  },
];
