import type { Metadata } from "next"
import type { ReactNode } from "react"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"
import { SiteProvider } from "@/components/providers/site-provider"
import { getAlternates } from "@/lib/i18n"

const SUPPORTED_LANGS = ["es", "en"] as const
type Lang = (typeof SUPPORTED_LANGS)[number]

type LayoutProps = {
  children: ReactNode
  params: Promise<{ lang: string }>
}

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  return {
    alternates: getAlternates(lang),
  }
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params
  if (!SUPPORTED_LANGS.includes(lang as Lang)) notFound()

  return (
    <SiteProvider initialLang={lang as Lang}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </SiteProvider>
  )
}
