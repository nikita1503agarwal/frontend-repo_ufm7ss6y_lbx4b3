import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <h2 className="text-2xl font-bold text-white">Contact</h2>
      <p className="mt-1 text-sm text-white/70">Let’s build something great together.</p>

      <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input aria-label="Your name" required placeholder="Name" className="rounded-md border border-white/10 bg-black/40 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50 sm:col-span-1" />
        <input aria-label="Email address" type="email" required placeholder="Email" className="rounded-md border border-white/10 bg-black/40 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50 sm:col-span-1" />
        <textarea aria-label="Message" required placeholder="Your message" rows="4" className="sm:col-span-2 rounded-md border border-white/10 bg-black/40 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50" />
        <div className="sm:col-span-2 flex items-center justify-between gap-3">
          <button type="submit" className="rounded-md bg-gradient-to-r from-fuchsia-500 to-indigo-600 px-4 py-2 font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:from-fuchsia-400 hover:to-indigo-500">
            Send message
          </button>

          <AnimatePresence>
            {sent && (
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="text-emerald-400"
                role="status"
                aria-live="polite"
              >
                Message sent! (demo)
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  )
}

export default Contact
