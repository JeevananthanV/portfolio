"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export function useCountUp(
  target: number,
  duration: number = 1200
): [number, React.RefObject<HTMLElement | null>] {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLElement | null>(null)
  const animated = useRef(false)

  const animate = useCallback(() => {
    if (animated.current) return
    animated.current = true

    const startTime = performance.now()

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [target, duration])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [animate])

  return [count, ref]
}