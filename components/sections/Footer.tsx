"use client"

import { ArrowUp, Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer style={{ padding: "80px 0 40px", background: "#080808", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
      <div className="container" style={{ maxWidth: "1100px", padding: "0 24px" }}>
        
        {/* Big Footer Banner */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 className="huge-type" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", lineHeight: 0.9, letterSpacing: "-0.04em", color: "rgba(255,255,255,0.9)" }}>
            JEEVANANTHAN <span style={{ color: "var(--accent)" }}>V</span>
          </h2>
          <p style={{ color: "#777", marginTop: "16px", fontSize: "0.95rem" }}>
            Building digital solutions with passion, precision, and performance.
          </p>
        </div>

        <div className="divider" style={{ margin: "40px 0", background: "rgba(255,255,255,0.08)" }} />

        {/* Footer Meta Row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px", fontSize: "0.85rem", color: "#888" }}>
          <div>
            © {new Date().getFullYear()} JEEVANANTHAN V. All rights reserved.
          </div>

          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#aaa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", transition: "color 0.2s" }}
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#aaa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", transition: "color 0.2s" }}
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="mailto:jeevananthanjeeva170902@gmail.com"
              style={{ color: "#aaa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", transition: "color 0.2s" }}
            >
              <Mail size={16} /> Email
            </a>
          </div>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            style={{
              padding: "10px 16px",
              background: "rgba(255, 62, 0, 0.1)",
              border: "1px solid var(--accent)",
              borderRadius: "999px",
              color: "var(--accent)",
              cursor: "pointer",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "all 0.3s ease",
            }}
          >
            Top <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  )
}
