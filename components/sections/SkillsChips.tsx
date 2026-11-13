"use client"

import { useState } from "react"
import { Code2, Server, Wrench, Database, Sparkles, Search, Layers, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

interface SkillItem {
  name: string
  category: "frontend" | "backend" | "database" | "tools"
  level: "Advanced" | "Proficient"
  featured?: boolean
}

const skillsList: SkillItem[] = [
  // Frontend
  { name: "React 19", category: "frontend", level: "Advanced", featured: true },
  { name: "Next.js", category: "frontend", level: "Advanced", featured: true },
  { name: "TypeScript", category: "frontend", level: "Advanced", featured: true },
  { name: "JavaScript (ES6+)", category: "frontend", level: "Advanced" },
  { name: "Tailwind CSS", category: "frontend", level: "Advanced", featured: true },
  { name: "HTML5 / CSS3", category: "frontend", level: "Advanced" },
  { name: "Responsive UI/UX", category: "frontend", level: "Advanced" },
  { name: "GSAP & Motion", category: "frontend", level: "Proficient" },
  { name: "Bootstrap", category: "frontend", level: "Proficient" },

  // Backend
  { name: "Node.js", category: "backend", level: "Advanced", featured: true },
  { name: "Express.js", category: "backend", level: "Advanced", featured: true },
  { name: "RESTful APIs", category: "backend", level: "Advanced", featured: true },
  { name: "Salesforce Apex", category: "backend", level: "Proficient", featured: true },
  { name: "Java Servlets", category: "backend", level: "Proficient" },
  { name: "JWT Authentication", category: "backend", level: "Advanced" },
  { name: "Razorpay Webhooks", category: "backend", level: "Advanced", featured: true },

  // Database
  { name: "MySQL", category: "database", level: "Advanced", featured: true },
  { name: "PostgreSQL", category: "database", level: "Proficient" },
  { name: "Relational Modeling", category: "database", level: "Advanced", featured: true },
  { name: "Database Transactions", category: "database", level: "Advanced" },
  { name: "Index Optimization", category: "database", level: "Proficient" },

  // Tools & Platforms
  { name: "Git & GitHub", category: "tools", level: "Advanced", featured: true },
  { name: "CI/CD Pipelines", category: "tools", level: "Proficient" },
  { name: "Railway Cloud", category: "tools", level: "Advanced", featured: true },
  { name: "Netlify", category: "tools", level: "Advanced", featured: true },
  { name: "cPanel & Passenger", category: "tools", level: "Proficient" },
  { name: "PDF Invoicing Engine", category: "tools", level: "Advanced" },
  { name: "QR Generation APIs", category: "tools", level: "Advanced" },
]

const categories = [
  { id: "all", label: "All Technologies", icon: Layers },
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "backend", label: "Backend & APIs", icon: Server },
  { id: "database", label: "Database", icon: Database },
  { id: "tools", label: "Tools & Cloud", icon: Wrench },
]

export default function SkillsChips() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSkills = skillsList.filter((skill) => {
    const matchesCategory = selectedCategory === "all" || skill.category === selectedCategory
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="skills" className="py-20 md:py-32 relative bg-neutral-950/60 border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#ff3e00] font-mono tracking-widest text-xs uppercase font-semibold block mb-3">
              [ TECHNICAL ARSENAL ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-syne">
              Skills & Engineering Stack
            </h2>
            <p className="text-neutral-400 mt-4 text-sm md:text-base leading-relaxed font-sans">
              Comprehensive toolkit spanning modern frontend frameworks, scalable server environments, relational databases, and cloud integrations.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-neutral-900/80 border border-white/10 rounded-full text-xs text-white placeholder-neutral-500 outline-none focus:border-[#ff3e00]/50 focus:ring-1 focus:ring-[#ff3e00]/50 transition-all font-sans"
            />
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon
            const isActive = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold font-syne transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#ff3e00] text-black shadow-md shadow-[#ff3e00]/20"
                    : "bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                <Icon size={14} />
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className={`p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between group ${
                  skill.featured
                    ? "bg-neutral-900/80 border-[#ff3e00]/25 hover:border-[#ff3e00]/60 hover:bg-neutral-900 shadow-sm"
                    : "bg-neutral-900/40 border-white/5 hover:border-white/15 hover:bg-neutral-900/70"
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className="font-syne font-bold text-xs sm:text-sm text-white group-hover:text-[#ff3e00] transition-colors truncate">
                    {skill.name}
                  </span>
                  {skill.featured && (
                    <Sparkles size={12} className="text-[#ff3e00] shrink-0" />
                  )}
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 pt-1 border-t border-white/5">
                  <span className="capitalize">{skill.category}</span>
                  <span className="text-neutral-400">{skill.level}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-neutral-500 text-sm font-sans">
            No technologies found matching &ldquo;{searchQuery}&rdquo;.
          </div>
        )}

      </div>
    </section>
  )
}
