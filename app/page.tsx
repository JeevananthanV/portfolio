import { Suspense } from "react"
import { Metadata } from "next"
import Preloader from "@/components/Preloader"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import ExperienceTimeline from "@/components/sections/ExperienceTimeline"
import ProjectsShowcase from "@/components/sections/ProjectsShowcase"
import SkillsChips from "@/components/sections/SkillsChips"
import MarqueeSkills from "@/components/sections/MarqueeSkills"
import EducationCerts from "@/components/sections/EducationCerts"
import { Awards1 } from "@/components/awards1"
import ContactForm from "@/components/sections/ContactForm"
import Footer from "@/components/sections/Footer"
import FloatingDock from "@/components/ui/FloatingDock"

export const metadata: Metadata = {
  title: "Jeevananthan V | Full Stack Developer Salem, Tamil Nadu",
  description:
    "Full Stack Developer based in Salem, Tamil Nadu — building scalable digital systems and creative web applications with React 19, Node.js, MySQL, and Salesforce Apex.",
  openGraph: {
    title: "Jeevananthan V | Full Stack Developer Salem",
    description:
      "Full Stack Developer in Salem, Tamil Nadu — React 19, Node.js, Express, MySQL, Salesforce Apex.",
    url: "https://jeevananthan.dev",
    type: "website",
  },
}

export default function Home() {
  return (
    <Suspense fallback={<div className="p-10 text-neutral-400">Loading...</div>}>
      <Preloader />
      <main className="relative z-10">
        <Hero />
        <About />
        <ExperienceTimeline />
        <ProjectsShowcase />
        <SkillsChips />
        <MarqueeSkills />
        <EducationCerts />
        <Awards1 />
        <ContactForm />
        <Footer />
      </main>
      <FloatingDock />
    </Suspense>
  )
}
