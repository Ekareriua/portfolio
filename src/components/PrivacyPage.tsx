import { contact } from '../data/links'
import { Footer } from './Footer'
import { PageBar } from './PageBar'
import './PrivacyPage.css'

// Update this date whenever you change the notice
const lastUpdated = '4 October 2026'

export function PrivacyPage() {
  return (
    <>
      <PageBar />

      <main className="container privacy">
        <h1 className="privacy__title">Privacy</h1>
        <p className="privacy__updated">Last updated: {lastUpdated}</p>

        <p>
          This website doesn't use cookies, analytics or any tracking. It's hosted by
          Cloudflare, which handles basic technical data (like IP addresses) to deliver the site.
        </p>
        <p>
          If you email me, I'll use your details only to reply and, if we work together, to do the
          project and send invoices. I don't share or sell them. I delete enquiries within a year
          unless we work together, in which case I keep records as long as UK tax rules require.
        </p>
        <p>
          You can ask me to see or delete your information at any time:{' '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>. You also have the right to
          complain to the{' '}
          <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer">
            ICO
          </a>
          .
        </p>
      </main>

      <Footer />
    </>
  )
}
