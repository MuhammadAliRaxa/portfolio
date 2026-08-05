'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Smartphone,
  Zap,
  Target,
  Palette,
  Coffee,
  Layers,
  Boxes,
  Workflow,
  Flame,
  Globe,
  Bot,
  Scan,
  Building2,
  Cpu,
  TestTube,
  GitBranch,
  Terminal,
  Radio,
  PackageCheck,
} from 'lucide-react'

interface SkillCategory {
  title: string
  icon: React.ReactNode
  badge: string
  skills: { name: string; level: string; icon: React.ReactNode }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Mobile & Languages',
    icon: <Smartphone className="h-4 w-4 text-zinc-300" />,
    badge: 'Core Frameworks',
    skills: [
      { name: 'Flutter SDK', level: 'Expert', icon: <Zap className="h-3.5 w-3.5 text-sky-400" /> },
      { name: 'Dart Concurrency', level: 'Expert', icon: <Target className="h-3.5 w-3.5 text-blue-400" /> },
      { name: 'Android / iOS SDK', level: 'Advanced', icon: <Smartphone className="h-3.5 w-3.5 text-emerald-400" /> },
      { name: 'Responsive UI Design', level: 'Expert', icon: <Palette className="h-3.5 w-3.5 text-pink-400" /> },
      { name: 'Java Native Sync', level: 'Proficient', icon: <Coffee className="h-3.5 w-3.5 text-amber-500" /> },
    ],
  },
  {
    title: 'State Management Engines',
    icon: <Layers className="h-4 w-4 text-zinc-300" />,
    badge: 'Reactive Flow',
    skills: [
      { name: 'Bloc / Cubit', level: 'Expert', icon: <Boxes className="h-3.5 w-3.5 text-zinc-400" /> },
      { name: 'Riverpod', level: 'Expert', icon: <Layers className="h-3.5 w-3.5 text-cyan-400" /> },
      { name: 'Provider', level: 'Mastered', icon: <Workflow className="h-3.5 w-3.5 text-indigo-400" /> },
      { name: 'GetX', level: 'Advanced', icon: <Zap className="h-3.5 w-3.5 text-purple-400" /> },
    ],
  },
  {
    title: 'Backend & Cloud Services',
    icon: <Flame className="h-4 w-4 text-zinc-300" />,
    badge: 'Real-Time Sync',
    skills: [
      { name: 'Firebase Firestore / FCM', level: 'Expert', icon: <Flame className="h-3.5 w-3.5 text-amber-400" /> },
      { name: 'REST APIs & Dio', level: 'Expert', icon: <Globe className="h-3.5 w-3.5 text-emerald-400" /> },
      { name: 'OpenAI GPT & AI APIs', level: 'Advanced', icon: <Bot className="h-3.5 w-3.5 text-teal-400" /> },
      { name: 'Google ML Kit OCR', level: 'Advanced', icon: <Scan className="h-3.5 w-3.5 text-blue-400" /> },
    ],
  },
  {
    title: 'Architecture & Design Patterns',
    icon: <Cpu className="h-4 w-4 text-zinc-300" />,
    badge: 'Domain Driven',
    skills: [
      { name: 'Clean Architecture', level: 'Master', icon: <Building2 className="h-3.5 w-3.5 text-zinc-300" /> },
      { name: 'MVVM Pattern', level: 'Master', icon: <Cpu className="h-3.5 w-3.5 text-zinc-400" /> },
      { name: 'Multi-Tenant Arch', level: 'Specialist', icon: <Building2 className="h-3.5 w-3.5 text-purple-400" /> },
      { name: 'Agile & Widget Testing', level: 'Advanced', icon: <TestTube className="h-3.5 w-3.5 text-emerald-400" /> },
    ],
  },
  {
    title: 'DevOps & Tooling',
    icon: <PackageCheck className="h-4 w-4 text-zinc-300" />,
    badge: 'Store Pipeline',
    skills: [
      { name: 'Git & GitHub Workflows', level: 'Expert', icon: <GitBranch className="h-3.5 w-3.5 text-orange-400" /> },
      { name: 'VS Code & Android Studio', level: 'Expert', icon: <Terminal className="h-3.5 w-3.5 text-cyan-400" /> },
      { name: 'Postman API Testing', level: 'Advanced', icon: <Radio className="h-3.5 w-3.5 text-amber-400" /> },
      { name: 'Play Console & App Store', level: 'Expert', icon: <PackageCheck className="h-3.5 w-3.5 text-blue-400" /> },
    ],
  },
]

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative w-full bg-[#090a0f] px-6 py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-[#12131a] px-3.5 py-1 text-xs font-semibold text-zinc-300">
            <Code2 className="h-3.5 w-3.5 text-zinc-400" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Skills & Competencies
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-400">
            Production-proven tech stack across mobile engineering, reactive state management, and cloud architecture.
          </p>
        </motion.div>

        {/* Signature Stack Highlights */}
        <motion.div
          className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { title: 'Flutter', badge: 'Core Framework', icon: <Zap className="h-4 w-4 text-sky-400" /> },
            { title: 'Dart', badge: 'Language', icon: <Target className="h-4 w-4 text-blue-400" /> },
            { title: 'Bloc & Riverpod', badge: 'State Engine', icon: <Layers className="h-4 w-4 text-zinc-300" /> },
            { title: 'Firebase', badge: 'Backend & Sync', icon: <Flame className="h-4 w-4 text-amber-400" /> },
            { title: 'Clean Arch', badge: 'Domain / MVVM', icon: <Building2 className="h-4 w-4 text-zinc-300" /> },
            { title: 'OpenAI GPT', badge: 'AI Integration', icon: <Bot className="h-4 w-4 text-emerald-400" /> },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-[#12131a] p-3 text-center transition-all duration-300 hover:border-red-900/40 hover:shadow-md hover:shadow-red-950/20"
            >
              <div className="flex justify-center mb-1.5">{item.icon}</div>
              <h4 className="text-xs font-bold text-white group-hover:text-zinc-100 transition-colors">
                {item.title}
              </h4>
              <span className="text-[10px] font-mono text-zinc-400">
                {item.badge}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Compact Domain Category Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-[#12131a] p-5 transition-all duration-300 hover:border-red-900/40 hover:shadow-lg hover:shadow-red-950/20"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-800 bg-[#090a0f]">
                    {cat.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-zinc-100 transition-colors">
                    {cat.title}
                  </h3>
                </div>
                <span className="rounded-md border border-zinc-800 bg-[#090a0f] px-2 py-0.5 text-[10px] font-mono text-zinc-400">
                  {cat.badge}
                </span>
              </div>

              {/* Skill Items List */}
              <div className="space-y-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between rounded-lg border border-zinc-800/50 bg-[#090a0f]/80 px-3 py-2 text-xs transition-colors hover:border-zinc-700"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex-shrink-0">{skill.icon}</span>
                      <span className="font-semibold text-zinc-200">{skill.name}</span>
                    </div>
                    <span className="rounded-md border border-zinc-800 bg-[#12131a] px-2 py-0.5 text-[10px] font-mono text-zinc-400">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills




