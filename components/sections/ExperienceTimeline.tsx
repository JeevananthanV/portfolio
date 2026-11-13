"use client"

import { useState } from "react"
import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  Layers,
  Rocket,
  Code2,
  CheckCircle2,
  Building2,
  ExternalLink,
  Sparkles,
} from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

type FilterType = "all" | "fulltime" | "client"

const roles = [
  {
    id: "ethiroli",
    company: "Ethiroli Pvt Ltd",
    role: "Web Developer",
    location: "Salem, Tamil Nadu",
    period: "Feb 2026 – Present",
    isCurrent: true,
    type: "Full-Time",
    highlight: "Full-Stack Web Applications & REST API Engineering",
    metrics: [
      { label: "Performance Gain", value: "+35%" },
      { label: "Core Stack", value: "React & Node.js" },
      { label: "Security", value: "REST & Payments" },
    ],
    bullets: [
      "Engineered and maintained production web portals using React.js, Node.js, and Express REST APIs.",
      "Collaborated with UI/UX designers to implement modular component systems, interactive forms, and client dashboards.",
      "Integrated secure payment gateways (Razorpay, Stripe) with webhook verification for live transaction processing.",
      "Optimized client frontend bundle sizes, achieving a +35% improvement in Lighthouse performance scores via lazy loading and code splitting.",
    ],
    deliverables: [
      "Client-facing production web applications",
      "Custom RESTful APIs & middleware pipelines",
      "Secure payment checkout & receipt systems",
      "Modular UI design system components",
    ],
    tech: ["React.js", "Node.js", "Express.js", "REST APIs", "Razorpay", "Tailwind CSS", "JavaScript"],
  },
  {
    id: "jayalakshmi",
    company: "Jayalakshmi Groups",
    role: "Web Developer",
    location: "Salem, Tamil Nadu",
    period: "Aug 2025 – Feb 2026",
    isCurrent: false,
    type: "Full-Time",
    highlight: "Corporate Multi-Location Systems & Database Optimization",
    metrics: [
      { label: "Branch Portals", value: "Multi-Location" },
      { label: "Database", value: "MySQL Tuning" },
      { label: "CI/CD", value: "Automated Builds" },
    ],
    bullets: [
      "Developed corporate websites with interactive branch locator maps and multi-office directories.",
      "Created structured investor relations portals with accessible financial report PDF viewers and download tracking.",
      "Optimized relational database queries in MySQL and established automated CI/CD deployment pipelines on production web servers.",
    ],
    deliverables: [
      "Corporate conglomerate web portal",
      "Interactive branch locator & map integrations",
      "Investor relations PDF library archive",
      "Server deployment automation scripts",
    ],
    tech: ["React.js", "MySQL", "Bootstrap", "PDF Accessibility", "CI/CD", "Node.js"],
  },
  {
    id: "lead-projects",
    company: "Independent Engineering Lead",
    role: "Full-Stack Systems Architect",
    location: "Salem, Tamil Nadu",
    period: "2024 – Present",
    isCurrent: true,
    type: "Client Systems",
    highlight: "10+ Enterprise Web Applications, Temple Portals & Event Platforms",
    metrics: [
      { label: "Live Systems", value: "10+ Web Apps" },
      { label: "Architecture", value: "React 19 + Express" },
      { label: "QR Passes", value: "5,000+ Passes" },
    ],
    bullets: [
      "Architected Kottai Varahi Temple platform (Jaivarahi.org) featuring a 13-table MySQL database, Razorpay donation engine, and QR ticket scanning.",
      "Engineered Salem Marathon & Arise '20 Foundation portals with live runner timing logs, charity goal trackers, and volunteer registrations.",
      "Built high-converting web apps for travel networks (Anbu Travels, Aruvi Tours) and luxury event booking platforms (Glamour Gatherings).",
    ],
    deliverables: [
      "Jaivarahi.org 13-Table Relational Schema Engine",
      "Razorpay E-Donation & Booking APIs",
      "Automated QR Ticket Pass Generation System",
      "Marathon Leaderboard & Timing Architecture",
    ],
    tech: ["React 19", "Express.js", "MySQL2", "Razorpay API", "QR Code Engine", "JWT Auth", "Tailwind CSS"],
  },
]

