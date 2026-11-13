"use client"

import { useState } from "react"
import Link from "next/link"
import { projects, Project } from "@/lib/data/projects"
import { motion, AnimatePresence } from "motion/react"
import { 
  ExternalLink, 
  ArrowRight, 
  Database, 
  CreditCard, 
  Sparkles, 
  Server,
  Github,
  Layers,
  ShieldCheck,
  Zap
} from "lucide-react"

const categoryTabs = [
  { id: "all", label: "All Works" },
  { id: "flagship", label: "Flagship Architectures" },
  { id: "fullstack", label: "Full Stack & Web Apps" },
  { id: "corporate", label: "Corporate & Community" },
]

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState("all")

  // Ensure flagships come first so there are never orphaned grid slots
  const sortedProjects = [...projects].sort((a, b) => {
    const isAFlagship = a.slug === "kottai-varahi" || a.slug === "nandhini-tex"
    const isBFlagship = b.slug === "kottai-varahi" || b.slug === "nandhini-tex"
    if (isAFlagship && !isBFlagship) return -1
    if (!isAFlagship && isBFlagship) return 1
    return 0
  })

  const filteredProjects = sortedProjects.filter((p) => {
    if (activeCategory === "all") return true
    if (activeCategory === "flagship") {
      return p.slug === "kottai-varahi" || p.slug === "nandhini-tex"
    }
    if (activeCategory === "fullstack") {
      return p.slug === "wefluence" || p.slug === "anbu-travels" || p.slug === "arise20-foundation" || p.slug === "salem-marathon"
    }
    if (activeCategory === "corporate") {
      return p.slug === "ethiroli" || p.slug === "jayalakshmi-groups" || p.slug === "aruvi-tours"
    }
    return true
  })

  return (
    <section id="work" className="relative py-20 md:py-32 overflow-hidden bg-neutral-950 border-t border-white/5">
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#ff3e00]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#ff3e00] font-mono tracking-widest text-xs uppercase font-semibold block mb-3">
              [ PORTFOLIO SHOWCASE ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-syne">
              Production-Grade Systems
            </h2>
            <p className="text-neutral-400 mt-4 text-sm md:text-base leading-relaxed font-sans">
              Real-world architectures engineered with strict relational schemas, payment gateways, concurrency locks, and automated deployment pipelines.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 bg-neutral-900/60 backdrop-blur-md p-1.5 rounded-full border border-white/5 self-start md:self-end">
            {categoryTabs.map((tab) => {
              const isActive = activeCategory === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 font-sans cursor-pointer relative ${
                    isActive ? "text-black" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeWorkGlow"
                      className="absolute inset-0 bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Bento Grid Layout - Zero orphaned gaps */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isLarge = project.slug === "kottai-varahi" || project.slug === "nandhini-tex"
              const gridSpan = isLarge ? "md:col-span-12" : "md:col-span-6"

              return (
                <motion.div
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className={`${gridSpan} group relative bg-neutral-900/40 hover:bg-neutral-900/70 rounded-3xl border border-white/5 hover:border-white/15 overflow-hidden transition-all duration-300 flex flex-col justify-between`}
                >
                  {isLarge ? (
                    /* Large Showcase Card (Flagship System) */
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center h-full">
                      
                      {/* Left Details Column */}
                      <div className="lg:col-span-6 flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff3e00]/10 border border-[#ff3e00]/25 text-[#ff3e00] text-[10px] font-mono font-bold uppercase tracking-wider">
                              <Sparkles className="w-3 h-3" /> Flagship Architecture
                            </span>
                            <span className="text-neutral-500 text-xs font-mono">• Production Live</span>
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-syne group-hover:text-[#ff3e00] transition-colors duration-200">
                            {project.title}
                          </h3>

                          <p className="text-neutral-300 mt-3 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                            {project.description}
                          </p>

                          {/* Senior Metadata Overview: 1-col on mobile, 3-col on sm+ */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-6">
                            {project.dbTables.length > 0 && (
                              <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                                <span className="text-[10px] text-neutral-500 block uppercase font-mono tracking-wider">Schema</span>
                                <span className="text-xs sm:text-sm font-bold text-white mt-1 flex items-center gap-1.5 font-syne">
                                  <Database className="w-3.5 h-3.5 text-[#ff3e00]" /> {project.dbTables.length} Tables
                                </span>
                              </div>
                            )}
                            <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                              <span className="text-[10px] text-neutral-500 block uppercase font-mono tracking-wider">Payments</span>
                              <span className="text-xs sm:text-sm font-bold text-white mt-1 flex items-center gap-1.5 font-syne">
                                <CreditCard className="w-3.5 h-3.5 text-blue-400" /> Razorpay
                              </span>
                            </div>
                            <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                              <span className="text-[10px] text-neutral-500 block uppercase font-mono tracking-wider">Stack</span>
                              <span className="text-xs sm:text-sm font-bold text-white mt-1 flex items-center gap-1.5 font-syne truncate">
                                <Server className="w-3.5 h-3.5 text-emerald-400" /> {project.tech[0]}
                              </span>
                            </div>
                          </div>

                          {/* Technical Highlights */}
                          <ul className="space-y-1.5 mb-6">
                            {project.bullets.slice(0, 3).map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2 text-xs text-neutral-400 leading-normal font-sans">
                                <span className="w-1.5 h-1.5 bg-[#ff3e00] rounded-full mt-1.5 shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Actions Row */}
                        <div className="flex items-center gap-2.5 flex-wrap pt-2">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs font-sans transition-all duration-200 hover:bg-neutral-200"
                          >
                            Explore Architecture <ArrowRight className="w-3.5 h-3.5" />
                          </Link>

                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white font-medium text-xs font-sans transition-all duration-200 hover:bg-neutral-800"
                            >
                              Live App <ExternalLink className="w-3 h-3 text-[#ff3e00]" />
                            </a>
                          )}

                          {project.railwayUrl && (
                            <a
                              href={project.railwayUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 font-mono text-xs hover:text-white transition-colors"
                            >
                              <Server className="w-3.5 h-3.5 text-purple-400" /> Railway API
                            </a>
                          )}

                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-neutral-300 font-sans text-xs hover:text-white transition-colors"
                            >
                              <Github className="w-3.5 h-3.5" /> Code
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Right Mockup Preview */}
                      <div className="lg:col-span-6 relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                        <img
                          src={project.heroImage}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                        
                        <div className="absolute bottom-3 right-3 bg-neutral-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <div className="text-[10px] font-mono text-neutral-300">
                            {project.railwayUrl ? "Netlify + Railway" : "Production Live"}
                          </div>
                        </div>
                      </div>

                    </div>
                  ) : (
                    /* Standard Card (Symmetrical Bento Card) */
                    <div className="p-6 sm:p-7 flex flex-col justify-between h-full flex-grow">
                      <div>
                        {/* Upper row: Theme Tag & Role */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-mono text-[#ff3e00] font-bold uppercase tracking-wider bg-[#ff3e00]/10 px-2.5 py-0.5 rounded-md border border-[#ff3e00]/20">
                            {project.theme}
                          </span>
                          <span className="text-xs text-neutral-500 font-mono">{project.role}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white font-syne group-hover:text-[#ff3e00] transition-colors duration-200">
                          {project.title}
                        </h3>

                        <p className="text-neutral-400 mt-2 text-xs sm:text-sm leading-relaxed font-sans line-clamp-2">
                          {project.description}
                        </p>

                        {/* Image Preview with fixed aspect ratio */}
                        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden my-4 border border-white/5 bg-neutral-950">
                          <img
                            src={project.heroImage}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.tech.slice(0, 4).map((tech) => (
                            <span 
                              key={tech} 
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-neutral-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom action block - pinned with mt-auto */}
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5 flex-wrap gap-2">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#ff3e00] transition-colors font-sans"
                        >
                          Case Study <ArrowRight className="w-3.5 h-3.5 text-[#ff3e00]" />
                        </Link>

                        <div className="flex items-center gap-2">
                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Live App"
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-white text-[11px] font-sans border border-white/10 transition-colors"
                            >
                              Live <ExternalLink className="w-3 h-3 text-[#ff3e00]" />
                            </a>
                          )}
                          {project.railwayUrl && (
                            <a
                              href={project.railwayUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Railway API"
                              className="px-2 py-1 rounded bg-purple-950/60 border border-purple-500/30 text-purple-300 text-[10px] font-mono hover:text-white transition-colors"
                            >
                              Railway
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="GitHub Source"
                              className="text-neutral-400 hover:text-white transition-colors p-1"
                            >
                              <Github className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>

                    </div>
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
