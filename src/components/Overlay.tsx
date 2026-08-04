'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Overlay: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Transform scroll progress to opacity and position values
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 0.8, 0])
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4, 0.55], [0, 1, 0])
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.65, 0.8], [0, 1, 0])

  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const y2 = useTransform(scrollYProgress, [0.2, 0.55], [50, -50])
  const y3 = useTransform(scrollYProgress, [0.45, 0.8], [50, -50])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 h-[500vh] w-full"
    >
      {/* Fixed overlay container */}
      <div className="fixed inset-0 z-10 flex flex-col items-center justify-center">
        {/* Section 1: Hero Text - Center */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          style={{ opacity: opacity1, y: y1 }}
        >
          <motion.p className="mb-2 text-sm md:text-base font-semibold tracking-widest text-cyan-400 uppercase">
            Flutter Developer | Mobile App Developer
          </motion.p>
          <motion.h1 className="text-5xl md:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Muhammad Ali Raza
            </span>
          </motion.h1>
          <motion.p className="mt-6 text-lg md:text-xl text-gray-300 font-light max-w-3xl leading-relaxed">
            Results-driven Flutter Developer & CS graduate with 2+ years of experience delivering cross-platform Android and iOS applications using Clean Architecture (Bloc, Riverpod) and Firebase.
          </motion.p>
        </motion.div>

        {/* Section 2: Left-aligned text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-start pl-8 md:pl-20"
          style={{ opacity: opacity2, y: y2 }}
        >
          <motion.div className="max-w-lg">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Architecting <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Multi-Tenant Apps
              </span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-400">
              Building scalable codebases for AI creative tools, e-commerce platforms, product scanning incentives, and real-time backend integrations.
            </p>
          </motion.div>
        </motion.div>

        {/* Section 3: Right-aligned text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-end pr-8 md:pr-20"
          style={{ opacity: opacity3, y: y3 }}
        >
          <motion.div className="max-w-lg text-right">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Flutter & State
              </span>
              <br />
              Management Mastery
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-400">
              Expertise in Bloc, Riverpod, Provider, GetX, RESTful APIs, Firebase Auth & Firestore, and Play Store / App Store deployments.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Overlay
