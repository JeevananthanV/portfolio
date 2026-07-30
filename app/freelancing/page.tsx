export default function FreelancingPage() {
  return (
    <main>
      <section style={{ padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2
            className="reveal-text"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(3rem, 10vw, 5rem)",
              lineHeight: 0.9,
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
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {["Web Development", "Full-Stack Applications", "React.js Frontend", "Node.js Backend", "Salesforce CRM", "Payment Integration"].map((service) => (
                <span
                  key={service}
                  style={{
                    padding: "10px 16px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "4px",
                    fontSize: "0.85rem",
                    color: "#ccc",
                    transition: "all 0.3s ease",
                  }}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

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
              PROCESS
            </h3>
            <div style={{ display: "flex", gap: "0", alignItems: "center" }}>
              {["Brief", "Proposal", "Build", "Launch"].map((step, i) => (
                <div key={step} style={{ flex: 1, textAlign: "center", position: "relative" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "2px solid var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 12px",
                      fontFamily: "var(--font-syne)",
                      fontWeight: 800,
                      fontSize: "0.9rem",
                    }}
                  >
                    {i + 1}
                  </div>
                  <span style={{ fontSize: "0.8rem", color: "#aaa" }}>{step}</span>
                  {i < 3 && (
                    <div
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: "50%",
                        width: "calc(100% - 40px)",
                        height: "2px",
                        background: "rgba(255,255,255,0.1)",
                        zIndex: 0,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <a
              href="mailto:jeevananthanjeeva170902@gmail.com"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                background: "var(--accent)",
                color: "#0e0e0e",
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                borderRadius: "4px",
              }}
            >
              Start a Project
            </a>

            <div
              style={{
                marginTop: "24px",
                fontSize: "0.85rem",
                color: "#666",
                fontFamily: "var(--font-inter)",
              }}
            >
              <a href="tel:+916374230015" style={{ color: "inherit", textDecoration: "none", marginRight: "24px" }}>
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