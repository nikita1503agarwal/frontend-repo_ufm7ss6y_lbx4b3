import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'Three.js', 'GSAP', 'WebGL', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Redux', 'Jest', 'Cypress', 'Docker', 'AWS', 'MongoDB'
]

function SkillsMarquee() {
  const trackRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      if (!track) return

      const totalWidth = track.scrollWidth / 2
      gsap.set(track, { x: 0 })

      const tween = gsap.to(track, {
        x: -totalWidth,
        duration: 20,
        ease: 'none',
        repeat: -1,
      })

      return () => tween.kill()
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 py-4">
      <div
        ref={trackRef}
        className="flex gap-6 whitespace-nowrap will-change-transform"
        aria-label="Skills marquee"
        role="marquee"
      >
        {[...skills, ...skills].map((skill, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/90 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillsMarquee
