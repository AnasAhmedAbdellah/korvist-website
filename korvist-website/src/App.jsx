import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import SectionTitle from "./components/SectionTitle";
import ComingSoonModal from "./components/ComingSoonModal";

const featureCards = [
  {
    title: "Unified administration",
    text: "Manage attendance, fees, communication, scheduling, and reports inside one clean workflow."
  },
  {
    title: "Live parent communication",
    text: "Share updates, notices, progress, and reminders from one central system without confusion."
  },
  {
    title: "Smart dashboard clarity",
    text: "Give principals and staff a simple overview of what matters most every day."
  },
  {
    title: "Fast staff operations",
    text: "Reduce repetitive work with quick actions, structured views, and time-saving task flows."
  },
  {
    title: "Student-centered records",
    text: "Keep academic, behavioral, and administrative data organized in one secure place."
  },
  {
    title: "Built to scale",
    text: "Designed for modern schools that want a premium platform feel, not a cluttered system."
  }
];

const stats = [
  { value: "98%", label: "parent response visibility" },
  { value: "24/7", label: "access for school teams" },
  { value: "1 hub", label: "for operations and updates" }
];

const modules = [
  "Attendance Tracking",
  "Fee Management",
  "Exam & Report Cards",
  "Parent Messaging",
  "Transport Management",
  "Class Scheduling",
  "Teacher Workspace",
  "School Announcements"
];

const timeline = [
  "School admins manage daily operations from one dashboard",
  "Teachers update attendance, grades, and classroom progress quickly",
  "Parents receive clean updates through a polished portal experience",
  "Leadership sees performance, activity, and alerts in one view"
];

const testimonials = [
  {
    quote:
      "This design feels premium, clear, and much easier to trust than typical school software.",
    name: "Operations Director",
    role: "Private Academy Group"
  },
  {
    quote:
      "The motion is smooth, the layout feels modern, and the message is immediately professional.",
    name: "Education Consultant",
    role: "Digital Transformation"
  }
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay }
  };
}

