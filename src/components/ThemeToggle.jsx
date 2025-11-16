import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

function ThemeToggle() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored || (prefersDark ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/80 backdrop-blur transition hover:bg-white/10"
    >
      {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
      <span className="text-xs hidden sm:inline">{theme === 'dark' ? 'Dark' : 'Light'} mode</span>
    </button>
  )
}

export default ThemeToggle
