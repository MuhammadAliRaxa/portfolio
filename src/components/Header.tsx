'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FolderGit2, Briefcase, Cpu, GraduationCap, Send } from 'lucide-react'

interface NavLink {
  label: string
  id: string
  icon: React.ReactNode
}

const navLinks: NavLink[] = [
  { label: 'Projects', id: 'projects', icon: <FolderGit2 className="h-4 w-4" /> },
  { label: 'Experience', id: 'experience', icon: <Briefcase className="h-4 w-4" /> },
  { label: 'Skills', id: 'skills', icon: <Cpu className="h-4 w-4" /> },
  { label: 'Education', id: 'education', icon: <GraduationCap className="h-4 w-4" /> },
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
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050508]/90 py-3 border-b border-red-900/40 backdrop-blur-xl shadow-2xl shadow-red-950/40'
          : 'bg-transparent py-5'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Red Avatar Frame */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-red-500/80 p-0.5 shadow-md shadow-red-600/30">
              <Image
                src="/profile-new.png"
                alt="Muhammad Ali Raza"
                width={40}
                height={40}
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
            <div>
              <span className="bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-base font-extrabold text-transparent sm:text-lg">
                Muhammad Ali Raza
              </span>
              <p className="hidden sm:block text-[10px] font-semibold text-red-500 uppercase tracking-widest">
                Flutter Developer
              </p>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 rounded-full border border-gray-800/90 bg-[#090910]/80 p-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  activeSection === link.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {link.icon}
                <span>{link.label}</span>

                {activeSection === link.id && (
                  <motion.div
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-red-600/30 to-rose-600/30 border border-red-500/50"
                    layoutId="activeNavTab"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-red-600/30 transition-all hover:shadow-red-600/50 sm:px-5 sm:py-2.5 sm:text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Hire Me</span>
            <Send className="h-3.5 w-3.5" />
          </motion.a>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
