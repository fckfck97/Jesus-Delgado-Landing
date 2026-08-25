const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://devjesusdelgado.com"

type SupportedLang = "es" | "en" | string

function languageName(lang: SupportedLang) {
  return lang === "es" ? "es-CO" : "en-US"
}

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
    description:
      "Systems engineer based in Colombia specializing in Python, machine learning, computer vision, Django REST APIs, Next.js, React Native, and AWS cloud deployments.",
    url: SITE_URL,
    email: "hola@devjesusdelgado.com",
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/img/jesus.webp`,
      width: 750,
      height: 563,
    },
    sameAs: [
      "https://www.linkedin.com/in/gotzellll",
      "https://x.com/_GodZell",
      "https://github.com/fckfck97",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional",
      alternateName: "UNEFA",
    },
    knowsAbout: [
      "Python",
      "Machine Learning",
      "Generative AI",
      "Computer Vision",
      "Django",
      "Next.js",
      "React Native",
      "LangChain",
      "OpenAI",
      "LM Studio",
      "AWS",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hola@devjesusdelgado.com",
      telephone: "+573173030718",
      availableLanguage: ["Spanish", "English"],
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Ing. Jesus Delgado | Python Developer, AI Engineer, Web Builder",
    description:
      "Portfolio of Ing. Jesus Delgado — Python developer and AI engineer building production-grade backend systems, computer vision applications, and full-stack products for clients in Colombia, Venezuela, and the United States.",
    publisher: { "@id": `${SITE_URL}/#person` },
    inLanguage: ["es", "en"],
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "Ing. Jesus Delgado – Python Developer & AI Engineer",
    description:
      "Freelance software engineering services specializing in Python, Django, machine learning, computer vision, full-stack web, and mobile application development for clients in Colombia, Venezuela, and the United States.",
    url: SITE_URL,
    founder: { "@id": `${SITE_URL}/#person` },
    areaServed: [
      { "@type": "Country", name: "Colombia" },
      { "@type": "Country", name: "Venezuela" },
      { "@type": "Country", name: "United States" },
    ],
    hasOfferCatalog: { "@id": `${SITE_URL}/#services` },
  }

  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={professionalServiceSchema} />
    </>
  )
}

export function HomePageSchemaScripts({ lang }: { lang: SupportedLang }) {
  const pageUrl = `${SITE_URL}/${lang}`
  const isEs = lang === "es"
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: isEs ? "Ing. Jesus Delgado | Desarrollador Python e Ingeniero de IA" : "Ing. Jesus Delgado | Python Developer & AI Engineer",
    description: isEs
      ? "Portafolio de Jesus Delgado: desarrollo Python, inteligencia artificial, automatización, visión artificial y aplicaciones web y mobile para Colombia, Venezuela y Estados Unidos."
      : "Jesus Delgado's portfolio: Python development, artificial intelligence, automation, computer vision, and web and mobile applications for Colombia, Venezuela, and the United States.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    author: { "@id": `${SITE_URL}/#person` },
    inLanguage: languageName(lang),
    datePublished: "2026-03-28",
    dateModified: "2026-08-25",
  }

  const serviceItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/#services`,
    name: "Core Services",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          "@id": `${SITE_URL}/#service-ml`,
          name: "Machine Learning Solutions",
          description:
            "Predictive models, OpenAI integrations, local-model workflows with LM Studio, and automated data pipelines built with Python for real product use cases.",
          serviceType: "Machine Learning",
          provider: { "@id": `${SITE_URL}/#person` },
          areaServed: [
            { "@type": "Country", name: "Colombia" },
            { "@type": "Country", name: "Venezuela" },
            { "@type": "Country", name: "United States" },
          ],
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          "@id": `${SITE_URL}/#service-cv`,
          name: "Computer Vision Systems",
          description:
            "Image-processing pipelines, facial recognition workflows, and visual intelligence tools for automation and decision support.",
          serviceType: "Computer Vision",
          provider: { "@id": `${SITE_URL}/#person` },
          areaServed: [
            { "@type": "Country", name: "Colombia" },
            { "@type": "Country", name: "Venezuela" },
            { "@type": "Country", name: "United States" },
          ],
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          "@id": `${SITE_URL}/#service-fullstack`,
          name: "Full-Stack Web and Mobile Development",
          description:
            "Production-ready web applications with Next.js and Django REST, and mobile apps with React Native and Expo, deployed on AWS and cloud infrastructure.",
          serviceType: "Full-Stack Development",
          provider: { "@id": `${SITE_URL}/#person` },
          areaServed: [
            { "@type": "Country", name: "Colombia" },
            { "@type": "Country", name: "Venezuela" },
            { "@type": "Country", name: "United States" },
          ],
        },
      },
    ],
  }

  const reviewsSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: { "@id": `${SITE_URL}/#organization` },
      author: {
        "@type": "Person",
        name: "Operations Director",
        jobTitle: "Operations Director, Digital Services",
        addressCountry: "CO",
      },
      reviewBody:
        "Jesus turned a very manual commercial workflow into a clearer and more measurable platform. We moved from chasing information to operating with better structure.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: { "@id": `${SITE_URL}/#organization` },
      author: {
        "@type": "Person",
        name: "Product Lead",
        jobTitle: "Product Lead, Internal Tools",
        addressCountry: "VE",
      },
      reviewBody:
        "He helped us structure backend systems and integrations without overcomplicating the product. The solution was practical and improved team speed from the first release.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: { "@id": `${SITE_URL}/#organization` },
      author: {
        "@type": "Person",
        name: "Founder",
        jobTitle: "Founder, AI-first Product",
        addressCountry: "US",
      },
      reviewBody:
        "The mix of product thinking, frontend delivery, and AI felt production-minded rather than demo-oriented. There was technical judgment and fast iteration.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
  ]

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceItemListSchema} />
      {reviewsSchema.map((review, i) => (
        <JsonLd key={i} data={review} />
      ))}
    </>
  )
}

