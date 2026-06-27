import { experience } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { IconBriefcase } from "./Icons";
import { SectionHeader } from "./SectionHeader";

export default function Experience() {
  const [ref, isInView] = useInView();

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader
          headerRef={ref}
          isInView={isInView}
          icon={<IconBriefcase />}
          label="Experience"
          title="Work History"
        />
        <div className={`timeline ${isInView ? "is-visible" : ""}`}>
          {experience.map((job, i) => (
            <article
              key={`${job.company}-${job.role}`}
              className="timeline-card"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="timeline-dot" />
              <div className="card">
                <div className="card-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="muted">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span className="badge">{job.period}</span>
                </div>
                <ul className="card-list">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
