'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface SkillItem {
  name: string
  percentage: number
}

interface Skill {
  category: string
  items: SkillItem[]
  gradient: string
}

const skills: Skill[] = [
  {
    category: 'Mobile Frameworks',
    items: [
      { name: 'Flutter', percentage: 95 },
      { name: 'Dart', percentage: 95 },
      { name: 'Native iOS', percentage: 80 },
      { name: 'Native Android', percentage: 75 },
      { name: 'React Native', percentage: 70 },
    ],
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    category: 'State Management',
    items: [
      { name: 'Riverpod', percentage: 98 },
      { name: 'GetX', percentage: 90 },
      { name: 'Provider', percentage: 88 },
      { name: 'Bloc', percentage: 85 },
      { name: 'MobX', percentage: 75 },
    ],
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    category: 'Backend Integration',
    items: [
      { name: 'Firebase', percentage: 92 },
      { name: 'REST APIs', percentage: 90 },
      { name: 'GraphQL', percentage: 85 },
      { name: 'WebSockets', percentage: 88 },
      { name: 'Authentication', percentage: 92 },
    ],
    gradient: 'from-orange-500 to-red-600',
  },
  {
    category: 'Architecture & Patterns',
    items: [
      { name: 'Clean Architecture', percentage: 93 },
      { name: 'MVVM', percentage: 90 },
      { name: 'Repository Pattern', percentage: 92 },
      { name: 'Dependency Injection', percentage: 89 },
      { name: 'Design Patterns', percentage: 88 },
    ],
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    category: 'UI/UX & Animation',
    items: [
      { name: 'Custom Animations', percentage: 90 },
      { name: 'Material Design', percentage: 88 },
      { name: 'Figma', percentage: 75 },
      { name: 'Responsive Design', percentage: 92 },
      { name: 'Accessibility', percentage: 85 },
    ],
    gradient: 'from-indigo-500 to-violet-600',
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'CI/CD', percentage: 88 },
      { name: 'Git', percentage: 90 },
      { name: 'Firebase Deployment', percentage: 90 },
      { name: 'App Store/Play Store', percentage: 92 },
      { name: 'Testing', percentage: 85 },
    ],
    gradient: 'from-yellow-500 to-amber-600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative w-full bg-dark-950 px-6 py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Proficient in modern Flutter development, with deep expertise in architecture, state management, and cross-platform solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              className="group relative overflow-hidden rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-600/80"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-br ${skillGroup.gradient} opacity-0 blur transition-opacity duration-300 group-hover:opacity-5`}
              />

              {/* Category Title */}
              <h3 className={`mb-6 text-lg font-bold bg-gradient-to-r ${skillGroup.gradient} bg-clip-text text-transparent`}>
                {skillGroup.category}
              </h3>

              {/* Skills Items with Progress Bars */}
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skillGroup.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    className="space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-300">{item.name}</span>
                      <span className={`text-xs font-bold bg-gradient-to-r ${skillGroup.gradient} bg-clip-text text-transparent`}>
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-700/50">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${skillGroup.gradient}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="mt-16 space-y-4 rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white">
            Certifications & Awards
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">★</span>
              Google Flutter Developer Certified
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">★</span>
              App Store Featured Developer (2021, 2023)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">★</span>
              Flutter Community Speaker & Open Source Contributor
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">★</span>
              AWS Certified Solutions Architect
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
