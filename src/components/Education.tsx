'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react'

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
            <Award className="h-3 w-3 text-[#48e5c2]" />
            <span>Standards</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Engineering Excellence
          </h2>
        </motion.div>

        {/* Credentials Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl"
        >
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/30 backdrop-blur-sm p-6 sm:p-8 transition-all duration-500 hover:border-zinc-700/60 hover:bg-zinc-800/20">

            {/* Ambient glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cyan-600/8 blur-[80px] group-hover:bg-cyan-600/12 transition-all duration-700" />

            {/* Top row: degree info + metrics */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">

              {/* Left — details */}
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-mono font-semibold text-zinc-400">
                    Production Standard
                  </span>
                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                    Computer Science & Software Architecture
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Enterprise Architecture & Rigorous Quality Assurance
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-zinc-500">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#48e5c2]" />
                    <span>Clean Architecture · High Test Coverage · Automated CI/CD</span>
                  </div>
                </div>

                {/* Core subjects pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Mobile Engineering', 'Algorithms & Performance', 'Clean Architecture', 'Cloud Persistence', 'Real-time State Sync'].map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-zinc-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — Metric display */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center rounded-xl border border-zinc-800/60 bg-[#060709]/80 px-6 py-4 min-w-[120px]">
                <span className="text-3xl sm:text-4xl font-black text-[#48e5c2] tracking-tight leading-none">
                  100%
                </span>
                <span className="text-[10px] font-mono text-zinc-400 mt-1">Code Quality SLA</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
