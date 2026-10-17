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
  },,
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
    id: "cbr-outcome-interpretation",
    title: "Credit Balance Refund — how to explain business value",
    section: "Professional experience · Outcome interpretation",
    text:
      "The business value of Credit Balance Refund automation can be explained through three dimensions: scale (about 350K annual UK proactive and reactive cases in the cited launch announcement), automation (about 60% reported automation versus a prior level around 1–2%), and capacity (about 18 annualized FTE savings reported). Present these as initiative-level results from a launch announcement, not as a causal result personally delivered by Harshit. Harshit’s own contribution should be described separately in terms of product workflow understanding, requirement and scenario validation, UAT, exception coverage and launch readiness where relevant.",
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
    id: "cbr-metrics-geography-guardrail",
    title: "CBR metric geography and attribution guardrail",
    section: "Grounding · Metrics",
    text:
      "Use the CBR automation figures only with their correct context: a GS Automation Acceleration launch announcement for UK proactive and reactive Credit Balance Refunds reported about 60% automation, around 350K annual case volume, and around 18 annualized FTE savings, with automation rising from roughly 1–2% to roughly 60%. Other CBR launch context mentioned France, Germany and Austria. Do not merge geographies or imply the UK announcement metrics apply to every country. Describe the figures as reported program outcomes, not Harshit’s individual measured impact.",
  },
];
