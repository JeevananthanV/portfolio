"use client"

import { motion } from "motion/react"
import { Project } from "@/lib/data/projects"
import { 
  ArrowLeft, 
  ExternalLink, 
  Terminal, 
  ArrowRight, 
  Award, 
  Database,
  Cpu
} from "lucide-react"
import Link from "next/link"
import ProjectPreloader from "@/components/ProjectPreloader"

interface ProjectClientProps {
  project: Project
}

export default function ProjectClient({ project }: ProjectClientProps) {
  return (
    <>
      <ProjectPreloader title={project.title} accentColor={project.colors.accent} />
      
      <div 
        className="min-h-screen text-white font-sans relative overflow-hidden pb-20"
        style={{
          background: `radial-gradient(circle at 50% 10%, ${project.colors.primary}15 0%, #0a0a0a 100%)`,
        }}
      >
        <header className="border-b border-white/5 py-6 px-6 md:px-12 flex items-center justify-between bg-black/40 backdrop-blur-md sticky top-0 z-40">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors"
            style={{ color: project.colors.accent }}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Architectures
          </Link>
          <span className="text-xs font-mono text-neutral-500">{project.theme}</span>
        </header>

        <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 space-y-12">
          
          {/* Project Title Header */}
          <div className="space-y-6 max-w-4xl">
            <span 
              className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block font-mono border"
              style={{ 
                color: project.colors.accent,
                borderColor: `${project.colors.accent}30`,
                background: `${project.colors.accent}10`
              }}
            >
              {project.role}
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight font-syne">
              {project.title}
            </h1>
            <p className="text-neutral-400 text-sm md:text-lg leading-relaxed font-sans">
              {project.description}
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 hover:opacity-90"
                  style={{ background: project.colors.accent }}
                >
                  Live Demo <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 border border-white/10 text-neutral-300 font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 hover:bg-neutral-900"
                >
                  Source Code <Terminal className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Project Media Showcase */}
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src={project.heroImage} 
              alt={project.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Problem & Solution Split Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-900/40 border border-white/5 p-8 rounded-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider font-mono text-neutral-400">The Problem</span>
              <p className="text-neutral-300 text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div className="bg-neutral-900/40 border border-white/5 p-8 rounded-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider font-mono text-neutral-400">The Solution</span>
              <p className="text-neutral-300 text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Features and Stats bento block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Features (Span 7) */}
            <div className="lg:col-span-7 bg-[#121214] border border-white/5 rounded-3xl p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-neutral-300" />
                <h3 className="text-base font-bold font-syne text-white">System Capabilities</h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: project.colors.accent }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Summary (Span 5) */}
            <div className="lg:col-span-5 bg-[#121214] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-base font-bold font-syne text-white">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-3 py-1 bg-black/40 border border-white/5 text-neutral-300 rounded-lg font-mono text-[10px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.dbTables.length > 0 && (
                <div className="border-t border-white/5 pt-6 mt-6 space-y-3">
                  <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider block">Database Entities</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.dbTables.map((tbl) => (
                      <span key={tbl} className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/50 text-neutral-400">
                        {tbl}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

        </main>
      </div>
    </>
  )
}
