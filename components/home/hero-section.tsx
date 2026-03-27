"use client"

import { homeContent, profile } from "@/components/home/data"
import { useSiteLanguage } from "@/components/providers/site-provider"

export function HeroSection() {
  const { lang } = useSiteLanguage()
  const t = homeContent[lang]

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
            <button className="window-btn" aria-label="Minimize">
              <span className="minimize-icon"></span>
            </button>
            <button className="window-btn" aria-label="Maximize">
              <span className="maximize-icon"></span>
            </button>
            <button className="window-btn window-close" aria-label="Close">
              <span className="close-icon"></span>
            </button>
          </div>
        </div>
        <img src={profile.heroImage} alt="Ing. Jesus Delgado hero image" className="hero-image" />
      </div>
    </section>
  )
}
