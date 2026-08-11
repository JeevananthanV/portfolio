import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Freelancing | Jeevananthan V",
  description:
    "Available for freelance full-stack development projects in Salem, Tamil Nadu. Specializing in React.js, Node.js, and scalable web applications.",
  keywords: [
    "Freelance Developer Salem",
    "Web Developer Salem Tamil Nadu",
    "React Freelancer India",
    "Node.js Freelance Salem",
    "Full Stack Freelancer Tamil Nadu",
  ],
  openGraph: {
    title: "Freelancing Services | Jeevananthan V",
    description:
      "Available for freelance full-stack development projects in Salem, Tamil Nadu.",
    url: "https://jeevananthan.dev/freelancing",
    type: "website",
  },
}

export default function FreelancingPage() {
  return (
    <main>
      <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", padding: "clamp(0.75rem, 2vw, 1.25rem) clamp(1.5rem, 3vw, 2.5rem)", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 100, background: "rgba(14, 14, 14, 0.85)", backdropFilter: "blur(12px)" }}>
        <Link href="/" style={{ textDecoration: "none", color: "var(--fg)", fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(0.9rem, 2vw, 1.2rem)" }}>
          JEEVANANTHAN V
        </Link>
        <Link href="/" style={{ textDecoration: "none", color: "var(--accent)", fontSize: "clamp(0.7rem, 1.8vw, 0.85rem)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
          ← Back to Portfolio
        </Link>
      </nav>

      <section style={{ padding: "clamp(4rem, 8vw, 7.5rem) 0 clamp(3rem, 7vw, 5rem)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2
            className="reveal-text"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              lineHeight: 0.95,
              marginBottom: "24px",
            }}
          >
            FREELANCING
          </h2>

          <p
            className="reveal-text"
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.1rem)",
              color: "#aaa",
              lineHeight: 1.8,
              marginBottom: "clamp(3rem, 6vw, 4rem)",
            }}
          >
            I&apos;m currently available for freelance work. Whether you need a
            full-stack application, a React frontend, or backend infrastructure,
            I can help bring your vision to life.
          </p>

          <div style={{ marginBottom: "clamp(3rem, 6vw, 4rem)" }}>
            <h3
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(0.65rem, 1.8vw, 0.75rem)",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#666",
              }}
            >
              SERVICES
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "clamp(0.5rem, 1.5vw, 0.75rem)" }}>
              {["Web Development", "Full-Stack Applications", "React.js Frontend", "Node.js Backend", "Salesforce CRM", "Payment Integration"].map((service) => (
                <div
                  key={service}
                  style={{
                    padding: "clamp(0.6rem, 1.5vw, 0.875rem) clamp(0.9rem, 2vw, 1.25rem)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "6px",
                    fontSize: "clamp(0.7rem, 1.8vw, 0.85rem)",
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

          <div style={{ marginBottom: "clamp(3rem, 6vw, 4rem)" }}>
            <h3
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(0.65rem, 1.8vw, 0.75rem)",
                marginBottom: "24px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#666",
              }}
            >
              PROCESS
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "clamp(1rem, 3vw, 1.5rem)" }}>
              {["Brief", "Proposal", "Build", "Launch"].map((step, i) => (
                <div key={step} style={{ textAlign: "center", position: "relative", padding: "clamp(1rem, 2.5vw, 1.25rem)", background: "rgba(255,255,255,0.02)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div
                    style={{
                      width: "clamp(40px, 10vw, 44px)",
                      height: "clamp(40px, 10vw, 44px)",
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
                  <span style={{ fontSize: "clamp(0.7rem, 2vw, 0.85rem)", color: "#ddd", fontWeight: 600 }}>{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "clamp(3rem, 6vw, 4rem)" }}>
            <a
              href="mailto:jeevananthanjeeva170902@gmail.com"
              style={{
                display: "inline-block",
                padding: "clamp(0.7rem, 2vw, 0.875rem) clamp(1.75rem, 4vw, 2.25rem)",
                background: "var(--accent)",
                color: "#0e0e0e",
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(0.7rem, 1.8vw, 0.85rem)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                borderRadius: "6px",
              }}
            >
              Start a Project
            </a>

            <div
              style={{
                marginTop: "24px",
                fontSize: "clamp(0.75rem, 1.8vw, 0.85rem)",
                color: "#888",
                fontFamily: "var(--font-inter)",
                display: "flex",
                justifyContent: "center",
                gap: "clamp(1rem, 3vw, 1.5rem)",
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
