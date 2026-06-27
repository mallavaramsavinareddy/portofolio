export function SectionHeader({ headerRef, isInView, icon, label, title, subtitle }) {
  return (
    <div ref={headerRef} className={`section-header ${isInView ? "is-visible" : ""}`}>
      <div className="section-eyebrow">
        {icon}
        <span>{label}</span>
      </div>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
