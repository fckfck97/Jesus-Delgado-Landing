"use client"

import Link from "next/link"
import { useSiteLanguage } from "@/components/providers/site-provider"

const notFoundContent = {
  es: {
    code: "ERROR_404",
    titleTop: "PAGINA",
    titleAccent: "NO ENCONTRADA",
    copy: "La ruta que intentaste abrir no existe o ya fue movida. Puedes volver al inicio o ir directamente a la sección de proyectos.",
    home: "VOLVER AL HOME",
    projects: "VER PROYECTOS",
  },
  en: {
    code: "ERROR_404",
    titleTop: "PAGE",
    titleAccent: "NOT FOUND",
    copy: "The route you tried to open does not exist or was moved. You can go back home or jump directly to the projects section.",
    home: "BACK TO HOME",
    projects: "VIEW PROJECTS",
  },
} as const

export default function NotFound() {
  const { lang } = useSiteLanguage()
  const t = notFoundContent[lang]

  return (
    <div className="container">
      <section className="not-found-page">
        <p className="project-detail-eyebrow">{t.code}</p>
        <h1 className="not-found-title">
          {t.titleTop} <span>{t.titleAccent}</span>
        </h1>
        <p className="not-found-copy">{t.copy}</p>
        <div className="hero-actions">
          <Link href="/" className="btn-retro">
            {t.home}
          </Link>
          <Link href="/#projects" className="btn-secondary">
            {t.projects}
          </Link>
        </div>
      </section>
    </div>
  )
}
