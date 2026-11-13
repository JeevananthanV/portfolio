"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "motion/react"
import { Activity, ArrowDown } from "lucide-react"

export default function GSAPScrollController() {
  const progressBarRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("Hero")

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Scroll progress bar drive
    const progressTrigger = ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const pct = Math.round(self.progress * 100)
        setScrollProgress(pct)
        if (progressBarRef.current) {
          progressBarRef.current.style.transform = `scaleX(${self.progress})`
        }
      },
    })

    // Section triggers for active indicator
    const sectionIds = ["hero", "about", "work", "skills", "experience", "education", "contact"]
    const sectionTriggers: ScrollTrigger[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top 40%",
          end: "bottom 40%",
          onEnter: () => setActiveSection(id.toUpperCase()),
          onEnterBack: () => setActiveSection(id.toUpperCase()),
        })
        sectionTriggers.push(st)
      }
    })

    // GSAP Split-word reveal animation on h2 headings
    const headings = document.querySelectorAll("h2")
    headings.forEach((heading) => {
      const text = heading.innerText
      if (!text) return
      
      const words = text.split(" ")
      heading.innerHTML = words.map(w => `
        <span style="display: inline-block; overflow: hidden; margin-right: 0.25em;">
          <span class="animate-word" style="display: inline-block; transform: translate3d(0, 100%, 0);">
            ${w}
          </span>
        </span>
      `).join("")
      
      const animateWords = heading.querySelectorAll(".animate-word")
      gsap.to(
        animateWords,
        {
          transform: "translate3d(0, 0%, 0)",
          duration: 0.8,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 88%",
            toggleActions: "play none none none"
          }
        }
      )
    })

    // Staggered reveal for cards across sections with 3D rotation reveals
    const staggerTriggers = [
      { selector: ".about-pillar-card", trigger: ".about-pillars-container" },
      { selector: ".about-stat-card", trigger: ".about-stats-container" },
      { selector: ".project-card", trigger: "#work" }
    ]

    staggerTriggers.forEach(({ selector, trigger }) => {
      const elements = document.querySelectorAll(selector)
      if (elements.length > 0) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 50, rotateX: -15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: trigger,
              start: "top 88%",
              toggleActions: "play none none none"
            }
          }
        )
      }
    })

    return () => {
      progressTrigger.kill()
      sectionTriggers.forEach((st) => st.kill())
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <>
      {/* GSAP Driven Scroll Progress Bar at the top of screen */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          zIndex: 9999,
          background: "rgba(255, 62, 0, 0.15)",
          pointerEvents: "none",
        }}
      >
        <div
          ref={progressBarRef}
          style={{
            height: "100%",
            width: "100%",
            background: "linear-gradient(90deg, #ff3e00 0%, #d4af37 100%)",
            transformOrigin: "left center",
            transform: "scaleX(0)",
            boxShadow: "0 0 10px rgba(255, 62, 0, 0.8)",
          }}
        />
      </div>

      {/* Floating GSAP Scroll Status Indicator (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="gsap-scroll-indicator"
        style={{
          position: "fixed",
          bottom: "24px",
          left: "24px",
          zIndex: 900,
          background: "rgba(14, 14, 14, 0.75)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "999px",
          padding: "6px 14px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
          pointerEvents: "auto",
        }}
      >
        <div style={{ color: "var(--accent)", display: "flex", alignItems: "center" }}>
          <Activity size={14} className="animate-pulse" />
        </div>
        <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-syne)", fontWeight: 700, color: "#fff", letterSpacing: "0.05em" }}>
          {activeSection}
        </span>
        <div style={{ height: "12px", width: "1px", background: "rgba(255,255,255,0.2)" }} />
        <span style={{ fontSize: "0.7rem", color: "#aaa", fontFamily: "monospace", width: "32px", textAlign: "right" }}>
          {scrollProgress}%
        </span>
      </motion.div>
    </>
  )
}
