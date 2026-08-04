'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Smartphone, Layers, Server, Wrench, Sparkles, Terminal } from 'lucide-react'

interface Skill {
  name: string
  level: string
  percentage: number
  category: 'Mobile' | 'State' | 'Backend' | 'Tools' | 'Architecture'
  icon: string
  description: string
}

const skillsData: Skill[] = [
  // Mobile & Languages
  {
    name: 'Flutter',
    level: 'Expert',
    percentage: 98,
    category: 'Mobile',
    icon: '⚡',
    description: '15+ cross-platform production apps built for Android & iOS using Clean Architecture.',
  },
  {
    name: 'Dart',
    level: 'Expert',
    percentage: 95,
    category: 'Mobile',
    icon: '🎯',
    description: 'Asynchronous concurrency, Dart isolates, JSON serialization, and custom packages.',
  },
  {
    name: 'Android SDK & iOS SDK',
    level: 'Advanced',
    percentage: 88,
    category: 'Mobile',
    icon: '📱',
    description: 'Native build configurations, environment signing, APK/IPA release pipelines.',
  },
  {
    name: 'Responsive UI Design',
    level: 'Expert',
    percentage: 95,
    category: 'Mobile',
    icon: '🎨',
    description: 'Custom widget libraries, fluid layouts across smartphones, tablets & foldables.',
  },
  {
    name: 'Java',
    level: 'Proficient',
    percentage: 85,
    category: 'Mobile',
    icon: '☕',
    description: 'Object-oriented programming foundation and native Android integrations.',
  },

  // State Management
  {
    name: 'Bloc / Cubit',
    level: 'Expert',
    percentage: 96,
    category: 'State',
    icon: '🧱',
    description: 'Predictable, event-driven state management architecture for high-complexity mobile apps.',
  },
  {
    name: 'Riverpod',
    level: 'Expert',
    percentage: 94,
    category: 'State',
    icon: '🌊',
    description: 'Compile-safe dependency injection & reactive state providers.',
  },
  {
    name: 'Provider',
    level: 'Mastered',
    percentage: 90,
    category: 'State',
    icon: '🔄',
    description: 'Lightweight state propagation and scoped view model bindings.',
  },
  {
    name: 'GetX',
    level: 'Advanced',
    percentage: 85,
    category: 'State',
    icon: '🚀',
    description: 'Decoupled navigation management, reactive state controllers & snackbars.',
  },

  // Backend & APIs
  {
    name: 'Firebase Suite',
    level: 'Expert',
    percentage: 95,
    category: 'Backend',
    icon: '🔥',
    description: 'Auth, Cloud Firestore real-time sync, Storage security rules, and Push FCM.',
  },
  {
    name: 'RESTful APIs',
    level: 'Expert',
    percentage: 95,
    category: 'Backend',
    icon: '🌐',
    description: 'HTTP client integrations, Dio interceptors, error handling & token refresh flows.',
  },
  {
    name: 'OpenAI GPT & Gemini',
    level: 'Advanced',
    percentage: 90,
    category: 'Backend',
    icon: '🤖',
    description: 'Rate-limited AI driver layers, text summarization, and in-app support chatbots.',
  },
  {
    name: 'Google ML Kit',
    level: 'Advanced',
    percentage: 88,
    category: 'Backend',
    icon: '📷',
    description: 'On-device barcode/QR code scanning, OCR text recognition, and vision features.',
  },

  // Tools & DevOps
  {
    name: 'Git & GitHub Workflows',
    level: 'Expert',
    percentage: 92,
    category: 'Tools',
    icon: '🐙',
    description: 'Feature branching, pull requests, code reviews, and version release tags.',
  },
  {
    name: 'VS Code & Android Studio',
    level: 'Expert',
    percentage: 95,
    category: 'Tools',
    icon: '💻',
    description: 'Advanced debugging, profiler tools, memory leak detection, and Dart DevTools.',
  },
  {
    name: 'Postman API Testing',
    level: 'Advanced',
    percentage: 90,
    category: 'Tools',
    icon: '🚀',
    description: 'API endpoint validation, mock payload testing, and response inspection.',
  },
  {
    name: 'Play Store & App Store Release',
    level: 'Expert',
    percentage: 95,
    category: 'Tools',
    icon: '📦',
    description: 'App signing, keystores, provisioning profiles, TestFlight & Play Console deployment.',
  },

  // Architecture & Practices
  {
    name: 'Clean Architecture',
    level: 'Master',
    percentage: 96,
    category: 'Architecture',
    icon: '🏛️',
    description: 'Strict separation of Domain, Data, and Presentation layers for enterprise maintainability.',
  },
  {
    name: 'MVVM Pattern',
    level: 'Master',
    percentage: 94,
    category: 'Architecture',
    icon: '⚙️',
    description: 'Decoupled view models, repository abstractions, and testable business logic.',
  },
  {
    name: 'Multi-Tenant Architecture',
    level: 'Specialist',
    percentage: 92,
    category: 'Architecture',
    icon: '🏢',
    description: 'Architecting shared codebases that dynamically serve multiple client businesses from one app.',
  },
  {
    name: 'Agile & Unit Testing',
    level: 'Advanced',
    percentage: 88,
    category: 'Architecture',
    icon: '🧪',
    description: 'Sprint planning, code review standards, widget testing, and bug regression fixes.',
  },
]

