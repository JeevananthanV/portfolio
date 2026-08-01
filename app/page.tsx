import { Suspense } from "react"
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

export const dynamic = "force-dynamic"

function ClientSections() {
  return (
    <>
      <Preloader />
      <Hero />
      <About />
      <MarqueeSkills />
      <ExperienceTimeline />
      <ProjectsGrid />
      <SkillsChips />
      <EducationCerts />
      <ContactForm />
      <Footer />
      <FloatingDock />
    </>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<div style={{ padding: "40px", color: "#aaa" }}>Loading...</div>}>
      <ClientSections />
    </Suspense>
  )
}
