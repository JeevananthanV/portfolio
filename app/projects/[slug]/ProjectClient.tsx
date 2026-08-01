"use client"

import { useRef, useEffect, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import ProjectPlaceholder from "@/components/ProjectPlaceholder"
import { useReveal } from "@/lib/hooks/useReveal"
import { useCountUp } from "@/lib/hooks/useCountUp"
import { Project, projects, GalleryItem } from "@/lib/data/projects"
import EmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ChevronDown, ChevronLeft, ChevronRight, X, Maximize2, ExternalLink, Menu, CheckCircle2, Clock, GitCommit, Layers, Sparkles, Terminal, ShieldCheck, ArrowRight } from "lucide-react"
import BackgroundVideoContainer from "@/components/ui/BackgroundVideoContainer"

gsap.registerPlugin(ScrollTrigger)

type ProjectClientProps = {
  project: Project
}

const getPrefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
const getIsTouchDevice = () =>
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
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(135deg, ${project.colors.primary} 0%, ${project.colors.secondary} 100%)`,
         padding: "clamp(2.5rem, 5vw, 5rem) 0",
      }}
    >
      {/* Background Live Video Loop & Image Layer */}
      <BackgroundVideoContainer posterImage={project.heroImage} overlayOpacity={0.65} />

      <div
        className="container project-hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "clamp(2rem, 5vw, 3.75rem)",
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
              borderRadius: "4px",
              background: "rgba(0,0,0,0.4)",
            }}
          >
            {project.theme}
          </span>
          <h1
            ref={titleRef}
            className="huge-type"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              lineHeight: 0.95,
              marginBottom: "24px",
              color: project.colors.accent,
              textShadow: "0 10px 30px rgba(0,0,0,0.8)",
            }}
          >
            {project.title}
          </h1>
          <p
            ref={descRef}
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.85)",
              maxWidth: "520px",
              lineHeight: 1.6,
              fontFamily: "var(--font-inter)",
              textShadow: "0 2px 8px rgba(0,0,0,0.9)",
            }}
          >
            {project.description}
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "32px" }}>
            {project.tech.map((tag) => (
              <TechTag key={tag} name={tag} />
            ))}
          </div>
          <div style={{ display: "flex", gap: "16px", marginTop: "40px", flexWrap: "wrap" }}>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "14px 28px",
                  background: project.colors.accent,
                  color: project.colors.primary,
                  fontWeight: 700,
                  textDecoration: "none",
                  borderRadius: "6px",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  boxShadow: `0 8px 20px ${project.colors.accent}44`,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Visit Website <ExternalLink size={16} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "14px 28px",
                  border: `1px solid ${project.colors.accent}66`,
                  color: project.colors.accent,
                  fontWeight: 600,
                  textDecoration: "none",
                  borderRadius: "6px",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(8px)",
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
            background: "rgba(15,15,15,0.85)",
            borderRadius: "14px",
            padding: "16px",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 30px 60px rgba(0,0,0,0.8)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28c840" }} />
            </div>
            <span style={{ fontSize: "0.75rem", color: "#666", fontFamily: "monospace" }}>
              https://{project.slug}.dev
            </span>
          </div>
          <div style={{ background: "#000", borderRadius: "8px", overflow: "hidden", aspectRatio: "16/10", position: "relative" }}>
            {project.heroImage ? (
              <img
                src={project.heroImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <ProjectPlaceholder title={project.title} featured={project.featured} colors={project.colors} />
            )}
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
    <section ref={sectionRef} style={{ padding: "clamp(4rem, 8vw, 7.5rem) 0" }}>
      <div className="container">
         <div
          className="section-heading overview-steps"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(1rem, 3vw, 1.5rem)",
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? "translateY(0)" : "translateY(20px)",
            transition: "transform 0.6s ease, opacity 0.6s ease",
          }}
        >
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.5rem, 4vw, 2.5rem)", marginBottom: "clamp(2rem, 4vw, 3.75rem)", color: "var(--fg)" }}>
            Project Overview
          </h2>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(1rem, 3vw, 1.5rem)", opacity: isRevealed ? 1 : 0, transform: isRevealed ? "translateY(0)" : "translateY(20px)", transition: "transform 0.6s ease 0.1s, opacity 0.6s ease 0.1s" }}>
          {steps.map((step, i) => (
            <div
              key={step}
              className="overview-step"
              style={{
                flex: "1 1 clamp(100px, 25vw, 140px)",
                textAlign: "center",
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? "translateY(0)" : "translateY(20px)",
                transition: `transform 0.6s ease ${i * 0.1}s, opacity 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div
                style={{
                  width: "clamp(60px, 15vw, 80px)",
                  height: "clamp(60px, 15vw, 80px)",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto clamp(0.75rem, 1.5vw, 1rem)",
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                  fontWeight: 700,
                  color: "var(--accent)",
                }}
              >
                {i + 1}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.7rem, 2vw, 0.9rem)",
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
        padding: "clamp(4rem, 8vw, 7.5rem) 0",
        background: `linear-gradient(180deg, transparent, ${project.colors.primary}22, transparent)`,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
               gap: "clamp(2rem, 5vw, 3.75rem)",
             }}
           >
             <div
               style={{
                 opacity: isRevealed ? 1 : 0,
                 transform: isRevealed ? "translateY(0)" : "translateY(20px)",
                 transition: "transform 0.7s ease, opacity 0.7s ease",
               }}
             >
             <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.2rem, 3vw, 1.75rem)", marginBottom: "clamp(1rem, 2vw, 1.25rem)", color: "#ff6b6b" }}>
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
            <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.2rem, 3vw, 1.75rem)", marginBottom: "clamp(1rem, 2vw, 1.25rem)", color: project.colors.accent }}>
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
    <section ref={sectionRef}     style={{ padding: "clamp(4rem, 8vw, 7.5rem) 0" }}>
      <div className="container">
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.5rem, 4vw, 2.5rem)", marginBottom: "clamp(2rem, 4vw, 3.75rem)", color: "var(--fg)" }}>
          Features
        </h2>
        <div
          className="features-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
          }}
        >
          {project.features.map((feature, i) => (
            <div
              key={feature}
              style={{
                padding: "clamp(1.5rem, 3vw, 2rem)",
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
    <section ref={sectionRef}     style={{ padding: "clamp(4rem, 8vw, 7.5rem) 0" }}>
      <div className="container">
        <h2 style={{ fontFamily: "var(--font-syne)",           fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            marginBottom: "clamp(2rem, 4vw, 3.75rem)", color: "var(--fg)" }}>
          Technology Stack
        </h2>
         <div className="tech-stack" style={{ display: "flex", flexWrap: "wrap", gap: "clamp(0.75rem, 1.5vw, 1rem)" }}>
          {project.tech.map((tech, i) => (
            <div
              key={tech}
              style={{
                 padding: "clamp(0.6rem, 1.5vw, 0.75rem) clamp(0.875rem, 2vw, 1.125rem)",
                 background: "rgba(255,255,255,0.02)",
                 border: "1px solid rgba(255,255,255,0.08)",
                 borderRadius: "999px",
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
              <span style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(0.7rem, 2vw, 1rem)", fontWeight: 600 }}>{tech}</span>
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
        padding: "clamp(4rem, 8vw, 7.5rem) 0",
        background: `linear-gradient(180deg, transparent, ${project.colors.primary}22, transparent)`,
      }}
    >
      <div className="container">
        <h2 style={{ fontFamily: "var(--font-syne)",           fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            marginBottom: "clamp(2rem, 4vw, 3.75rem)", color: "var(--fg)" }}>
          Architecture
        </h2>
        <div
          className="arch-nodes"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(1rem, 2vw, 1rem)",
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
    <section ref={sectionRef}     style={{ padding: "clamp(4rem, 8vw, 7.5rem) 0" }}>
      <div className="container">
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.5rem, 4vw, 2.5rem)", marginBottom: "clamp(2rem, 4vw, 3.75rem)", color: "var(--fg)" }}>
          Database Design
        </h2>
        <div
          className="db-grid"
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
                padding: "clamp(1.25rem, 2.5vw, 1.5rem)",
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
  const [activeStep, setActiveStep] = useState(0)

  const journey = project.devJourney ?? [
    { week: "Week 1", task: "Requirements & Research", description: "Analyzed requirements, mapped target user workflows, and established architecture targets." },
    { week: "Week 2", task: "UI/UX & Design Tokens", description: "Created responsive visual layouts, high-fidelity mockups, and interactive component libraries." },
    { week: "Week 3", task: "Backend & API Engineering", description: "Engineered database schemas, developed RESTful API endpoints, and integrated authentication." },
    { week: "Week 4", task: "Integrations & Testing", description: "Integrated payment gateways, third-party APIs, and executed automated cross-device testing." },
    { week: "Week 5", task: "Deployment & Monitoring", description: "Deployed to production with CI/CD automation, performance tuning, and health checks." },
  ]

  const activeItem = journey[activeStep] || journey[0]

  return (
    <section ref={sectionRef} style={{         padding: "clamp(4rem, 8vw, 7.5rem) 0", position: "relative", overflow: "hidden" }}>
      {/* Background Accent Glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "5%",
          width: "400px",
          height: "400px",
          background: `radial-gradient(circle, ${project.colors.accent}12 0%, transparent 70%)`,
          pointerEvents: "none",
          filter: "blur(60px)",
        }}
      />

      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "50px" }}>
          <span
            style={{
              color: project.colors.accent,
              fontFamily: "var(--font-syne)",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontWeight: 700,
            }}
          >
            DEVELOPMENT LIFECYCLE
          </span>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              marginTop: "8px",
              color: "var(--fg)",
            }}
          >
            Development Journey
          </h2>
          <p style={{ color: "#888", fontSize: "1rem", marginTop: "10px", maxWidth: "600px" }}>
            Step-by-step roadmap showing how {project.title} was planned, architected, and shipped to production.
          </p>
        </div>

        {/* Stepper Timeline Navigation Bar */}
        <div
          style={{
            position: "relative",
            marginBottom: "40px",
            padding: "20px 0",
          }}
        >
          {/* Connecting Line */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "40px",
              right: "40px",
              height: "2px",
              background: "rgba(255,255,255,0.1)",
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          />
          {/* Active Progress Fill */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "40px",
              width: `${(activeStep / (journey.length - 1)) * 85}%`,
              height: "2px",
              background: project.colors.accent,
              transform: "translateY(-50%)",
              transition: "width 0.4s ease",
              zIndex: 2,
            }}
          />

          {/* Stepper Node Buttons */}
          <div
            className="stepper-nodes"
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              zIndex: 3,
            }}
          >
            {journey.map((item, idx) => {
              const isSelected = activeStep === idx
              const isPast = idx < activeStep
              return (
                <button
                  key={item.week}
                  onClick={() => setActiveStep(idx)}
                  className="stepper-node"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "clamp(0.3rem, 1vw, 0.5rem)",
                  }}
                >
                    <div
                      className="step-circle"
                      style={{
                      width: "clamp(36px, 8vw, 44px)",
                      height: "clamp(36px, 8vw, 44px)",
                      borderRadius: "50%",
                      background: isSelected
                        ? project.colors.accent
                        : isPast
                        ? `${project.colors.accent}33`
                        : "rgba(20,20,20,0.9)",
                      border: `2px solid ${
                        isSelected
                          ? project.colors.accent
                          : isPast
                          ? project.colors.accent
                          : "rgba(255,255,255,0.2)"
                      }`,
                      boxShadow: isSelected ? `0 0 20px ${project.colors.accent}` : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isSelected ? "#000" : isPast ? project.colors.accent : "#888",
                      fontFamily: "var(--font-syne)",
                      fontWeight: 800,
                      fontSize: "clamp(0.7rem, 2vw, 0.85rem)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {isPast ? <CheckCircle2 size={18} /> : idx + 1}
                  </div>
                  <span
                    style={{
                      fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)",
                      fontFamily: "var(--font-syne)",
                      fontWeight: isSelected ? 700 : 500,
                      color: isSelected ? project.colors.accent : "#888",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {item.week}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected Phase Spotlight Box */}
        <div
          style={{
            background: "rgba(255,255,255,0.02)",
            border: `1px solid ${project.colors.accent}44`,
            borderRadius: "16px",
            padding: "36px",
            marginBottom: "50px",
            boxShadow: `0 15px 40px ${project.colors.primary}aa`,
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: "999px",
                    background: `${project.colors.accent}22`,
                    border: `1px solid ${project.colors.accent}55`,
                    color: project.colors.accent,
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-syne)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {activeItem.week} • PHASE 0{activeStep + 1}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#28c840",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2 size={13} /> VERIFIED & COMPLETED
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "1.8rem",
                  color: "#fff",
                  fontWeight: 800,
                }}
              >
                {activeItem.task}
              </h3>
            </div>

            <button
              onClick={() => setActiveStep((prev) => (prev + 1) % journey.length)}
              style={{
                padding: "10px 20px",
                background: project.colors.accent,
                color: "#000",
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "transform 0.2s ease",
              }}
            >
              Next Phase <ArrowRight size={16} />
            </button>
          </div>

          <p style={{ color: "#ccc", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "800px" }}>
            {activeItem.description}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
              marginTop: "28px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#aaa", fontSize: "0.85rem" }}>
              <Clock size={16} color={project.colors.accent} />
              <span>Timeline: <strong>1 Calendar Week</strong></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#aaa", fontSize: "0.85rem" }}>
              <GitCommit size={16} color={project.colors.accent} />
              <span>Status: <strong style={{ color: "#fff" }}>Production Shipped</strong></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#aaa", fontSize: "0.85rem" }}>
              <ShieldCheck size={16} color={project.colors.accent} />
              <span>Quality: <strong style={{ color: "#fff" }}>100% Tested</strong></span>
            </div>
          </div>
        </div>

         {/* Overview Grid across all weeks */}
         <div
           className="journey-grid"
           style={{
             display: "grid",
             gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
             gap: "20px",
           }}
         >
           {journey.map((item, i) => {
            const isActive = activeStep === i
            return (
              <div
                key={item.week}
                onClick={() => setActiveStep(i)}
                style={{
                  padding: "clamp(1.25rem, 2.5vw, 1.5rem)",
                  background: isActive ? `${project.colors.accent}11` : "rgba(255,255,255,0.02)",
                  border: isActive ? `1px solid ${project.colors.accent}` : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  opacity: isRevealed ? 1 : 0,
                  transform: isRevealed ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.3s ease`,
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)",
                      color: project.colors.accent,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 700,
                    }}
                  >
                    {item.week}
                  </span>
                  <span style={{ fontSize: "0.7rem", color: "#666", fontWeight: 700 }}>
                    0{i + 1}
                  </span>
                </div>
                <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "1.1rem", color: "#fff", fontWeight: 700 }}>
                  {item.task}
                </h4>
                <p style={{ fontSize: "0.82rem", color: "#888", marginTop: "8px", lineHeight: 1.5 }}>
                  {item.description}
                </p>
              </div>
            )
          })}
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
    <section ref={sectionRef}     style={{ padding: "clamp(4rem, 8vw, 7.5rem) 0" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <h2 style={{ fontFamily: "var(--font-syne)",           fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            marginBottom: "clamp(2rem, 4vw, 3.75rem)", color: "var(--fg)" }}>
          Challenges
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {items.map((item, i) => (
            <div
               key={item.title}
               className="challenge-item"
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
                   padding: "clamp(1rem, 2vw, 1.25rem) clamp(1.25rem, 3vw, 1.5rem)",
                   background: "none",
                   border: "none",
                   color: "var(--fg)",
                   fontFamily: "var(--font-syne)",
                   fontSize: "clamp(0.85rem, 2vw, 1rem)",
                   cursor: "pointer",
                   display: "flex",
                   justifyContent: "space-between",
                   alignItems: "center",
                   gap: "clamp(0.5rem, 1vw, 0.75rem)",
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
                 <div className="challenge-content" style={{ padding: "0 clamp(1.5rem, 3vw, 1.5rem) clamp(1.25rem, 2.5vw, 1.25rem)", color: "#888", lineHeight: 1.8 }}>
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
        padding: "clamp(4rem, 8vw, 7.5rem) 0",
        background: `linear-gradient(180deg, transparent, ${project.colors.primary}44, transparent)`,
      }}
    >
      <div className="container">
        <h2
          className="reveal-text"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            marginBottom: "clamp(2rem, 4vw, 3.75rem)",
            color: "var(--fg)",
            textAlign: "center",
          }}
        >
          Results
        </h2>
        <div
          className="results-grid"
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
                  fontSize: "clamp(0.7rem, 2vw, 0.9rem)",
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const images: GalleryItem[] = project.gallery ?? project.features.map((f, i) => ({
    id: i,
    title: f,
    aspect: ["4/3", "3/4", "1/1", "16/9"][i % 4],
    imageUrl: project.heroImage ?? "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    description: `Detailed preview of ${f} feature in ${project.title}.`,
  }))

  const handleKeyDown = (e: KeyboardEvent) => {
    if (activeIndex === null) return
    if (e.key === "Escape") setActiveIndex(null)
    if (e.key === "ArrowRight") setActiveIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0))
    if (e.key === "ArrowLeft") setActiveIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0))
  }

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [activeIndex, images.length])

  return (
    <section id="gallery" ref={sectionRef}     style={{ padding: "clamp(4rem, 8vw, 7.5rem) 0" }}>
      <div className="container">
          <div style={{ marginBottom: "clamp(2rem, 4vw, 3.75rem)", textAlign: "left" }}>
             <span style={{ color: project.colors.accent, fontFamily: "var(--font-syne)", fontSize: "clamp(0.65rem, 1.8vw, 0.8rem)", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>
            VISUAL SHOWCASE
          </span>
          <h2 className="reveal-text" style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: "8px", color: "var(--fg)" }}>
            Project Gallery & UI Screens
          </h2>
        </div>

         {/* Gallery Grid */}
         <div
           className="gallery-columned"
           style={{
             columnCount: 3,
             columnGap: "24px",
           }}
         >
          {images.map((img, i) => (
            <div
              key={img.id ?? i}
              style={{
                marginBottom: "24px",
                breakInside: "avoid",
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? "translateY(0)" : "translateY(20px)",
                transition: `transform 0.6s ease ${i * 0.08}s, opacity 0.6s ease ${i * 0.08}s`,
              }}
            >
              <div
                onClick={() => setActiveIndex(i)}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  aspectRatio: img.aspect || "16/10",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  position: "relative",
                  cursor: "pointer",
                }}
                className="gallery-item-card"
              >
                {img.imageUrl ? (
                  <img
                    src={img.imageUrl}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.08)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)"
                    }}
                  />
                ) : (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: project.colors.accent }}>
                    {img.title}
                  </div>
                )}

                {/* Dark Vignette Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "16px",
                    pointerEvents: "none",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "0.95rem", color: "#fff" }}>
                      {img.title}
                    </span>
                    <Maximize2 size={16} color={project.colors.accent} />
                  </div>
                  {img.description && (
                    <p style={{ fontSize: "0.75rem", color: "#aaa", marginTop: "4px", lineHeight: 1.4 }}>
                      {img.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeIndex !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0, 0, 0, 0.92)",
            backdropFilter: "blur(20px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
          onClick={() => setActiveIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveIndex(null)}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10000,
            }}
            aria-label="Close Lightbox"
          >
            <X size={20} />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((activeIndex - 1 + images.length) % images.length)
            }}
            style={{
              position: "absolute",
              left: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10000,
            }}
            aria-label="Previous Image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((activeIndex + 1) % images.length)
            }}
            style={{
              position: "absolute",
              right: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10000,
            }}
            aria-label="Next Image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Main Image Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "1000px",
              width: "100%",
              maxHeight: "85vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={images[activeIndex].imageUrl || project.heroImage || ""}
              alt={images[activeIndex].title}
              referrerPolicy="no-referrer"
              style={{
                maxWidth: "100%",
                maxHeight: "70vh",
                objectFit: "contain",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 25px 50px rgba(0,0,0,0.9)",
              }}
            />
            <div style={{ marginTop: "20px", textAlign: "center", color: "#fff" }}>
              <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.25rem", color: project.colors.accent }}>
                {images[activeIndex].title}
              </h3>
              {images[activeIndex].description && (
                <p style={{ fontSize: "0.9rem", color: "#ccc", marginTop: "6px", maxWidth: "600px" }}>
                  {images[activeIndex].description}
                </p>
              )}
              <span style={{ display: "inline-block", marginTop: "10px", fontSize: "0.75rem", color: "#777", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Image {activeIndex + 1} of {images.length}
              </span>
            </div>
          </div>
        </div>
      )}

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
    if (!emblaApi || getPrefersReducedMotion() || getIsTouchDevice()) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <section ref={sectionRef}     style={{ padding: "clamp(4rem, 8vw, 7.5rem) 0" }}>
      <div className="container">
        <h2 className="reveal-text" style={{ fontFamily: "var(--font-syne)",           fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            marginBottom: "clamp(2rem, 4vw, 3.75rem)", color: "var(--fg)" }}>
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
                 className="testimonial-item"
                 style={{
                   flex: "0 0 100%",
                  padding: "clamp(1.5rem, 3vw, 2rem)",
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                }}
              >
                <p style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)", color: "#aaa", lineHeight: 1.7, fontStyle: "italic" }}>
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div style={{ marginTop: "20px" }}>
                  <strong style={{ color: project.colors.accent, fontFamily: "var(--font-syne)" }}>{item.author}</strong>
                  <p style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)", color: "#666" }}>{item.role}</p>
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
    <section ref={sectionRef}     style={{ padding: "clamp(4rem, 8vw, 7.5rem) 0" }}>
      <div className="container">
        <h2 style={{ fontFamily: "var(--font-syne)",           fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            marginBottom: "clamp(2rem, 4vw, 3.75rem)", color: "var(--fg)" }}>
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
                      fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)",
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
        padding: "clamp(4rem, 8vw, 7.5rem) 0",
        background: `linear-gradient(180deg, transparent, ${project.colors.primary}22, transparent)`,
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
         <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.5rem, 4vw, 2.5rem)", marginBottom: "clamp(1rem, 2vw, 1.25rem)", color: "var(--fg)" }}>
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
            padding: "clamp(0.7rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem)",
            border: `1px solid ${project.colors.accent}66`,
            color: project.colors.accent,
            borderRadius: "4px",
            fontSize: "clamp(0.7rem, 1.8vw, 0.85rem)",
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
    <section        style={{ padding: "clamp(4rem, 8vw, 7.5rem) 0", borderTop: "1px solid var(--gray)" }}>
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
        padding: "clamp(4rem, 8vw, 7.5rem) 0",
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
      <Navbar />
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
      <section        style={{ padding: "clamp(4rem, 8vw, 7.5rem) 0", borderTop: "1px solid var(--gray)" }}>
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
