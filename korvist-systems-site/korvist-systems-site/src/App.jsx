import { useMemo, useState } from 'react'

const services = [
  {
    title: 'System Design & Engineering',
    text: 'Architecture, control logic, hardware-software alignment, and delivery planning for complex operational systems.',
  },
  {
    title: 'Automation & Industrial Software',
    text: 'Workflow automation, monitoring layers, custom control dashboards, and smart data pipelines for field operations.',
  },
  {
    title: 'Digital Platforms & Portals',
    text: 'Operational websites, customer portals, admin systems, and business platforms designed to scale cleanly.',
  },
  {
    title: 'Deployment & Integration',
    text: 'From prototypes to production rollout, we connect devices, data, teams, and processes into one working system.',
  },
]

const industries = [
  'Education & Campus Operations',
  'Corporate Facilities',
  'Smart Buildings & Residential',
  'Industrial Operations',
]

const highlights = [
  { value: '10+', label: 'Years shaping dependable system experiences' },
  { value: '500+', label: 'Solutions, workflows, and digital assets delivered' },
  { value: '99%', label: 'Client-centered execution and long-term retention' },
]

const menuLinks = [
  'Services',
  'Industries',
  'Capabilities',
  'Projects',
  'Contact',
]

function Header({ onMenuOpen }) {
  return (
    <header className="header shell">
      <div className="brand">
        <div className="brand-mark">
          <span className="mark mark-left" />
          <span className="mark mark-right" />
        </div>
        <div className="brand-copy">
          <strong>Korvist</strong>
          <span>Systems & Solutions</span>
        </div>
      </div>

      <nav className="desktop-nav">
        {menuLinks.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>

      <button className="menu-button" onClick={onMenuOpen} aria-label="Open menu">
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}

function MenuOverlay({ open, onClose }) {
  return (
    <div className={`menu-overlay ${open ? 'open' : ''}`}>
      <div className="menu-panel shell">
        <div className="menu-head">
          <div className="brand-copy menu-brand">
            <strong>Korvist</strong>
            <span>Systems & Solutions</span>
          </div>
          <button className="close-button" onClick={onClose} aria-label="Close menu">
            ×
          </button>
        </div>
        <div className="menu-grid">
          <div>
            <p className="eyebrow">Navigate</p>
            {menuLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={onClose}>
                {item}
              </a>
            ))}
          </div>
          <div>
            <p className="eyebrow">What we do</p>
            <p className="menu-text">
              Korvist builds modern systems across engineering, automation, digital products,
              operational dashboards, and customer-facing platforms.
            </p>
            <a className="button button-primary inline-block" href="#contact" onClick={onClose}>
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero shell">
      <div className="hero-copy">
        <p className="eyebrow">Integrated systems for modern operations</p>
        <h1>
          EXPERTS IN SYSTEM <span>DESIGN</span>, DIGITAL CONTROL & DEPLOYMENT.
        </h1>
        <p className="hero-text">
          Korvist Systems helps organizations plan, build, connect, and operate the tools that
          power real-world delivery — from automation layers and customer platforms to data-driven
          operational environments.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Get Started
          </a>
          <a className="button button-secondary" href="#services">
            Learn More
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="panel main-panel">
          <div className="panel-glow" />
          <div className="panel-grid" />
          <div className="dashboard-card card-a">
            <div className="metric">
              <span>Operational Visibility</span>
              <strong>92%</strong>
            </div>
            <div className="bars">
              <span style={{ height: '42%' }} />
              <span style={{ height: '67%' }} />
              <span style={{ height: '86%' }} />
              <span style={{ height: '59%' }} />
            </div>
          </div>
          <div className="dashboard-card card-b">
            <span>System Health</span>
            <strong>Stable</strong>
            <p>Monitoring • automation • rollout</p>
          </div>
        </div>
        <div className="panel side-panel" />
      </div>
    </section>
  )
}

function SectionIntro({ id, title, subtitle, centered = false }) {
  return (
    <div id={id} className={`section-intro ${centered ? 'centered' : ''}`}>
      <p className="eyebrow">{subtitle}</p>
      <h2>{title}</h2>
    </div>
  )
}

