import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { regionalProjects } from "@/components/home/data"
import { ProjectSchemaScripts } from "@/components/seo/schema-scripts"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

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

function renderBilingualText(spanishText: string, englishText: string) {
  return `${spanishText} ${englishText}`
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
        summary={renderBilingualText(project.summary.es, project.summary.en)}
      />
      <section className="project-detail">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/#projects">Projects</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{project.title.en}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <p className="project-detail-eyebrow">{project.code}</p>
        <h1 className="project-detail-title">
          {project.title.en} / {project.title.es}
        </h1>
        <p className="project-detail-copy">{renderBilingualText(project.overview.es, project.overview.en)}</p>
        <div className="window-frame project-detail-media">
          <div className="window-header">
            <span>{project.country.toUpperCase()}_PROJECT.JPG</span>
            <div className="window-controls">
              <button className="window-btn" aria-hidden="true" tabIndex={-1}>
                <span className="minimize-icon"></span>
              </button>
              <button className="window-btn" aria-hidden="true" tabIndex={-1}>
                <span className="maximize-icon"></span>
              </button>
              <button className="window-btn window-close" aria-hidden="true" tabIndex={-1}>
                <span className="close-icon"></span>
              </button>
            </div>
          </div>
          <Image
            src={project.image}
            alt={`${project.title.en}. ${project.summary.en} ${project.summary.es}`}
            className="project-img project-detail-image"
            width={1200}
            height={800}
            loading="lazy"
          />
        </div>
        <div className="project-detail-grid">
          <div className="project-card">
            <div className="project-info">
              <span className="project-tag">
                {project.tag.en} / {project.tag.es}
              </span>
              <h2 className="project-title">Summary / Resumen</h2>
              <p className="project-copy">{renderBilingualText(project.summary.es, project.summary.en)}</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-info">
              <span className="project-tag">#HIGHLIGHTS</span>
              <h2 className="project-title">Approach / Enfoque</h2>
              <p className="project-copy">{renderBilingualText(project.approach.es, project.approach.en)}</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-info">
              <span className="project-tag">#OUTCOMES</span>
              <h2 className="project-title">Outcomes / Resultados</h2>
              <p className="project-copy">{renderBilingualText(project.outcomes.es, project.outcomes.en)}</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-info">
              <span className="project-tag">#HIGHLIGHTS</span>
              <h2 className="project-title">Highlights / Logros</h2>
              <ul className="project-detail-list">
                {project.highlights.en.map((item, index) => (
                  <li key={item}>
                    {item} {project.highlights.es[index]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="hero-actions">
          <Link href="/#projects" className="btn-secondary">
            Back to projects / Volver a proyectos
          </Link>
          <a href="/#contact" className="btn-retro">
            Contact / Contactar
          </a>
        </div>
      </section>
    </div>
  )
}
