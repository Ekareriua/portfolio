import { contact } from '../data/links'
import { projects } from '../data/projects'
import './Hero.css'

// Photo by Nathan Dumlao on Unsplash (free to use under the Unsplash License):
// https://unsplash.com/photos/q3YZ4g7j9yc
// To use your own photo instead, put it in /public and set heroImage to
// `${import.meta.env.BASE_URL}your-photo.jpg`
const heroImage = 'https://images.unsplash.com/photo-1600298882525-1ac025c98b68'
const heroImageAt = (width: number) => `${heroImage}?w=${width}&q=80&auto=format&fit=crop`

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">Hi, I'm Kate</p>
          <h1 id="hero-heading" className="hero__title">
            Web Developer
          </h1>
          <p className="hero__text">
            I build modern, responsive websites and web applications with JavaScript,
            TypeScript and React.
          </p>
          <div className="hero__actions">
            {/* Link to Projects when there are some, otherwise to GitHub */}
            {projects.length > 0 ? (
              <a href="#projects" className="button button--primary">
                View my projects
              </a>
            ) : (
              contact.github && (
                <a
                  href={contact.github}
                  className="button button--primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  View my GitHub
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              )
            )}
            <a href="#contact" className="button button--secondary">
              Get in touch
            </a>
          </div>
        </div>

        <figure className="hero__media">
          <img
            src={heroImageAt(1200)}
            srcSet={`${heroImageAt(700)} 700w, ${heroImageAt(1200)} 1200w, ${heroImageAt(1800)} 1800w`}
            sizes="(min-width: 60rem) 50vw, 100vw"
            alt="Snow-capped mountain behind pine trees, reflected in a calm lake"
            width="1200"
            height="800"
          />
        </figure>
      </div>
    </section>
  )
}
