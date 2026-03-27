"use client"

import { homeContent, profile } from "@/components/home/data"
import { useSiteLanguage } from "@/components/providers/site-provider"

export function ContactSection() {
  const { lang } = useSiteLanguage()
  const t = homeContent[lang]

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">{t.contactTitle}</h2>
      <p className="section-copy">{t.contactLead}</p>
      <div className="contact-grid">
        <a href={profile.whatsappUrl} target="_blank" rel="noreferrer" className="contact-card">
          <span className="project-tag">#WHATSAPP</span>
          <h3 className="project-title">{profile.whatsapp}</h3>
          <p className="project-copy">Contacto directo por WhatsApp</p>
        </a>
        <a href={`mailto:${profile.email}`} className="contact-card">
          <span className="project-tag">#EMAIL</span>
          <h3 className="project-title">{profile.email}</h3>
          <p className="project-copy">Correo directo para proyectos y propuestas</p>
        </a>
        <a href={profile.xUrl} target="_blank" rel="noreferrer" className="contact-card">
          <span className="project-tag">#X</span>
          <h3 className="project-title">{profile.xHandle}</h3>
          <p className="project-copy">x.com/_GodZell</p>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-card">
          <span className="project-tag">#LINKEDIN</span>
          <h3 className="project-title">gotzellll</h3>
          <p className="project-copy">linkedin.com/in/gotzellll</p>
        </a>
        <a href={`https://github.com/${profile.githubUser}`} target="_blank" rel="noreferrer" className="contact-card">
          <span className="project-tag">#GITHUB</span>
          <h3 className="project-title">{profile.githubUser}</h3>
          <p className="project-copy">github.com/{profile.githubUser}</p>
        </a>
      </div>
    </section>
  )
}
