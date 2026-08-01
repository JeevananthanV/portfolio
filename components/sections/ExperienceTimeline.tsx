"use client"

import { useEffect, useRef, useState } from "react"
import {
  Briefcase,
  Calendar,
  ChevronRight,
  MapPin,
  Zap,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Building2,
  Code2,
  Layers,
  Rocket,
  ShieldCheck,
  Cpu,
  Server,
  Terminal,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type TabType = "all" | "roles" | "deliverables" | "tech"

const roles = [
  {
    id: "ethiroli",
    company: "Ethiroli Pvt Ltd",
    role: "Web Developer",
    location: "Salem, Tamil Nadu",
    period: "Feb 2026 – Present",
    isCurrent: true,
    type: "Full-Time",
    highlight: "Full-Stack Applications & REST API Engineering",
    metrics: [
      { label: "Performance Gain", value: "+35%" },
      { label: "Core Stack", value: "React & Node" },
      { label: "Security", value: "REST & Payments" },
    ],
    bullets: [
      "Built and maintained client-facing web applications using React.js, Node.js, and Express REST APIs",
      "Collaborated closely with UI/UX designers to implement modular component libraries and dynamic admin dashboards",
      "Integrated secure payment gateways (Razorpay, Stripe) and third-party web APIs for production client workflows",
      "Optimized frontend bundle sizes and web page performance scores by over 35% through lazy loading and asset tuning",
    ],
    deliverables: [
      "Client-facing production web portals",
      "Custom RESTful APIs & middleware",
      "Payment gateway checkout workflows",
      "Dynamic data analytics dashboards",
    ],
    tech: ["React.js", "Node.js", "Express.js", "REST APIs", "Payment Gateway", "Tailwind CSS", "JavaScript"],
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
      { label: "Database", value: "MySQL & Optimization" },
      { label: "CI/CD", value: "Automated Pipelines" },
    ],
    bullets: [
      "Developed corporate multi-location websites featuring interactive branch directories and embedded location maps",
      "Created investor relations portals with structured financial report management and PDF viewer accessibility",
      "Streamlined database queries using MySQL and implemented automated CI/CD deployment pipelines on production servers",
    ],
    deliverables: [
      "Corporate conglomerate web portal",
      "Branch locator & interactive maps",
      "Investor relations PDF library",
      "Automated deployment pipelines",
    ],
    tech: ["React.js", "MySQL", "Bootstrap", "PDF Accessibility", "CI/CD", "Interactive Maps", "Node.js"],
  },
  {
    id: "lead-projects",
    company: "Independent Full-Stack Lead",
    role: "Full-Stack Developer",
    location: "Salem, Tamil Nadu",
    period: "2024 – Present",
    isCurrent: true,
    type: "Client & Community Projects",
    highlight: "10+ Enterprise Web Apps, Temple Portals & Event Platforms",
    metrics: [
      { label: "Live Systems", value: "10+ Web Apps" },
      { label: "Architecture", value: "React 19 + Express" },
      { label: "Passes Generated", value: "5,000+ QR Passes" },
    ],
    bullets: [
      "Architected Kottai Varahi Temple (Jaivarahi.org) featuring a 13-table MySQL database, Razorpay payment engine, and QR ticket scanning",
      "Engineered Salem Marathon & Arise '20 Foundation portals with real-time runner timing, charity trackers, and volunteer management",
      "Developed high-converting web apps for travel platforms (Anbu Travels, Aruvi Tours) and luxury events (Glamour Gatherings)",
    ],
    deliverables: [
      "Jaivarahi.org 13-Table Temple Engine",
      "Razorpay E-Donations & Booking APIs",
      "Automated QR Ticket Pass Generator",
      "Marathon Leaderboard & Timing Systems",
    ],
    tech: ["React 19", "Express.js", "MySQL2", "Razorpay API", "QR Code Engine", "JWT Auth", "Tailwind CSS"],
  },
]

const statsSummary = [
  { label: "Production Web Apps", value: "10+", icon: Zap, subtext: "Live client & community platforms" },
  { label: "Average Perf Boost", value: "+35%", icon: TrendingUp, subtext: "Lighthouse optimization score" },
  { label: "Core Stack Mastery", value: "Full-Stack", icon: Sparkles, subtext: "React 19, Node.js, Express & MySQL" },
  { label: "Database Engineering", value: "13+ Tables", icon: Layers, subtext: "Normalized schema design" },
]

