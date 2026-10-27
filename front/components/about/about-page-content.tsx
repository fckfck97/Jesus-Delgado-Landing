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
      "Soy Jesus Delgado, ingeniero de sistemas egresado de la UNEFA, Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional, en Venezuela, y actualmente residente en Colombia. Trabajo como ingeniero de software y desarrollador freelance, construyendo aplicaciones multiplataforma, servicios backend, productos web y soluciones orientadas a operación real. Mi enfoque combina Python, Django, Django REST, arquitectura backend, despliegues cloud y desarrollo full stack con criterio de producto. También soy cofundador de creativeferres.com y he participado en iniciativas de desarrollo como By Coding Solutions. Me interesa construir software útil, mantenible y listo para producción, con especial atención a automatización, APIs, performance, despliegue y escalabilidad.",
    identityTag: "#IDENTIDAD",
    identityTitle: "Perfil Profesional",
    identityBody:
      "Nombre completo: Ing. Jesus Delgado. Formación: ingeniero de sistemas egresado de la UNEFA en Venezuela. Residencia actual: Colombia. Rol profesional: ingeniero de software, desarrollador freelance y constructor de aplicaciones multiplataforma. La identidad pública del portafolio se centra en backend, producto digital, despliegue cloud y soluciones listas para producción.",
    bioTag: "#BIO",
    bioTitle: "Biografía en Primera Persona",
    bioBody:
      "Me gusta construir sistemas que reducen fricción operativa y que se puedan sostener después del lanzamiento. En la práctica eso significa trabajar sobre APIs, automatización, lógica de negocio, performance, infraestructura y experiencia de producto. Mi base más fuerte está en Python, Django y Django REST, pero también trabajo con aplicaciones multiplataforma, despliegues en Amazon Web Services, Hostinger, GoDaddy, CloudPanel y cPanel cuando el proyecto lo necesita. Actualmente trabajo desde Colombia como freelancer, apoyando clientes y productos que necesitan desarrollo serio, mantenimiento continuo y soluciones que funcionen en producción.",
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
        title: "Ingeniero de Software y Freelancer en Colombia",
        description:
          "Trabajo desde Colombia como freelancer en desarrollo de software, aplicaciones multiplataforma, backend, despliegue cloud y soluciones orientadas a producción para distintos mercados.",
      },
      {
        year: "2024-2025",
        title: "Cofundador y Desarrollo de Producto",
        description:
          "Impulso proyectos de producto y desarrollo digital, incluyendo la cofundación de creativeferres.com y trabajo técnico en soluciones web, backend y despliegue para equipos que necesitan velocidad y confiabilidad.",
      },
      {
        year: "Formación Base",
        title: "Ingeniería de Sistemas en UNEFA",
        description:
          "Formación como ingeniero de sistemas en la Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional, en Venezuela, base sobre la que desarrollo mi trabajo en software e infraestructura.",
      },
    ],
    specialties: [
      "Sistemas backend con Python, Django, Django REST Framework y APIs listas para producción.",
      "Aplicaciones web y multiplataforma con enfoque en producto, operación y mantenimiento continuo.",
      "Despliegue e infraestructura con Amazon Web Services, CloudPanel, cPanel, Hostinger y GoDaddy.",
      "Trabajo técnico orientado a software real: arquitectura, performance, automatización y entrega continua.",
    ],
    imageAlt: "Retrato de Ing. Jesus Delgado, Python Developer y AI Engineer.",
  },
  en: {
    eyebrow: "ABOUT_ME.EXE",
    title: "About Ing. Jesus Delgado",
    intro:
      "I am Jesus Delgado, a systems engineer graduated from UNEFA in Venezuela and currently based in Colombia. I work as a software engineer and freelance developer, building cross-platform applications, backend services, web products, and production-oriented software solutions. My focus combines Python, Django, Django REST, backend architecture, cloud deployment, and full-stack delivery with product awareness. I am also a co-founder of creativeferres.com and have contributed to development initiatives such as By Coding Solutions. I care about software that is useful, maintainable, and ready for real-world use.",
    identityTag: "#IDENTITY",
    identityTitle: "Professional Profile",
    identityBody:
      "Full name: Ing. Jesus Delgado. Education: systems engineer graduated from UNEFA in Venezuela. Current base: Colombia. Professional role: software engineer, freelance developer, and cross-platform application builder. The portfolio identity is centered on backend systems, digital product delivery, cloud deployment, and production-ready software.",
    bioTag: "#BIO",
    bioTitle: "First-Person Bio",
    bioBody:
      "I like building systems that reduce operational friction and keep working after launch. In practice, that means working on APIs, automation, business logic, performance, infrastructure, and product execution. My strongest base is Python, Django, and Django REST, but I also work on cross-platform applications and deployments using Amazon Web Services, Hostinger, GoDaddy, CloudPanel, and cPanel when the project requires it. I currently work from Colombia as a freelancer, helping clients and products that need serious software delivery, ongoing maintenance, and production-grade implementation.",
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
        title: "Software Engineer and Freelancer in Colombia",
        description:
          "Working from Colombia on software engineering, cross-platform applications, backend systems, cloud deployment, and production-oriented solutions for different markets.",
      },
      {
        year: "2024-2025",
        title: "Product Building and Co-Founding Work",
        description:
          "Contributing to product and development initiatives, including the co-founding of creativeferres.com and technical work on web, backend, and deployment systems for teams that need reliable execution.",
      },
      {
        year: "Academic Foundation",
        title: "Systems Engineering at UNEFA",
        description:
          "Graduated as a systems engineer from UNEFA in Venezuela, building the foundation for my work in software engineering, infrastructure, and digital product delivery.",
      },
    ],
    specialties: [
      "Production backend systems with Python, Django, Django REST Framework, and API design.",
      "Cross-platform and web application development with a focus on product delivery and maintainability.",
      "Deployment and infrastructure work with Amazon Web Services, CloudPanel, cPanel, Hostinger, and GoDaddy.",
      "Technical execution centered on architecture, performance, automation, and stable software delivery.",
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
          <Image src={profile.heroImage} alt={t.imageAlt} className="project-img project-detail-image" width={3264} height={2448} priority sizes="(max-width: 768px) 100vw, 60vw" />
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
                  <li key={item.year}>
                    <strong>{item.year} — {item.title}</strong>
                    <br />
                    {item.description}
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
              <ul className="project-detail-list">
                <li>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn — linkedin.com/in/gotzellll
                  </a>
                </li>
                <li>
                  <a href={`https://github.com/${profile.githubUser}`} target="_blank" rel="noopener noreferrer">
                    GitHub — github.com/{profile.githubUser}
                  </a>
                </li>
                <li>
                  <a href={profile.xUrl} target="_blank" rel="noopener noreferrer">
                    X — {profile.xHandle}
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="hero-actions">
          <Link href={`/${lang}`} className="btn-secondary">
            {t.backHome}
          </Link>
          <Link href={`/${lang}#contact`} className="btn-retro">
            {t.contact}
          </Link>
        </div>
      </section>
    </div>
  )
}
