"use client"

import { useRef, useEffect, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link"
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react"

export default function Hero() {
  const nameRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const pillRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const blobRef = useRef<HTMLDivElement>(null)
  const [isTouch, setIsTouch] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none) and (pointer: coarse)").matches)
  }, [])

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      if (nameRef.current) {
        tl.fromTo(
          nameRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1 }
        )
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5"
        )
      }

      if (pillRef.current) {
        tl.fromTo(
          pillRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.3"
        )
      }

      if (contactRef.current) {
        tl.fromTo(
          contactRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
      }

      const pill = pillRef.current
      if (pill) {
        gsap.to(pill, {
          opacity: 0.75,
          duration: 1.2,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        })
      }

      if (!isTouch && nameRef.current) {
        const nameEl = nameRef.current
        const xTo = gsap.quickTo(nameEl, "x", { duration: 0.8, ease: "power2.out" })
        const yTo = gsap.quickTo(nameEl, "y", { duration: 0.8, ease: "power2.out" })

        const handleMouseMove = (e: MouseEvent) => {
          const x = (e.clientX / window.innerWidth - 0.5) * 16
          const y = (e.clientY / window.innerHeight - 0.5) * 16
          xTo(x)
          yTo(y)
        }

        const handleMouseLeave = () => {
          xTo(0)
          yTo(0)
        }

        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseleave", handleMouseLeave)

        return () => {
          document.removeEventListener("mousemove", handleMouseMove)
          document.removeEventListener("mouseleave", handleMouseLeave)
        }
      }
    },
    { scope: nameRef }
  )

  return (
    <>
      <div className="blob" ref={blobRef} aria-hidden="true" />

      {/* Main Navbar */}
      <nav className="portfolio-nav">
        <Link href="/" className="logo" style={{ textDecoration: "none", color: "var(--fg)" }}>
          JEEVANANTHAN V
        </Link>

        {/* Desktop Nav Links */}
        <ul className="nav-links desktop-only">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <Link href="/freelancing" style={{ color: "var(--accent)" }}>
              Freelance
            </Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            padding: "8px",
            display: "none",
          }}
        >
          {mobileMenuOpen ? <X size={26} color="var(--accent)" /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "80px",
            left: 0,
            width: "100%",
            height: "calc(100vh - 80px)",
            background: "rgba(10, 10, 10, 0.96)",
            backdropFilter: "blur(20px)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "28px",
            padding: "40px",
          }}
        >
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "1.4rem", color: "#fff", textDecoration: "none", fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            About
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "1.4rem", color: "#fff", textDecoration: "none", fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            Experience
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "1.4rem", color: "#fff", textDecoration: "none", fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            Work
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "1.4rem", color: "#fff", textDecoration: "none", fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            Skills
          </a>
          <Link
            href="/freelancing"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "1.4rem", color: "var(--accent)", textDecoration: "none", fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            Freelance Services
          </Link>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "1.4rem", color: "#fff", textDecoration: "none", fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            Contact Me
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="relative" style={{ minHeight: "100vh", padding: "140px 0 80px" }}>
        <img
          src="/man_mountains_clouds_118031_1366x768.jpg"
          alt="Background"
          className="hero-img"
          referrerPolicy="no-referrer"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
            transform: "none",
            zIndex: 1,
            filter: "grayscale(1) contrast(1.1)",
            opacity: 0.22,
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1200px", padding: "0 24px" }}>
          
          {/* Status Badge */}
          <div ref={pillRef} style={{ opacity: 0, marginBottom: "20px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                border: "1px solid var(--accent)",
                color: "var(--accent)",
                fontFamily: "var(--font-inter)",
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                borderRadius: "999px",
                background: "rgba(255, 62, 0, 0.08)",
              }}
            >
              <Sparkles size={14} /> OPEN FOR FULL-TIME & FREELANCE ROLES
            </span>
          </div>

          {/* Fully Visible Responsive Hero Name Heading */}
          <div className="hero-title-container" ref={nameRef} style={{ maxWidth: "100%", overflow: "hidden" }}>
            <h1
              className="hero-name-heading"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 7.2vw, 7.8rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                wordBreak: "break-word",
                margin: 0,
                color: "#ffffff",
              }}
            >
              JEEVANANTHAN <span style={{ color: "var(--accent)" }}>V</span>
            </h1>
          </div>

          {/* Subtitle & Role */}
          <div ref={subtitleRef} style={{ opacity: 0, marginTop: "24px" }}>
            <p
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                fontWeight: 400,
                color: "#ddd",
                fontFamily: "var(--font-inter)",
              }}
            >
              Full Stack Web Developer & Software Engineer
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#888",
                fontFamily: "var(--font-inter)",
                marginTop: "8px",
              }}
            >
              Based in Salem, Tamil Nadu, India — Specializing in React.js, Node.js, & Scalable Applications
            </p>
          </div>

          {/* Action Callouts */}
          <div ref={contactRef} style={{ opacity: 0, marginTop: "36px", display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="#work"
              style={{
                padding: "14px 28px",
                background: "var(--accent)",
                color: "#0e0e0e",
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                borderRadius: "6px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              View Selected Work <ArrowUpRight size={16} />
            </a>

            <a
              href="#contact"
              style={{
                padding: "14px 28px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#fff",
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                borderRadius: "6px",
              }}
            >
              Contact Me
            </a>
          </div>

        </div>
      </section>
    </>
  )
}
