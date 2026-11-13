"use client"

import { useEffect, useState, useRef } from "react"
import gsap from "gsap"

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if user already saw preloader in this session
    if (typeof window !== "undefined" && sessionStorage.getItem("portfolio_loaded")) {
      setLoading(false)
      return
    }

    // Snappy progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.floor(Math.random() * 18) + 12
      })
    }, 35)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100 && loading) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("portfolio_loaded", "true")
      }

      const tl = gsap.timeline({
        onComplete: () => {
          setLoading(false)
        },
      })

      tl.to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.25,
        ease: "power2.in",
      }).to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 0.5,
          ease: "power3.inOut",
        },
        "-=0.05"
      )
    }
  }, [progress, loading])

  if (!loading) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-[#09090b] flex flex-col items-center justify-center p-6 text-white"
    >
      <div ref={textRef} className="text-center max-w-sm w-full">
        <div className="font-syne font-extrabold text-2xl sm:text-3xl tracking-tight mb-2">
          JEEVANANTHAN <span className="text-[#ff3e00]">V</span>
        </div>

        <p className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest mb-6">
          Full Stack Systems Engineer
        </p>

        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-3 relative">
          <div
            className="h-full bg-[#ff3e00] rounded-full transition-all duration-75 ease-out shadow-[0_0_10px_#ff3e00]"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <div className="font-mono text-xs text-neutral-400 font-semibold tracking-wider">
          {Math.min(progress, 100)}%
        </div>
      </div>
    </div>
  )
}
