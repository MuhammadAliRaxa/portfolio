'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending message...' })

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields',
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address',
      })
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In production, you would send this to your backend
      console.log('Form submitted:', formData)

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      })

      // Reset form
      setFormData({ name: '', email: '', message: '' })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' })
      }, 5000)
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      })
    }
  }

  return (
    <section id="contact" className="relative w-full bg-dark-950 px-6 py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="mx-auto text-lg text-gray-400">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 backdrop-blur-sm md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Name Field */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Muhammad Ali Raza"
              className="w-full rounded-lg border border-gray-600/50 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 transition-all duration-200 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-600/50 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 transition-all duration-200 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={6}
              className="w-full rounded-lg border border-gray-600/50 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 transition-all duration-200 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 resize-none"
            />
          </motion.div>

          {/* Status Messages */}
          {status.type !== 'idle' && (
            <motion.div
              className={`rounded-lg p-4 ${
                status.type === 'success'
                  ? 'border border-green-500/30 bg-green-500/10 text-green-300'
                  : status.type === 'error'
                    ? 'border border-red-500/30 bg-red-500/10 text-red-300'
                    : 'border border-cyan-500/30 bg-cyan-500/10 text-cyan-300'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {status.message}
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: status.type === 'loading' ? 1 : 1.02 }}
            whileTap={{ scale: status.type === 'loading' ? 1 : 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {status.type === 'loading' ? (
              <motion.span
                className="inline-block"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                ⏳
              </motion.span>
            ) : (
              'Send Message'
            )}
          </motion.button>

          {/* Additional Info */}
          <motion.p
            className="text-center text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            I typically respond within 24 hours. Looking forward to hearing from you!
          </motion.p>
        </motion.form>

        {/* Alternative Contact Methods */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Email */}
          <a
            href="mailto:muhammadaliraza97427@gmail.com"
            className="group rounded-lg border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-gradient-to-br hover:from-gray-900/70 hover:to-gray-800/70"
          >
            <div className="mb-2 text-2xl">📧</div>
            <h3 className="font-semibold text-white">Email</h3>
            <p className="mt-2 truncate text-xs text-gray-400 group-hover:text-cyan-300 sm:text-sm">
              muhammadaliraza97427@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-gradient-to-br hover:from-gray-900/70 hover:to-gray-800/70"
          >
            <div className="mb-2 text-2xl">💼</div>
            <h3 className="font-semibold text-white">LinkedIn</h3>
            <p className="mt-2 text-sm text-gray-400 group-hover:text-cyan-300">
              View my profile
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/muhammadaliraxa"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-gradient-to-br hover:from-gray-900/70 hover:to-gray-800/70"
          >
            <div className="mb-2 text-2xl">🐙</div>
            <h3 className="font-semibold text-white">GitHub</h3>
            <p className="mt-2 text-sm text-gray-400 group-hover:text-cyan-300">
              Check my code
            </p>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
