import { Suspense } from "react"
import { Metadata } from "next"
import Preloader from "@/components/Preloader"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import MarqueeSkills from "@/components/sections/MarqueeSkills"
import ExperienceTimeline from "@/components/sections/ExperienceTimeline"
import ProjectsGrid from "@/components/sections/ProjectsGrid"
import SkillsChips from "@/components/sections/SkillsChips"
import EducationCerts from "@/components/sections/EducationCerts"
import ContactForm from "@/components/sections/ContactForm"
import Footer from "@/components/sections/Footer"
import FloatingDock from "@/components/ui/FloatingDock"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Full Stack Developer based in Salem, Tamil Nadu — building digital products and creative experiences with React.js, Node.js, and modern web technologies.",
  openGraph: {
    title: "Jeevananthan V | Full Stack Developer Salem",
    description:
      "Full Stack Developer in Salem, Tamil Nadu — React, Node.js, MySQL, Salesforce Apex.",
    url: "https://jeevananthan.dev",
    type: "website",
  },
}

export default function Home() {
  return (
    <Suspense fallback={<div style={{ padding: "40px", color: "#aaa" }}>Loading...</div>}>
      <Preloader />
      <main>
        <Hero />
        <About />
        <MarqueeSkills />
        <ExperienceTimeline />
        <ProjectsGrid />
        <SkillsChips />
        <EducationCerts />
        <ContactForm />
        <Footer />
      </main>
      <FloatingDock />
    </Suspense>
  )
}
