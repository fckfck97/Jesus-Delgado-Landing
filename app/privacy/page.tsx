import type { Metadata } from "next"
import { PrivacyPageContent } from "@/components/privacy/privacy-page-content"

export const metadata: Metadata = {
  title: "Privacy Policy / Politica de Privacidad",
  description:
    "Privacy Policy / Politica de Privacidad for devjesusdelgado.com covering analytics, contact data, and how project inquiries are handled.",
  alternates: {
    canonical: "/privacy",
    languages: {
      es: "/privacy",
      en: "/privacy",
      "x-default": "/privacy",
    },
  },
}

export default function PrivacyPage() {
  return <PrivacyPageContent />
}
