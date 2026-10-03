import { contact } from '../data/links'
import './Footer.css'

export function Footer() {
  const links = [
    { label: 'GitHub', href: contact.github },
    { label: 'LinkedIn', href: contact.linkedin },
  ]

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>© 2026 Kate</p>
        <ul className="site-footer__links">
          {links.map((link) => (
            <li key={link.label}>
              {link.href ? (
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              ) : (
                // Shown until the link is added in src/data/links.ts
                <span title="Coming soon">{link.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
