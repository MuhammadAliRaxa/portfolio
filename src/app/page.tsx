'use client'

import Header from '@/components/Header'
import ParticleCanvas from '@/components/ParticleCanvas'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
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

      {/* My Design Process */}
      <Process />

      {/* Featured Projects & Filter Tabs */}
      <Projects />

      {/* Work Experience Timeline */}
      <Experience />

      {/* Skills & Technical Mastery */}
      <Skills />

      {/* Contact Terminal */}
      <Contact />
    </main>
  )
}

