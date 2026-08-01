"use client"

import { useState, useEffect } from "react"
import { ArrowUp, MessageSquare, Send } from "lucide-react"
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

      if (window.scrollY > 280) {
        setShowDock(true)
      } else {
        setShowDock(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // SVG Circular progress math
  const radius = 20
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference

  return (
    <AnimatePresence>
      {showDock && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="floating-dock"
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            zIndex: 990,
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {/* Hire Me Quick Action Pill */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hire-pill-wrapper">
            <Link
              href="/#contact"
              className="hire-pill"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                background: "var(--accent)",
                color: "#0e0e0e",
                borderRadius: "999px",
                fontWeight: 800,
                fontSize: "0.8rem",
                fontFamily: "var(--font-syne)",
                textDecoration: "none",
                letterSpacing: "0.05em",
                boxShadow: "0 10px 25px rgba(255, 62, 0, 0.4)",
              }}
            >
              <Send size={14} />
              <span>HIRE ME</span>
            </Link>
          </motion.div>

          {/* Back to Top Circle Button with Progress Ring */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="top-circle"
            style={{
              position: "relative",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "var(--bg)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--fg)",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              outline: "none",
            }}
          >
            {/* Circular SVG Ring */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                transform: "rotate(-90deg)",
                pointerEvents: "none",
              }}
            >
              <circle
                cx="24"
                cy="24"
                r={radius}
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="3"
              />
              <circle
                cx="24"
                cy="24"
                r={radius}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="3"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{
                  transition: "stroke-dashoffset 0.1s linear",
                }}
              />
            </svg>

            <ArrowUp size={18} color="var(--accent)" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
