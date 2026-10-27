import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ProtectedPdfViewer } from "@/components/courses/protected-pdf-viewer"
import { CourseSchemaScripts } from "@/components/seo/schema-scripts"
import { courses } from "@/lib/courses"
import { getAlternates } from "@/lib/i18n"

type Props = { params: Promise<{ lang: string; slug: string }> }

export function generateStaticParams() {
  return courses.flatMap((course) => ["es", "en"].map((lang) => ({ lang, slug: course.slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params
  const course = courses.find((item) => item.slug === slug)
  if (!course) return { title: lang === "es" ? "Certificado no encontrado" : "Certificate not found" }
  const isEs = lang === "es"
  const title = `${course.title} · ${course.provider}`
  const description = isEs
    ? `Certificado de ${course.title} emitido por ${course.provider} y obtenido por Jesus Delgado. Consulta la credencial dentro del portafolio.`
    : `${course.title} certificate issued by ${course.provider} and earned by Jesus Delgado. View the credential within the portfolio.`
  return {
    title,
    description,
    alternates: getAlternates(lang, `/courses/${slug}`),
    openGraph: { title, description, locale: isEs ? "es_CO" : "en_US", url: `/${lang}/courses/${slug}`, images: [] },
    twitter: { card: "summary", title, description, images: [] },
  }
}

export default async function CourseViewerPage({ params }: Props) {
  const { lang, slug } = await params
  if (lang !== "es" && lang !== "en") notFound()
  const course = courses.find((item) => item.slug === slug)
  if (!course) notFound()
  return (
    <main className="course-viewer-page container">
      <CourseSchemaScripts lang={lang} course={course} />
      <div className="course-viewer-toolbar">
        <Link className="course-viewer-back" href={`/${lang}/courses`}>
          ← {lang === "es" ? "Volver a cursos" : "Back to courses"}
        </Link>
      </div>
      <p className="project-detail-eyebrow">{course.provider}</p>
      <h1 className="course-viewer-title">{course.title}</h1>
      {course.pdf ? (
        <ProtectedPdfViewer
          src={course.pdf}
          title={`${course.title} · ${course.provider}`}
        />
      ) : course.accomplishment ? (
        <section className="accomplishment-viewer" aria-label={`Credencial ${course.title}`}>
          <div className="accomplishment-brand">DeepLearning.AI</div>
          <p className="accomplishment-kicker">Finalización de curso</p>
          <h2>{course.title}</h2>
          <dl className="accomplishment-data">
            <div>
              <dt>Completado por</dt>
              <dd>{course.accomplishment.completedBy}</dd>
            </div>
            <div>
              <dt>Fecha de finalización</dt>
              <dd>{course.accomplishment.completionDate}</dd>
            </div>
          </dl>
          <div className="accomplishment-topics">
            <p>Temas de IA aprendidos</p>
            <ul>
              {course.accomplishment.topics.map((topic) => <li key={topic}>{topic}</li>)}
            </ul>
          </div>
          <p className="accomplishment-status">✓ Logro: evaluación calificada aprobada</p>
        </section>
      ) : null}
    </main>
  )
}
