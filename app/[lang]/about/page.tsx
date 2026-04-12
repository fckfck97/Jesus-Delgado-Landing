import type { Metadata } from "next"
import { AboutPageContent } from "@/components/about/about-page-content"
import { AboutPageSchemaScripts } from "@/components/seo/schema-scripts"
import { getAlternates } from "@/lib/i18n"

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const isEs = lang === "es"
  return {
    title: isEs ? "Sobre Mí | Ing. Jesus Delgado" : "About | Ing. Jesus Delgado",
    description: isEs
      ? "Ingeniero de software con base en Colombia especializado en Python, AI engineering, computer vision, sistemas backend y plataformas web en producción."
      : "Software engineer based in Colombia focused on Python, AI engineering, computer vision, backend systems, and production web platforms.",
    alternates: getAlternates(lang, "/about"),
    openGraph: {
      locale: isEs ? "es_CO" : "en_US",
      url: `/${lang}/about`,
    },
  }
}

export default function AboutPage() {
  return (
    <>
      <AboutPageSchemaScripts />
      <AboutPageContent />
    </>
  )
}
