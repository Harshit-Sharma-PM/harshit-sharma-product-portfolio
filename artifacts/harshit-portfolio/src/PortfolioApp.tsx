import { Link, Route, Switch, useParams } from 'wouter';
import { caseStudies } from './case-studies/registry';

function PortfolioNavigation() {
  return (
    <nav className="topbar portfolio-topbar" aria-label="Portfolio navigation">
      <div className="wrap navin">
        <Link className="brand" href="/">Harshit Sharma <span>·</span> Product Portfolio</Link>
        <div className="navlinks">
          <a href="/#about">About</a>
          <a href="/#case-studies">Case studies</a>
          <a href="https://www.linkedin.com/in/harshit-sharma-bb5a61286" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </nav>
  );
}

function PortfolioHome() {
  return (
    <>
      <PortfolioNavigation />
      <main id="main">
        <header className="wrap portfolio-hero">
          <div className="eyebrow">Product management · Digital products · AI</div>
          <h1>Harshit Sharma</h1>
          <div className="portfolio-intro">
            <p className="portfolio-role">Associate Digital Product Manager<br />American Express<br />Digital Products · Financial Services · Operations · Fintech · GenAI · Automation</p>
            <p className="lead">I turn complex operational workflows into clearer, more reliable digital products, drawing on 7+ years of experience across financial services, customer operations and digital products. I also explore how GenAI and Agentic AI can make financial services easier to use.</p>
            <a className="text-link" href="#case-studies">Explore case studies <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-index" aria-hidden="true"><span>01</span><i /><span>PRODUCT<br />PORTFOLIO</span></div>
        </header>

        <section id="about" className="about-section">
          <div className="wrap grid2">
            <aside className="side">
              <div className="num">About</div>
              <p>A little context on how I work and where I have worked.</p>
            </aside>
            <div className="about-main">
              <h2>My work spans product, financial services and customer operations.</h2>
              <p className="about-copy">My product work sits at the intersection of digital products, financial services and customer operations. Across 7+ years in product delivery and customer-facing roles, I’ve learned to connect business requirements with the workflows people actually use — turning complex operational needs into clearer, more reliable digital experiences.</p>
              <p className="about-copy">My work spans multiple complex workflows and product areas, including CLIC, a global case-management platform. Credit Balance Refund (CBR), App Controls and Dispute Payment Management (DPM) are important examples within that broader work, not its full scope. I contribute to requirements discovery, workflow design, stakeholder alignment, backlog refinement and delivery, working with Product, Engineering and Business teams to clarify business rules, handle exceptions and improve usability.</p>
              <p className="about-copy">Quality is part of that product responsibility, not the whole of it. I have owned end-to-end UAT and supported CBR launches in France, Germany and Austria, connecting validation and release readiness with continuous workflow improvement. My individual Saarthi AI work extends this product thinking into discovery, PRDs, MVP prioritization, voice-first journeys and responsible AI design.</p>
              <div className="about-facts">
                <article className="about-fact">
                  <div className="kicker">Experience</div>
                  <h3>Product, operations, customers</h3>
                  <p><b>American Express</b><br />Associate Digital Product Manager · 2023–Present</p>
                  <p>Contribute to digital products, case/workflow management and financial-services customer operations. Work across CBR, App Controls, DPM and other operational workflows — refining requirements, collaborating with stakeholders, validating quality, supporting launches and identifying continuous improvements.</p>
                  <p><b>Concentrix</b> · Senior Representative; mentored 15 people</p>
                  <p><b>Riot Labz</b> · Customer Success Manager; 98% client retention</p>
                </article>
                <article className="about-fact">
                  <div className="kicker">Education</div>
                  <h3>Product + Economics</h3>
                  <p>BITS School of Management · Program in Product Management with Generative &amp; Agentic AI</p>
                  <p>Delhi University · BA Economics</p>
                </article>
              </div>
              <div className="skill-panel">
                <div className="kicker">Skills &amp; tools</div>
                <p><b>Product Management &amp; Discovery</b><br />Product lifecycle · Product strategy · Prioritization · Roadmapping · User journeys · MVP design</p>
                <p><b>Requirements &amp; Workflow Design</b><br />PRDs · Business requirements · User stories · Acceptance criteria · Workflow &amp; case management · Process mapping · Gap analysis</p>
                <p><b>Digital Products &amp; Delivery</b><br />Customer operations · Stakeholder alignment · Agile &amp; Scrum · Backlog refinement · Sprint planning · UAT/quality · Regression testing · Root-cause analysis</p>
                <p><b>Data, Automation &amp; AI</b><br />Excel · Data &amp; KPI analysis · Reporting · Trend analysis · Workflow automation · GenAI · Prompt engineering · Agentic AI · Multi-agent systems · RAG fundamentals</p>
                <p><b>Product Tools</b><br />Jira · Confluence · Rally · Figma</p>
              </div>
              <a className="text-link profile-link" href="https://www.linkedin.com/in/harshit-sharma-bb5a61286" target="_blank" rel="noopener noreferrer">LinkedIn profile <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section id="case-studies" className="collection-section">
          <div className="wrap">
            <div className="collection-heading">
              <div>
                <div className="num">Selected work</div>
                <h2>Case studies</h2>
              </div>
              <p>Product thinking, made visible.</p>
            </div>
            <div className="case-list">
              {caseStudies.map((study, index) => (
                <article className="case-card" key={study.slug}>
                  <div className="case-card-art" aria-hidden="true">
                    <span className="case-art-number">0{index + 1}</span>
                    <div className="case-art-orbit"><i /><i /><i /></div>
                    <span className="case-art-word">{study.title}</span>
                  </div>
                  <div className="case-card-copy">
                    <div className="case-meta"><span>{study.category}</span><span>Case study 0{index + 1}</span></div>
                    <h3>{study.title}</h3>
                    <p>{study.summary}</p>
                    <Link href={`/case-studies/${study.slug}`} className="case-open">Read case study <span aria-hidden="true">↗</span></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="portfolio-footer">
        <div className="wrap footer-row">
          <span>Harshit Sharma · Product Portfolio</span>
          <a href="https://www.linkedin.com/in/harshit-sharma-bb5a61286" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </footer>
    </>
  );
}

function DynamicCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((entry) => entry.slug === slug);
  if (!study) {
    return (
      <>
        <PortfolioNavigation />
        <main className="wrap not-found">
          <div className="num">Case study not found</div>
          <h1>That page isn’t here.</h1>
          <Link className="btn primary" href="/">Back to portfolio</Link>
        </main>
      </>
    );
  }
  const StudyPage = study.page;
  return <StudyPage />;
}

export default function PortfolioApp() {
  return (
    <Switch>
      <Route path="/" component={PortfolioHome} />
      <Route path="/case-studies/:slug" component={DynamicCaseStudy} />
      <Route>
        <PortfolioNavigation />
        <main className="wrap not-found">
          <div className="num">Page not found</div>
          <h1>That page isn’t here.</h1>
          <Link className="btn primary" href="/">Back to portfolio</Link>
        </main>
      </Route>
    </Switch>
  );
}