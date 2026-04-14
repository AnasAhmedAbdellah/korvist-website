import Brand from "./Brand";

export default function Navbar({ onOpenSoon, onScrollTo }) {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Brand />

        <nav className="nav-links">
          <button onClick={() => onScrollTo("hero")}>Home</button>
          <button onClick={() => onScrollTo("features")}>Features</button>
          <button onClick={() => onOpenSoon("Academics")}>Academics</button>
          <button onClick={() => onOpenSoon("Admissions")}>Admissions</button>
          <button onClick={() => onOpenSoon("Parent Portal")}>Parent Portal</button>
          <button onClick={() => onScrollTo("contact")}>Contact</button>
        </nav>

        <div className="nav-cta">
          <button className="ghost-btn" onClick={() => onOpenSoon("Live Demo")}>
            Live Demo
          </button>
          <button className="primary-btn" onClick={() => onScrollTo("contact")}>
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
