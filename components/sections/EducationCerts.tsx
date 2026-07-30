"use client"

import { useRef } from "react"
import { useReveal } from "@/lib/hooks/useReveal"

const education = {
  degree: "B.E. Computer Science and Engineering",
  college: "K.S. Rangasamy College of Technology",
  period: "2020 – 2024",
  cgpa: "8.02 / 10",
  school: "Jay Matriculation Hr. Sec. School",
}

const certifications = [
  "Salesforce Developer",
  "NPTEL IoT",
  "NASSCOM FutureSkills",
  "Algorithm Arena 1st Place",
]

export default function EducationCerts() {
  const ref = useRef<HTMLDivElement>(null)
  const isRevealed = useReveal(ref)

  return (
    <section id="education">
      <div className="container" style={{ maxWidth: "900px" }}>
        <h2
          className="reveal-text"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "2rem",
            marginBottom: "40px",
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          EDUCATION & CERTIFICATIONS
        </h2>

        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
          <div
            style={{
              opacity: isRevealed ? 1 : 0,
              transform: isRevealed ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#666" }}>
              {education.period}
            </span>
            <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.2rem", margin: "8px 0" }}>
              {education.degree}
            </h3>
            <p style={{ fontSize: "0.85rem", color: "#aaa" }}>{education.college}</p>
            <p style={{ fontFamily: "var(--font-syne)", fontSize: "1.5rem", marginTop: "16px", color: "var(--accent)" }}>
              {education.cgpa}
            </p>
          </div>

          <div
            style={{
              opacity: isRevealed ? 1 : 0,
              transform: isRevealed ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#666", display: "block", marginBottom: "12px" }}>
              CERTIFICATIONS
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {certifications.map((cert, i) => (
                <div
                  key={cert}
                  className="reveal-text"
                  style={{
                    padding: "8px 16px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "4px",
                    fontSize: "0.85rem",
                    opacity: isRevealed ? 1 : 0,
                    transform: isRevealed ? "translateY(0)" : "translateY(10px)",
                    transition: `opacity 0.4s ease ${0.3 + i * 0.1}s, transform 0.4s ease ${0.3 + i * 0.1}s`,
                  }}
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}