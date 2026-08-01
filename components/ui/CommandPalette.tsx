"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import {
  Search,
  User,
  Briefcase,
  Code2,
  GraduationCap,
  Mail,
  Sun,
  Moon,
  FileDown,
  Sparkles,
  ArrowRight,
  X,
  Command,
} from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { toast } from "sonner"

interface CommandItem {
  id: string
  title: string
  category: "Navigation" | "Actions" | "Socials"
  icon: any
  action: () => void
  badge?: string
}

export default function CommandPalette({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)

  const items: CommandItem[] = [
    {
      id: "about",
      title: "About Jeevananthan",
      category: "Navigation",
      icon: User,
      action: () => {
        router.push("/#about")
        onClose()
      },
    },
    {
      id: "experience",
      title: "Career & Work Experience",
      category: "Navigation",
      icon: Briefcase,
      action: () => {
        router.push("/#experience")
        onClose()
      },
    },
    {
      id: "work",
      title: "Featured Projects Portfolio",
      category: "Navigation",
      icon: Code2,
      action: () => {
        router.push("/#work")
        onClose()
      },
    },
    {
      id: "skills",
      title: "Technical Skills & Stack",
      category: "Navigation",
      icon: Sparkles,
      action: () => {
        router.push("/#skills")
        onClose()
      },
    },
    {
      id: "academics",
      title: "Education & Certifications",
      category: "Navigation",
      icon: GraduationCap,
      action: () => {
        router.push("/#education")
        onClose()
      },
    },
    {
      id: "freelance",
      title: "Freelancing Services & Rates",
      category: "Navigation",
      icon: ArrowRight,
      badge: "Services",
      action: () => {
        router.push("/freelancing")
        onClose()
      },
    },
    {
      id: "contact",
      title: "Get In Touch / Contact",
      category: "Navigation",
      icon: Mail,
      action: () => {
        router.push("/#contact")
        onClose()
      },
    },
    {
      id: "toggle-theme",
      title: `Switch Theme (${theme === "dark" ? "Light Mode" : "Dark Mode"})`,
      category: "Actions",
      icon: theme === "dark" ? Sun : Moon,
      action: () => {
        setTheme(theme === "dark" ? "light" : "dark")
        toast.success(`Switched to ${theme === "dark" ? "Light" : "Dark"} mode`)
        onClose()
      },
    },
    {
      id: "copy-email",
      title: "Copy Email Address (jeevananthanjeeva170902@gmail.com)",
      category: "Actions",
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText("jeevananthanjeeva170902@gmail.com")
        toast.success("Email copied to clipboard!")
        onClose()
      },
    },
  ]

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  )

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1))
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((prev) =>
          prev === 0 ? (filteredItems.length || 1) - 1 : prev - 1
        )
      } else if (e.key === "Enter") {
        e.preventDefault()
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action()
        }
      } else if (e.key === "Escape") {
        e.preventDefault()
        onClose()
      }
    },
    [isOpen, filteredItems, selectedIndex, onClose]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "15vh",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(8px)",
            }}
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "580px",
              background: "var(--bg)",
              border: "1px solid rgba(255, 62, 0, 0.25)",
              borderRadius: "16px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 62, 0, 0.15)",
              overflow: "hidden",
            }}
          >
            {/* Search Input Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "16px 20px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                gap: "12px",
              }}
            >
              <Search size={20} style={{ color: "var(--accent)" }} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search section..."
                autoFocus
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "var(--fg)",
                  fontSize: "1rem",
                  fontFamily: "var(--font-inter)",
                }}
              />
              <button
                onClick={onClose}
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "none",
                  borderRadius: "6px",
                  padding: "4px",
                  color: "var(--fg)",
                  cursor: "pointer",
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Results List */}
            <div style={{ maxHeight: "340px", overflowY: "auto", padding: "10px" }}>
              {filteredItems.length === 0 ? (
                <div
                  style={{
                    padding: "32px",
                    textAlign: "center",
                    color: "#888",
                    fontSize: "0.9rem",
                  }}
                >
                  No matching commands found.
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const Icon = item.icon
                  const isSelected = index === selectedIndex

                  return (
                    <div
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 14px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        background: isSelected
                          ? "rgba(255, 62, 0, 0.12)"
                          : "transparent",
                        border: isSelected
                          ? "1px solid rgba(255, 62, 0, 0.3)"
                          : "1px solid transparent",
                        transition: "all 0.15s ease",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "8px",
                            background: isSelected
                              ? "var(--accent)"
                              : "rgba(255, 255, 255, 0.06)",
                            color: isSelected ? "#0e0e0e" : "var(--fg)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.15s ease",
                          }}
                        >
                          <Icon size={16} />
                        </div>
                        <span
                          style={{
                            fontSize: "0.92rem",
                            fontWeight: isSelected ? 600 : 400,
                            color: "var(--fg)",
                            fontFamily: "var(--font-inter)",
                          }}
                        >
                          {item.title}
                        </span>
                      </div>

                      {item.badge && (
                        <span
                          style={{
                            fontSize: "0.72rem",
                            padding: "2px 8px",
                            borderRadius: "999px",
                            background: "rgba(255, 62, 0, 0.2)",
                            color: "var(--accent)",
                            fontWeight: 700,
                            fontFamily: "var(--font-syne)",
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )
                })
              )}
            </div>

            {/* Footer tips */}
            <div
              style={{
                padding: "10px 16px",
                background: "rgba(0, 0, 0, 0.2)",
                borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.75rem",
                color: "#888",
              }}
            >
              <div style={{ display: "flex", gap: "12px" }}>
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>ESC Close</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Command size={12} /> + K
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
