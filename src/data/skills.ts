export type SkillGroup = {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'SQL'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Vite'],
  },
]
