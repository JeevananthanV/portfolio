"use client"

import { useState } from "react"
import Link from "next/link"
import { projects, Project } from "@/lib/data/projects"
import { motion, AnimatePresence } from "motion/react"
import { ExternalLink, ArrowRight, Database, QrCode, CreditCard, Sparkles, Server } from "lucide-react"

const categoryTabs = [
  { id: "all", label: "All Projects" },
  { id: "flagship", label: "Flagship Architecture" },
  { id: "community", label: "NGO & Community" },
  { id: "enterprise", label: "Healthcare & Corporate" },
]

/* -------------------------------------------------------------------------- */
/* Component 1: Dedicated Flagship Spotlight for Kottai Varahi Temple        */
/* -------------------------------------------------------------------------- */
function KottaiVarahiSpotlightCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="project-spotlight-card"
      style={{
        gridColumn: "1 / -1",
        background: "linear-gradient(135deg, rgba(74, 4, 4, 0.4) 0%, rgba(20, 10, 10, 0.95) 100%)",
        border: "1px solid rgba(212, 175, 55, 0.35)",
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow: "0 20px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(212,175,55,0.2)",
        position: "relative",
        marginBottom: "24px",
      }}
    >
      <div
        className="spotlight-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          alignItems: "center",
          gap: "32px",
          padding: "clamp(1.5rem, 4vw, 2.5rem)",
        }}
      >
        {/* Left Info Column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "clamp(0.35rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 0.875rem)",
                background: "rgba(212, 175, 55, 0.15)",
                border: "1px solid rgba(212, 175, 55, 0.4)",
                color: "#d4af37",
                  fontSize: "clamp(0.65rem, 1.8vw, 0.75rem)",
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                borderRadius: "999px",
              }}
            >
              <Sparkles size={14} /> FLAGSHIP FULL-STACK ARCHITECTURE
            </span>
            <span style={{ fontSize: "0.8rem", color: "#aaa" }}>• Jaivarahi.org</span>
          </div>

          <h3
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            {project.title}
          </h3>

          <p style={{                 fontSize: "clamp(0.85rem, 2vw, 0.98rem)", color: "#ccc", lineHeight: 1.6, marginBottom: "24px" }}>
            {project.description}
          </p>

          {/* Quick Stats Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
              gap: "12px",
              marginBottom: "28px",
            }}
          >
            <div style={{ background: "rgba(0,0,0,0.4)", padding: "12px 16px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#d4af37", fontSize: "0.75rem", fontWeight: 700 }}>
                <Database size={14} /> MySQL
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginTop: "4px" }}>13 Tables</div>
            </div>

            <div style={{ background: "rgba(0,0,0,0.4)", padding: "12px 16px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#d4af37", fontSize: "0.75rem", fontWeight: 700 }}>
                <CreditCard size={14} /> Razorpay
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginTop: "4px" }}>E-Donations</div>
            </div>

            <div style={{ background: "rgba(0,0,0,0.4)", padding: "12px 16px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#d4af37", fontSize: "0.75rem", fontWeight: 700 }}>
                <QrCode size={14} /> QR Passes
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginTop: "4px" }}>Scanner API</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={`/projects/${project.slug}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "clamp(0.5rem, 1.5vw, 0.75rem) clamp(1.25rem, 3vw, 1.5rem)",
                  background: "#d4af37",
                  color: "#0a0a0a",
                  fontWeight: 800,
                  fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                Explore Full Rearchitecture <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.a
              href="https://www.jaivarahi.org/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, background: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "clamp(0.5rem, 1.5vw, 0.75rem) clamp(1.25rem, 3vw, 1.5rem)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Visit jaivarahi.org <ExternalLink size={16} />
            </motion.a>
          </div>
        </div>

        {/* Right Image/Mockup Showcase */}
        <div style={{ position: "relative" }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="floating-tech-tag"
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(212, 175, 55, 0.3)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.8)",
              aspectRatio: "16/10",
              background: "#000",
              position: "relative",
              marginBottom: "clamp(1rem, 3vw, 1.5rem)",
            }}
          >
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
          </motion.div>

          {/* Floating Live Tech Tag Overlay */}
          <div
            style={{
              position: "absolute",
              bottom: "-16px",
              right: "20px",
              background: "rgba(10, 10, 10, 0.92)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(212,175,55,0.5)",
              padding: "clamp(0.5rem, 1.5vw, 0.625rem) clamp(0.875rem, 2vw, 1.125rem)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Server size={18} color="#d4af37" />
            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#fff" }}>React 19 + Express REST</div>
              <div style={{ fontSize: "0.68rem", color: "#888" }}>cPanel Passenger Live Node.js</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/* Component 2: Featured Horizontal Split Showcase Card                      */
/* -------------------------------------------------------------------------- */
function FeaturedSplitCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, borderColor: "rgba(255, 62, 0, 0.4)" }}
      className="project-card project-card-split"
      style={{
        gridColumn: "1 / -1",
        background: "rgba(255, 255, 255, 0.02)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "20px",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "0",
        transition: "border-color 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      {/* Image Side */}
      <div style={{ position: "relative", minHeight: "clamp(200px, 40vw, 280px)", overflow: "hidden" }}>
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, transparent 60%, rgba(10,10,10,0.9) 100%)",
            pointerEvents: "none",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            padding: "6px 14px",
            background: "rgba(10,10,10,0.85)",
            backdropFilter: "blur(8px)",
            border: `1px solid ${project.colors.accent}44`,
            color: project.colors.accent,
            fontSize: "0.75rem",
            fontWeight: 800,
            letterSpacing: "0.1em",
            borderRadius: "6px",
          }}
        >
          {project.theme}
        </span>
      </div>

      {/* Content Side */}
      <div className="content-side" style={{ padding: "clamp(1.5rem, 3vw, 2.25rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <span style={{ fontSize: "0.8rem", color: project.colors.accent, textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>
          {project.role}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "1.75rem",
            fontWeight: 800,
            color: "#fff",
            marginTop: "6px",
            marginBottom: "12px",
          }}
        >
          {project.title}
        </h3>

        <p style={{               fontSize: "clamp(0.8rem, 2vw, 0.92rem)", color: "#aaa", lineHeight: 1.6, marginBottom: "20px" }}>
          {project.description}
        </p>

        {/* Outcome highlight */}
        {project.outcome && (
          <div
            style={{
              padding: "clamp(0.5rem, 1.5vw, 0.625rem) clamp(0.75rem, 2vw, 1rem)",
              background: "rgba(255,255,255,0.03)",
              borderLeft: `3px solid ${project.colors.accent}`,
              borderRadius: "0 8px 8px 0",
              marginBottom: "20px",
              fontSize: "0.85rem",
              color: "#eee",
            }}
          >
            <strong>Impact:</strong> {project.outcome}
          </div>
        )}

        {/* Tech tags */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontSize: "clamp(0.6rem, 1.8vw, 0.72rem)",
                padding: "clamp(0.25rem, 1vw, 4px) clamp(0.6rem, 1.5vw, 12px)",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#ccc",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div>
          <Link
            href={`/projects/${project.slug}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#fff",
              textDecoration: "none",
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              fontSize: "0.9rem",
            }}
          >
            View Case Study <ArrowRight size={16} color={project.colors.accent} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

import Tilt3DCard from "@/components/3d/Tilt3DCard"

/* -------------------------------------------------------------------------- */
/* Component 3: Bento Box Grid Card Component                                 */
/* -------------------------------------------------------------------------- */
function BentoGridCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <Tilt3DCard intensity={10}>
         <div
           className="project-card"
           style={{
             background: "rgba(255, 255, 255, 0.02)",
             border: "1px solid rgba(255, 255, 255, 0.08)",
             borderRadius: "16px",
             overflow: "hidden",
             display: "flex",
             flexDirection: "column",
             height: "100%",
             transition: "border-color 0.3s ease, box-shadow 0.3s ease",
           }}
         >
           <Link href={`/projects/${project.slug}`} style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}>
             {/* Top Accent Color Bar */}
             <div style={{ height: "4px", background: project.colors.accent }} />

             <div style={{ padding: "clamp(1.5rem, 3vw, 1.5rem)", display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <span style={{ fontSize: "0.7rem", color: project.colors.accent, textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>
                  {project.theme}
                </span>
                <ExternalLink size={16} color="var(--accent)" />
              </div>

              <h3 style={{ fontFamily: "var(--font-syne)",               fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>
                {project.title}
              </h3>

              <p style={{               fontSize: "clamp(0.75rem, 2vw, 0.88rem)", color: "#aaa", lineHeight: 1.6, marginBottom: "20px", flexGrow: 1 }}>
                {project.description}
              </p>

              <div style={{ position: "relative", height: "clamp(120px, 25vw, 160px)", borderRadius: "10px", overflow: "hidden", marginBottom: "20px", border: "1px solid rgba(255,255,255,0.1)" }} className="bento-image">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "auto" }}>
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.68rem",
                      padding: "clamp(0.2rem, 0.5vw, 3px) clamp(0.6rem, 1.5vw, 10px)",
                      borderRadius: "4px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#aaa",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </Tilt3DCard>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/* Component 4: Minimal Creative Code Card Component                         */
/* -------------------------------------------------------------------------- */
function MinimalCodeCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <Tilt3DCard intensity={8}>
        <div
          className="project-card"
          style={{
            background: "radial-gradient(circle at top left, rgba(255,255,255,0.04), rgba(0,0,0,0.6))",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            padding: "clamp(1.5rem, 3vw, 1.75rem)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            transition: "border-color 0.3s ease",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "var(--accent)" }}>
                // {project.slug}.ts
              </span>
              <span style={{ fontSize: "0.7rem",                 padding: "clamp(0.2rem, 0.5vw, 2px) clamp(0.5rem, 1.5vw, 8px)", background: "rgba(255,255,255,0.06)", borderRadius: "4px", color: "#aaa" }}>
                {project.role}
              </span>
            </div>

            <h3 style={{ fontFamily: "var(--font-syne)",               fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", fontWeight: 800, color: "#fff", marginBottom: "10px" }}>
              {project.title}
            </h3>

            <p style={{               fontSize: "clamp(0.75rem, 2vw, 0.88rem)", color: "#aaa", lineHeight: 1.6, marginBottom: "16px" }}>
              {project.description}
            </p>

            {/* Rich Image Showcase Container */}
            <div style={{ position: "relative", height: "clamp(110px, 25vw, 140px)", borderRadius: "10px", overflow: "hidden", marginBottom: "20px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <img
                src={project.heroImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "24px" }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "clamp(0.6rem, 1.8vw, 0.7rem)",
                    padding: "clamp(0.3rem, 1vw, 0.5rem) clamp(0.6rem, 1.5vw, 0.875rem)",
                    borderRadius: "4px",
                    background: "rgba(255,255,255,0.05)",
                    color: "#ddd",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "clamp(0.5rem, 1.5vw, 0.625rem) clamp(0.75rem, 2vw, 1rem)",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              color: "#fff",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 700,
            }}
          >
            <span>View Details</span>
            <ArrowRight size={16} color="var(--accent)" />
          </Link>
        </div>
      </Tilt3DCard>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/* Main ProjectsGrid Section Assembly                                          */
/* -------------------------------------------------------------------------- */
export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "all") return true
    if (activeCategory === "flagship") return p.slug === "kottai-varahi"
    if (activeCategory === "community") return p.slug === "arise20-foundation" || p.slug === "salem-marathon"
    if (activeCategory === "enterprise") return p.slug === "kr-hospital" || p.slug === "salem-steel" || p.slug === "anbu-travels" || p.slug === "aruvi-tours"
    return true
  })

  return (
    <section id="work" style={{ padding: "clamp(4rem, 8vw, 7.5rem) 0" }}>
      <div className="container" style={{ maxWidth: "1200px" }}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          <span style={{ color: "var(--accent)", fontFamily: "var(--font-syne)", fontSize: "clamp(0.7rem, 2vw, 0.8rem)", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>
            PORTFOLIO & ARCHITECTURE SHOWCASE
          </span>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              marginTop: "8px",
              lineHeight: 1.1,
            }}
          >
            SELECTED PROJECTS
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab.id
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "clamp(0.5rem, 1.5vw, 0.625rem) clamp(1rem, 2.5vw, 1.25rem)",
                  borderRadius: "999px",
                  fontSize: "clamp(0.7rem, 1.8vw, 0.85rem)",
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  cursor: "pointer",
                  border: isActive ? "1px solid var(--accent)" : "1px solid rgba(255,255,255,0.12)",
                  background: isActive ? "var(--accent)" : "rgba(255,255,255,0.03)",
                  color: isActive ? "#0e0e0e" : "#ccc",
                  transition: "all 0.2s ease",
                }}
              >
                {tab.label}
              </motion.button>
            )
          })}
        </div>

        {/* Animated Grid with AnimatePresence */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(clamp(240px, 40vw, 340px), 1fr))",
            gap: "clamp(1.5rem, 4vw, 2rem)",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              if (project.slug === "kottai-varahi") {
                return <KottaiVarahiSpotlightCard key={project.slug} project={project} />
              }
              if (project.slug === "arise20-foundation") {
                return <FeaturedSplitCard key={project.slug} project={project} />
              }
              if (project.slug === "salem-marathon") {
                return <BentoGridCard key={project.slug} project={project} />
              }
              if (project.featured) {
                return <FeaturedSplitCard key={project.slug} project={project} />
              }
              if (project.slug === "kr-hospital" || project.slug === "salem-steel" || project.slug === "anbu-travels") {
                return <BentoGridCard key={project.slug} project={project} />
              }
              return <MinimalCodeCard key={project.slug} project={project} />
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

