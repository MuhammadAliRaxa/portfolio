'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, CheckCircle2, BookOpen, Award, Sparkles, ShieldCheck } from 'lucide-react'

const Education: React.FC = () => {
  return (
    <section id="education" className="relative w-full bg-[#050508] px-6 py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-400">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Academic Distinction</span>
          </div>
          <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            Education & Foundation
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-gray-400">
            Academic foundation and specialized computer science degree.
          </p>
        </motion.div>

        {/* Holographic Card */}
        <motion.div
          className="group relative mt-12 overflow-hidden rounded-3xl border border-gray-800/80 bg-[#0a0a12]/70 p-8 backdrop-blur-md transition-all duration-500 hover:border-red-500/60 hover:bg-[#0f0b18]/90 hover:shadow-2xl hover:shadow-red-950/60 md:p-10"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Top Red Gradient Laser Bar */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-600 via-rose-600 to-red-900 shadow-[0_0_15px_rgba(239,68,68,0.8)]" />

          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-bold text-red-300">
                <BookOpen className="h-3.5 w-3.5" />
                <span>2022 - Jan 2026</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Bachelor of Science in Computer Science
              </h3>

              <p className="text-lg font-bold text-red-500">
                The Islamia University of Bahawalpur
              </p>

              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <MapPin className="h-3.5 w-3.5 text-gray-500" />
                <span>Bahawalpur, Punjab, Pakistan</span>
              </div>
            </div>

            {/* Merit CGPA Badge */}
            <div className="flex flex-col items-center justify-center rounded-2xl border border-red-500/40 bg-[#08070d] px-8 py-5 text-center shadow-2xl md:min-w-[210px] group-hover:border-red-500 transition-colors">
              <div className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest text-red-400 mb-1">
                <Award className="h-3.5 w-3.5" />
                <span>Merit Honor</span>
              </div>
              <span className="bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-4xl font-extrabold text-transparent">
                3.45 / 4.0
              </span>
              <span className="mt-1 text-[11px] font-semibold text-gray-400">Academic CGPA</span>
            </div>
          </div>

          {/* Specialization Pillars */}
          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-gray-800/80 pt-6 sm:grid-cols-3 text-xs text-gray-300">
            <div className="flex items-center gap-2.5 rounded-xl border border-gray-800 bg-[#07070c] p-3">
              <ShieldCheck className="h-4 w-4 text-red-500 flex-shrink-0" />
              <span>Clean Architecture & Mobile Systems</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-gray-800 bg-[#07070c] p-3">
              <Sparkles className="h-4 w-4 text-red-500 flex-shrink-0" />
              <span>Object-Oriented Programming (OOP)</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-gray-800 bg-[#07070c] p-3">
              <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0" />
              <span>Data Structures & Software Design</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
