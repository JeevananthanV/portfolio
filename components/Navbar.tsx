"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon, Search, Command } from "lucide-react"
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react"
import { useTheme } from "next-themes"
import CommandPalette from "@/components/ui/CommandPalette"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div style={{ width: "36px", height: "36px" }} />
  }

  const isDark = theme === "dark"

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle light/dark theme"
      style={{
        background: "rgba(255, 255, 255, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        borderRadius: "50%",
        width: "36px",
        height: "36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--fg)",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    >
      {isDark ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="var(--accent)" />}
    </motion.button>
  )
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setCommandPaletteOpen((prev) => !prev)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Top Reading Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "var(--accent)",
          transformOrigin: "0%",
          zIndex: 1001,
          boxShadow: "0 0 12px var(--accent)",
        }}
      />

      {/* Main Global Navigation */}
      <motion.nav
        className="portfolio-nav"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Link href="/" className="logo" style={{ textDecoration: "none", color: "var(--fg)", display: "flex", alignItems: "center", gap: "8px" }}>
          <motion.span
            whileHover={{ scale: 1.05 }}
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(0.9rem, 2vw, 1.1rem)", letterSpacing: "0.05em" }}
          >
            JEEVANANTHAN <span style={{ color: "var(--accent)" }}>V</span>
          </motion.span>
        </Link>

          {/* Desktop Nav Links & Quick Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "clamp(0.75rem, 2vw, 1rem)" }}>
            <ul className="nav-links desktop-only" style={{ display: "flex", alignItems: "center", gap: "clamp(0.75rem, 2vw, 1rem)", listStyle: "none" }}>
              {[
                { name: "About", href: "/#about" },
                { name: "Experience", href: "/#experience" },
                { name: "Work", href: "/#work" },
                { name: "Skills", href: "/#skills" },
                { name: "Academics", href: "/#education" },
                { name: "Freelance", href: "/freelancing", isAccent: true },
                { name: "Contact", href: "/#contact" },
              ].map((item) => (
                <motion.li key={item.name} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href={item.href}
                    style={{
                      color: item.isAccent ? "var(--accent)" : "var(--fg)",
                      opacity: item.isAccent ? 1 : 0.85,
                      fontWeight: item.isAccent ? 700 : 500,
                      textDecoration: "none",
                      fontSize: "clamp(0.75rem, 1.8vw, 0.88rem)",
                      fontFamily: "var(--font-inter)",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      background: item.isAccent ? "rgba(255, 62, 0, 0.1)" : "transparent",
                      border: item.isAccent ? "1px solid rgba(255, 62, 0, 0.3)" : "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

          {/* Quick Search Cmd+K Trigger */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCommandPaletteOpen(true)}
            aria-label="Open command palette search"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "999px",
              padding: "6px 14px",
              color: "var(--fg)",
              fontSize: "0.8rem",
              fontFamily: "var(--font-inter)",
              cursor: "pointer",
            }}
          >
            <Search size={14} style={{ color: "var(--accent)" }} />
            <span className="desktop-only" style={{ opacity: 0.8 }}>Search</span>
            <span
              style={{
                fontSize: "0.7rem",
                padding: "2px 6px",
                borderRadius: "4px",
                background: "rgba(255, 255, 255, 0.1)",
                color: "#888",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "2px",
              }}
            >
              <Command size={10} />K
            </span>
          </motion.button>

          <ThemeToggle />

          {/* Mobile Toggle Button */}
          <motion.button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            whileTap={{ scale: 0.9 }}
            style={{
              background: "none",
              border: "none",
              color: "var(--fg)",
              cursor: "pointer",
              padding: "8px",
              display: "none",
            }}
          >
            {mobileMenuOpen ? <X size={26} color="var(--accent)" /> : <Menu size={26} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="navbar-mobile-menu"
            style={{
              top: "80px",
              left: 0,
              width: "100%",
              height: "calc(100vh - 80px)",
              background: "var(--bg)",
              backdropFilter: "blur(20px)",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              padding: "40px",
            }}
          >
            {[
              { name: "About", href: "/#about" },
              { name: "Experience", href: "/#experience" },
              { name: "Work", href: "/#work" },
              { name: "Skills", href: "/#skills" },
              { name: "Academics", href: "/#education" },
              { name: "Freelance", href: "/freelancing", isAccent: true },
              { name: "Contact", href: "/#contact" },
            ].map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: "1.5rem",
                    color: link.isAccent ? "var(--accent)" : "var(--fg)",
                    textDecoration: "none",
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                  }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

