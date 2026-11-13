"use client"

import { ArrowUp, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-16 md:py-20 bg-neutral-950 border-t border-white/10 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5 items-start">
          
          {/* Brand & Value statement */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff3e00] to-amber-600 flex items-center justify-center font-extrabold text-black text-sm tracking-tighter font-syne">
                JV
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight font-syne group-hover:text-[#ff3e00] transition-colors">
                JEEVANANTHAN <span className="text-[#ff3e00]">V</span>
              </span>
            </Link>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-md font-sans">
              Full Stack Web Developer crafting scalable digital architectures with React 19, Node.js, Express, MySQL, and Salesforce Apex.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
              <MapPin size={12} className="text-[#ff3e00]" />
              <span>Salem, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-sans text-neutral-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Background</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Experience Timeline</a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Skills & Tooling</a>
              </li>
              <li>
                <Link href="/freelancing" className="hover:text-[#ff3e00] transition-colors">Freelance Services</Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold mb-4">
              Professional Links
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-sans">
              <a
                href="https://in.linkedin.com/in/jeevananthan-vediyappan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <Linkedin size={14} className="text-[#ff3e00]" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/JeevananthanV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <Github size={14} className="text-[#ff3e00]" />
                <span>GitHub Repositories</span>
              </a>
              <a
                href="mailto:jeevananthanjeeva170902@gmail.com"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-[#ff3e00]" />
                <span>Direct Email</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-sans">
          <div>
            © {new Date().getFullYear()} Jeevananthan V. Built with Next.js, Tailwind CSS & Motion.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/5 text-xs font-mono transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={12} className="text-[#ff3e00]" />
          </button>
        </div>

      </div>
    </footer>
  )
}
