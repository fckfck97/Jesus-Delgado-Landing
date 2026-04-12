import type { MetadataRoute } from "next"
import { regionalProjects } from "@/components/home/data"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devjesusdelgado.com"
const LANGS = ["es", "en"] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    { path: "", lastModified: "2026-04-12" },
    { path: "/about", lastModified: "2026-04-12" },
  ]

  const projectPaths = regionalProjects.map((p) => ({
    path: `/projects/${p.slug}`,
    lastModified: "2026-03-28",
  }))

  const allPaths = [...staticPaths, ...projectPaths]

  return LANGS.flatMap((lang) =>
    allPaths.map(({ path, lastModified }) => ({
      url: `${siteUrl}/${lang}${path}`,
      lastModified,
    }))
  )
}
