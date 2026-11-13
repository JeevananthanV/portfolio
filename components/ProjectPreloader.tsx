"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"

interface ProjectPreloaderProps {
  title: string
  accentColor: string
}

export default function ProjectPreloader({ title, accentColor }: ProjectPreloaderProps) {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.floor(Math.random() * 15) + 8
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [progress])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ yPercent: -100 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "#0a0a0a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "480px", width: "100%", padding: "24px" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "8px",
                textTransform: "uppercase",
              }}
            >
              {title}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.2 }}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.75rem",
                color: "#888",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: "32px",
              }}
            >
              System Initialization
            </motion.p>

            {/* Premium Loader Bar */}
            <div
              style={{
                width: "100%",
                height: "3px",
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "999px",
                position: "relative",
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                style={{
                  height: "100%",
                  background: accentColor || "var(--accent)",
                  boxShadow: `0 0 10px ${accentColor || "var(--accent)"}`,
                }}
              />
            </div>

            <div
              style={{
                fontFamily: "monospace",
                fontSize: "0.85rem",
                color: accentColor || "var(--accent)",
                fontWeight: "bold",
              }}
            >
              {progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
