export type Skill = {
  name: string
  // true = something I'm actively learning and building confidence with
  learning?: boolean
}

export type SkillGroup = {
  title: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'JavaScript' },
      { name: 'TypeScript', learning: true },
      { name: 'React', learning: true },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', learning: true },
      { name: 'Express', learning: true },
      { name: 'REST APIs', learning: true },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', learning: true },
      { name: 'MongoDB', learning: true },
      { name: 'SQL', learning: true },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker', learning: true },
      { name: 'Vite' },
    ],
  },
]

export const currentlyLearning: string[] = [
  'React and TypeScript',
  'Backend development',
  'Automated testing',
  'Databases',
  'Deployment and DevOps fundamentals',
]
