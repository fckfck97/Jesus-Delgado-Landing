import type { Metadata } from "next"
import { AboutPageContent } from "@/components/about/about-page-content"

export const metadata: Metadata = {
  title: "About / Sobre Mi",
  description:
    "About / Sobre mi: Ing. Jesus Delgado, software engineer focused on Python, AI engineering, computer vision, backend systems, and production web platforms.",
  alternates: {
    canonical: "/about",
    languages: {
      es: "/about",
      en: "/about",
      "x-default": "/about",
    },
  },
}

export default function AboutPage() {
  return <AboutPageContent />
}
