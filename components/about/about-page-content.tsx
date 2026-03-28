"use client"

import Image from "next/image"
import Link from "next/link"
import { profile, technologies } from "@/components/home/data"
import { useSiteLanguage } from "@/components/providers/site-provider"

const ABOUT_CONTENT = {
  es: {
    eyebrow: "SOBRE_MI.EXE",
    title: "Sobre Ing. Jesus Delgado",
    intro:
      "Soy Jesus Delgado, ingeniero de software con base en Colombia, enfocado en construir productos que combinan Python, arquitectura backend, sistemas de AI y ejecución web moderna. Mi trabajo suele ubicarse donde se cruzan la necesidad de producto y la profundidad técnica: automatización, APIs, herramientas internas, flujos de machine learning, visión artificial y plataformas web listas para producción. Me interesa construir software útil, no demos. Eso implica flujos de datos más claros, operación más simple, ciclos de entrega más rápidos y sistemas que un equipo realmente pueda mantener después del lanzamiento. He trabajado en proyectos para Colombia, Venezuela y Estados Unidos, con foco en servicios backend, features AI-first, producto full stack y despliegues pensados para uso real.",
    identityTag: "#IDENTIDAD",
    identityTitle: "Perfil Profesional",
    identityBody:
      "Nombre completo: Ing. Jesus Delgado. Rol: Python Developer y AI Engineer. Base: Colombia. Disciplina: ingeniería de software enfocada en backend, inteligencia artificial aplicada y entrega de producto digital. La identidad pública del portafolio y las redes se mantiene consistente alrededor del nombre profesional Ing. Jesus Delgado.",
    bioTag: "#BIO",
    bioTitle: "Biografía en Primera Persona",
    bioBody:
      "Me gusta construir sistemas que reducen fricción operativa. En la práctica eso significa trabajar sobre APIs, automatización, lógica de producto, performance y features con AI que mejoran cómo un equipo entrega o cómo un usuario interactúa con el software. Suelo trabajar cerca del problema de negocio, traduciendo requerimientos a decisiones técnicas estables sin sobreingeniería. Mi stack más fuerte gira alrededor de Python, pero me muevo con soltura entre backend, frontend, mobile y despliegue cuando el proyecto lo exige.",
    timelineTag: "#TRAYECTORIA",
    timelineTitle: "Cronología Profesional",
    specialtiesTag: "#ESPECIALIDADES",
    specialtiesTitle: "Áreas de Especialización",
    stackLead: "Stack activo:",
    linksTag: "#LINKS",
    linksTitle: "Perfiles Públicos",
    backHome: "Volver al inicio",
    contact: "Contactar",
    timeline: [
      {
        year: "2026",
        title: "Python Developer & AI Engineer",
        description:
          "Trabajo en Colombia, Venezuela y Estados Unidos sobre flujos de machine learning, sistemas backend, automatizaciones y plataformas web listas para producción.",
      },
      {
        year: "2024-2025",
        title: "Entrega Full-Stack y Productos AI-First",
        description:
          "Desarrollo soluciones con Next.js, Django, React Native, LangChain y despliegues cloud para equipos que necesitan ejecución confiable y ciclos de iteración más rápidos.",
      },
      {
        year: "2021-2023",
        title: "Backend y Product Engineering",
        description:
          "Enfoque en APIs, herramientas internas, flujos de datos y automatizaciones operativas con Python y Django para negocios y equipos digitales.",
      },
    ],
    specialties: [
      "Sistemas backend con Python, Django y Django REST Framework.",
      "Machine learning, deep learning y computer vision conectados a necesidades reales de producto.",
      "Desarrollo web moderno con Next.js y React, con foco en performance y fundamentos SEO.",
      "Productos mobile y AI-first con React Native, Expo, LangChain y despliegues cloud.",
    ],
    imageAlt: "Retrato de Ing. Jesus Delgado, Python Developer y AI Engineer.",
  },
  en: {
    eyebrow: "ABOUT_ME.EXE",
    title: "About Ing. Jesus Delgado",
    intro:
      "I am Jesus Delgado, a software engineer based in Colombia focused on building products that combine Python, backend architecture, AI systems, and modern web execution. My work usually sits where product needs and technical depth meet: automation, APIs, internal tools, machine learning workflows, computer vision, and web platforms prepared for production. I care about useful software, not just demos. That means clearer data flows, simpler operations, faster delivery cycles, and systems that teams can actually maintain after launch. I have worked across Colombia, Venezuela, and the United States on backend services, AI-first features, full-stack delivery, and deployments designed for real product usage.",
    identityTag: "#IDENTITY",
    identityTitle: "Professional Profile",
    identityBody:
      "Full name: Ing. Jesus Delgado. Role: Python Developer and AI Engineer. Base: Colombia. Discipline: software engineering focused on backend systems, applied AI, and digital product delivery. The public identity across the portfolio and social platforms stays aligned with the professional name Ing. Jesus Delgado.",
    bioTag: "#BIO",
    bioTitle: "First-Person Bio",
    bioBody:
      "I like building systems that remove operational friction. In practice, that means working on APIs, automation, product logic, performance, and AI features that improve how a team ships or how a user interacts with software. I tend to work close to the business problem, translating requirements into stable technical decisions instead of overengineering. My strongest stack is Python-centered, but I move comfortably across backend, frontend, mobile, and deployment layers when the project requires it.",
    timelineTag: "#TIMELINE",
    timelineTitle: "Professional Timeline",
    specialtiesTag: "#SPECIALTIES",
    specialtiesTitle: "Areas of Expertise",
    stackLead: "Active stack:",
    linksTag: "#LINKS",
    linksTitle: "Public Profiles",
    backHome: "Back home",
    contact: "Contact",
    timeline: [
      {
        year: "2026",
        title: "Python Developer & AI Engineer",
        description:
          "Working across Colombia, Venezuela, and the United States on machine learning workflows, backend systems, automations, and production-ready web platforms.",
      },
      {
        year: "2024-2025",
        title: "Full-Stack Delivery and AI-First Products",
        description:
          "Built solutions with Next.js, Django, React Native, LangChain, and cloud deployments for teams that needed reliable execution and faster iteration.",
      },
      {
        year: "2021-2023",
        title: "Backend and Product Engineering",
        description:
          "Focused on APIs, internal tools, data workflows, and operational automations with Python and Django for digital businesses and internal teams.",
      },
    ],
    specialties: [
      "Python backend systems with Django and Django REST Framework.",
      "Machine learning, deep learning, and computer vision workflows tied to real product needs.",
      "Modern web delivery with Next.js and React, with attention to performance and SEO fundamentals.",
      "Mobile and AI-first products with React Native, Expo, LangChain, and cloud deployment workflows.",
    ],
    imageAlt: "Portrait of Ing. Jesus Delgado, Python Developer and AI Engineer.",
  },
} as const

