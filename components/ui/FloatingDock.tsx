"use client"

import { useState, useEffect } from "react"
import { ArrowUp, Send } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"

export default function FloatingDock() {
  const [scrollPercent, setScrollPercent] = useState(0)
  const [showDock, setShowDock] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100
        setScrollPercent(Math.min(100, Math.max(0, currentProgress)))
      }
      setShowDock(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const radius = 18
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference

  return (
    <AnimatePresence>
      {showDock && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 pointer-events-auto"
        >
          {/* Quick Hire Pill */}
          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#ff3e00] hover:bg-[#ff3e00]/90 text-black font-extrabold text-xs font-syne uppercase tracking-wider shadow-lg shadow-[#ff3e00]/30 transition-transform hover:scale-105 active:scale-95"
          >
            <Send size={12} />
            <span>HIRE ME</span>
          </Link>

          {/* Back to top circle button with radial progress */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="relative w-11 h-11 rounded-full bg-neutral-900/90 backdrop-blur-md border border-white/15 flex items-center justify-center text-white shadow-xl hover:border-[#ff3e00]/50 transition-colors cursor-pointer group"
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              className="absolute inset-0 -rotate-90 pointer-events-none"
            >
              <circle
                cx="22"
                cy="22"
                r={radius}
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="2.5"
              />
              <circle
                cx="22"
                cy="22"
                r={radius}
                fill="none"
                stroke="#ff3e00"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 0.1s linear" }}
              />
            </svg>

            <ArrowUp size={16} className="text-[#ff3e00] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
