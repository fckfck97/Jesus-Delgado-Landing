"use client"

import Link from "next/link"
import { profile } from "@/components/home/data"
import { useSiteLanguage } from "@/components/providers/site-provider"

const PRIVACY_CONTENT = {
  es: {
    eyebrow: "POLITICA_DE_PRIVACIDAD.TXT",
    title: "Política de Privacidad",
    intro:
      "Este sitio recopila datos limitados para analítica del portafolio, gestión de contacto y atención de consultas de proyectos. El objetivo es entender el uso del sitio, responder mensajes y gestionar conversaciones relacionadas con posibles servicios.",
    dataTitle: "Qué Datos se Recopilan",
    dataBody:
      "Este sitio puede recopilar datos agregados de analítica a través de Vercel Analytics, como vistas de página, rutas, contexto de dispositivo e información de performance. Si contactas por WhatsApp, email, LinkedIn, X o GitHub, los datos enviados voluntariamente pueden incluir nombre, empresa, email, contenido del mensaje y detalles del proyecto.",
    usageTitle: "Cómo se Usan los Datos",
    usageBody:
      "Los datos se usan únicamente para entender tráfico del sitio, mejorar el portafolio, evaluar encaje de proyecto y responder consultas directas. La información enviada por canales de contacto no se vende ni se comparte fuera de las herramientas necesarias para comunicarse y gestionar la conversación.",
    retentionTitle: "Retención y Responsable",
    retentionBody:
      "La información de contacto puede conservarse el tiempo necesario para continuar una conversación, preparar una propuesta o mantener registro de un contacto comercial previo. El responsable de este sitio es Ing. Jesus Delgado, con base en Colombia.",
    contactTitle: "Contacto sobre Privacidad",
    contactBody:
      "Para preguntas o solicitudes relacionadas con privacidad, puedes escribir a",
    backHome: "Volver al inicio",
    contact: "Contactar",
  },
  en: {
    eyebrow: "PRIVACY_POLICY.TXT",
    title: "Privacy Policy",
    intro:
      "This site collects limited data for portfolio analytics, contact handling, and service inquiries. The goal is to understand site usage, respond to messages, and manage conversations related to potential projects.",
    dataTitle: "What Data Is Collected",
    dataBody:
      "This website may collect aggregate analytics data through Vercel Analytics, such as page views, routes, device context, and performance information. If you contact through WhatsApp, email, LinkedIn, X, or GitHub, the data you voluntarily send may include your name, company, email address, message content, and project details.",
    usageTitle: "How Data Is Used",
    usageBody:
      "Data is used only to understand site traffic, improve the portfolio, evaluate project fit, and respond to direct inquiries. Information submitted through contact channels is not sold and is not shared beyond the tools required to communicate and manage the conversation.",
    retentionTitle: "Retention and Responsibility",
    retentionBody:
      "Inquiry data may be retained as long as needed to continue a conversation, prepare a proposal, or keep a record of previous business contact. The responsible contact for this site is Ing. Jesus Delgado, based in Colombia.",
    contactTitle: "Contact About Privacy",
    contactBody: "For privacy-related questions or requests, contact",
    backHome: "Back home",
    contact: "Contact",
  },
} as const

export function PrivacyPageContent() {
  const { lang } = useSiteLanguage()
  const t = PRIVACY_CONTENT[lang]

  return (
    <div className="container">
      <section className="project-detail">
        <p className="project-detail-eyebrow">{t.eyebrow}</p>
        <h1 className="project-detail-title">{t.title}</h1>
        <p className="project-detail-copy">{t.intro}</p>

        <div className="project-detail-grid">
          <div className="project-card">
            <div className="project-info">
              <span className="project-tag">#DATA</span>
              <h2 className="project-title">{t.dataTitle}</h2>
              <p className="project-copy">{t.dataBody}</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-info">
              <span className="project-tag">#USAGE</span>
              <h2 className="project-title">{t.usageTitle}</h2>
              <p className="project-copy">{t.usageBody}</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-info">
              <span className="project-tag">#RETENTION</span>
              <h2 className="project-title">{t.retentionTitle}</h2>
              <p className="project-copy">{t.retentionBody}</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-info">
              <span className="project-tag">#CONTACT</span>
              <h2 className="project-title">{t.contactTitle}</h2>
              <p className="project-copy">
                {t.contactBody} {profile.email}.
              </p>
            </div>
          </div>
        </div>

        <div className="hero-actions">
          <Link href="/" className="btn-secondary">
            {t.backHome}
          </Link>
          <Link href="/#contact" className="btn-retro">
            {t.contact}
          </Link>
        </div>
      </section>
    </div>
  )
}
