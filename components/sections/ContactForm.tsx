"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Send, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Stack Project",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
    <section id="contact" style={{ padding: "clamp(4rem, 8vw, 7.5rem) 0", background: "#0e0e0e", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
      {/* Ambient Cyber Background Image Overlay */}
      <img
        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop"
        alt="Cyber background"
        referrerPolicy="no-referrer"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.12,
          filter: "grayscale(1) contrast(1.2)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, transparent 20%, #0e0e0e 90%)",
          pointerEvents: "none",
        }}
      />
      <div className="container contact-container" style={{ maxWidth: "1100px", position: "relative", zIndex: 10 }}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "60px", textAlign: "center" }}
        >
          <span style={{ color: "var(--accent)", fontFamily: "var(--font-syne)", fontSize: "clamp(0.7rem, 2vw, 0.8rem)", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>
            GET IN TOUCH
          </span>
          <h2 className="huge-type" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginTop: "10px", lineHeight: 1.1 }}>
            LET&apos;S BUILD SOMETHING GREAT
          </h2>
          <p style={{ color: "#888", maxWidth: "600px", margin: "16px auto 0", fontSize: "clamp(0.85rem, 2vw, 0.95rem)" }}>
            Have a project in mind, a freelance inquiry, or want to discuss full-stack engineering opportunities? Drop a message below!
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="contact-layout" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(2rem, 5vw, 3rem)", alignItems: "start" }}>
          
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            
            <div className="contact-info-card" style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
              <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "#fff", marginBottom: "24px", fontWeight: 700 }}>
                Contact Details
              </h3>
              
              <div className="contact-details" style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                <motion.a
                  whileHover={{ x: 6 }}
                  href="mailto:jeevananthanjeeva170902@gmail.com"
                  style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none", color: "inherit" }}
                >
                <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: "rgba(255, 62, 0, 0.1)", border: "1px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "clamp(0.65rem, 1.8vw, 0.75rem)", color: "#777", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>Email</div>
                  <div style={{ fontSize: "clamp(0.8rem, 2vw, 0.95rem)", color: "#eee", fontWeight: 500 }}>jeevananthanjeeva170902@gmail.com</div>
                </div>
                </motion.a>

                  <motion.a
                   whileHover={{ x: 6 }}
                   href="tel:+916374230015"
                   className="contact-link"
                  style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none", color: "inherit" }}
                >
                  <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: "rgba(255, 62, 0, 0.1)", border: "1px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#777", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>Phone</div>
                    <div style={{ fontSize: "0.95rem", color: "#eee", fontWeight: 500 }}>+91 63742 30015</div>
                  </div>
                </motion.a>

                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: "rgba(255, 62, 0, 0.1)", border: "1px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#777", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>Location</div>
                    <div style={{ fontSize: "0.95rem", color: "#eee", fontWeight: 500 }}>Salem, Tamil Nadu, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{ background: "linear-gradient(135deg, rgba(255,62,0,0.12) 0%, rgba(20,20,20,0.6) 100%)", border: "1px solid rgba(255,62,0,0.35)", borderRadius: "16px", padding: "24px", display: "flex", alignItems: "center", gap: "16px" }}
            >
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 12px #10b981", flexShrink: 0 }} />
              <div>
                   <div style={{ fontSize: "clamp(0.8rem, 2vw, 0.92rem)", color: "#fff", fontWeight: 700 }}>Currently Available</div>
                   <div style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.82rem)", color: "#aaa" }}>Accepting full-time roles & freelance contracts</div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            onSubmit={handleSubmit}
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            {isSubmitted ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ textAlign: "center", padding: "40px 20px" }}>
                <CheckCircle2 size={56} color="var(--accent)" style={{ margin: "0 auto 16px" }} />
                <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.4rem", color: "#fff", marginBottom: "8px", fontWeight: 700 }}>
                  Message Received!
                </h3>
                <p style={{ color: "#aaa", fontSize: "0.9rem", marginBottom: "24px" }}>
                  Thank you for reaching out. Jeevananthan will get back to you shortly.
                </p>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  style={{
                    padding: "10px 24px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "8px",
                    color: "#fff",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#aaa", marginBottom: "8px", fontWeight: 600 }}>
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
                  <label style={{ display: "block", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#aaa", marginBottom: "8px", fontWeight: 600 }}>
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
                  <label style={{ display: "block", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#aaa", marginBottom: "8px", fontWeight: 600 }}>
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
                  <label style={{ display: "block", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#aaa", marginBottom: "8px", fontWeight: 600 }}>
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

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
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
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                  {!isSubmitting && <Send size={16} />}
                </motion.button>
              </>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  )
}

