import { contact } from '../data/links'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>© 2026 Kate</p>
        <ul className="site-footer__links">
          {contact.email && (
            <li>
              <a href={`mailto:${contact.email}`}>Email</a>
            </li>
          )}
          {contact.linkedin && (
            <li>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </footer>
  )
}
