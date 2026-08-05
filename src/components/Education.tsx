'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, CheckCircle2, BookOpen, Award, ShieldCheck } from 'lucide-react'

const Education: React.FC = () => {
  return (
    <section id="education" className="relative w-full bg-[#090a0f] px-6 py-20 md:py-28">
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
            <GraduationCap className="h-3.5 w-3.5 text-red-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">
            Education & Foundation
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-zinc-400">
            Academic foundation and specialized computer science degree.
          </p>
        </motion.div>

        {/* Clean Education Card */}
        <motion.div
          className="group relative mt-10 overflow-hidden rounded-2xl border border-zinc-800 bg-[#12131a] p-6 transition-all duration-300 hover:border-zinc-700 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-[#090a0f] px-3 py-0.5 text-xs font-medium text-zinc-300">
                <BookOpen className="h-3.5 w-3.5 text-zinc-400" />
                <span>2022 - Jan 2026</span>
              </div>

              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Bachelor of Science in Computer Science
              </h3>

              <p className="text-base font-semibold text-red-400">
                The Islamia University of Bahawalpur
              </p>

              <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                <span>Bahawalpur, Punjab, Pakistan</span>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="flex flex-col items-center justify-center rounded-xl border border-zinc-800 bg-[#090a0f] px-6 py-4 text-center md:min-w-[180px]">
              <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-0.5">
                <Award className="h-3.5 w-3.5 text-red-400" />
                <span>Merit Honor</span>
              </div>
              <span className="text-3xl font-extrabold text-white">
                3.45 / 4.0
              </span>
              <span className="mt-0.5 text-[11px] font-medium text-zinc-400">Academic CGPA</span>
            </div>
          </div>

          {/* Coursework Focus */}
          <div className="mt-6 grid grid-cols-1 gap-3 border-t border-zinc-800 pt-5 sm:grid-cols-3 text-xs text-zinc-300">
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-[#090a0f] p-2.5">
              <ShieldCheck className="h-4 w-4 text-red-400 flex-shrink-0" />
              <span>Clean Architecture & Mobile Systems</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-[#090a0f] p-2.5">
              <CheckCircle2 className="h-4 w-4 text-red-400 flex-shrink-0" />
              <span>Object-Oriented Programming (OOP)</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-[#090a0f] p-2.5">
              <CheckCircle2 className="h-4 w-4 text-red-400 flex-shrink-0" />
              <span>Data Structures & Software Design</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

