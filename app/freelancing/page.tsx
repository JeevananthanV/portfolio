import Link from "next/link"

export default function FreelancingPage() {
  return (
    <main>
      <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 100, background: "rgba(14, 14, 14, 0.85)", backdropFilter: "blur(12px)" }}>
        <Link href="/" style={{ textDecoration: "none", color: "var(--fg)", fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.2rem" }}>
          JEEVANANTHAN V
        </Link>
        <Link href="/" style={{ textDecoration: "none", color: "var(--accent)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
          ← Back to Portfolio
        </Link>
      </nav>

      <section style={{ padding: "140px 0 80px" }}>
        <div className="container" style={{ maxWidth: "800px", padding: "0 24px" }}>
          <h2
            className="reveal-text"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
              lineHeight: 0.95,
              marginBottom: "24px",
            }}
          >
            FREELANCING
          </h2>

          <p
            className="reveal-text"
            style={{
              fontSize: "1.1rem",
              color: "#aaa",
              lineHeight: 1.8,
              marginBottom: "48px",
            }}
          >
            I&apos;m currently available for freelance work. Whether you need a
            full-stack application, a React frontend, or backend infrastructure,
            I can help bring your vision to life.
          </p>

          <div style={{ marginBottom: "48px" }}>
            <h3
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.75rem",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#666",
              }}
            >
              SERVICES
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              {["Web Development", "Full-Stack Applications", "React.js Frontend", "Node.js Backend", "Salesforce CRM", "Payment Integration"].map((service) => (
                <div
                  key={service}
                  style={{
                    padding: "14px 20px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "6px",
                    fontSize: "0.85rem",
                    color: "#ccc",
                    background: "rgba(255,255,255,0.02)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "48px" }}>
            <h3
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.75rem",
                marginBottom: "24px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#666",
              }}
            >
              PROCESS
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "24px" }}>
              {["Brief", "Proposal", "Build", "Launch"].map((step, i) => (
                <div key={step} style={{ textAlign: "center", position: "relative", padding: "20px", background: "rgba(255,255,255,0.02)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      border: "2px solid var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 12px",
                      fontFamily: "var(--font-syne)",
                      fontWeight: 800,
                      fontSize: "1rem",
                      color: "var(--accent)",
                    }}
                  >
                    {i + 1}
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "#ddd", fontWeight: 600 }}>{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <a
              href="mailto:jeevananthanjeeva170902@gmail.com"
              style={{
                display: "inline-block",
                padding: "16px 36px",
                background: "var(--accent)",
                color: "#0e0e0e",
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                borderRadius: "6px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              Start a Project
            </a>

            <div
              style={{
                marginTop: "24px",
                fontSize: "0.85rem",
                color: "#888",
                fontFamily: "var(--font-inter)",
                display: "flex",
                justifyContent: "center",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              <a href="tel:+916374230015" style={{ color: "inherit", textDecoration: "none" }}>
                +91 63742 30015
              </a>
              <a href="mailto:jeevananthanjeeva170902@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>
                jeevananthanjeeva170902@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}