'use client'

import Header from '@/components/Header'
import ParticleCanvas from '@/components/ParticleCanvas'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#08090d] text-white">
      {/* Fixed Navigation Header */}
      <Header />

      {/* 60fps Interactive Tech Particle Canvas */}
      <ParticleCanvas />

      {/* Hero Section with 3D Profile Avatar */}
      <Hero />

      {/* Featured Projects & Filter Tabs */}
      <Projects />

      {/* Work Experience Timeline */}
      <Experience />

      {/* Skills & Technical Mastery */}
      <Skills />

      {/* Academic Education Qualification */}
      <Education />

      {/* Contact Terminal */}
      <Contact />
    </main>
  )
}
