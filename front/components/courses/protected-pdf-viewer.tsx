"use client"

import { useEffect } from "react"

type ProtectedPdfViewerProps = {
  src: string
  title: string
}

export function ProtectedPdfViewer({ src, title }: ProtectedPdfViewerProps) {
  useEffect(() => {
    const preventRestrictedShortcut = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && ["p", "s"].includes(event.key.toLowerCase())) {
        event.preventDefault()
      }
    }

    document.body.classList.add("certificate-viewer-route")
    window.addEventListener("keydown", preventRestrictedShortcut)
    return () => {
      document.body.classList.remove("certificate-viewer-route")
      window.removeEventListener("keydown", preventRestrictedShortcut)
    }
  }, [])

  const viewerOptions = "#toolbar=0&navpanes=0&scrollbar=1&view=FitH"

  return (
    <div className="pdf-viewer-shell" onContextMenu={(event) => event.preventDefault()}>
      <iframe
        className="pdf-viewer"
        src={`${encodeURI(src)}${viewerOptions}`}
        title={title}
      />
    </div>
  )
}
