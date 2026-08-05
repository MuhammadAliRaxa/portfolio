'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react'

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

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields',
      })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address',
      })
      return
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200))

      setStatus({
        type: 'success',
        message: "Message sent successfully! I'll get back to you soon.",
      })

      setFormData({ name: '', email: '', message: '' })

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
    <section id="contact" className="relative w-full bg-[#090a0f] px-6 py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-[#12131a] px-3.5 py-1 text-xs font-semibold text-zinc-300">
            <MessageSquare className="h-3.5 w-3.5 text-red-400" />
            <span>Let's Connect</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-zinc-400">
            Have a mobile application project or looking for a Flutter developer? Send a message directly.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Contact Action Cards */}
          <div className="space-y-4 md:col-span-5">
            <a
              href="mailto:muhammadaliraza97427@gmail.com"
              className="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-[#12131a] p-5 transition-all duration-300 hover:border-zinc-700"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 text-zinc-200">
                <Mail className="h-5 w-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] font-semibold text-zinc-400 uppercase">Email</p>
                <p className="truncate text-sm font-semibold text-white group-hover:text-red-400 transition-colors">
                  muhammadaliraza97427@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+923036197427"
              className="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-[#12131a] p-5 transition-all duration-300 hover:border-zinc-700"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 text-zinc-200">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-zinc-400 uppercase">Call / WhatsApp</p>
                <p className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors">
                  +92 303 619 7427
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-[#12131a] p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 text-zinc-200">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-zinc-400 uppercase">Location</p>
                <p className="text-sm font-semibold text-white">
                  Lahore, Punjab, Pakistan
                </p>
              </div>
            </div>

            <a
              href="https://github.com/muhammadaliraxa"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-[#12131a] p-5 transition-all duration-300 hover:border-zinc-700"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 text-zinc-200">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-zinc-400 uppercase">GitHub</p>
                <p className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors">
                  github.com/muhammadaliraxa
                </p>
              </div>
            </a>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-zinc-800 bg-[#12131a] p-6 md:col-span-7 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Muhammad Ali Raza"
                className="w-full rounded-xl border border-zinc-800 bg-[#090a0f] px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all focus:border-zinc-700 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-zinc-800 bg-[#090a0f] px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all focus:border-zinc-700 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project requirements..."
                rows={5}
                className="w-full rounded-xl border border-zinc-800 bg-[#090a0f] px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all focus:border-zinc-700 focus:outline-none resize-none"
              />
            </div>

            {status.type !== 'idle' && (
              <div
                className={`flex items-center gap-2.5 rounded-xl p-3.5 text-xs font-semibold ${
                  status.type === 'success'
                    ? 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                    : 'border border-red-500/30 bg-red-500/10 text-red-400'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-400" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status.type === 'loading'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-red-500 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              <span>{status.type === 'loading' ? 'Sending Message...' : 'Send Message'}</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact

