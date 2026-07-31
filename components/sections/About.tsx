"use client"

import { useRef, useEffect } from "react"
import { useCountUp } from "@/lib/hooks/useCountUp"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const stats = [
  { label: "YEARS EXP", value: 1 },
  { label: "COMPANIES", value: 2 },
  { label: "PROJECTS", value: 7 },
  { label: "CGPA", value: 8.02 },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      )

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} style={{ padding: "100px 0", background: "rgba(255,255,255,0.01)" }}>
      <div className="container" style={{ maxWidth: "1000px", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Profile Media Box */}
          <div ref={imageRef} style={{ textAlign: "center", position: "relative" }}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                src="/placeholder-user.jpg"
                alt="JEEVANANTHAN V"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                }}
                style={{
                  width: "240px",
                  height: "260px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  border: "2px solid var(--accent)",
                  filter: "grayscale(0.15)",
                  boxShadow: "0 24px 48px rgba(255, 62, 0, 0.2)",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-14px",
                  right: "-14px",
                  background: "var(--accent)",
                  color: "#0e0e0e",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  letterSpacing: "0.05em",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.5)",
                }}
              >
                WEB DEVELOPER
              </div>
            </div>
          </div>

          {/* Bio & Key Metrics */}
          <div ref={contentRef}>
            <span style={{ color: "var(--accent)", fontFamily: "var(--font-syne)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>
              ABOUT ME
            </span>
            <h2
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                marginTop: "8px",
                marginBottom: "20px",
                lineHeight: 1.1,
              }}
            >
              CRAFTING SCALABLE DIGITAL SOLUTIONS
            </h2>

            <p
              style={{
                fontSize: "1rem",
                fontWeight: 300,
                color: "#aaa",
                lineHeight: 1.8,
                marginBottom: "36px",
              }}
            >
              I&apos;m a full-stack developer based in Salem, Tamil Nadu, specializing in building performant web applications with clean architecture and responsive user experiences. With hands-on professional expertise in React.js, Node.js, and Salesforce, I bridge user requirements with robust engineering.
            </p>

            {/* Stats Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
                gap: "16px",
              }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    padding: "16px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderTop: "2px solid var(--accent)",
                    borderRadius: "8px",
                  }}
                >
                  <StatCount target={stat.value} label={stat.label} />
                </div>
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
