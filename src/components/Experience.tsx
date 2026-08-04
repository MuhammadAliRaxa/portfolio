'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Building2 } from 'lucide-react'

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
    title: 'Flutter Developer - Solution Expert',
    period: 'May 2026 - Present',
    location: 'Lahore, Pakistan',
    type: 'Full-time',
    impactBadge: 'Multi-Tenant Architecture',
    description:
      'Develop multi-tenant Flutter business applications, architecting shared, scalable codebases that serve multiple client businesses from a single app.',
    achievements: [
      'Architected multi-tenant Flutter business applications, creating shared codebases serving multiple client businesses.',
      'Built Ramza Electric Bike, an e-commerce mobile app for electric bike sales featuring product catalog, cart management, and order processing.',
      'Built MR Enterprises, a product-scanning incentive app enabling users to scan products to earn rewards, with an admin panel to review and process incentive payouts.',
      'Integrated RESTful APIs and Firebase services (Authentication, Firestore) with robust error handling and structured state management using Bloc and Provider.',
      'Participated in code reviews, sprint planning, and Git-based collaboration within an Agile workflow.',
    ],
    techStack: ['Flutter', 'Bloc', 'Provider', 'Firebase', 'REST APIs', 'Multi-Tenant Architecture'],
  },
  {
    id: 2,
    company: 'CAS - Computer Application Solutions',
    title: 'Flutter Developer - CAS',
    period: 'May 2024 - Apr 2026',
    location: 'Lahore, Pakistan',
    type: 'Full-time | Onsite',
    impactBadge: 'Custom Widget Library',
    description:
      'Architected and delivered cross-platform Flutter applications for Android and iOS using clean architecture with Bloc and Riverpod.',
    achievements: [
      'Architected and delivered cross-platform Flutter applications for Android and iOS using clean architecture with Bloc and Riverpod, ensuring maintainable and scalable codebases.',
      'Integrated Firebase services (Authentication, Firestore, Cloud Messaging) and RESTful APIs with structured error handling, JSON serialisation, and offline-first data strategies.',
      'Developed a reusable custom widget library adopted across multiple projects, reducing UI development time and enforcing consistent design patterns.',
      'Managed feature branching, pull request reviews, and Git/GitHub workflows, upholding high code quality and team collaboration standards.',
    ],
    techStack: ['Flutter', 'Riverpod', 'Bloc', 'Firestore', 'FCM', 'Custom Widget Library'],
  },
  {
    id: 3,
    company: 'Xavinex',
    title: 'Flutter Developer - Intern',
    period: 'Feb 2024 - Apr 2024',
    location: 'Remote',
    type: 'Internship',
    impactBadge: 'Store Release Pipelines',
    description:
      'Developed and maintained cross-platform mobile apps with Flutter, integrating Firebase Auth, Firestore, and Cloud Messaging.',
    achievements: [
      'Developed and maintained cross-platform mobile apps with Flutter, integrating Firebase Auth, Firestore, and Cloud Messaging from initial design through production deployment.',
      'Consumed and tested REST APIs using Postman; implemented Provider and Bloc state management within an Agile sprint-based development environment.',
      'Assisted in Android and iOS release pipelines including build signing, environment configuration, and app submission to Play Store and App Store.',
    ],
    techStack: ['Flutter', 'Firebase Auth', 'Postman', 'App Store / Play Store Build Signing'],
  },
]

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative w-full bg-[#050508] px-6 py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-400">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Professional Career Quest</span>
          </div>
          <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-6xl">
            Work Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
            Proven track record of architecting and shipping 15+ production cross-platform Android & iOS applications across three tech companies.
          </p>
        </motion.div>

        {/* Timeline Items */}
        <div className="relative mt-16 space-y-12">
          {/* Red Glowing Timeline Beam */}
          <div className="absolute left-6 top-6 bottom-6 hidden w-1 bg-gradient-to-b from-red-600 via-rose-600 to-red-950 md:block shadow-[0_0_15px_rgba(239,68,68,0.5)]" />

          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative md:pl-16"
            >
              {/* Pulsing Node */}
              <div className="absolute left-3.5 top-8 hidden h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-2 border-red-500 bg-black shadow-[0_0_20px_rgba(239,68,68,0.8)] md:flex">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
              </div>

              {/* Experience Card */}
              <div className="group relative overflow-hidden rounded-3xl border border-gray-800/80 bg-[#0a0a12]/70 p-7 backdrop-blur-md transition-all duration-500 hover:border-red-500/60 hover:bg-[#0f0b18]/90 hover:shadow-2xl hover:shadow-red-950/60 md:p-8">
                
                {/* Top Info Header */}
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 text-red-500">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-white sm:text-2xl">{job.title}</h3>
                        <p className="text-base font-bold text-red-500">{job.company}</p>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-gray-500" />
                        {job.location}
                      </span>
                      <span>•</span>
                      <span className="rounded-md bg-red-950/60 border border-red-900/40 px-2.5 py-0.5 font-semibold text-red-300">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-gray-800 bg-[#07070d] px-4 py-1.5 text-xs font-bold text-gray-300">
                      <Calendar className="h-3.5 w-3.5 text-red-500" />
                      <span>{job.period}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-red-400 bg-red-500/10 border border-red-500/30 px-3 py-0.5 rounded-full uppercase tracking-wider">
                      <Sparkles className="h-3 w-3" />
                      {job.impactBadge}
                    </span>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-gray-300">{job.description}</p>

                {/* Achievements List */}
                <div className="mt-6 space-y-2.5">
                  {job.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="mt-6 flex flex-wrap gap-2 border-t border-gray-800/80 pt-4">
                  {job.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-300"
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
