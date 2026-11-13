"use client"

import { motion } from "motion/react"

const techKeywords = [
  "REACT 19",
  "NODE.JS",
  "EXPRESS REST APIS",
  "MYSQL SCHEMA",
  "POSTGRESQL",
  "TYPESCRIPT",
  "NEXT.JS",
  "SALESFORCE APEX",
  "RAZORPAY INTEGRATION",
  "JWT SECURITY",
  "TAILWIND CSS",
  "CI/CD PIPELINES",
]

export default function MarqueeSkills() {
  return (
    <div className="relative overflow-hidden py-6 border-y border-white/5 bg-neutral-950/80">
      <div className="marquee-inner flex items-center">
        {/* Double array for seamless loop */}
        {[...techKeywords, ...techKeywords].map((kw, i) => (
          <span
            key={i}
            className="huge-type outline-text text-2xl sm:text-4xl font-extrabold mr-12 sm:mr-16 tracking-wider cursor-default select-none hover:text-[#ff3e00] hover:!-webkit-text-stroke-0 transition-colors duration-200"
          >
            {kw}
          </span>
        ))}
      </div>
    </div>
  )
}
