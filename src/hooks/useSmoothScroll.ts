import { useEffect } from 'react'

// Starts slowly, speeds up in the middle, and arrives gently
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

// Makes in-page links (#about, #skills, #contact, the logo…) glide smoothly to
// their section instead of jumping, with a soft start and a soft arrival.
export function useSmoothScroll() {
  useEffect(() => {
    let frame = 0

    function glideTo(targetY: number) {
      cancelAnimationFrame(frame)
      const startY = window.scrollY
      const distance = targetY - startY
      // Longer trips take a little longer: between 0.7 and 1.5 seconds
      const duration = Math.min(1500, Math.max(700, Math.abs(distance) * 0.6))
      const startTime = performance.now()

      function step(now: number) {
        const t = Math.min(1, (now - startTime) / duration)
        window.scrollTo(0, startY + distance * easeInOutCubic(t))
        if (t < 1) frame = requestAnimationFrame(step)
      }
      frame = requestAnimationFrame(step)
    }

    // If the visitor starts scrolling themselves, let them take over
    function stop() {
      cancelAnimationFrame(frame)
    }

    function onClick(event: MouseEvent) {
      // Leave cmd/ctrl-clicks (open in new tab) and other special clicks alone
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const link = (event.target as Element).closest('a[href^="#"]')
      const id = link?.getAttribute('href')?.slice(1)
      const section = id ? document.getElementById(id) : null
      if (!section) return

      event.preventDefault()

      // Stop just below the sticky header (its height is the page's scroll-padding-top)
      const headerOffset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0
      const sectionY = section.getBoundingClientRect().top + window.scrollY - headerOffset
      const targetY = id === 'home' ? 0 : Math.max(0, Math.round(sectionY)) // "home" = very top

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.scrollTo(0, targetY)
      } else {
        glideTo(targetY)
      }

      // Keep the address bar in sync and move keyboard focus to the section
      history.pushState(null, '', `#${id}`)
      if (!section.hasAttribute('tabindex')) section.setAttribute('tabindex', '-1')
      section.focus({ preventScroll: true })
    }

    document.addEventListener('click', onClick)
    window.addEventListener('wheel', stop, { passive: true })
    window.addEventListener('touchstart', stop, { passive: true })
    window.addEventListener('keydown', stop)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('click', onClick)
      window.removeEventListener('wheel', stop)
      window.removeEventListener('touchstart', stop)
      window.removeEventListener('keydown', stop)
    }
  }, [])
}
