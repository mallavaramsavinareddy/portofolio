import { education } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { IconGraduation } from "./Icons";
import { SectionHeader } from "./SectionHeader";

export default function Education() {
  const [ref, isInView] = useInView();

  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <SectionHeader
          headerRef={ref}
          isInView={isInView}
          icon={<IconGraduation />}
          label="Education"
          title="Academic Background"
        />
        <div className={`education-grid ${isInView ? "is-visible" : ""}`}>
          {education.map((item, i) => (
            <article key={item.school} className="card education-card" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="card-header">
                <div>
                  <h3>{item.degree}</h3>
                  <p className="muted">{item.school}</p>
                </div>
                <span className="badge">{item.period}</span>
              </div>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
