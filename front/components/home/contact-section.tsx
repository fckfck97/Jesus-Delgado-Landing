"use client"

import { homeContent, profile } from "@/components/home/data"
import { useSiteLanguage } from "@/components/providers/site-provider"

export function ContactSection() {
  const { lang } = useSiteLanguage()
  const t = homeContent[lang]
  const contactCopy =
    lang === "es"
      ? {
          whatsapp: "Contacto directo por WhatsApp",
          email: "Correo directo para proyectos y propuestas",
          x: "Perfil público en X",
          linkedin: "Perfil profesional en LinkedIn",
          github: "Perfil técnico en GitHub",
        }
      : {
          whatsapp: "Direct contact on WhatsApp",
          email: "Direct email for projects and proposals",
          x: "Public profile on X",
          linkedin: "Professional profile on LinkedIn",
          github: "Technical profile on GitHub",
        }

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">{t.contactTitle}</h2>
      <p className="section-copy">{t.contactLead}</p>
      <div className="contact-grid">
        <a href={profile.whatsappUrl} target="_blank" rel="noreferrer" className="contact-card">
          <span className="project-tag">#WHATSAPP</span>
          <h3 className="project-title">{profile.whatsapp}</h3>
          <p className="project-copy">{contactCopy.whatsapp}</p>
        </a>
        <a href={`mailto:${profile.email}`} className="contact-card">
          <span className="project-tag">#EMAIL</span>
          <h3 className="project-title">{profile.email}</h3>
          <p className="project-copy">{contactCopy.email}</p>
        </a>
        <a href={profile.xUrl} target="_blank" rel="noreferrer" className="contact-card">
          <span className="project-tag">#X</span>
          <h3 className="project-title">{profile.xHandle}</h3>
          <p className="project-copy">{contactCopy.x}</p>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-card">
          <span className="project-tag">#LINKEDIN</span>
          <h3 className="project-title">gotzellll</h3>
          <p className="project-copy">{contactCopy.linkedin}</p>
        </a>
        <a href={`https://github.com/${profile.githubUser}`} target="_blank" rel="noreferrer" className="contact-card">
          <span className="project-tag">#GITHUB</span>
          <h3 className="project-title">{profile.githubUser}</h3>
          <p className="project-copy">{contactCopy.github}</p>
        </a>
      </div>
    </section>
  )
}
