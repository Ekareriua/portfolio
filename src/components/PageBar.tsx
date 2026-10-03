import './PageBar.css'

const home = import.meta.env.BASE_URL

// Simple top bar for the extra pages (privacy, 404): logo + a link back home
export function PageBar() {
  return (
    <header className="page-bar">
      <div className="container page-bar__inner">
        <a href={home} className="page-bar__logo">
          U<span className="page-bar__accent">.K</span>ate
        </a>
        <a href={home} className="page-bar__back">
          ← Back to the site
        </a>
      </div>
    </header>
  )
}
