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
  title: "Ing. Jesus Delgado | Python Developer, AI Engineer, Web Builder",
  description:
    "Portfolio of Ing. Jesus Delgado — Python developer and AI engineer building production-grade backend systems, computer vision applications, and full-stack products for clients in Colombia, Venezuela, and the United States.",
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
  openGraph: {
    title: "Ing. Jesus Delgado | Python Developer, AI Engineer, Web Builder",
    description:
      "Portfolio of Ing. Jesus Delgado — Python developer and AI engineer building production-grade backend systems, computer vision applications, and full-stack products for clients in Colombia, Venezuela, and the United States.",
    siteName: "Ing. Jesus Delgado",
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
