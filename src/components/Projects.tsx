'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  id: number
  title: string
  subtitle: string
  shortDescription: string
  fullDescription: string
  challenge: string
  solution: string
  tags: string[]
  features: string[]
  gradient: string
  borderGlow: string
  accentFrom: string
  accentTo: string
  icon: string
  number: string
  liveUrl?: string
  githubUrl?: string
  metrics: { label: string; value: string }[]
}

const projects: Project[] = [
  {
    id: 1,
    number: '01',
    title: 'Ecommerce App',
    subtitle: 'Single Vendor Platform',
    shortDescription:
      'A full-featured shopping experience with AI-powered recommendations and real-time sync.',
    fullDescription:
      'A production-grade single-vendor ecommerce platform built in Flutter. Delivers a seamless, high-performance shopping experience complete with AI-driven product recommendations, real-time inventory management, and social features that maximize user engagement and conversion.',
    challenge:
      'Handling thousands of SKUs with smooth infinite-scroll, sub-second image loading, and live cart sync across multiple devices simultaneously.',
    solution:
      'Implemented lazy-loading with image caching, Firebase Realtime Database for cart state, and integrated Firebase ML Kit for on-device personalized recommendations.',
    tags: ['Flutter', 'Bloc', 'Firebase', 'ML Kit'],
    features: [
      'AI-powered product recommendations',
      'Real-time cart sync across devices',
      'Secure payment gateway (Stripe)',
      'Order tracking with push notifications',
      'Social sharing & wishlist',
      'Admin dashboard for inventory',
    ],
    metrics: [
      { label: 'Downloads', value: '50K+' },
      { label: 'Rating', value: '4.8 ★' },
      { label: 'Load Time', value: '<1.2s' },
    ],
    gradient: 'from-cyan-500/10 to-blue-600/10',
    borderGlow: 'hover:border-cyan-500/40',
    accentFrom: '#06b6d4',
    accentTo: '#2563eb',
    icon: '🛒',
  },
  {
    id: 2,
    number: '02',
    title: 'Trust Docs',
    subtitle: 'Secure Document Vault',
    shortDescription:
      'Privacy-first document management with end-to-end encryption and biometric access.',
    fullDescription:
      'A privacy-first document management application enabling users to securely store, organise, and share sensitive documents. Built with AES-256 encryption, Firebase Storage security rules, and biometric authentication — every file is protected both in transit and at rest.',
    challenge:
      'Ensuring military-grade document security while maintaining a frictionless UX for uploading, previewing, and sharing across multiple file formats.',
    solution:
      'Documents are encrypted client-side before upload using AES-256. Custom PDF/image viewer with annotation support was built natively in Flutter using zero third-party viewer dependencies.',
    tags: ['Flutter', 'GetX', 'Firebase', 'Encryption'],
    features: [
      'AES-256 client-side encryption',
      'Face ID / Fingerprint authentication',
      'Native PDF & image viewer',
      'Secure sharing via expiring links',
      'Folder organisation with full-text search',
      'Offline access to cached documents',
    ],
    metrics: [
      { label: 'Security', value: 'AES-256' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Users', value: '10K+' },
    ],
    gradient: 'from-violet-500/10 to-purple-600/10',
    borderGlow: 'hover:border-violet-500/40',
    accentFrom: '#8b5cf6',
    accentTo: '#a855f7',
    icon: '🔐',
  },
  {
    id: 3,
    number: '03',
    title: 'Snap2Sketch',
    subtitle: 'AI Image Transformation',
    shortDescription:
      'Transform photos into anime or cartoon art, then compile them into a custom PDF book.',
    fullDescription:
      "Snap2Sketch is a creative cross-platform application powered by AI that transforms ordinary photos into stunning anime or cartoon artwork. Users compile their transformed gallery into a beautifully designed PDF keepsake book — perfect as a personalised gift. Built with Flutter's isolate-based concurrency for a silky-smooth UI.",
    challenge:
      'Integrating a computationally heavy AI transformation backend while keeping the UI at 60fps and ensuring exported images hit print-quality resolution for PDF output.',
    solution:
      'Used Dart isolates for background image processing, a chunked upload/download pipeline for large assets, and a custom PDF engine built on the dart `pdf` package with print-ready DPI handling.',
    tags: ['Flutter', 'Bloc', 'AI / ML', 'REST API'],
    features: [
      'AI anime & cartoon style transfer',
      'Custom PDF book with designed layouts',
      'Batch processing with live progress',
      'Multiple styles: anime, sketch, watercolor',
      'In-app photo editor (crop, filters)',
      'Direct export to social media',
    ],
    metrics: [
      { label: 'Styles', value: '8+' },
      { label: 'Processing', value: '<10s' },
      { label: 'Exports', value: '200K+' },
    ],
    gradient: 'from-amber-500/10 to-orange-600/10',
    borderGlow: 'hover:border-amber-500/40',
    accentFrom: '#f59e0b',
    accentTo: '#ea580c',
    icon: '🎨',
  },
]

// ─── Modal ────────────────────────────────────────────────────────────────────

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Prevent body scroll while modal open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const accentGradient = `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})`

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-end justify-center sm:items-center p-0 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-xl"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Sheet */}
      <motion.div
        className="relative z-10 w-full sm:max-w-2xl max-h-[92vh] overflow-hidden rounded-t-3xl sm:rounded-3xl bg-[#0d0d0f] border border-white/[0.07] shadow-[0_32px_80px_rgba(0,0,0,0.8)]"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ type: 'spring', stiffness: 320, damping: 34 }}
      >
        {/* Scrollable inner */}
        <div className="overflow-y-auto max-h-[92vh]">

          {/* Hero strip */}
          <div
            className="relative h-2 w-full rounded-t-3xl"
            style={{ background: accentGradient }}
          />

          {/* Drag indicator (mobile) */}
          <div className="flex justify-center pt-3 pb-1 sm:hidden">
            <div className="h-1 w-10 rounded-full bg-white/20" />
          </div>

          <div className="px-7 pb-8 pt-5">
            {/* Header row */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                {/* Icon badge */}
                <div
                  className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-2xl text-2xl shadow-lg"
                  style={{ background: accentGradient }}
                >
                  {project.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-white/35 uppercase mb-0.5">
                    {project.number} — {project.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-white leading-snug tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Close */}
              <button
                onClick={onClose}
                className="flex-shrink-0 mt-1 h-8 w-8 flex items-center justify-center rounded-full bg-white/[0.06] text-white/40 hover:bg-white/10 hover:text-white transition text-sm"
              >
                ✕
              </button>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-3 gap-3 mb-7">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-center"
                >
                  <p
                    className="text-lg font-bold"
                    style={{
                      background: accentGradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {m.value}
                  </p>
                  <p className="text-[11px] text-white/35 font-medium mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mb-6 h-px bg-white/[0.06]" />

            {/* About */}
            <Section label="Overview">
              <p className="text-[15px] text-white/60 leading-relaxed">{project.fullDescription}</p>
            </Section>

            {/* Challenge / Solution */}
            <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <InfoCard
                icon="🧩"
                label="Challenge"
                iconColor="#f87171"
                text={project.challenge}
              />
              <InfoCard
                icon="💡"
                label="Solution"
                iconColor="#34d399"
                text={project.solution}
              />
            </div>

            {/* Features */}
            <Section label="Key Features">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {project.features.map((f, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2.5 text-[14px] text-white/60"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <span
                      className="mt-[3px] h-[7px] w-[7px] flex-shrink-0 rounded-full"
                      style={{ background: accentGradient }}
                    />
                    {f}
                  </motion.li>
                ))}
              </ul>
            </Section>

            {/* Tags */}
            <div className="mb-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1 text-xs font-medium text-white/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
                  style={{ background: accentGradient }}
                  whileHover={{ scale: 1.03, opacity: 0.9 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Live
                  <span className="opacity-80">↗</span>
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white/70 hover:text-white hover:border-white/20 transition"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Source Code
                  <span className="opacity-60">↗</span>
                </motion.a>
              )}
              <motion.button
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.07] bg-transparent px-5 py-2.5 text-sm font-medium text-white/40 hover:text-white/60 transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Close
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Section({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-6">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30">
        {label}
      </p>
      {children}
    </div>
  )
}

function InfoCard({
  icon,
  label,
  iconColor,
  text,
}: {
  icon: string
  label: string
  iconColor: string
  text: string
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
      <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: iconColor }}>
        <span>{icon}</span>
        {label}
      </p>
      <p className="text-[13px] text-white/50 leading-relaxed">{text}</p>
    </div>
  )
}

// ─── Card ─────────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

// ─── Section ──────────────────────────────────────────────────────────────────

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <>
      <section id="projects" className="relative w-full bg-dark-950 px-6 py-24 md:py-36">
        {/* Ambient lights */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-60 top-0 h-[500px] w-[500px] rounded-full bg-cyan-600/5 blur-[120px]" />
          <div className="absolute -right-60 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-600/5 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            className="mb-16 text-center md:mb-24"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/30">
              Selected Work
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              <span className="bg-gradient-to-br from-white via-white/80 to-white/30 bg-clip-text text-transparent">
                Featured Applications
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/40">
              Production-grade mobile applications demonstrating native performance,
              clean architecture, and exceptional user experience.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-white/20">
              <span className="inline-block h-px w-8 bg-white/20" />
              <p className="text-xs tracking-widest uppercase">Click to explore</p>
              <span className="inline-block h-px w-8 bg-white/20" />
            </div>
          </motion.div>

          {/* Grid */}
          <motion.div
            className="grid grid-cols-1 gap-5 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.button
                key={project.id}
                variants={cardVariants}
                onClick={() => setSelected(project)}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] text-left transition-all duration-500 ${project.borderGlow} hover:bg-white/[0.04]`}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.985 }}
              >
                {/* Glow blob */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${project.accentFrom}, transparent)`,
                  }}
                />

                <div className="relative z-10 flex h-full flex-col p-7">
                  {/* Number + tags */}
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-semibold tabular-nums tracking-widest text-white/20">
                      {project.number}
                    </span>
                    <div className="flex gap-1.5">
                      {project.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/[0.07] bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium text-white/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-2xl shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${project.accentFrom}22, ${project.accentTo}22)`,
                      border: `1px solid ${project.accentFrom}33`,
                    }}
                  >
                    {project.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mb-1 text-lg font-bold leading-snug tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mb-3 text-xs font-medium text-white/30 tracking-wide">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-white/45">
                    {project.shortDescription}
                  </p>

                  {/* Metrics mini row */}
                  <div className="mb-6 flex gap-4">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <p
                          className="text-sm font-bold"
                          style={{
                            background: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {m.value}
                        </p>
                        <p className="text-[10px] text-white/25">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Footer CTA */}
                  <div className="flex items-center gap-2">
                    <div
                      className="h-px flex-1 opacity-20"
                      style={{
                        background: `linear-gradient(to right, ${project.accentFrom}, transparent)`,
                      }}
                    />
                    <span
                      className="text-xs font-semibold tracking-wide group-hover:gap-3 transition-all"
                      style={{
                        background: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      View Details →
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  )
}

export default Projects
