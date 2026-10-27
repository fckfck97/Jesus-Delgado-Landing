import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { regionalProjects } from "@/components/home/data"
import { ProjectDetailContent } from "@/components/projects/project-detail-content"
import { ProjectSchemaScripts } from "@/components/seo/schema-scripts"
import { getAlternates } from "@/lib/i18n"

type Props = { params: Promise<{ lang: string; slug: string }> }

export function generateStaticParams() {
  return regionalProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params
  const project = regionalProjects.find((p) => p.slug === slug)
  if (!project) return { title: "Proyecto no encontrado" }

  const isEs = lang === "es"
  const path = `/projects/${slug}`

  return {
    title: isEs ? project.title.es : project.title.en,
    description: isEs ? project.summary.es : project.summary.en,
    alternates: getAlternates(lang, path),
    openGraph: {
      locale: isEs ? "es_CO" : "en_US",
      url: `/${lang}${path}`,
      type: "article",
      title: isEs ? project.title.es : project.title.en,
      description: isEs ? project.summary.es : project.summary.en,
      images: [{ url: project.image, alt: isEs ? project.title.es : project.title.en }],
    },
    twitter: {
      card: "summary_large_image",
      title: isEs ? project.title.es : project.title.en,
      description: isEs ? project.summary.es : project.summary.en,
      images: [project.image],
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { lang, slug } = await params
  const project = regionalProjects.find((p) => p.slug === slug)
  if (!project) notFound()

  const isEs = lang === "es"

  return (
    <div className="container">
      <ProjectSchemaScripts
        code={project.code}
        country={project.country}
        image={project.image}
        lang={lang}
        slug={project.slug}
        title={isEs ? project.title.es : project.title.en}
        summary={isEs ? project.summary.es : project.summary.en}
      />
      <ProjectDetailContent project={project} />
    </div>
  )
}
