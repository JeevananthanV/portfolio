"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { 
  ArrowUpRight, 
  Sparkles, 
  Terminal, 
  Code2, 
  Cpu, 
  Database, 
  Flame, 
  Volume2, 
  VolumeX, 
  ArrowDown, 
  Mail, 
  Github, 
  Layers, 
  CheckCircle2, 
  Copy, 
  Check 
} from "lucide-react"
import { motion } from "motion/react"
import Navbar from "@/components/Navbar"
import GSAPScrollController from "@/components/animation/GSAPScrollController"

const techPills = [
  { name: "React 19", icon: Code2, color: "#61dafb" },
  { name: "Node.js", icon: Terminal, color: "#68a063" },
  { name: "Express.js", icon: Cpu, color: "#ffffff" },
  { name: "MySQL / SQL", icon: Database, color: "#00758f" },
  { name: "Salesforce Apex", icon: Flame, color: "#00a1e0" },
]

export default function Hero() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)
  const [terminalLine, setTerminalLine] = useState(0)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const audioTimerRef = useRef<number | null>(null)

  const terminalLogs = [
    { text: "$ init jeevananthan-profile --environment=production", type: "cmd" },
    { text: "✔ Full Stack Core initialized (React 19 + Node.js)", type: "success" },
    { text: "✔ Database schema ready (13+ normalized tables)", type: "success" },
    { text: "✔ Payment gateways connected (Razorpay webhook verify)", type: "success" },
    { text: "$ cat developer-status.json", type: "cmd" },
    { text: '{\n  "location": "Salem, TN, India",\n  "status": "Available for Full-Time & Freelance",\n  "experience": "Ethiroli Pvt Ltd & Jayalakshmi Groups"\n}', type: "json" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalLine((prev) => (prev + 1) % (terminalLogs.length + 1))
    }, 3200)

    // Canvas background particle stream
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext("2d")
      if (ctx) {
        let animationFrameId: number
        const particles: Array<{ x: number; y: number; speed: number; radius: number; opacity: number }> = []

        const resizeCanvas = () => {
          if (!canvas) return
          canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth
          canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight
        }
        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        for (let i = 0; i < 35; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: 0.2 + Math.random() * 0.4,
            radius: 1 + Math.random() * 1.8,
            opacity: 0.15 + Math.random() * 0.35,
          })
        }

        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.fillStyle = "#ff3e00"

          particles.forEach((p) => {
            p.y -= p.speed
            if (p.y < 0) {
              p.y = canvas.height
              p.x = Math.random() * canvas.width
            }
            ctx.beginPath()
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
            ctx.globalAlpha = p.opacity
            ctx.fill()
          })

          animationFrameId = requestAnimationFrame(animate)
        }
        animate()

        return () => {
          window.removeEventListener("resize", resizeCanvas)
          cancelAnimationFrame(animationFrameId)
        }
      }
    }

    return () => clearInterval(interval)
  }, [])

  const handlePlayVoiceIntro = () => {
    if (typeof window === "undefined") return

    if (isPlayingAudio) {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
      setIsPlayingAudio(false)
      if (audioTimerRef.current) {
        clearTimeout(audioTimerRef.current)
        audioTimerRef.current = null
      }
      return
    }

    setIsPlayingAudio(true)

    const speechText =
      "Hello! I am Jeevananthan V, a Full Stack Developer based in Salem, Tamil Nadu. Welcome to my portfolio! I build scalable web applications with React, Node.js, Express, and Salesforce Apex. I hope you enjoy exploring my work!"

    if (window.speechSynthesis) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(speechText)
      utterance.rate = 1.02
      utterance.pitch = 0.98

      const voices = window.speechSynthesis.getVoices()
      const primaryVoice = voices.find(
        (v) =>
          v.name.toLowerCase().includes("google uk english male") ||
          v.name.toLowerCase().includes("natural") ||
          v.lang.startsWith("en")
      )
      if (primaryVoice) utterance.voice = primaryVoice

      utterance.onend = () => setIsPlayingAudio(false)
      utterance.onerror = () => setIsPlayingAudio(false)

      window.speechSynthesis.speak(utterance)

      audioTimerRef.current = window.setTimeout(() => {
        setIsPlayingAudio(false)
      }, 16000)
    } else {
      audioTimerRef.current = window.setTimeout(() => {
        setIsPlayingAudio(false)
      }, 8000)
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("jeevananthanjeeva170902@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <>
      <GSAPScrollController />
      <Navbar />

      <section
        id="hero"
        className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
      >
        {/* Ambient Dark Gradient & Radial Lighting */}
        <div className="absolute inset-0 bg-neutral-950 -z-20">
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff3e00]/10 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-amber-600/5 blur-[140px] rounded-full pointer-events-none" />
          {/* Subtle Grid Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "48px 48px"
            }}
          />
        </div>

        {/* Live Canvas Particle Stream */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none -z-10 mix-blend-screen opacity-70"
        />

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Hero Content & Value Proposition */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff3e00]/10 border border-[#ff3e00]/25 text-[#ff3e00] text-xs font-mono font-medium tracking-wide mb-6 shadow-sm shadow-[#ff3e00]/10"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>OPEN FOR FULL-TIME & FREELANCE ROLES</span>
              </motion.div>

              {/* Main Headline */}
              <div className="max-w-2xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-syne text-white leading-[1.05]"
                >
                  JEEVANANTHAN{" "}
                  <span className="text-[#ff3e00]">V</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-200 mt-3 font-syne tracking-tight"
                >
                  Full Stack Developer & Systems Engineer
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed font-sans max-w-xl"
                >
                  Based in <strong className="text-neutral-200 font-semibold">Salem, Tamil Nadu</strong>. 
                  Engineering scalable web platforms, high-throughput REST APIs, and production database architectures with 
                  professional tenure across <span className="text-neutral-300">Ethiroli Pvt Ltd</span> and <span className="text-neutral-300">Jayalakshmi Groups</span>.
                </motion.p>
              </div>

              {/* Tech Stack Pills */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-2 mt-6"
              >
                {techPills.map((tech) => {
                  const Icon = tech.icon
                  return (
                    <div
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300 hover:border-[#ff3e00]/50 hover:bg-[#ff3e00]/5 transition-all duration-200"
                    >
                      <Icon size={13} className="text-[#ff3e00]" />
                      <span>{tech.name}</span>
                    </div>
                  )
                })}
              </motion.div>

              {/* Action Buttons Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center gap-3.5 mt-8 w-full sm:w-auto"
              >
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#ff3e00] hover:bg-[#ff3e00]/90 text-black font-extrabold text-xs uppercase tracking-wider font-syne shadow-lg shadow-[#ff3e00]/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Explore Projects</span>
                  <ArrowDown size={14} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-wider font-syne transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight size={14} className="text-[#ff3e00]" />
                </a>

                {/* Voice Intro Audio Button */}
                <button
                  onClick={handlePlayVoiceIntro}
                  aria-label="Listen to voice intro"
                  className={`inline-flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs font-semibold font-syne uppercase tracking-wider transition-all duration-200 border ${
                    isPlayingAudio
                      ? "bg-[#ff3e00]/15 border-[#ff3e00] text-[#ff3e00]"
                      : "bg-white/5 border-white/10 text-neutral-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {isPlayingAudio ? (
                    <>
                      <span>Mute Intro</span>
                      <div className="flex items-center gap-0.5 h-3">
                        <span className="w-1 bg-[#ff3e00] rounded-full audio-bar-1" />
                        <span className="w-1 bg-[#ff3e00] rounded-full audio-bar-2" />
                        <span className="w-1 bg-[#ff3e00] rounded-full audio-bar-3" />
                      </div>
                    </>
                  ) : (
                    <>
                      <Volume2 size={15} className="text-[#ff3e00]" />
                      <span>Audio Intro</span>
                    </>
                  )}
                </button>
              </motion.div>

            </div>

            {/* Right Column: Interactive Developer Workstation Terminal Console */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 w-full mt-4 lg:mt-0"
            >
              <div className="relative rounded-2xl bg-neutral-900/90 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs">
                
                {/* Mac/Unix Terminal Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-neutral-950/80 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]/90 inline-block" />
                    <span className="text-[11px] text-neutral-500 font-sans ml-2">jeeva@portfolio: ~</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      main [live]
                    </span>
                  </div>
                </div>

                {/* Terminal Body Logs Feed */}
                <div className="p-5 flex flex-col gap-2.5 min-h-[260px] max-h-[340px] overflow-y-auto">
                  {terminalLogs.map((log, idx) => {
                    const isVisible = terminalLine >= idx
                    if (!isVisible) return null

                    if (log.type === "cmd") {
                      return (
                        <div key={idx} className="text-neutral-300 font-semibold flex items-center gap-1.5">
                          <span className="text-[#ff3e00] font-bold">➜</span>
                          <span>{log.text.replace("$ ", "")}</span>
                        </div>
                      )
                    }

                    if (log.type === "success") {
                      return (
                        <div key={idx} className="text-emerald-400/90 text-[11px] pl-3 flex items-center gap-1.5">
                          <span>{log.text}</span>
                        </div>
                      )
                    }

                    if (log.type === "json") {
                      return (
                        <pre key={idx} className="text-neutral-400 text-[11px] pl-3 bg-black/40 p-2.5 rounded-lg border border-white/5 leading-relaxed overflow-x-auto">
                          {log.text}
                        </pre>
                      )
                    }

                    return null
                  })}

                  {/* Blinking Prompt Cursor */}
                  <div className="flex items-center gap-1.5 text-neutral-400 mt-1">
                    <span className="text-[#ff3e00]">➜</span>
                    <span className="w-2 h-4 bg-[#ff3e00] inline-block animate-pulse" />
                  </div>
                </div>

                {/* Telemetry Summary Bar */}
                <div className="px-4 py-3 bg-neutral-950/90 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Salem, IN
                    </span>
                    <span className="hidden sm:inline text-neutral-600">•</span>
                    <span className="hidden sm:inline">React 19 + Node</span>
                  </div>
                  
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1.5 text-[#ff3e00] hover:text-white transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={12} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
