import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { Section } from './Section'

export function Projects() {
  return (
    <Section
      id="projects"
      label="01 — Work in progress"
      title="Projects"
      intro={
        <p>
          These are personal and learning projects. Each one is a chance to practise
          something new and build real things along the way.
        </p>
      }
    >
      <div className="card-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
