import React from 'react'

const items = [
  {
    title: '3D Product Customizer',
    description: 'Real-time WebGL customization with physics-based materials.',
    tags: ['Three.js', 'React', 'GSAP'],
  },
  {
    title: 'Realtime Dashboard',
    description: 'Live analytics and micro-interactions at 60fps.',
    tags: ['Vite', 'Tailwind', 'WebSockets'],
  },
  {
    title: 'Design System',
    description: 'Accessible, themeable components at scale.',
    tags: ['Radix', 'TypeScript', 'Storybook'],
  },
]

function Projects() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p, idx) => (
        <article
          key={idx}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 transition-transform will-change-transform"
        >
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(168,85,247,0.12),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative">
            <div className="h-40 w-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-900">
              <div className="h-full w-full scale-100 transform rounded-xl bg-[conic-gradient(from_0deg,rgba(255,255,255,0.06),transparent_60%)] transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-white/70">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/80">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Projects
