import type { ReactNode } from 'react'
import './Section.css'

type SectionProps = {
  id: string
  label: string // small text shown above the title, e.g. "01 — Projects"
  title: string
  intro?: ReactNode
  children: ReactNode
}

// Shared layout for every page section, so they all look consistent.
export function Section({ id, label, title, intro, children }: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section id={id} className="section" aria-labelledby={headingId}>
      <div className="container">
        <header className="section__header">
          <p className="section__label">{label}</p>
          <h2 id={headingId} className="section__title">
            {title}
          </h2>
          {intro && <div className="section__intro">{intro}</div>}
        </header>
        {children}
      </div>
    </section>
  )
}
