"use client"

import { GraduationCap, Award, CheckCircle2, Trophy, BookOpen } from "lucide-react"
import { motion } from "motion/react"

const educationData = {
  degree: "B.E. Computer Science & Engineering",
  college: "K.S. Rangasamy College of Technology",
  period: "2020 – 2024",
  cgpa: "8.02 / 10",
  location: "Tiruchengode, Tamil Nadu",
  school: "Jay Matriculation Hr. Sec. School",
  schoolPeriod: "2018 – 2020",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Web Technology & Frameworks",
    "Operating Systems & Networks",
  ],
}

const certifications = [
  {
    title: "Salesforce Certified Platform Developer",
    issuer: "Salesforce Trailhead",
    tag: "Enterprise Apex & Triggers",
    verified: true,
  },
  {
    title: "NPTEL Internet of Things (IoT)",
    issuer: "IIT Kharagpur / Ministry of Education",
    tag: "Hardware Protocols & Sensors",
    verified: true,
  },
  {
    title: "NASSCOM FutureSkills Prime",
    issuer: "Government of India Initiative",
    tag: "Emerging Tech Competencies",
    verified: true,
  },
  {
    title: "Algorithm Arena — 1st Place Winner",
    issuer: "State Level Inter-Collegiate Coding Contest",
    tag: "Competitive DSA Solving",
    verified: true,
    award: true,
  },
]

export default function EducationCerts() {
  return (
    <section id="education" className="py-20 md:py-32 relative bg-neutral-950 border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <span className="text-[#ff3e00] font-mono tracking-widest text-xs uppercase font-semibold block mb-3">
            [ ACADEMICS & CREDENTIALS ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-syne">
            Education & Certifications
          </h2>
          <p className="text-neutral-400 mt-4 text-sm md:text-base leading-relaxed font-sans">
            Rigorous engineering foundation coupled with continuous professional skill accreditation.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Higher Education Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5 text-[#ff3e00]">
                  <GraduationCap size={22} />
                  <span className="text-xs uppercase tracking-widest font-mono font-bold text-white">
                    HIGHER EDUCATION
                  </span>
                </div>
                <span className="text-xs font-mono text-[#ff3e00] bg-[#ff3e00]/10 px-2.5 py-0.5 rounded-full border border-[#ff3e00]/20">
                  {educationData.period}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-syne mt-2">
                {educationData.degree}
              </h3>
              <p className="text-sm text-neutral-300 font-sans mt-1">
                {educationData.college}
              </p>
              <p className="text-xs text-neutral-500 font-mono mt-0.5">
                {educationData.location}
              </p>

              {/* Coursework Modules */}
              <div className="mt-6 pt-5 border-t border-white/5">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium mb-3">
                  <BookOpen size={13} className="text-[#ff3e00]" />
                  <span>Key Coursework & Domains:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {educationData.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-neutral-300 text-xs font-sans border border-white/5"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prior Schooling */}
              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <div>
                  <span className="text-neutral-500 text-[10px] font-mono block">Higher Secondary (HSC)</span>
                  <span className="text-neutral-300 font-medium">{educationData.school}</span>
                </div>
                <span className="text-neutral-500 font-mono text-[11px]">{educationData.schoolPeriod}</span>
              </div>
            </div>

            {/* Score Banner */}
            <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between bg-white/[0.02] p-4 rounded-xl">
              <div>
                <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider block">
                  Cumulative Academic Score
                </span>
                <span className="text-xs text-neutral-400">Graduated with First Class</span>
              </div>
              <div className="text-2xl font-extrabold text-white font-syne">
                CGPA <span className="text-[#ff3e00]">8.02</span>
              </div>
            </div>

          </div>

          {/* Certifications & Awards Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5 text-[#ff3e00]">
                  <Award size={22} />
                  <span className="text-xs uppercase tracking-widest font-mono font-bold text-white">
                    INDUSTRY CERTIFICATIONS
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Verified Credentials
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-syne mt-2 mb-4">
                Accreditations & Honors
              </h3>

              {/* Certifications List */}
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className={`p-3.5 rounded-xl border transition-all duration-200 flex items-start justify-between gap-3 ${
                      cert.award
                        ? "bg-[#ff3e00]/5 border-[#ff3e00]/25"
                        : "bg-white/[0.02] border-white/5 hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      {cert.award ? (
                        <Trophy size={16} className="text-amber-400 mt-0.5 shrink-0" />
                      ) : (
                        <CheckCircle2 size={16} className="text-[#ff3e00] mt-0.5 shrink-0" />
                      )}
                      <div>
                        <div className="font-bold text-xs sm:text-sm text-white font-syne leading-snug">
                          {cert.title}
                        </div>
                        <div className="text-[11px] text-neutral-400 mt-0.5 font-sans">
                          {cert.issuer}
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5 shrink-0 self-start">
                      {cert.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Continuous Learning Callout */}
            <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-2 text-xs text-neutral-400 font-sans">
              <span className="w-2 h-2 rounded-full bg-[#ff3e00]" />
              <span>Continuously upskilling in Next.js Server Components, Turbopack, and Distributed Systems.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
