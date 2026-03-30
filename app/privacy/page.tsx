import type { Metadata } from "next"
import { PrivacyPageContent } from "@/components/privacy/privacy-page-content"

export const metadata: Metadata = {
  title: "Privacy Policy / Politica de Privacidad",
  description:
    "Privacy Policy / Politica de Privacidad for devjesusdelgado.com covering analytics, contact data, and how project inquiries are handled.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function PrivacyPage() {
  return <PrivacyPageContent />
}
