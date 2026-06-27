import { profile } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { IconMail, IconGithub, IconLinkedin, IconDownload } from "./Icons";
import { SectionHeader } from "./SectionHeader";

export default function Contact() {
  const [ref, isInView] = useInView();

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <SectionHeader
          headerRef={ref}
          isInView={isInView}
          icon={<IconMail />}
          label="Contact"
          title="Let's Connect"
          subtitle="Interested in working together? Reach out anytime."
        />
        <div className={`contact-grid ${isInView ? "is-visible" : ""}`}>
          <a className="contact-card" href={`mailto:${profile.email}`}>
            <IconMail size={24} />
            <span className="contact-label">Email</span>
            <span className="contact-value">{profile.email}</span>
          </a>
          <a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
            <IconLinkedin size={24} />
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">Connect with me</span>
          </a>
          <a className="contact-card" href={profile.github} target="_blank" rel="noreferrer">
            <IconGithub size={24} />
            <span className="contact-label">GitHub</span>
            <span className="contact-value">View my code</span>
          </a>
          <a className="contact-card" href={profile.resumeUrl} target="_blank" rel="noreferrer">
            <IconDownload size={24} />
            <span className="contact-label">Resume</span>
            <span className="contact-value">Download PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
}
