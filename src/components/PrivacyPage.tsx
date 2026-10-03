import { contact } from '../data/links'
import { Footer } from './Footer'
import './PrivacyPage.css'

// Update this date whenever you change the notice
const lastUpdated = '4 October 2026'

const home = import.meta.env.BASE_URL

export function PrivacyPage() {
  return (
    <>
      <header className="privacy-bar">
        <div className="container privacy-bar__inner">
          <a href={home} className="privacy-bar__logo">
            U<span className="privacy-bar__accent">.K</span>ate
          </a>
          <a href={home} className="privacy-bar__back">
            ← Back to the site
          </a>
        </div>
      </header>

      <main className="container privacy">
        <p className="eyebrow">Privacy</p>
        <h1 className="privacy__title">Privacy notice</h1>
        <p className="privacy__updated">Last updated: {lastUpdated}</p>

        <p className="privacy__lead">
          This notice explains how I, Kate (Ekaterina) Utina, handle personal information when
          you visit <strong>ukate.uk</strong> or get in touch with me. I'm responsible for your
          information (the "data controller"). You can contact me at{' '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>

        <h2>Visiting this website</h2>
        <ul>
          <li>This website does not use cookies, analytics or any kind of tracking.</li>
          <li>There are no forms, and nothing you do on the site is recorded by me.</li>
          <li>Fonts and images are served from this website itself, not from third parties.</li>
          <li>
            The site is delivered by <strong>Cloudflare</strong>. Like any web host, Cloudflare
            processes technical information such as your IP address and browser details to show
            you the pages and protect the site from attacks. See{' '}
            <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer">
              Cloudflare's privacy policy
            </a>
            .
          </li>
          <li>
            Links to LinkedIn take you to LinkedIn's website, which has its own privacy policy.
          </li>
        </ul>

        <h2>When you email me</h2>
        <ul>
          <li>
            <strong>What I receive:</strong> your name, email address and anything you include in
            your message, such as details about your project.
          </li>
          <li>
            <strong>Why:</strong> to reply to you and talk about your project. If we agree to work
            together, I also use it to do the work and to send and keep invoices.
          </li>
          <li>
            <strong>Legal basis:</strong> my legitimate interest in replying to enquiries, and
            taking steps to enter into or carry out a contract with you.
          </li>
          <li>
            <strong>Where it's stored:</strong> my email is provided by Google (Gmail). Google may
            store information outside the UK, using safeguards recognised under UK data protection
            law.
          </li>
        </ul>

        <h2>How long I keep it</h2>
        <ul>
          <li>
            If your enquiry doesn't lead to any work, I delete our emails within 12 months of our
            last contact.
          </li>
          <li>
            If we work together, I keep project emails and invoices for as long as UK tax rules
            require — currently at least 5 years after the deadline for the relevant tax return.
          </li>
        </ul>

        <h2>Sharing</h2>
        <p>
          I don't sell or rent your information, and I won't send you marketing without your
          permission. It's only shared with the services I need to run things (Google for email,
          Cloudflare for the website) or if the law requires it.
        </p>

        <h2>Your rights</h2>
        <p>Under UK data protection law you can ask me to:</p>
        <ul>
          <li>give you a copy of the information I hold about you</li>
          <li>correct anything that's wrong</li>
          <li>delete your information</li>
          <li>stop or limit how I use it</li>
          <li>send it to you in a format you can use elsewhere</li>
        </ul>
        <p>
          Just email me at <a href={`mailto:${contact.email}`}>{contact.email}</a> and I'll reply
          within one month.
        </p>
        <p>
          If you're unhappy with how I've handled your information, you can complain to the{' '}
          <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer">
            Information Commissioner's Office (ICO)
          </a>{' '}
          or call them on 0303 123 1113.
        </p>

        <h2>Changes</h2>
        <p>
          If I change how I handle personal information, I'll update this page and the date at the
          top.
        </p>
      </main>

      <Footer />
    </>
  )
}
