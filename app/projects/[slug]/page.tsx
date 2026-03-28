import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { regionalProjects } from "@/components/home/data"
import { ProjectDetailContent } from "@/components/projects/project-detail-content"
import { ProjectSchemaScripts } from "@/components/seo/schema-scripts"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return regionalProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = regionalProjects.find((item) => item.slug === slug)

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    }
  }

  return {
    title: `${project.title.en} | ${project.title.es}`,
    description: `${project.summary.en} ${project.summary.es}`,
    alternates: {
      canonical: `/projects/${project.slug}`,
      languages: {
        es: `/projects/${project.slug}`,
        en: `/projects/${project.slug}`,
        "x-default": `/projects/${project.slug}`,
      },
    },
    openGraph: {
      title: `${project.title.en} | ${project.title.es}`,
      description: `${project.summary.en} ${project.summary.es}`,
      url: `/projects/${project.slug}`,
    },
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = regionalProjects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container">
      <ProjectSchemaScripts
        code={project.code}
        country={project.country}
        slug={project.slug}
        title={project.title.en}
        summary={`${project.summary.es} ${project.summary.en}`}
      />
      <ProjectDetailContent project={project} />
    </div>
  )
}
