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
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Image as ImageIcon,
  Quote,
  Server,
  Github,
  Mail
} from "lucide-react"
import Link from "next/link"
import ProjectPreloader from "@/components/ProjectPreloader"

interface ProjectClientProps {
  project: Project
  prevProject?: Project
  nextProject?: Project
}

export default function ProjectClient({ project, prevProject, nextProject }: ProjectClientProps) {
  const accent = project.colors.accent || "#ff3e00"

  return (
    <>
      <ProjectPreloader title={project.title} accentColor={accent} />
      
      <div 
        className="min-h-screen text-white font-sans relative overflow-hidden pb-24 bg-neutral-950"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 5%, ${project.colors.primary}20 0%, transparent 60%)`,
        }}
      >
        {/* Sticky Header Bar */}
        <header className="border-b border-white/10 py-4 px-4 sm:px-8 flex items-center justify-between bg-neutral-950/80 backdrop-blur-xl sticky top-0 z-40">
          <Link 
            href="/#work" 
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#ff3e00]" />
            <span>Back to Projects</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 border border-white/10 text-neutral-300">
              {project.theme}
            </span>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
          
          {/* Project Title Header */}
          <div className="space-y-6 max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span 
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block font-mono border"
                style={{ 
                  color: accent,
                  borderColor: `${accent}40`,
                  background: `${accent}15`
                }}
              >
                {project.role}
              </span>
              <span className="text-xs font-mono text-neutral-500">• Production Case Study</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-syne leading-tight">
              {project.title}
            </h1>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans">
              {project.description}
            </p>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-3 flex-wrap pt-2">
              {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-black font-extrabold text-xs uppercase tracking-wider font-syne rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg"
                  style={{ background: accent === "#ffffff" ? "#ff3e00" : accent }}
                >
                  <span>Live Production</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.railwayUrl && (
                <a 
                  href={project.railwayUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-purple-950/60 border border-purple-500/30 text-purple-300 font-mono text-xs rounded-xl hover:text-white transition-colors"
                >
                  <Server className="w-3.5 h-3.5 text-purple-400" />
                  <span>Railway API</span>
                </a>
              )}

              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-900 border border-white/10 text-neutral-300 font-sans text-xs font-semibold rounded-xl transition-all hover:text-white hover:bg-neutral-800"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Hero Image Showcase */}
          <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
            <img 
              src={project.heroImage} 
              alt={project.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-neutral-950/85 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-neutral-300">
                Deployed & Monitored in Production
              </span>
            </div>
          </div>

          {/* Stats Bar (if available) */}
          {project.stats && project.stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {project.stats.map((s, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 text-center">
                  <div className="font-syne font-extrabold text-2xl text-white">
                    {s.value}<span className="text-[#ff3e00] text-sm ml-0.5">{s.suffix}</span>
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Problem & Solution Split Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-white/5 p-6 sm:p-8 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                <AlertCircle size={18} />
                <span className="text-xs font-bold uppercase tracking-wider font-mono text-neutral-300">
                  The Engineering Problem
                </span>
              </div>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans">
                {project.problem}
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-white/5 p-6 sm:p-8 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={18} />
                <span className="text-xs font-bold uppercase tracking-wider font-mono text-neutral-300">
                  Architectural Solution
                </span>
              </div>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans">
                {project.solution}
              </p>
            </div>
          </div>

          {/* System Capabilities & Tech Stack Bento */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Features (Span 7) */}
            <div className="lg:col-span-7 bg-neutral-900/50 border border-white/5 rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-white font-syne font-bold text-base">
                <Cpu className="w-5 h-5 text-[#ff3e00]" />
                <span>System Capabilities & Architecture</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-[#ff3e00]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Summary (Span 5) */}
            <div className="lg:col-span-5 bg-neutral-900/50 border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold font-syne text-white mb-3">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 rounded-lg font-mono text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.dbTables.length > 0 && (
                <div className="border-t border-white/5 pt-5 mt-5">
                  <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider block mb-2">
                    Database Schema Entities ({project.dbTables.length} Tables)
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.dbTables.map((tbl) => (
                      <span key={tbl} className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 border border-white/5 text-neutral-400">
                        {tbl}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Engineering Challenges & Solutions (if present) */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#ff3e00]" />
                <h2 className="text-xl sm:text-2xl font-extrabold text-white font-syne">
                  Key Technical Challenges Overcome
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.challenges.map((c, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-neutral-900/50 border border-white/5 space-y-3">
                    <h4 className="font-bold text-sm text-white font-syne text-[#ff3e00]">{c.title}</h4>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block">Problem:</span>
                      <p className="text-xs text-neutral-400 mt-0.5">{c.problem}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block">Solution:</span>
                      <p className="text-xs text-neutral-300 mt-0.5">{c.solution}</p>
                    </div>
                    <div className="pt-2 border-t border-white/5">
                      <span className="text-[10px] font-mono text-emerald-400 font-bold block">Outcome: {c.outcome}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Development Journey Roadmap (if present) */}
          {project.devJourney && project.devJourney.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#ff3e00]" />
                <h2 className="text-xl sm:text-2xl font-extrabold text-white font-syne">
                  Engineering Roadmap & Sprint Delivery
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                {project.devJourney.map((j, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-neutral-900/40 border border-white/5">
                    <span className="text-xs font-mono font-bold text-[#ff3e00] block">{j.week}</span>
                    <h5 className="font-syne font-bold text-xs text-white mt-1 mb-1">{j.task}</h5>
                    <p className="text-[11px] text-neutral-400 leading-normal">{j.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Screenshot Gallery (if present) */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-[#ff3e00]" />
                <h2 className="text-xl sm:text-2xl font-extrabold text-white font-syne">
                  Interface & System Gallery
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((item) => (
                  <div key={item.id} className="rounded-2xl overflow-hidden border border-white/5 bg-neutral-900/60 group">
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                      <img 
                        src={item.imageUrl || project.heroImage} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-3.5">
                      <h4 className="font-syne font-bold text-xs text-white">{item.title}</h4>
                      {item.description && (
                        <p className="text-[11px] text-neutral-400 mt-1 line-clamp-2">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonials (if present) */}
          {project.testimonials && project.testimonials.length > 0 && (
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-white/5">
              <div className="flex items-center gap-2 mb-4 text-[#ff3e00]">
                <Quote size={20} />
                <h3 className="font-syne font-bold text-base text-white">Client Feedback</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.testimonials.map((t, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col justify-between">
                    <p className="text-xs text-neutral-300 italic">&ldquo;{t.quote}&rdquo;</p>
                    <div className="mt-3 pt-2 border-t border-white/5 text-[11px]">
                      <span className="font-bold text-white block">{t.author}</span>
                      <span className="text-neutral-500 font-mono">{t.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Previous / Next Project Navigation Bar */}
          <div className="pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevProject && (
              <Link 
                href={`/projects/${prevProject.slug}`}
                className="p-5 rounded-2xl bg-neutral-900/50 hover:bg-neutral-900 border border-white/5 hover:border-white/15 transition-all text-left group"
              >
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-1 mb-1">
                  <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Previous Project
                </span>
                <span className="font-syne font-bold text-sm text-white group-hover:text-[#ff3e00] transition-colors block">
                  {prevProject.title}
                </span>
              </Link>
            )}

            {nextProject && (
              <Link 
                href={`/projects/${nextProject.slug}`}
                className="p-5 rounded-2xl bg-neutral-900/50 hover:bg-neutral-900 border border-white/5 hover:border-white/15 transition-all text-right group"
              >
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest flex items-center justify-end gap-1 mb-1">
                  Next Project <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="font-syne font-bold text-sm text-white group-hover:text-[#ff3e00] transition-colors block">
                  {nextProject.title}
                </span>
              </Link>
            )}
          </div>

          {/* Ready to collaborate callout */}
          <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/70 border border-white/10 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-extrabold font-syne text-white">
              Interested in a Similar Architecture?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto font-sans">
              I can build production-ready full-stack applications with payment gateways, robust relational databases, and modern UI.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ff3e00] text-black font-extrabold text-xs uppercase tracking-wider font-syne hover:bg-[#ff3e00]/90 transition-all shadow-lg shadow-[#ff3e00]/20"
              >
                <span>Let&apos;s Discuss Your Project</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </main>
      </div>
    </>
  )
}
