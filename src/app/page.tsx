'use client'

import ScrollyCanvas from '@/components/ScrollyCanvas'
import Overlay from '@/components/Overlay'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="relative bg-dark-950">
      {/* Fixed Header */}
      <Header />

      {/* Scrollytelling Section */}
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />
    </main>
  )
}
