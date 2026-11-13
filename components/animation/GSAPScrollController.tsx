"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "motion/react"
import { Activity } from "lucide-react"

export default function GSAPScrollController() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("HERO")

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Track scroll percentage
    const progressTrigger = ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        setScrollProgress(Math.round(self.progress * 100))
      },
    })

    // Section triggers for active indicator
    const sectionIds = ["hero", "about", "experience", "work", "skills", "education", "contact"]
    const sectionTriggers: ScrollTrigger[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top 45%",
          end: "bottom 45%",
          onEnter: () => setActiveSection(id.toUpperCase()),
          onEnterBack: () => setActiveSection(id.toUpperCase()),
        })
        sectionTriggers.push(st)
      }
    })

    return () => {
      progressTrigger.kill()
      sectionTriggers.forEach((st) => st.kill())
    }
  }, [])

  return (
    <>
      {/* Floating GSAP Scroll Status Telemetry Pill (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="hidden md:flex fixed bottom-6 left-6 z-40 items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/10 text-xs font-mono text-neutral-300 shadow-xl pointer-events-auto"
      >
        <div className="w-2 h-2 rounded-full bg-[#ff3e00] animate-pulse" />
        <span className="font-semibold text-white tracking-wider text-[11px]">
          {activeSection}
        </span>
        <span className="text-neutral-600">/</span>
        <span className="text-neutral-400 text-[11px] w-8 text-right tabular-nums">
          {scrollProgress}%
        </span>
      </motion.div>
    </>
  )
}
