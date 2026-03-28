import { NextResponse } from "next/server"
import { regionalProjects } from "@/components/home/data"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://devjesusdelgado.com"
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"
const INDEXNOW_KEY = "c4b8d2e9f1a6475e8b3c9d0a1f2e4b6c"

function getDefaultUrls() {
  return [
    `${SITE_URL}/`,
    `${SITE_URL}/about`,
    `${SITE_URL}/privacy`,
    ...regionalProjects.map((project) => `${SITE_URL}/projects/${project.slug}`),
  ]
}

export async function POST(request: Request) {
  let urls = getDefaultUrls()

  try {
    const body = (await request.json()) as { urls?: string[] } | null
    if (body?.urls && body.urls.length > 0) {
      urls = body.urls
    }
  } catch {
    // Fall back to the default URL list when the request body is empty or invalid JSON.
  }

  const payload = {
    host: new URL(SITE_URL).host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorText = await response.text()
    return NextResponse.json({ ok: false, status: response.status, error: errorText }, { status: 500 })
  }

  return NextResponse.json({ ok: true, submitted: urls.length })
}
