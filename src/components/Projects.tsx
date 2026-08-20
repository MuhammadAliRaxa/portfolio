'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  ArrowUpRight,
  CheckCircle2,
  ShieldAlert,
  Cpu,
  FolderGit2,
  X,
} from 'lucide-react'

const GithubIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const PlayStoreIcon = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.43 2.43 0 0 1-.61-1.637V3.451c0-.624.22-1.196.609-1.637zM15.206 13.414l2.766 2.766-12.825 7.404 10.059-10.17zM15.206 10.586L5.147.416 17.972 7.82l-2.766 2.766zM16.62 12l2.956-1.707c.806-.465.806-1.221 0-1.686L16.62 12z" />
  </svg>
)

const AppStoreIcon = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 7.04c.64-.78 1.08-1.86.96-2.95-1 .04-2.14.65-2.82 1.43-.59.67-1.11 1.77-.97 2.83 1.12.09 2.19-.53 2.83-1.31z" />
  </svg>
)

interface Project {
  id: number
  number: string
  title: string
  subtitle: string
  category: 'E-Commerce' | 'AI & ML' | 'Multi-Tenant' | 'Cloud & Security' | 'Marketplace & Booking'
  badgeText: string
  image: string
  shortDescription: string
  fullDescription: string
  challenge: string
  solution: string
  tags: string[]
  features: string[]
  githubUrl?: string
  playStoreUrl?: string
  appStoreUrl?: string
  metrics: { label: string; value: string }[]
}

