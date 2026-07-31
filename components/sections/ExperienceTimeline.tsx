"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Briefcase, Calendar, ChevronRight } from "lucide-react"

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
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Timeline line growth animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 0.5,
          },
        }
      )

      // Cards staggered reveal
      const cardElements = cardsRef.current?.querySelectorAll(".experience-card")
      if (cardElements) {
        gsap.fromTo(
          cardElements,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" ref={sectionRef} style={{ padding: "100px 0" }}>
      <div className="container" style={{ maxWidth: "900px", padding: "0 24px" }}>
        <div style={{ marginBottom: "48px" }}>
          <span style={{ color: "var(--accent)", fontFamily: "var(--font-syne)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>
            CAREER PATH
          </span>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              marginTop: "8px",
              lineHeight: 1.1,
            }}
          >
            WORK EXPERIENCE
          </h2>
        </div>

        <div ref={cardsRef} style={{ position: "relative", paddingLeft: "36px" }}>
          {/* Vertical progress line */}
          <div
            ref={lineRef}
            style={{
              position: "absolute",
              left: "6px",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(to bottom, var(--accent), rgba(255,62,0,0.2))",
              transformOrigin: "top",
            }}
          />

          {roles.map((role) => (
            <div
              key={role.company}
              className="experience-card"
              style={{
                marginBottom: "48px",
                position: "relative",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "12px",
                padding: "28px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-36px",
                  top: "28px",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  boxShadow: "0 0 12px var(--accent)",
                  transform: "translateX(-50%)",
                }}
              />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.3rem", color: "#fff", fontWeight: 700 }}>
                    {role.role}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--accent)", fontSize: "0.95rem", fontWeight: 600, marginTop: "4px" }}>
                    <Briefcase size={15} />
                    <span>{role.company}</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(255, 255, 255, 0.05)", padding: "4px 12px", borderRadius: "999px", fontSize: "0.75rem", color: "#aaa" }}>
                  <Calendar size={13} color="var(--accent)" />
                  <span>{role.period}</span>
                </div>
              </div>

              <ul style={{ listStyle: "none", padding: 0, marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    style={{
                      fontSize: "0.9rem",
                      color: "#bbb",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      lineHeight: 1.6,
                    }}
                  >
                    <ChevronRight size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: "3px" }} />
                    <span>{bullet}</span>
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
