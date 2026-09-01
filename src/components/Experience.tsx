'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

interface Job {
  id: number
  company: string
  title: string
  period: string
  type: string
  achievements: string[]
  techStack: string[]
}

const jobs: Job[] = [
  {
    id: 1,
    company: 'Solution Expert',
    title: 'Multi-Tenant Enterprise Platforms',
    period: '2026 — Present',
    type: 'Enterprise Engagement',
    achievements: [
      'Architecting multi-tenant Flutter app architectures serving global enterprises from a unified codebase',
      'Integrated high-throughput RESTful APIs & Firebase Firestore streams with Bloc reactive architecture',
      'Operating rigorous Agile sprint planning, automated testing, and CI/CD deployment pipelines',
    ],
    techStack: ['Flutter', 'Bloc', 'Provider', 'Firebase', 'REST APIs', 'Multi-Tenant'],
  },
  {
    id: 2,
    company: 'CAS — Computer Application Solutions',
    title: 'Production Mobile App Systems',
    period: '2024 — 2026',
    type: 'Core Mobile Engineering',
    achievements: [
      'Delivered flagship Android & iOS production applications using Clean Architecture with Riverpod & Bloc',
      'Built a modular, reusable widget design system adopted across engineering squads',
      'Engineered Firebase Auth, cloud sync, FCM real-time push infrastructure, and Dio interceptors',
    ],
    techStack: ['Flutter', 'Riverpod', 'Bloc', 'Firestore', 'FCM', 'Clean Arch'],
  },
  {
    id: 3,
    company: 'Xavinex Mobile Labs',
    title: 'Cross-Platform App Development',
    period: '2024',
    type: 'Project Delivery',
    achievements: [
      'Integrated scalable RESTful APIs with reactive state management and cloud persistence',
      'Automated build signing, environment configurations, and Google Play & Apple App Store releases',
    ],
    techStack: ['Flutter', 'Firebase', 'Postman', 'Play Store', 'App Store'],
  },
]

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative w-full bg-[#050811] py-20 md:py-28 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-3.5 py-1 text-[10px] font-semibold text-cyan-300 uppercase tracking-wider mb-4">
            <Briefcase className="h-3 w-3 text-[#48e5c2]" />
            <span>Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Enterprise Engagements
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/40 via-cyan-500/10 to-transparent" />

          <div className="space-y-10">
            {jobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 flex items-center justify-center">
                  <div className="h-[15px] w-[15px] rounded-full border-2 border-cyan-500/30 bg-[#050811] flex items-center justify-center">
                    <div className={`h-[5px] w-[5px] rounded-full ${idx === 0 ? 'bg-[#48e5c2] shadow-[0_0_8px_#48e5c2]' : 'bg-zinc-600'}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="group">
                  {/* Header row */}
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#48e5c2] transition-colors">
                      {job.title}
                    </h3>
                    <span className="text-sm text-zinc-500">at</span>
                    <span className="text-sm font-semibold text-cyan-300">{job.company}</span>
                  </div>

                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[11px] font-mono text-zinc-400">{job.period}</span>
                    <span className="text-zinc-700">·</span>
                    <span className="text-[11px] font-mono text-zinc-500">{job.type}</span>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-1.5 mb-3">
                    {job.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-zinc-400 leading-relaxed">
                        <span className="mt-2 h-1 w-1 rounded-full bg-[#48e5c2] flex-shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {job.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 text-[10px] font-medium text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
