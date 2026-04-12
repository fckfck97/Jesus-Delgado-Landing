import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container">
      <section className="not-found-page">
        <p className="project-detail-eyebrow">ERROR_404</p>
        <h1 className="not-found-title">
          PAGE <span>NOT FOUND</span>
        </h1>
        <p className="not-found-copy">
          The route you tried to open does not exist or was moved.
        </p>
        <div className="hero-actions">
          <Link href="/es" className="btn-retro">
            BACK TO HOME
          </Link>
          <Link href="/es#projects" className="btn-secondary">
            VIEW PROJECTS
          </Link>
        </div>
      </section>
    </div>
  )
}
