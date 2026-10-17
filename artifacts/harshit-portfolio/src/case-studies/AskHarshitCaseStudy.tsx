import type { ReactNode } from 'react';
import { Link } from 'wouter';
import { ThemeToggle } from '../components/ThemeToggle';
import { CaseStudyNavMenu } from '../components/CaseStudyNavMenu';
import './AskHarshitCaseStudy.css';

const stages = [
  { title: 'Portfolio visitor', detail: 'Natural-language question', kind: 'user' },
  { title: 'React + Vite UI', detail: 'Input, loading, answer and source rendering', kind: 'app' },
  { title: 'Cloudflare Pages Function', detail: 'POST /api/ask-harshit · validation and orchestration', kind: 'api' },
  { title: 'BGE-small embeddings', detail: 'Question → 384-dimensional vector', kind: 'model' },
  { title: 'Cloudflare Vectorize', detail: 'Semantic search over indexed knowledge chunks', kind: 'data' },
  { title: 'Grounded LLM response', detail: 'Retrieved evidence → prompt → answer', kind: 'model' },
];

const metrics = [
  { title: 'Retrieval relevance', description: 'Do the retrieved chunks support the question?' },
  { title: 'Grounded correctness', description: 'Are factual claims supported by verified portfolio content?' },
  { title: 'Abstention quality', description: 'Does the assistant acknowledge missing evidence?' },
  { title: 'Intent-routing accuracy', description: 'Does it distinguish creator, visitor and project questions?' },
  { title: 'End-to-end latency', description: 'How long does the complete user-visible response take?' },
  { title: 'Cost per 100 questions', description: 'What does a representative workload consume?' },
];

function Section({ id, number, label, children, tone = '' }: {
  id?: string;
  number: string;
  label: string;
  children: ReactNode;
  tone?: string;
}) {
  return (
    <section id={id} className={`ahi-section ${tone}`}>
      <div className="wrap ahi-section-grid">
        <aside className="ahi-side"><div className="num">{number}</div><p>{label}</p></aside>
        <div className="ahi-section-content">{children}</div>
      </div>
    </section>
  );
}

