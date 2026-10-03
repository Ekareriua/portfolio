import { useEffect, useRef, type RefObject } from 'react'
import { heroPhotos, type HeroPhoto } from '../data/heroPhotos'
import './HeroGallery.css'

// How many pixels the photos move for each pixel you scroll.
// Higher = faster; lower = calmer.
const SPEED = 0.42

const clamp = (value: number) => Math.min(1, Math.max(0, value))

type HeroGalleryProps = {
  // The hero section — scroll progress is measured against it
  sectionRef: RefObject<HTMLElement | null>
}

// Two columns of photos that move in opposite directions as the page scrolls.
// The movement follows the scroll position, so scrolling back up reverses it.
export function HeroGallery({ sectionRef }: HeroGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Respect visitors who prefer less motion: keep the photos still
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let range = 1 // how far you scroll while the photos move (the hero's height)
    let target = 0 // where the scroll says we should be (0 → 1)
    let current = 0 // where we are now; eases towards target for a smooth glide
    let frame = 0

    function measure() {
      const section = sectionRef.current
      if (!section) return
      // Progress runs from the top of the page until the hero has scrolled
      // completely out of view, so the photos keep moving the whole time
      range = section.offsetHeight
      target = clamp(window.scrollY / range)
    }

    // Move the columns for a given progress: left goes up, right comes down
    function apply(progress: number) {
      const gallery = galleryRef.current
      const left = leftRef.current
      const right = rightRef.current
      if (!gallery || !left || !right) return

      // The right column starts a little lower so the tiles are staggered
      const stagger = gallery.clientWidth * 0.12
      // Travel follows the scroll length, but never past the end of the strips
      const longest = Math.min(left.offsetHeight, right.offsetHeight)
      const travel = Math.min(range * SPEED, longest - gallery.clientHeight - stagger)

      left.style.transform = `translate3d(0, ${-progress * travel}px, 0)`
      right.style.transform = `translate3d(0, ${-(1 - progress) * travel - stagger}px, 0)`
    }

    function draw() {
      current += (target - current) * 0.14
      if (Math.abs(target - current) < 0.0005) current = target
      apply(current)
      frame = current === target ? 0 : requestAnimationFrame(draw)
    }

    function onScroll() {
      measure()
      if (!frame) frame = requestAnimationFrame(draw)
    }

    // Set the starting positions straight away (no animation on page load)
    measure()
    current = target
    apply(current)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sectionRef])

  // Each photo keeps its own shape, so the heights vary naturally.
  // The title and description fade in on hover.
  const column = (photos: HeroPhoto[], ref: RefObject<HTMLDivElement | null>) => (
    <div className="hero-gallery__column" ref={ref}>
      {photos.map((photo) => (
        <div key={photo.src} className="hero-gallery__photo" style={{ aspectRatio: photo.ratio }}>
          <img src={`${import.meta.env.BASE_URL}${photo.src}`} alt="" />
          <div className="hero-gallery__caption">
            <p className="hero-gallery__title">{photo.title}</p>
            <p className="hero-gallery__description">{photo.description}</p>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    // Decorative scenery, so it's hidden from screen readers
    <div className="hero-gallery" ref={galleryRef} aria-hidden="true">
      {column(heroPhotos.left, leftRef)}
      {column(heroPhotos.right, rightRef)}
    </div>
  )
}
