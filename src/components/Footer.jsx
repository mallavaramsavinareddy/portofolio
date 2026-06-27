import { profile } from "../data/portfolio";
import { IconGithub, IconLinkedin, IconMail } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
        </p>
        <div className="footer-social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <IconGithub size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <IconLinkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <IconMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
