import { useEffect, useState } from 'react'
import { navItems } from '../data/navigation'
import './Header.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu when the Escape key is pressed
  useEffect(() => {
    if (!menuOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#home" className="site-header__logo">
          Kate
        </a>

        <nav
          id="main-nav"
          className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}
          aria-label="Main"
        >
          <ul className="site-nav__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="site-nav__link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="visually-hidden">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <span className="menu-toggle__icon" aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
