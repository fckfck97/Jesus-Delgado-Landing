import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Mono, Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { headers } from "next/headers"
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
  title: {
    default: "Ing. Jesus Delgado | Python Developer & AI Engineer",
    template: "%s | Jesus Delgado",
  },
  description:
    "Portfolio of Ing. Jesus Delgado — Python developer and AI engineer building production-grade backend systems, computer vision applications, and full-stack products for clients in Colombia, Venezuela, and the United States.",
  keywords: [
    "Python developer",
    "AI engineer",
    "Machine learning",
    "Generative AI",
    "Computer vision",
    "Django",
    "Next.js",
    "React Native",
    "Expo",
    "LangChain",
    "OpenAI",
    "LM Studio",
    "AWS",
  ],
  authors: [{ name: "Jesus Delgado", url: "https://devjesusdelgado.com" }],
  creator: "Jesus Delgado",
  publisher: "Jesus Delgado",
  category: "technology",
  applicationName: "Portfolio de Jesus Delgado",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Ing. Jesus Delgado | Python Developer, AI Engineer, Web Builder",
    description:
      "Portfolio of Ing. Jesus Delgado — Python developer and AI engineer building production-grade backend systems, computer vision applications, and full-stack products for clients in Colombia, Venezuela, and the United States.",
    siteName: "Ing. Jesus Delgado",
    type: "website",
    locale: "es_CO",
    alternateLocale: ["en_US"],
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
      "Portfolio of Ing. Jesus Delgado — Python developer and AI engineer building production-grade backend systems, computer vision applications, and full-stack products for clients in Colombia, Venezuela, and the United States.",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersList = await headers()
  const lang = (headersList.get("x-lang") as "es" | "en") ?? "es"

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/img/jesus.webp" fetchPriority="high" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <RootSchemaScripts />
      </head>
      <body className={`${_spaceMono.variable} ${_syne.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
