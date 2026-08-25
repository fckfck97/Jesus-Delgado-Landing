import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CoursesPageSchemaScripts } from "@/components/seo/schema-scripts"
import { courses } from "@/lib/courses"
import { getAlternates } from "@/lib/i18n"

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const isEs = lang === "es"
  const title = isEs ? "Cursos y certificaciones profesionales" : "Professional courses and certifications"
  const description = isEs
    ? `${courses.length} certificaciones verificables de Jesus Delgado en Python, Django, React, Linux, APIs, LangChain, automatización e inteligencia artificial.`
    : `${courses.length} verifiable certificates earned by Jesus Delgado in Python, Django, React, Linux, APIs, LangChain, automation, and artificial intelligence.`
  return {
    title,
    description,
    alternates: getAlternates(lang, "/courses"),
    openGraph: { title, description, locale: isEs ? "es_CO" : "en_US", url: `/${lang}/courses` },
    twitter: { card: "summary_large_image", title, description },
  }
}

export default async function CoursesPage({ params }: Props) {
  const { lang } = await params
  if (lang !== "es" && lang !== "en") notFound()
  const providerOrder = ["Platzi", "DeepLearning.AI", "Udemy", "Otros"]
  const providers = providerOrder.filter((provider) => courses.some((course) => course.provider === provider))
  return (
    <main className="courses-page container">
      <CoursesPageSchemaScripts lang={lang} courses={courses} />
      <p className="project-detail-eyebrow">{lang === "es" ? "FORMACIÓN CONTINUA" : "CONTINUOUS LEARNING"}</p>
      <h1 className="project-detail-title">{lang === "es" ? "Cursos y certificaciones" : "Courses and certifications"}</h1>
      <p className="project-detail-copy">{lang === "es" ? `${courses.length} certificados para consultar dentro del sitio.` : `${courses.length} certificates available within the site.`}</p>
      {providers.map((provider) => (
        <section className="course-provider" key={provider}>
          <h2 className="project-title">{provider}</h2>
          <div className="courses-grid">
            {courses.filter((course) => course.provider === provider).map((course) => (
              <Link className="course-card" href={`/${lang}/courses/${course.slug}`} key={course.slug}>
                <span className="project-tag">#{provider.toUpperCase()}</span>
                <strong>{course.title}</strong>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