export function AskHarshitCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <nav className="topbar case-study-topbar" aria-label="Case study navigation">
        <div className="wrap navin">
          <Link className="brand" href="/">Harshit Sharma <span>·</span> Product Portfolio</Link>
          <div className="navlinks">
            <div className="case-study-nav-primary">
              <a href="/">All work</a><a href="#problem">Problem</a><a href="#architecture">Architecture</a><a href="#iterations">Iterations</a><a href="#measurement">Measurement</a>
            </div>
            <div className="case-study-nav-theme"><ThemeToggle /></div>
          </div>
          <CaseStudyNavMenu />
        </div>
      </nav>

      <main id="main" className="ahi-case-study">
        <header className="wrap ahi-hero">
          <div className="ahi-hero-copy">
            <div className="eyebrow">AI Product Case Study · Individual initiative</div>
            <h1>Ask Harshit AI</h1>
            <p className="lead">Turning a static product portfolio into a conversational, evidence-grounded discovery experience.</p>
            <div className="ahi-tags"><span>Product strategy</span><span>RAG</span><span>API integrations</span><span>Cloud architecture</span><span>AI reliability</span></div>
            <div className="btns"><a className="btn primary" href="https://harshit-sharma-product-portfolio.pages.dev" target="_blank" rel="noopener noreferrer">Explore portfolio ↗</a><a className="btn" href="#architecture">Explore the architecture ↓</a></div>
          </div>
          <div className="ahi-hero-visual" aria-label="Illustration of a grounded portfolio assistant">
            <div className="ahi-visual-top"><span className="ahi-dot" /> ASK HARSHIT AI <span>RAG PIPELINE</span></div>
            <div className="ahi-chat-question"><small>VISITOR</small><p>How did you approach AI reliability?</p></div>
            <div className="ahi-retrieval"><span>RETRIEVAL</span><div className="ahi-retrieval-line"><i /><i /><i /></div><p>Relevant knowledge chunks selected</p></div>
            <div className="ahi-chat-answer"><small>GROUNDED RESPONSE</small><p>Use retrieved portfolio evidence, explain the trade-offs, and acknowledge what has not been validated.</p></div>
            <div className="ahi-visual-foot">QUESTION → EVIDENCE → ANSWER</div>
          </div>
        </header>

        <div className="wrap ahi-summary-strip">
          <div><span>Product</span><b>Portfolio assistant</b></div>
          <div><span>Approach</span><b>Retrieval-Augmented Generation</b></div>
          <div><span>Role</span><b>Product thinking + implementation</b></div>
          <div><span>Validation</span><b>Iterated; benchmarking next</b></div>
        </div>

        <Section id="problem" number="01 / Problem" label="Start with the user job, not the model." tone="ahi-soft">
          <h2>Help visitors find the right evidence without searching every page.</h2>
          <p className="lead">A resume and portfolio are useful, but mostly static. Recruiters and hiring managers may have specific questions about a candidate’s experience, product decisions, or technical understanding that are difficult to answer by scanning multiple sections.</p>
          <div className="ahi-card-grid">
            <article className="ahi-card"><span>01</span><h3>Discovery friction</h3><p>Relevant details are distributed across case studies, skills, and experience sections.</p></article>
            <article className="ahi-card"><span>02</span><h3>Generic AI risk</h3><p>A general chatbot can produce plausible but unsupported claims about a candidate.</p></article>
            <article className="ahi-card"><span>03</span><h3>Changing knowledge</h3><p>Portfolio facts evolve and should be updated without retraining a language model.</p></article>
          </div>
          <div className="ahi-thesis"><span>PRODUCT HYPOTHESIS</span><p>A portfolio-specific assistant grounded in curated evidence can make candidate information easier to discover while reducing unsupported answers.</p></div>
          <p className="ahi-note">This is a hypothesis to evaluate, not a claim of measured recruiter conversion or improved hiring outcomes.</p>
        </Section>

        <Section id="product-decisions" number="02 / Product decisions" label="Turn the hypothesis into explicit requirements.">
          <h2>Reliability before novelty.</h2>
          <p>The product requirements prioritize useful discovery and trustworthy answers before adding more conversational features.</p>
          <div className="ahi-requirements">
            <div><b>P0</b><section><h3>Grounded answers</h3><p>Use retrieved portfolio evidence and acknowledge when the knowledge base does not contain an answer.</p></section></div>
            <div><b>P0</b><section><h3>Controlled API boundary</h3><p>Keep retrieval and model orchestration server-side rather than exposing the workflow in browser code.</p></section></div>
            <div><b>P0</b><section><h3>Repeatable knowledge updates</h3><p>Automate embedding and vector upserts so the searchable index can follow source changes.</p></section></div>
            <div><b>P1</b><section><h3>Intent and identity handling</h3><p>Distinguish questions about the portfolio owner, the visitor, and a project.</p></section></div>
            <div><b>P1</b><section><h3>Observability</h3><p>Validate inputs, log processing stages, handle timeouts, and make failures diagnosable.</p></section></div>
          </div>
        </Section>

        <Section id="architecture" number="03 / Architecture" label="Understand every component and contract." tone="ahi-dark">
          <h2>Two pipelines, one user experience.</h2>
          <p className="lead">The architecture separates offline knowledge indexing from online question answering. This keeps content maintenance independent from runtime generation.</p>
          <div className="ahi-pipeline-label">ONLINE · QUESTION-ANSWERING PIPELINE</div>
          <div className="ahi-flow">
            {stages.map((stage, index) => <div className={`ahi-flow-stage ${stage.kind}`} key={stage.title}><span className="ahi-stage-number">{String(index + 1).padStart(2, '0')}</span><div><b>{stage.title}</b><p>{stage.detail}</p></div>{index < stages.length - 1 && <span className="ahi-flow-arrow" aria-hidden="true">↓</span>}</div>)}
          </div>
          <div className="ahi-offline">
            <div className="ahi-pipeline-label">OFFLINE · KNOWLEDGE INDEXING PIPELINE</div>
            <div className="ahi-offline-flow"><div><b>Curated knowledge</b><span>Version-controlled source</span></div><i>→</i><div><b>Chunk + embed</b><span>BGE-small · 384 dimensions</span></div><i>→</i><div><b>Validate + upsert</b><span>Vectorize index</span></div><i>→</i><div><b>GitHub Actions</b><span>Repeatable sync workflow</span></div></div>
          </div>
          <div className="ahi-architecture-notes">
            <article><b>React + Vite</b><p>Captures the question, manages UI states, and renders the answer.</p></article>
            <article><b>Pages Function</b><p>Validates the request and orchestrates embedding, retrieval, prompt building and generation.</p></article>
            <article><b>BGE-small + Vectorize</b><p>Represent text as 384-dimensional vectors and retrieve semantically relevant chunks.</p></article>
            <article><b>LLM generation</b><p>Produces the natural-language answer from the retrieved evidence; the vector database does not generate text.</p></article>
          </div>
          <p className="ahi-dark-note">Architecture reflects the documented implementation. Source references and optional response behaviors should be described as implemented only where verified in the deployed version.</p>
        </Section>

        <Section id="integrations" number="04 / API & integrations" label="Reliable products depend on reliable contracts.">
          <h2>Every boundary has an input, output, and failure mode.</h2>
          <p>The frontend calls a server-side endpoint, which coordinates the AI workflow and returns a structured response.</p>
          <div className="ahi-api-contract">
            <div className="ahi-api-header"><span>HTTP METHOD</span><b>POST</b><code>/api/ask-harshit</code></div>
            <div className="ahi-code-grid"><div><small>REQUEST · ILLUSTRATIVE</small><pre>{'{\n  "question": "What product work has Harshit done?"\n}'}</pre></div><div><small>RESPONSE CONTRACT · ILLUSTRATIVE</small><pre>{'{\n  "answer": "...",\n  "sources": []\n}'}</pre></div></div>
            <p className="ahi-note">Examples show the API contract shape, not a captured production payload.</p>
          </div>
          <div className="ahi-card-grid ahi-card-grid-3">
            <article className="ahi-card"><span>DATA CONTRACT</span><h3>Dimensions & schema</h3><p>The embedding output must match the vector index dimension; metadata and text must remain compatible with retrieval.</p></article>
            <article className="ahi-card"><span>SECURITY BOUNDARY</span><h3>Server-side bindings</h3><p>Keep sensitive credentials out of client-side code and validate untrusted user input before processing.</p></article>
            <article className="ahi-card"><span>FAILURE HANDLING</span><h3>Stage-level diagnosis</h3><p>Separate embedding, search, generation and response errors so a failure can be traced to its source.</p></article>
          </div>
        </Section>

        <Section id="iterations" number="05 / Iteration" label="The most valuable learning came from failures." tone="ahi-soft">
          <h2>A working retrieval pipeline can still answer the wrong question.</h2>
          <div className="ahi-iteration-list">
            <article><div className="ahi-iteration-marker">01</div><div><span className="ahi-overline">DATA INGESTION</span><h3>Vector upsert format mismatch</h3><p><b>Observed:</b> An initial upsert payload triggered Cloudflare error <code>40023</code>.</p><p><b>Response:</b> Adapted ingestion to newline-delimited JSON (NDJSON) and added dimension validation and per-stage logging.</p><p className="ahi-learning">Learning: API and data contracts are product reliability concerns, not implementation details to ignore.</p></div></article>
            <article><div className="ahi-iteration-marker">02</div><div><span className="ahi-overline">RETRIEVAL QUALITY</span><h3>Related content was not always relevant content</h3><p><b>Observed:</b> “Who built you?” could retrieve material about Saarthi AI instead of answering the assistant's authorship.</p><p><b>Response direction:</b> Add explicit intent handling and consider lexical matching alongside semantic retrieval.</p><p className="ahi-learning">Learning: semantic similarity does not guarantee intent correctness.</p></div></article>
            <article><div className="ahi-iteration-marker">03</div><div><span className="ahi-overline">CONVERSATIONAL CONTEXT</span><h3>Creator and visitor identity could be confused</h3><p><b>Observed:</b> “Who am I?” can be ambiguous when a portfolio assistant talks about its owner.</p><p><b>Response direction:</b> Separate creator, visitor, and project intents; constrain answers to available evidence.</p><p className="ahi-learning">Learning: identity is a product-context problem as much as a prompt-writing problem.</p></div></article>
            <article><div className="ahi-iteration-marker">04</div><div><span className="ahi-overline">OPERATIONS</span><h3>Knowledge updates should be repeatable</h3><p><b>Observed:</b> A manually maintained vector index can drift from the source knowledge.</p><p><b>Response:</b> Use GitHub Actions to embed, validate, and upsert knowledge through a repeatable workflow.</p><p className="ahi-learning">Learning: treat the knowledge index as a versioned data artifact with visible processing failures.</p></div></article>
          </div>
        </Section>

        <Section id="measurement" number="06 / Measurement" label="Separate infrastructure telemetry from product quality." tone="ahi-dark">
          <h2>Regression-test every change; judge answer quality separately.</h2>
          <p className="lead">The evaluation suite contains 32 saved questions and runs through GitHub Actions. Alongside the original 31 regression cases, a CLIC-focused scenario assesses whether the assistant accurately represents documented product contributions, including requirements clarification, workflow analysis and BI case elimination. Automated checks inspect expected answer signals and source relevance; human review remains necessary to establish factual accuracy and completeness.</p>
          <div className="ahi-metrics">
            {metrics.map((metric, index) => <article key={metric.title}><span>{String(index + 1).padStart(2, "0")}</span><b>{metric.title}</b><p>{metric.description}</p></article>)}
          </div>
          <div className="ahi-card-grid ahi-card-grid-3">
            <article className="ahi-card"><span>01 · AUTOMATED</span><h3>Regression signals</h3><p>Checks HTTP/request failures, expected answer signals, forbidden phrases, source titles and unexpected sources for abstention cases.</p></article>
            <article className="ahi-card"><span>02 · OBSERVABILITY</span><h3>Runtime timing</h3><p>Reports end-to-end request latency and available Server-Timing summaries for processing stages.</p></article>
            <article className="ahi-card"><span>03 · HUMAN REVIEW</span><h3>Grounded quality</h3><p>Keyword checks cannot prove that claims are supported. Manually review flagged cases and sample passing answers.</p></article>
          </div>
          <div className="ahi-benchmark"><span>PROPOSED ACCEPTANCE CRITERION</span><b>≥ 90% grounded answer correctness</b><p>Target to test against a manually verified question set—not an achieved result. Also track critical unsupported claims separately.</p></div>
          <p className="ahi-dark-note">The previous 31-case baseline passed 31/31 before the new CLIC case was added. The updated 32-case suite needs a fresh run before reporting its current pass rate. Cost per 100 questions remains unmeasured. Latency and regression pass rates are not substitutes for human-judged answer correctness.</p>
        </Section>
        <Section id="tradeoffs" number="07 / Trade-offs" label="Choose the simplest architecture that fits the problem.">
          <h2>Why this architecture fits a small, changing knowledge base.</h2>
          <div className="ahi-tradeoff-table">
            <div className="ahi-table-head"><span>Decision</span><span>Reasoning</span><span>Trade-off</span></div>
            <div><b>RAG over fine-tuning</b><p>Facts change frequently and should be updated without retraining model weights.</p><p>Retrieval quality becomes a new source of failure.</p></div>
            <div><b>Serverless API</b><p>Provides a controlled orchestration boundary with platform bindings.</p><p>Execution limits, timeouts and platform dependencies require consideration.</p></div>
            <div><b>Compact embedding model</b><p>BGE-small creates 384-dimensional embeddings for a lightweight retrieval use case.</p><p>Retrieval quality must be evaluated against alternatives.</p></div>
            <div><b>Automated indexing</b><p>Repeatable knowledge updates reduce manual operational work.</p><p>Sync failures and stale indexes still need monitoring.</p></div>
          </div>
        </Section>

        <Section id="reflection" number="08 / Reflection" label="What I would carry into my next product build." tone="ahi-soft">
          <h2>Technical fluency is the ability to explain trade-offs and failure modes.</h2>
          <div className="ahi-card-grid">
            <article className="ahi-card"><span>PRODUCT</span><h3>Start with the user job</h3><p>Make discovery easier first; do not add AI capabilities without a clear purpose.</p></article>
            <article className="ahi-card"><span>ARCHITECTURE</span><h3>Make the data flow explicit</h3><p>Understand each API boundary, component responsibility, schema and failure state.</p></article>
            <article className="ahi-card"><span>RELIABILITY</span><h3>Measure what matters</h3><p>Evaluate retrieval and generated answers separately, then optimize using observed failure patterns.</p></article>
          </div>
          <h3 className="ahi-next-title">Next iteration</h3>
          <ol className="ahi-next-steps"><li>Rerun the full 32-case regression suite after relevant changes and review failures.</li><li>Manually judge groundedness for critical answers and sample passing cases.</li><li>Use observed failures to tune retrieval, topic routing and abstention.</li><li>Measure cost from actual platform usage/billing and review performance under representative use.</li></ol>
          <div className="ahi-thesis"><span>KEY TAKEAWAY</span><p>A useful AI product is not just an LLM call. It is a coordinated system of information, retrieval, integrations, guardrails, evaluation, and user experience.</p></div>
        </Section>

        <section className="ahi-footer-cta"><div className="wrap"><div className="eyebrow">Harshit Sharma · Product Portfolio</div><h2>Product thinking, connected to how systems work.</h2><p>This case study documents an individual AI build and its technical learning. Quality and performance targets are clearly separated from measured results.</p><div className="btns"><Link className="btn primary" href="/">← Back to all case studies</Link><a className="btn" href="https://harshit-sharma-product-portfolio.pages.dev" target="_blank" rel="noopener noreferrer">Visit portfolio ↗</a></div></div></section>
      </main>
    </>
  );
}

export default AskHarshitCaseStudy;
