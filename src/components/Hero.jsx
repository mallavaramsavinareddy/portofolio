import { profile } from "../data/portfolio";
import { scrollToSection } from "../utils/scroll";
import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconPhone,
  IconMapPin,
  IconDownload,
  IconArrowRight,
  IconSparkle,
} from "./Icons";

export default function Hero() {
  const nameParts = profile.name.trim().split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <section id="home" className="hero section">
      <div className="hero-bg">
        <div className="hero-orb hero-orb--1" />
        <div className="hero-orb hero-orb--2" />
        <div className="hero-orb hero-orb--3" />
        <div className="hero-grid-pattern" />
      </div>

      <div className="container hero-content">
        <div className="hero-main animate-fade-up">
          <div className="hero-badge">
            <IconSparkle size={16} />
            <span>Open to internships & entry-level roles</span>
          </div>

          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-title">
            <span className="hero-name">{firstName}</span>
            {lastName && <span className="hero-name hero-name--accent">{lastName}</span>}
          </h1>
          <h2 className="hero-role">{profile.title}</h2>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollToSection("projects")}>
              View Projects
              <IconArrowRight />
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection("contact")}>
              Contact Me
            </button>
            <a className="btn btn-ghost" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              <IconDownload />
              Resume
            </a>
          </div>

          <div className="hero-social">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <IconGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <IconLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <IconMail />
            </a>
          </div>
        </div>

        <div className="hero-stats animate-fade-up animate-delay-2">
          <div className="stat-card">
            <IconMapPin />
            <div>
              <span className="stat-label">Location</span>
              <span className="stat-value">{profile.location}</span>
            </div>
          </div>
          <div className="stat-card">
            <IconMail />
            <div>
              <span className="stat-label">Email</span>
              <a className="stat-value stat-link" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
          </div>
          <div className="stat-card">
            <IconPhone />
            <div>
              <span className="stat-label">Phone</span>
              <a className="stat-value stat-link" href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
