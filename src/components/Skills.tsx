import { currentlyLearning, skillGroups } from '../data/skills'
import { Section } from './Section'
import './Skills.css'

export function Skills() {
  return (
    <Section
      id="skills"
      label="03 — Toolkit"
      title="Skills"
      intro={
        <p>
          Technologies I've worked with so far. Some I use comfortably; others I'm still
          actively learning and building confidence with.
        </p>
      }
    >
      <p className="skills-legend">
        <span className="skill skill--learning">Marked like this</span> = currently
        developing
      </p>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-group">
            <h3 className="skill-group__title">{group.title}</h3>
            <ul className="skill-group__list">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className={`skill ${skill.learning ? 'skill--learning' : ''}`}
                >
                  {skill.name}
                  {skill.learning && (
                    <span className="visually-hidden"> (currently developing)</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="learning">
        <div className="learning__header">
          <h3 className="learning__title">Currently learning</h3>
          <p className="learning__text">
            This portfolio is part of an ongoing learning journey. Here's what I'm focusing
            on right now:
          </p>
        </div>
        <ol className="learning__list">
          {currentlyLearning.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
