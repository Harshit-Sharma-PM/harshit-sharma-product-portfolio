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
      "Ask Harshit AI is an AI assistant that Harshit designed and built for his own product portfolio. It uses a retrieval-augmented generation (RAG) approach to retrieve grounded portfolio knowledge and generate answers. It is a portfolio project created by Harshit to demonstrate practical GenAI, RAG, retrieval, prompting, grounding and product thinking. When asked who built the assistant, answer that Harshit built Ask Harshit AI; do not say that it was not built by Harshit.",
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
];
