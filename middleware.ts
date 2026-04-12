import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const LANGS = ["es", "en"] as const
const DEFAULT_LANG = "es"

function detectLang(req: NextRequest): string {
  const cookie = req.cookies.get("lang")?.value
  if (cookie === "en" || cookie === "es") return cookie

  const accept = req.headers.get("accept-language") || ""
  const primary = accept.split(",")[0]?.split(";")[0]?.trim().toLowerCase() || ""
  if (primary.startsWith("en")) return "en"

  return DEFAULT_LANG
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Already lang-prefixed → pass through and expose lang via header for root layout
  const prefix = LANGS.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  )
  if (prefix) {
    const response = NextResponse.next()
    response.headers.set("x-lang", prefix)
    return response
  }

  // Redirect bare path to /{lang}/...
  const lang = detectLang(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(url, { status: 308 })
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|img|icon|apple-icon|og-image|sitemap\\.xml|robots\\.txt|llms\\.txt|favicon\\.ico|c4b8d2).*)",
  ],
}
