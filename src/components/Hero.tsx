import { contact } from '../data/links'
import { projects } from '../data/projects'
import './Hero.css'

// To use your own photo: put it in /public and change the file name here
const heroImage = 'hero-landscape.svg'

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__greeting">Hi, I'm Kate</p>
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

        <div className="hero__media">
          <img src={`${import.meta.env.BASE_URL}${heroImage}`} alt="" />
        </div>
      </div>
    </section>
  )
}