const categories = [
  { id: 'All', label: 'All Tech Matrix', icon: <Terminal className="h-4 w-4" /> },
  { id: 'Mobile', label: 'Mobile & Flutter', icon: <Smartphone className="h-4 w-4" /> },
  { id: 'State', label: 'State Management', icon: <Layers className="h-4 w-4" /> },
  { id: 'Backend', label: 'Backend & AI', icon: <Server className="h-4 w-4" /> },
  { id: 'Architecture', label: 'Architecture', icon: <Cpu className="h-4 w-4" /> },
  { id: 'Tools', label: 'DevOps & Tools', icon: <Wrench className="h-4 w-4" /> },
]

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All')

  const filteredSkills = activeTab === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === activeTab)

  return (
    <section id="skills" className="relative w-full bg-[#050508] px-6 py-24 md:py-32">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Tech Arsenal</span>
          </div>
          <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-6xl">
            Skills & Technical Matrix
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
            Production-proven tech stack specializing in cross-platform mobile engineering, reactive state management, and cloud architectures.
          </p>

          {/* Interactive Category Selector Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30 border border-red-500/50'
                    : 'border border-gray-800/80 bg-[#0a0a10] text-gray-400 hover:border-red-900/50 hover:text-white'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Key Signature Stack Showcase Bar */}
        <motion.div
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {[
            { title: 'Flutter', badge: 'Core Framework', icon: '⚡', color: 'from-red-600 to-rose-600' },
            { title: 'Dart', badge: 'Language', icon: '🎯', color: 'from-rose-600 to-red-700' },
            { title: 'Bloc & Riverpod', badge: 'State Engine', icon: '🧱', color: 'from-red-500 to-rose-700' },
            { title: 'Firebase', badge: 'Backend & Sync', icon: '🔥', color: 'from-red-600 to-red-900' },
            { title: 'Clean Arch', badge: 'Domain / MVVM', icon: '🏛️', color: 'from-rose-500 to-red-600' },
            { title: 'OpenAI & Gemini', badge: 'AI Drivers', icon: '🤖', color: 'from-red-500 to-rose-600' },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-red-500/30 bg-[#0c0a12]/80 p-4 text-center backdrop-blur-md transition-all duration-300 hover:border-red-500 hover:shadow-lg hover:shadow-red-600/20"
            >
              <div className="text-2xl mb-1">{item.icon}</div>
              <h4 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                {item.title}
              </h4>
              <span className="mt-1 inline-block text-[10px] font-semibold text-red-400">
                {item.badge}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Interactive Skills Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-800/80 bg-[#090910]/70 p-5 backdrop-blur-md transition-all duration-300 hover:border-red-500/50 hover:bg-[#0f0b14]/90 hover:shadow-xl hover:shadow-red-950/50"
              >
                {/* Glow Background Indicator */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-600/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 text-xl shadow-md">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-semibold text-red-400/90">
                        {skill.level} Proficiency
                      </span>
                    </div>
                  </div>

                  <span className="text-sm font-extrabold text-white bg-red-950/60 border border-red-800/40 px-2.5 py-1 rounded-lg">
                    {skill.percentage}%
                  </span>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  {skill.description}
                </p>

                {/* Glowing Progress Bar */}
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-900">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
