'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, CheckCircle2, ShieldAlert, Cpu, FolderGit2, X } from 'lucide-react'

interface Project {
  id: number
  number: string
  title: string
  subtitle: string
  category: 'E-Commerce' | 'AI & ML' | 'Multi-Tenant'
  shortDescription: string
  fullDescription: string
  challenge: string
  solution: string
  tags: string[]
  features: string[]
  accentColor: string
  badgeText: string
  icon: string
  image?: string
  githubUrl?: string
  metrics: { label: string; value: string }[]
}

const projects: Project[] = [
  {
    id: 1,
    number: '01',
    title: 'Snap2Sketch',
    subtitle: 'AI Photo Transformation & Canvas Book Engine',
    category: 'AI & ML',
    badgeText: 'AI POWERED',
    accentColor: '#ef4444',
    image: '/snap2sketch.jpg',
    shortDescription:
      'Transforms user photos into cartoon or sketch artwork via backend AI API, featuring an interactive Canvas Book module.',
    fullDescription:
      'Engineered a creative mobile app where users capture or upload photos and transform them into cartoon-style or pencil-sketch artwork via a custom backend AI API integration. Built an interactive Canvas Book module allowing users to arrange transformed images as book pages, customise layouts, and place print orders — delivering a complete end-to-end creative product.',
    challenge:
      'Implementing secure API communication, optimizing heavy asynchronous image processing pipelines, and maintaining an intuitive drag-and-drop canvas interface at 60fps.',
    solution:
      'Implemented secure API communication layers, optimized Dart isolate background processing, and built a custom drag-and-drop canvas UI engine in Flutter.',
    tags: ['Flutter', 'Dart', 'Backend AI API', 'Firebase', 'Canvas UI', 'REST API'],
    features: [
      'Photo capture & upload with AI art transformation',
      'Cartoon-style & pencil-sketch artwork generation',
      'Interactive Canvas Book module for page arrangement',
      'Custom layout editing & print order placement',
      'Intuitive drag-and-drop canvas interface',
      'Optimized image processing pipeline & secure API layers',
    ],
    metrics: [
      { label: 'AI Engine', value: 'Custom API' },
      { label: 'Feature', value: 'Canvas Book' },
      { label: 'Platform', value: 'Android / iOS' },
    ],
    icon: '🎨',
  },
  {
    id: 2,
    number: '02',
    title: 'E-Commerce Mobile Application',
    subtitle: 'Real-Time Sync & AI Customer Support Chatbot',
    category: 'E-Commerce',
    badgeText: 'REAL-TIME SYNC',
    accentColor: '#dc2626',
    image: '/ecommerce.jpg',
    githubUrl: 'https://github.com/MuhammadAliRaxa/E-Commerce',
    shortDescription:
      'Full-featured e-commerce app with real-time Firestore data sync, cart tracking, and an AI support chatbot.',
    fullDescription:
      'Built a fully featured e-commerce app covering product browsing, cart management, order tracking, and user authentication using Firebase Auth, Firestore, and external REST APIs for Android and iOS. Implemented real-time Firestore data synchronisation, ensuring consistent product and order state across all user sessions without manual refresh. Built an AI-powered in-app chatbot to assist users with product search, order queries, and general support.',
    challenge:
      'Ensuring real-time state synchronization across cart and order sessions without performance degradation or unnecessary database reads.',
    solution:
      'Utilized Firebase Firestore stream subscriptions combined with Provider state management and integrated an AI chatbot layer for support automation.',
    tags: ['Flutter', 'Dart', 'Firebase', 'REST API', 'Provider', 'AI Chatbot'],
    features: [
      'Product browsing, catalog filtering & search',
      'Cart management & real-time order tracking',
      'User auth with Firebase Authentication & Firestore',
      'Real-time Firestore data synchronisation across sessions',
      'AI-powered in-app chatbot for product search & support',
      'Cross-platform Android & iOS deployment',
    ],
    metrics: [
      { label: 'State', value: 'Provider' },
      { label: 'Database', value: 'Firestore' },
      { label: 'Support', value: 'AI Chatbot' },
    ],
    icon: '🛒',
  },
  {
    id: 3,
    number: '03',
    title: 'MR Trading',
    subtitle: 'Product-Scanning Sales & Admin Incentive Payouts',
    category: 'Multi-Tenant',
    badgeText: 'INCENTIVE & SALES',
    accentColor: '#ef4444',
    image: '/mrtrading.jpg',
    shortDescription:
      'A platform for Admins and Technicians to scan products, track sales reports, and manage incentive payouts.',
    fullDescription:
      'Engineered MR Trading, a mobile platform for Admins and Technicians to scan QR code products, register sales, track real-time sales reports, and manage technician incentive payouts. Built with Flutter for Android and iOS, featuring identity verification, balance tracking, and role-based admin approval controls.',
    challenge:
      'Building reliable real-time camera QR scanning alongside secure role-based payout approvals and sales analytics filtering.',
    solution:
      'Integrated high-performance mobile QR code scanning SDK, structured Bloc state management, and secured Cloud Firestore rules for payout verifications.',
    tags: ['Flutter', 'Dart', 'QR Scanner', 'Firebase', 'Sales Analytics', 'Admin Panel'],
    features: [
      'Instant QR code product scanning for registering sales',
      'Real-time Sales Reports with status filters (Pending, Approved, Paid)',
      'Technician earnings balance tracking & ID card profile verification',
      'Admin panel for reviewing sales & processing incentive payouts',
      'Cross-platform deployment on Android and iOS',
    ],
    metrics: [
      { label: 'Scanner', value: 'QR Code' },
      { label: 'Payouts', value: 'Admin Panel' },
      { label: 'Reports', value: 'Real-Time' },
    ],
    icon: '📊',
  },
  {
    id: 4,
    number: '04',
    title: 'Trust Docs',
    subtitle: 'Secure Document Cloud & Admin Verification System',
    category: 'Multi-Tenant',
    badgeText: 'CLOUD & SECURITY',
    accentColor: '#3b82f6',
    image: '/trustdocs.jpg',
    shortDescription:
      'Encrypted cloud document vault with multi-format file upload (PDF, JPG, PNG), real-time status tracking, and admin approval verification workflows.',
    fullDescription:
      'Built Trust Docs, a cross-platform mobile cloud document vault engineered with Flutter and Firebase. Users securely upload documents of any file format (PDF, images, archives) into encrypted cloud storage. Features an integrated admin verification workflow where administrators review, approve, or flag uploaded documents, enabling users to track document approval status in real-time and download verified files whenever needed on mobile.',
    challenge:
      'Handling multi-format file binary streaming, secure Cloud Storage access rules, and real-time status updates between user client and admin verification dashboards.',
    solution:
      'Architected Cloud Firestore security rules with Firebase Storage access tokens, Bloc state management, and real-time stream listeners for instant approval status reflection.',
    tags: ['Flutter', 'Dart', 'Firebase Storage', 'Cloud Firestore', 'Bloc', 'Document Vault'],
    features: [
      'Multi-format file upload (PDF, JPG, PNG, DOCX) to encrypted cloud',
      'Real-time document verification status dashboard (Pending, Approved)',
      'Admin verification panel for document review & approval workflows',
      'Secure document download & offline caching capabilities',
      'User profile & account authentication with Firebase Auth',
      'Role-based access control (User vs. Admin approval rights)',
    ],
    metrics: [
      { label: 'Storage', value: 'Cloud Vault' },
      { label: 'Approval', value: 'Admin Panel' },
      { label: 'Formats', value: 'All Files' },
    ],
    icon: '📄',
  },
]


