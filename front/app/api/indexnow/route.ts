import { NextResponse } from "next/server"
import { regionalProjects } from "@/components/home/data"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://devjesusdelgado.com"
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"
const INDEXNOW_KEY = process.env.INDEXNOW_KEY ?? "c4b8d2e9f1a6475e8b3c9d0a1f2e4b6c"

const LANGS = ["es", "en"] as const

function getAllUrls(): string[] {
  const paths = [
    "",
    "/about",
    ...regionalProjects.map((p) => `/projects/${p.slug}`),
  ]
  return LANGS.flatMap((lang) =>
    paths.map((path) => `${SITE_URL}/${lang}${path}`)
  )
}

async function submit(urls: string[]) {
  return fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  })
}

export async function POST(request: Request) {
  let urls = getAllUrls()

  try {
    const body = (await request.json()) as { urls?: string[] } | null
    if (body?.urls && body.urls.length > 0) urls = body.urls
  } catch {
    // body vacio o invalido — usa lista completa
  }

  const response = await submit(urls)

  if (!response.ok) {
    const error = await response.text()
    return NextResponse.json({ ok: false, status: response.status, error }, { status: 500 })
  }

  return NextResponse.json({ ok: true, submitted: urls.length })
}
