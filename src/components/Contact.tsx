'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, MessageSquare, Copy, Check } from 'lucide-react'

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
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText('muhammadaliraza97427@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

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
        message: 'Please fill in all required fields.',
      })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      })
      return
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setStatus({
        type: 'success',
        message: "Message sent! I'll reply within 24 hours.",
      })

      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => {
        setStatus({ type: 'idle', message: '' })
      }, 4000)
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      })
    }
  }

  return (
    <section id="contact" className="relative w-full bg-[#090a0f] px-6 py-16 md:py-24">
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
            <MessageSquare className="h-3.5 w-3.5 text-zinc-400" />
            <span>Direct Channel</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Let's Build Something Exceptional
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-400">
            Have a mobile project or looking for an expert Flutter engineer? Reach out directly.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12 items-start">
          {/* Left Column: Direct Communication Hub */}
          <div className="space-y-3.5 md:col-span-5">
            
            {/* Status Availability Card */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs font-mono text-emerald-400 flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Full-time & Remote contracts</span>
            </div>

            {/* Email Card with Copy Action */}
            <div className="group relative flex items-center justify-between rounded-xl border border-zinc-800 bg-[#12131a] p-4 transition-all duration-300 hover:border-red-900/40 hover:shadow-lg hover:shadow-red-950/20">
              <a
                href="mailto:muhammadaliraza97427@gmail.com"
                className="flex items-center gap-3 overflow-hidden flex-grow"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-200 flex-shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-mono text-zinc-400 uppercase">Email Address</p>
                  <p className="truncate text-xs font-bold text-white group-hover:text-zinc-100 transition-colors">
                    muhammadaliraza97427@gmail.com
                  </p>
                </div>
              </a>
              <button
                onClick={handleCopyEmail}
                title="Copy Email"
                className="ml-2 flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-[#090a0f] text-zinc-400 hover:text-white transition-colors flex-shrink-0"
              >
                {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>

            {/* Phone / WhatsApp Card */}
            <a
              href="tel:+923036197427"
              className="group flex items-center gap-3 rounded-xl border border-zinc-800 bg-[#12131a] p-4 transition-all duration-300 hover:border-red-900/40 hover:shadow-lg hover:shadow-red-950/20"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-200 flex-shrink-0">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-400 uppercase">Call / WhatsApp</p>
                <p className="text-xs font-bold text-white group-hover:text-zinc-100 transition-colors">
                  +92 303 619 7427
                </p>
              </div>
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-[#12131a] p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-200 flex-shrink-0">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-400 uppercase">Location & Timezone</p>
                <p className="text-xs font-bold text-white">
                  Lahore, PK <span className="font-mono text-[10px] text-zinc-400 font-normal">(PKT / UTC+5)</span>
                </p>
              </div>
            </div>

            {/* GitHub Profile Card */}
            <a
              href="https://github.com/muhammadaliraxa"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-zinc-800 bg-[#12131a] p-4 transition-all duration-300 hover:border-zinc-700"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-200 flex-shrink-0">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-400 uppercase">GitHub Profile</p>
                <p className="text-xs font-bold text-white group-hover:text-red-400 transition-colors font-mono">
                  github.com/muhammadaliraxa
                </p>
              </div>
            </a>
          </div>

          {/* Right Column: Sleek Compact Message Terminal */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-3.5 rounded-2xl border border-zinc-800 bg-[#12131a] p-5 sm:p-6 md:col-span-7 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-1">
              <h3 className="text-sm font-bold text-white">Send Direct Message</h3>
              <span className="text-[10px] font-mono text-zinc-400">Response &lt; 24h</span>
            </div>

            <div>
              <label htmlFor="name" className="block text-xs font-mono text-zinc-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Muhammad Ali Raza"
                className="w-full rounded-xl border border-zinc-800 bg-[#090a0f] px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 transition-all focus:border-zinc-700 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-zinc-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@domain.com"
                className="w-full rounded-xl border border-zinc-800 bg-[#090a0f] px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 transition-all focus:border-zinc-700 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-zinc-300 mb-1">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your mobile application requirements..."
                rows={4}
                className="w-full rounded-xl border border-zinc-800 bg-[#090a0f] px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 transition-all focus:border-zinc-700 focus:outline-none resize-none"
              />
            </div>

            {status.type !== 'idle' && (
              <div
                className={`flex items-center gap-2 rounded-xl p-3 text-xs font-medium ${
                  status.type === 'success'
                    ? 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                    : 'border border-red-500/30 bg-red-500/10 text-red-400'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status.type === 'loading'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 text-xs font-semibold text-white shadow-md transition-all hover:bg-red-500 disabled:opacity-50"
            >
              <Send className="h-3.5 w-3.5" />
              <span>{status.type === 'loading' ? 'Sending Message...' : 'Send Message'}</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact


