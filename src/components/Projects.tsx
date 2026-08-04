'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, ShieldAlert, Cpu, Sparkles } from 'lucide-react'

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
    title: 'AI API Integration Suite',
    subtitle: 'OpenAI GPT, Gemini & Google ML Kit Core',
    category: 'AI & ML',
    badgeText: 'MULTI-AI MODEL',
    accentColor: '#f87171',
    shortDescription:
      'Engineered AI layers for Flutter apps delivering text summarization, real-time image recognition, and NLP.',
    fullDescription:
      'Integrated OpenAI GPT, Google Gemini, and Google ML Kit across multiple Flutter apps, delivering text summarisation, real-time image recognition, and natural language processing features. Engineered secure, rate-limited AI communication layers with comprehensive error handling, ensuring reliable and stable performance in production.',
    challenge:
      'Managing API rate limits, large payload payloads, and robust fallback mechanisms across multiple AI models in production.',
    solution:
      'Designed rate-limited AI driver modules with exponential backoff retries, robust error handling, and clean asynchronous abstraction layers.',
    tags: ['Flutter', 'Dart', 'OpenAI GPT', 'Gemini', 'Google ML Kit', 'REST APIs'],
    features: [
      'Multi-model integration (OpenAI GPT, Gemini, ML Kit)',
      'Real-time image recognition & computer vision features',
      'Natural language processing & automated text summarisation',
      'Secure, rate-limited AI communication layers',
      'Comprehensive error handling and failure recovery',
      'Production-proven stability across Flutter apps',
    ],
    metrics: [
      { label: 'Models', value: 'GPT & Gemini' },
      { label: 'Vision', value: 'ML Kit' },
      { label: 'Layer', value: 'Rate-Limited' },
    ],
    icon: '🤖',
  },
  {
    id: 4,
    number: '04',
    title: 'Ramza Electric Bike',
    subtitle: 'E-Commerce Mobile Sales Platform',
    category: 'E-Commerce',
    badgeText: 'E-MOBILITY',
    accentColor: '#b91c1c',
    shortDescription:
      'Specialized e-commerce app for electric bike sales featuring product catalog, cart management, and order processing.',
    fullDescription:
      'Built Ramza Electric Bike, an e-commerce mobile app tailored for electric bike sales. Developed with Flutter, Bloc, and RESTful APIs, providing product catalog browsing, detailed bike spec sheets, seamless cart management, and streamlined order processing for clients.',
    challenge:
      'Rendering complex bike specifications and handling multi-item cart state efficiently on mobile viewports.',
    solution:
      'Structured Bloc state management with clean UI widget decomposition and optimized RESTful API payload consumption.',
    tags: ['Flutter', 'Dart', 'Bloc', 'REST API', 'E-Commerce'],
    features: [
      'Electric bike product catalog & detail views',
      'Cart management & checkout order processing',
      'RESTful API integration with structured error handling',
      'Bloc state management for reactive UI updates',
    ],
    metrics: [
      { label: 'Domain', value: 'E-Mobility' },
      { label: 'State', value: 'Bloc' },
      { label: 'Backend', value: 'REST APIs' },
    ],
    icon: '⚡',
  },
  {
    id: 5,
    number: '05',
    title: 'MR Enterprises',
    subtitle: 'Product-Scanning Incentive & Admin Payouts',
    category: 'Multi-Tenant',
    badgeText: 'INCENTIVE APP',
    accentColor: '#ef4444',
    shortDescription:
      'Product-scanning reward platform enabling users to scan items to earn rewards, with admin payout processing.',
    fullDescription:
      'Built MR Enterprises, a product-scanning incentive app enabling users to scan product barcodes to earn rewards. Features an integrated admin panel to review, verify, and process user incentive payouts securely.',
    challenge:
      'Building reliable real-time camera scanning alongside role-based access for incentive approval.',
    solution:
      'Integrated high-performance mobile barcode scanning SDK and secured Firestore rules for admin payout operations.',
    tags: ['Flutter', 'Firebase', 'Barcode Scanner', 'Provider', 'Admin Panel'],
    features: [
      'Instant barcode product scanning for reward points',
      'User earnings dashboard & transaction history',
      'Admin panel to review & process incentive payouts',
      'Firebase Auth & Firestore rule-based security',
    ],
    metrics: [
      { label: 'Scan', value: 'Barcode/QR' },
      { label: 'Admin', value: 'Payout Panel' },
      { label: 'Backend', value: 'Firebase' },
    ],
    icon: '📱',
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
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      <motion.div
        className="relative z-10 w-full max-h-[90vh] sm:max-w-3xl overflow-hidden rounded-t-3xl sm:rounded-3xl border border-red-500/40 bg-[#08080f] shadow-2xl shadow-red-950/80"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="overflow-y-auto max-h-[90vh] p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 text-2xl shadow-lg shadow-red-600/30">
                {project.icon}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-500">
                  {project.number} — {project.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="rounded-full bg-gray-900 border border-gray-800 px-3 py-1.5 text-xs font-semibold text-gray-400 hover:bg-red-950 hover:text-white"
            >
              ✕ Esc
            </button>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-red-500/20 bg-[#0e0b14] p-3 text-center"
              >
                <p className="text-base font-extrabold text-red-500">{m.value}</p>
                <p className="text-[11px] text-gray-400 mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Overview</h4>
            <p className="text-sm leading-relaxed text-gray-300">{project.fullDescription}</p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-6">
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4">
              <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase mb-1">
                <ShieldAlert className="h-4 w-4" />
                <span>Engineering Challenge</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">{project.challenge}</p>
            </div>

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase mb-1">
                <Cpu className="h-4 w-4" />
                <span>Implemented Solution</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Key Features</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
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
                className="rounded-full border border-red-500/20 bg-red-950/40 px-3 py-1 text-xs text-red-300 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="flex items-center gap-3 border-t border-gray-800/80 pt-5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all"
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
              className="rounded-xl border border-gray-800 bg-[#0d0a10] px-5 py-2.5 text-sm font-semibold text-gray-400 hover:text-white"
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
      <section id="projects" className="relative w-full bg-[#050508] px-6 py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Production Apps Showcase</span>
            </div>
            <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-6xl">
              Featured Mobile Applications
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              Selected apps delivered for Android & iOS using Clean Architecture, Bloc, Riverpod, and cloud backend integrations.
            </p>

            {/* Category Filter Tabs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-lg shadow-red-600/30 border border-red-500/50'
                      : 'border border-gray-800 bg-[#0a0a10] text-gray-400 hover:border-red-900/50 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            layout
            className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl border border-gray-800/80 bg-[#0a0a12]/70 p-7 backdrop-blur-md transition-all duration-500 hover:border-red-500/60 hover:bg-[#0f0b18]/90 hover:shadow-2xl hover:shadow-red-950/60"
                >
                  {/* Top Bar: Number & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-extrabold text-gray-500 tracking-widest">
                      {project.number}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-[10px] font-bold tracking-wider text-red-400 uppercase">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                      {project.badgeText}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600/30 to-red-900/30 border border-red-500/40 text-2xl shadow-md group-hover:scale-105 transition-transform">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-gray-400 mt-0.5">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs leading-relaxed text-gray-400 mb-6 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-3 gap-2 rounded-2xl border border-gray-800/80 bg-[#07070c] p-3 mb-6">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <p className="text-xs font-extrabold text-white">{m.value}</p>
                        <p className="text-[10px] text-gray-500 mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center justify-between text-xs font-bold text-red-500 group-hover:translate-x-1 transition-transform pt-2 border-t border-gray-800/80">
                    <span>Explore Full Specs</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
