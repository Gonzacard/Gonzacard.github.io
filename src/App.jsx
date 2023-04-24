import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Hero from './components/Hero'
import SideNav from './components/SideNav'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <div className='relative'>
      <SideNav />
      <div className='w-4/5 absolute top-0 right-0 bottom-0'>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  )
}

export default App
