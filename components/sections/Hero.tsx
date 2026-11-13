"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Sparkles, Terminal, Code, Cpu, Database, Flame, Box, Volume2, VolumeX, Play, Pause, RefreshCw, Sliders, MessageSquare, Video, Activity, Loader2 } from "lucide-react"
import { motion } from "motion/react"
import Navbar from "@/components/Navbar"
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
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)
  const [terminalLine, setTerminalLine] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const audioTimerRef = useRef<number | null>(null)
  
  const terminalLines = [
    "$ init jeevananthan-profile",
    "> Loading full-stack framework... [DONE]",
    "> Establishing Salesforce API Tunnel... [OK]",
    "> System Status: Open to collaborate.",
    "$ npm run develop-dreams",
    "> Compile complete. Interactive Portfolio is live!"
  ]

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none) and (pointer: coarse)").matches)
    
    // Auto typing terminal effect
    const interval = setInterval(() => {
      setTerminalLine((prev) => (prev + 1) % (terminalLines.length + 1))
    }, 3500)

    // Canvas background particles
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext("2d")
      if (ctx) {
        let animationFrameId: number
        let particles: Array<{ x: number; y: number; speed: number; radius: number; opacity: number }> = []
        
        const resizeCanvas = () => {
          canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth
          canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight
        }
        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        // Initialize particles
        for (let i = 0; i < 40; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: 0.2 + Math.random() * 0.5,
            radius: 1 + Math.random() * 2,
            opacity: 0.15 + Math.random() * 0.4
          })
        }

        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.fillStyle = "rgba(255, 62, 0, 0.45)"
          
          particles.forEach((p) => {
            p.y -= p.speed
            if (p.y < 0) {
              p.y = canvas.height
              p.x = Math.random() * canvas.width
            }
            ctx.beginPath()
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
            ctx.globalAlpha = p.opacity
            ctx.fill()
          })
          
          animationFrameId = requestAnimationFrame(animate)
        }
        animate()

        return () => {
          window.removeEventListener("resize", resizeCanvas)
          cancelAnimationFrame(animationFrameId)
        }
      }
    }

    return () => {
      clearInterval(interval)
    }
  }, [])

  const handlePlayVoiceIntro = () => {
    if (typeof window === "undefined") return

    if (isPlayingAudio) {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
      setIsPlayingAudio(false)
      if (audioTimerRef.current) {
        clearTimeout(audioTimerRef.current)
        audioTimerRef.current = null
      }
      return
    }

    setIsPlayingAudio(true)

    // Speech Text
    const speechText = "Hello! I am Jeevananthan V, a Full Stack Developer based in Salem, Tamil Nadu. Welcome to my digital portfolio! I build high-performance web applications with React, Node.js, and Salesforce Apex. I hope you enjoy exploring my work!"

    if (window.speechSynthesis) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(speechText)
      utterance.rate = 1.02
      utterance.pitch = 0.96

      // Select high quality voice if available
      const voices = window.speechSynthesis.getVoices()
      const primaryVoice = voices.find(v => v.name.toLowerCase().includes("google uk english male") || v.name.toLowerCase().includes("male") || v.lang.startsWith("en"))
      if (primaryVoice) utterance.voice = primaryVoice

      utterance.onend = () => {
        setIsPlayingAudio(false)
      }
      utterance.onerror = () => {
        setIsPlayingAudio(false)
      }

      window.speechSynthesis.speak(utterance)
      
      // Fallback timer for browsers that restrict speechSynthesis
      audioTimerRef.current = window.setTimeout(() => {
        setIsPlayingAudio(false)
      }, 16000)
    } else {
      // Direct visual simulation fallback
      audioTimerRef.current = window.setTimeout(() => {
        setIsPlayingAudio(false)
      }, 8000)
    }
  }

  useEffect(() => {
    return () => {
      if (audioTimerRef.current) {
        clearTimeout(audioTimerRef.current)
      }
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  return (
    <>
      <GSAPScrollController />
      <div className="blob" aria-hidden="true" />
      <Navbar />

      {/* Dynamic Keyframe style injector for background video simulation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes kenburns {
          0% { transform: scale(1.02) translate(0, 0); }
          50% { transform: scale(1.10) translate(-0.8%, 1.2%); }
          100% { transform: scale(1.02) translate(0, 0); }
        }
        @keyframes audio-wave-anim {
          0%, 100% { height: 4px; }
          50% { height: 18px; }
        }
      `}} />

      {/* Hero Section */}
      <section id="hero" className="hero-section" style={{ minHeight: "100vh", padding: "clamp(4rem, 10vw, 8.75rem) 0 clamp(3rem, 7vw, 5rem)", overflow: "hidden" }}>
        
        {/* Dynamic Image Background acting as background video */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 1, background: "#050505" }}>
          <img
            src="/jeevan.jpg"
            alt="Dynamic Atmosphere Backdrop"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 20%",
              filter: "brightness(0.35) contrast(1.1) saturate(0.9)",
              opacity: 0.45,
              animation: "kenburns 22s infinite ease-in-out",
            }}
          />
          {/* Active Canvas Floating Particle Stream Overlay */}
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              mixBlendMode: "screen"
            }}
          />
          {/* Dark Glassmorphic Vignette Mask */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at 50% 50%, rgba(10, 10, 10, 0.15) 0%, rgba(10, 10, 10, 0.95) 100%), linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.6) 100%)",
            }}
          />
        </div>

        <div className="container hero-container" style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1280px" }}>
          
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(2rem, 5vw, 3.5rem)", alignItems: "center" }}>
            
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
              <div className="hero-title-container" style={{ maxWidth: "100%" }}>
                <h1
                  className="hero-name-heading"
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
                    textAlign: "left",
                  }}
                >
                  <div style={{ overflow: "hidden", display: "inline-block", marginRight: "16px" }}>
                    <motion.span
                      initial={{ y: "100%", display: "inline-block" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      JEEVANANTHAN
                    </motion.span>
                  </div>
                  <div style={{ overflow: "hidden", display: "inline-block" }}>
                    <motion.span
                      initial={{ y: "100%", display: "inline-block" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      style={{ color: "var(--accent)" }}
                    >
                      V
                    </motion.span>
                  </div>
                  <motion.span 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    style={{ display: "block", fontSize: "clamp(0.9rem, 2vw, 1.1rem)", fontWeight: 600, letterSpacing: "0.08em", color: "#aaa", marginTop: "12px", textTransform: "none" }}
                  >
                    Full Stack Developer — Salem, TN
                  </motion.span>
                </h1>
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

                {/* Voice Intro Connected Audio Button */}
                <motion.button
                  onClick={handlePlayVoiceIntro}
                  whileHover={{ scale: 1.04, borderColor: "rgba(255, 62, 0, 0.5)", background: "rgba(255, 62, 0, 0.08)" }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: "clamp(0.7rem, 2vw, 0.875rem) clamp(1.2rem, 3.5vw, 1.5rem)",
                    background: isPlayingAudio ? "rgba(255, 62, 0, 0.12)" : "rgba(255, 255, 255, 0.03)",
                    border: isPlayingAudio ? "1px solid var(--accent)" : "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#fff",
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: "clamp(0.7rem, 1.8vw, 0.85rem)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    borderRadius: "6px",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  {isPlayingAudio ? (
                    <>
                      <span>Mute Audio</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "2px", height: "18px" }}>
                        <div style={{ width: "3px", background: "var(--accent)", animation: "audio-wave-anim 0.8s infinite ease-in-out", animationDelay: "0.1s" }} />
                        <div style={{ width: "3px", background: "var(--accent)", animation: "audio-wave-anim 0.8s infinite ease-in-out", animationDelay: "0.3s" }} />
                        <div style={{ width: "3px", background: "var(--accent)", animation: "audio-wave-anim 0.8s infinite ease-in-out", animationDelay: "0.5s" }} />
                      </div>
                    </>
                  ) : (
                    <>
                      <span>Listen to Audio</span>
                      <Volume2 size={16} color="var(--accent)" />
                    </>
                  )}
                </motion.button>
              </motion.div>
            </div>

            {/* Right Column: Premium Developer Terminal Console Redesign */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-tech-showcase"
              style={{ position: "relative", minHeight: "clamp(300px, 45vw, 420px)", width: "100%" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "clamp(300px, 45vw, 420px)",
                  borderRadius: "16px",
                  background: "rgba(10, 10, 10, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.8)",
                  padding: "24px",
                  fontFamily: "var(--font-mono, monospace)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden"
                }}
              >
                {/* Windows/Mac Mockup Control Dots */}
                <div style={{ display: "flex", gap: "6px", marginBottom: "20px" }}>
                  <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#ff5f56" }} />
                  <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#ffbd2e" }} />
                  <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#27c93f" }} />
                </div>
                
                {/* Console Log Feed */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {terminalLines.map((line, idx) => {
                    const isVisible = terminalLine >= idx
                    if (!isVisible) return null
                    const isCmd = line.startsWith("$")
                    return (
                      <div
                        key={idx}
                        style={{
                          fontSize: "clamp(0.75rem, 1.8vw, 0.85rem)",
                          color: isCmd ? "var(--accent)" : "#888",
                          lineHeight: 1.4,
                          display: "flex",
                          alignItems: "center",
                          gap: "8px"
                        }}
                      >
                        {isCmd ? <Terminal size={12} color="var(--accent)" /> : null}
                        <span>{line}</span>
                      </div>
                    )
                  })}
                  {/* Blinking Prompt Cursor */}
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ color: "#444", fontSize: "0.85rem" }}>_</span>
                    <span
                      style={{
                        width: "6px",
                        height: "14px",
                        background: "var(--accent)",
                        animation: "pulse 1s infinite"
                      }}
                    />
                  </div>
                </div>

                {/* Developer Coordinates HUD */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.68rem",
                    color: "#555",
                    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                    paddingTop: "12px",
                    marginTop: "16px"
                  }}
                >
                  <span>LOC: SALEM, TN, IN</span>
                  <span>UTF-8 // NEXT.JS</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>
    </>
  )
}



