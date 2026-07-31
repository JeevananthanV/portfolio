"use client"

import { useEffect, useState, useRef } from "react"
import gsap from "gsap"

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Increment progress counter smoothly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.floor(Math.random() * 12) + 5
      })
    }, 60)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const tl = gsap.timeline({
        onComplete: () => {
          setLoading(false)
        },
      })

      tl.to(textRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: "power2.in",
      }).to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "-=0.1"
      )
    }
  }, [progress])

  if (!loading) return null

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "#080808",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        padding: "24px",
      }}
    >
      <div ref={textRef} style={{ textAlign: "center", maxWidth: "480px", width: "100%" }}>
        <div
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "8px",
          }}
        >
          JEEVANANTHAN <span style={{ color: "var(--accent)" }}>V</span>
        </div>

        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.75rem",
            color: "#888",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: "32px",
          }}
        >
          FULL STACK DEVELOPER
        </p>

        {/* Progress Bar Container */}
        <div
          style={{
            width: "100%",
            height: "4px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "999px",
            overflow: "hidden",
            position: "relative",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${Math.min(progress, 100)}%`,
              background: "var(--accent)",
              transition: "width 0.1s ease-out",
              boxShadow: "0 0 12px var(--accent)",
            }}
          />
        </div>

        <div
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "0.9rem",
            fontWeight: 700,
            color: "#aaa",
            letterSpacing: "0.1em",
          }}
        >
          {Math.min(progress, 100)}%
        </div>
      </div>
    </div>
  )
}
