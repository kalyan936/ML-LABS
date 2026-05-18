const services = [
  { n: "01", title: "AI Product Development", text: "We build AI-powered web apps, SaaS tools and automation systems from idea to production." },
  { n: "02", title: "RAG & Chatbots", text: "Private knowledge assistants for PDFs, websites, policies, support teams and internal data." },
  { n: "03", title: "Cloud & DevOps", text: "Fast deployment pipelines, scalable hosting, monitoring and secure production workflows." },
];

const features = [
  "AI automation strategy",
  "Custom SaaS dashboards",
  "LLM and RAG integration",
  "Secure cloud deployment",
  "Fast UI/UX development",
  "Production support",
];

const projects = ["AI Support Bot", "Invoice Intelligence", "HR Policy Assistant", "Sales Automation"];

export default function App() {
  return (
    <main className="site">
      <Header />
      <Hero />
      <LogoStrip />
      <Services />
      <About />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <a className="brand" href="#home">ML<span>LABS</span></a>
      <nav>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#pricing">Pricing</a>
      </nav>
      <a className="btn small" href="#contact">Get Started</a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="heroText reveal">
        <p className="eyebrow">AI Startup & Technology Company</p>
        <h1>Build intelligent products that grow your business faster.</h1>
        <p className="lead">ML Labs helps companies launch premium AI websites, chatbots, automation workflows and SaaS platforms with clean engineering and modern design.</p>
        <div className="actions">
          <a className="btn" href="#contact">Start Your Project</a>
          <a className="play" href="#projects"><span>▶</span> View Work</a>
        </div>
        <div className="statsInline">
          <strong>120+</strong><span>Projects</span>
          <strong>98%</strong><span>Success Rate</span>
        </div>
      </div>
      <div className="heroVisual reveal delay">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="dashboard">
          <div className="dashTop"><span></span><span></span><span></span></div>
          <div className="brain">✦</div>
          <h3>AI Growth Engine</h3>
          <p>LLMs • RAG • Agents • Automation</p>
          <div className="metric"><span>Automation score</span><b>92%</b></div>
          <div className="bar"><i></i></div>
        </div>
        <div className="floatCard cardA">⚡ Fast Deployment</div>
        <div className="floatCard cardB">🔐 Secure AI</div>
      </div>
    </section>
  );
}

function LogoStrip() {
  return <section className="strip"><span>Trusted Stack</span><b>React</b><b>Python</b><b>OpenAI</b><b>AWS</b><b>Azure</b></section>;
}

function Services() {
  return (
    <section className="section" id="services">
      <p className="eyebrow center">What We Do</p>
      <h2>AI services designed for serious businesses</h2>
      <div className="serviceGrid">
        {services.map((s) => (
          <article className="service" key={s.title}>
            <span>{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <a href="#contact">Learn more →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="imageBlock">
        <div className="imageInner">AI</div>
      </div>
      <div>
        <p className="eyebrow">Why Choose ML Labs</p>
        <h2>We do not just design websites. We build useful AI systems.</h2>
        <p className="muted">Pretty pages alone are useless. We combine design, backend logic, AI models, vector search and deployment so your product actually works in the real world.</p>
        <div className="featureGrid">
          {features.map((f) => <div key={f}>✓ {f}</div>)}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section alt" id="projects">
      <p className="eyebrow center">Portfolio</p>
      <h2>Project ideas you can sell immediately</h2>
      <div className="projectGrid">
        {projects.map((p, i) => <div className="project" key={p}><span>0{i + 1}</span><h3>{p}</h3><p>Modern AI product concept with dashboard-ready architecture.</p></div>)}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section" id="pricing">
      <p className="eyebrow center">Pricing</p>
      <h2>Simple plans for AI website builds</h2>
      <div className="priceGrid">
        <Plan name="Starter" price="₹14,999" items={["Landing page", "Responsive design", "Contact form"]} />
        <Plan hot name="Growth" price="₹39,999" items={["Full website", "AI chatbot UI", "Dashboard design", "Deployment help"]} />
        <Plan name="Enterprise" price="Custom" items={["RAG system", "Admin panel", "Cloud setup", "Support"]} />
      </div>
    </section>
  );
}

function Plan({ name, price, items, hot }) {
  return <article className={hot ? "plan hot" : "plan"}><h3>{name}</h3><h4>{price}</h4>{items.map((x) => <p key={x}>✓ {x}</p>)}<a className="btn" href="#contact">Choose Plan</a></article>;
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Ready to build your ML Labs website?</h2>
        <p className="muted">Use this section for your business mail, phone number and project inquiry form.</p>
      </div>
      <form>
        <input placeholder="Your name" />
        <input placeholder="Email address" />
        <textarea placeholder="Tell us about your project"></textarea>
        <button type="button">Send Message</button>
      </form>
    </section>
  );
}

function Footer() {
  return <footer><a className="brand" href="#home">ML<span>LABS</span></a><p>© 2026 ML Labs. Built with React + Vite.</p></footer>;
}
