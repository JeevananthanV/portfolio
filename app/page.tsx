import { Suspense } from "react"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import MarqueeSkills from "@/components/sections/MarqueeSkills"
import ExperienceTimeline from "@/components/sections/ExperienceTimeline"
import ProjectsGrid from "@/components/sections/ProjectsGrid"
import SkillsChips from "@/components/sections/SkillsChips"
import EducationCerts from "@/components/sections/EducationCerts"
import Footer from "@/components/sections/Footer"

export const dynamic = "force-dynamic"

function ClientSections() {
  return (
    <>
      <Hero />
      <About />
      <MarqueeSkills />
      <ExperienceTimeline />
      <ProjectsGrid />
      <SkillsChips />
      <EducationCerts />
      <Footer />
    </>
  )
}

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ClientSections />
      </Suspense>
    </>
  )
}