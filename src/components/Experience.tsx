'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react'


interface Job {
  id: number
  company: string
  title: string
  period: string
  location: string
  type: string
  impactBadge: string
  description: string
  achievements: string[]
  techStack: string[]
}

const jobs: Job[] = [
  {
    id: 1,
    company: 'Solution Expert',
    title: 'Flutter Developer',
    period: 'May 2026 - Present',
    location: 'Lahore, Pakistan',
    type: 'Full-time',
    impactBadge: 'Multi-Tenant Architecture',
    description:
      'Architecting multi-tenant Flutter business applications that dynamically serve multiple client enterprises from a unified codebase.',
    achievements: [
      'Engineered shared Multi-Tenant Flutter architecture for enterprise client scalability.',
      'Integrated RESTful APIs & Firebase Firestore stream subscriptions with Bloc state management.',
      'Participated in Agile sprint planning, code review standards, and continuous integration.',
    ],
    techStack: ['Flutter', 'Bloc', 'Provider', 'Firebase', 'REST APIs', 'Multi-Tenant'],
  },
  {
    id: 2,
    company: 'CAS - Computer Application Solutions',
    title: 'Flutter Developer',
    period: 'May 2024 - Apr 2026',
    location: 'Lahore, Pakistan',
    type: 'Full-time | Onsite',
    impactBadge: 'Custom Widget Library',
    description:
      'Architected cross-platform Flutter applications for Android and iOS using Clean Architecture with Bloc and Riverpod.',
    achievements: [
      'Delivered production Android & iOS mobile apps using Clean Architecture with Riverpod & Bloc.',
      'Engineered custom reusable widget library adopted across teams, accelerating development velocity.',
      'Implemented Firebase Auth, Firestore sync, FCM push notifications, and Dio HTTP interceptors.',
    ],
    techStack: ['Flutter', 'Riverpod', 'Bloc', 'Firestore', 'FCM', 'Clean Arch'],
  },
  {
    id: 3,
    company: 'Xavinex',
    title: 'Flutter Developer Intern',
    period: 'Feb 2024 - Apr 2024',
    location: 'Remote',
    type: 'Internship',
    impactBadge: 'Store Release Pipelines',
    description:
      'Developed cross-platform mobile apps with Flutter, Firebase, and Provider state management.',
    achievements: [
      'Integrated RESTful APIs tested via Postman with Provider & Bloc state management.',
      'Assisted in Android & iOS build signing, environment configs, and Play Store / App Store submissions.',
    ],
    techStack: ['Flutter', 'Firebase Auth', 'Postman', 'App Store Signing', 'Play Store'],
  },
]

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative w-full bg-[#090a0f] px-6 py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-[#12131a] px-3.5 py-1 text-xs font-semibold text-zinc-300">
            <Briefcase className="h-3.5 w-3.5 text-red-400" />
            <span>Career Journey</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Work Experience
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-400">
            Proven record of architecting and shipping production mobile applications across three software companies.
          </p>
        </motion.div>

        {/* Timeline Items */}
        <div className="relative mt-10 space-y-6">
          {/* Subtle Vertical Connector */}
          <div className="absolute left-4 top-4 bottom-4 hidden w-0.5 bg-zinc-800 md:block" />

          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 top-6 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-red-500 bg-[#090a0f] md:block" />

              {/* Experience Card */}
              <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-[#12131a] p-5 transition-all duration-300 hover:border-zinc-700 md:p-6">
                
                {/* Top Info Header */}
                <div className="flex flex-col justify-between gap-2.5 md:flex-row md:items-center">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-200 flex-shrink-0">
                        <Building2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-xs font-semibold text-red-400">{job.company}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <div className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-[#090a0f] px-2.5 py-0.5 text-xs font-mono text-zinc-300">
                      <Calendar className="h-3 w-3 text-zinc-400" />
                      <span>{job.period}</span>
                    </div>
                    <span className="inline-flex items-center text-[10px] font-mono font-medium text-zinc-300 bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded-md">
                      {job.impactBadge}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-zinc-300">{job.description}</p>

                {/* Compact Achievements List */}
                <div className="mt-3 space-y-1.5">
                  {job.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-zinc-400">
                      <CheckCircle2 className="h-3.5 w-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-zinc-800/80 pt-3">
                  {job.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-zinc-800 bg-[#090a0f] px-2 py-0.5 text-[11px] font-mono text-zinc-300"
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
    </section>
  )
}

export default Experience

