"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Sparkles, Terminal, Code, Cpu, Database, Flame, Box } from "lucide-react"
import { motion } from "motion/react"
import Navbar from "@/components/Navbar"
import Hero3DCanvas from "@/components/3d/Hero3DCanvas"
import Tilt3DCard from "@/components/3d/Tilt3DCard"
import GSAPScrollController from "@/components/animation/GSAPScrollController"
import BackgroundVideoContainer from "@/components/ui/BackgroundVideoContainer"

const techPills = [
  { name: "React 19", icon: Code },
  { name: "Node.js", icon: Terminal },
  { name: "Express.js", icon: Cpu },
  { name: "MySQL / Postgre", icon: Database },
  { name: "Salesforce Apex", icon: Flame },
]

export default function Hero() {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none) and (pointer: coarse)").matches)
  }, [])

  return (
    <>
      <GSAPScrollController />
      <div className="blob" aria-hidden="true" />
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="hero-section" style={{ minHeight: "100vh", padding: "clamp(4rem, 10vw, 8.75rem) 0 clamp(3rem, 7vw, 5rem)", overflow: "hidden" }}>
        <BackgroundVideoContainer posterImage="/man_mountains_clouds_118031_1366x768.jpg" overlayOpacity={0.7} />

        <div className="container hero-container" style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1280px" }}>
          
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(1.5rem, 4vw, 2.5rem)", alignItems: "center" }}>
            
            {/* Left Content Column */}
            <div className="hero-content">
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "backOut" }}
                style={{ marginBottom: "20px" }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 16px",
                    border: "1px solid var(--accent)",
                    color: "var(--accent)",
                    fontFamily: "var(--font-inter)",
                    fontSize: "clamp(0.65rem, 1.8vw, 0.75rem)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    borderRadius: "999px",
                    background: "rgba(255, 62, 0, 0.08)",
                    boxShadow: "0 0 16px rgba(255, 62, 0, 0.15)",
                  }}
                >
                  <Sparkles size={14} /> OPEN FOR FULL-TIME & FREELANCE ROLES
                </span>
              </motion.div>

              {/* Animated Hero Name Heading */}
              <div className="hero-title-container" style={{ maxWidth: "100%", overflow: "hidden" }}>
                <motion.h1
                  className="hero-name-heading"
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    fontSize: "clamp(2.2rem, 6.5vw, 6.8rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.03em",
                    textTransform: "uppercase",
                    wordBreak: "break-word",
                    margin: 0,
                    color: "#ffffff",
                  }}
                >
                  JEEVANANTHAN <span style={{ color: "var(--accent)" }}>V</span>
                </motion.h1>
              </div>

              {/* Subtitle & Role */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                style={{ marginTop: "20px" }}
              >
                <p
                  style={{
                    fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
                    fontWeight: 500,
                    color: "#eee",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  Full Stack Web Developer & Software Engineer
                </p>
                <p
                  style={{
                    fontSize: "clamp(0.8rem, 1.8vw, 0.92rem)",
                    color: "#888",
                    fontFamily: "var(--font-inter)",
                    marginTop: "8px",
                  }}
                >
                  Based in Salem, Tamil Nadu, India — Specializing in React.js, Node.js, & Scalable Web Applications
                </p>
              </motion.div>

              {/* Interactive Tech Stack Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "24px" }}
              >
                {techPills.map((tech) => {
                  const IconComponent = tech.icon
                  return (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.06, y: -3, borderColor: "var(--accent)" }}
                      whileTap={{ scale: 0.96 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "6px 14px",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "999px",
                        fontSize: "clamp(0.65rem, 1.8vw, 0.8rem)",
                        color: "#ccc",
                        cursor: "default",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <IconComponent size={14} color="var(--accent)" />
                      <span>{tech.name}</span>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Action Callouts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="hero-controls-row"
                style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}
              >
                <motion.a
                  href="#work"
                  whileHover={{ scale: 1.04, boxShadow: "0 10px 25px rgba(255, 62, 0, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: "clamp(0.7rem, 2vw, 0.875rem) clamp(1.5rem, 4vw, 1.75rem)",
                    background: "var(--accent)",
                    color: "#0e0e0e",
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    fontSize: "clamp(0.7rem, 1.8vw, 0.85rem)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    textDecoration: "none",
                    borderRadius: "6px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  View Selected Work <ArrowUpRight size={16} />
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04, borderColor: "rgba(255, 255, 255, 0.4)", background: "rgba(255, 255, 255, 0.08)" }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: "clamp(0.7rem, 2vw, 0.875rem) clamp(1.5rem, 4vw, 1.75rem)",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#fff",
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: "clamp(0.7rem, 1.8vw, 0.85rem)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    textDecoration: "none",
                    borderRadius: "6px",
                  }}
                >
                  Contact Me
                </motion.a>
              </motion.div>
            </div>

            {/* Right Column: 3D Interactive WebGL Stage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-canvas-wrapper"
              style={{ position: "relative", minHeight: "clamp(300px, 50vw, 480px)", width: "100%" }}
            >
              <Tilt3DCard intensity={12}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    minHeight: "clamp(300px, 50vw, 480px)",
                    borderRadius: "20px",
                    background: "radial-gradient(circle at center, rgba(255, 62, 0, 0.08) 0%, rgba(10, 10, 10, 0.85) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
                    overflow: "hidden",
                  }}
                >
                  <Hero3DCanvas />
                </div>
              </Tilt3DCard>
            </motion.div>

          </div>

        </div>
      </section>
    </>
  )
}


