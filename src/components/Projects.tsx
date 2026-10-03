import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { Section } from './Section'

export function Projects() {
  return (
    <Section
      id="projects"
      label="Selected work"
      title="Projects"
      intro={<p>Personal projects I've designed and built.</p>}
    >
      <div className="card-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
