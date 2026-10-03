import { skillGroups } from '../data/skills'
import { Section } from './Section'
import './Skills.css'

export function Skills() {
  return (
    <Section
      id="skills"
      label="Toolkit"
      title="Skills"
      intro={<p>The languages, frameworks and tools I work with.</p>}
    >
      <ul className="skill-groups">
        {skillGroups.map((group) => (
          <li key={group.title} className="skill-group">
            <h3 className="skill-group__title">{group.title}</h3>
            <ul className="tag-list">
              {group.skills.map((skill) => (
                <li key={skill} className="tag">
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