export default function App() {
  const [soonPage, setSoonPage] = useState("");

  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, index) => ({
        id: index,
        left: `${6 + index * 6.2}%`,
        delay: index * 0.25,
        duration: 7 + (index % 4)
      })),
    []
  );

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
      <div className="page-shell">
        <div className="bg-orb orb-one" />
        <div className="bg-orb orb-two" />
        <div className="bg-grid" />
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="floating-particle"
            style={{ left: particle.left }}
            animate={{ y: [0, -18, 0], opacity: [0.25, 0.8, 0.25] }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        <Navbar onOpenSoon={openSoon} onScrollTo={scrollToId} />

        <main>
          <section className="hero-section container" id="hero">
            <motion.div className="hero-copy" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="status-pill">
                Premium school management website
              </div>
              <h1>
                A modern school management experience with clean design,
                confident motion, and launch-ready presence.
              </h1>
              <p className="hero-text">
                Korvist gives your school a sharper digital face with a premium homepage,
                structured platform messaging, and room to expand every module page next.
              </p>

              <div className="hero-actions">
                <button className="primary-btn" onClick={() => scrollToId("contact")}>
                  Launch your website
                </button>
                <button className="ghost-btn" onClick={() => scrollToId("features")}>
                  Explore features
                </button>
              </div>

              <div className="hero-metrics">
                {stats.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="metric-card"
                    {...fadeUp(index * 0.08)}
                  >
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
            >
              <div className="dashboard-card main-dashboard">
                <div className="dashboard-top">
                  <div>
                    <span className="mini-label">Today at a glance</span>
                    <h3>School Operations Dashboard</h3>
                  </div>
                  <div className="live-dot">
                    <span />
                    Live
                  </div>
                </div>

                <div className="dashboard-chart">
                  <div className="chart-line" />
                  <div className="chart-line second-line" />
                  <div className="chart-bars">
                    <span style={{ height: "48%" }} />
                    <span style={{ height: "72%" }} />
                    <span style={{ height: "58%" }} />
                    <span style={{ height: "88%" }} />
                    <span style={{ height: "66%" }} />
                    <span style={{ height: "90%" }} />
                  </div>
                </div>

                <div className="dashboard-grid">
                  <div className="mini-stat">
                    <small>Attendance</small>
                    <strong>96.4%</strong>
                  </div>
                  <div className="mini-stat">
                    <small>Announcements</small>
                    <strong>12 sent</strong>
                  </div>
                  <div className="mini-stat">
                    <small>Fee updates</small>
                    <strong>Ready</strong>
                  </div>
                  <div className="mini-stat">
                    <small>Parent portal</small>
                    <strong>Active</strong>
                  </div>
                </div>
              </div>

              <motion.div
                className="floating-card floating-left"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="mini-label">Communication</span>
                <strong>Parents notified in one place</strong>
              </motion.div>

              <motion.div
                className="floating-card floating-right"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="mini-label">Staff flow</span>
                <strong>Fast actions. Cleaner daily work.</strong>
              </motion.div>
            </motion.div>
          </section>

          <section className="trust-strip container">
            <span>Premium-first look</span>
            <span>Vercel-inspired motion</span>
            <span>Launch-ready homepage</span>
            <span>Expandable module pages</span>
          </section>

          <section className="section-block container" id="features">
            <motion.div {...fadeUp(0)}>
              <SectionTitle
                label="Why this direction works"
                title="A cleaner, stronger front face for your school platform"
                text="This version focuses first on a polished homepage that feels modern, trustworthy, and ready for publishing, while keeping the rest of the structure prepared for expansion."
              />
            </motion.div>

            <div className="feature-grid">
              {featureCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  className="feature-card"
                  {...fadeUp(index * 0.06)}
                  whileHover={{ y: -6 }}
                >
                  <div className="card-glow" />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="section-block container showcase-section">
            <motion.div className="showcase-copy" {...fadeUp(0)}>
              <SectionTitle
                label="How it feels"
                title="Structured like a serious platform, not a basic school website"
                text="The sections, spacing, motion, and visual tone are designed to feel sharper and more premium, with enough depth to make the homepage look alive before the inner pages are fully built."
              />

              <div className="timeline-list">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item}
                    className="timeline-item"
                    {...fadeUp(index * 0.08)}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="showcase-visual" {...fadeUp(0.18)}>
              <div className="showcase-panel">
                <div className="panel-header">
                  <span className="mini-label">Platform modules</span>
                  <h3>Everything arranged to grow later</h3>
                </div>
                <div className="module-cloud">
                  {modules.map((item) => (
                    <button key={item} className="module-chip" onClick={() => openSoon(item)}>
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          <section className="section-block container testimonials-section">
            <motion.div {...fadeUp(0)}>
              <SectionTitle
                label="First impression"
                title="Designed to feel more premium from the first second"
                text="The goal here is not just to show information, but to make the brand look sharper, more modern, and more valuable the moment somebody lands on it."
              />
            </motion.div>

            <div className="testimonial-grid">
              {testimonials.map((item, index) => (
                <motion.article
                  key={item.name}
                  className="testimonial-card"
                  {...fadeUp(index * 0.08)}
                >
                  <p>“{item.quote}”</p>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="section-block container cta-block" id="contact">
            <motion.div className="cta-card" {...fadeUp(0)}>
              <div>
                <span className="eyebrow">Ready to publish</span>
                <h2>Start with the homepage now, then expand the rest page by page.</h2>
                <p>
                  This codebase gives you a polished starting point for GitHub and Vercel,
                  with the homepage ready and the remaining sections prepared as coming-soon
                  pages until we build them next.
                </p>
              </div>

              <div className="cta-actions">
                <button className="primary-btn" onClick={() => openSoon("Demo Request Form")}>
                  Request demo flow
                </button>
                <button className="ghost-btn" onClick={() => openSoon("Admin Portal")}>
                  View admin portal
                </button>
              </div>
            </motion.div>
          </section>
        </main>

        <footer className="site-footer container">
          <div>
            <strong>Korvist</strong>
            <p>Premium school management website concept with launch-ready homepage.</p>
          </div>
          <button className="ghost-btn" onClick={() => scrollToId("hero")}>
            Back to top
          </button>
        </footer>
      </div>

      <ComingSoonModal page={soonPage} onClose={closeSoon} />
    </>
  );
}
