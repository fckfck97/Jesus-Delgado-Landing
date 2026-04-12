"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"

type SiteLanguage = "es" | "en"

type SiteContextValue = {
  lang: SiteLanguage
  setLang: (lang: SiteLanguage) => void
}

const SiteContext = createContext<SiteContextValue | null>(null)

export function SiteProvider({
  children,
  initialLang,
}: {
  children: ReactNode
  initialLang: SiteLanguage
}) {
  const router = useRouter()
  const pathname = usePathname()

  const setLang = (newLang: SiteLanguage) => {
    // Replace /es/... with /en/... (or vice versa) in the current path
    const newPath = pathname.replace(/^\/(es|en)/, `/${newLang}`)
    document.cookie = `lang=${newLang}; path=/; max-age=31536000; SameSite=Lax`
    router.push(newPath)
  }

  return (
    <SiteContext.Provider value={{ lang: initialLang, setLang }}>
      {children}
    </SiteContext.Provider>
  )
}

export function useSiteLanguage() {
  const context = useContext(SiteContext)
  if (!context) throw new Error("useSiteLanguage must be used within SiteProvider")
  return context
}
