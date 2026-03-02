'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface NavLink {
  label: string
  id: string
}

const navLinks: NavLink[] = [
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
]

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Update header background on scroll
      setIsScrolled(window.scrollY > 50)

      // Determine which section is in view
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
          ? 'bg-dark-950/95 border-b border-gray-700/30 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Muhammad Ali Raza
            </span>
          </motion.div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-2 md:gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="relative text-sm font-medium text-gray-400 transition-colors hover:text-white md:text-base"
                whileHover={{ color: '#fff' }}
              >
                {link.label}
                
                {/* Active indicator */}
                {activeSection === link.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="ml-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50 md:ml-8 md:px-6 md:py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <span>→</span>
            </motion.a>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
