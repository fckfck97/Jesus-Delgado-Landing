"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { homeContent, profile } from "@/components/home/data"
import { useSiteLanguage } from "@/components/providers/site-provider"
import { JesusDelgadoLogo } from "@/components/ui/logo"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const clockRef = useRef<HTMLSpanElement>(null)
  const { lang, setLang } = useSiteLanguage()
  const t = homeContent[lang]
  const aboutLabel = lang === "es" ? "SOBRE MI" : "ABOUT"
  const testimonialsLabel = lang === "es" ? "TESTIMONIOS" : "TESTIMONIALS"
  const base = `/${lang}`

  useEffect(() => {
    let timerId: ReturnType<typeof setInterval>

    const updateClock = () => {
      const now = new Date()
      const timeStr =
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0") +
        ":" +
        now.getSeconds().toString().padStart(2, "0")
      if (clockRef.current) {
        clockRef.current.textContent = `SYS_UP: ${timeStr} | CPU: 12%`
      }
    }

    updateClock()
    timerId = setInterval(updateClock, 1000)
    return () => clearInterval(timerId)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header>
      <div className="container header-row">
        <Link href={base} className="logo" aria-label={profile.name}>
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
            <Link href={`${base}/about`} onClick={closeMenu}>
              {aboutLabel}
            </Link>
            <a href={`${base}#work`} onClick={closeMenu}>
              {t.nav.work}
            </a>
            <a href={`${base}#stack`} onClick={closeMenu}>
              {t.nav.stack}
            </a>
            <a href={`${base}#projects`} onClick={closeMenu}>
              {t.nav.projects}
            </a>
            <a href={`${base}#testimonials`} onClick={closeMenu}>
              {testimonialsLabel}
            </a>
            <a href={`${base}#contact`} onClick={closeMenu}>
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
          <div className="system-status"><span ref={clockRef}>SYS_UP: 00:00:00 | CPU: 12%</span></div>
        </div>
      </div>
    </header>
  )
}
