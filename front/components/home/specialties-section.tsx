"use client"

import Image from "next/image"
import { homeContent } from "@/components/home/data"
import { useSiteLanguage } from "@/components/providers/site-provider"

export function SpecialtiesSection() {
  const { lang } = useSiteLanguage()
  const t = homeContent[lang]

  return (
    <section id="work">
      <h2 className="section-title">{t.workTitle}</h2>
      <div className="portfolio-grid">
        {t.workCards.map((card) => (
          <div className="project-card" key={card.code}>
            <div className="window-header" style={{ background: "#333", color: "#fff" }}>
              <span>{card.code}</span>
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
              src={card.image}
              alt={`${card.title}. ${card.description}`}
              className="project-img"
              width={1200}
              height={800}
              loading="lazy"
            />
            <div className="project-info">
              <span className="project-tag">{card.tag}</span>
              <h3 className="project-title">{card.title}</h3>
              <p className="project-copy">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
