import React from 'react'
import Hero3D from './components/Hero3D'
import SkillsMarquee from './components/SkillsMarquee'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#hero" className="font-semibold tracking-tight">Engineer Portfolio</a>
          <nav className="flex items-center gap-3">
            <a href="#about" className="text-sm text-white/70 hover:text-white">About</a>
            <a href="#skills" className="text-sm text-white/70 hover:text-white">Skills</a>
            <a href="#projects" className="text-sm text-white/70 hover:text-white">Projects</a>
            <a href="#contact" className="text-sm text-white/70 hover:text-white">Contact</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="mx-auto max-w-6xl px-4 pt-8">
        <Hero3D />
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mt-8 text-3xl sm:text-5xl font-bold tracking-tight">Hi, I’m Alex — Frontend Engineer</h1>
          <p className="mt-3 text-white/70">
            I design and build interactive web apps that are fast, accessible, and visually rich.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <About />
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
          <p className="text-sm text-white/60">A toolkit focused on velocity and quality</p>
        </div>
        <SkillsMarquee />
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
          <p className="mt-1 text-white/70">A selection of work with a focus on interactivity</p>
        </div>
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-20">
        <Contact />
        <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Alex Doe</p>
      </section>
    </div>
  )
}

export default App
