export type KnowledgeChunk = {
  id: string;
  title: string;
  section?: string;
  text: string;
};

export const askHarshitKnowledge: KnowledgeChunk[] = [
  {
    id: "profile-overview",
    title: "Portfolio profile",
    section: "Overview",
    text:
      "Harshit Sharma is a product professional focused on digital products, financial services, customer operations, workflow and case management, GenAI and automation. His portfolio positions him for Product Manager and Product Owner roles across internal platforms, operations platforms, customer servicing, workflow platforms, enterprise applications and related BFSI operations products.",
  },
  {
    id: "amex-product-work",
    title: "American Express experience",
    section: "Product work",
    text:
      "At American Express, Harshit works in Associate Digital Product Management on digital products and operational workflows. His work includes requirements discovery, workflow design, stakeholder alignment, backlog refinement, UAT and release readiness. CLIC is a global case-management platform supporting customer servicing workflows. Credit Balance Refund (CBR), App Controls and Dispute Payment Management (DPM) are important examples within his broader work.",
  },
  {
    id: "cbr",
    title: "Credit Balance Refund (CBR)",
    section: "Product area",
    text:
      "CBR is a credit balance refund workflow. Harshit’s portfolio describes contribution across requirements, workflow understanding, validation, exception scenarios and launch readiness. The flow includes identifying credit balances, eligibility checks, bank or direct-debit validation, due-diligence and exception handling, followed by refund processing. The portfolio references launches across France, Germany and Austria.",
  },
  {
    id: "saarthi",
    title: "Saarthi AI",
    section: "0 → 1 AI Product Case Study",
    text:
      "Saarthi AI is an individual 0→1 product case study: a voice-first financial companion intended to make pensions, government schemes, banking procedures and fraud awareness easier to understand for elderly Indians. Harshit developed the concept, PRD, product strategy, MVP definition, user journeys, interactive prototype and proposed responsible AI direction. The proposed architecture uses RAG, specialist agents, orchestration, validation and human escalation. It is presented as concept and prototype work; live account or pension integrations are not claimed.",
  },
  {
    id: "saarthi-ai-architecture",
    title: "Saarthi AI AI architecture",
    section: "AI architecture",
    text:
      "The proposed Saarthi AI workflow is: language detection, question, intent identification, knowledge retrieval, generated response, voice delivery, and escalation when unresolved. Specialist capabilities include language, intent, knowledge, scheme, fraud and escalation agents coordinated by an orchestrator. The RAG layer is intended to retrieve from institution-approved information with freshness checks and grounding before response generation.",
  },
  {
    id: "skills",
    title: "Skills and tools",
    section: "Skills",
    text:
      "Portfolio skills include product lifecycle, product strategy, prioritization, roadmapping, user journeys, MVP design, PRDs, business requirements, user stories, acceptance criteria, workflow and case management, process mapping, gap analysis, stakeholder alignment, Agile and Scrum, backlog refinement, sprint planning, UAT and quality, regression testing, root-cause analysis, Excel, reporting, workflow automation, GenAI, prompt engineering, Agentic AI, multi-agent systems, RAG fundamentals, Jira, Confluence, Rally and Figma.",
  },
  {
    id: "education",
    title: "Education",
    section: "Education",
    text:
      "Harshit studied BA Economics at Delhi University and completed a BITS School of Management program in Product Management with Generative and Agentic AI.",
  },
  {
    id: "working-style",
    title: "Product thinking",
    section: "Reflection",
    text:
      "Harshit’s portfolio emphasizes starting from the human or operational problem rather than the technology, treating trust and safety as product requirements, using architecture to manage risk, and treating distribution as part of the product.",
  },
];
