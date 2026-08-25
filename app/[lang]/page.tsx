import type { Metadata } from "next"
import { HomePage } from "@/components/home/home-page"
import { HomePageSchemaScripts } from "@/components/seo/schema-scripts"
import { getAlternates } from "@/lib/i18n"

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const isEs = lang === "es"
  return {
    title: isEs ? "Desarrollador Python e Ingeniero de IA" : "Python Developer & AI Engineer",
    description: isEs
      ? "Portfolio enfocado en Python, machine learning, IA generativa, computer vision, OpenAI, LM Studio, Django, Next.js, React Native, LangChain, AWS y despliegues en producción."
      : "Portfolio focused on Python, machine learning, generative AI, computer vision, OpenAI, LM Studio, Django, Next.js, React Native, LangChain, AWS, and production deployments.",
    alternates: getAlternates(lang),
    openGraph: {
      locale: isEs ? "es_CO" : "en_US",
      url: `/${lang}`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { lang } = await params
  return (
    <>
      <HomePageSchemaScripts lang={lang} />
      <HomePage />
    </>
  )
}
