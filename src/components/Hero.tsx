'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Mail, ShieldCheck, Sparkles, Smartphone } from 'lucide-react'

const capabilities = [
  'Enterprise Mobile Engineering',
  'Cross-Platform Flutter Architecture',
  'Clean Architecture & Scalable Systems',
  'High-Performance Mobile Apps',
]

const Hero: React.FC = () => {
  const [capIndex, setCapIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCapIndex((prev) => (prev + 1) % capabilities.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050811]">
      {/* Layered ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main cyan glow behind emblem */}
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-[55%] rounded-full bg-cyan-500/15 blur-[160px]" />
        {/* Secondary electric blue glow */}
        <div className="absolute top-1/3 right-1/4 h-[350px] w-[350px] rounded-full bg-blue-600/12 blur-[130px]" />
        {/* Bottom teal wash */}
        <div className="absolute bottom-0 left-1/3 h-[250px] w-[500px] rounded-full bg-teal-500/10 blur-[110px]" />
      </div>

      {/* Grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16">

        {/* Top status badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/25 bg-[#0b101b]/80 backdrop-blur-xl px-4 py-1.5 text-[11px] font-medium text-cyan-300 shadow-lg shadow-cyan-950/40">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#48e5c2]" />
            </span>
            <span className="font-mono uppercase tracking-wider text-[10px]">
              Enterprise Mobile Engineering Studio
            </span>
          </div>
        </motion.div>

        {/* Studio Emblem Visual — High-tech glowing digital core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mb-8"
        >
          {/* Outer glowing aura */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-400/25 via-teal-500/15 to-blue-600/20 blur-2xl animate-pulse" />
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-400/40 via-transparent to-blue-600/30" />

          {/* Central Glass Emblem */}
          <div className="relative flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center rounded-3xl border border-cyan-400/30 bg-[#0b101b]/90 backdrop-blur-2xl shadow-2xl shadow-cyan-950/80 group">
            {/* Ambient rotating ring */}
            <div className="absolute inset-2 rounded-2xl border border-dashed border-cyan-500/20 animate-spin" style={{ animationDuration: '24s' }} />
            
            {/* Tech Glyph Icon */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/10 border border-cyan-400/30 text-[#48e5c2] shadow-inner">
                <Smartphone className="h-7 w-7 sm:h-8 sm:w-8 text-[#48e5c2]" />
                <Sparkles className="absolute -top-1 -right-1 h-3.5 w-3.5 text-cyan-300 animate-bounce" />
              </div>
            </div>

            {/* Verified studio badge */}
            <div className="absolute -bottom-2 -right-2 rounded-full bg-[#050811] p-1">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#48e5c2] shadow-lg shadow-cyan-400/40">
                <ShieldCheck className="h-4 w-4 text-[#050811]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Company Title — massive display type */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-center mb-4"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[0.92]">
            Apex
            <br />
            <span className="bg-gradient-to-r from-white via-cyan-100 to-[#48e5c2] bg-clip-text text-transparent">
              Mobile Labs
            </span>
          </h1>
        </motion.div>

        {/* Animated capability marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6 h-7 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={capIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm sm:text-base font-mono font-medium text-cyan-400 tracking-wider uppercase text-center"
            >
              {capabilities[capIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Studio mission statement */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-xl text-center text-sm sm:text-base text-zinc-400 leading-relaxed mb-8"
        >
          Architecting <span className="text-white font-medium">mission-critical mobile applications</span> with Flutter & Dart.{' '}
          <span className="text-cyan-300 font-medium">15+ enterprise applications deployed</span> across Android & iOS,
          powered by Clean Architecture, 60fps native performance, and real-time cloud backends.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-[#48e5c2] px-6 py-2.5 text-sm font-bold text-[#050811] transition-all hover:bg-[#3dd1b0] hover:shadow-lg hover:shadow-cyan-400/25"
          >
            <span>Explore Solutions</span>
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-[#0b101b]/60 px-6 py-2.5 text-sm font-semibold text-zinc-300 transition-all hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
          >
            <Mail className="h-3.5 w-3.5 text-cyan-400" />
            <span>Start a Project</span>
          </a>
        </motion.div>

        {/* Tech Focus Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-lg"
        >
          {['iOS & Android', 'Flutter SDK', 'Clean Architecture', 'Bloc & Riverpod', 'Firebase & Cloud'].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-500/15 bg-[#0b101b]/60 px-3 py-1 text-[11px] font-mono text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Studio Stats strip — floating glass bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full max-w-2xl"
        >
          <div className="grid grid-cols-4 rounded-2xl border border-cyan-500/15 bg-[#0b101b]/80 backdrop-blur-xl divide-x divide-cyan-500/10 shadow-xl shadow-black/50">
            {[
              { value: '15+', label: 'Flagship Apps' },
              { value: '60 FPS', label: 'Fluid UI' },
              { value: '99.9%', label: 'Uptime & Stability' },
              { value: '100%', label: 'Clean Arch' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center py-4 px-2 text-center">
                <span className="text-base sm:text-xl font-black text-white tracking-tight">{stat.value}</span>
                <span className="text-[9px] sm:text-xs text-cyan-400/80 mt-0.5 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-5 rounded-full border border-cyan-500/30 flex items-start justify-center pt-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-[#48e5c2]" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
