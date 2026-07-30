"use client"

import { useRef, useEffect, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link"

export default function Hero() {
  const nameRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const pillRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const blobRef = useRef<HTMLDivElement>(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none) and (pointer: coarse)").matches)
  }, [])

  useGSAP(
    () => {
      if (isTouch) return

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(
        nameRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 0.9 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.3"
        )
        .fromTo(
          contactRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.3"
        )

      gsap.fromTo(
        pillRef.current,
        { scale: 0.8 },
        { scale: 1, duration: 0.4, ease: "back.out(1.7)" }
      )

      const pill = pillRef.current
      if (pill) {
        gsap.to(pill, {
          opacity: 0.6,
          duration: 1,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        })
      }

      if (!isTouch && nameRef.current) {
        const nameEl = nameRef.current
        const xTo = gsap.quickTo(nameEl, "x", { duration: 0.8, ease: "power2.out" })
        const yTo = gsap.quickTo(nameEl, "y", { duration: 0.8, ease: "power2.out" })
        const sTo = gsap.quickTo(nameEl, "scale", { duration: 0.8, ease: "power2.out" })

        const handleMouseMove = (e: MouseEvent) => {
          const x = (e.clientX / window.innerWidth - 0.5) * 20
          const y = (e.clientY / window.innerHeight - 0.5) * 20
          xTo(x)
          yTo(y)
          sTo(1.02)
        }

        const handleMouseLeave = () => {
          xTo(0)
          yTo(0)
          sTo(1)
        }

        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseleave", handleMouseLeave)

        return () => {
          document.removeEventListener("mousemove", handleMouseMove)
          document.removeEventListener("mouseleave", handleMouseLeave)
        }
      }
    },
    { scope: nameRef }
  )

  return (
    <>
      <div className="blob" ref={blobRef} aria-hidden="true" />

      <nav>
        <div className="logo">JEEVANANTHAN V</div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <Link href="/freelancing">Freelance</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section id="hero" className="relative">
        <img
          src="/man_mountains_clouds_118031_1366x768.jpg"
          alt="Background"
          className="hero-img"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            filter: "grayscale(1) contrast(1.1)",
            opacity: 0.3,
          }}
        />

        <div className="container">
          <div className="hero-title-container" ref={nameRef}>
            <h1 className="huge-type" style={{ fontFamily: "var(--font-syne)" }}>
              JEEVANANTHAN V
            </h1>
          </div>

          <div ref={subtitleRef} style={{ opacity: 0 }}>
            <p
              style={{
                fontSize: "1.25rem",
                fontWeight: 300,
                color: "#888",
                fontFamily: "var(--font-inter)",
              }}
            >
              Full Stack Developer
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#666",
                fontFamily: "var(--font-inter)",
                marginTop: "8px",
              }}
            >
              Salem, Tamil Nadu, India
            </p>
          </div>

          <div ref={pillRef} style={{ opacity: 0, marginTop: "24px" }}>
            <span
              style={{
                display: "inline-block",
                padding: "6px 16px",
                border: "1px solid var(--accent)",
                color: "var(--accent)",
                fontFamily: "var(--font-inter)",
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                borderRadius: "999px",
              }}
            >
              OPEN TO WORK
            </span>
          </div>

          <div ref={contactRef} style={{ opacity: 0, marginTop: "32px" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", color: "#888" }}>
              +91 63742 30015
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", color: "#888" }}>
              jeevananthanjeeva170902@gmail.com
            </p>
          </div>
        </div>
      </section>
    </>
  )
}