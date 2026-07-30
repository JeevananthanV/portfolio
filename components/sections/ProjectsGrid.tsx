"use client"

import { useRef } from "react"
import ProjectPlaceholder from "@/components/ProjectPlaceholder"
import { projects } from "@/lib/data/projects"
import { useReveal } from "@/lib/hooks/useReveal"
import { useCountUp } from "@/lib/hooks/useCountUp"

const featuredProjects = projects.filter((p) => p.featured)
const gridProjects = projects.filter((p) => !p.featured)

export default function ProjectsGrid() {
  return (
    <section id="work" className="container">
      <h2 className="huge-type outline-text" style={{ fontSize: "4rem", marginBottom: "60px" }}>
        SELECTED WORK
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "120px" }}>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} featured />
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          marginTop: "60px",
        }}
      >
        {gridProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[number]
  featured?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isRevealed = useReveal(ref)

  return (
    <div
      ref={ref}
      className="project-card"
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed ? "scale(1)" : "scale(0.95)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <a href={`/projects/${project.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
        <div
          className="project-card-image"
        >
          <ProjectPlaceholder title={project.title} featured={featured} colors={project.colors} />
        </div>

        <h3
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: featured ? "1.5rem" : "1.1rem",
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          {project.title}
        </h3>

        <p style={{ fontSize: "0.85rem", color: "#888", marginBottom: "12px" }}>
          {project.description}
        </p>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {project.tech.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "0.7rem",
                padding: "3px 10px",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "999px",
                color: "#888",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </a>
    </div>
  )
}