"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon, Search, Command, ArrowUpRight } from "lucide-react"
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
    return <div className="w-9 h-9 rounded-full bg-white/5" />
  }

  const isDark = theme === "dark"

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle light/dark theme"
      className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 transition-colors"
    >
      {isDark ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-[#ff3e00]" />}
    </motion.button>
  )
}

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Work", href: "/#work" },
  { name: "Skills", href: "/#skills" },
  { name: "Academics", href: "/#education" },
  { name: "Freelance", href: "/freelancing", isAccent: true },
  { name: "Contact", href: "/#contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <>
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Top Reading Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#ff3e00] origin-left z-50 shadow-[0_0_12px_rgba(255,62,0,0.8)]"
      />

      {/* Header Container */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-neutral-950/85 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group text-decoration-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff3e00] to-amber-600 flex items-center justify-center font-extrabold text-black text-sm tracking-tighter shadow-md shadow-[#ff3e00]/20 group-hover:scale-105 transition-transform font-syne">
              JV
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-white text-sm sm:text-base tracking-tight font-syne group-hover:text-[#ff3e00] transition-colors leading-none">
                JEEVANANTHAN
              </span>
              <span className="text-[10px] text-neutral-400 font-mono tracking-wider uppercase mt-0.5">
                Full Stack Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-neutral-900/60 backdrop-blur-md border border-white/5 rounded-full px-3 py-1.5 shadow-inner">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 font-sans ${
                  item.isAccent
                    ? "bg-[#ff3e00]/10 text-[#ff3e00] border border-[#ff3e00]/25 font-semibold hover:bg-[#ff3e00]/20"
                    : "text-neutral-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Icons: Search Trigger, Theme Toggle, Mobile Hamburger */}
          <div className="flex items-center gap-2.5">
            {/* Quick Search Trigger */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setCommandPaletteOpen(true)}
              aria-label="Open command search palette"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-300 transition-colors"
            >
              <Search size={14} className="text-[#ff3e00]" />
              <span className="font-sans">Search</span>
              <span className="inline-flex items-center gap-0.5 text-[10px] font-mono bg-white/10 text-neutral-400 px-1.5 py-0.5 rounded">
                <Command size={10} />K
              </span>
            </motion.button>

            {/* Mobile Search Icon Only */}
            <button
              onClick={() => setCommandPaletteOpen(true)}
              aria-label="Open search"
              className="sm:hidden w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-neutral-300"
            >
              <Search size={16} className="text-[#ff3e00]" />
            </button>

            <ThemeToggle />

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-neutral-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X size={20} className="text-[#ff3e00]" /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[65px] z-30 bg-neutral-950/95 backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto lg:hidden border-t border-white/10"
          >
            <div className="flex flex-col gap-2 pt-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-2 px-3">
                Navigation
              </span>
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold font-syne transition-colors ${
                      item.isAccent
                        ? "bg-[#ff3e00]/10 text-[#ff3e00] border border-[#ff3e00]/20"
                        : "text-neutral-200 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={16} className="opacity-50" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Drawer Bottom Info */}
            <div className="pt-6 border-t border-white/10 mt-6">
              <div className="text-xs text-neutral-400 flex items-center justify-between mb-2">
                <span>Location: Salem, TN, India</span>
                <span className="text-emerald-400 font-medium">● Open to Work</span>
              </div>
              <a
                href="mailto:jeevananthanjeeva170902@gmail.com"
                className="block text-center w-full py-3 rounded-xl bg-[#ff3e00] text-black font-bold text-xs uppercase tracking-wider font-syne hover:bg-[#ff3e00]/90 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
