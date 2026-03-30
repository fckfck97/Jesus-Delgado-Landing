import type { MetadataRoute } from "next"
import { regionalProjects } from "@/components/home/data"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devjesusdelgado.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: "2026-03-28",
    },
    {
      url: `${siteUrl}/about`,
      lastModified: "2026-03-28",
    },
    ...regionalProjects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: "2026-03-28",
    })),
  ]
}
