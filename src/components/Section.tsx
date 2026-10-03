import type { ReactNode } from 'react'
import './Section.css'

type SectionProps = {
  id: string
  label: string // small text shown above the title, e.g. "Background"
  title: string
  intro?: ReactNode
  children: ReactNode
}

// Shared layout for every page section: heading on the left, content on the right
// (stacked on small screens).
export function Section({ id, label, title, intro, children }: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section id={id} className="section" aria-labelledby={headingId}>
      <div className="container section__inner">
        <header className="section__header">
          <p className="eyebrow">{label}</p>
          <h2 id={headingId} className="section__title">
            {title}
          </h2>
          {intro && <div className="section__intro">{intro}</div>}
        </header>
        <div className="section__body">{children}</div>
      </div>
    </section>
  )
}
