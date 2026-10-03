export type ProjectStatus = 'in-development' | 'completed'

export type Project = {
  id: string
  title: string
  status: ProjectStatus
  description: string
  technologies: string[]
  // Optional — add these when they're ready and the card will show them.
  image?: string // put the file in /public/projects/ and use '/projects/file-name.png'
  imageAlt?: string
  githubUrl?: string
  liveUrl?: string
}

// To add a project, copy one of the objects below and change the values.
export const projects: Project[] = [
  {
    id: 'pomodoro-timer',
    title: 'Pomodoro Timer',
    status: 'in-development',
    description:
      'A productivity timer I am building with React and TypeScript to practise application state, user interactions and responsive interface design.',
    technologies: ['React', 'TypeScript', 'Vite'],
  },
]
