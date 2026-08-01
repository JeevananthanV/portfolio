"use client"

import { motion } from "motion/react"

const techKeywords = [
  "REACT 19",
  "NODE.JS",
  "EXPRESS.JS",
  "MYSQL",
  "POSTGRESQL",
  "TYPESCRIPT",
  "NEXT.JS",
  "SALESFORCE APEX",
  "REST APIS",
  "PAYMENT GATEWAYS",
  "TAILWIND CSS",
  "CI/CD PIPELINES",
]

export default function MarqueeSkills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
       className="scrolling-marquee"
       style={{ position: "relative", overflow: "hidden", padding: "clamp(1.5rem, 4vw, 2rem) 0" }}
     >
      <div className="marquee-inner">
        {techKeywords.map((kw, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.1, color: "var(--accent)" }}
            className="huge-type outline-text"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginRight: "60px", cursor: "default", display: "inline-block" }}
          >
            {kw}
          </motion.span>
        ))}
        {techKeywords.map((kw, i) => (
          <motion.span
            key={i + techKeywords.length}
            whileHover={{ scale: 1.1, color: "var(--accent)" }}
            className="huge-type outline-text"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginRight: "60px", cursor: "default", display: "inline-block" }}
          >
            {kw}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