export default function ExperienceTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<TabType>("all")
  const [expandedRoleId, setExpandedRoleId] = useState<string>("ethiroli")
  const [selectedSubTab, setSelectedSubTab] = useState<Record<string, "bullets" | "deliverables" | "tech">>({
    ethiroli: "bullets",
    jayalakshmi: "bullets",
    "lead-projects": "bullets",
  })

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".exp-header",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      )

      // Vertical line progress reveal scrubbed with scroll
      gsap.fromTo(
        ".exp-vertical-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".exp-timeline-container",
            start: "top 75%",
            end: "bottom 60%",
            scrub: 0.8,
          },
        }
      )

      // Staggered experience role cards reveal
      gsap.fromTo(
        ".exp-role-card",
        { opacity: 0, x: -35, scale: 0.97 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-timeline-container",
            start: "top 78%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const filteredRoles = roles.filter((r) => {
    if (activeTab === "all") return true
    if (activeTab === "roles") return r.type === "Full-Time"
    if (activeTab === "deliverables") return r.deliverables.length > 0
    if (activeTab === "tech") return true
    return true
  })

  return (
    <section
      ref={sectionRef}
      id="experience"
      style={{
        padding: "clamp(4rem, 8vw, 7.5rem) 0",
        background: "#0e0e0e",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow Overlay */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "2%",
          width: "clamp(350px, 50vw, 500px)",
          height: "clamp(350px, 50vw, 500px)",
          background: "radial-gradient(circle, rgba(255,62,0,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(70px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "2%",
          width: "clamp(300px, 40vw, 450px)",
          height: "clamp(300px, 40vw, 450px)",
          background: "radial-gradient(circle, rgba(0,240,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(70px)",
        }}
      />

      <div className="container" style={{ maxWidth: "1100px" }}>
        {/* Section Header */}
        <div className="exp-header" style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <span
              style={{
                color: "var(--accent)",
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                fontWeight: 700,
              }}
            >
              DEVELOPMENT JOURNEY
            </span>
            <div style={{ height: "1px", width: "clamp(30px, 10vw, 40px)", background: "var(--accent)", opacity: 0.5 }} />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              lineHeight: 1.1,
              fontWeight: 800,
              color: "#fff",
            }}
          >
            CAREER & ENGINEERING IMPACT
          </h2>
          <p style={{ color: "#aaa", fontSize: "clamp(0.9rem, 2vw, 1.05rem)", marginTop: "14px", maxWidth: "660px", lineHeight: 1.65 }}>
            A detailed record of architecting scalable web applications, designing RESTful API backends, integrating production payment systems, and optimizing frontend performance.
          </p>

          {/* View Filter Switcher Bar */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginTop: "28px",
            }}
          >
            {[
              { id: "all", label: "All Milestones", icon: Layers },
              { id: "roles", label: "Full-Time Roles", icon: Briefcase },
              { id: "deliverables", label: "System Deliverables", icon: Rocket },
              { id: "tech", label: "Tech Stack Matrix", icon: Code2 },
            ].map((tab) => {
              const TabIcon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  style={{
                    padding: "clamp(0.4rem, 1vw, 0.5rem) clamp(0.875rem, 2vw, 1.125rem)",
                    borderRadius: "999px",
                    fontSize: "clamp(0.65rem, 1.8vw, 0.82rem)",
                    fontWeight: 700,
                    fontFamily: "var(--font-syne)",
                    letterSpacing: "0.04em",
                    border: isActive ? "1px solid var(--accent)" : "1px solid rgba(255,255,255,0.1)",
                    background: isActive ? "var(--accent)" : "rgba(255,255,255,0.03)",
                    color: isActive ? "#0e0e0e" : "#ccc",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <TabIcon size={14} color={isActive ? "#0e0e0e" : "var(--accent)"} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Stats Summary Cards Bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "16px",
            marginBottom: "clamp(3rem, 6vw, 3.5rem)",
          }}
        >
          {statsSummary.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                whileHover={{ y: -3, borderColor: "rgba(255, 62, 0, 0.45)", boxShadow: "0 10px 25px rgba(255,62,0,0.1)" }}
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  padding: "clamp(1rem, 2vw, 1.25rem) clamp(1.25rem, 3vw, 1.375rem)",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  style={{
                    width: "clamp(40px, 8vw, 46px)",
                    height: "clamp(40px, 8vw, 46px)",
                    borderRadius: "12px",
                    background: "rgba(255, 62, 0, 0.12)",
                    border: "1px solid rgba(255, 62, 0, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-syne)", fontSize: "1.45rem", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#ddd", fontWeight: 600, marginTop: "2px" }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#777", marginTop: "2px" }}>
                    {stat.subtext}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Timeline Main Container */}
        <div className="exp-timeline-container" style={{ position: "relative", paddingLeft: "42px" }}>
          {/* Vertical scrubbed gradient line */}
          <div
            className="exp-vertical-line"
            style={{
              position: "absolute",
              left: "12px",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(to bottom, var(--accent) 0%, rgba(255,62,0,0.4) 60%, rgba(255,62,0,0.08) 100%)",
              transformOrigin: "top",
            }}
          />

          <AnimatePresence mode="popLayout">
            {filteredRoles.map((role) => {
              const isExpanded = expandedRoleId === role.id
              const currentSubTab = selectedSubTab[role.id] || "bullets"

              return (
                <motion.div
                  key={role.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                   className="exp-role-card"
                   style={{
                     marginBottom: "44px",
                     position: "relative",
                     background: role.isCurrent ? "rgba(255, 62, 0, 0.03)" : "rgba(255, 255, 255, 0.02)",
                     border: role.isCurrent ? "1px solid rgba(255, 62, 0, 0.35)" : "1px solid rgba(255, 255, 255, 0.08)",
                     borderRadius: "20px",
                     padding: "clamp(1.5rem, 3vw, 2rem)",
                     boxShadow: role.isCurrent ? "0 12px 35px rgba(255, 62, 0, 0.08)" : "0 10px 30px rgba(0,0,0,0.3)",
                     transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                   }}
                 >
                   {/* Timeline Node Icon */}
                   <div
                     className="timeline-node"
                     style={{
                       position: "absolute",
                       left: "-42px",
                       top: "32px",
                       width: "26px",
                       height: "26px",
                       borderRadius: "50%",
                       background: role.isCurrent ? "var(--accent)" : "#181818",
                       border: `2px solid ${role.isCurrent ? "var(--accent)" : "rgba(255,255,255,0.25)"}`,
                       boxShadow: role.isCurrent ? "0 0 18px var(--accent)" : "none",
                       transform: "translateX(-50%)",
                       display: "flex",
                       alignItems: "center",
                       justifyContent: "center",
                       zIndex: 2,
                     }}
                   >
                    {role.isCurrent && (
                      <motion.div
                        animate={{ scale: [1, 1.85, 1], opacity: [0.85, 0, 0.85] }}
                        transition={{ duration: 2.2, repeat: Infinity }}
                        style={{
                          position: "absolute",
                          inset: -4,
                          borderRadius: "50%",
                          border: "2px solid var(--accent)",
                        }}
                      />
                    )}
                    <Building2 size={12} color={role.isCurrent ? "#0e0e0e" : "#aaa"} />
                  </div>

                   {/* Header Row */}
                   <div
                     className="header-row"
                     style={{
                       display: "flex",
                       justifyContent: "space-between",
                       alignItems: "flex-start",
                       flexWrap: "wrap",
                       gap: "16px",
                       marginBottom: "16px",
                     }}
                   >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "6px" }}>
                        <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.5rem", color: "#fff", fontWeight: 800 }}>
                          {role.role}
                        </h3>
                        {role.isCurrent && (
                          <span
                            style={{
                              fontSize: "0.7rem",
                              padding: "3px 10px",
                              borderRadius: "999px",
                              background: "var(--accent)",
                              color: "#0e0e0e",
                              fontWeight: 800,
                              fontFamily: "var(--font-syne)",
                              letterSpacing: "0.06em",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0e0e0e" }} />
                            ACTIVE ROLE
                          </span>
                        )}
                        <span
                          style={{
                            fontSize: "0.72rem",
                            padding: "3px 10px",
                            borderRadius: "999px",
                            background: "rgba(255,255,255,0.06)",
                            color: "#aaa",
                            border: "1px solid rgba(255,255,255,0.1)",
                            fontWeight: 600,
                          }}
                        >
                          {role.type}
                        </span>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--accent)", fontSize: "1.05rem", fontWeight: 700 }}>
                          <Briefcase size={16} />
                          <span>{role.company}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#888", fontSize: "0.85rem" }}>
                          <MapPin size={14} />
                          <span>{role.location}</span>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          background: "rgba(255, 255, 255, 0.04)",
                          padding: "6px 14px",
                          borderRadius: "999px",
                          fontSize: "0.82rem",
                          color: "#ddd",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        <Calendar size={13} color="var(--accent)" />
                        <span style={{ fontWeight: 600 }}>{role.period}</span>
                      </div>

                      <button
                        onClick={() => setExpandedRoleId(isExpanded ? "" : role.id)}
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "var(--accent)",
                          borderRadius: "8px",
                          padding: "6px 12px",
                          fontSize: "0.78rem",
                          fontFamily: "var(--font-syne)",
                          fontWeight: 700,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        {isExpanded ? "Collapse" : "Details"}
                        <ChevronRight
                          size={14}
                          style={{
                            transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease",
                          }}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Core Highlight Ribbon */}
                  <div
                    style={{
                      background: "rgba(0,0,0,0.35)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "10px",
                      padding: "10px 16px",
                      fontSize: "0.86rem",
                      color: "#eee",
                      marginBottom: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Sparkles size={15} color="var(--accent)" style={{ flexShrink: 0 }} />
                    <span style={{ color: "#aaa" }}>Focus:</span>
                    <strong style={{ color: "#fff", fontWeight: 700 }}>{role.highlight}</strong>
                  </div>

                   {/* Quick Metrics Badges Bar */}
                   <div
                     className="exp-metrics"
                     style={{
                       display: "grid",
                       gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                       gap: "10px",
                       marginBottom: "20px",
                     }}
                   >
                    {role.metrics.map((m) => (
                      <div
                        key={m.label}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "0.82rem",
                          background: "rgba(255, 62, 0, 0.05)",
                          border: "1px solid rgba(255, 62, 0, 0.18)",
                          borderRadius: "10px",
                          padding: "8px 12px",
                        }}
                      >
                        <CheckCircle2 size={14} color="var(--accent)" style={{ flexShrink: 0 }} />
                        <div>
                          <div style={{ color: "#888", fontSize: "0.72rem" }}>{m.label}</div>
                          <div style={{ color: "#fff", fontWeight: 800, fontSize: "0.9rem", fontFamily: "var(--font-syne)" }}>
                            {m.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Sub-navigation inside card */}
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                      paddingBottom: "10px",
                      marginBottom: "18px",
                    }}
                  >
                    {[
                      { id: "bullets", label: "Key Responsibilities" },
                      { id: "deliverables", label: "System Deliverables" },
                      { id: "tech", label: "Technologies Used" },
                    ].map((sub) => {
                      const active = currentSubTab === sub.id
                      return (
                        <button
                          key={sub.id}
                          onClick={() =>
                            setSelectedSubTab((prev) => ({
                              ...prev,
                              [role.id]: sub.id as "bullets" | "deliverables" | "tech",
                            }))
                          }
                          style={{
                            background: "transparent",
                            border: "none",
                            borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
                            color: active ? "var(--accent)" : "#888",
                            fontSize: "0.8rem",
                            fontWeight: active ? 700 : 500,
                            fontFamily: "var(--font-syne)",
                            padding: "4px 8px",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {sub.label}
                        </button>
                      )
                    })}
                  </div>

                  {/* Dynamic Sub-tab Content */}
                  {currentSubTab === "bullets" && (
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}
                    >
                      {role.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          style={{
                            fontSize: "0.93rem",
                            color: "#ccc",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "10px",
                            lineHeight: 1.6,
                          }}
                        >
                          <ChevronRight size={15} color="var(--accent)" style={{ flexShrink: 0, marginTop: "4px" }} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}

                  {currentSubTab === "deliverables" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" }}
                    >
                      {role.deliverables.map((del) => (
                        <div
                          key={del}
                          style={{
                            padding: "12px 16px",
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "10px",
                            fontSize: "0.85rem",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <Rocket size={14} color="var(--accent)" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {currentSubTab === "tech" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
                    >
                      {role.tech.map((t) => (
                        <span
                          key={t}
                          style={{
                            padding: "6px 14px",
                            background: "rgba(255, 62, 0, 0.08)",
                            border: "1px solid rgba(255, 62, 0, 0.25)",
                            borderRadius: "8px",
                            fontSize: "0.8rem",
                            color: "#eee",
                            fontWeight: 700,
                            fontFamily: "var(--font-inter)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <Code2 size={12} color="var(--accent)" />
                          {t}
                        </span>
                      ))}
                    </motion.div>
                  )}

                  {/* Expanded Detail View */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden", marginTop: "24px", paddingTop: "20px", borderTop: "1px dashed rgba(255,255,255,0.1)" }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--accent)", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
                          <ShieldCheck size={16} />
                          <span>Engineering Methodology & Security Standards</span>
                        </div>
                        <p style={{ fontSize: "0.88rem", color: "#aaa", lineHeight: 1.65 }}>
                          Adheres to clean architecture, modular component decomposition, strict TypeScript type validation, secure REST API route abstractions, and cross-browser responsiveness. All production apps undergo bundle analysis, performance audits, and security checks before launch.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