function Services() {
  return (
    <section className="section services-section shell">
      <SectionIntro
        id="services"
        title="Our Services"
        subtitle="Delivering custom engineering and digital execution"
        centered
      />
      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon">0{index + 1}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function SplitFeature() {
  return (
    <section className="section split-shell">
      <div className="split-background" />
      <div className="shell split-layout">
        <div className="split-copy split-copy-dark">
          <p className="eyebrow">Why teams choose Korvist</p>
          <h2>PROVIDING TURNKEY SOLUTIONS FOR COMPLEX OPERATIONS.</h2>
          <p>
            We combine business clarity, engineering discipline, and product-minded execution.
            That means cleaner launches, stronger interfaces, dependable delivery, and systems that
            continue to make sense after deployment.
          </p>
          <a className="button button-primary" href="#capabilities">
            View capabilities
          </a>
        </div>
        <div className="split-card light-card">
          <h3>One partner, multiple layers of execution</h3>
          <p>
            Strategy, interfaces, workflows, dashboards, deployment support, and long-term
            improvement — all aligned around your real operating needs.
          </p>
          <ul>
            <li>Business-facing digital experiences</li>
            <li>Operational dashboards and controls</li>
            <li>Device, team, and data integration</li>
            <li>Structured rollout and support</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Industries() {
  return (
    <section className="section shell">
      <SectionIntro
        id="industries"
        title="Industries We Serve"
        subtitle="Built for real environments"
        centered
      />
      <div className="industry-grid">
        {industries.map((industry, index) => (
          <article className="industry-card" key={industry}>
            <div className={`industry-visual tone-${index + 1}`}>
              <span className="industry-chip">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3>{industry}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

function CapabilityBand() {
  return (
    <section className="section dark-band" id="capabilities">
      <div className="shell">
        <SectionIntro
          title="Smart Solutions. Proven Results."
          subtitle="Engineering security, control, and efficiency"
          centered
        />
        <div className="highlight-grid">
          {highlights.map((item, index) => (
            <article className="highlight-card" key={item.label}>
              <div className={`highlight-visual highlight-${index + 1}`} />
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalFeature() {
  return (
    <section className="section shell final-feature">
      <div className="angled-visual" />
      <div className="final-copy">
        <p className="eyebrow">Built beyond one niche</p>
        <h2>SYSTEMS THAT GO FROM IDEA TO LIVE OPERATION.</h2>
        <p>
          Whether you need a customer-facing web presence, an internal management platform, a field
          operations dashboard, or a full digital layer around physical systems, Korvist is built
          to shape it with precision.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore projects
          </a>
          <a className="button button-secondary dark-outline" href="#contact">
            Contact us
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectStrip() {
  const items = useMemo(
    () => [
      'Operational websites & brand systems',
      'Smart dashboards & monitoring layers',
      'Admin portals & management platforms',
      'Automation workflows & system rollout',
    ],
    [],
  )

  return (
    <section className="section shell" id="projects">
      <SectionIntro title="What We Build" subtitle="Selected delivery directions" centered />
      <div className="project-strip">
        {items.map((item, index) => (
          <article key={item} className="project-card">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{item}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="shell footer-grid">
        <div>
          <div className="brand brand-footer">
            <div className="brand-mark">
              <span className="mark mark-left" />
              <span className="mark mark-right" />
            </div>
            <div className="brand-copy">
              <strong>Korvist</strong>
              <span>Systems & Solutions</span>
            </div>
          </div>
          <p className="footer-text">
            Ready to transform your environment? We design, connect, and launch systems that help
            teams operate with more clarity and confidence.
          </p>
        </div>
        <div>
          <h4>About</h4>
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#projects">Projects</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:hello@korvist.com">hello@korvist.com</a>
          <a href="tel:+10000000000">+1 (000) 000-0000</a>
          <p>Global delivery for digital systems, operations, and engineering support.</p>
        </div>
      </div>
    </footer>
  )
}

function CookieBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="cookie-bar">
      <div className="shell cookie-content">
        <p>
          This website uses cookies to improve performance and user experience. You can manage your
          preferences by reviewing our cookie notice.
        </p>
        <button className="button button-primary cookie-button" onClick={() => setVisible(false)}>
          Agree & Proceed
        </button>
      </div>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="site-frame">
        <div className="top-accent" />
        <Header onMenuOpen={() => setMenuOpen(true)} />
        <main>
          <Hero />
          <Services />
          <SplitFeature />
          <Industries />
          <CapabilityBand />
          <FinalFeature />
          <ProjectStrip />
        </main>
        <Footer />
      </div>
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <CookieBar />
    </>
  )
}
