'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'

const Education: React.FC = () => {
  return (
    <section id="education" className="relative w-full bg-[#060709] py-20 md:py-28 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-4">
            <GraduationCap className="h-3 w-3" />
            <span>Education</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Academic Background
          </h2>
        </motion.div>

        {/* Education Card — single clean row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl"
        >
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/30 backdrop-blur-sm p-6 sm:p-8 transition-all duration-500 hover:border-zinc-700/60 hover:bg-zinc-800/20">

            {/* Ambient glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-violet-600/8 blur-[80px] group-hover:bg-violet-600/12 transition-all duration-700" />

            {/* Top row: degree info + CGPA */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">

              {/* Left — degree details */}
              <div className="space-y-3 flex-1">
                {/* Date & degree tag */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-mono font-semibold text-zinc-400">
                    2022 — 2026
                  </span>
                  <span className="rounded-full border border-violet-500/20 bg-violet-500/5 px-3 py-1 text-[10px] font-bold text-violet-400 uppercase tracking-wider">
                    BS Computer Science
                  </span>
                </div>

                {/* University name */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    The Islamia University of Bahawalpur
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-zinc-500">
                    <MapPin className="h-3 w-3" />
                    <span>Bahawalpur, Punjab, Pakistan</span>
                  </div>
                </div>

                {/* Core subjects — minimal pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Mobile Engineering', 'OOP & Algorithms', 'Clean Architecture', 'Database Systems'].map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-zinc-500"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — CGPA display */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center rounded-xl border border-zinc-800/60 bg-[#060709]/80 px-6 py-4 min-w-[120px]">
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none">
                  3.45
                </span>
                <span className="text-[10px] font-mono text-zinc-500 mt-1">/ 4.0 CGPA</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
