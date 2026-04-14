import Brand from "./Brand";

export default function Navbar({ onOpenSoon, onScrollTo }) {
  return (
    <header className="site-header">
      <div className="container nav-shell nav-reference-shell">
        <Brand />

        <nav className="nav-pill">
          <button onClick={() => onScrollTo("hero")}>Home</button>
          <button onClick={() => onScrollTo("services")}>Features</button>
          <button onClick={() => onOpenSoon("Academics")}>Academics</button>
          <button onClick={() => onOpenSoon("Admissions")}>Admissions</button>
          <button onClick={() => onOpenSoon("Parent Portal")}>Parent Portal</button>
          <button onClick={() => onScrollTo("contact")}>Contact</button>
        </nav>

        <div className="nav-cta">
          <button className="nav-cta-btn" onClick={() => onOpenSoon("Client Portal")}>Client Portal</button>
        </div>
      </div>
    </header>
  );
}
