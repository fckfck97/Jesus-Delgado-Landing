import type { Metadata } from "next"
import { HomePage } from "@/components/home/home-page"
import { HomePageSchemaScripts } from "@/components/seo/schema-scripts"
import { getAlternates } from "@/lib/i18n"

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const isEs = lang === "es"
  return {
    title: "Ing. Jesus Delgado | Python Developer, AI Engineer, Web Builder",
    description: isEs
      ? "Portfolio enfocado en Python, machine learning, deep learning, computer vision, Django, Next.js, React Native, Expo, LangChain, AWS y despliegues en producción."
      : "Portfolio focused on Python, machine learning, deep learning, computer vision, Django, Next.js, React Native, Expo, LangChain, AWS, and production deployments.",
    alternates: getAlternates(lang),
    openGraph: {
      locale: isEs ? "es_CO" : "en_US",
      url: `/${lang}`,
    },
  }
}

export default function Page() {
  return (
    <>
      <HomePageSchemaScripts />
      <HomePage />
    </>
  )
}
