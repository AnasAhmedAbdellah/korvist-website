import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import ComingSoonModal from "./components/ComingSoonModal";

const services = [
  {
    icon: "◉",
    title: "Access Control",
    text: "Secure campus entry with role-based permissions, visitor handling, and fast gate workflows."
  },
  {
    icon: "◎",
    title: "Attendance Intelligence",
    text: "Turn arrival, classroom, and absence activity into one reliable live school overview."
  },
  {
    icon: "◌",
    title: "Parent Communication",
    text: "Deliver notices, follow-ups, and school updates through one polished communication layer."
  },
  {
    icon: "✦",
    title: "Operations Automation",
    text: "Reduce daily manual work with connected scheduling, records, and approval flows."
  }
];

const industries = [
  {
    title: "Education",
    text: "Student journeys, guardians, staff, and school leadership in one environment.",
    media: "media-education"
  },
  {
    title: "Campus Offices",
    text: "Administrative clarity for admissions, front desks, finance, and support teams.",
    media: "media-office"
  },
  {
    title: "Parent Portal",
    text: "A calmer experience for notices, progress, requests, and account activity.",
    media: "media-portal"
  },
  {
    title: "Residential Schools",
    text: "Bring dorm, transport, academics, and security touchpoints under one system.",
    media: "media-residential"
  }
];

const results = [
  {
    value: "10+",
    label: "core modules",
    text: "Attendance, communication, finance, scheduling, and reporting ready to expand."
  },
  {
    value: "500+",
    label: "daily actions simplified",
    text: "Designed to reduce friction across admin, teacher, and parent workflows."
  },
  {
    value: "99%",
    label: "clarity-first presentation",
    text: "A cleaner product face that feels modern, premium, and easier to trust."
  }
];

const contactItems = [
  "Fast launch support",
  "International-ready product",
  "School-focused roadmap"
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay }
  };
}

export default function App() {
  const [soonPage, setSoonPage] = useState("");

  const openSoon = (page) => setSoonPage(page);
  const closeSoon = () => setSoonPage("");

  const scrollToId = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="page-shell reference-shell">
        <div className="deep-space" />
        <div className="aurora aurora-left" />
        <div className="aurora aurora-right" />
        <div className="light-trail trail-one" />
        <div className="light-trail trail-two" />
        <div className="light-trail trail-three" />
        <div className="star-grid" />

        <Navbar onOpenSoon={openSoon} onScrollTo={scrollToId} />

        <main>
          <section className="hero-block container" id="hero">
            <div className="hero-stage">
              <motion.div className="hero-copy hero-copy-left" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
                <span className="eyebrow-chip">Premium school platform</span>
                <h1>Innovative solutions for smarter school environments</h1>
                <p>
                  Bring admissions, attendance, parent communication, school operations,
                  and access clarity into one premium digital experience.
                </p>

                <div className="hero-actions">
                  <button className="primary-btn" onClick={() => openSoon("Get Started")}>Get Started</button>
                  <button className="ghost-btn" onClick={() => scrollToId("services")}>Learn More</button>
                </div>
              </motion.div>

              <motion.div
                className="hero-visual-board"
                initial={{ opacity: 0, scale: 0.96, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="visual-floor" />
                <div className="dashboard-wall wall-main">
                  <div className="wall-header">
                    <span>School analytics</span>
                    <span className="status-live">Live</span>
                  </div>
                  <div className="wall-grid">
                    <div className="bar-group">
                      <span style={{ height: "42%" }} />
                      <span style={{ height: "65%" }} />
                      <span style={{ height: "56%" }} />
                      <span style={{ height: "80%" }} />
                    </div>
                    <div className="ring-chart" />
                    <div className="mini-panel" />
                    <div className="mini-panel line-panel" />
                  </div>
                </div>

                <div className="device-cluster">
                  <div className="turnstile">
                    <div className="turnstile-top" />
                    <div className="turnstile-door" />
                    <div className="turnstile-arm arm-one" />
                    <div className="turnstile-arm arm-two" />
                    <div className="turnstile-arm arm-three" />
                  </div>
                  <div className="scanner-pillar">
                    <div className="scanner-screen">
                      <div className="avatar-orb" />
                    </div>
                    <div className="scanner-glow" />
                  </div>
                  <div className="side-pod" />
                </div>
              </motion.div>
            </div>
          </section>

          <section className="section-shell container" id="services">
            <motion.div className="section-heading" {...fadeUp()}>
              <h2>Our Services</h2>
              <p>Delivering school operations with speed, structure, and a sharper digital face.</p>
            </motion.div>

            <div className="service-grid">
              {services.map((service, index) => (
                <motion.article key={service.title} className="glass-card service-card" {...fadeUp(index * 0.08)}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="section-shell container" id="industries">
            <motion.div className="section-heading" {...fadeUp()}>
              <h2>Industries We Serve</h2>
              <p>Built for schools first, with room to support broader education and facility operations.</p>
            </motion.div>

            <div className="industry-grid">
              {industries.map((item, index) => (
                <motion.article key={item.title} className="glass-card industry-card" {...fadeUp(index * 0.08)}>
                  <div className={`industry-media ${item.media}`} />
                  <div className="industry-copy">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="section-shell container" id="results">
            <motion.div className="section-heading" {...fadeUp()}>
              <h2>Smart Solutions. Proven Presence.</h2>
              <p>Designed to feel more premium, more trustworthy, and more launch-ready from the first visit.</p>
            </motion.div>

            <div className="result-grid">
              {results.map((item, index) => (
                <motion.article key={item.label} className="glass-card result-card" {...fadeUp(index * 0.08)}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                  <p>{item.text}</p>
                  <div className={`result-media media-${index + 1}`} />
                </motion.article>
              ))}
              <motion.div className="camera-orb" animate={{ y: [0, -14, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }} />
            </div>
          </section>

          <section className="section-shell container" id="contact">
            <motion.div className="cta-panel glass-card" {...fadeUp()}>
              <div>
                <h2>Ready to transform your school environment?</h2>
                <p>Keep the live Vercel version now, then upgrade each section into full product pages step by step.</p>
              </div>

              <div className="contact-chip-row">
                {contactItems.map((item) => (
                  <span key={item} className="contact-chip">{item}</span>
                ))}
              </div>

              <div className="hero-actions">
                <button className="primary-btn" onClick={() => openSoon("Get in Touch")}>Get In Touch</button>
                <button className="ghost-btn" onClick={() => openSoon("Book a Demo")}>Book a Demo</button>
              </div>
            </motion.div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="container footer-shell">
            <span>© 2026 Korvist. Premium school management experience.</span>
            <div className="footer-dots">
              <span />
              <span />
              <span />
            </div>
          </div>
        </footer>
      </div>

      <ComingSoonModal page={soonPage} onClose={closeSoon} />
    </>
  );
}