export function AboutPageSchemaScripts({ lang }: { lang: SupportedLang }) {
  const aboutUrl = `${SITE_URL}/${lang}/about`
  const isEs = lang === "es"

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${aboutUrl}#webpage`,
    url: aboutUrl,
    name: isEs ? "Sobre el Ing. Jesus Delgado — Desarrollador Python e Ingeniero de IA" : "About Ing. Jesus Delgado — Python Developer & AI Engineer",
    description: isEs
      ? "Ingeniero de sistemas graduado de UNEFA y radicado en Colombia, especializado en Python, Django, inteligencia artificial, visión artificial y software en producción."
      : "Systems engineer graduated from UNEFA and based in Colombia, specializing in Python, Django, artificial intelligence, computer vision, and production software.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    author: { "@id": `${SITE_URL}/#person` },
    mainEntity: { "@id": `${SITE_URL}/#person` },
    inLanguage: languageName(lang),
    datePublished: "2026-03-28",
    dateModified: "2026-08-25",
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": `${aboutUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/${lang}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: aboutUrl,
        },
      ],
    },
  }

  return <JsonLd data={profilePageSchema} />
}

type ProjectSchemaScriptsProps = {
  code: string
  country: string
  image: string
  lang: SupportedLang
  slug: string
  title: string
  summary: string
}

export function ProjectSchemaScripts({
  code,
  country,
  image,
  lang,
  slug,
  title,
  summary,
}: ProjectSchemaScriptsProps) {
  const projectUrl = `${SITE_URL}/${lang}/projects/${slug}`

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${projectUrl}#webpage`,
    url: projectUrl,
    name: title,
    description: summary,
    image,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    author: { "@id": `${SITE_URL}/#person` },
    breadcrumb: { "@id": `${projectUrl}#breadcrumb` },
    inLanguage: languageName(lang),
    keywords: [country, code, "AI", "Python", "Full-Stack"],
    datePublished: "2026-03-28",
    dateModified: "2026-08-25",
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
        item: `${SITE_URL}/${lang}`,
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

type CourseItem = {
  slug: string
  title: string
  provider: string
  pdf?: string
  accomplishment?: {
    completedBy: string
    completionDate: string
    topics: readonly string[]
    sourceUrl: string
  }
}

export function CoursesPageSchemaScripts({
  lang,
  courses,
}: {
  lang: SupportedLang
  courses: readonly CourseItem[]
}) {
  const pageUrl = `${SITE_URL}/${lang}/courses`
  const isEs = lang === "es"
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: isEs ? "Cursos y certificaciones de Jesus Delgado" : "Jesus Delgado's courses and certifications",
    description: isEs
      ? `Colección de ${courses.length} certificados profesionales en desarrollo de software, infraestructura e inteligencia artificial.`
      : `Collection of ${courses.length} professional certificates in software development, infrastructure, and artificial intelligence.`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    inLanguage: languageName(lang),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: courses.length,
      itemListElement: courses.map((course, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/${lang}/courses/${course.slug}`,
        name: `${course.title} — ${course.provider}`,
      })),
    },
    dateModified: "2026-08-25",
  }

  return <JsonLd data={collectionSchema} />
}

export function CourseSchemaScripts({ lang, course }: { lang: SupportedLang; course: CourseItem }) {
  const pageUrl = `${SITE_URL}/${lang}/courses/${course.slug}`
  const isEs = lang === "es"
  const credentialSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    "@id": `${pageUrl}#credential`,
    url: pageUrl,
    name: course.title,
    description: isEs
      ? `Certificado de ${course.title} emitido por ${course.provider} y obtenido por Jesus Delgado.`
      : `${course.title} certificate issued by ${course.provider} and earned by Jesus Delgado.`,
    credentialCategory: "Certificate",
    recognizedBy: { "@type": "Organization", name: course.provider },
    about: { "@id": `${SITE_URL}/#person` },
    sameAs: course.accomplishment?.sourceUrl,
    inLanguage: languageName(lang),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${SITE_URL}/${lang}` },
      { "@type": "ListItem", position: 2, name: isEs ? "Cursos" : "Courses", item: `${SITE_URL}/${lang}/courses` },
      { "@type": "ListItem", position: 3, name: course.title, item: pageUrl },
    ],
  }

  return (
    <>
      <JsonLd data={credentialSchema} />
      <JsonLd data={breadcrumbSchema} />
    </>
  )
}
