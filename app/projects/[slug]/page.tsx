import { Suspense } from "react"
import { projects } from "@/lib/data/projects"
import { notFound } from "next/navigation"
import ProjectClient from "./ProjectClient"

export const dynamic = "force-dynamic"

function ClientSections({ project }: { project: (typeof projects)[number] }) {
  return <ProjectClient project={project} />
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientSections project={project} />
    </Suspense>
  )
}
