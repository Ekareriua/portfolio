import { contact } from '../data/links'
import { Section } from './Section'
import './Contact.css'

export function Contact() {
  const items = [
    {
      label: 'Email',
      href: contact.email && `mailto:${contact.email}`,
      text: contact.email,
      external: false,
    },
    {
      label: 'LinkedIn',
      href: contact.linkedin,
      text: 'Connect on LinkedIn',
      external: true,
    },
  ].filter((item) => item.href) // hide anything that hasn't been filled in

  return (
    <Section
      id="contact"
      label="Say hello"
      title="Let's connect"
      intro={
        <p>
          Need a website or have a project in mind? Email me — it's the quickest way to
          reach me.
        </p>
      }
    >
      <ul className="contact-list">
        {items.map((item) => (
          <li key={item.label} className="contact-item">
            <span className="contact-item__label">{item.label}</span>
            <a
              href={item.href}
              className="contact-item__link"
              {...(item.external && { target: '_blank', rel: 'noreferrer' })}
            >
              {item.text}
              {item.external && <span className="visually-hidden"> (opens in a new tab)</span>}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
