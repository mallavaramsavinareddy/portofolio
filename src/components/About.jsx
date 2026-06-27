import { about } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { IconUser } from "./Icons";
import { SectionHeader } from "./SectionHeader";

export default function About() {
  const [ref, isInView] = useInView();

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          headerRef={ref}
          isInView={isInView}
          icon={<IconUser />}
          label="About"
          title="Who I Am"
        />
        <div className={`about-grid ${isInView ? "is-visible" : ""}`}>
          {about.summary.map((paragraph, i) => (
            <p key={paragraph} className="about-text" style={{ animationDelay: `${i * 100}ms` }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
