'use client'

import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Mail, Smartphone, Briefcase, GraduationCap } from 'lucide-react'

const roles = [
  'Flutter Engineer',
  'Cross-Platform Architect',
  'Multi-Tenant App Engineer',
  'AI Integration Specialist',
  'Clean Architecture Expert',
]

const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050508] pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Red Ambient Background Lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-red-600/20 via-rose-600/15 to-red-950/20 blur-[140px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-10 h-[350px] w-[350px] rounded-full bg-red-700/10 blur-[110px]" />
        <div className="absolute bottom-10 left-10 h-[350px] w-[350px] rounded-full bg-rose-700/10 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Left Column */}
          <motion.div
            className="flex flex-col items-start lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Red Status Pill */}
            <motion.div
              className="inline-flex items-center gap-2.5 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 backdrop-blur-md"
              whileHover={{ scale: 1.03 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                Available for Hire
              </span>
            </motion.div>

            {/* Red & Black Headline */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-white via-red-200 to-red-600 bg-clip-text text-transparent animate-gradient">
                Muhammad Ali Raza
              </span>
            </h1>

            {/* Rotating Role Subtitle */}
            <div className="mt-4 flex items-center text-xl font-bold text-gray-300 sm:text-2xl md:text-3xl">
              <div className="relative h-9 overflow-hidden">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="block text-red-500"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </div>
            </div>

            {/* Summary */}
            <p className="mt-6 max-w-2xl text-base text-gray-400 sm:text-lg leading-relaxed">
              Results-driven Flutter Developer & CS graduate with <span className="text-white font-semibold">2+ years of experience</span> shipping <span className="text-white font-semibold">15+ production apps</span> for Android & iOS across three companies. Expert in <span className="text-red-400">Bloc, Riverpod, Firebase</span>, and Clean Architecture.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#projects"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-red-600/30 transition-all hover:shadow-red-600/50"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <span>View Projects</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-xl border border-gray-800 bg-[#0c0c14] px-6 py-3.5 text-base font-semibold text-gray-200 backdrop-blur-md transition-all hover:border-red-500/50 hover:bg-gray-900/80 hover:text-white"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Mail className="h-5 w-5 text-red-500" />
                <span>Get In Touch</span>
              </motion.a>

              <motion.a
                href="https://github.com/muhammadaliraxa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gray-800 bg-[#0c0c14] text-gray-400 transition-all hover:border-red-500/50 hover:bg-gray-900/80 hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="GitHub Profile"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </motion.a>
            </div>

            {/* Quick Tech Highlights */}
            <div className="mt-10 flex flex-wrap gap-2.5 border-t border-gray-800/80 pt-6">
              {['Flutter', 'Dart', 'Bloc', 'Riverpod', 'Provider', 'Firebase', 'REST APIs', 'OpenAI GPT'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-gray-800 bg-[#0c0c14] px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Red Avatar Stage */}
          <motion.div
            className="flex justify-center lg:col-span-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="perspective-1000 relative flex items-center justify-center"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Spinning Red Neon Ring */}
              <div className="absolute h-[340px] w-[340px] sm:h-[400px] sm:w-[400px] rounded-full bg-gradient-to-tr from-red-600 via-rose-600 to-red-900 opacity-80 blur-xl animate-spin-slow" />

              {/* Outer Dashed Red Circle */}
              <div className="absolute h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] rounded-full border-2 border-dashed border-red-500/40 animate-spin-reverse" />

              {/* 3D Tilt Container */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative z-10 flex flex-col items-center"
              >
                {/* Profile Image Frame */}
                <div className="group relative h-[280px] w-[280px] sm:h-[330px] sm:w-[330px] overflow-hidden rounded-full border-4 border-red-500/60 bg-gradient-to-b from-gray-900 to-black p-2 shadow-[0_0_50px_rgba(239,68,68,0.4)] transition-all duration-500 hover:border-red-500 hover:shadow-[0_0_80px_rgba(239,68,68,0.6)]">

                  <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-transparent to-rose-600/20 rounded-full" />

                  <Image
                    src="/profile-new.png"
                    alt="Muhammad Ali Raza"
                    width={330}
                    height={330}
                    className="h-full w-full rounded-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>

                {/* Floating Badge 1: Experience */}
                <motion.div
                  className="absolute -top-4 -left-6 sm:-top-6 sm:-left-8 flex items-center gap-2 rounded-2xl border border-red-500/40 bg-[#0d0910]/95 px-4 py-2.5 shadow-xl backdrop-blur-md animate-float"
                  whileHover={{ scale: 1.08 }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/20 text-red-500">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400">Experience</p>
                    <p className="text-sm font-bold text-white">2+ Years</p>
                  </div>
                </motion.div>

                {/* Floating Badge 2: Specialty */}
                <motion.div
                  className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-8 flex items-center gap-2.5 rounded-2xl border border-red-500/40 bg-[#0d0910]/95 px-4 py-2.5 shadow-xl backdrop-blur-md animate-float-delayed"
                  whileHover={{ scale: 1.08 }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/20 text-red-500">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400">Specialty</p>
                    <p className="text-sm font-bold text-white">Flutter & Dart</p>
                  </div>
                </motion.div>

                {/* Floating Badge 3: Education */}
                <motion.div
                  className="absolute top-1/2 -right-8 sm:-right-12 -translate-y-1/2 hidden sm:flex items-center gap-2 rounded-2xl border border-red-500/40 bg-[#0d0910]/95 px-3.5 py-2 shadow-xl backdrop-blur-md"
                  whileHover={{ scale: 1.08 }}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/20 text-red-500">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-gray-400">Education</p>
                    <p className="text-xs font-bold text-white">BS CS Degree</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats Bar */}
        <motion.div
          className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-gray-800/80 bg-[#0a0a10]/60 p-6 backdrop-blur-md sm:grid-cols-4 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl font-extrabold text-red-500 sm:text-4xl">2+</span>
            <span className="mt-1 text-xs font-medium text-gray-400 sm:text-sm">Years Experience</span>
          </div>
          <div className="flex flex-col items-center text-center border-l border-gray-800">
            <span className="text-3xl font-extrabold text-rose-500 sm:text-4xl">3</span>
            <span className="mt-1 text-xs font-medium text-gray-400 sm:text-sm">Companies Served</span>
          </div>
          <div className="flex flex-col items-center text-center border-l border-gray-800">
            <span className="text-3xl font-extrabold text-red-400 sm:text-4xl">15+</span>
            <span className="mt-1 text-xs font-medium text-gray-400 sm:text-sm">Apps Shipped (Android & iOS)</span>
          </div>
          <div className="flex flex-col items-center text-center border-l border-gray-800">
            <span className="text-3xl font-extrabold text-rose-400 sm:text-4xl">100%</span>
            <span className="mt-1 text-xs font-medium text-gray-400 sm:text-sm">Production Ready</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
