"use client"

import { homeContent, profile } from "@/components/home/data"
import { useSiteLanguage } from "@/components/providers/site-provider"

export function Footer() {
  const { lang } = useSiteLanguage()
  const t = homeContent[lang]

  return (
    <footer className="container site-footer">
      <div className="footer-logo">
        <p style={{ color: "var(--accent-retro)", fontSize: "0.8rem", marginBottom: "10px" }}>END_OF_PAGE</p>
        <h2>
          {profile.name.toUpperCase()}
          <br />
          2026©
        </h2>
      </div>
      <div style={{ textAlign: "right" }}>
        <div style={{ marginBottom: "20px" }}>
          <a href={profile.whatsappUrl} target="_blank" rel="noreferrer">
            WHATSAPP
          </a>
          <a href={`mailto:${profile.email}`}>EMAIL</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LINKEDIN
          </a>
          <a href={`https://github.com/${profile.githubUser}`} target="_blank" rel="noreferrer">
            GITHUB
          </a>
        </div>
        <p className="copyright">{t.footerLead}</p>
      </div>
    </footer>
  )
}
