"use client"

import { homeContent, technologies } from "@/components/home/data"
import { useSiteLanguage } from "@/components/providers/site-provider"

export function StackSection() {
  const { lang } = useSiteLanguage()
  const t = homeContent[lang]

  return (
    <section className="terminal-section" id="stack">
      <div className="terminal-header">{t.stackTitle}</div>
      <div className="terminal-row">
        <span className="prompt">{"guest@jesus:~$"}</span>
        <span className="command">stack --list</span>
      </div>
      {t.terminalRows.map((row) => (
        <div className="terminal-row" key={row}>
          <span className="output">{`> ${row}`}</span>
        </div>
      ))}
      <div className="terminal-row">
        <span className="prompt">{"guest@jesus:~$"}</span>
        <span className="command">skills --render badges</span>
      </div>
      <div className="tech-badges">
        {technologies.map((tech) => (
          <span className="tech-pill" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}
