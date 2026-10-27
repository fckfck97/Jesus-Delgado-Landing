"use client"

import Image from "next/image"
import Link from "next/link"
import { homeContent, regionalProjects } from "@/components/home/data"
import { useSiteLanguage } from "@/components/providers/site-provider"

export function ProjectsSection() {
  const { lang } = useSiteLanguage()
  const t = homeContent[lang]

  return (
    <section id="projects">
      <h2 className="section-title">{t.projectsTitle}</h2>
      <p className="section-copy">{t.projectsIntro}</p>
      <div className="portfolio-grid">
        {regionalProjects.map((project) => (
          <Link href={`/projects/${project.slug}`} className="project-card project-card-link" key={project.slug}>
            <div className="window-header" style={{ background: "#333", color: "#fff" }}>
              <span>{project.code}</span>
            </div>
            <Image
              src={project.image}
              alt={`${project.title[lang]}. ${project.summary[lang]}`}
              className="project-img"
              width={1200}
              height={800}
              loading="lazy"
            />
            <div className="project-info">
              <span className="project-tag">{project.tag[lang]}</span>
              <h3 className="project-title">{project.title[lang]}</h3>
              <p className="project-copy">{project.summary[lang]}</p>
              <span className="project-link">{t.projectDetailsCta}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
