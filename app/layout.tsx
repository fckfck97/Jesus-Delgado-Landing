import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Mono, Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Footer } from "@/components/navigation/footer"
import { Navbar } from "@/components/navigation/navbar"
import { SiteProvider } from "@/components/providers/site-provider"
import { RootSchemaScripts } from "@/components/seo/schema-scripts"
import "./globals.css"

const _spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})
const _syne = Syne({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://devjesusdelgado.com"),
  title: "Ing. Jesus Delgado | Python Developer, AI Engineer, Web Builder",
  description:
    "Portfolio focused on Python, machine learning, deep learning, computer vision, Django, Next.js, React Native, Expo, LangChain, AWS, and production deployments.",
  keywords: [
    "Python developer",
    "AI engineer",
    "Machine learning",
    "Deep learning",
    "Computer vision",
    "Django",
    "Next.js",
    "React Native",
    "Expo",
    "LangChain",
    "AWS",
  ],
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Ing. Jesus Delgado | Python Developer, AI Engineer, Web Builder",
    description:
      "Portfolio focused on Python, machine learning, deep learning, computer vision, Django, Next.js, React Native, Expo, LangChain, AWS, and production deployments.",
    url: "/",
    siteName: "Ing. Jesus Delgado",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ing. Jesus Delgado - Python Developer & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ing. Jesus Delgado | Python Developer, AI Engineer, Web Builder",
    description:
      "Portfolio focused on Python, machine learning, deep learning, computer vision, Django, Next.js, React Native, Expo, LangChain, AWS, and production deployments.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <RootSchemaScripts />
      </head>
      <body className={`${_spaceMono.variable} ${_syne.variable} antialiased`}>
        <SiteProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </SiteProvider>
      </body>
    </html>
  )
}