const categories = ['All', 'E-Commerce', 'AI & ML', 'Multi-Tenant'] as const

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-end justify-center p-0 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        className="relative z-10 w-full max-h-[90vh] sm:max-w-3xl overflow-hidden rounded-t-2xl sm:rounded-2xl border border-zinc-800 bg-[#12131a] shadow-2xl"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ type: 'spring', stiffness: 320, damping: 30 }}
      >
        <div className="overflow-y-auto max-h-[90vh] p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 text-2xl shadow-sm">
                {project.icon}
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                  {project.number} — {project.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-white mt-0.5">{project.title}</h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="rounded-lg bg-zinc-800 border border-zinc-700 p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Project Image Banner */}
          {project.image && (
            <div className="relative mb-6 h-56 sm:h-72 w-full overflow-hidden rounded-xl border border-zinc-800 bg-[#090a0f] p-2">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain object-center"
              />
            </div>
          )}

          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-zinc-800 bg-[#090a0f] p-3 text-center"
              >
                <p className="text-sm font-bold text-white">{m.value}</p>
                <p className="text-[11px] text-zinc-400 mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Overview</h4>
            <p className="text-sm leading-relaxed text-zinc-300">{project.fullDescription}</p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-6">
            <div className="rounded-xl border border-zinc-800 bg-[#090a0f] p-4">
              <div className="flex items-center gap-2 text-red-400 font-semibold text-xs uppercase mb-1.5">
                <ShieldAlert className="h-4 w-4" />
                <span>Engineering Challenge</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">{project.challenge}</p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-[#090a0f] p-4">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase mb-1.5">
                <Cpu className="h-4 w-4" />
                <span>Implemented Solution</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">Key Features</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-zinc-800 bg-[#090a0f] px-3 py-1 text-xs text-zinc-300 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="flex items-center gap-3 border-t border-zinc-800 pt-5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-red-500 transition-all"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>View Source Code</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            <button
              onClick={onClose}
              className="rounded-xl border border-zinc-800 bg-[#090a0f] px-5 py-2.5 text-sm font-semibold text-zinc-400 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      <section id="projects" className="relative w-full bg-[#090a0f] px-6 py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-[#12131a] px-3.5 py-1 text-xs font-semibold text-zinc-300">
              <FolderGit2 className="h-3.5 w-3.5 text-zinc-400" />
              <span>Production Portfolio</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">
              Featured Mobile Applications
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-zinc-400">
              Selected production apps delivered for Android & iOS using Clean Architecture, Bloc, Riverpod, and cloud backend integrations.
            </p>

            {/* Category Filter Tabs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-red-600 border border-red-500 text-white shadow-md shadow-red-600/20'
                      : 'border border-zinc-800 bg-[#12131a] text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Sticky Stacking Cards Container */}
          <div className="relative mt-12 space-y-12 pb-24">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  style={{
                    top: `calc(6.5rem + ${index * 1.5}rem)`,
                    zIndex: index + 10,
                  }}
                  className="sticky group cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-[#12131a] p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:border-red-900/40 hover:shadow-red-950/20"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Details Column (lg:col-span-6) */}
                    <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                      
                      {/* Top Bar: Number & Badges */}
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-xs font-mono font-bold text-zinc-500">
                          {project.number}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-md border border-red-900/40 bg-red-950/30 px-2.5 py-0.5 text-[10px] font-mono font-semibold tracking-wider text-zinc-300 uppercase">
                          {project.badgeText}
                        </span>
                        <span className="rounded-md border border-zinc-800/80 bg-[#090a0f] px-2.5 py-0.5 text-[10px] font-mono font-medium text-zinc-400">
                          {project.category}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <div className="flex items-center gap-2.5">
                          <span className="text-2xl">{project.icon}</span>
                          <h3 className="text-2xl font-bold text-white group-hover:text-zinc-100 transition-colors sm:text-3xl">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-xs font-mono font-medium text-zinc-400 mt-1">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm">
                        {project.shortDescription}
                      </p>

                      {/* Metrics Bar */}
                      <div className="grid grid-cols-3 gap-2 rounded-xl border border-zinc-800 bg-[#090a0f] p-3">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="text-center">
                            <p className="text-xs font-mono font-bold text-white sm:text-sm">{m.value}</p>
                            <p className="text-[10px] font-mono text-zinc-400 mt-0.5">{m.label}</p>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-zinc-800 bg-[#090a0f] px-2.5 py-1 text-xs font-mono text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-zinc-800/80">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md transition-all hover:bg-red-500"
                        >
                          <span>View Full Specifications</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </button>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#090a0f] px-4 py-2.5 text-xs font-semibold text-zinc-300 transition-all hover:border-zinc-700 hover:text-white"
                          >
                            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            <span>Source Code</span>
                          </a>
                        )}
                      </div>

                    </div>

                    {/* Right Visual Image Column (lg:col-span-6) - Full Uncropped Image */}
                    <div className="lg:col-span-6 flex justify-center">
                      {project.image && (
                        <div
                          onClick={() => setSelectedProject(project)}
                          className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-xl border border-zinc-800 bg-[#090a0f] p-2 shadow-lg group-hover:border-zinc-700"
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain object-center group-hover:scale-105 transition-transform duration-500 p-2"
                          />
                        </div>
                      )}
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Detail Sheet Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Projects



