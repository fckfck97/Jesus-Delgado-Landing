"use client"

import Image from "next/image"
import { homeContent, profile } from "@/components/home/data"
import { useSiteLanguage } from "@/components/providers/site-provider"

export function HeroSection() {
  const { lang } = useSiteLanguage()
  const t = homeContent[lang]
  const heroImageAlt =
    lang === "es"
      ? "Retrato de Ing. Jesus Delgado, Python Developer y AI Engineer."
      : "Portrait of Ing. Jesus Delgado, Python Developer and AI Engineer."

  return (
    <section className="hero">
      <div className="hero-content">
        <p style={{ color: "var(--accent-retro)", marginBottom: "10px" }}>{t.heroTag}</p>
        <h1>
          {t.heroTitleTop} <span>{t.heroTitleAccent}</span>
        </h1>
        <p>{t.heroDescription}</p>
        <p>{t.heroSecondary}</p>
        <div className="hero-actions">
          <a href="#work" className="btn-retro">
            {t.primaryCta}
          </a>
          <a href="#contact" className="btn-secondary">
            {t.secondaryCta}
          </a>
        </div>
      </div>
      <div className="window-frame">
        <div className="window-header">
          <span>JESUS_PROFILE.JPG</span>
          <div className="window-controls">
            <button className="window-btn" aria-hidden="true" tabIndex={-1}>
              <span className="minimize-icon"></span>
            </button>
            <button className="window-btn" aria-hidden="true" tabIndex={-1}>
              <span className="maximize-icon"></span>
            </button>
            <button className="window-btn window-close" aria-hidden="true" tabIndex={-1}>
              <span className="close-icon"></span>
            </button>
          </div>
        </div>
        <Image
          src={profile.heroImage}
          alt={heroImageAlt}
          className="hero-image"
          priority
          width={750}
          height={563}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  )
}
