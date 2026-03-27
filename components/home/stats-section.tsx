"use client"

import { homeContent } from "@/components/home/data"
import { useSiteLanguage } from "@/components/providers/site-provider"

export function StatsSection() {
  const { lang } = useSiteLanguage()
  const t = homeContent[lang]

  return (
    <div className="stats-bar">
      {t.stats.map((item) => (
        <div className="stat-item" key={item.label}>
          <div className="stat-val">{item.value}</div>
          <div className="stat-label">{item.label}</div>
        </div>
      ))}
    </div>
  )
}
