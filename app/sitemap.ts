import type { MetadataRoute } from "next"
import { regionalProjects } from "@/components/home/data"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devjesusdelgado.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...regionalProjects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
