"use client"

import { useRef } from "react"
import { useReveal } from "@/lib/hooks/useReveal"
import { useCountUp } from "@/lib/hooks/useCountUp"

const stats = [
  { label: "YEAR EXPERIENCE", value: 1 },
  { label: "COMPANIES", value: 2 },
  { label: "PROJECTS", value: 7 },
  { label: "CGPA", value: 8.02 },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isRevealed = useReveal(sectionRef)

  return (
    <section id="about">
      <div className="container" style={{ maxWidth: "900px" }}>
        <div
          ref={sectionRef}
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "0 0 auto" }}>
            <img
              src="/portfolio.png"
              alt="JEEVANANTHAN V"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                border: "2px solid var(--accent)",
                filter: "grayscale(0.3)",
              }}
            />
          </div>
          <div style={{ flex: "1 1 400px" }}>
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
              WHO I AM
            </h2>

            <p
              className="reveal-text"
              style={{
                fontSize: "1.1rem",
                fontWeight: 300,
                color: "#aaa",
                lineHeight: 1.8,
                marginBottom: "48px",
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
              }}
            >
              I'm a full-stack developer based in Salem, Tamil Nadu, specializing in building
              performant web applications with a focus on clean architecture and user-centric design.
              With hands-on experience across the stack, I deliver end-to-end solutions from concept
              to deployment.
            </p>

            <div
              style={{
                display: "flex",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="reveal-text"
                  style={{
                    flex: "1 1 150px",
                    padding: "24px",
                    borderTop: "2px solid var(--accent)",
                    opacity: isRevealed ? 1 : 0,
                    transform: isRevealed ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.6s ease ${0.2 + i * 0.1}s, transform 0.6s ease ${0.2 + i * 0.1}s`,
                  }}
                >
                  <StatCount target={stat.value} label={stat.label} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCount({ target, label }: { target: number; label: string }) {
  const [count, ref] = useCountUp(target, 1200)

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <span style={{ fontFamily: "var(--font-syne)", fontSize: "2.5rem", fontWeight: 800 }}>
        {count}{target < 10 ? "+" : ""}
      </span>
      <p
        style={{
          fontSize: "0.7rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#666",
          marginTop: "8px",
        }}
      >
        {label}
      </p>
    </div>
  )
}