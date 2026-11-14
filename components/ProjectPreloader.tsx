"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

interface ProjectPreloaderProps {
  title: string
  accentColor: string
}

export default function ProjectPreloader({ title, accentColor }: ProjectPreloaderProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Snappy transition (250ms) to prevent perceived sluggishness
    const timer = setTimeout(() => {
      setLoading(false)
    }, 280)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 z-50 bg-[#09090b] flex flex-col items-center justify-center p-6 text-white"
        >
          <div className="text-center max-w-sm w-full">
            <div className="font-syne font-extrabold text-2xl tracking-tight mb-2 uppercase">
              {title}
            </div>
            <p className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest mb-4">
              Loading Architecture Specs...
            </p>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.25, ease: "linear" }}
                className="h-full rounded-full"
                style={{ backgroundColor: accentColor || "#ff3e00" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
