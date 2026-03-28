const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://devjesusdelgado.com"

type JsonLdProps = {
  data: Record<string, unknown>
}

function JsonLd({ data }: JsonLdProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function RootSchemaScripts() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Jesus Delgado",
    honorificPrefix: "Ing.",
    jobTitle: "Python Developer & AI Engineer",
    url: SITE_URL,
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/img/jesus.jpeg`,
      width: 380,
      height: 285,
    },
    sameAs: [
      "https://www.linkedin.com/in/gotzellll",
      "https://x.com/_GodZell",
      "https://github.com/fckfck97",
    ],
    knowsAbout: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Django",
      "Next.js",
      "React Native",
      "LangChain",
      "AWS",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "themurder261@gmail.com",
      availableLanguage: ["Spanish", "English"],
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Ing. Jesus Delgado | Python Developer, AI Engineer, Web Builder",
    publisher: { "@id": `${SITE_URL}/#person` },
    inLanguage: ["es", "en"],
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "Ing. Jesus Delgado – Python Developer & AI Engineer",
    url: SITE_URL,
    founder: { "@id": `${SITE_URL}/#person` },
    areaServed: [
      { "@type": "Country", name: "Colombia" },
      { "@type": "Country", name: "Venezuela" },
      { "@type": "Country", name: "United States" },
    ],
  }

  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={professionalServiceSchema} />
    </>
  )
}

export function HomePageSchemaScripts() {
  const serviceItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Core Services",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Machine Learning Solutions",
          serviceType: "Machine Learning",
          provider: { "@id": `${SITE_URL}/#person` },
          areaServed: ["Colombia", "Venezuela", "United States"],
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Computer Vision Systems",
          serviceType: "Computer Vision",
          provider: { "@id": `${SITE_URL}/#person` },
          areaServed: ["Colombia", "Venezuela", "United States"],
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Full-Stack Web and Mobile Development",
          serviceType: "Full-Stack Development",
          provider: { "@id": `${SITE_URL}/#person` },
          areaServed: ["Colombia", "Venezuela", "United States"],
        },
      },
    ],
  }

  return <JsonLd data={serviceItemListSchema} />
}

type ProjectSchemaScriptsProps = {
  code: string
  country: string
  slug: string
  title: string
  summary: string
}

export function ProjectSchemaScripts({
  code,
  country,
  slug,
  title,
  summary,
}: ProjectSchemaScriptsProps) {
  const projectUrl = `${SITE_URL}/projects/${slug}`

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${projectUrl}#webpage`,
    url: projectUrl,
    name: title,
    description: summary,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    breadcrumb: { "@id": `${projectUrl}#breadcrumb` },
    inLanguage: ["es", "en"],
    keywords: [country, code, "AI", "Python", "Full-Stack"],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${projectUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: projectUrl,
      },
    ],
  }

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
    </>
  )
}
