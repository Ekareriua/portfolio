export type ProjectStatus = 'in-development' | 'completed'

export type Project = {
  id: string
  title: string
  status: ProjectStatus
  description: string
  technologies: string[]
  // Optional — add these when they're ready and the card will show them.
  image?: string // put the file in /public/projects/ and use 'projects/file-name.png'
  imageAlt?: string
  githubUrl?: string
  liveUrl?: string
}

// The Projects section (and its menu link) only appears once this list has a project.
// Example:
// {
//   id: 'my-project',
//   title: 'My Project',
//   status: 'completed',
//   description: 'One or two sentences about what it does and how you built it.',
//   technologies: ['React', 'TypeScript'],
//   githubUrl: 'https://github.com/kate-utina/my-project',
//   liveUrl: 'https://kate-utina.github.io/my-project/',
// },
export const projects: Project[] = []
