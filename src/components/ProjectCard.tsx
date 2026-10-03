import type { Project } from '../data/projects'
import './ProjectCard.css'

const statusLabels: Record<Project['status'], string> = {
  'in-development': 'Currently in development',
  completed: 'Completed',
}

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, status, description, technologies, image, imageAlt, githubUrl, liveUrl } =
    project
  const hasLinks = githubUrl || liveUrl

  return (
    <article className="project-card">
      <div className="project-card__media">
        {image ? (
          <img src={image} alt={imageAlt ?? `Screenshot of ${title}`} loading="lazy" />
        ) : (
          // Shown until a screenshot is added
          <div className="project-card__placeholder" aria-hidden="true">
            <span>{title}</span>
          </div>
        )}
      </div>

      <div className="project-card__body">
        <p className={`status status--${status}`}>{statusLabels[status]}</p>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <ul className="tag-list" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>

        {hasLinks ? (
          <div className="project-card__links">
            {liveUrl && (
              <a href={liveUrl} className="text-link" target="_blank" rel="noreferrer">
                Live demo <span aria-hidden="true">↗</span>
                <span className="visually-hidden"> for {title} (opens in a new tab)</span>
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} className="text-link" target="_blank" rel="noreferrer">
                Code on GitHub <span aria-hidden="true">↗</span>
                <span className="visually-hidden"> for {title} (opens in a new tab)</span>
              </a>
            )}
          </div>
        ) : (
          status === 'in-development' && (
            <p className="project-card__note">Code and demo links coming soon.</p>
          )
        )}
      </div>
    </article>
  )
}
