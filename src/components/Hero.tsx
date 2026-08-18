'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown, Mail } from 'lucide-react'

const roles = [
  'Flutter & Dart Specialist',
  'Cross-Platform Architect',
  'Mobile App Engineer',
  'Clean Architecture Dev',
]

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050811]">
      {/* Layered ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main cyan glow behind photo */}
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-[55%] rounded-full bg-cyan-500/15 blur-[160px]" />
        {/* Secondary electric blue glow */}
        <div className="absolute top-1/3 right-1/4 h-[350px] w-[350px] rounded-full bg-blue-600/12 blur-[130px]" />
        {/* Bottom teal wash */}
        <div className="absolute bottom-0 left-1/3 h-[250px] w-[500px] rounded-full bg-teal-500/10 blur-[110px]" />
      </div>

      {/* Grain texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-20 pb-12">

        {/* Top status badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/20 bg-[#0b101b]/70 backdrop-blur-xl px-4 py-1.5 text-[11px] font-medium text-cyan-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#48e5c2]" />
            </span>
            <span>Available for hire & remote contracts</span>
          </div>
        </motion.div>

        {/* Profile Photo — large, central, dramatic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mb-8"
        >
          {/* Glowing ring behind the photo */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-cyan-400/30 via-teal-500/15 to-blue-600/20 blur-xl" />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400/40 via-transparent to-blue-600/30" />

          <div className="relative h-32 w-32 sm:h-40 sm:w-40 overflow-hidden rounded-full border-2 border-cyan-400/30 shadow-2xl shadow-cyan-950/60">
            <Image
              src="/profile-v3.jpg"
              alt="Muhammad Ali Raza"
              fill
              sizes="(max-width: 640px) 128px, 160px"
              className="object-cover object-[center_top]"
              priority
            />
          </div>

          {/* Verified badge — overlapping bottom-right */}
          <div className="absolute -bottom-1 -right-1 rounded-full bg-[#050811] p-1">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#48e5c2] shadow-lg shadow-cyan-400/30">
              <svg className="h-3.5 w-3.5 text-[#050811]" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Name — massive display type */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-center mb-4"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
            Muhammad
            <br />
            <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent">
              Ali Raza
            </span>
          </h1>
        </motion.div>

        {/* Animated role text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6 h-7 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm sm:text-base font-mono font-medium text-cyan-400 tracking-wider uppercase text-center"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* One-liner bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-lg text-center text-sm sm:text-base text-zinc-400 leading-relaxed mb-8"
        >
          Building <span className="text-white font-medium">production mobile apps</span> with Flutter & Dart.{' '}
          <span className="text-cyan-300 font-medium">15+ apps shipped</span> across 3 companies,
          powered by Clean Architecture & Firebase.
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
            <span>View Work</span>
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-[#0b101b]/60 px-6 py-2.5 text-sm font-semibold text-zinc-300 transition-all hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
          >
            <Mail className="h-3.5 w-3.5 text-cyan-400" />
            <span>Get in Touch</span>
          </a>
        </motion.div>

        {/* Social links — minimal icon row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center gap-1 mb-12"
        >
          <a
            href="https://github.com/muhammadaliraxa"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2.5 text-zinc-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all"
            title="GitHub"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a
            href="https://linkedin.com/in/muhammadaliraxa"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2.5 text-zinc-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all"
            title="LinkedIn"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a
            href="mailto:aliraza@example.com"
            className="rounded-full p-2.5 text-zinc-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all"
            title="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Stats strip — floating glass bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full max-w-2xl"
        >
          <div className="grid grid-cols-4 rounded-2xl border border-cyan-500/15 bg-[#0b101b]/80 backdrop-blur-xl divide-x divide-cyan-500/10 shadow-xl shadow-black/50">
            {[
              { value: '2+', label: 'Years' },
              { value: '15+', label: 'Apps Shipped' },
              { value: '3', label: 'Companies' },
              { value: '3.45', label: 'CGPA' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center py-4 px-2">
                <span className="text-lg sm:text-xl font-black text-white tracking-tight">{stat.value}</span>
                <span className="text-[10px] sm:text-xs text-cyan-400/80 mt-0.5">{stat.label}</span>
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
