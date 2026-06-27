import { useEffect, useState } from "react";
import { profile, navLinks } from "../data/portfolio";
import { scrollToSection } from "../utils/scroll";
import { IconMenu, IconClose } from "./Icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  const firstName = profile.name.split(" ")[0];

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header-inner">
        <button className="logo" onClick={() => handleNav("home")} aria-label="Go to home">
          <span className="logo-mark">{firstName.charAt(0)}</span>
          <span className="logo-text">
            {firstName}
            <span className="logo-accent">.dev</span>
          </span>
        </button>

        <nav className="nav-desktop" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => handleNav(link.id)}>
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)} />
        <nav className="mobile-menu-panel" aria-label="Mobile navigation">
          <p className="mobile-menu-label">Navigate</p>
          {navLinks.map((link, i) => (
            <button
              key={link.id}
              className="mobile-menu-link"
              style={{ animationDelay: `${i * 50}ms` }}
              onClick={() => handleNav(link.id)}
            >
              {link.label}
            </button>
          ))}
          <a
            className="btn btn-primary mobile-menu-resume"
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
