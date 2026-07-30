export default function Footer() {
  return (
    <footer id="contact">
      <div className="container" style={{ maxWidth: "900px", textAlign: "center" }}>
        <div className="footer-cta huge-type" style={{ fontFamily: "var(--font-syne)" }}>
          <a href="mailto:jeevananthanjeeva170902@gmail.com">LET&apos;S — WORK</a>
        </div>

        <div className="divider" />

        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-inter)", fontSize: "0.75rem", textTransform: "uppercase", color: "#555", flexWrap: "wrap", gap: "20px" }}>
          <div>Salem, Tamil Nadu, India</div>
          <div>+91 63742 30015</div>
          <div>jeevananthanjeeva170902@gmail.com</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px", fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "#555", flexWrap: "wrap", gap: "20px" }}>
          <div>© 2026 JEEVANANTHAN V</div>
          <div>
            <a href="https://www.linkedin.com" style={{ color: "inherit", marginRight: "20px", textDecoration: "none" }}>LinkedIn</a>
            <a href="https://github.com" style={{ color: "inherit", textDecoration: "none" }}>GitHub</a>
          </div>
          <div>PORTFOLIO</div>
        </div>
      </div>
    </footer>
  )
}