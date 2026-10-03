import { projects } from './projects'

// Each item links to a section with the matching id.
// Add a new section here and it will appear in the navigation.
const allNavItems = [
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

// Hide the Projects link while there are no projects to show
export const navItems = allNavItems.filter(
  (item) => item.id !== 'projects' || projects.length > 0,
)
