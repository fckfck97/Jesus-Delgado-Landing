"use client"

import Link from "next/link"
import { homeContent, profile } from "@/components/home/data"
import { useSiteLanguage } from "@/components/providers/site-provider"

export function Footer() {
  const { lang } = useSiteLanguage()
  const t = homeContent[lang]
  const aboutLabel = lang === "es" ? "SOBRE MI" : "ABOUT"
  const privacyLabel = lang === "es" ? "PRIVACIDAD" : "PRIVACY"
  const testimonialsLabel = lang === "es" ? "TESTIMONIOS" : "TESTIMONIALS"

  return (
    <footer className="container site-footer">
      <div className="footer-logo">
        <p className="footer-tag">END_OF_PAGE</p>
        <h2>
          {profile.name.toUpperCase()}
          <br />
          2026©
        </h2>
      </div>
      <div className="footer-right">
        <nav className="footer-nav">
          <Link href="/about">{aboutLabel}</Link>
          <Link href="/privacy">{privacyLabel}</Link>
          <Link href="/#work">{t.nav.work}</Link>
          <Link href="/#stack">{t.nav.stack}</Link>
          <Link href="/#projects">{t.nav.projects}</Link>
          <Link href="/#testimonials">{testimonialsLabel}</Link>
          <Link href="/#contact">{t.nav.contact}</Link>
          <Link href="/projects/colombia-digital-platforms">COLOMBIA</Link>
          <Link href="/projects/venezuela-ai-backend-systems">VENEZUELA</Link>
          <Link href="/projects/usa-cloud-ai-products">USA</Link>
        </nav>
        <div className="footer-social">
          <a href={profile.whatsappUrl} target="_blank" rel="noreferrer">WHATSAPP</a>
          <a href={`mailto:${profile.email}`}>EMAIL</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
          <a href={`https://github.com/${profile.githubUser}`} target="_blank" rel="noreferrer">GITHUB</a>
        </div>
        <p className="copyright">{t.footerLead}</p>
      </div>
    </footer>
  )
}
