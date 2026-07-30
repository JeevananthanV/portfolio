const skillGroups = [
  {
    label: "FRONTEND",
    skills: ["React.js", "HTML5", "CSS3", "Bootstrap", "Responsive Design"],
  },
  {
    label: "BACKEND & PLATFORMS",
    skills: ["Node.js", "Java Servlets", "Salesforce (Apex)", "MySQL"],
  },
  {
    label: "TOOLS",
    skills: ["Git", "GitHub", "Payment Gateway Integration", "EPUB Handling", "PDF Accessibility"],
  },
]

export default function SkillsChips() {
  return (
    <section id="skills">
      <div className="container" style={{ maxWidth: "900px" }}>
        <h2 className="reveal-text" style={{ fontFamily: "var(--font-syne)", fontSize: "2rem", marginBottom: "40px" }}>
          SKILLS
        </h2>

        {skillGroups.map((group) => (
          <div key={group.label} style={{ marginBottom: "32px" }}>
            <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#666" }}>
              {group.label}
            </span>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "12px" }}>
              {group.skills.map((skill, i) => (
                <span
                  key={skill}
                  className="skill-chip"
                  style={{
                    padding: "8px 16px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "999px",
                    fontSize: "0.8rem",
                    color: "#ccc",
                    transition: "all 0.3s ease",
                    animationDelay: `${i * 40}ms`,
                    animationFillMode: "both",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}