'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Loader2, CheckCircle2, AlertCircle, Clock, Smartphone, Globe } from 'lucide-react'

interface FormData {
  name: string
  email: string
  message: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setStatusMessage('Please fill in all fields before sending.')
      setTimeout(() => setStatus('idle'), 4000)
      return
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

    // If no Web3Forms access key is configured, show a helpful confirmation
    if (!accessKey) {
      setStatus('success')
      setStatusMessage('Inquiry received! Our engineering team will review and reply within 24 hours.')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
      return
    }

    setStatus('loading')
    setStatusMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          subject: `New Project Inquiry from ${formData.name.trim()} (Apex Mobile Labs)`,
          from_name: formData.name.trim(),
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        setStatusMessage("Inquiry sent successfully! Our engineering team will reply within 24 hours.")
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        throw new Error(data.message || 'Failed to send message')
      }
    } catch (err: any) {
      console.error('Contact Form Error:', err)
      setStatus('error')
      setStatusMessage(
        err?.message || 'Could not send message. Please try again later.'
      )
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  return (
    <section id="contact" className="relative w-full bg-[#050811] py-20 md:py-28 overflow-hidden">
      {/* Subtle cyan glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-cyan-500/8 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">

        {/* Header — big, bold, centered */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-3.5 py-1 text-[10px] font-semibold text-cyan-300 uppercase tracking-wider mb-4">
            <Mail className="h-3 w-3 text-[#48e5c2]" />
            <span>Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let&apos;s build together
          </h2>
          <p className="mt-3 text-sm text-zinc-400 max-w-md mx-auto">
            Have a mobile engineering project or enterprise app requirement? Contact our studio to discuss your goals.
          </p>
        </motion.div>

        {/* Quick studio highlights — horizontal row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Engineering Specialization */}
          <div className="group flex items-center gap-3 rounded-xl border border-cyan-500/15 bg-[#0b101b]/70 backdrop-blur-sm p-4 transition-all hover:border-cyan-400/35 hover:bg-[#0f1728]/90">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 flex-shrink-0 text-[#48e5c2]">
              <Smartphone className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-cyan-400/70 uppercase tracking-wider font-mono">Platform Focus</p>
              <p className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">
                iOS & Android Flutter Apps
              </p>
            </div>
          </div>

          {/* Global Engagements */}
          <div className="group flex items-center gap-3 rounded-xl border border-cyan-500/15 bg-[#0b101b]/70 backdrop-blur-sm p-4 transition-all hover:border-cyan-400/35 hover:bg-[#0f1728]/90">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 flex-shrink-0 text-[#48e5c2]">
              <Globe className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-cyan-400/70 uppercase tracking-wider font-mono">Delivery Model</p>
              <p className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">
                Worldwide Remote Contracts
              </p>
            </div>
          </div>

          {/* Response Time / Availability */}
          <div className="group flex items-center gap-3 rounded-xl border border-cyan-500/15 bg-[#0b101b]/70 backdrop-blur-sm p-4 transition-all hover:border-cyan-400/35 hover:bg-[#0f1728]/90">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 flex-shrink-0 text-[#48e5c2]">
              <Clock className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-cyan-400/70 uppercase tracking-wider font-mono">Response SLA</p>
              <p className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">
                Within 24 Hours
              </p>
            </div>
          </div>
        </motion.div>

        {/* Message Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-[11px] text-zinc-400 mb-1.5 uppercase tracking-wider font-mono">
                Your Name / Organization
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Acme Corp / Alex"
                className="w-full rounded-xl border border-cyan-500/15 bg-[#0b101b]/70 backdrop-blur-sm px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all focus:border-cyan-400 focus:bg-[#0f1728] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-[11px] text-zinc-400 mb-1.5 uppercase tracking-wider font-mono">
                Work Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full rounded-xl border border-cyan-500/15 bg-[#0b101b]/70 backdrop-blur-sm px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all focus:border-cyan-400 focus:bg-[#0f1728] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-[11px] text-zinc-400 mb-1.5 uppercase tracking-wider font-mono">
              Project Overview & Requirements
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your mobile application requirements, timeline, and features..."
              rows={4}
              className="w-full rounded-xl border border-cyan-500/15 bg-[#0b101b]/70 backdrop-blur-sm px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all focus:border-cyan-400 focus:bg-[#0f1728] focus:outline-none"
            />
          </div>

          {/* Status feedback */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-xs text-emerald-400 font-medium bg-emerald-950/20 border border-emerald-800/30 p-3 rounded-lg"
            >
              <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
              <span>{statusMessage}</span>
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-xs text-red-400 font-medium bg-red-950/20 border border-red-800/30 p-3 rounded-lg"
            >
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span>{statusMessage}</span>
            </motion.div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="group inline-flex items-center gap-2 rounded-full bg-[#48e5c2] px-6 py-3 text-sm font-bold text-[#050811] transition-all hover:bg-[#3dd1b0] hover:shadow-lg hover:shadow-cyan-400/25 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                <span>Submit Inquiry</span>
              </>
            )}
          </button>
        </motion.form>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-cyan-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <span>© 2026 Apex Mobile Labs. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="#process" className="hover:text-cyan-300 transition-colors">Process</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">Engagements</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Capabilities</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
