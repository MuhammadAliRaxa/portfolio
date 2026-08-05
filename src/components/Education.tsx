'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Award, BookOpen, Code, Layers, Cpu, Database } from 'lucide-react'

const Education: React.FC = () => {
  return (
    <section id="education" className="relative w-full bg-[#090a0f] px-6 py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-[#12131a] px-3.5 py-1 text-xs font-semibold text-zinc-300">
            <GraduationCap className="h-3.5 w-3.5 text-zinc-400" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Education & Background
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-400">
            Computer Science degree with core specialization in mobile engineering and software design.
          </p>
        </motion.div>

        {/* Academic Card */}
        <motion.div
          className="group relative mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-[#12131a] p-6 transition-all duration-300 hover:border-red-900/40 hover:shadow-xl hover:shadow-red-950/20 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-center">
            
            {/* Degree & Info */}
            <div className="md:col-span-8 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-[#090a0f] px-2.5 py-0.5 text-xs font-mono text-zinc-300">
                  <BookOpen className="h-3 w-3 text-zinc-400" />
                  <span>2022 - Jan 2026</span>
                </span>
                <span className="rounded-md border border-red-900/40 bg-red-950/30 px-2 py-0.5 text-[10px] font-mono text-zinc-300 font-semibold uppercase tracking-wider">
                  BS Computer Science
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white sm:text-2xl group-hover:text-zinc-100 transition-colors">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-sm font-semibold text-zinc-300 mt-1">
                  The Islamia University of Bahawalpur
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                <span>Bahawalpur, Punjab, Pakistan</span>
              </div>
            </div>

            {/* Merit & CGPA Badge */}
            <div className="md:col-span-4 flex flex-col items-center justify-center rounded-xl border border-zinc-800 bg-[#090a0f] p-4 text-center shadow-inner">
              <div className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1">
                <Award className="h-3.5 w-3.5 text-zinc-400" />
                <span>Merit CGPA</span>
              </div>
              <span className="text-3xl font-extrabold text-white tracking-tight">
                3.45 <span className="text-sm font-normal text-zinc-500">/ 4.0</span>
              </span>
              <span className="mt-1 text-[10px] font-mono text-zinc-400">Computer Science Honor</span>
            </div>

          </div>

          {/* Key Domain Competencies */}
          <div className="mt-6 grid grid-cols-2 gap-2.5 border-t border-zinc-800/80 pt-5 sm:grid-cols-4 text-xs font-mono text-zinc-300">
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-[#090a0f] p-2.5">
              <Code className="h-3.5 w-3.5 text-zinc-400 flex-shrink-0" />
              <span className="truncate">Mobile Engineering</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-[#090a0f] p-2.5">
              <Layers className="h-3.5 w-3.5 text-zinc-400 flex-shrink-0" />
              <span className="truncate">Clean Architecture</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-[#090a0f] p-2.5">
              <Cpu className="h-3.5 w-3.5 text-zinc-400 flex-shrink-0" />
              <span className="truncate">OOP & Algorithms</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-[#090a0f] p-2.5">
              <Database className="h-3.5 w-3.5 text-zinc-400 flex-shrink-0" />
              <span className="truncate">Database Systems</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education


