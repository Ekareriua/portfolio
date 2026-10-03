import { contact } from '../data/links'
import { projects } from '../data/projects'
import './Hero.css'

export function Hero() {
  const currentProject = projects.find((project) => project.status === 'in-development')

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
              Contact me
            </a>
          </div>
        </div>

        {/* Decorative summary card — the same info is in the text on the page */}
        <div className="hero__card" aria-hidden="true">
          <div className="hero__card-bar">
            <span />
            <span />
            <span />
            <p>about.ts</p>
          </div>
          <pre className="hero__code">
            <code>
              <span className="code-keyword">const</span> kate = {'{\n'}
              {'  '}role: <span className="code-string">'Web Developer'</span>,{'\n'}
              {'  '}focus: [{'\n'}
              {'    '}<span className="code-string">'JavaScript'</span>,{'\n'}
              {'    '}<span className="code-string">'TypeScript'</span>,{'\n'}
              {'    '}<span className="code-string">'React'</span>,{'\n'}
              {'  '}],{'\n'}
              {currentProject && (
                <>
                  {'  '}building: <span className="code-string">'{currentProject.title}'</span>,
                  {'\n'}
                </>
              )}
              {'}'}
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
