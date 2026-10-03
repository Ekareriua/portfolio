import { useRef } from 'react'
import { HeroGallery } from './HeroGallery'
import './Hero.css'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="home" className="hero" aria-labelledby="hero-heading" ref={sectionRef}>
      {/* On desktop this stays pinned while the photo columns move */}
      <div className="hero__pin">
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow eyebrow--dot">Hi, I'm Kate.</p>
            <h1 id="hero-heading" className="hero__title">
              Software Developer
            </h1>
            <p className="hero__text">
              I build modern, responsive websites and web applications with JavaScript,
              TypeScript and React.
            </p>
            <p className="hero__status">Open to new website projects</p>
          </div>

          <HeroGallery sectionRef={sectionRef} />
        </div>
      </div>
    </section>
  )
}
