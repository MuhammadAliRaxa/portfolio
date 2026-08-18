'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FolderGit2, Briefcase, Cpu, Send, Compass } from 'lucide-react'

interface NavLink {
  label: string
  id: string
  icon: React.ReactNode
}

const navLinks: NavLink[] = [
  { label: 'Process', id: 'process', icon: <Compass className="h-4 w-4" /> },
  { label: 'Projects', id: 'projects', icon: <FolderGit2 className="h-4 w-4" /> },
  { label: 'Experience', id: 'experience', icon: <Briefcase className="h-4 w-4" /> },
  { label: 'Skills', id: 'skills', icon: <Cpu className="h-4 w-4" /> },
]

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      for (const link of navLinks) {
        const element = document.getElementById(link.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(link.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050811]/90 py-3 border-b border-cyan-500/15 backdrop-blur-md shadow-xl'
          : 'bg-transparent py-5'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-cyan-500/30 bg-[#0c121e] p-0.5 shadow-sm">
              <Image
                src="/profile-v3.jpg"
                alt="Muhammad Ali Raza"
                width={36}
                height={36}
                className="h-full w-full rounded-full object-cover object-[center_top]"
              />
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-tight sm:text-lg">
                Muhammad Ali Raza
              </span>
              <p className="hidden sm:block text-[11px] font-mono font-medium text-cyan-400/80">
                Flutter & Mobile App Engineer
              </p>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-cyan-500/15 bg-[#0b101b]/80 p-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-cyan-300'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.icon}
                <span>{link.label}</span>

                {activeSection === link.id && (
                  <motion.div
                    className="absolute inset-0 -z-10 rounded-full bg-cyan-500/10 border border-cyan-500/30"
                    layoutId="activeNavTab"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#48e5c2] px-4 py-2 text-xs font-bold text-[#050811] shadow-lg shadow-cyan-950/40 transition-all hover:bg-[#3dd1b0] hover:shadow-cyan-400/25 sm:px-5 sm:py-2.5 sm:text-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Get In Touch</span>
            <Send className="h-3.5 w-3.5" />
          </motion.a>
        </div>
      </div>
    </motion.header>
  )
}

export default Header

