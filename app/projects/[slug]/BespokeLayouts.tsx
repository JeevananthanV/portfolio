"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Project } from "@/lib/data/projects"
import { 
  ArrowLeft, 
  Sparkles, 
  Database, 
  CheckCircle2, 
  Server, 
  Terminal, 
  ArrowRight, 
  Activity, 
  Send, 
  Check, 
  Shield, 
  Award, 
  RefreshCw, 
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Github
} from "lucide-react"
import Link from "next/link"
import ProjectPreloader from "@/components/ProjectPreloader"

interface BespokeProps {
  project: Project
  prevProject?: Project
  nextProject?: Project
}

/* -------------------------------------------------------------------------- */
/* 1. Nandhini Tex (Split-Screen & Storefront State Sandbox) Layout          */
/* -------------------------------------------------------------------------- */
export function NandhiniTexDetail({ project, prevProject, nextProject }: BespokeProps) {
  const [activeColor, setActiveColor] = useState("#C9A227")
  const [basePrice, setBasePrice] = useState(699)
  const [fabricType, setFabricType] = useState("Kanchipuram Silk")

  const isPriceValid = basePrice >= 400 && basePrice <= 1220

  return (
    <>
      <ProjectPreloader title={project.title} accentColor={project.colors.accent} />
      
      <div className="min-h-screen bg-[#071A33] text-[#FFFDF8] font-sans pb-24">
        {/* Sticky Header */}
        <header className="border-b border-white/10 py-4 px-4 sm:px-8 flex items-center justify-between bg-[#071A33]/85 backdrop-blur-xl sticky top-0 z-40">
          <Link 
            href="/#work" 
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C9A227] hover:text-[#FFFDF8] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          <div className="flex items-center gap-2">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#C9A227] text-black font-syne font-bold text-xs"
              >
                <span>Live Storefront</span>
                <ExternalLink size={12} />
              </a>
            )}
            <span className="text-xs font-mono text-neutral-400">Nandhini Tex Spec</span>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Interactive Saree Simulator Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0B1F3A] to-[#071A33] shadow-2xl flex items-center justify-center p-6 sm:p-8">
                <motion.img 
                  layout
                  src={project.heroImage} 
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl transition-all duration-500"
                  style={{
                    filter: `hue-rotate(${activeColor === "#C9A227" ? "0deg" : activeColor === "#a83232" ? "140deg" : "280deg"}) contrast(1.05) brightness(0.9)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-transparent to-transparent opacity-80" />
                
                {/* Variant Tag overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-black/85 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-400 block uppercase font-mono tracking-widest">Active Variant</span>
                    <span className="text-xs font-bold text-white mt-0.5 block font-syne">{fabricType}</span>
                  </div>
                  <span className="text-sm font-extrabold text-[#C9A227] font-mono">₹{basePrice}</span>
                </div>
              </div>

              {/* Color variant Selector */}
              <div className="bg-[#0B1F3A]/60 border border-white/5 rounded-3xl p-6 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono block">
                  Select Saree Color Variant:
                </span>
                <div className="flex items-center gap-3">
                  {[
                    { color: "#C9A227", name: "Royal Gold" },
                    { color: "#a83232", name: "Crimson Maroon" },
                    { color: "#4a0404", name: "Deep Ruby" }
                  ].map((c) => (
                    <button
                      key={c.color}
                      onClick={() => setActiveColor(c.color)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 text-xs font-mono cursor-pointer transition-all"
                      style={{
                        borderColor: activeColor === c.color ? "#C9A227" : "rgba(255,255,255,0.1)",
                        backgroundColor: activeColor === c.color ? "rgba(201,162,39,0.15)" : "transparent"
                      }}
                    >
                      <span className="w-3 h-3 rounded-full" style={{ background: c.color }} />
                      <span className="text-neutral-300 text-[11px]">{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Project Details Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/20 text-[#C9A227] inline-block font-mono">
                  {project.theme}
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-syne tracking-tight">
                  {project.title}
                </h1>
                <p className="text-[#C9A227] font-semibold text-base sm:text-lg italic font-syne">
                  &ldquo;Timeless Elegance, Woven for You.&rdquo;
                </p>
                <p className="text-neutral-300 leading-relaxed font-sans text-xs sm:text-sm">
                  {project.description}
                </p>

                {/* CTAs */}
                <div className="flex items-center gap-3 pt-2 flex-wrap">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A227] text-black font-extrabold text-xs uppercase tracking-wider font-syne rounded-xl hover:bg-[#d4af37] transition-all"
                    >
                      <span>Live Storefront</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-black/40 border border-white/10 text-neutral-300 font-sans text-xs font-semibold rounded-xl hover:text-white transition-all"
                    >
                      <Github size={14} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Price Constraints Playground Sandbox */}
              <div className="bg-[#0B1F3A]/80 border border-[#C9A227]/20 rounded-3xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-2 border-b border-white/5 pb-4">
                  <Sparkles className="w-5 h-5 text-[#C9A227]" />
                  <h3 className="text-base sm:text-lg font-bold font-syne text-[#FFFDF8]">
                    Double-Validation Price Guard Sandbox
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-400">Client Payload Price:</span>
                    {isPriceValid ? (
                      <span className="text-emerald-400 font-extrabold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> TRANSACTION APPROVED
                      </span>
                    ) : (
                      <span className="text-red-400 font-extrabold flex items-center gap-1">
                        <Shield className="w-3.5 h-3.5" /> CONSTRAINT ERROR (₹400–₹1,220)
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <input 
                      type="range" 
                      min="300" 
                      max="1350" 
                      step="25"
                      value={basePrice} 
                      onChange={(e) => setBasePrice(parseInt(e.target.value))}
                      className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#C9A227]"
                    />
                    <span className="text-lg font-bold font-mono text-white shrink-0 min-w-[70px] text-right">
                      ₹{basePrice}
                    </span>
                  </div>

                  <pre className="p-4 bg-black/60 rounded-2xl border border-white/5 font-mono text-[11px] text-[#C9A227] overflow-x-auto leading-relaxed">
{`// Server-Side Verification Log:
{
  fabricType: "Nandhini ${fabricType}",
  payloadPrice: ₹${basePrice},
  ruleset: { minBound: ₹400, maxBound: ₹1220 },
  status: "${isPriceValid ? "PAYLOAD_VALIDATED" : "PAYLOAD_TAMPERED_ERR"}",
  action: "${isPriceValid ? "INITIATING_GATEWAY_SESSION" : "TERMINATING_DB_CONNECTION"}"
}`}
                  </pre>
                </div>
              </div>

              {/* Core Features & Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0B1F3A]/40 border border-white/5 p-5 rounded-2xl space-y-2">
                  <h4 className="text-[#C9A227] font-bold font-syne text-xs uppercase tracking-wider">The Problem</h4>
                  <p className="text-neutral-300 text-xs leading-relaxed font-sans">{project.problem}</p>
                </div>
                <div className="bg-[#0B1F3A]/40 border border-white/5 p-5 rounded-2xl space-y-2">
                  <h4 className="text-[#C9A227] font-bold font-syne text-xs uppercase tracking-wider">The Solution</h4>
                  <p className="text-neutral-300 text-xs leading-relaxed font-sans">{project.solution}</p>
                </div>
              </div>

              {/* Specs & Tables list */}
              <div className="bg-[#0B1F3A]/40 border border-white/5 p-6 rounded-2xl space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono block">
                  MySQL Relational Database Entities (13 Tables)
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.dbTables.map((tbl) => (
                    <span key={tbl} className="px-2.5 py-1 bg-black/40 border border-white/5 text-neutral-300 rounded-md font-mono text-[11px]">
                      {tbl}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Previous / Next Project Navigation Bar */}
          <div className="pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevProject && (
              <Link 
                href={`/projects/${prevProject.slug}`}
                className="p-5 rounded-2xl bg-[#0B1F3A]/50 hover:bg-[#0B1F3A] border border-white/5 hover:border-white/15 transition-all text-left group"
              >
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-1 mb-1">
                  <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Previous Project
                </span>
                <span className="font-syne font-bold text-sm text-white group-hover:text-[#C9A227] transition-colors block">
                  {prevProject.title}
                </span>
              </Link>
            )}

            {nextProject && (
              <Link 
                href={`/projects/${nextProject.slug}`}
                className="p-5 rounded-2xl bg-[#0B1F3A]/50 hover:bg-[#0B1F3A] border border-white/5 hover:border-white/15 transition-all text-right group"
              >
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center justify-end gap-1 mb-1">
                  Next Project <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="font-syne font-bold text-sm text-white group-hover:text-[#C9A227] transition-colors block">
                  {nextProject.title}
                </span>
              </Link>
            )}
          </div>
        </main>
      </div>
    </>
  )
}

/* -------------------------------------------------------------------------- */
/* 2. Wefluence (Creator Panel & Live Chat Simulator) Layout                 */
/* -------------------------------------------------------------------------- */
export function WefluenceDetail({ project, prevProject, nextProject }: BespokeProps) {
  const [messages, setMessages] = useState<Array<{ sender: "user" | "influencer", text: string }>>([
    { sender: "influencer", text: "Hey Jeevan! Checked out the campaign brief. Let's coordinate dynamic video drafts by tomorrow." }
  ])
  const [inputText, setInputText] = useState("")

  const handleSendMessage = () => {
    if (!inputText.trim()) return
    setMessages(prev => [...prev, { sender: "user", text: inputText }])
    setInputText("")

    setTimeout(() => {
      setMessages(prev => [...prev, {
        sender: "influencer",
        text: "Understood. The API tracking handles webhook conversions nicely."
      }])
    }, 1200)
  }

  return (
    <>
      <ProjectPreloader title={project.title} accentColor={project.colors.accent} />
      
      <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans pb-24">
        <header className="border-b border-white/10 py-4 px-4 sm:px-8 flex items-center justify-between bg-neutral-950/80 backdrop-blur-xl sticky top-0 z-40">
          <Link 
            href="/#work" 
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7c3aed] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          <span className="text-xs font-mono text-neutral-400">Wefluence Creator Spec</span>
        </header>

        <main className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-16 space-y-12">
          
          {/* Top Hero block */}
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#7c3aed] inline-block font-mono">
              {project.theme}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-syne tracking-tight">
              {project.title}
            </h1>
            <p className="text-neutral-400 text-xs sm:text-base leading-relaxed font-sans">
              {project.description}
            </p>

            <div className="flex items-center gap-3 pt-2 flex-wrap">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7c3aed] text-white font-bold text-xs uppercase tracking-wider font-syne rounded-xl hover:bg-[#6d28d9] transition-all"
                >
                  <span>Live App</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Live Chat Sandbox (Span 7) */}
            <div className="md:col-span-7 bg-neutral-900/60 border border-white/5 rounded-3xl p-6 flex flex-col justify-between min-h-[420px]">
              <div>
                <div className="flex items-center gap-3 border-b border-white/5 pb-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#ec4899] flex items-center justify-center font-bold text-xs text-white">
                    SC
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white font-syne">Sophia Chen</div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Campaign Active
                    </div>
                  </div>
                </div>

                <div className="space-y-3 overflow-y-auto max-h-[240px] pr-2">
                  {messages.map((m, i) => (
                    <div 
                      key={i} 
                      className={`max-w-[85%] p-3 rounded-2xl text-xs leading-normal font-sans ${
                        m.sender === "user" 
                          ? "bg-[#7c3aed] text-white ml-auto rounded-tr-none" 
                          : "bg-white/5 text-neutral-300 rounded-tl-none border border-white/5"
                      }`}
                    >
                      {m.text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-white/5">
                <input 
                  type="text" 
                  placeholder="Type collaboration brief..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#7c3aed] transition-colors"
                />
                <button 
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-xl text-xs font-bold cursor-pointer transition-colors"
                >
                  Send
                </button>
              </div>
            </div>

            {/* Performance Stats (Span 5) */}
            <div className="md:col-span-5 bg-neutral-900/60 border border-white/5 rounded-3xl p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#ec4899]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">Performance Core</h3>
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                  Engineered optimized component trees and server routes that successfully reduced page latency overhead by 60%.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 my-6">
                <div className="bg-black/40 border border-white/5 p-4 rounded-2xl text-center">
                  <span className="text-3xl font-extrabold text-emerald-400 block font-syne">98</span>
                  <span className="text-[10px] text-neutral-500 block uppercase font-mono mt-1">Performance</span>
                </div>
                <div className="bg-black/40 border border-white/5 p-4 rounded-2xl text-center">
                  <span className="text-3xl font-extrabold text-emerald-400 block font-syne">100</span>
                  <span className="text-[10px] text-neutral-500 block uppercase font-mono mt-1">Accessibility</span>
                </div>
              </div>

              <div className="text-[10px] font-mono text-neutral-500 border-t border-white/5 pt-3">
                Vite Bundle Minimizer // Next-gen Image Formats
              </div>
            </div>

          </div>

          {/* Previous / Next Project Navigation Bar */}
          <div className="pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevProject && (
              <Link 
                href={`/projects/${prevProject.slug}`}
                className="p-5 rounded-2xl bg-neutral-900/50 hover:bg-neutral-900 border border-white/5 hover:border-white/15 transition-all text-left group"
              >
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-1 mb-1">
                  <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Previous Project
                </span>
                <span className="font-syne font-bold text-sm text-white group-hover:text-[#7c3aed] transition-colors block">
                  {prevProject.title}
                </span>
              </Link>
            )}

            {nextProject && (
              <Link 
                href={`/projects/${nextProject.slug}`}
                className="p-5 rounded-2xl bg-neutral-900/50 hover:bg-neutral-900 border border-white/5 hover:border-white/15 transition-all text-right group"
              >
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center justify-end gap-1 mb-1">
                  Next Project <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="font-syne font-bold text-sm text-white group-hover:text-[#7c3aed] transition-colors block">
                  {nextProject.title}
                </span>
              </Link>
            )}
          </div>
        </main>
      </div>
    </>
  )
}

/* -------------------------------------------------------------------------- */
/* 3. Kottai Varahi Temple (Sacred Crimson & Interactive ER Schema) Layout    */
/* -------------------------------------------------------------------------- */
export function KottaiVarahiDetail({ project, prevProject, nextProject }: BespokeProps) {
  const [activeDbTable, setActiveDbTable] = useState<string>("bookings")
  const [scanStatus, setScanStatus] = useState<"idle" | "scanning" | "verified">("idle")

  const dbSchema = {
    bookings: {
      keys: "PK: id | Index: phone",
      fields: [
        "id INT AUTO_INCREMENT", 
        "primary_name VARCHAR(255)", 
        "phone VARCHAR(20)", 
        "total_amount DECIMAL(10,2)", 
        "status ENUM('CONFIRMED', 'PENDING')", 
        "created_at TIMESTAMP"
      ],
      query: "SELECT * FROM bookings WHERE phone = '9876543210' ORDER BY created_at DESC;"
    },
    donations: {
      keys: "PK: id | Index: order_id",
      fields: [
        "id INT AUTO_INCREMENT", 
        "order_id VARCHAR(255) UNIQUE", 
        "payment_id VARCHAR(255)", 
        "amount_inr DECIMAL(10,2)", 
        "status ENUM('SUCCESS', 'PENDING', 'FAILED')", 
        "created_at TIMESTAMP"
      ],
      query: "SELECT SUM(amount_inr) FROM donations WHERE status = 'SUCCESS';"
    },
    av2_tickets: {
      keys: "PK: id | Index: pass_code",
      fields: [
        "id INT AUTO_INCREMENT", 
        "av2_full_name VARCHAR(255)", 
        "av2_passes INT", 
        "amount DECIMAL(10,2)", 
        "pass_code VARCHAR(100) UNIQUE"
      ],
      query: "SELECT COUNT(*) FROM av2_tickets WHERE av2_passes > 2;"
    },
  }

  const triggerVerification = () => {
    setScanStatus("scanning")
    setTimeout(() => {
      setScanStatus("verified")
    }, 1200)
  }

  return (
    <>
      <ProjectPreloader title="Varahi React Portal" accentColor={project.colors.accent} />

      <div className="min-h-screen bg-[#150202] text-[#F5F5DC] font-sans relative overflow-hidden pb-24">
        {/* Glow background */}
        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#A4161A] via-[#D35400] to-[#B8860B]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[140px] rounded-full pointer-events-none" />

        <header className="border-b border-white/10 py-4 px-4 sm:px-8 flex items-center justify-between bg-[#150202]/85 backdrop-blur-xl sticky top-0 z-40">
          <Link 
            href="/#work" 
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#d4af37] hover:text-[#FFF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          <span className="text-xs font-mono text-neutral-400">Jaivarahi.org Architecture Spec</span>
        </header>

        <main className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 space-y-12 relative z-10">
          
          {/* Immersive Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-xs font-mono font-bold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" /> Flagship Production System
            </span>

            <h1 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight font-syne">
              Varahi React Portal
            </h1>

            <p className="text-[#e3d2bd] text-xs sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
              High-performance, secure digital platform for temple management, spiritual consultations, donation channels with Razorpay, and QR pass registrations.
            </p>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a 
                href="https://www.jaivarahi.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#A4161A] hover:bg-[#850e11] text-white font-extrabold text-xs uppercase tracking-wider font-syne rounded-xl transition-all shadow-lg shadow-[#A4161A]/30"
              >
                <span>Live Domain: jaivarahi.org</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://github.com/JeevananthanV/jaivarahi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-3 bg-black/60 border border-white/10 text-[#d4af37] font-semibold text-xs uppercase tracking-wider font-syne rounded-xl hover:text-white transition-all"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Source Repository</span>
              </a>
            </div>
          </div>

          {/* Interactive Bento Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Live QR ticket verification mock */}
            <div className="lg:col-span-6 bg-black/50 border border-[#d4af37]/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[420px]">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Shield className="w-5 h-5 text-[#d4af37]" />
                  <h3 className="text-base font-bold font-syne text-[#FFF]">Live Ticket Verification Console</h3>
                </div>

                <div className="bg-[#2b0303]/40 border border-[#d4af37]/20 rounded-2xl p-6 text-center max-w-[280px] mx-auto space-y-4">
                  <span className="text-[10px] font-mono text-[#d4af37] tracking-widest block uppercase">AV2 Access Pass</span>
                  <div className="w-24 h-24 bg-white mx-auto p-2 rounded-lg flex items-center justify-center">
                    <div className="w-full h-full bg-black" style={{ backgroundImage: "repeating-linear-gradient(90deg, #000, #000 2px, #fff 2px, #fff 4px)" }} />
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400">PASS ID: AV2-DEVOTE-99812</div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/5 flex-wrap">
                <button
                  onClick={triggerVerification}
                  disabled={scanStatus === "scanning"}
                  className="px-5 py-2.5 bg-[#d4af37] hover:bg-[#bfa030] text-black text-xs font-extrabold uppercase tracking-wider font-syne rounded-xl cursor-pointer disabled:opacity-50 transition-colors"
                >
                  {scanStatus === "scanning" ? "Verifying..." : "Simulate Gate Check"}
                </button>
                {scanStatus === "scanning" && (
                  <span className="text-xs text-[#d4af37] flex items-center gap-1.5 font-mono">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Running HMAC checks...
                  </span>
                )}
                {scanStatus === "verified" && (
                  <span className="text-xs text-emerald-400 font-extrabold flex items-center gap-1.5 font-mono">
                    <Check className="w-4 h-4" /> PASS VERIFIED & LOGGED
                  </span>
                )}
              </div>
            </div>

            {/* Interactive Schema Inspector */}
            <div className="lg:col-span-6 bg-black/50 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[420px]">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Database className="w-5 h-5 text-[#d4af37]" />
                  <h3 className="text-base font-bold font-syne text-white">Relational Database Schema (13 Tables)</h3>
                </div>

                <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                  {Object.keys(dbSchema).map((tbl) => (
                    <button
                      key={tbl}
                      onClick={() => setActiveDbTable(tbl)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer border ${
                        activeDbTable === tbl 
                          ? "bg-[#d4af37]/20 border-[#d4af37] text-[#d4af37]" 
                          : "bg-black/40 border-white/5 text-neutral-400 hover:text-white"
                      }`}
                    >
                      {tbl}
                    </button>
                  ))}
                </div>

                <div className="bg-[#0f0202] border border-white/5 rounded-xl p-4 font-mono text-[11px] space-y-3 h-[220px] overflow-y-auto">
                  <div className="text-neutral-500">// Schema keys: {dbSchema[activeDbTable as keyof typeof dbSchema].keys}</div>
                  <div className="space-y-1">
                    {dbSchema[activeDbTable as keyof typeof dbSchema].fields.map((f, i) => (
                      <div key={i} className="text-neutral-300">{f}</div>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-white/5 text-[#d4af37]">
                    <span className="text-neutral-500">Query: </span>
                    {dbSchema[activeDbTable as keyof typeof dbSchema].query}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Previous / Next Project Navigation Bar */}
          <div className="pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevProject && (
              <Link 
                href={`/projects/${prevProject.slug}`}
                className="p-5 rounded-2xl bg-[#2b0303]/30 hover:bg-[#2b0303]/60 border border-white/5 hover:border-white/15 transition-all text-left group"
              >
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-1 mb-1">
                  <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Previous Project
                </span>
                <span className="font-syne font-bold text-sm text-white group-hover:text-[#d4af37] transition-colors block">
                  {prevProject.title}
                </span>
              </Link>
            )}

            {nextProject && (
              <Link 
                href={`/projects/${nextProject.slug}`}
                className="p-5 rounded-2xl bg-[#2b0303]/30 hover:bg-[#2b0303]/60 border border-white/5 hover:border-white/15 transition-all text-right group"
              >
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center justify-end gap-1 mb-1">
                  Next Project <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="font-syne font-bold text-sm text-white group-hover:text-[#d4af37] transition-colors block">
                  {nextProject.title}
                </span>
              </Link>
            )}
          </div>

        </main>
      </div>
    </>
  )
}
