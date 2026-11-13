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
  Layers
} from "lucide-react"
import Link from "next/link"
import ProjectPreloader from "@/components/ProjectPreloader"

/* -------------------------------------------------------------------------- */
/* 1. Nandhini Tex (Split-Screen & Storefront State Sandbox) Layout          */
/* -------------------------------------------------------------------------- */
export function NandhiniTexDetail({ project }: { project: Project }) {
  const [activeColor, setActiveColor] = useState("#C9A227")
  const [basePrice, setBasePrice] = useState(699)
  const [fabricType, setFabricType] = useState("Kanchipuram Silk")

  const isPriceValid = basePrice >= 400 && basePrice <= 1220

  return (
    <>
      <ProjectPreloader title={project.title} accentColor={project.colors.accent} />
      
      <div className="min-h-screen bg-[#071A33] text-[#FFFDF8] font-sans">
        <header className="border-b border-white/5 py-6 px-6 md:px-12 flex items-center justify-between bg-[#071A33]/80 backdrop-blur-md sticky top-0 z-40">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A227] hover:text-[#FFFDF8] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Architectures
          </Link>
          <span className="text-xs font-mono text-neutral-400">Nandhini Tex Storefront Spec</span>
        </header>

        <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Interactive Saree Simulator Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0B1F3A] to-[#071A33] shadow-2xl flex items-center justify-center p-8">
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
                <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-500 block uppercase font-mono tracking-widest">Active Variant</span>
                    <span className="text-xs font-bold text-white mt-1 block font-syne">{fabricType} ({activeColor})</span>
                  </div>
                  <span className="text-sm font-extrabold text-[#C9A227]">₹{basePrice}</span>
                </div>
              </div>

              {/* Color variant Selector */}
              <div className="bg-[#0B1F3A]/60 border border-white/5 rounded-3xl p-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono block">Shift Color Variant:</span>
                <div className="flex gap-4">
                  {["#C9A227", "#a83232", "#4a0404"].map((color) => (
                    <button
                      key={color}
                      onClick={() => setActiveColor(color)}
                      className="w-8 h-8 rounded-full cursor-pointer transition-all duration-300 relative"
                      style={{
                        background: color,
                        border: activeColor === color ? "2px solid #FFFDF8" : "1px solid rgba(255,255,255,0.2)",
                        transform: activeColor === color ? "scale(1.15)" : "scale(1)",
                        boxShadow: activeColor === color ? `0 0 15px ${color}` : "none",
                      }}
                    />
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
                <h1 className="text-4xl md:text-6xl font-extrabold text-white font-syne tracking-tight">
                  {project.title}
                </h1>
                <p className="text-[#C9A227] font-semibold text-lg italic">
                  "Timeless Elegance, Woven for You."
                </p>
                <p className="text-neutral-300 leading-relaxed font-sans text-sm md:text-base">
                  {project.description}
                </p>
              </div>

              {/* Price Constraints Playground Sandbox */}
              <div className="bg-[#0B1F3A]/80 border border-[#C9A227]/20 rounded-3xl p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-2 border-b border-white/5 pb-4">
                  <Sparkles className="w-5 h-5 text-[#C9A227]" />
                  <h3 className="text-lg font-bold font-syne text-[#FFFDF8]">Double-Validation Price Guard Sandbox</h3>
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
                        <Shield className="w-3.5 h-3.5" /> CONSTRAINT ERROR (400–1220)
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
                      className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#C9A227]"
                    />
                    <span className="text-lg font-bold font-mono text-white shrink-0 min-w-[70px] text-right">₹{basePrice}</span>
                  </div>

                  <pre className="p-4 bg-black/60 rounded-2xl border border-white/5 font-mono text-[11px] text-[#C9A227] overflow-x-auto leading-relaxed">
{`// Live Server Validation Logs:
{
  fabricType: "Nandhini ${fabricType}",
  payloadPrice: ₹${basePrice},
  ruleset: { minBound: ₹400, maxBound: ₹1220 },
  status: "${isPriceValid ? "PAYLOAD_VALIDATED" : "PAYLOAD_TAMPERED_ERR"}",
  action: "${isPriceValid ? "INITIATING_GATEWAY" : "TERMINATING_DB_CONNECTION"}"
}`}
                  </pre>
                </div>
              </div>

              {/* Core Features & Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0B1F3A]/40 border border-white/5 p-6 rounded-3xl space-y-3">
                  <h4 className="text-[#C9A227] font-bold font-syne text-sm uppercase tracking-wider">The Problem</h4>
                  <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div className="bg-[#0B1F3A]/40 border border-white/5 p-6 rounded-3xl space-y-3">
                  <h4 className="text-[#C9A227] font-bold font-syne text-sm uppercase tracking-wider">The Solution</h4>
                  <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Specs & Tables list */}
              <div className="bg-[#0B1F3A]/40 border border-white/5 p-6 rounded-3xl space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono block">System Entities (MySQL Relational Schema)</span>
                <div className="flex flex-wrap gap-2">
                  {project.dbTables.map((tbl) => (
                    <span key={tbl} className="px-3 py-1 bg-black/30 border border-white/5 text-neutral-400 rounded-md font-mono text-xs">
                      {tbl}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </>
  )
}

/* -------------------------------------------------------------------------- */
/* 2. Wefluence (Asymmetric Bento Grid Dashboard & Inbox Simulator) Layout  */
/* -------------------------------------------------------------------------- */
export function WefluenceDetail({ project }: { project: Project }) {
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
    }, 1500)
  }

  return (
    <>
      <ProjectPreloader title={project.title} accentColor={project.colors.accent} />
      
      <div className="min-h-screen bg-[#09090b] text-neutral-200 font-sans">
        <header className="border-b border-white/5 py-6 px-6 md:px-12 flex items-center justify-between bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-40">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7c3aed] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Architectures
          </Link>
          <span className="text-xs font-mono text-neutral-500">Wefluence Creator Panel</span>
        </header>

        <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 space-y-12">
          
          {/* Top Hero block */}
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#7c3aed] inline-block font-mono">
              {project.theme}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-syne tracking-tight">
              {project.title}
            </h1>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Live Chat Sandbox (Span 7) */}
            <div className="md:col-span-7 bg-[#121214] border border-white/5 rounded-3xl p-6 flex flex-col justify-between h-[450px]">
              <div>
                <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#ec4899]" />
                  <div>
                    <div className="text-xs font-bold text-white">Sophia Chen</div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Campaign Active
                    </div>
                  </div>
                </div>

                <div className="space-y-3 overflow-y-auto h-[250px] pr-2">
                  {messages.map((m, i) => (
                    <div 
                      key={i} 
                      className={`max-w-[80%] p-3 rounded-2xl text-xs leading-normal ${
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
                  className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-[#7c3aed] transition-colors"
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
            <div className="md:col-span-5 bg-[#121214] border border-white/5 rounded-3xl p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#ec4899]" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white font-mono">Performance Core</h3>
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Engineered optimized component trees and server routes that successfully reduced page latency overhead by 60%.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="bg-black/40 border border-white/5 p-4 rounded-2xl text-center">
                  <span className="text-2xl font-black text-emerald-400 block">98</span>
                  <span className="text-[10px] text-neutral-500 block uppercase font-mono mt-1">Performance</span>
                </div>
                <div className="bg-black/40 border border-white/5 p-4 rounded-2xl text-center">
                  <span className="text-2xl font-black text-emerald-400 block">100</span>
                  <span className="text-[10px] text-neutral-500 block uppercase font-mono mt-1">Accessibility</span>
                </div>
              </div>

              <div className="text-[10px] font-mono text-neutral-500 border-t border-white/5 pt-4">
                Vite Bundle Minimizer // Next-gen Image Formats
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  )
}

/* -------------------------------------------------------------------------- */
/* 3. Kottai Varahi Temple (Sacred Crimson & Interactive ER Schema) Layout    */
/* -------------------------------------------------------------------------- */
export function KottaiVarahiDetail({ project }: { project: Project }) {
  const [activeDbTable, setActiveDbTable] = useState<string>("bookings")
  const [scanStatus, setScanStatus] = useState<"idle" | "scanning" | "verified">("idle")

  const dbSchema = {
    bookings: {
      keys: "PK: id | Index: phone",
      fields: ["id INT AUTO_INCREMENT", "primary_name VARCHAR(255)", "phone VARCHAR(20)", "total_amount DECIMAL(10,2)", "status ENUM('CONFIRMED', 'PENDING')", "created_at TIMESTAMP"],
      query: "SELECT * FROM bookings WHERE phone = '9876543210' ORDER BY created_at DESC;"
    },
    donations: {
      keys: "PK: id | Index: order_id",
      fields: ["id INT AUTO_INCREMENT", "order_id VARCHAR(255) UNIQUE", "payment_id VARCHAR(255)", "amount_inr DECIMAL(10,2)", "status ENUM('SUCCESS', 'PENDING', 'FAILED')", "created_at TIMESTAMP"],
      query: "SELECT SUM(amount_inr) FROM donations WHERE status = 'SUCCESS';"
    },
    av2_tickets: {
      keys: "PK: id | Index: pass_code",
      fields: ["id INT AUTO_INCREMENT", "av2_full_name VARCHAR(255)", "av2_passes INT", "amount DECIMAL(10,2)", "pass_code VARCHAR(100) UNIQUE"],
      query: "SELECT COUNT(*) FROM av2_tickets WHERE av2_passes > 2;"
    },
  }

  const triggerVerification = () => {
    setScanStatus("scanning")
    setTimeout(() => {
      setScanStatus("verified")
    }, 1500)
  }

  return (
    <>
      <ProjectPreloader title="Varahi React Portal" accentColor={project.colors.accent} />

      <div className="min-h-screen bg-[#150202] text-[#F5F5DC] font-sans relative overflow-hidden">
        {/* Glow background */}
        <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-[#A4161A] via-[#D35400] to-[#B8860B]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />

        <header className="border-b border-white/5 py-6 px-6 md:px-12 flex items-center justify-between bg-[#150202]/80 backdrop-blur-md sticky top-0 z-40">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:text-[#FFF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Architectures
          </Link>
          <span className="text-xs font-mono text-neutral-500">Temple Admin Portal Engine</span>
        </header>

        <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 space-y-12 relative z-10">
          
          {/* Immersive Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-xs font-mono font-bold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" /> Flagship Production System
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight font-syne">
              Varahi React Portal
            </h1>
            <p className="text-[#e3d2bd] text-sm md:text-base leading-relaxed">
              High-performance, secure, and modern digital platform for temple management, spiritual consultations, donation channels, and event registrations.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a 
                href="https://www.jaivarahi.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#A4161A] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 hover:bg-[#850e11]"
              >
                Target Domain: jaivarahi.org <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/JeevananthanV/jaivarahi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 border border-white/10 text-[#d4af37] font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 hover:bg-neutral-900"
              >
                Source Repository <Terminal className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Bento Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Live QR ticket verification mock */}
            <div className="lg:col-span-6 bg-black/40 border border-[#d4af37]/20 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-[450px]">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Shield className="w-5 h-5 text-[#d4af37]" />
                  <h3 className="text-base font-bold font-syne text-[#FFF]">Live Ticket Verification Console</h3>
                </div>

                <div className="bg-[#2b0303]/40 border border-[#d4af37]/20 rounded-2xl p-6 text-center max-w-[280px] mx-auto space-y-4">
                  <span className="text-[9px] font-mono text-[#d4af37] tracking-widest block uppercase">AV2 Access Ticket</span>
                  <div className="w-24 h-24 bg-white mx-auto p-2 rounded-lg flex items-center justify-center">
                    {/* Simulated barcode blocks */}
                    <div className="w-full h-full bg-black" style={{ backgroundImage: "repeating-linear-gradient(90deg, #000, #000 2px, #fff 2px, #fff 4px)" }} />
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400">ID: AV2-DEVOTE-99812</div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <button
                  onClick={triggerVerification}
                  disabled={scanStatus === "scanning"}
                  className="px-5 py-3 bg-[#d4af37] hover:bg-[#bfa030] text-black text-xs font-extrabold uppercase tracking-wider rounded-xl cursor-pointer disabled:opacity-50 transition-colors"
                >
                  {scanStatus === "scanning" ? "Verifying..." : "Simulate Gate Check"}
                </button>
                {scanStatus === "scanning" && (
                  <span className="text-xs text-[#d4af37] flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Running HMAC checks...
                  </span>
                )}
                {scanStatus === "verified" && (
                  <span className="text-xs text-emerald-400 font-extrabold flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> PASS VERIFIED & LOGGED
                  </span>
                )}
              </div>
            </div>

            {/* Interactive Schema Inspector */}
            <div className="lg:col-span-6 bg-black/40 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-[450px]">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Database className="w-5 h-5 text-[#d4af37]" />
                  <h3 className="text-base font-bold font-syne text-white">Relational Database Schema</h3>
                </div>

                <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                  {Object.keys(dbSchema).map((tbl) => (
                    <button
                      key={tbl}
                      onClick={() => setActiveDbTable(tbl)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer border ${
                        activeDbTable === tbl 
                          ? "bg-[#d4af37]/15 border-[#d4af37] text-[#d4af37]" 
                          : "bg-black/30 border-white/5 text-neutral-400 hover:text-white"
                      }`}
                    >
                      {tbl}
                    </button>
                  ))}
                </div>

                <div className="bg-[#0f0202] border border-white/5 rounded-xl p-4 font-mono text-[11px] space-y-3 h-[240px] overflow-y-auto">
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
        </main>
      </div>
    </>
  )
}
