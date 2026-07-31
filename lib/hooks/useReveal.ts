"use client"

import { useEffect, useRef, useState } from "react"

export function useReveal(
  ref: React.RefObject<HTMLElement | null>,
  options: { threshold?: number; rootMargin?: string } = {}
) {
  const { threshold = 0.15, rootMargin = "0px 0px -40px 0px" } = options
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      element.classList.add("active")
      element.querySelectorAll(".reveal-text").forEach((el) => el.classList.add("active"))
      setIsRevealed(true)
      return
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
            entry.target.querySelectorAll(".reveal-text").forEach((el) => el.classList.add("active"))
            setIsRevealed(true)
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    observerRef.current.observe(element)

    return () => {
      observerRef.current?.disconnect()
    }
  }, [ref, threshold, rootMargin])

  return isRevealed
}
