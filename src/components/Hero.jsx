import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]"
          >
            The next-gen blockchain for a multi-chain world
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-6 text-lg sm:text-xl text-slate-200/90 max-w-xl"
          >
            Lightning-fast, eco-friendly, and developer-first. Scale to millions of users with near-zero fees and instant finality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#get-started" className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500 px-6 py-3 text-slate-900 font-semibold shadow-xl shadow-fuchsia-500/20">
              Start Building
            </a>
            <a href="#tech" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 backdrop-blur px-6 py-3 text-white">
              Explore the tech
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-10 flex items-center gap-6 text-slate-200/80"
          >
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-white/80 border border-white/40" />
              ))}
            </div>
            <p className="text-sm">Trusted by 100k+ developers worldwide</p>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-slate-900/80" />
    </section>
  )
}
