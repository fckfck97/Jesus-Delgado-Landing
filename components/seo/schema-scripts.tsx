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

export function HomePageSchemaScripts() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: "Ing. Jesus Delgado | Python Developer, AI Engineer, Web Builder",
    description:
      "Portfolio of Ing. Jesus Delgado — Python developer and AI engineer building machine learning systems, computer vision pipelines, and full-stack products for Colombia, Venezuela, and the United States.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    author: { "@id": `${SITE_URL}/#person` },
    inLanguage: ["es", "en"],
    datePublished: "2026-03-28",
    dateModified: "2026-04-12",
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
            "Predictive models, neural-network pipelines, and automated data workflows built with Python, scikit-learn, and deep learning frameworks for real product use cases.",
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

export function AboutPageSchemaScripts() {
  const aboutUrl = `${SITE_URL}/about`

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${aboutUrl}#webpage`,
    url: aboutUrl,
    name: "About Ing. Jesus Delgado — Python Developer & AI Engineer",
    description:
      "Systems engineer graduated from UNEFA, based in Colombia. Specializes in Python, Django, machine learning, computer vision, and full-stack production software for clients in Colombia, Venezuela, and the United States.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    author: { "@id": `${SITE_URL}/#person` },
    mainEntity: { "@id": `${SITE_URL}/#person` },
    inLanguage: ["es", "en"],
    datePublished: "2026-03-28",
    dateModified: "2026-04-12",
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": `${aboutUrl}#breadcrumb`,
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
    author: { "@id": `${SITE_URL}/#person` },
    breadcrumb: { "@id": `${projectUrl}#breadcrumb` },
    inLanguage: ["es", "en"],
    keywords: [country, code, "AI", "Python", "Full-Stack"],
    datePublished: "2026-03-28",
    dateModified: "2026-03-28",
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
