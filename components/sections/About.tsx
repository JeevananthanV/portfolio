"use client"

import { useState, useEffect, useRef } from "react"
import { useCountUp } from "@/lib/hooks/useCountUp"
import { motion } from "motion/react"
import { Layers, Zap, ShieldCheck } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Tilt3DCard from "@/components/3d/Tilt3DCard"

const stats = [
  { label: "YEARS EXP", value: 1 },
  { label: "COMPANIES", value: 2 },
  { label: "PROJECTS", value: 7 },
  { label: "CGPA", value: 8.02 },
]

const corePillars = [
  {
    title: "Scalable Architecture",
    icon: Layers,
    description: "Designing modular, maintainable full-stack systems with clean REST APIs and robust database schemas.",
  },
  {
    title: "Performance & UX",
    icon: Zap,
    description: "Prioritizing fast page loads, fluid GSAP/Motion animations, and responsive cross-device layouts.",
  },
  {
    title: "Enterprise Reliability",
    icon: ShieldCheck,
    description: "Integrating secure payment workflows, Salesforce Apex integrations, and automated deployment pipelines.",
  },
]

export default function About() {
  const [activePillar, setActivePillar] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".about-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      )

      // Left Image Wrapper reveal
      gsap.fromTo(
        ".about-image-wrapper",
        { opacity: 0, scale: 0.88, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      )

      // Right Bio Text reveal
      gsap.fromTo(
        ".about-bio-text",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      )

      // Staggered Core Pillars Cards
      gsap.fromTo(
        ".about-pillar-card",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-pillars-container",
            start: "top 82%",
          },
        }
      )

      // Staggered Stats Cards
      gsap.fromTo(
        ".about-stat-card",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-stats-container",
            start: "top 85%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" style={{ padding: "clamp(4rem, 8vw, 7.5rem) 0", background: "rgba(255,255,255,0.01)" }}>
      <div className="container" style={{ maxWidth: "1100px" }}>
        
        {/* Section Title */}
        <div className="about-header" style={{ marginBottom: "60px" }}>
          <span style={{ color: "var(--accent)", fontFamily: "var(--font-syne)", fontSize: "clamp(0.7rem, 2vw, 0.8rem)", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>
            ABOUT ME
          </span>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
              marginTop: "8px",
              lineHeight: 1.1,
            }}
          >
            ENGINEERING VALUE & USER EXPERIENCES
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(2rem, 5vw, 3.5rem)",
            alignItems: "center",
          }}
        >
          {/* Left Column: Image Box & Live Badge */}
          <div className="about-image-wrapper" style={{ textAlign: "center", position: "relative" }}>
            <Tilt3DCard intensity={15} style={{ display: "inline-block" }}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "24px",
                  padding: "8px",
                  background: "linear-gradient(135deg, rgba(255,62,0,0.3) 0%, rgba(255,255,255,0.05) 50%, rgba(212,175,55,0.2) 100%)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(255, 62, 0, 0.15)",
                }}
              >
                <div style={{ borderRadius: "18px", overflow: "hidden", position: "relative", width: "clamp(240px, 70vw, 300px)", height: "clamp(280px, 80vw, 360px)" }}>
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
                    alt="JEEVANANTHAN V - Full Stack Software Engineer"
                    referrerPolicy="no-referrer"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      filter: "contrast(1.05) brightness(0.98)",
                      display: "block",
                    }}
                  />
                  {/* Subtle Dark Vignette Gradient */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 40%, rgba(14,14,14,0.85) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                  {/* Location Tag */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      background: "rgba(14, 14, 14, 0.85)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "999px",
                      padding: "4px 12px",
                      fontSize: "clamp(0.6rem, 1.8vw, 0.72rem)",
                      fontWeight: 600,
                      color: "#eee",
                      fontFamily: "var(--font-inter)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    📍 SALEM, TN, INDIA
                  </div>
                </div>

                {/* Floating Role Badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-14px",
                    right: "-14px",
                    background: "var(--accent)",
                    color: "#0e0e0e",
                    padding: "clamp(0.5rem, 1.5vw, 0.5rem) clamp(1rem, 2.5vw, 1.125rem)",
                    borderRadius: "10px",
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    fontSize: "clamp(0.65rem, 1.8vw, 0.8rem)",
                    letterSpacing: "0.05em",
                    boxShadow: "0 10px 25px rgba(255, 62, 0, 0.4)",
                  }}
                >
                  FULL STACK DEVELOPER
                </div>
              </div>
            </Tilt3DCard>
          </div>

          {/* Right Column: Bio & Core Engineering Pillars */}
          <div>
            <p
              className="about-bio-text"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.05rem)",
                fontWeight: 300,
                color: "#ccc",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              I&apos;m a Full Stack Developer based in Salem, Tamil Nadu, specializing in modern web architecture, interactive user interfaces, and robust backend integrations. With professional experience across Ethiroli Pvt Ltd and Jayalakshmi Groups, I bring full-lifecycle expertise spanning React 19, Node.js, Express, MySQL, and Salesforce Apex.
            </p>

            {/* Core Philosophy Pillar Selector */}
            <div className="about-pillars-container" style={{ marginBottom: "36px" }}>
              <div style={{ fontSize: "clamp(0.65rem, 1.8vw, 0.75rem)", color: "#888", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "12px", fontFamily: "var(--font-syne)", fontWeight: 700 }}>
                Core Engineering Pillars:
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
                {corePillars.map((pillar, idx) => {
                  const Icon = pillar.icon
                  const isActive = activePillar === idx
                  return (
                    <motion.div
                      key={pillar.title}
                      className="about-pillar-card"
                      onClick={() => setActivePillar(idx)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        padding: "16px",
                        background: isActive ? "rgba(255, 62, 0, 0.12)" : "rgba(255,255,255,0.03)",
                        border: isActive ? "1px solid var(--accent)" : "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "12px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", color: isActive ? "var(--accent)" : "#fff", fontWeight: 700, fontSize: "clamp(0.75rem, 2vw, 0.9rem)", marginBottom: "6px" }}>
                        <Icon size={18} /> {pillar.title}
                      </div>
                      <p style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)", color: "#aaa", lineHeight: 1.5, margin: 0 }}>
                        {pillar.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Stats Grid with Count Up */}
            <div
              className="about-stats-container"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
                gap: "16px",
              }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="about-stat-card"
                  whileHover={{ y: -3, borderColor: "var(--accent)" }}
                  style={{
                    padding: "16px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderTop: "2px solid var(--accent)",
                    borderRadius: "10px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <StatCount target={stat.value} label={stat.label} />
                </motion.div>
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
      <span style={{ fontFamily: "var(--font-syne)", fontSize: "2rem", fontWeight: 800, color: "#fff" }}>
        {count}{target < 10 ? "+" : ""}
      </span>
      <p
        style={{
          fontSize: "0.65rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#888",
          marginTop: "4px",
        }}
      >
        {label}
      </p>
    </div>
  )
}

