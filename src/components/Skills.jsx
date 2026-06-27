import { skills, certifications } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { IconLayers, IconAward } from "./Icons";
import { SectionHeader } from "./SectionHeader";

const skillGroups = [
  { key: "languages", title: "Languages", icon: "{" },
  { key: "frontend", title: "Frontend", icon: "◈" },
  { key: "backend", title: "Backend", icon: "⚡" },
  { key: "databases", title: "Databases", icon: "◉" },
  { key: "tools", title: "Tools", icon: "⚙" },
];

function SkillGroup({ title, icon, items, delay }) {
  return (
    <div className="skill-card" style={{ animationDelay: `${delay}ms` }}>
      <div className="skill-card-header">
        <span className="skill-icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      <div className="tags">
        {items.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, isInView] = useInView();

  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionHeader
          headerRef={ref}
          isInView={isInView}
          icon={<IconLayers />}
          label="Skills"
          title="Tech Stack"
          subtitle="Technologies I work with to build modern web applications."
        />
        <div className={`skills-grid ${isInView ? "is-visible" : ""}`}>
          {skillGroups.map((group, i) => (
            <SkillGroup
              key={group.key}
              title={group.title}
              icon={group.icon}
              items={skills[group.key]}
              delay={i * 80}
            />
          ))}
        </div>

        {certifications.length > 0 && (
          <div className={`certifications ${isInView ? "is-visible" : ""}`}>
            <div className="certifications-header">
              <IconAward />
              <h3>Certifications & Achievements</h3>
            </div>
            <ul className="cert-list">
              {certifications.map((item, i) => (
                <li key={item} style={{ animationDelay: `${i * 80}ms` }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
