import type { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devjesusdelgado.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // AI search crawlers — allowed for indexing and citation
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },      // Anthropic search/browse crawler
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "GoogleOther", allow: "/" },
      // AI training scrapers — blocked (content not available for bulk training)
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" }, // Anthropic bulk training crawler
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
