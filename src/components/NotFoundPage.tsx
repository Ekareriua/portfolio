import { Footer } from './Footer'
import { PageBar } from './PageBar'
import './NotFoundPage.css'

const home = import.meta.env.BASE_URL

// Shown for any address that doesn't exist on the site
export function NotFoundPage() {
  return (
    <div className="page-layout">
      <PageBar />

      <main className="container not-found">
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <h1 className="not-found__title">This page doesn't exist</h1>
        <p className="not-found__text">
          The link might be mistyped, or the page may have moved. Everything on this site is on
          the homepage.
        </p>
        <div className="not-found__actions">
          <a href={home} className="button button--primary">
            Go to the homepage
          </a>
          <a href={`${home}#contact`} className="button button--secondary">
            Get in touch
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
