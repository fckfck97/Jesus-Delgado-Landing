"use client"

import { homeContent } from "@/components/home/data"
import { useSiteLanguage } from "@/components/providers/site-provider"

export function TestimonialsSection() {
  const { lang } = useSiteLanguage()
  const t = homeContent[lang]

  return (
    <section id="testimonials">
      <h2 className="section-title">{t.testimonialsTitle}</h2>
      <p className="section-copy">{t.testimonialsIntro}</p>
      <div className="portfolio-grid">
        {t.testimonials.map((item) => (
          <div className="project-card" key={item.name + item.role}>
            <div className="project-info">
              <span className="project-tag">{item.tag}</span>
              <h3 className="project-title">{item.name}</h3>
              <p className="project-copy">"{item.quote}"</p>
              <p className="project-copy">
                {item.role} · {item.country}
              </p>
              <p className="project-copy">{item.result}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
