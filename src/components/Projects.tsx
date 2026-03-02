'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  challenge: string
  solution: string
  tags: string[]
  features: string[]
  gradient: string
  accentColor: string
  icon: string
  liveUrl?: string
  githubUrl?: string
  status: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Ecommerce App — Single Vendor',
    shortDescription: 'AI-powered recommendations, and social features.',
    fullDescription:
      'A fully-featured single-vendor ecommerce mobile application built with Flutter. The app delivers a seamless shopping experience with AI-powered product recommendations, real-time inventory tracking, and social sharing features that drive user engagement.',
    challenge:
      'Building a performant shopping app that handles thousands of products with smooth scrolling, fast image loading, and real-time cart sync across devices.',
    solution:
      'Implemented infinite scroll with lazy loading, Firebase Realtime Database for cart sync, and integrated a lightweight ML model for personalized recommendations using Firebase ML Kit.',
    tags: ['Flutter', 'Bloc', 'Firebase'],
    features: [
      'AI-powered product recommendations',
      'Real-time cart synchronization across devices',
      'Secure payment gateway integration',
      'Push notifications for order updates',
      'Social sharing & wishlist features',
      'Admin panel for product management',
    ],
    gradient: 'from-cyan-500/20 to-blue-600/20',
    accentColor: 'from-cyan-400 to-blue-500',
    icon: '🛒',
    status: 'Production',
  },
  {
    id: 2,
    title: 'Trust Docs — Secure Document Vault',
    shortDescription: 'Secure the documents integrated with Firebase.',
    fullDescription:
      'Trust Docs is a privacy-first document management application that enables users to securely store, organize, and share sensitive documents. Built with end-to-end encryption and Firebase backend, it ensures that confidential files remain protected at all times.',
    challenge:
      'Ensuring document security both in transit and at rest while maintaining a smooth UX for document upload, preview, and sharing across different file types.',
    solution:
      'Implemented AES-256 encryption locally before upload, used Firebase Storage security rules for access control, and built a custom PDF/image viewer with annotation support in Flutter.',
    tags: ['Flutter', 'GetX', 'Firebase'],
    features: [
      'End-to-end AES-256 document encryption',
      'Biometric authentication (Face ID / Fingerprint)',
      'PDF & image viewer with annotations',
      'Secure document sharing via expiring links',
      'Folder-based organization with search',
      'Offline access to cached documents',
    ],
    gradient: 'from-purple-500/20 to-pink-600/20',
    accentColor: 'from-purple-400 to-pink-500',
    icon: '🔐',
    status: 'Production',
  },
  {
    id: 3,
    title: 'Snap2Sketch — Image Transformation',
    shortDescription: 'Transform images into anime, cartoon, and custom PDF books.',
    fullDescription:
      'Snap2Sketch is a creative cross-platform app that uses AI to transform ordinary photos into stunning anime or cartoon artwork. Users can compile their transformed images into a custom-designed PDF book — perfect as a gift or keepsake.',
    challenge:
      "Integrating a heavy AI image-transformation backend while keeping the app responsive and ensuring the generated images maintain high quality suitable for PDF printing.",
    solution:
      'Used isolates for background processing to keep the UI thread smooth, implemented a chunked upload/download pipeline for large images, and built a custom PDF generation engine within Flutter using the `pdf` package.',
    tags: ['Flutter', 'Bloc', 'Backend Integration'],
    features: [
      'AI-powered anime & cartoon transformation',
      'Custom PDF book creation from photos',
      'Batch image processing with progress tracking',
      'Multiple art styles (anime, sketch, watercolor)',
      'In-app photo editor for cropping & filters',
      'Share & export to social media',
    ],
    gradient: 'from-amber-500/20 to-orange-600/20',
    accentColor: 'from-amber-400 to-orange-500',
    icon: '🎨',
    status: 'Production',
  },
]

// ─── Modal Component ──────────────────────────────────────────────────────────

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal Panel */}
      <motion.div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-700/60 bg-gray-900 shadow-2xl"
        initial={{ opacity: 0, scale: 0.88, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 40 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
      >
        {/* Gradient accent top bar */}
        <div className={`h-1.5 w-full rounded-t-2xl bg-gradient-to-r ${project.accentColor}`} />

        <div className="p-8">
          {/* Header */}
          <div className="mb-6 flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} text-3xl border border-gray-700/50`}
              >
                {project.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
                <span
                  className={`mt-1 inline-block rounded-full bg-gradient-to-r ${project.accentColor} px-3 py-0.5 text-xs font-semibold text-white`}
                >
                  {project.status}
                </span>
              </div>
            </div>
            {/* Close button */}
            <button
              onClick={onClose}
              className="flex-shrink-0 rounded-lg border border-gray-700/50 p-2 text-gray-400 transition hover:border-gray-500 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300 ring-1 ring-gray-700/60"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* About */}
          <div className="mb-6">
            <h4 className={`mb-2 text-sm font-semibold uppercase tracking-widest bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent`}>
              About
            </h4>
            <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Challenge & Solution */}
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-gray-700/50 bg-gray-800/40 p-4">
              <h4 className="mb-2 text-sm font-semibold text-red-400 uppercase tracking-widest">
                🧩 Challenge
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">{project.challenge}</p>
            </div>
            <div className="rounded-xl border border-gray-700/50 bg-gray-800/40 p-4">
              <h4 className="mb-2 text-sm font-semibold text-green-400 uppercase tracking-widest">
                💡 Solution
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h4 className={`mb-3 text-sm font-semibold uppercase tracking-widest bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent`}>
              Key Features
            </h4>
            <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {project.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-gray-300"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx }}
                >
                  <span className={`mt-0.5 flex-shrink-0 bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent font-bold`}>
                    ✦
                  </span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${project.accentColor} px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-90`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                🚀 Live Demo
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-600/60 bg-gray-800/50 px-5 py-2.5 text-sm font-semibold text-gray-300 transition hover:border-gray-500 hover:text-white"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                🐙 View Code
              </motion.a>
            )}
            <motion.button
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-700/50 bg-transparent px-5 py-2.5 text-sm font-semibold text-gray-400 transition hover:border-gray-500 hover:text-white"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Close
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

// ─── Projects Section ─────────────────────────────────────────────────────────

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <section id="projects" className="relative w-full bg-dark-950 px-6 py-24 md:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
          <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
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
                Featured Applications
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              A collection of production-grade mobile applications showcasing native performance,
              beautiful UI/UX, and scalable architecture.
            </p>
            <p className="mt-3 text-sm text-gray-600">Click any project to explore it →</p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-gray-600/80 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Glass effect border glow */}
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${project.gradient} opacity-0 blur transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 text-2xl">
                    {project.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>

                  {/* Short Description */}
                  <p className="mb-6 text-gray-400 leading-relaxed">{project.shortDescription}</p>

                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-800/50 px-3 py-1 text-xs font-medium text-gray-300 ring-1 ring-gray-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.span
                    className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent`}
                    whileHover={{ x: 4 }}
                  >
                    Explore Project →
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
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
