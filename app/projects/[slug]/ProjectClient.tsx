"use client"

import { useRef, useEffect, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import ProjectPlaceholder from "@/components/ProjectPlaceholder"
import { useReveal } from "@/lib/hooks/useReveal"
import { useCountUp } from "@/lib/hooks/useCountUp"
import { Project, projects } from "@/lib/data/projects"
import EmblaCarousel from "embla-carousel-react"

gsap.registerPlugin(ScrollTrigger)

type ProjectClientProps = {
  project: Project
}

const prefersReducedMotion =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
const isTouchDevice =
  typeof window !== "undefined" && window.matchMedia("(hover: none) and (pointer: coarse)").matches

function TechTag({ name }: { name: string }) {
  return (
    <span
      style={{
        padding: "6px 14px",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "4px",
        fontSize: "0.8rem",
        color: "#ccc",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      {name}
    </span>
  )
}

function ProjectHero({ project }: { project: Project }) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const mockupRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.fromTo(titleRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 })
        .fromTo(descRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.4")
        .fromTo(mockupRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8 }, "-=0.5")
    },
    { scope: titleRef }
  )

  const isTouch = typeof window !== "undefined" && window.matchMedia("(hover: none) and (pointer: coarse)").matches

  useEffect(() => {
    if (isTouch || !mockupRef.current) return
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      gsap.to(mockupRef.current, { x, y, duration: 0.8, ease: "power2.out" })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isTouch])

  return (
    <section
      className="project-hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(135deg, ${project.colors.primary} 0%, ${project.colors.secondary} 100%)`,
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 70% 50%, ${project.colors.accent}22 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div>
          <span
            style={{
              display: "inline-block",
              padding: "6px 16px",
              border: `1px solid ${project.colors.accent}66`,
              color: project.colors.accent,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "24px",
            }}
          >
            {project.theme}
          </span>
          <h1
            ref={titleRef}
            className="huge-type"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              lineHeight: 0.9,
              marginBottom: "24px",
              color: project.colors.accent,
            }}
          >
            {project.title}
          </h1>
          <p
            ref={descRef}
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "480px",
              lineHeight: 1.6,
              fontFamily: "var(--font-inter)",
            }}
          >
            {project.description}
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "32px" }}>
            {project.tech.map((tag) => (
              <TechTag key={tag} name={tag} />
            ))}
          </div>
          <div style={{ display: "flex", gap: "16px", marginTop: "40px" }}>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "12px 28px",
                  background: project.colors.accent,
                  color: project.colors.primary,
                  fontWeight: 700,
                  textDecoration: "none",
                  borderRadius: "4px",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Visit Website
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "12px 28px",
                  border: `1px solid ${project.colors.accent}66`,
                  color: project.colors.accent,
                  fontWeight: 600,
                  textDecoration: "none",
                  borderRadius: "4px",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                View Source
              </a>
            )}
          </div>
        </div>
        <div
          ref={mockupRef}
          style={{
            position: "relative",
            background: "rgba(0,0,0,0.3)",
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28c840" }} />
          </div>
          <div style={{ background: "#000", borderRadius: "8px", overflow: "hidden", aspectRatio: "16/10" }}>
            <ProjectPlaceholder title={project.title} featured={project.featured} colors={project.colors} />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectOverview({ project }: { project: Project }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isRevealed = useReveal(sectionRef)
  const steps = ["Idea", "Research", "Design", "Development", "Testing", "Deployment"]

  return (
    <section ref={sectionRef} style={{ padding: "120px 0" }}>
      <div className="container">
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "2.5rem", marginBottom: "60px", color: "var(--fg)" }}>
          Project Overview
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          {steps.map((step, i) => (
            <div
              key={step}
              style={{
                flex: "1 1 140px",
                textAlign: "center",
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? "translateY(0)" : "translateY(20px)",
                transition: `transform 0.6s ease ${i * 0.1}s, opacity 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  fontFamily: "var(--font-syne)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--accent)",
                }}
              >
                {i + 1}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#888",
                }}
              >
                {step}
              </p>
            </div>
          ))}
        </div>
        <p style={{ maxWidth: "800px", marginTop: "60px", color: "#888", lineHeight: 1.8 }}>{project.description}</p>
      </div>
    </section>
  )
}

function ProblemSolution({ project }: { project: Project }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isRevealed = useReveal(sectionRef)

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "120px 0",
        background: `linear-gradient(180deg, transparent, ${project.colors.primary}22, transparent)`,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "60px",
          }}
        >
          <div
            style={{
              opacity: isRevealed ? 1 : 0,
              transform: isRevealed ? "translateY(0)" : "translateY(20px)",
              transition: "transform 0.7s ease, opacity 0.7s ease",
            }}
          >
            <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.75rem", marginBottom: "20px", color: "#ff6b6b" }}>
              Problem
            </h3>
            <p style={{ color: "#888", lineHeight: 1.8 }}>{project.problem}</p>
          </div>
          <div
            style={{
              opacity: isRevealed ? 1 : 0,
              transform: isRevealed ? "translateY(0)" : "translateY(20px)",
              transition: "transform 0.7s ease 0.2s, opacity 0.7s ease 0.2s",
            }}
          >
            <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.75rem", marginBottom: "20px", color: project.colors.accent }}>
              Solution
            </h3>
            <p style={{ color: "#888", lineHeight: 1.8 }}>{project.solution}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features({ project }: { project: Project }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isRevealed = useReveal(sectionRef)

  return (
    <section ref={sectionRef} style={{ padding: "120px 0" }}>
      <div className="container">
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "2.5rem", marginBottom: "60px", color: "var(--fg)" }}>
          Features
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {project.features.map((feature, i) => (
            <div
              key={feature}
              style={{
                padding: "32px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? "translateY(0)" : "translateY(20px)",
                transition: `transform 0.6s ease ${i * 0.08}s, opacity 0.6s ease ${i * 0.08}s, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease`,
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)"
                e.currentTarget.style.background = `${project.colors.accent}11`
                e.currentTarget.style.borderColor = `${project.colors.accent}44`
                e.currentTarget.style.boxShadow = `0 20px 40px ${project.colors.primary}88`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.background = "rgba(255,255,255,0.02)"
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "1.1rem", marginBottom: "12px", color: "var(--fg)" }}>
                {feature}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "#888", lineHeight: 1.6 }}>
                Core functionality designed for seamless user experience.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechStack({ project }: { project: Project }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isRevealed = useReveal(sectionRef)

  return (
    <section ref={sectionRef} style={{ padding: "120px 0" }}>
      <div className="container">
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "2.5rem", marginBottom: "60px", color: "var(--fg)" }}>
          Technology Stack
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {project.tech.map((tech, i) => (
            <div
              key={tech}
              style={{
                padding: "20px 32px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? "scale(1)" : "scale(0.9)",
                transition: `transform 0.5s ease ${i * 0.06}s, opacity 0.5s ease ${i * 0.06}s`,
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05) rotate(2deg)"
                e.currentTarget.style.borderColor = project.colors.accent
                e.currentTarget.style.boxShadow = `0 0 30px ${project.colors.accent}33`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <span style={{ fontFamily: "var(--font-syne)", fontSize: "1rem", fontWeight: 600 }}>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Architecture({ project }: { project: Project }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isRevealed = useReveal(sectionRef)
  const nodes = ["User", "React UI", "Node API", "MySQL", "Admin"]

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "120px 0",
        background: `linear-gradient(180deg, transparent, ${project.colors.primary}22, transparent)`,
      }}
    >
      <div className="container">
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "2.5rem", marginBottom: "60px", color: "var(--fg)" }}>
          Architecture
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "40px",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
              opacity: isRevealed ? 1 : 0,
              transition: "opacity 0.8s ease",
            }}
          >
            {nodes.map((node) => (
              <div
                key={node}
                style={{
                  padding: "20px 28px",
                  background: "rgba(255,255,255,0.05)",
                  border: `2px solid ${project.colors.accent}66`,
                  borderRadius: "12px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.08)"
                  e.currentTarget.style.borderColor = project.colors.accent
                  e.currentTarget.style.boxShadow = `0 0 30px ${project.colors.accent}44`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"
                  e.currentTarget.style.borderColor = `${project.colors.accent}66`
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                <span style={{ fontFamily: "var(--font-syne)", fontSize: "0.85rem", fontWeight: 600, color: "var(--fg)" }}>
                  {node}
                </span>
              </div>
            ))}
          </div>
          <svg width="100%" height="120" viewBox="0 0 800 120" style={{ maxWidth: "800px", overflow: "visible" }}>
            <line x1="100" y1="60" x2="300" y2="60" stroke={project.colors.accent} strokeWidth="2" strokeDasharray="6 4" />
            <line x1="500" y1="60" x2="700" y2="60" stroke={project.colors.accent} strokeWidth="2" strokeDasharray="6 4" />
            <line x1="400" y1="90" x2="400" y2="110" stroke={project.colors.accent} strokeWidth="2" />
            <circle cx="100" cy="60" r="4" fill={project.colors.accent} />
            <circle cx="300" cy="60" r="4" fill={project.colors.accent} />
            <circle cx="500" cy="60" r="4" fill={project.colors.accent} />
            <circle cx="700" cy="60" r="4" fill={project.colors.accent} />
            <circle cx="400" cy="110" r="4" fill={project.colors.accent} />
          </svg>
        </div>
      </div>
    </section>
  )
}

function DatabaseDesign({ project }: { project: Project }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isRevealed = useReveal(sectionRef)

  return (
    <section ref={sectionRef} style={{ padding: "120px 0" }}>
      <div className="container">
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "2.5rem", marginBottom: "60px", color: "var(--fg)" }}>
          Database Design
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {project.dbTables.map((table, i) => (
            <div
              key={table}
              style={{
                padding: "24px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? "translateY(0)" : "translateY(20px)",
                transition: `transform 0.6s ease ${i * 0.08}s, opacity 0.6s ease ${i * 0.08}s`,
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)"
                e.currentTarget.style.borderColor = project.colors.accent
                e.currentTarget.style.boxShadow = `0 20px 40px ${project.colors.primary}88`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)"
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "1rem", marginBottom: "8px", color: project.colors.accent }}>
                {table}
              </h4>
              <p style={{ fontSize: "0.8rem", color: "#666" }}>
                {table === "Users" && "Stores user credentials and profile data"}
                {table === "Events" && "Event details, dates, and metadata"}
                {table === "Registrations" && "Links users to events"}
                {table === "Categories" && "Event classification taxonomy"}
                {table === "Admin" && "Administrative access control"}
                {table === "Influencers" && "Influencer profiles and portfolios"}
                {table === "Brands" && "Brand accounts and campaigns"}
                {table === "Requests" && "Collaboration requests"}
                {table === "Devotees" && "Temple visitor information"}
                {table === "Donations" && "Donation records and amounts"}
                {table === "Bookings" && "Pooja booking details"}
                {table === "Gallery" && "Media assets"}
                {table === "Services" && "Service offerings and details"}
                {table === "Portfolio" && "Project showcases"}
                {table === "Testimonials" && "Client feedback"}
                {table === "Contact Messages" && "Inquiry submissions"}
                {table === "Customers" && "Travel customer data"}
                {table === "Packages" && "Travel package details"}
                {table === "Vehicles" && "Fleet management"}
                {table === "Destinations" && "Tour destination data"}
                {table === "Enquiries" && "Customer inquiries"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DevJourney({ project }: { project: Project }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isRevealed = useReveal(sectionRef)
  const journey = project.devJourney ?? [
    { week: "Week 1", task: "Research", description: "Analyzed requirements and user needs." },
    { week: "Week 2", task: "UI Design", description: "Created visual designs and prototypes." },
    { week: "Week 3", task: "Backend", description: "Built APIs and integrated services." },
    { week: "Week 4", task: "Testing", description: "Functional and cross-browser testing." },
    { week: "Week 5", task: "Deployment", description: "Launched with monitoring and CI/CD." },
  ]

  return (
    <section ref={sectionRef} style={{ padding: "120px 0" }}>
      <div className="container">
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "2.5rem", marginBottom: "60px", color: "var(--fg)" }}>
          Development Journey
        </h2>
        <div
          style={{
            display: "flex",
            gap: "24px",
            overflowX: "auto",
            paddingBottom: "20px",
            scrollbarWidth: "thin",
            scrollbarColor: `${project.colors.accent} transparent`,
          }}
        >
          {journey.map((item, i) => (
            <div
              key={item.week}
              style={{
                minWidth: "220px",
                padding: "28px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? "translateY(0)" : "translateY(20px)",
                transition: `transform 0.6s ease ${i * 0.1}s, opacity 0.6s ease ${i * 0.1}s`,
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "0.75rem",
                  color: project.colors.accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {item.week}
              </span>
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "1.25rem", marginTop: "8px", color: "var(--fg)" }}>
                {item.task}
              </h4>
              <p style={{ fontSize: "0.85rem", color: "#888", marginTop: "8px" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Challenges({ project }: { project: Project }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isRevealed = useReveal(sectionRef)

  const items = project.challenges ?? [
    { title: "Integration Complexity", problem: "Multiple third-party services required careful orchestration.", solution: "Used abstraction layers and adapter patterns.", outcome: "Clean integration with no breaking changes." },
    { title: "Performance", problem: "Ensuring sub-second load times across all device types.", solution: "Aggressive optimization and code splitting.", outcome: "Smooth experience on mid-range devices." },
    { title: "User Onboarding", problem: "Designing intuitive flows for diverse user roles.", solution: "Extensive testing and iteration with real users.", outcome: "Intuitive flows requiring minimal documentation." },
  ]

  return (
    <section ref={sectionRef} style={{ padding: "120px 0" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "2.5rem", marginBottom: "60px", color: "var(--fg)" }}>
          Challenges
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {items.map((item, i) => (
            <div
              key={item.title}
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
                overflow: "hidden",
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? "translateY(0)" : "translateY(20px)",
                transition: `transform 0.6s ease ${i * 0.1}s, opacity 0.6s ease ${i * 0.1}s`,
                background: "rgba(255,255,255,0.01)",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "20px 24px",
                  background: "none",
                  border: "none",
                  color: "var(--fg)",
                  fontFamily: "var(--font-syne)",
                  fontSize: "1rem",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {item.title}
                <span
                  style={{
                    color: project.colors.accent,
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform 0.3s ease",
                    display: "inline-block",
                  }}
                >
                  +
                </span>
              </button>
              <div
                style={{
                  maxHeight: openIndex === i ? "400px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}
              >
                <div style={{ padding: "0 24px 20px", color: "#888", lineHeight: 1.8 }}>
                  {item.problem && <p><strong>Problem:</strong> {item.problem}</p>}
                  {item.solution && <p><strong>Solution:</strong> {item.solution}</p>}
                  {item.outcome && <p><strong>Outcome:</strong> {item.outcome}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ScrollProgress({ project }: { project: Project }) {
  const progressRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (prefersReducedMotion || !progressRef.current) return
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      })
    },
    { scope: progressRef }
  )

  return (
    <div
      ref={progressRef}
      className="scroll-progress"
      style={{
        background: project.colors.accent,
        transform: "scaleX(0)",
        transformOrigin: "left",
      }}
    />
  )
}

function Results({ project }: { project: Project }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isRevealed = useReveal(sectionRef)
  const stats = project.stats ?? [
    { value: "---", suffix: "", label: "Metric" },
  ]

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "120px 0",
        background: `linear-gradient(180deg, transparent, ${project.colors.primary}44, transparent)`,
      }}
    >
      <div className="container">
        <h2
          className="reveal-text"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "2.5rem",
            marginBottom: "60px",
            color: "var(--fg)",
            textAlign: "center",
          }}
        >
          Results
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? "scale(1)" : "scale(0.8)",
                transition: `transform 0.7s ease ${i * 0.15}s, opacity 0.7s ease ${i * 0.15}s`,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  fontWeight: 800,
                  color: project.colors.accent,
                  lineHeight: 1,
                }}
              >
                {stat.value}{stat.suffix}
              </div>
              <p
                style={{
                  marginTop: "12px",
                  color: "#888",
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery({ project }: { project: Project }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isRevealed = useReveal(sectionRef)
  const images = project.gallery ?? project.features.map((f, i) => ({
    id: i,
    title: f,
    aspect: ["4/3", "3/4", "1/1", "16/9"][i % 4],
  }))

  return (
    <section ref={sectionRef} style={{ padding: "120px 0" }}>
      <div className="container">
        <h2 className="reveal-text" style={{ fontFamily: "var(--font-syne)", fontSize: "2.5rem", marginBottom: "60px", color: "var(--fg)" }}>
          Gallery
        </h2>
        <div
          style={{
            columnCount: 3,
            columnGap: "20px",
          }}
        >
          {images.map((img, i) => (
            <div
              key={img.id}
              style={{
                marginBottom: "20px",
                breakInside: "avoid",
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? "translateY(0)" : "translateY(20px)",
                transition: `transform 0.6s ease ${i * 0.08}s, opacity 0.6s ease ${i * 0.08}s`,
              }}
            >
              <div
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  aspectRatio: img.aspect,
                  background: `linear-gradient(135deg, ${project.colors.primary}33, ${project.colors.secondary}33)`,
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: `${project.colors.accent}33`,
                  }}
                >
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 767px) {
          div[style*="columnCount: 3"] {
            columnCount: 1 !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          div[style*="columnCount: 3"] {
            columnCount: 2 !important;
          }
        }
      `}</style>
    </section>
  )
}

function Testimonials({ project }: { project: Project }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isRevealed = useReveal(sectionRef)
  const items = project.testimonials ?? [
    { quote: "An outstanding platform that transformed our workflow.", author: "Client", role: "Organization" },
  ]
  const [emblaRef, emblaApi] = EmblaCarousel({ loop: true, align: "start" })

  useEffect(() => {
    if (!emblaApi || prefersReducedMotion || isTouchDevice) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <section ref={sectionRef} style={{ padding: "120px 0" }}>
      <div className="container">
        <h2 className="reveal-text" style={{ fontFamily: "var(--font-syne)", fontSize: "2.5rem", marginBottom: "60px", color: "var(--fg)" }}>
          Testimonials
        </h2>
        <div
          ref={emblaRef}
          style={{ overflow: "hidden", opacity: isRevealed ? 1 : 0, transition: "opacity 0.7s ease" }}
        >
          <div style={{ display: "flex", gap: "24px" }}>
            {items.map((item) => (
              <div
                key={item.author}
                style={{
                  flex: "0 0 calc(100% - 24px)",
                  padding: "32px",
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                }}
              >
                <p style={{ fontSize: "1rem", color: "#aaa", lineHeight: 1.7, fontStyle: "italic" }}>
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div style={{ marginTop: "20px" }}>
                  <strong style={{ color: project.colors.accent, fontFamily: "var(--font-syne)" }}>{item.author}</strong>
                  <p style={{ fontSize: "0.8rem", color: "#666" }}>{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function UIShowcase({ project }: { project: Project }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isRevealed = useReveal(sectionRef)

  return (
    <section ref={sectionRef} style={{ padding: "120px 0" }}>
      <div className="container">
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "2.5rem", marginBottom: "60px", color: "var(--fg)" }}>
          UI Showcase
        </h2>
        <div
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px",
            padding: "24px",
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? "translateY(0)" : "translateY(20px)",
            transition: "transform 0.7s ease, opacity 0.7s ease",
          }}
        >
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28c840" }} />
          </div>
          <div
            style={{
              background: "#000",
              borderRadius: "8px",
              overflow: "auto",
              maxHeight: "500px",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div style={{ padding: "40px", color: "#888", fontFamily: "var(--font-inter)", lineHeight: 1.8 }}>
              <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.5rem", color: "var(--fg)", marginBottom: "16px" }}>
                {project.title} — Live Preview
              </h3>
              <p>
                This is a scrollable preview area representing the running application. In production, this would load
                the live site inside an iframe or captured screenshot carousel.
              </p>
              <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {project.features.map((f) => (
                  <span
                    key={f}
                    style={{
                      padding: "6px 12px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "4px",
                      fontSize: "0.75rem",
                      color: "#aaa",
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InteractivePrototype({ project }: { project: Project }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isRevealed = useReveal(sectionRef)

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "120px 0",
        background: `linear-gradient(180deg, transparent, ${project.colors.primary}22, transparent)`,
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "2.5rem", marginBottom: "20px", color: "var(--fg)" }}>
          Interactive Prototype
        </h2>
        <p style={{ maxWidth: "600px", margin: "0 auto 32px", color: "#888", lineHeight: 1.7 }}>
          Explore the full user flow in the interactive prototype. Navigate through key screens and interactions.
        </p>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            padding: "14px 28px",
            border: `1px solid ${project.colors.accent}66`,
            color: project.colors.accent,
            borderRadius: "4px",
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? "translateY(0)" : "translateY(20px)",
            transition: "transform 0.6s ease, opacity 0.6s ease",
          }}
        >
          Launch Prototype
          <span style={{ fontSize: "1.1rem" }}>↗</span>
        </div>
      </div>
    </section>
  )
}

function Links({ project }: { project: Project }) {
  return (
    <section style={{ padding: "80px 0", borderTop: "1px solid var(--gray)" }}>
      <div className="container" style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "14px 32px",
              background: "var(--accent)",
              color: "#000",
              fontWeight: 700,
              textDecoration: "none",
              borderRadius: "4px",
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Live Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "14px 32px",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "var(--fg)",
              fontWeight: 600,
              textDecoration: "none",
              borderRadius: "4px",
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            GitHub
          </a>
        )}
      </div>
    </section>
  )
}

function NextProject({ currentSlug }: { currentSlug: string }) {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <section
      style={{
        padding: "120px 0",
        background: `linear-gradient(135deg, ${nextProject.colors.primary} 0%, ${nextProject.colors.secondary} 100%)`,
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: nextProject.colors.accent,
            marginBottom: "24px",
          }}
        >
          Next Project
        </p>
        <h2
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(2rem, 6vw, 4rem)",
            color: nextProject.colors.accent,
            marginBottom: "32px",
          }}
        >
          {nextProject.title}
        </h2>
        <Link
          href={`/projects/${nextProject.slug}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            padding: "16px 32px",
            background: nextProject.colors.accent,
            color: nextProject.colors.primary,
            fontWeight: 700,
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "0.9rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          View Project
          <span style={{ fontSize: "1.2rem", lineHeight: 1 }}>→</span>
        </Link>
      </div>
    </section>
  )
}

export default function ProjectClient({ project }: ProjectClientProps) {
  return (
    <main
      style={{
        "--project-primary": project.colors.primary,
        "--project-secondary": project.colors.secondary,
        "--project-accent": project.colors.accent,
      } as React.CSSProperties}
    >
      <ScrollProgress project={project} />
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProblemSolution project={project} />
      <Features project={project} />
      <UIShowcase project={project} />
      <InteractivePrototype project={project} />
      <TechStack project={project} />
      <Architecture project={project} />
      <DatabaseDesign project={project} />
      <DevJourney project={project} />
      <Challenges project={project} />
      <Results project={project} />
      <Gallery project={project} />
      <Testimonials project={project} />
      <Links project={project} />
      <NextProject currentSlug={project.slug} />
      <section style={{ padding: "80px 0", borderTop: "1px solid var(--gray)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <Link
            href="/"
            style={{
              color: "var(--accent)",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontFamily: "var(--font-inter)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            ← Back to Portfolio
          </Link>
        </div>
      </section>
    </main>
  )
}
