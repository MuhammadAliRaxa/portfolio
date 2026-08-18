'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Smartphone,
  Layers,
  Search,
  GitBranch,
  Palette,
  Layout,
  Code2,
  Cpu,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Rocket,
} from 'lucide-react'

interface ProcessStep {
  step: number
  title: string
  description: string
  icons: React.ReactNode[]
  badgeBg: string
  badgeText: string
}

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery & Architecture',
    description:
      'Analyzing requirements, defining Clean Architecture, and setting up scalable state management (Bloc / Riverpod) with modular structures.',
    icons: [
      <Search key="search" className="h-4 w-4" />,
      <Layers key="layers" className="h-4 w-4" />,
      <GitBranch key="git" className="h-4 w-4" />,
    ],
    badgeBg: 'bg-cyan-500/10 border-cyan-500/25',
    badgeText: 'text-[#48e5c2]',
  },
  {
    step: 2,
    title: 'UI/UX & Widget System',
    description:
      'Translating Figma designs into responsive, 60fps Flutter widget trees with smooth micro-interactions, dark/light themes, and adaptive layouts.',
    icons: [
      <Smartphone key="phone" className="h-4 w-4" />,
      <Palette key="palette" className="h-4 w-4" />,
      <Layout key="layout" className="h-4 w-4" />,
    ],
    badgeBg: 'bg-cyan-500/10 border-cyan-500/25',
    badgeText: 'text-[#48e5c2]',
  },
  {
    step: 3,
    title: 'Logic & API Integration',
    description:
      'Implementing robust business logic, integrating RESTful/Firebase APIs, local offline caching, and custom native platform channels.',
    icons: [
      <Code2 key="code" className="h-4 w-4" />,
      <Cpu key="cpu" className="h-4 w-4" />,
      <Zap key="zap" className="h-4 w-4" />,
    ],
    badgeBg: 'bg-cyan-500/10 border-cyan-500/25',
    badgeText: 'text-[#48e5c2]',
  },
  {
    step: 4,
    title: 'Testing & Store Release',
    description:
      'Executing unit & widget tests, profiling 60fps performance, setting up CI/CD, and publishing production builds to Google Play & App Store.',
    icons: [
      <ShieldCheck key="shield" className="h-4 w-4" />,
      <CheckCircle2 key="check" className="h-4 w-4" />,
      <Rocket key="rocket" className="h-4 w-4" />,
    ],
    badgeBg: 'bg-cyan-500/10 border-cyan-500/25',
    badgeText: 'text-[#48e5c2]',
  },
]

const Process: React.FC = () => {
  return (
    <section id="process" className="relative w-full bg-[#070b14] py-20 md:py-28 overflow-hidden">
      {/* Background glow accents */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[800px] rounded-full bg-cyan-500/8 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-3.5 py-1 text-[10px] font-semibold text-cyan-300 uppercase tracking-wider mb-4">
            <Smartphone className="h-3 w-3 text-[#48e5c2]" />
            <span>Mobile Engineering Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Flutter Development Process
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
            I follow a structured mobile engineering lifecycle — from scalable Clean Architecture and pixel-perfect widgets to backend integration and App Store deployment.
          </p>
        </motion.div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-cyan-500/15 bg-[#0b101b]/70 p-7 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#0f1728]/90 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Subtle top card glow on hover */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Top part: Number badge & Title */}
              <div>
                {/* Number Badge */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border ${item.badgeBg} ${item.badgeText} text-base font-bold shadow-inner transition-transform duration-300 group-hover:scale-110`}
                  >
                    {item.step}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-center text-lg sm:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#48e5c2] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-center text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Icon Row */}
              <div className="mt-8 pt-5 border-t border-cyan-500/10 flex items-center justify-center gap-4 text-zinc-500 group-hover:text-zinc-300 transition-colors">
                {item.icons.map((icon, iconIndex) => (
                  <span
                    key={iconIndex}
                    className="p-1.5 rounded-lg bg-white/5 transition-all duration-200 hover:text-[#48e5c2] hover:bg-cyan-500/15 hover:scale-110"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Process
