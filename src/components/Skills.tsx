'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'

/* ─── Flat skill data ─── */
const coreSkills = [
  { name: 'Flutter SDK', tier: 'Expert' },
  { name: 'Dart', tier: 'Expert' },
  { name: 'Bloc / Cubit', tier: 'Expert' },
  { name: 'Riverpod', tier: 'Expert' },
  { name: 'Provider', tier: 'Mastered' },
  { name: 'Firebase', tier: 'Expert' },
  { name: 'REST APIs', tier: 'Expert' },
  { name: 'Clean Architecture', tier: 'Master' },
  { name: 'MVVM', tier: 'Master' },
  { name: 'Multi-Tenant Arch', tier: 'Specialist' },
  { name: 'Android / iOS', tier: 'Advanced' },
  { name: 'GetX', tier: 'Advanced' },
  { name: 'OpenAI GPT', tier: 'Advanced' },
  { name: 'Google ML Kit', tier: 'Advanced' },
  { name: 'Git & GitHub', tier: 'Expert' },
  { name: 'Widget Testing', tier: 'Advanced' },
  { name: 'Postman', tier: 'Advanced' },
  { name: 'Play Console', tier: 'Expert' },
]

const tierColor: Record<string, string> = {
  Expert: 'text-[#48e5c2] border-cyan-500/30 bg-cyan-500/10',
  Master: 'text-sky-400 border-sky-500/30 bg-sky-500/10',
  Mastered: 'text-sky-400 border-sky-500/30 bg-sky-500/10',
  Specialist: 'text-teal-300 border-teal-500/30 bg-teal-500/10',
  Advanced: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  Proficient: 'text-zinc-400 border-zinc-600/20 bg-zinc-600/5',
}

/* ─── Marquee row component ─── */
function MarqueeRow({ skills, reverse = false, speed = 30 }: { skills: typeof coreSkills; reverse?: boolean; speed?: number }) {
  // Double the items to create seamless loop
  const doubled = [...skills, ...skills]
  const duration = skills.length * speed / 10

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#050811] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#050811] to-transparent" />

      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: reverse ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((skill, i) => {
          const colors = tierColor[skill.tier] || tierColor['Proficient']
          return (
            <div
              key={`${skill.name}-${i}`}
              className="flex-shrink-0 group flex items-center gap-2.5 rounded-full border border-cyan-500/15 bg-[#0b101b]/80 backdrop-blur-sm px-4 py-2 transition-all duration-300 hover:border-cyan-400/40 hover:bg-[#0f1728]"
            >
              <span className="text-sm font-semibold text-zinc-200 whitespace-nowrap group-hover:text-white transition-colors">
                {skill.name}
              </span>
              <span className={`rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider whitespace-nowrap ${colors}`}>
                {skill.tier}
              </span>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

/* ─── Main component ─── */
const Skills: React.FC = () => {
  // Split skills into two rows for visual density
  const mid = Math.ceil(coreSkills.length / 2)
  const row1 = coreSkills.slice(0, mid)
  const row2 = coreSkills.slice(mid)

  return (
    <section id="skills" className="relative w-full bg-[#050811] py-20 md:py-28 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-3.5 py-1 text-[10px] font-semibold text-cyan-300 uppercase tracking-wider mb-4">
            <Code2 className="h-3 w-3 text-[#48e5c2]" />
            <span>Technical Stack</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
            Production-proven across mobile engineering, state management, and cloud architecture
          </p>
        </motion.div>

        {/* Tier legend */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {[
            { tier: 'Expert', dot: 'bg-[#48e5c2]' },
            { tier: 'Master', dot: 'bg-sky-400' },
            { tier: 'Specialist', dot: 'bg-teal-300' },
            { tier: 'Advanced', dot: 'bg-blue-400' },
          ].map((t) => (
            <div key={t.tier} className="flex items-center gap-1.5 text-[11px] text-zinc-400">
              <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />
              <span>{t.tier}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Infinite scrolling marquee rows — full viewport width */}
      <div className="space-y-3">
        <MarqueeRow skills={row1} speed={35} />
        <MarqueeRow skills={row2} reverse speed={40} />
      </div>

      {/* Bottom highlight — large stat blocks */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 mt-14">
        <motion.div
          className="grid grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { value: '18+', label: 'Technologies', sub: 'in production stack' },
            { value: '5', label: 'State Engines', sub: 'Bloc · Riverpod · Provider · GetX · setState' },
            { value: '3', label: 'Architectures', sub: 'Clean · MVVM · Multi-Tenant' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-cyan-500/15 bg-[#0b101b]/70 backdrop-blur-sm p-5 text-center transition-all hover:border-cyan-400/30 hover:bg-[#0f1728]/90"
            >
              <span className="text-2xl sm:text-3xl font-black text-white">{stat.value}</span>
              <p className="text-xs font-semibold text-cyan-300 mt-1">{stat.label}</p>
              <p className="text-[10px] text-zinc-400 mt-0.5 line-clamp-1">{stat.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
