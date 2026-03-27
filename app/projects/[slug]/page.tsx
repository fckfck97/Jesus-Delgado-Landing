import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { regionalProjects } from "@/components/home/data"

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
    title: `${project.title.es} | Ing. Jesus Delgado`,
    description: project.summary.es,
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
      <section className="project-detail">
        <p className="project-detail-eyebrow">{project.code}</p>
        <h1 className="project-detail-title">{project.title.es}</h1>
        <p className="project-detail-copy">{project.overview.es}</p>
        <div className="window-frame project-detail-media">
          <div className="window-header">
            <span>{project.country.toUpperCase()}_PROJECT.JPG</span>
            <div className="window-controls">
              <button className="window-btn" aria-label="Minimize">
                <span className="minimize-icon"></span>
              </button>
              <button className="window-btn" aria-label="Maximize">
                <span className="maximize-icon"></span>
              </button>
              <button className="window-btn window-close" aria-label="Close">
                <span className="close-icon"></span>
              </button>
            </div>
          </div>
          <img src={project.image} alt={project.title.es} className="project-img project-detail-image" />
        </div>
        <div className="project-detail-grid">
          <div className="project-card">
            <div className="project-info">
              <span className="project-tag">{project.tag.es}</span>
              <h2 className="project-title">Resumen</h2>
              <p className="project-copy">{project.summary.es}</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-info">
              <span className="project-tag">#HIGHLIGHTS</span>
              <h2 className="project-title">Enfoque</h2>
              <ul className="project-detail-list">
                {project.highlights.es.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="hero-actions">
          <Link href="/#projects" className="btn-secondary">
            Volver a proyectos
          </Link>
          <a href="/#contact" className="btn-retro">
            Contactar
          </a>
        </div>
      </section>
    </div>
  )
}
