import { contact } from '../data/links'
import { Section } from './Section'
import './Contact.css'

// Strip "https://" etc. so the link text is shorter and easier to read
function displayUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
}

export function Contact() {
  const items = [
    {
      label: 'Email',
      href: contact.email ? `mailto:${contact.email}` : '',
      text: contact.email,
      external: false,
    },
    { label: 'GitHub', href: contact.github, text: displayUrl(contact.github), external: true },
    {
      label: 'LinkedIn',
      href: contact.linkedin,
      text: displayUrl(contact.linkedin),
      external: true,
    },
  ]

  return (
    <Section
      id="contact"
      label="Say hello"
      title="Let's connect"
      intro={
        <p>
          I'm currently building my experience through personal projects and looking for
          opportunities to grow as a developer.
        </p>
      }
    >
      <ul className="contact-list">
        {items.map((item) => (
          <li key={item.label} className="contact-item">
            <span className="contact-item__label">{item.label}</span>
            {item.href ? (
              <a
                href={item.href}
                className="contact-item__link"
                {...(item.external && { target: '_blank', rel: 'noreferrer' })}
              >
                {item.text}
                {item.external && <span className="visually-hidden"> (opens in a new tab)</span>}
              </a>
            ) : (
              <span className="contact-item__pending">Coming soon</span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}
