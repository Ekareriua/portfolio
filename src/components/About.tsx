import { Section } from './Section'
import './About.css'

export function About() {
  return (
    <Section id="about" label="02 — Background" title="About Me">
      <div className="about">
        <p className="about__lead">
          I'm a junior web developer focused on JavaScript and modern web development.
        </p>
        <div className="about__text">
          <p>
            I started my career in software testing, which got me curious about how web
            applications work — and how to find the problems hiding in them. That
            curiosity eventually pulled me towards programming, and I began building my
            skills in web development.
          </p>
          <p>
            Right now I'm working on personal projects and strengthening my knowledge of
            JavaScript, TypeScript, React and Node.js.
          </p>
        </div>
      </div>
    </Section>
  )
}
