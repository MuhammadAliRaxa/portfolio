'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'

interface SkillCategory {
  title: string
  icon: string
  badge: string
  skills: { name: string; level: string; icon: string }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Mobile & Languages',
    icon: '📱',
    badge: 'Core Frameworks',
    skills: [
      { name: 'Flutter SDK', level: 'Expert', icon: '⚡' },
      { name: 'Dart Concurrency', level: 'Expert', icon: '🎯' },
      { name: 'Android / iOS SDK', level: 'Advanced', icon: '📱' },
      { name: 'Responsive UI Design', level: 'Expert', icon: '🎨' },
      { name: 'Java Native Sync', level: 'Proficient', icon: '☕' },
    ],
  },
  {
    title: 'State Management Engines',
    icon: '🧱',
    badge: 'Reactive Flow',
    skills: [
      { name: 'Bloc / Cubit', level: 'Expert', icon: '🧱' },
      { name: 'Riverpod', level: 'Expert', icon: '🌊' },
      { name: 'Provider', level: 'Mastered', icon: '🔄' },
      { name: 'GetX', level: 'Advanced', icon: '🚀' },
    ],
  },
  {
    title: 'Backend & Cloud Services',
    icon: '🔥',
    badge: 'Real-Time Sync',
    skills: [
      { name: 'Firebase Firestore / FCM', level: 'Expert', icon: '🔥' },
      { name: 'REST APIs & Dio', level: 'Expert', icon: '🌐' },
      { name: 'OpenAI GPT & AI APIs', level: 'Advanced', icon: '🤖' },
      { name: 'Google ML Kit OCR', level: 'Advanced', icon: '📷' },
    ],
  },
  {
    title: 'Architecture & Design Patterns',
    icon: '🏛️',
    badge: 'Domain Driven',
    skills: [
      { name: 'Clean Architecture', level: 'Master', icon: '🏛️' },
      { name: 'MVVM Pattern', level: 'Master', icon: '⚙️' },
      { name: 'Multi-Tenant Arch', level: 'Specialist', icon: '🏢' },
      { name: 'Agile & Widget Testing', level: 'Advanced', icon: '🧪' },
    ],
  },
  {
    title: 'DevOps & Tooling',
    icon: '📦',
    badge: 'Store Pipeline',
    skills: [
      { name: 'Git & GitHub Workflows', level: 'Expert', icon: '🐙' },
      { name: 'VS Code & Android Studio', level: 'Expert', icon: '💻' },
      { name: 'Postman API Testing', level: 'Advanced', icon: '🚀' },
      { name: 'Play Console & App Store', level: 'Expert', icon: '📦' },
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
            <Code2 className="h-3.5 w-3.5 text-red-400" />
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
            { title: 'Flutter', badge: 'Core Framework', icon: '⚡' },
            { title: 'Dart', badge: 'Language', icon: '🎯' },
            { title: 'Bloc & Riverpod', badge: 'State Engine', icon: '🧱' },
            { title: 'Firebase', badge: 'Backend & Sync', icon: '🔥' },
            { title: 'Clean Arch', badge: 'Domain / MVVM', icon: '🏛️' },
            { title: 'OpenAI GPT', badge: 'AI Integration', icon: '🤖' },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-[#12131a] p-3 text-center transition-all duration-300 hover:border-zinc-700"
            >
              <div className="text-lg mb-0.5">{item.icon}</div>
              <h4 className="text-xs font-bold text-white group-hover:text-red-400 transition-colors">
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
              className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-[#12131a] p-5 transition-all duration-300 hover:border-zinc-700"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
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
                      <span className="text-sm">{skill.icon}</span>
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



