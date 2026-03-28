"use client"

import Image from "next/image"
import Link from "next/link"
import { regionalProjects } from "@/components/home/data"
import { useSiteLanguage } from "@/components/providers/site-provider"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

type Project = (typeof regionalProjects)[number]

type ProjectDetailContentProps = {
  project: Project
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const { lang } = useSiteLanguage()

  const content = {
    title: project.title[lang],
    tag: project.tag[lang],
    summary: project.summary[lang],
    overview: project.overview[lang],
    approach: project.approach[lang],
    outcomes: project.outcomes[lang],
    highlights: project.highlights[lang],
    breadcrumbProjects: lang === "es" ? "Proyectos" : "Projects",
    summaryTitle: lang === "es" ? "Resumen" : "Summary",
    approachTitle: lang === "es" ? "Enfoque" : "Approach",
    outcomesTitle: lang === "es" ? "Resultados" : "Outcomes",
    highlightsTitle: lang === "es" ? "Logros" : "Highlights",
    backToProjects: lang === "es" ? "Volver a proyectos" : "Back to projects",
    contact: lang === "es" ? "Contactar" : "Contact",
    imageAlt:
      lang === "es"
        ? `${project.title.es}. ${project.summary.es}`
        : `${project.title.en}. ${project.summary.en}`,
  }

  return (
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
              <Link href="/#projects">{content.breadcrumbProjects}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{content.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className="project-detail-eyebrow">{project.code}</p>
      <h1 className="project-detail-title">{content.title}</h1>
      <p className="project-detail-copy">{content.overview}</p>
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
          alt={content.imageAlt}
          className="project-img project-detail-image"
          width={1200}
          height={800}
          loading="lazy"
        />
      </div>
      <div className="project-detail-grid">
        <div className="project-card">
          <div className="project-info">
            <span className="project-tag">{content.tag}</span>
            <h2 className="project-title">{content.summaryTitle}</h2>
            <p className="project-copy">{content.summary}</p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-info">
            <span className="project-tag">#HIGHLIGHTS</span>
            <h2 className="project-title">{content.approachTitle}</h2>
            <p className="project-copy">{content.approach}</p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-info">
            <span className="project-tag">#OUTCOMES</span>
            <h2 className="project-title">{content.outcomesTitle}</h2>
            <p className="project-copy">{content.outcomes}</p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-info">
            <span className="project-tag">#HIGHLIGHTS</span>
            <h2 className="project-title">{content.highlightsTitle}</h2>
            <ul className="project-detail-list">
              {content.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="hero-actions">
        <Link href="/#projects" className="btn-secondary">
          {content.backToProjects}
        </Link>
        <a href="/#contact" className="btn-retro">
          {content.contact}
        </a>
      </div>
    </section>
  )
}
