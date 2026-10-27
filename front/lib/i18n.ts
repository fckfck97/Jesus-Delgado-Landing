const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://devjesusdelgado.com"

/**
 * Returns canonical + hreflang alternates for a given lang and path.
 * Path should NOT include the lang prefix (e.g. "/about", "/projects/slug", or "" for homepage).
 */
export function getAlternates(lang: string, path = "") {
  const cleanPath = path && !path.startsWith("/") ? `/${path}` : path
  return {
    canonical: `${SITE_URL}/${lang}${cleanPath}`,
    languages: {
      es: `${SITE_URL}/es${cleanPath}`,
      en: `${SITE_URL}/en${cleanPath}`,
      "x-default": `${SITE_URL}/es${cleanPath}`,
    },
  }
}
