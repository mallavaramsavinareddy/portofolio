import { projects } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { IconFolder, IconExternalLink, IconGithub } from "./Icons";
import { SectionHeader } from "./SectionHeader";

export default function Projects() {
  const [ref, isInView] = useInView();

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          headerRef={ref}
          isInView={isInView}
          icon={<IconFolder />}
          label="Projects"
          title="Featured Work"
          subtitle="Placeholder links — update live and GitHub URLs when ready."
        />
        <div className={`projects-grid ${isInView ? "is-visible" : ""}`}>
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="card project-card"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="project-card-top">
                <div className="project-icon">
                  <IconFolder size={22} />
                </div>
                <div className="project-links-top">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>
                    <IconExternalLink />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                    <IconGithub />
                  </a>
                </div>
              </div>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="tags">
                {project.tech.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                  <IconExternalLink size={16} />
                  Live Demo
                </a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                  <IconGithub size={16} />
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
