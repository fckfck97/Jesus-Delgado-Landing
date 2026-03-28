"use client"

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"

type SiteLanguage = "es" | "en"

type SiteContextValue = {
  lang: SiteLanguage
  setLang: (lang: SiteLanguage) => void
}

const SiteContext = createContext<SiteContextValue | null>(null)

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<SiteLanguage>(() => {
    if (typeof window === "undefined") {
      return "es"
    }

    const storedLang = localStorage.getItem("lang")
    return storedLang === "en" || storedLang === "es" ? storedLang : "es"
  })

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem("lang", lang)
  }, [lang])

  const value = useMemo(() => ({ lang, setLang }), [lang])

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}

export function useSiteLanguage() {
  const context = useContext(SiteContext)

  if (!context) {
    throw new Error("useSiteLanguage must be used within SiteProvider")
  }

  return context
}
