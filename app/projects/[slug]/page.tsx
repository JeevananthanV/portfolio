import { Suspense } from "react"
import { projects } from "@/lib/data/projects"
import { notFound } from "next/navigation"
import { KottaiVarahiDetail, NandhiniTexDetail, WefluenceDetail } from "./BespokeLayouts"
import ProjectClient from "./ProjectClient"

export const dynamic = "force-dynamic"

function ClientSections({ 
  project, 
  prevProject, 
  nextProject 
}: { 
  project: (typeof projects)[number]
  prevProject?: (typeof projects)[number]
  nextProject?: (typeof projects)[number]
}) {
  if (project.slug === "kottai-varahi") {
    return <KottaiVarahiDetail project={project} prevProject={prevProject} nextProject={nextProject} />
  }
  if (project.slug === "nandhini-tex") {
    return <NandhiniTexDetail project={project} prevProject={prevProject} nextProject={nextProject} />
  }
  if (project.slug === "wefluence") {
    return <WefluenceDetail project={project} prevProject={prevProject} nextProject={nextProject} />
  }
  return <ProjectClient project={project} prevProject={prevProject} nextProject={nextProject} />
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1]
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0]

  return (
    <Suspense fallback={<div className="p-10 text-neutral-400">Loading...</div>}>
      <ClientSections project={project} prevProject={prevProject} nextProject={nextProject} />
    </Suspense>
  )
}