export function AboutPageContent() {
  const { lang } = useSiteLanguage()
  const t = ABOUT_CONTENT[lang]

  return (
    <div className="container">
      <section className="project-detail">
        <p className="project-detail-eyebrow">{t.eyebrow}</p>
        <h1 className="project-detail-title">{t.title}</h1>
        <p className="project-detail-copy">{t.intro}</p>

        <div className="window-frame project-detail-media">
          <div className="window-header">
            <span>JESUS_DELGADO_PROFILE.JPG</span>
          </div>
          <Image src={profile.heroImage} alt={t.imageAlt} className="project-img project-detail-image" width={3264} height={2448} priority />
        </div>

        <div className="project-detail-grid">
          <div className="project-card">
            <div className="project-info">
              <span className="project-tag">{t.identityTag}</span>
              <h2 className="project-title">{t.identityTitle}</h2>
              <p className="project-copy">{t.identityBody}</p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-info">
              <span className="project-tag">{t.bioTag}</span>
              <h2 className="project-title">{t.bioTitle}</h2>
              <p className="project-copy">{t.bioBody}</p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-info">
              <span className="project-tag">{t.timelineTag}</span>
              <h2 className="project-title">{t.timelineTitle}</h2>
              <ul className="project-detail-list">
                {t.timeline.map((item) => (
                  <li key={item.year + item.title}>
                    <strong>{item.year}</strong> {item.title}. {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="project-card">
            <div className="project-info">
              <span className="project-tag">{t.specialtiesTag}</span>
              <h2 className="project-title">{t.specialtiesTitle}</h2>
              <ul className="project-detail-list">
                {t.specialties.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="project-copy">
                {t.stackLead} {technologies.join(", ")}.
              </p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-info">
              <span className="project-tag">{t.linksTag}</span>
              <h2 className="project-title">{t.linksTitle}</h2>
              <div className="hero-actions">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
                  LinkedIn
                </a>
                <a href={`https://github.com/${profile.githubUser}`} target="_blank" rel="noreferrer" className="btn-secondary">
                  GitHub
                </a>
                <a href={profile.xUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                  X
                </a>
              </div>
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
