"use client"

import { useState, useRef, useEffect } from "react"
import { toast } from "sonner"
import { Send, Phone, Mail, MapPin, CheckCircle2, ArrowRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function ContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Stack Project",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      )

      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill out all required fields.")
      return
    }

    setIsSubmitting(true)

    // Simulate direct contact dispatch
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast.success("Message sent successfully! Jeevananthan will respond shortly.")
      setFormData({ name: "", email: "", subject: "Full-Stack Project", message: "" })
    }, 1200)
  }

  return (
    <section id="contact" ref={sectionRef} style={{ padding: "100px 0", background: "#0e0e0e", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container" style={{ maxWidth: "1100px", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <span style={{ color: "var(--accent)", fontFamily: "var(--font-syne)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>
            GET IN TOUCH
          </span>
          <h2 className="huge-type" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginTop: "10px", lineHeight: 1.1 }}>
            LET&apos;S BUILD SOMETHING GREAT
          </h2>
          <p style={{ color: "#888", maxWidth: "600px", margin: "16px auto 0", fontSize: "0.95rem" }}>
            Have a project in mind, a freelance inquiry, or want to discuss full-stack engineering opportunities? Drop a message below!
          </p>
        </div>

        {/* Contact Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", alignItems: "start" }}>
          
          {/* Left Column: Direct Info Cards */}
          <div ref={infoRef} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "28px" }}>
              <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.2rem", color: "#fff", marginBottom: "20px" }}>
                Contact Details
              </h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <a href="mailto:jeevananthanjeeva170902@gmail.com" style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none", color: "inherit" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(255, 62, 0, 0.1)", border: "1px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#666", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email</div>
                    <div style={{ fontSize: "0.95rem", color: "#eee", fontWeight: 500 }}>jeevananthanjeeva170902@gmail.com</div>
                  </div>
                </a>

                <a href="tel:+916374230015" style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none", color: "inherit" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(255, 62, 0, 0.1)", border: "1px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#666", textTransform: "uppercase", letterSpacing: "0.05em" }}>Phone</div>
                    <div style={{ fontSize: "0.95rem", color: "#eee", fontWeight: 500 }}>+91 63742 30015</div>
                  </div>
                </a>

                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(255, 62, 0, 0.1)", border: "1px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#666", textTransform: "uppercase", letterSpacing: "0.05em" }}>Location</div>
                    <div style={{ fontSize: "0.95rem", color: "#eee", fontWeight: 500 }}>Salem, Tamil Nadu, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div style={{ background: "linear-gradient(135deg, rgba(255,62,0,0.1) 0%, rgba(20,20,20,0.5) 100%)", border: "1px solid rgba(255,62,0,0.3)", borderRadius: "12px", padding: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 12px #10b981" }} />
              <div>
                <div style={{ fontSize: "0.9rem", color: "#fff", fontWeight: 600 }}>Currently Available</div>
                <div style={{ fontSize: "0.8rem", color: "#aaa" }}>Accepting full-time roles & freelance projects</div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <CheckCircle2 size={56} color="var(--accent)" style={{ margin: "0 auto 16px" }} />
                <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.4rem", color: "#fff", marginBottom: "8px" }}>
                  Message Received!
                </h3>
                <p style={{ color: "#aaa", fontSize: "0.9rem", marginBottom: "24px" }}>
                  Thank you for reaching out. Jeevananthan will get back to you at {formData.email || "your email"} as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  style={{
                    padding: "10px 24px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "6px",
                    color: "#fff",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#aaa", marginBottom: "8px" }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "8px",
                      color: "#fff",
                      fontSize: "0.9rem",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#aaa", marginBottom: "8px" }}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "8px",
                      color: "#fff",
                      fontSize: "0.9rem",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#aaa", marginBottom: "8px" }}>
                    Project Type / Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "#161616",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "8px",
                      color: "#fff",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  >
                    <option value="Full-Stack Project">Full-Stack Application</option>
                    <option value="React Frontend">React.js Frontend</option>
                    <option value="Node Backend">Node.js / Express Backend</option>
                    <option value="Freelance Inquiry">Freelance Project</option>
                    <option value="Job Opportunity">Full-time Role Inquiry</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#aaa", marginBottom: "8px" }}>
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project goals, timeline, or scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "8px",
                      color: "#fff",
                      fontSize: "0.9rem",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: "14px 28px",
                    background: "var(--accent)",
                    color: "#0e0e0e",
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    border: "none",
                    borderRadius: "8px",
                    cursor: isSubmitting ? "wait" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginTop: "8px",
                    transition: "transform 0.2s ease, opacity 0.2s ease",
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                  {!isSubmitting && <Send size={16} />}
                </button>
              </>
            )}
          </form>

        </div>
      </div>
    </section>
  )
}
