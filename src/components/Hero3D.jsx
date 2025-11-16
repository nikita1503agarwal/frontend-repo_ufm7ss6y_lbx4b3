import React, { useState, useEffect } from 'react'
import Spline from '@splinetool/react-spline'

function Hero3D({ onLoaded }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (loaded && onLoaded) onLoaded()
  }, [loaded, onLoaded])

  return (
    <div className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden rounded-2xl bg-[#0b0b12]">
      {/* Loading overlay */}
      {!loaded && (
        <div className="absolute inset-0 z-10 grid place-items-center bg-gradient-to-b from-black/80 to-black/40 text-white">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 animate-ping rounded-full bg-fuchsia-400"></div>
            <p className="text-sm tracking-wide">Loading 3D scene…</p>
          </div>
        </div>
      )}

      <Spline
        scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
        onLoad={() => setLoaded(true)}
        style={{ width: '100%', height: '100%' }}
      />

      {/* Gradient accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_10%,rgba(168,85,247,0.25),transparent),radial-gradient(40%_30%_at_30%_80%,rgba(59,130,246,0.2),transparent)]" />

      {/* Text overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(168,85,247,0.5)]">
          Building immersive web experiences
        </h1>
        <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/80">
          I craft fast, accessible, and delightful interfaces with React, Three.js, and GSAP.
        </p>
      </div>
    </div>
  )
}

export default Hero3D
