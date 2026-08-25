import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ing. Jesus Delgado — Python Developer & AI Engineer",
    short_name: "Jesus Delgado",
    description: "Portfolio profesional de desarrollo Python, inteligencia artificial, automatización, aplicaciones web y mobile.",
    start_url: "/es",
    display: "standalone",
    background_color: "#0d0d0d",
    theme_color: "#0d0d0d",
    lang: "es",
    icons: [
      { src: "/icon-light-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  }
}