export default function ExperienceTimeline() {
  const [filter, setFilter] = useState<FilterType>("all")
  const [subTabMap, setSubTabMap] = useState<Record<string, "bullets" | "deliverables" | "tech">>({
    ethiroli: "bullets",
    jayalakshmi: "bullets",
    "lead-projects": "bullets",
  })

  const filteredRoles = roles.filter((r) => {
    if (filter === "all") return true
    if (filter === "fulltime") return r.type === "Full-Time"
    if (filter === "client") return r.type === "Client Systems"
    return true
  })

  return (
    <section id="experience" className="py-20 md:py-32 relative bg-neutral-950 border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#ff3e00] font-mono tracking-widest text-xs uppercase font-semibold block mb-3">
              [ PROFESSIONAL TIMELINE ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-syne">
              Career & Engineering Impact
            </h2>
            <p className="text-neutral-400 mt-4 text-sm md:text-base leading-relaxed font-sans">
              Demonstrated track record of delivering high-performance full-stack applications, robust payment APIs, and normalized database schemas.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-neutral-900/60 p-1.5 rounded-full border border-white/5 self-start md:self-end">
            {[
              { id: "all", label: "All Experience" },
              { id: "fulltime", label: "Full-Time Roles" },
              { id: "client", label: "Client Systems" },
            ].map((tab) => {
              const isActive = filter === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as FilterType)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all font-sans cursor-pointer ${
                    isActive ? "bg-white text-black shadow" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Timeline Cards Container */}
        <div className="relative space-y-8 pl-4 sm:pl-8 border-l border-white/10 ml-2 sm:ml-4">
          <AnimatePresence mode="popLayout">
            {filteredRoles.map((role) => {
              const currentSubTab = subTabMap[role.id] || "bullets"

              return (
                <motion.div
                  key={role.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="relative group"
                >
                  {/* Timeline Pulse Marker */}
                  <div className="absolute -left-[25px] sm:-left-[41px] top-6 w-4 h-4 rounded-full bg-neutral-950 border-2 border-[#ff3e00] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff3e00]" />
                  </div>

                  {/* Card Container */}
                  <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                    role.isCurrent 
                      ? "bg-neutral-900/80 border-[#ff3e00]/30 shadow-lg shadow-[#ff3e00]/5" 
                      : "bg-neutral-900/40 border-white/5 hover:border-white/10"
                  }`}>
                    
                    {/* Top Meta Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-extrabold text-white font-syne">
                            {role.role}
                          </h3>
                          {role.isCurrent && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-semibold uppercase">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Active Role
                            </span>
                          )}
                          <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-neutral-400 text-[10px] font-mono border border-white/5">
                            {role.type}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-neutral-400 mt-1.5 font-mono">
                          <span className="text-neutral-200 font-medium flex items-center gap-1">
                            <Building2 size={13} className="text-[#ff3e00]" /> {role.company}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={13} /> {role.location}
                          </span>
                        </div>
                      </div>

                      <div className="text-xs font-mono text-neutral-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 self-start sm:self-auto">
                        <Calendar size={12} className="inline mr-1.5 text-[#ff3e00]" />
                        {role.period}
                      </div>
                    </div>

                    {/* Metric Quick-Pills Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-5">
                      {role.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col">
                          <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">
                            {metric.label}
                          </span>
                          <span className="text-sm font-bold text-white font-syne mt-0.5">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Subtabs Selector: Responsibilities / Deliverables / Tech Stack */}
                    <div className="flex gap-2 border-b border-white/5 pb-2 mb-4">
                      {[
                        { id: "bullets", label: "Key Highlights" },
                        { id: "deliverables", label: "Production Deliverables" },
                        { id: "tech", label: "Technologies" },
                      ].map((subTab) => {
                        const isActive = currentSubTab === subTab.id
                        return (
                          <button
                            key={subTab.id}
                            onClick={() =>
                              setSubTabMap((prev) => ({
                                ...prev,
                                [role.id]: subTab.id as any,
                              }))
                            }
                            className={`text-xs font-medium pb-1.5 px-1 border-b-2 transition-all font-sans cursor-pointer ${
                              isActive
                                ? "border-[#ff3e00] text-white font-semibold"
                                : "border-transparent text-neutral-400 hover:text-neutral-200"
                            }`}
                          >
                            {subTab.label}
                          </button>
                        )
                      })}
                    </div>

                    {/* Subtab Content View */}
                    <div className="min-h-[100px]">
                      {currentSubTab === "bullets" && (
                        <ul className="space-y-2">
                          {role.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3e00] mt-2 shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {currentSubTab === "deliverables" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {role.deliverables.map((d, dIdx) => (
                            <div key={dIdx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-2 text-xs text-neutral-300 font-sans">
                              <Rocket size={14} className="text-[#ff3e00] shrink-0" />
                              <span>{d}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {currentSubTab === "tech" && (
                        <div className="flex flex-wrap gap-2">
                          {role.tech.map((t) => (
                            <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
