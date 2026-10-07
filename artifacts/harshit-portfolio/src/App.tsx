import type { ReactNode } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { CaseStudyNavMenu } from './components/CaseStudyNavMenu';

const prototypeUrl = 'https://www.figma.com/make/By4bqAZiztzXXdqK9Jrnb3/Create-Prototype?fullscreen=1&t=xBtHR69JGtA40TiJ-1&code-node-id=0-9';

function PrototypeLink({ children, primary = false }: { children: string; primary?: boolean }) {
  return (
    <a className={`btn${primary ? ' primary' : ''}`} href={prototypeUrl} target="_blank" rel="noopener noreferrer" data-testid="link-figma-prototype">
      {children}
    </a>
  );
}

function Section({ id, number, description, dark = false, soft = false, children }: {
  id?: string;
  number: string;
  description: string;
  dark?: boolean;
  soft?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={dark ? 'dark' : soft ? 'soft' : ''}>
      <div className="wrap grid2">
        <aside className="side">
          <div className="num">{number}</div>
          <p>{description}</p>
        </aside>
        <div>{children}</div>
      </div>
    </section>
  );
}

export function SaarthiCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <nav className="topbar case-study-topbar" aria-label="Case study navigation">
        <div className="wrap navin">
          <a className="brand" href="/">Harshit Sharma <span>·</span> Product Portfolio</a>
          <div className="navlinks">
            <div className="case-study-nav-primary">
              <a href="/">All work</a>
              <a href="#problem">Problem</a>
              <a href="#discovery">Discovery</a>
              <a href="#strategy">Strategy</a>
              <a href="#mvp">MVP</a>
              <a href="#ai">AI</a>
              <a href="#gtm">GTM</a>
              <a href="#reflection">Reflection</a>
            </div>
            <div className="case-study-nav-theme">
              <ThemeToggle />
            </div>
          </div>
          <CaseStudyNavMenu />
        </div>
      </nav>

      <main id="main" className="case-study-main">
        <header id="top" className="wrap hero">
          <div className="hero-copy">
            <div className="eyebrow">0 → 1 AI Product Case Study</div>
            <h1>Saarthi AI</h1>
            <p className="lead">A voice-first financial companion designed to make pensions, government schemes, banking procedures and fraud awareness easier to understand for elderly Indians — without making them learn another complex app.</p>
            <div className="btns">
              <PrototypeLink primary>Open interactive prototype ↗</PrototypeLink>
              <a className="btn" href="#problem">Read the case study ↓</a>
            </div>
          </div>
          <div className="hero-art" aria-label="Voice-first, GenAI, agentic AI, B2B2C product concept">
            <div className="art-top mono-label">Voice-first · GenAI · Agentic AI · B2B2C</div>
            <div className="orbit-system" aria-hidden="true">
              <div className="orbit one" />
              <div className="orbit two" />
              <div className="orbit three" />
              <span className="orbit-point" />
              <div className="orbit-core">Ask Saarthi Anything</div>
            </div>
            <div className="call">
              <small>Illustrative interaction · Hindi</small>
              <div className="bubble user">Meri pension kab aayegi?</div>
              <div className="bubble ai">Main aapko pension schedule samjha sakti hoon. Kya aap status check karna chahenge?</div>
            </div>
          </div>
        </header>

        <div className="wrap stats" aria-label="Case study at a glance">
          <div className="stat"><b>60+</b><span>Primary user segment</span></div>
          <div className="stat"><b>0 → 1</b><span>Concept → prototype → MVP direction</span></div>
          <div className="stat"><b>Voice</b><span>Primary interaction model</span></div>
          <div className="stat"><b>AI</b><span>RAG + controlled agent workflow</span></div>
        </div>

        <Section number="00 / The thesis" description="Start with the human problem. Use AI where it removes friction, not simply because AI is available." dark>
          <h2>What if financial guidance felt like a conversation — not another app to learn?</h2>
          <p className="lead">The product started from an accessibility problem: elderly users can trust their financial institution while still feeling uncomfortable with digital interfaces, financial jargon, language barriers and the risk of making a costly mistake.</p>
          <div className="quote"><small>Product thesis</small><strong>Reduce the cognitive load of financial information before adding more financial complexity.</strong></div>
          <p>This is individual 0→1 product work: problem framing, a PRD, user journeys, MVP planning and an interactive Figma prototype. The broader service, AI architecture and pilot described below are proposed directions beyond the prototype.</p>
        </Section>

        <Section id="problem" number="01 / Problem" description="Define the problem before choosing the technology.">
          <h2>Digital access does not automatically create digital confidence.</h2>
          <p className="lead">The opportunity was not simply to “make banking easier.” It was to help an elderly user understand what is happening, what to do next, and when to ask a human for help.</p>
          <div className="insights">
            <article className="card"><div className="idx">01</div><h3>Digital friction</h3><p>Typing, navigation, small interfaces and unfamiliar flows can create cognitive load.</p></article>
            <article className="card"><div className="idx">02</div><h3>Language barrier</h3><p>English-first terminology can make otherwise simple financial information feel complex.</p></article>
            <article className="card"><div className="idx">03</div><h3>Trust &amp; fear</h3><p>Fraud concerns can make users hesitant to experiment with digital finance.</p></article>
            <article className="card"><div className="idx">04</div><h3>Dependency</h3><p>Simple questions may still require family members, branches or support staff.</p></article>
          </div>
          <div className="quote"><small>Problem framing · illustrative user perspective</small><strong>“I trust my bank, but I don't trust myself using the app.”</strong></div>
          <p className="small" style={{ color: 'var(--muted)' }}>Key barriers include low digital literacy, regional-language dependence, fear of fraud, physical branch dependence and cognitive overload. The proposed solution is therefore voice-first, multilingual and designed around reassurance.</p>
        </Section>

        <Section id="discovery" number="02 / Discovery" description="Turn a broad problem into a product opportunity." soft>
          <h2>From “elderly + finance” to a sharper job to be done.</h2>
          <p className="lead">The product work used Design Thinking, personas, user stories and idea exploration to narrow the problem from general financial inclusion to a specific interaction: trusted, simple financial guidance in the user's preferred language.</p>
          <div className="personas">
            <article className="persona"><div className="type">Primary user</div><h3>Senior citizen</h3><p>May be a pensioner using a basic smartphone or feature phone.</p><div className="need">Need: an answer they can understand without asking someone else.</div></article>
            <article className="persona"><div className="type">Influencer / secondary</div><h3>Family caregiver</h3><p>Helps parents remotely and wants them to become more independent.</p><div className="need">Need: confidence that parents can get routine guidance safely.</div></article>
            <article className="persona"><div className="type">Economic buyer</div><h3>Institution</h3><p>Banks, NBFCs, government departments and CSR / inclusion programs.</p><div className="need">Need: lower routine-support burden and measurable inclusion impact.</div></article>
          </div>
          <div className="callout"><b>Product decision:</b> the end user is intentionally not the payer. The model is institution-funded so access can remain frictionless for elderly users.</div>
          <p><b>Job to be done:</b> when I have a financial question and feel unsure about a digital process, help me understand the next safe step in a language I’m comfortable with, so I can act with confidence or reach someone who can help.</p>
          <p>Priority use cases are understanding pension schedules and processes, finding relevant scheme information, clarifying banking procedures and recognizing possible fraud. These jobs define the proposed product scope; they do not imply access to a caller’s bank account or live pension status.</p>
          <p><b>Discovery still to validate:</b> the personas and journeys frame assumptions about language comfort, voice accessibility and trust. A future pilot should test whether users understand the answers, can complete a first interaction and know when to ask for a human. No interview counts or measured validation results are claimed here.</p>
        </Section>

        <Section number="03 / Solution" description="Explore options, then commit to the interaction model.">
          <h2>Why voice became the product, not just a feature.</h2>
          <p className="lead">The concept explored voice assistance, chat, WhatsApp, branch kiosks, family-assisted support, pension tracking and fraud education. Voice-first was selected because it reduces typing, lowers the learning curve and fits users who are more comfortable with conversation.</p>
          <div className="pillars">
            <div className="pillar"><b>Voice-first</b><span>Ask naturally instead of navigating complex menus.</span></div>
            <div className="pillar"><b>Multilingual</b><span>Hindi, Marathi and English in the proposed MVP scope.</span></div>
            <div className="pillar"><b>Pension guidance</b><span>Explain schedules, processes and required information.</span></div>
            <div className="pillar"><b>Scheme guidance</b><span>Make government, health and insurance information easier to understand.</span></div>
            <div className="pillar"><b>Fraud awareness</b><span>Explain scam patterns and safer next steps.</span></div>
            <div className="pillar"><b>Human escalation</b><span>Provide a path when AI cannot safely resolve the issue.</span></div>
          </div>
          <p className="small" style={{ color: 'var(--muted)', marginTop: 20 }}>The ideation set included these options; voice-first was selected for the reasons above.</p>
          <p>The proposed voice journey should offer a clear language choice, short answers and the option to repeat or clarify. Before escalating, the service should explain what it can and cannot answer. Multilingual quality means preserving the meaning of financial guidance, not simply translating words.</p>
        </Section>

        <Section id="strategy" number="04 / Product strategy" description="Define the economic model and the boundaries of the product." dark>
          <h2>The smallest product that earns trust.</h2>
          <p className="lead">MoSCoW prioritization kept the first version focused on accessibility, guidance and safety rather than transactions.</p>
          <div className="scope">
            <div className="scopebox must"><h3>Must have</h3><ul><li>Voice Q&amp;A</li><li>Language support</li><li>Pension / scheme guidance</li><li>Fraud awareness</li><li>Human escalation</li></ul></div>
            <div className="scopebox should"><h3>Should have</h3><ul><li>Usage analytics</li><li>Confidence signals</li><li>Caregiver capability</li></ul></div>
            <div className="scopebox could"><h3>Could have</h3><ul><li>Personalized reminders</li><li>Proactive alerts</li><li>WhatsApp summaries</li></ul></div>
            <div className="scopebox no"><h3>Not in MVP</h3><ul><li>Financial transactions</li><li>Investment recommendations</li><li>Loan approvals</li></ul></div>
          </div>
          <div className="quote"><small>Safety-driven product boundary</small><strong>Saarthi AI explains money. It does not move money.</strong></div>
          <p>The prioritization trade-off is deliberate: breadth of features is less valuable than a small set of understandable, grounded answers with a reliable human handoff. Reminders, caregiver features and additional channels should follow evidence from the core guidance journey, not distract from validating it.</p>
        </Section>

        <Section id="mvp" number="05 / Prototype → MVP" description="Separate what was demonstrated from what is proposed for scale.">
          <h2>The prototype demonstrates the experience. The MVP plan defines the next step.</h2>
          <p className="lead">The interactive prototype demonstrates the intended user experience. The broader MVP architecture, delivery plan and operational model are the next proposed step toward a pilot.</p>
          <div className="status">
            <article className="card"><h3>Built / demonstrated</h3><ul><li>Product concept and positioning</li><li>PRD and MVP definition</li><li>User journeys and flows</li><li>Interactive Figma prototype</li><li>AI workflow concept</li></ul></article>
            <article className="card"><h3>Proposed for MVP / pilot</h3><ul><li>RAG-backed knowledge layer</li><li>Specialized agent architecture</li><li>Guardrail and escalation layer</li><li>16-week delivery roadmap</li><li>Institution-led pilot and KPI framework</li></ul></article>
          </div>
          <div className="btns"><PrototypeLink primary>Explore the Figma prototype ↗</PrototypeLink></div>
          <p className="small" style={{ color: 'var(--muted)', marginTop: 18 }}>Proposed core flow: language detection → question → intent identification → knowledge retrieval → generated response → voice delivery → escalation if unresolved.</p>
          <p><b>Prototype boundary:</b> the illustrated pension conversation is an intended interaction rather than a live status lookup. Account integrations, multilingual accuracy and operational handoff belong to the implementation and validation work that follows the prototype.</p>
        </Section>

        <Section id="ai" number="06 / AI architecture" description="Use AI as a system of controlled capabilities, not a single black box." dark>
          <h2>Many agents. One controlled workflow.</h2>
          <p className="lead">For the proposed MVP, I structured the AI layer around retrieval, specialist agents, a central orchestrator and explicit validation.</p>
          <div className="arch">
            <div className="arch-note"><span>Proposed MVP architecture</span></div>
            <div className="arch-top">
              <div className="node"><b>User + Voice</b><span>Voice input · STT · session context</span></div>
              <div className="arrow">→</div>
              <div className="node"><b>Agent Orchestrator</b><span>Routes work, maintains state, controls tools and triggers escalation.</span></div>
            </div>
            <div className="agents">
              <div className="agent"><b>Language Agent</b><span>Detect language / dialect</span></div>
              <div className="agent"><b>Intent Agent</b><span>Classify the request</span></div>
              <div className="agent"><b>Knowledge Agent</b><span>Retrieve approved context via RAG</span></div>
              <div className="agent"><b>Scheme Agent</b><span>Pension / health / insurance information</span></div>
              <div className="agent"><b>Fraud Agent</b><span>Scam patterns and safe practices</span></div>
              <div className="agent"><b>Escalation Agent</b><span>Human handoff decision</span></div>
            </div>
            <div className="memory">
              <div className="memory-heading"><b>Conversation memory</b><span>Separate context, preferences and history</span></div>
              <div className="memory-grid">
                <div className="memory-item"><b>Short-term · in-session</b><span>Keep recent relevant turns and session context available while the conversation is active.</span></div>
                <div className="memory-item"><b>Long-term · opt-in</b><span>Retain only user-approved helpful preferences or accessibility needs. Never store financial credentials in long-term memory.</span></div>
                <div className="memory-item"><b>Conversation history</b><span>A separate stored record governed by consent, access, retention and deletion controls.</span></div>
              </div>
              <p className="memory-foot">The orchestrator recalls only the relevant minimum context needed for the current request.</p>
            </div>
            <div className="guard"><b>Guardrail + validation layer:</b> grounding, policy, confidence and privacy checks before a response reaches the caller.</div>
          </div>
          <p className="small" style={{ color: '#aeb9c8', marginTop: 18 }}>The proposed AI design uses Generative AI for language understanding and response generation, plus language, intent, knowledge and escalation agents. Risks to manage include hallucinations, outdated scheme information, adoption and trust.</p>
          <p><b>Trusted knowledge before generation:</b> the proposed RAG layer should retrieve from institution-approved financial and scheme information with clear source ownership and freshness checks. A fluent answer is not enough: if the retrieved context is missing, conflicting or outdated, the workflow should acknowledge uncertainty and route the caller toward verified help rather than invent an answer.</p>
          <p><b>Controlled agency:</b> specialist agents support bounded language, intent, retrieval and handoff tasks. The orchestrator should allow only approved capabilities and validate the response before voice delivery. It should not execute transactions, make investment decisions or request passwords, PINs or one-time codes.</p>
        </Section>

        <Section number="07 / Trust & safety" description="For a vulnerable user segment, safety is part of the product definition.">
          <h2>Trust is not a UX layer. It is a system requirement.</h2>
          <p className="lead">The product deliberately avoids transaction execution and investment advice. Sensitive or unresolved situations move toward human support.</p>
          <div className="tablewrap">
            <table><thead><tr><th>Risk</th><th>Product response</th></tr></thead><tbody>
              <tr><td>AI gives incorrect financial guidance</td><td>Ground responses in verified knowledge; use human review and escalation for sensitive cases.</td></tr>
              <tr><td>Users mistake AI for a human</td><td>Disclose AI identity, capabilities and limitations.</td></tr>
              <tr><td>Financial conversations contain sensitive data</td><td>Encryption, consent-based collection and limited retention are proposed controls.</td></tr>
              <tr><td>Scheme information becomes outdated</td><td>Maintain and regularly refresh the knowledge repository.</td></tr>
            </tbody></table>
          </div>
          <p className="small" style={{ color: 'var(--muted)', marginTop: 18 }}>Controls address incorrect guidance, AI disclosure, sensitive data and knowledge freshness.</p>
          <p>Fraud awareness should explain common warning signs and direct users to trusted institutional channels without creating a false sense of certainty. A proposed escalation should explain why human support is needed, share only consented context and avoid promising resolution until the institution confirms the handoff.</p>
        </Section>

        <Section number="08 / Delivery" description="Translate product strategy into an executable plan." soft>
          <h2>A 16-week path from validation to pilot.</h2>
          <p className="lead">The delivery plan uses Agile Scrum because user feedback, language quality and AI behavior need iterative learning.</p>
          <div className="timeline">
            <div className="step"><div className="wk">W1–2</div><div><b>Discovery &amp; validation</b><br /><span>Review findings, validate assumptions, prioritize MVP and define metrics.</span></div></div>
            <div className="step"><div className="wk">W3–4</div><div><b>Solution design</b><br /><span>Conversation flows, voice journeys, architecture and escalation design.</span></div></div>
            <div className="step"><div className="wk">W5–7</div><div><b>Voice foundation</b><br /><span>STT, TTS, language detection and knowledge repository.</span></div></div>
            <div className="step"><div className="wk">W8–10</div><div><b>AI capabilities</b><br /><span>Knowledge, fraud, pension and scheme modules.</span></div></div>
            <div className="step"><div className="wk">W11–12</div><div><b>Operational layer</b><br /><span>Human escalation, analytics and monitoring.</span></div></div>
            <div className="step"><div className="wk">W13–14</div><div><b>Testing</b><br /><span>Alpha / beta testing, bug fixing and accessibility review.</span></div></div>
            <div className="step"><div className="wk">W15–16</div><div><b>Pilot</b><br /><span>Deploy, onboard an institution partner and measure KPIs.</span></div></div>
          </div>
          <p className="small" style={{ color: 'var(--muted)', marginTop: 18 }}>The plan uses seven stages across 16 weeks, with Agile Scrum and two-week sprints.</p>
          <p><b>Readiness before rollout:</b> this is a planning sequence, not a completed delivery timeline. Progression to a pilot would depend on approved knowledge, language testing, safe responses to unsupported questions, functioning human escalation and an institution’s operational readiness. Learnings could change the scope or sequence before wider deployment.</p>
        </Section>

        <Section id="gtm" number="09 / GTM & business" description="Distribution is part of the product when trust is the adoption barrier.">
          <h2>Acquire offline. Engage digitally. Retain through voice.</h2>
          <p className="lead">The GTM strategy does not assume that elderly users will discover a new service through an app store. It uses trusted institutions and community touchpoints to introduce the product, then lets voice become the recurring habit.</p>
          <div className="gtm">
            <article className="card"><h3>Trust building</h3><p>Bank branches, pension offices, post offices, senior groups and NGOs introduce the service through demonstrations.</p></article>
            <article className="card"><h3>Assisted first use</h3><p>Staff help the user make the first guided call, reducing adoption anxiety.</p></article>
            <article className="card"><h3>Community ambassadors</h3><p>Trusted local figures can demonstrate the service and support awareness.</p></article>
            <article className="card"><h3>Missed-call activation</h3><p>A missed call can trigger a callback and onboarding without an app download or internet dependency.</p></article>
          </div>
          <div className="loop"><b>Institutional expansion loop</b><br /><strong>Pilot → measurable impact → regional rollout → new partnerships</strong></div>
          <p className="small" style={{ color: 'var(--muted)', marginTop: 18 }}>The proposed omnichannel model spans voice, bank branches, CSCs, caregiver support and WhatsApp, with centralized knowledge and escalation workflows.</p>
          <p><b>B2B2C model:</b> the institution is the proposed buyer and distribution partner; the elderly user is the beneficiary. The pilot proposition is accessible guidance with the potential to reduce avoidable routine-support demand. Partner willingness, operating costs and inclusion impact would need validation before any commercial or regional expansion claim.</p>
        </Section>

        <Section number="10 / Measurement" description="Define success before launch so the pilot can teach us something.">
          <h2>Measure user value, trust, AI quality and institutional impact.</h2>
          <div className="metricgrid">
            <div className="metric"><b>User</b><span>80% first-call task completion · 75% query resolution · 50% repeat usage</span></div>
            <div className="metric"><b>Trust &amp; quality</b><span>4/5 satisfaction · intent accuracy · grounded-answer rate · escalation quality</span></div>
            <div className="metric"><b>Institutional impact</b><span>Routine-support reduction · cost per interaction · partner adoption</span></div>
          </div>
          <div className="callout"><b>Proposed pilot targets:</b> 80% task completion, 75% query resolution, 4/5 satisfaction and 50% repeat usage.</div>
          <p>Evaluate the measures together: lower escalation is not automatically better if a caller receives unsafe guidance, and shorter calls are not necessarily clearer calls. A pilot should review unresolved questions, answer grounding and comprehension alongside adoption and cost, using those findings to prioritize the next iteration rather than claim success from usage alone.</p>
        </Section>

        <Section id="reflection" number="11 / Reflection" description="The product lessons I would carry into my next 0→1 build." soft>
          <h2>What Saarthi AI changed in how I think about product building.</h2>
          <div className="insights">
            <article className="card"><div className="idx">01</div><h3>AI is not the starting point.</h3><p>The product began with a human problem; AI became the mechanism for reducing friction.</p></article>
            <article className="card"><div className="idx">02</div><h3>Trust is a feature.</h3><p>Disclosure, safe boundaries and human escalation are product capabilities, not legal afterthoughts.</p></article>
            <article className="card"><div className="idx">03</div><h3>Architecture follows risk.</h3><p>RAG, orchestration and guardrails exist because accuracy, freshness and safety matter.</p></article>
            <article className="card"><div className="idx">04</div><h3>Distribution is product.</h3><p>A strong experience still fails if the audience does not trust it or cannot discover it.</p></article>
          </div>
          <p>The next learning step is to test the core voice journey with intended users and an institutional partner before expanding scope. The most important unanswered questions are whether the guidance is understood, whether the service earns trust without encouraging over-reliance, and whether human support can reliably complete the handoff.</p>
        </Section>

        <Section number="12 / Capabilities shown" description="The product skills this case study covers.">
          <h2>From ambiguous problem to a credible 0→1 product direction.</h2>
          <div className="tablewrap">
            <table><thead><tr><th>PM capability</th><th>Evidence in Saarthi AI</th></tr></thead><tbody>
              <tr><td>Problem framing</td><td>Customer / user distinction, pain points, competitive gap and product thesis.</td></tr>
              <tr><td>Product discovery</td><td>Design Thinking, personas, user stories, idea exploration and value proposition.</td></tr>
              <tr><td>Prioritization</td><td>MoSCoW scope with explicit safety-driven exclusions.</td></tr>
              <tr><td>AI product thinking</td><td>RAG, specialist agents, orchestration, guardrails and escalation.</td></tr>
              <tr><td>Execution</td><td>16-week roadmap, Agile Scrum, Jira epics and validation plan.</td></tr>
              <tr><td>GTM / business</td><td>Institution-funded B2B2C model, omnichannel acquisition and retention loops.</td></tr>
              <tr><td>Metrics</td><td>User, trust/AI quality and business KPIs with pilot validation framing.</td></tr>
            </tbody></table>
          </div>
        </Section>
      </main>

      <footer>
        <div className="wrap">
          <div className="eyebrow">Harshit Sharma · Product Portfolio</div>
          <h2>Building products from problems, not just ideas.</h2>
          <p>Saarthi AI is presented here as an individual 0→1 product case study: the concept, PRD, product strategy, prototype and proposed MVP direction are the focus.</p>
          <div className="btns"><PrototypeLink>Open Figma prototype ↗</PrototypeLink></div>
        </div>
      </footer>
    </>
  );
}

export default SaarthiCaseStudy;