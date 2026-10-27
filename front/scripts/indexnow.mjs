/**
 * IndexNow submission script — llama directamente a la API de IndexNow.
 * Uso: node scripts/indexnow.mjs
 * O desde npm: npm run indexnow
 *
 * Agregar al crontab del servidor para ejecucion automatica:
 *   0 9 * * 1  cd /ruta/al/proyecto && node scripts/indexnow.mjs >> /var/log/indexnow.log 2>&1
 */

import { readFileSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

// Lee NEXT_PUBLIC_SITE_URL e INDEXNOW_KEY del .env.local si existe
function loadEnv() {
  try {
    const envPath = join(__dirname, "../.env.local")
    const lines = readFileSync(envPath, "utf-8").split("\n")
    for (const line of lines) {
      const [key, ...rest] = line.split("=")
      const value = rest.join("=").trim()
      if (key && value && !key.startsWith("#")) {
        process.env[key.trim()] = value
      }
    }
  } catch {
    // .env.local opcional — si no existe usa variables de entorno del sistema
  }
}

loadEnv()

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://devjesusdelgado.com"
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "c4b8d2e9f1a6475e8b3c9d0a1f2e4b6c"
const LANGS = ["es", "en"]
const PATHS = [
  "",
  "/about",
  "/projects/colombia-digital-platforms",
  "/projects/venezuela-ai-backend-systems",
  "/projects/usa-cloud-ai-products",
]

const urlList = LANGS.flatMap((lang) =>
  PATHS.map((path) => `${SITE_URL}/${lang}${path}`)
)

const payload = {
  host: new URL(SITE_URL).host,
  key: INDEXNOW_KEY,
  keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
  urlList,
}

console.log(`[IndexNow] Enviando ${urlList.length} URLs a indexnow.org...`)

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
})

if (res.ok) {
  console.log(`[IndexNow] OK (${res.status}) — URLs notificadas:`)
  urlList.forEach((u) => console.log(`  ${u}`))
} else {
  const body = await res.text()
  console.error(`[IndexNow] Error ${res.status}: ${body}`)
  process.exit(1)
}
