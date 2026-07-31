"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code2, Server, Wrench } from "lucide-react"

const skillGroups = [
  {
    label: "FRONTEND ENGINEERING",
    icon: Code2,
    skills: ["React.js", "Next.js", "TypeScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Responsive UI/UX"],
  },
  {
    label: "BACKEND & PLATFORMS",
    icon: Server,
    skills: ["Node.js", "Express.js", "Java Servlets", "Salesforce (Apex)", "MySQL", "PostgreSQL", "REST APIs"],
  },
  {
    label: "TOOLS & SPECIALIZATIONS",
    icon: Wrench,
    skills: ["Git", "GitHub", "Payment Gateway Integration", "EPUB Handling", "PDF Accessibility", "CI/CD"],
  },
]

export default function SkillsChips() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const groups = sectionRef.current?.querySelectorAll(".skill-group")
      if (groups) {
        gsap.fromTo(
          groups,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={sectionRef} style={{ padding: "100px 0", background: "rgba(255,255,255,0.01)" }}>
      <div className="container" style={{ maxWidth: "950px", padding: "0 24px" }}>
        
        <div style={{ marginBottom: "48px" }}>
          <span style={{ color: "var(--accent)", fontFamily: "var(--font-syne)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>
            TECHNICAL PROFICIENCY
          </span>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              marginTop: "8px",
              lineHeight: 1.1,
            }}
          >
            SKILLS & TOOLING
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <div
                key={group.label}
                className="skill-group"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "14px",
                  padding: "28px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <div style={{ color: "var(--accent)" }}>
                    <Icon size={20} />
                  </div>
                  <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#ddd", fontFamily: "var(--font-syne)", fontWeight: 700 }}>
                    {group.label}
                  </span>
                </div>

                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-chip"
                      style={{
                        padding: "8px 18px",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "999px",
                        fontSize: "0.85rem",
                        color: "#eee",
                        background: "rgba(255,255,255,0.03)",
                        transition: "all 0.3s ease",
                        display: "inline-block",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
