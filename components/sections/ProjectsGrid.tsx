"use client"

import { useRef, useEffect } from "react"
import ProjectPlaceholder from "@/components/ProjectPlaceholder"
import { projects } from "@/lib/data/projects"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink, ArrowRight } from "lucide-react"

export default function ProjectsGrid() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".project-card")
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="work" ref={sectionRef} style={{ padding: "100px 0" }}>
      <div className="container" style={{ maxWidth: "1200px", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: "60px" }}>
          <span style={{ color: "var(--accent)", fontFamily: "var(--font-syne)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>
            PORTFOLIO SHOWCASE
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
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "32px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.slug}
              className="project-card"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
              }}
            >
              <a href={`/projects/${project.slug}`} style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}>
                {/* Image / SVG Mockup Header */}
                <div style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.06)", height: "220px" }}>
                  {project.heroImage && project.heroImage.startsWith("http") ? (
                    <img
                      src={project.heroImage}
                      alt={project.title}
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
                    <ProjectPlaceholder title={project.title} featured={project.featured} colors={project.colors} />
                  )}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 60%)",
                      pointerEvents: "none",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "16px",
                      padding: "4px 12px",
                      background: "rgba(10,10,10,0.75)",
                      backdropFilter: "blur(8px)",
                      border: `1px solid ${project.colors.accent}44`,
                      color: project.colors.accent,
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      borderRadius: "4px",
                    }}
                  >
                    {project.theme}
                  </span>
                </div>

                {/* Card Content Body */}
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "8px" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#fff",
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </h3>
                    <ExternalLink size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: "4px" }} />
                  </div>

                  <p style={{ fontSize: "0.88rem", color: "#aaa", marginBottom: "20px", lineHeight: 1.6, flexGrow: 1 }}>
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "auto" }}>
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.7rem",
                          padding: "4px 12px",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: "999px",
                          color: "#ccc",
                          background: "rgba(255,255,255,0.03)",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
