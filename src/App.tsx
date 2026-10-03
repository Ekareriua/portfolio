import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { projects } from './data/projects'
import { Skills } from './components/Skills'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  useSmoothScroll()

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        {projects.length > 0 && <Projects />}
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
