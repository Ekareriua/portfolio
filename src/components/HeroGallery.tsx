import { useEffect, useRef, type RefObject } from 'react'
import { heroPhotos } from '../data/heroPhotos'
import './HeroGallery.css'

const photoUrl = (id: string) =>
  `https://images.unsplash.com/${id}?w=700&q=75&auto=format&fit=crop`

// Each column shows all five photos in a different order, so the frame is never empty.
// The orders are chosen so the same photo never ends up side by side.
const leftOrder = [0, 2, 4, 1, 3]
const rightOrder = [3, 4, 1, 0, 2]

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
      // Desktop: the hero is pinned, so progress runs over the extra pinned height.
      // Mobile (not pinned): progress runs while the hero scrolls out of view.
      const pinnedRange = section.offsetHeight - (window.innerHeight - section.offsetTop)
      const range = pinnedRange > 100 ? pinnedRange : section.offsetHeight
      target = clamp(window.scrollY / range)
    }

    // Move the columns for a given progress: left goes up, right comes down
    function apply(progress: number) {
      const gallery = galleryRef.current
      const left = leftRef.current
      const right = rightRef.current
      if (!gallery || !left || !right) return

      // The columns travel exactly two photos (photo height + gap), on every screen size
      const photos = left.children as HTMLCollectionOf<HTMLElement>
      const step = photos[1].offsetTop - photos[0].offsetTop
      const travel = Math.min(step * 2, left.offsetHeight - gallery.clientHeight)
      left.style.transform = `translate3d(0, ${-progress * travel}px, 0)`
      right.style.transform = `translate3d(0, ${-(1 - progress) * travel}px, 0)`
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
