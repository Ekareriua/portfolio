import { useEffect, useRef, type RefObject } from 'react'
import { heroPhotos } from '../data/heroPhotos'
import './HeroGallery.css'

const photoUrl = (id: string) =>
  `https://images.unsplash.com/${id}?w=700&q=75&auto=format&fit=crop`

// Each column shows five photos (numbers are positions in heroPhotos).
// The orders are chosen so the same photo never appears side by side.
const leftOrder = [0, 1, 2, 3, 4]
const rightOrder = [0, 3, 5, 6, 4]

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

    let target = 0 // where the scroll says we should be (0 → 1)
    let current = 0 // where we are now; eases towards target for a smooth glide
    let frame = 0

    function measure() {
      const section = sectionRef.current
      if (!section) return
      // Progress runs from the top of the page until the hero has scrolled
      // completely out of view, so the photos keep moving the whole time
      target = clamp(window.scrollY / section.offsetHeight)
    }

    // Move the columns for a given progress: left goes up, right comes down.
    // The right column is offset from the left so the tiles stay staggered
    // and don't line up into a grid when the photos come to rest.
    function apply(progress: number) {
      const gallery = galleryRef.current
      const left = leftRef.current
      const right = rightRef.current
      if (!gallery || !left || !right) return

      // Measured in "steps" (one photo height + gap) so it works on every screen size.
      // travel = how far each column moves; lower = slower, calmer movement.
      const photos = left.children as HTMLCollectionOf<HTMLElement>
      const step = photos[1].offsetTop - photos[0].offsetTop
      const stagger = step * 1.1
      const travel = Math.min(step * 1.4, left.offsetHeight - gallery.clientHeight - stagger)
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

  const column = (order: number[], ref: RefObject<HTMLDivElement | null>) => (
    <div className="hero-gallery__column" ref={ref}>
      {order.map((photoIndex) => (
        <div key={photoIndex} className="hero-gallery__photo">
          <img src={photoUrl(heroPhotos[photoIndex])} alt="" loading="eager" />
        </div>
      ))}
    </div>
  )

  return (
    // Decorative scenery, so it's hidden from screen readers
    <div className="hero-gallery" ref={galleryRef} aria-hidden="true">
      {column(leftOrder, leftRef)}
      {column(rightOrder, rightRef)}
    </div>
  )
}
