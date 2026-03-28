"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { homeContent, profile } from "@/components/home/data"
import { useSiteLanguage } from "@/components/providers/site-provider"
import { JesusDelgadoLogo } from "@/components/ui/logo"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [statusText, setStatusText] = useState("SYS_UP: 00:00:00 | CPU: 12%")
  const { lang, setLang } = useSiteLanguage()
  const t = homeContent[lang]
  const aboutLabel = lang === "es" ? "SOBRE MI" : "ABOUT"
  const testimonialsLabel = lang === "es" ? "TESTIMONIOS" : "TESTIMONIALS"

  useEffect(() => {
    let frameId = 0
    let lastSecond = ""

    const updateClock = () => {
      const now = new Date()
      const timeStr =
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0") +
        ":" +
        now.getSeconds().toString().padStart(2, "0")

      if (timeStr !== lastSecond) {
        lastSecond = timeStr
        setStatusText(`SYS_UP: ${timeStr} | CPU: 12%`)
      }

      frameId = window.requestAnimationFrame(updateClock)
    }

    frameId = window.requestAnimationFrame(updateClock)
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header>
      <div className="container header-row">
        <Link href="/" className="logo" aria-label={profile.name}>
          <JesusDelgadoLogo size={40} showText />
        </Link>
        <button
          type="button"
          className={menuOpen ? "menu-toggle is-open" : "menu-toggle"}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={menuOpen ? "header-actions is-open" : "header-actions"}>
          <nav className="nav-links">
            <Link href="/about" onClick={closeMenu}>
              {aboutLabel}
            </Link>
            <a href="/#work" onClick={closeMenu}>
              {t.nav.work}
            </a>
            <a href="/#stack" onClick={closeMenu}>
              {t.nav.stack}
            </a>
            <a href="/#projects" onClick={closeMenu}>
              {t.nav.projects}
            </a>
            <a href="/#testimonials" onClick={closeMenu}>
              {testimonialsLabel}
            </a>
            <a href="/#contact" onClick={closeMenu}>
              {t.nav.contact}
            </a>
          </nav>
          <div className="lang-switch" aria-label={t.langLabel}>
            <button
              className={lang === "es" ? "lang-btn is-active" : "lang-btn"}
              onClick={() => {
                setLang("es")
                closeMenu()
              }}
              type="button"
            >
              ES
            </button>
            <button
              className={lang === "en" ? "lang-btn is-active" : "lang-btn"}
              onClick={() => {
                setLang("en")
                closeMenu()
              }}
              type="button"
            >
              EN
            </button>
          </div>
          <div className="system-status">{statusText}</div>
        </div>
      </div>
    </header>
  )
}
