"use client"

import { useRef } from "react"
import { useReveal } from "@/lib/hooks/useReveal"

const roles = [
  {
    company: "Ethiroli Pvt Ltd",
    role: "Web Developer",
    period: "Feb 2026 – Present",
    bullets: [
      "Built and maintained client-facing web applications using React.js and Node.js",
      "Collaborated with design team to implement responsive layouts and component libraries",
      "Integrated payment gateway and third-party APIs for production workflows",
    ],
  },
  {
    company: "Jayalakshmi Groups",
    role: "Web Developer",
    period: "Aug 2025 – Feb 2026",
    bullets: [
      "Developed corporate websites with multi-location support and branch directories",
      "Created investor relations sections with financial report integration",
      "Optimized site performance and implemented CI/CD pipelines",
    ],
  },
]

export default function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const isRevealed = useReveal(ref)

  return (
    <section id="experience">
      <div className="container" style={{ maxWidth: "900px" }}>
        <h2
          className="reveal-text"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "2rem",
            marginBottom: "60px",
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          EXPERIENCE
        </h2>

        <div ref={ref} style={{ position: "relative", paddingLeft: "30px" }}>
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "2px",
              background: "var(--accent)",
              transformOrigin: "top",
              transform: isRevealed ? "scaleY(1)" : "scaleY(0)",
              transition: "transform 1.5s ease-out",
            }}
          />

          {roles.map((role, i) => (
            <div
              key={role.company}
              className="timeline-card"
              style={{
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed
                  ? "translateX(0)"
                  : `translateX(${i === 0 ? "40px" : "-40px"})`,
                transition: `opacity 0.6s ease ${i * 0.2}s, transform 0.6s ease ${i * 0.2}s`,
                marginBottom: "48px",
                position: "relative",
                paddingLeft: "24px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-30px",
                  top: "8px",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  boxShadow: "0 0 10px var(--accent)",
                }}
              />

              <span style={{ fontFamily: "var(--font-syne)", color: "var(--accent)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {role.period}
              </span>

              <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.3rem", margin: "8px 0 4px" }}>
                {role.role} @ {role.company}
              </h3>

              <ul style={{ listStyle: "none", padding: 0, marginTop: "12px" }}>
                {role.bullets.map((bullet, j) => (
                  <li
                    key={bullet}
                    style={{
                      marginBottom: "12px",
                      fontSize: "0.95rem",
                      color: "#aaa",
                      opacity: isRevealed ? 1 : 0,
                      transform: isRevealed ? "translateY(0)" : "translateY(10px)",
                      transition: `opacity 0.4s ease ${i * 0.2 + j * 0.1}s, transform 0.4s ease ${i * 0.2 + j * 0.1}s`,
                    }}
                  >
                    <span style={{ color: "var(--accent)", marginRight: "8px" }}>▸</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}