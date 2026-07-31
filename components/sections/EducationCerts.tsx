"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GraduationCap, Award, CheckCircle } from "lucide-react"

const education = {
  degree: "B.E. Computer Science and Engineering",
  college: "K.S. Rangasamy College of Technology",
  period: "2020 – 2024",
  cgpa: "8.02 / 10",
  school: "Jay Matriculation Hr. Sec. School",
}

const certifications = [
  "Salesforce Developer Certification",
  "NPTEL Internet of Things (IoT)",
  "NASSCOM FutureSkills Prime",
  "Algorithm Arena 1st Place Winner",
]

export default function EducationCerts() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const eduCardRef = useRef<HTMLDivElement>(null)
  const certCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        eduCardRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      )

      gsap.fromTo(
        certCardRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="education" ref={sectionRef} style={{ padding: "100px 0" }}>
      <div className="container" style={{ maxWidth: "1000px", padding: "0 24px" }}>
        
        <div style={{ marginBottom: "48px" }}>
          <span style={{ color: "var(--accent)", fontFamily: "var(--font-syne)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>
            ACADEMICS & CREDENTIALS
          </span>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              marginTop: "8px",
              lineHeight: 1.1,
            }}
          >
            EDUCATION & CERTS
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
          
          {/* Education Box */}
          <div
            ref={eduCardRef}
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "32px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--accent)", marginBottom: "16px" }}>
              <GraduationCap size={24} />
              <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#ddd", fontFamily: "var(--font-syne)", fontWeight: 700 }}>
                HIGHER EDUCATION
              </span>
            </div>

            <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", fontWeight: 600 }}>
              {education.period}
            </span>
            <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.3rem", color: "#fff", margin: "8px 0" }}>
              {education.degree}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#aaa" }}>{education.college}</p>
            
            <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: "0.8rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.05em" }}>Cumulative Score</span>
              <span style={{ fontFamily: "var(--font-syne)", fontSize: "1.4rem", fontWeight: 800, color: "var(--accent)" }}>
                CGPA {education.cgpa}
              </span>
            </div>
          </div>

          {/* Certifications Box */}
          <div
            ref={certCardRef}
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "32px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--accent)", marginBottom: "20px" }}>
              <Award size={24} />
              <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#ddd", fontFamily: "var(--font-syne)", fontWeight: 700 }}>
                CERTIFICATIONS & AWARDS
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {certifications.map((cert) => (
                <div
                  key={cert}
                  style={{
                    padding: "12px 16px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    color: "#eee",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <CheckCircle size={16} color="var(--accent)" style={{ flexShrink: 0 }} />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
