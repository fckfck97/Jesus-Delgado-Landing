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
  const featuredProjects = project.featuredProjects ?? []

  const content = {
    title: project.title[lang],
    tag: project.tag[lang],
    summary: project.summary[lang],
    overview: project.overview[lang],
    approach: project.approach[lang],
    outcomes: project.outcomes[lang],
    highlights: project.highlights[lang],
    stackDetail: project.stackDetail[lang],
    breadcrumbProjects: lang === "es" ? "Proyectos" : "Projects",
    summaryTitle: lang === "es" ? "Resumen" : "Summary",
    approachTitle: lang === "es" ? "Enfoque" : "Approach",
    outcomesTitle: lang === "es" ? "Resultados" : "Outcomes",
    highlightsTitle: lang === "es" ? "Logros" : "Highlights",
    stackDetailTitle: lang === "es" ? "Decisiones Técnicas" : "Technical Decisions",
    featuredProjectsTitle: lang === "es" ? "Proyectos Destacados" : "Featured Projects",
    featuredProjectsIntro:
      lang === "es"
        ? "Listado de productos y plataformas construidos para este mercado. Puedes completar los enlaces web, App Store y Play Store directamente en el archivo de datos."
        : "Selected products and platforms built for this market. Website, App Store, and Play Store links can be completed directly in the data file.",
    featuresTitle: lang === "es" ? "Funciones clave" : "Key features",
    websiteLabel: lang === "es" ? "Sitio web" : "Website",
    appStoreLabel: lang === "es" ? "App Store" : "App Store",
    playStoreLabel: lang === "es" ? "Play Store" : "Play Store",
    pendingLinkLabel: lang === "es" ? "URL pendiente" : "URL pending",
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
              <Link href={`/${lang}`}>Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/${lang}#projects`}>{content.breadcrumbProjects}</Link>
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
        <div className="project-card project-card--stack">
          <div className="project-info">
            <span className="project-tag">#STACK #ARCHITECTURE</span>
            <h2 className="project-title">{content.stackDetailTitle}</h2>
            <div className="project-stack-columns">
              {content.stackDetail.split("\n\n").map((paragraph, i) => (
                <p key={i} className="project-copy">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {featuredProjects.length > 0 ? (
        <div className="project-featured-section">
          <span className="project-tag">#PRODUCTS #{project.country.toUpperCase()}</span>
          <h2 className="project-title">{content.featuredProjectsTitle}</h2>
          <p className="project-detail-copy">{content.featuredProjectsIntro}</p>
          <div className="portfolio-grid project-featured-grid">
            {featuredProjects.map((item) => {
              const hasLinks = Boolean(item.url || item.appStoreUrl || item.playStoreUrl)

              return (
                <div className="project-card" key={item.slug}>
                  <div className="project-info">
                    <span className="project-tag">#{item.slug.toUpperCase()}</span>
                    <h3 className="project-title">{item.name}</h3>
                    <p className="project-copy">{item.description[lang]}</p>
                    <p className="project-subtitle">{content.featuresTitle}</p>
                    <ul className="project-detail-list">
                      {item.features[lang].map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <div className="project-links">
                      {item.url ? (
                        <a href={item.url} target="_blank" rel="noreferrer" className="project-inline-link">
                          {content.websiteLabel}
                        </a>
                      ) : null}
                      {item.appStoreUrl ? (
                        <a href={item.appStoreUrl} target="_blank" rel="noreferrer" className="project-inline-link">
                          {content.appStoreLabel}
                        </a>
                      ) : null}
                      {item.playStoreUrl ? (
                        <a href={item.playStoreUrl} target="_blank" rel="noreferrer" className="project-inline-link">
                          {content.playStoreLabel}
                        </a>
                      ) : null}
                    </div>
                    {!hasLinks ? <span className="project-link">{content.pendingLinkLabel}</span> : null}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : null}
      <div className="hero-actions">
        <Link href={`/${lang}#projects`} className="btn-secondary">
          {content.backToProjects}
        </Link>
        <a href={`/${lang}#contact`} className="btn-retro">
          {content.contact}
        </a>
      </div>
    </section>
  )
}