const projects: Project[] = [
  {
    id: 1,
    number: '01',
    title: 'CarLove',
    subtitle: 'Detailing Service Marketplace & Booking App',
    category: 'Marketplace & Booking',
    badgeText: 'Recent Project',
    image: '/carlove.png',
    appStoreUrl: 'https://apps.apple.com/us/app/carlove-detail-your-car/id6752032667',
    shortDescription:
      'A multi-sided mobile marketplace connecting car owners with verified auto detailing shops and pros. Features geolocation discovery, dynamic service catalogs, vehicle profile management, and a dedicated detailing studio provider dashboard.',
    fullDescription:
      'Architected and developed CarLove, an on-demand auto detailing service marketplace app available live on iOS and Android. Built with Flutter, the platform delivers a streamlined experience for car owners to find nearby detailers, customize services (ceramic coating, paint protection, interior detailing), and track appointments, while service providers manage shop listings, active services, and incoming customer bookings through a dedicated studio dashboard.',
    challenge:
      'Designing an intuitive multi-persona workflow (Car Owners vs. Detailing Studio Providers), dynamic service catalog configuration, and geolocation-filtered shop search.',
    solution:
      'Implemented Clean Architecture with Riverpod & Bloc, dynamic service catalog schemas, geolocation filtering, and real-time backend synchronization for appointment tracking and provider studio management.',
    tags: ['Flutter', 'Dart', 'Clean Arch', 'Riverpod', 'REST APIs', 'App Store'],
    features: [
      'Location-based discovery of top-rated auto detailing shops & pros',
      'Interactive service catalog (Ceramic Coating, Paint Protection, Interior)',
      'Multi-vehicle garage management & service booking history',
      'Detailing Services Studio provider dashboard for managing active offerings',
      'Customer review system and verified shop profiles',
      'Published and available live on the Apple App Store',
    ],
    metrics: [
      { label: 'Store Status', value: 'Live on iOS' },
      { label: 'Architecture', value: 'Clean + Bloc' },
      { label: 'Platform', value: 'iOS & Android' },
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Trust Docs',
    subtitle: 'Secure Document Cloud & Admin Verification System',
    category: 'Cloud & Security',
    badgeText: 'Recent Project',
    image: '/trustdocs.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.azhar.trustdocuments&hl=en',
    shortDescription:
      'Encrypted cloud document vault with multi-format file upload (PDF, JPG, PNG), real-time status tracking, and admin approval verification workflows on mobile.',
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
  },
  {
    id: 3,
    number: '03',
    title: 'Snap2Sketch',
    subtitle: 'AI Photo Transformation & Canvas Book Engine',
    category: 'AI & ML',
    badgeText: 'Recent Project',
    image: '/snap2sketch.png',
    shortDescription:
      'A creative mobile app where users capture or upload photos and transform them into cartoon-style or pencil-sketch artwork via a custom backend AI API. Features an interactive Canvas Book module allowing users to arrange transformed images into customizable pages and place print orders.',
    fullDescription:
      'Engineered Snap2Sketch, a creative mobile application enabling users to transform personal photos into artistic styles (Linework, Cartoon, Manga, and Anime) via custom AI model integration. Built with a guided multi-step transformation pipeline (photo review, style selection, variant tuning, and instant export), an interactive Canvas & Paint Book editor for custom album page layouts, user cloud storage quota tracking, and on-demand physical print ordering.',
    challenge:
      'Optimizing multi-step asynchronous image processing pipelines across heavy AI model endpoints while maintaining a fluid 60fps drag-and-drop canvas layout editor on mobile devices.',
    solution:
      'Implemented an asynchronous processing queue with Dart isolates for image operations, optimized state synchronization using Riverpod/Bloc, and built a custom gesture-driven canvas rendering engine with multi-layer editing.',
    tags: ['Flutter', 'Dart', 'AI API', 'Canvas Engine', 'Cloud Storage', 'REST API'],
    features: [
      'Guided multi-step AI transformation pipeline (Upload, Style, Variant, Export)',
      'Diverse artistic styles: Linework, Cartoon, Manga Style & Anime Layouts',
      'Interactive Canvas & Paint Book editor with layer controls & drawing tools',
      'Physical print ordering workflow & high-resolution artwork downloads',
      'Cloud storage tier tracking & in-app plan upgrade integration',
      'Optimized 60fps image rendering pipeline with Dart isolates',
    ],
    metrics: [
      { label: 'AI Engine', value: 'Custom API' },
      { label: 'Feature', value: 'Canvas Book' },
      { label: 'Platform', value: 'Android / iOS' },
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'E-Commerce Mobile App',
    subtitle: 'Real-Time Sync & AI Customer Support Chatbot',
    category: 'E-Commerce',
    badgeText: 'Recent Project',
    image: '/ecommerce.png',
    githubUrl: 'https://github.com/MuhammadAliRaxa/E-Commerce',
    shortDescription:
      'Full-featured cross-platform e-commerce app with real-time Firestore data sync, dynamic cart management, and an intelligent AI support chatbot for automated customer inquiries and product discovery.',
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
  },
  {
    id: 5,
    number: '05',
    title: 'MR Trading',
    subtitle: 'Product-Scanning Sales & Admin Incentive Payouts',
    category: 'Multi-Tenant',
    badgeText: 'Recent Project',
    image: '/mrtrading.jpg',
    shortDescription:
      'A high-performance mobile platform for Admins and Technicians to scan QR code products, register sales, track real-time sales analytics, and manage automated technician incentive payout workflows.',
    fullDescription:
      'Engineered MR Trading, a mobile platform for Admins and Technicians to scan QR code products, register sales, track real-time sales reports, and manage technician incentive payouts. Built with Flutter for Android and iOS, featuring identity verification, balance tracking, and role-based admin approval controls.',
    challenge:
      'Building reliable real-time camera QR scanning alongside secure role-based payout approvals and sales analytics filtering.',
    solution:
      'Integrated high-performance mobile QR code scanning SDK, structured Bloc state management, and secured Cloud Firestore rules for payout verifications.',
    tags: ['Flutter', 'Dart', 'QR Scanner', 'Cloud Firestore', 'Bloc', 'Admin Panel'],
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
  },
]

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
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#48e5c2] font-mono">
                {project.number} — {project.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">{project.title}</h3>
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
                  <CheckCircle2 className="h-4 w-4 text-[#48e5c2] flex-shrink-0 mt-0.5" />
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
                className="rounded-md border border-zinc-800 bg-[#090a0f] px-3 py-1 text-xs text-zinc-300 font-medium font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center gap-3 border-t border-zinc-800 pt-5">
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-500 transition-all"
              >
                <AppStoreIcon className="h-4 w-4" />
                <span>Live on App Store</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-emerald-500 transition-all"
              >
                <PlayStoreIcon className="h-4 w-4" />
                <span>Live on Google Play</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-md hover:bg-zinc-200 transition-all"
              >
                <GithubIcon className="h-4 w-4" />
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <section id="projects" className="relative w-full bg-[#050811] py-24 md:py-32 overflow-hidden">
        {/* Ambient atmospheric cyan & electric blue glows */}
        <div className="pointer-events-none absolute top-10 right-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="pointer-events-none absolute bottom-10 left-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[180px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-3.5 py-1 text-[11px] font-semibold text-cyan-300 uppercase tracking-wider mb-3">
              <FolderGit2 className="h-3.5 w-3.5 text-[#48e5c2]" />
              <span>Production Portfolio</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Recent Projects
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
              A curated selection of shipped mobile apps built with Flutter, Firebase, and scalable architectures.
            </p>
          </motion.div>

          {/* Recent Project Items */}
          <div className="space-y-16 md:space-y-20">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-50px' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
              >
                {/* Left Side: Overline, Title, Description Box, Action Buttons */}
                <div className="lg:col-span-6 flex flex-col items-start text-left">
                  {/* Recent Project label */}
                  <span className="text-[11px] sm:text-xs font-mono font-medium text-[#48e5c2] tracking-wider mb-1.5">
                    Recent Project
                  </span>

                  {/* Title */}
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight cursor-pointer hover:text-[#48e5c2] transition-colors mb-3"
                  >
                    {project.title}
                  </h3>

                  {/* Description Box */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="w-full rounded-xl bg-[#0b101b]/90 border border-cyan-500/15 backdrop-blur-xl p-4 sm:p-5 shadow-xl shadow-black/60 cursor-pointer hover:border-cyan-400/30 transition-all duration-300 mb-4"
                  >
                    <p className="text-xs sm:text-[13px] leading-relaxed text-zinc-300 font-normal">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    {project.appStoreUrl && (
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View on Apple App Store"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs px-3.5 py-2 shadow-md shadow-blue-950/40 border border-blue-400/30 transition-all hover:scale-105"
                      >
                        <AppStoreIcon className="h-3.5 w-3.5" />
                        <span>App Store</span>
                        <ArrowUpRight className="h-3 w-3 opacity-70" />
                      </a>
                    )}

                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View on Google Play"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs px-3.5 py-2 shadow-md shadow-emerald-950/40 border border-emerald-400/30 transition-all hover:scale-105"
                      >
                        <PlayStoreIcon className="h-3.5 w-3.5" />
                        <span>Google Play</span>
                        <ArrowUpRight className="h-3 w-3 opacity-70" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub Repository"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs px-3.5 py-2 border border-cyan-500/20 transition-all hover:scale-105"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>View Code</span>
                        <ArrowUpRight className="h-3 w-3 opacity-70" />
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
                      title="View Full Case Study"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-medium text-xs px-3.5 py-2 border border-cyan-500/20 transition-all hover:scale-105 cursor-pointer"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>

                {/* Right Side: Image Mockup (Complete uncropped image with rounded corners) */}
                <div className="lg:col-span-6 flex justify-center lg:justify-end">
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative w-full max-w-[440px] aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer group flex items-center justify-center"
                  >
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 440px"
                        className="object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105 drop-shadow-2xl"
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
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



