"use client"

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "motion/react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer style={{ padding: "clamp(4rem, 8vw, 5rem) 0 clamp(2.5rem, 5vw, 2.5rem)", background: "#080808", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
      <div className="container" style={{ maxWidth: "1100px" }}>
        
        {/* Big Footer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h2 className="huge-type" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", lineHeight: 0.9, letterSpacing: "-0.04em", color: "rgba(255,255,255,0.9)" }}>
            JEEVANANTHAN <span style={{ color: "var(--accent)" }}>V</span>
          </h2>
          <p style={{ color: "#777", marginTop: "16px", fontSize: "clamp(0.85rem, 2vw, 0.95rem)" }}>
            Building digital solutions with passion, precision, and performance.
          </p>
        </motion.div>

        <div className="divider" style={{ margin: "40px 0", background: "rgba(255,255,255,0.08)" }} />

        {/* Footer Meta Row */}
        <div className="footer-meta-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px", fontSize: "clamp(0.75rem, 2vw, 0.85rem)", color: "#888" }}>
          <div>
            © {new Date().getFullYear()} JEEVANANTHAN V. All rights reserved.
          </div>

          <div className="footer-social" style={{ display: "flex", gap: "clamp(1rem, 3vw, 1.25rem)", alignItems: "center" }}>
            <motion.a
              whileHover={{ y: -2, color: "var(--accent)" }}
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#aaa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", transition: "color 0.2s" }}
            >
              <Linkedin size={16} /> LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ y: -2, color: "var(--accent)" }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#aaa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", transition: "color 0.2s" }}
            >
              <Github size={16} /> GitHub
            </motion.a>
            <motion.a
              whileHover={{ y: -2, color: "var(--accent)" }}
              href="mailto:jeevananthanjeeva170902@gmail.com"
              style={{ color: "#aaa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", transition: "color 0.2s" }}
            >
              <Mail size={16} /> Email
            </motion.a>
          </div>

          {/* Back To Top Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="footer-cta"
            style={{
              padding: "clamp(0.5rem, 1.5vw, 0.625rem) clamp(1rem, 2.5vw, 1.125rem)",
              background: "rgba(255, 62, 0, 0.12)",
              border: "1px solid var(--accent)",
              borderRadius: "999px",
              color: "var(--accent)",
              cursor: "pointer",
              fontSize: "clamp(0.65rem, 1.8vw, 0.75rem)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            Top <ArrowUp size={14} />
          </motion.button>
        </div>

      </div>
    </footer>
  )
}

