import { useState } from "react";
import "../styles/Navbar.css";

const NAV_LINKS = ["Events", "Programs", "Community", "Ranks"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Events");

  return (
    <nav className="navbar">
      <div className="navbar__inner">

        <div className="navbar__logo">
          <img src="/logo.png" alt="Bot League Logo" className="navbar__logo-img" />
        </div>

    
        <div className="navbar__links">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className={`navbar__link ${activeLink === link ? "navbar__link--active" : ""}`}
              onClick={(e) => { e.preventDefault(); setActiveLink(link); }}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="navbar__auth">
          <button className="navbar__btn-login">LOGIN</button>
          <button className="navbar__btn-register">REGISTER NOW</button>
        </div>

        <button
          className="navbar__mobile-toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>


      <div className={`navbar__mobile-menu ${mobileOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="navbar__mobile-link"
            onClick={(e) => { e.preventDefault(); setActiveLink(link); setMobileOpen(false); }}
          >
            {link}
          </a>
        ))}
        <div className="navbar__mobile-auth">
          <button className="navbar__btn-login">LOGIN</button>
          <button className="navbar__btn-register">REGISTER NOW</button>
        </div>
      </div>
    </nav>
  );
}
