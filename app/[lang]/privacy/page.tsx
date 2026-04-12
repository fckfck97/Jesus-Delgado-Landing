import type { Metadata } from "next"
import { PrivacyPageContent } from "@/components/privacy/privacy-page-content"
import { getAlternates } from "@/lib/i18n"

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  return {
    title: "Privacy Policy / Política de Privacidad",
    description:
      "Privacy Policy / Política de Privacidad for devjesusdelgado.com covering analytics, contact data, and how project inquiries are handled.",
    alternates: getAlternates(lang, "/privacy"),
    robots: { index: false, follow: true },
  }
}

export default function PrivacyPage() {
  return <PrivacyPageContent />
}
