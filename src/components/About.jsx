import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(sectionRef)
      gsap.from(q('.reveal'), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="space-y-4">
      <h2 className="reveal text-2xl sm:text-3xl font-bold text-white">About Me</h2>
      <p className="reveal max-w-3xl text-white/80">
        I’m a frontend engineer focused on building interactive, performant user interfaces. I blend
        creative coding, motion design, and accessibility to deliver experiences that feel alive
        without sacrificing usability.
      </p>
      <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Open to freelance and full-time roles
      </div>
    </section>
  )
}

export default About
