"use client"

import { useState, useRef } from "react"
import { useCountUp } from "@/lib/hooks/useCountUp"
import { motion, AnimatePresence } from "motion/react"
import { Layers, Zap, ShieldCheck, MapPin, CheckCircle2, ArrowRight } from "lucide-react"

const stats = [
  { label: "PROD PROJECTS", value: 10, suffix: "+" },
  { label: "COMPANIES", value: 2, suffix: "" },
  { label: "YEARS EXP", value: 1, suffix: "+" },
  { label: "ACADEMIC CGPA", value: 8.02, suffix: " / 10", isDecimal: true },
]

const corePillars = [
  {
    id: "architecture",
    title: "Scalable Architecture",
    icon: Layers,
    summary: "Designing modular, maintainable full-stack systems with clean REST APIs and robust database schemas.",
    details: "Specializing in multi-tiered architectures using React 19 frontends, Express/Node middleware, and normalized 13+ table MySQL relational models with transaction integrity locks.",
    tags: ["RESTful APIs", "Relational Schemas", "JWT Auth", "Express Middleware"],
  },
  {
    id: "performance",
    title: "Performance & UX",
    icon: Zap,
    summary: "Prioritizing sub-second page loads, fluid animations, and mobile-first responsive viewports.",
    details: "Achieved +35% performance boosts at Ethiroli Pvt Ltd via asset compression, intelligent code-splitting, GSAP hardware-accelerated animations, and Tailwind CSS tree-shaking.",
    tags: ["Lighthouse 95+", "Lazy Loading", "Tailwind CSS", "GSAP / Motion"],
  },
  {
    id: "reliability",
    title: "Enterprise Reliability",
    icon: ShieldCheck,
    summary: "Integrating battle-tested payment workflows, Salesforce integrations, and automated pipelines.",
    details: "Delivered production payment systems with Razorpay webhook validations, cash-on-delivery safeguards, automated PDF invoice generators, and Salesforce Apex customer lifecycle automations.",
    tags: ["Razorpay Webhooks", "Salesforce Apex", "PDF Engine", "CI/CD Deployment"],
  },
]

export default function About() {
  const [activePillar, setActivePillar] = useState(0)

  return (
    <section id="about" className="py-20 md:py-32 relative bg-neutral-950/40 border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <span className="text-[#ff3e00] font-mono tracking-widest text-xs uppercase font-semibold block mb-3">
            [ ABOUT THE DEVELOPER ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-syne">
            Engineering Value, Architecture & User Experience
          </h2>
          <p className="text-neutral-400 mt-4 text-sm md:text-base leading-relaxed font-sans">
            A developer who bridges user-focused interface craftsmanship with rigorous backend database reliability.
          </p>
        </div>

        {/* 2-Column Grid: Image Card + Bio & Interactive Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative group w-full max-w-[360px]">
              
              {/* Outer Accent Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#ff3e00]/30 via-amber-500/10 to-transparent rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
                {/* Profile Image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-950">
                  <img
                    src="/jeevan.jpg"
                    alt="Jeevananthan V - Full Stack Software Developer"
                    className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />

                  {/* Location Tag */}
                  <div className="absolute top-3.5 left-3.5 bg-black/75 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 flex items-center gap-1.5 text-[11px] font-mono text-neutral-200">
                    <MapPin size={12} className="text-[#ff3e00]" />
                    <span>SALEM, TAMIL NADU</span>
                  </div>

                  {/* Bottom Image Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/85 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold font-syne text-sm">Jeevananthan V</div>
                      <div className="text-neutral-400 text-[11px] font-mono">Full Stack Engineer</div>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>

                {/* Quick Info Strip Below Image */}
                <div className="p-4 grid grid-cols-2 gap-3 border-t border-white/5 bg-neutral-950/60 text-xs">
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase font-mono block">Current Role</span>
                    <span className="font-semibold text-neutral-200 text-xs mt-0.5 block truncate">Web Developer</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase font-mono block">Organization</span>
                    <span className="font-semibold text-neutral-200 text-xs mt-0.5 block truncate">Ethiroli Pvt Ltd</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Interactive Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Bio Narrative */}
            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                I am a Full Stack Developer based in <span className="text-white font-semibold">Salem, Tamil Nadu</span>, 
                holding a Bachelor of Engineering in Computer Science with an <span className="text-[#ff3e00] font-semibold">8.02 CGPA</span> from K.S. Rangasamy College of Technology.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm">
                Over the past year, I have engineered production solutions at <span className="text-neutral-200 font-medium">Ethiroli Pvt Ltd</span> and corporate platforms at <span className="text-neutral-200 font-medium">Jayalakshmi Groups</span>, while architecting independent production platforms including temple ticketing systems with 13-table MySQL schemas, high-throughput marathon registries, and Indian heritage e-commerce portals.
              </p>
            </div>

            {/* Interactive Engineering Pillars */}
            <div className="mt-8">
              <div className="text-[11px] text-neutral-500 uppercase tracking-widest font-mono font-semibold mb-3">
                Core Engineering Pillars (Click to explore):
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {corePillars.map((pillar, idx) => {
                  const Icon = pillar.icon
                  const isActive = activePillar === idx
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => setActivePillar(idx)}
                      className={`text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#ff3e00]/10 border-[#ff3e00] text-white shadow-md shadow-[#ff3e00]/10"
                          : "bg-neutral-900/40 border-white/5 text-neutral-400 hover:text-white hover:bg-neutral-900/80 hover:border-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon size={16} className={isActive ? "text-[#ff3e00]" : "text-neutral-400"} />
                        <span className="font-syne font-bold text-xs sm:text-sm text-white truncate">
                          {pillar.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 line-clamp-2 leading-tight">
                        {pillar.summary}
                      </p>
                    </button>
                  )
                })}
              </div>

              {/* Active Pillar Expanded Details Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={corePillars[activePillar].id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="mt-3.5 p-4 rounded-xl bg-neutral-900/80 border border-white/10 text-xs text-neutral-300 leading-relaxed font-sans"
                >
                  <p className="text-neutral-300 text-xs sm:text-sm">
                    {corePillars[activePillar].details}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
                    {corePillars[activePillar].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-white/5 text-neutral-300 text-[10px] font-mono border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Key Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-white/10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-3.5 rounded-xl bg-neutral-900/50 border border-white/5"
                >
                  <StatDisplay
                    target={stat.value}
                    suffix={stat.suffix}
                    isDecimal={stat.isDecimal}
                  />
                  <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

function StatDisplay({
  target,
  suffix,
  isDecimal,
}: {
  target: number
  suffix: string
  isDecimal?: boolean
}) {
  const [count, ref] = useCountUp(target, 1200)

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="font-syne font-extrabold text-2xl text-white">
      {isDecimal ? count.toFixed(2) : count}
      <span className="text-[#ff3e00] text-sm ml-0.5">{suffix}</span>
    </div>
  )
}
