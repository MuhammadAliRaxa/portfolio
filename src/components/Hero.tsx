'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Mail, Smartphone } from 'lucide-react'





const roles = [
  'Flutter & Dart Engineer',
  'Cross-Platform Mobile Architect',
  'Multi-Tenant App Developer',
  'Clean Architecture Specialist',
]

const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#090a0f] pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Soft Ambient Background Highlight */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-950/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">

          {/* Left Column - Intro Text */}
          <motion.div
            className="flex flex-col items-start lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-[#12131a] px-3.5 py-1 text-xs font-mono font-medium text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for Hire & Contract</span>
            </div>

            {/* Main Title */}
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Hi, I'm <br />
              <span className="text-white">
                Muhammad Ali Raza
              </span>
            </h1>

            {/* Dynamic Role Subtitle */}
            <div className="mt-3 flex items-center text-lg font-semibold text-zinc-400 sm:text-xl md:text-2xl">
              <div className="relative h-8 overflow-hidden">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="block text-red-500 font-mono font-bold"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </div>
            </div>

            {/* Brief Professional Summary */}
            <p className="mt-5 max-w-2xl text-base text-zinc-400 leading-relaxed sm:text-lg">
              Software Engineer specializing in <span className="text-zinc-200 font-semibold">Flutter & Cross-Platform Development</span>. <span className="text-zinc-200 font-semibold font-mono">2+ years of experience</span> shipping <span className="text-zinc-200 font-semibold font-mono">15+ production mobile applications</span> across three tech companies, focused on Clean Architecture, Bloc/Riverpod state management, and real-time backend integrations.
            </p>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2.5 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-red-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </motion.a>

              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-xl border border-zinc-800 bg-[#12131a] px-6 py-3 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-700 hover:text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="h-4 w-4 text-red-400" />
                <span>Contact Me</span>
              </motion.a>

              <motion.a
                href="https://github.com/muhammadaliraxa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-[#12131a] text-zinc-400 transition-all hover:border-zinc-700 hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="GitHub Profile"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </motion.a>
            </div>

            {/* Quick Skill Tags */}
            <div className="mt-8 flex flex-wrap gap-2 border-t border-zinc-800/80 pt-6">
              {['Flutter', 'Dart', 'Bloc', 'Riverpod', 'Firebase', 'REST APIs', 'Multi-Tenant', 'OpenAI AI'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-zinc-800 bg-[#12131a] px-3 py-1 text-xs font-mono font-medium text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Sleek Profile Display */}
          <motion.div
            className="flex justify-center lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative flex flex-col items-center">
              {/* Profile Image Frame */}
              <div className="relative h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 p-2 shadow-2xl">
                <Image
                  src="/profile-new.png"
                  alt="Muhammad Ali Raza"
                  width={320}
                  height={320}
                  className="h-full w-full rounded-xl object-cover object-center"
                  priority
                />
              </div>

              {/* Clean Sub-Card */}
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-zinc-800 bg-[#12131a] px-4 py-2.5 shadow-lg">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-950/60 border border-red-900/40 text-red-400">
                  <Smartphone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-mono font-medium text-zinc-400">Primary Tech Stack</p>
                  <p className="text-sm font-semibold text-white">Flutter & Cross-Platform iOS/Android</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Grid */}
        <motion.div
          className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-zinc-800/80 bg-[#12131a]/60 p-6 sm:grid-cols-4 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl font-mono font-extrabold text-white sm:text-4xl">2+ Years</span>
            <span className="mt-1 text-xs font-medium text-zinc-400 sm:text-sm">Professional Experience</span>
          </div>
          <div className="flex flex-col items-center text-center border-l border-zinc-800">
            <span className="text-3xl font-mono font-extrabold text-white sm:text-4xl">15+</span>
            <span className="mt-1 text-xs font-medium text-zinc-400 sm:text-sm">Production Apps Shipped</span>
          </div>
          <div className="flex flex-col items-center text-center border-l border-zinc-800">
            <span className="text-3xl font-mono font-extrabold text-white sm:text-4xl">3</span>
            <span className="mt-1 text-xs font-medium text-zinc-400 sm:text-sm">Tech Companies</span>
          </div>
          <div className="flex flex-col items-center text-center border-l border-zinc-800">
            <span className="text-3xl font-mono font-extrabold text-white sm:text-4xl">3.45</span>
            <span className="mt-1 text-xs font-medium text-zinc-400 sm:text-sm">BS CS Academic CGPA</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero

