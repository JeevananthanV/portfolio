"use client"

import { Code2, Server, Wrench, Sparkles } from "lucide-react"
import { motion } from "motion/react"

const skillGroups = [
  {
    label: "FRONTEND ENGINEERING",
    icon: Code2,
    skills: ["React 19", "Next.js", "TypeScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Responsive UI/UX", "GSAP / Motion"],
  },
  {
    label: "BACKEND & PLATFORMS",
    icon: Server,
    skills: ["Node.js", "Express.js", "Java Servlets", "Salesforce (Apex)", "MySQL", "PostgreSQL", "REST APIs", "cPanel / Passenger"],
  },
  {
    label: "TOOLS & SPECIALIZATIONS",
    icon: Wrench,
    skills: ["Git", "GitHub", "Payment Gateway Integration", "Razorpay", "EPUB Handling", "PDF Accessibility", "CI/CD"],
  },
]

export default function SkillsChips() {
  return (
    <section id="skills" style={{ padding: "clamp(4rem, 8vw, 7.5rem) 0", background: "rgba(255,255,255,0.01)" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "clamp(3rem, 6vw, 4rem)" }}
        >
          <span style={{ color: "var(--accent)", fontFamily: "var(--font-syne)", fontSize: "clamp(0.65rem, 1.8vw, 0.8rem)", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>
            TECHNICAL PROFICIENCY
          </span>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
              marginTop: "8px",
              lineHeight: 1.1,
            }}
          >
            SKILLS & TOOLING
          </h2>
        </motion.div>

        {/* Skill Groups */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1.5rem, 4vw, 2.25rem)" }}>
          {skillGroups.map((group, groupIdx) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: groupIdx * 0.15 }}
                whileHover={{ borderColor: "rgba(255, 62, 0, 0.3)" }}
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  padding: "clamp(1.25rem, 3vw, 2rem)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  transition: "border-color 0.3s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                  <div style={{ color: "var(--accent)" }}>
                    <Icon size={22} />
                  </div>
                  <span style={{ fontSize: "clamp(0.7rem, 2vw, 0.82rem)", textTransform: "uppercase", letterSpacing: "0.15em", color: "#eee", fontFamily: "var(--font-syne)", fontWeight: 700 }}>
                    {group.label}
                  </span>
                </div>

                <div style={{ display: "flex", gap: "clamp(0.5rem, 1.5vw, 0.625rem)", flexWrap: "wrap" }}>
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08, y: -2, borderColor: "var(--accent)", color: "var(--accent)" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      style={{
                        padding: "clamp(0.35rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1.125rem)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "999px",
                        fontSize: "clamp(0.65rem, 1.8vw, 0.85rem)",
                        color: "#ddd",
                        background: "rgba(255,255,255,0.03)",
                        cursor: "default",
                        display: "inline-block",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

