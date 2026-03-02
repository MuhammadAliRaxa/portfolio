'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Job {
  id: number
  company: string
  title: string
  period: string
  description: string
  achievements: string[]
}

const jobs: Job[] = [
  {
    id: 1,
    company: 'TechVision Labs',
    title: 'Senior Flutter Engineer',
    period: '2022 - Present',
    description: 'Leading mobile development initiatives for enterprise-scale applications',
    achievements: [
      'Architected and launched 3 production apps reaching 500K+ users',
      'Mentored team of 5 junior developers in clean architecture patterns',
      'Reduced app performance issues by 40% through optimization strategies',
      'Implemented custom state management solutions using Riverpod',
    ],
  },
  {
    id: 2,
    company: 'FinTech Digital',
    title: 'Flutter Developer',
    period: '2020 - 2022',
    description: 'Developed financial applications with secure payment integrations',
    achievements: [
      'Built PayFlow digital wallet app with 100K+ daily active users',
      'Integrated PCI-DSS compliant payment gateways',
      'Implemented real-time notifications and push messaging',
      'Created reusable component library for fintech domain',
    ],
  },
  {
    id: 3,
    company: 'StartupHub Innovations',
    title: 'Mobile Developer',
    period: '2018 - 2020',
    description: 'Full-stack mobile development for startup ecosystem',
    achievements: [
      'Launched 6+ MVPs for early-stage companies',
      'Achieved App Store features for 2 applications',
      'Established CI/CD pipeline for mobile releases',
      'Optimized app size from 120MB to 45MB through tree-shaking',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative w-full bg-dark-950 px-6 py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
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
              Professional Experience
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            7+ years of expertise building production-grade mobile applications for startups and enterprises
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline dot and line */}
              <div className="absolute left-0 top-0 flex flex-col items-center">
                <div className="h-4 w-4 rounded-full border-2 border-cyan-400 bg-dark-950" />
                {index !== jobs.length - 1 && (
                  <div className="absolute top-4 h-24 w-0.5 bg-gradient-to-b from-cyan-400 to-transparent" />
                )}
              </div>

              {/* Job Card */}
              <div className="ml-12 space-y-3 rounded-lg border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 backdrop-blur-sm md:p-8">
                <div className="flex flex-col justify-between md:flex-row md:items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                    <p className="text-lg text-cyan-400">{job.company}</p>
                  </div>
                  <p className="mt-2 whitespace-nowrap rounded-full bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-300 md:mt-0">
                    {job.period}
                  </p>
                </div>

                <p className="text-gray-400">{job.description}</p>

                {/* Achievements */}
                <ul className="mt-4 space-y-2">
                  {job.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="mt-1 flex-shrink-0 text-cyan-400">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
