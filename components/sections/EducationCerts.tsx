"use client"

import { GraduationCap, Award, CheckCircle } from "lucide-react"
import { motion } from "motion/react"

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
  return (
    <section id="education" style={{ padding: "clamp(4rem, 8vw, 7.5rem) 0" }}>
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
            ACADEMICS & CREDENTIALS
          </span>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
              marginTop: "8px",
              lineHeight: 1.1,
            }}
          >
            EDUCATION & CERTS
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(clamp(260px, 50vw, 320px), 1fr))", gap: "clamp(1.5rem, 4vw, 2rem)" }}>
          
          {/* Education Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4, borderColor: "rgba(255, 62, 0, 0.4)" }}
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "clamp(1.5rem, 3vw, 2.25rem)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              transition: "border-color 0.3s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--accent)", marginBottom: "16px" }}>
              <GraduationCap size={24} />
              <span style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.82rem)", textTransform: "uppercase", letterSpacing: "0.15em", color: "#eee", fontFamily: "var(--font-syne)", fontWeight: 700 }}>
                HIGHER EDUCATION
              </span>
            </div>

            <span style={{ fontSize: "clamp(0.65rem, 1.8vw, 0.78rem)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", fontWeight: 600 }}>
              {education.period}
            </span>
            <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)", color: "#fff", margin: "clamp(0.5rem, 1.5vw, 0.5rem) 0", fontWeight: 700 }}>
              {education.degree}
            </h3>
            <p style={{ fontSize: "clamp(0.8rem, 2vw, 0.92rem)", color: "#aaa" }}>{education.college}</p>
            
            <div style={{ marginTop: "clamp(1.25rem, 3vw, 1.75rem)", paddingTop: "clamp(1rem, 2vw, 1.25rem)", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)", color: "#888", textTransform: "uppercase", letterSpacing: "0.05em" }}>Cumulative Score</span>
              <span style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", fontWeight: 800, color: "var(--accent)" }}>
                CGPA {education.cgpa}
              </span>
            </div>
          </motion.div>

          {/* Certifications Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            whileHover={{ y: -4, borderColor: "rgba(255, 62, 0, 0.4)" }}
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "clamp(1.5rem, 3vw, 2.25rem)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              transition: "border-color 0.3s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--accent)", marginBottom: "20px" }}>
              <Award size={24} />
              <span style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.82rem)", textTransform: "uppercase", letterSpacing: "0.15em", color: "#eee", fontFamily: "var(--font-syne)", fontWeight: 700 }}>
                CERTIFICATIONS & AWARDS
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {certifications.map((cert) => (
                <motion.div
                  key={cert}
                  whileHover={{ scale: 1.02, x: 4, background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,62,0,0.3)" }}
                  style={{
                    padding: "clamp(0.7rem, 1.5vw, 0.875rem) clamp(0.875rem, 2vw, 1.125rem)",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "10px",
                    fontSize: "clamp(0.75rem, 1.8vw, 0.92rem)",
                    color: "#eee",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    transition: "all 0.2s ease",
                  }}
                >
                  <CheckCircle size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 500 }}>{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
