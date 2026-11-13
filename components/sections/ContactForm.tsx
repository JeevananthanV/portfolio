"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Send, Phone, Mail, MapPin, CheckCircle2, MessageSquare, Clock, ArrowRight } from "lucide-react"
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
      toast.error("Please fill in all required fields.")
      return
    }

    setIsSubmitting(true)

    // Simulate sending dispatch
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast.success("Message dispatched successfully! Jeevananthan will respond shortly.")
      setFormData({ name: "", email: "", subject: "Full-Stack Project", message: "" })
    }, 1200)
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-neutral-950/70 border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <span className="text-[#ff3e00] font-mono tracking-widest text-xs uppercase font-semibold block mb-3">
            [ INITIATE COLLABORATION ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-syne">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-neutral-400 mt-4 text-sm md:text-base leading-relaxed font-sans">
            Have a project in mind, a freelance inquiry, or want to discuss full-time engineering roles? Drop a message below or connect directly.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Contact Cards */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 space-y-5">
              <h3 className="text-base font-bold text-white font-syne">
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:jeevananthanjeeva170902@gmail.com"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#ff3e00]/10 border border-[#ff3e00]/25 flex items-center justify-center text-[#ff3e00] group-hover:scale-105 transition-transform shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider block">Email</span>
                    <span className="text-xs sm:text-sm text-neutral-200 font-medium truncate block group-hover:text-white transition-colors">
                      jeevananthanjeeva170902@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+916374230015"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#ff3e00]/10 border border-[#ff3e00]/25 flex items-center justify-center text-[#ff3e00] group-hover:scale-105 transition-transform shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider block">Phone / WhatsApp</span>
                    <span className="text-xs sm:text-sm text-neutral-200 font-medium group-hover:text-white transition-colors">
                      +91 63742 30015
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#ff3e00]/10 border border-[#ff3e00]/25 flex items-center justify-center text-[#ff3e00] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider block">Location</span>
                    <span className="text-xs sm:text-sm text-neutral-200 font-medium">
                      Salem, Tamil Nadu, India (IST / UTC+5:30)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Status Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#ff3e00]/10 via-neutral-900/60 to-neutral-900 border border-[#ff3e00]/20 flex items-start gap-3.5">
              <span className="w-3 h-3 rounded-full bg-emerald-400 mt-1 shrink-0 animate-pulse shadow-md shadow-emerald-400/50" />
              <div>
                <h4 className="font-bold text-sm text-white font-syne">Current Availability</h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed font-sans">
                  Actively accepting full-time web developer roles, contractual engineering engagements, and bespoke React/Node applications.
                </p>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 mt-2.5">
                  <Clock size={12} className="text-[#ff3e00]" />
                  <span>Response time: Typically within 24 hours</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-900/50 border border-white/5 flex flex-col gap-4 shadow-xl"
            >
              {isSubmitted ? (
                <div className="text-center py-12 px-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white font-syne mb-2">
                    Message Dispatched!
                  </h3>
                  <p className="text-sm text-neutral-400 max-w-md mx-auto mb-6">
                    Thank you for reaching out. Jeevananthan has received your inquiry and will follow up shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs font-syne transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm placeholder-neutral-500 outline-none focus:border-[#ff3e00] focus:ring-1 focus:ring-[#ff3e00] transition-colors font-sans"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm placeholder-neutral-500 outline-none focus:border-[#ff3e00] focus:ring-1 focus:ring-[#ff3e00] transition-colors font-sans"
                      />
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                      Project Nature / Inquiry
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs sm:text-sm outline-none focus:border-[#ff3e00] focus:ring-1 focus:ring-[#ff3e00] transition-colors font-sans cursor-pointer"
                    >
                      <option value="Full-Stack Project">Full-Stack Application Development</option>
                      <option value="React Frontend">React 19 / Next.js Frontend</option>
                      <option value="Node Backend">Node.js / Express API Backend</option>
                      <option value="Freelance Inquiry">Freelance Project Engagement</option>
                      <option value="Job Opportunity">Full-Time Engineering Role Inquiry</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your project requirements, timeline, or engineering goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm placeholder-neutral-500 outline-none focus:border-[#ff3e00] focus:ring-1 focus:ring-[#ff3e00] transition-colors font-sans resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#ff3e00] hover:bg-[#ff3e00]/90 text-black font-extrabold text-xs uppercase tracking-wider font-syne flex items-center justify-center gap-2 shadow-lg shadow-[#ff3e00]/25 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-wait"
                  >
                    {isSubmitting ? (
                      <span>Dispatching Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}
