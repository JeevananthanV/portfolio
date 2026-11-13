import { Suspense } from "react"
import { projects } from "@/lib/data/projects"
import { notFound } from "next/navigation"
import { KottaiVarahiDetail, NandhiniTexDetail } from "./BespokeLayouts"
import ProjectClient from "./ProjectClient"

export const dynamic = "force-dynamic"

function ClientSections({ project }: { project: (typeof projects)[number] }) {
  if (project.slug === "kottai-varahi") {
    return <KottaiVarahiDetail project={project} />
  }
  if (project.slug === "nandhini-tex") {
    return <NandhiniTexDetail project={project} />
  }
  return <ProjectClient project={project} />
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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientSections project={project} />
    </Suspense>
  )
}
