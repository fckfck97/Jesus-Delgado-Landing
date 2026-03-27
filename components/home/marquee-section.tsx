"use client"

import { homeContent } from "@/components/home/data"
import { useSiteLanguage } from "@/components/providers/site-provider"

export function MarqueeSection() {
  const { lang } = useSiteLanguage()
  const t = homeContent[lang]

  return (
    <div className="marquee-container">
      <div className="marquee-text">
        {t.marquee.concat(t.marquee).map((item, index) => (
          <span key={`${item}-${index}`}>{item} • </span>
        ))}
      </div>
    </div>
  )
}
