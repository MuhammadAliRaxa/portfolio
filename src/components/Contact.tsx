'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, ArrowUpRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

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
  const [copied, setCopied] = useState(false)

  const recipientEmail = 'muhammadaliraza97427@gmail.com'

  const handleCopy = () => {
    navigator.clipboard.writeText(recipientEmail)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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

    // If no Web3Forms access key is configured, fallback to opening mailto client directly
    if (!accessKey) {
      const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      window.location.href = mailtoUrl
      setStatus('success')
      setStatusMessage('Opening your email app to send the message...')
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
          subject: `New Portfolio Message from ${formData.name.trim()}`,
          from_name: formData.name.trim(),
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        setStatusMessage("Message sent successfully! I'll reply within 24 hours.")
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        throw new Error(data.message || 'Failed to send message')
      }
    } catch (err: any) {
      console.error('Contact Form Error:', err)
      setStatus('error')
      setStatusMessage(
        err?.message || 'Could not send message. Please email directly or try again.'
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
            <span>Contact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let&apos;s work together
          </h2>
          <p className="mt-3 text-sm text-zinc-400 max-w-md mx-auto">
            Have a mobile project in mind? Reach out and let&apos;s build something great.
          </p>
        </motion.div>

        {/* Quick contact links — horizontal row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Email */}
          <button
            type="button"
            onClick={handleCopy}
            className="group flex items-center gap-3 rounded-xl border border-cyan-500/15 bg-[#0b101b]/70 backdrop-blur-sm p-4 text-left transition-all hover:border-cyan-400/35 hover:bg-[#0f1728]/90"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 flex-shrink-0 text-[#48e5c2]">
              <Mail className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-cyan-400/70 uppercase tracking-wider font-mono">Email</p>
              <p className="text-xs font-semibold text-zinc-300 truncate group-hover:text-white transition-colors">
                {copied ? 'Copied!' : recipientEmail}
              </p>
            </div>
          </button>

          {/* Phone */}
          <a
            href="tel:+923036197427"
            className="group flex items-center gap-3 rounded-xl border border-cyan-500/15 bg-[#0b101b]/70 backdrop-blur-sm p-4 transition-all hover:border-cyan-400/35 hover:bg-[#0f1728]/90"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 flex-shrink-0 text-[#48e5c2]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-cyan-400/70 uppercase tracking-wider font-mono">Phone</p>
              <p className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">+92 303 619 7427</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/muhammadaliraxa"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-cyan-500/15 bg-[#0b101b]/70 backdrop-blur-sm p-4 transition-all hover:border-cyan-400/35 hover:bg-[#0f1728]/90"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 flex-shrink-0 text-[#48e5c2]">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-cyan-400/70 uppercase tracking-wider font-mono">GitHub</p>
              <p className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">muhammadaliraxa</p>
            </div>
            <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
          </a>
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
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-xl border border-cyan-500/15 bg-[#0b101b]/70 backdrop-blur-sm px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all focus:border-cyan-400 focus:bg-[#0f1728] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-[11px] text-zinc-400 mb-1.5 uppercase tracking-wider font-mono">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-cyan-500/15 bg-[#0b101b]/70 backdrop-blur-sm px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all focus:border-cyan-400 focus:bg-[#0f1728] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-[11px] text-zinc-400 mb-1.5 uppercase tracking-wider font-mono">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={4}
              className="w-full rounded-xl border border-cyan-500/15 bg-[#0b101b]/70 backdrop-blur-sm px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all focus:border-cyan-400 focus:bg-[#0f1728] focus:outline-none resize-none"
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
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </motion.form>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-cyan-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <span>© 2026 Muhammad Ali Raza. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="https://github.com/muhammadaliraxa" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/muhammadaliraxa" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">LinkedIn</a>
            <a href={`mailto:${recipientEmail}`} className="hover:text-cyan-300 transition-colors">Email</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
