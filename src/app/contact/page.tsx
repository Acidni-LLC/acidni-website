'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Script from 'next/script'

const services = [
  { value: 'ai-consulting', label: 'AI Consulting & Strategy' },
  { value: 'app-modernization', label: 'Application Modernization' },
  { value: 'custom-development', label: 'Custom Development' },
  { value: 'cannatech', label: 'CannaTech Consulting' },
  { value: 'other', label: 'Other / Not Sure' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    // Get reCAPTCHA token
    let recaptchaToken = ''
    if (recaptchaLoaded && (window as any).grecaptcha) {
      try {
        recaptchaToken = await (window as any).grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          { action: 'contact' }
        )
      } catch (error) {
        console.error('reCAPTCHA error:', error)
      }
    }
    
    const serviceLabel = services.find(s => s.value === formData.service)?.label || formData.service

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: serviceLabel,
          message: formData.message,
          recaptchaToken,
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', email: '', company: '', service: '', message: '' })
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('error')
      setErrorMessage('Failed to send message. Please email us directly at contact@acidni.net')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        onLoad={() => setRecaptchaLoaded(true)}
      />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Let's{' '}
              <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-xl text-slate-400">
              Ready to transform your technology? We'd love to hear about your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-slate-400">
              Fill out the form and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-acidni-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:contact@acidni.net" 
                      className="text-acidni-400 hover:text-acidni-300"
                    >
                      contact@acidni.net
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="card p-6">
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="grid grid-cols-2 gap-3">
                  <Link 
                    href="/services" 
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    → Our Services
                  </Link>
                  <Link 
                    href="/products" 
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    → Our Products
                  </Link>
                  <Link 
                    href="/case-studies" 
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    → Case Studies
                  </Link>
                  <Link 
                    href="/about" 
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    → About Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card p-8">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-slate-400 mb-6">
                    Thanks for reaching out. We'll get back to you soon.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-acidni-400 hover:text-acidni-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-acidni-500 focus:ring-1 focus:ring-acidni-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-acidni-500 focus:ring-1 focus:ring-acidni-500 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-acidni-500 focus:ring-1 focus:ring-acidni-500 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      What can we help with?
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-acidni-500 focus:ring-1 focus:ring-acidni-500 transition-colors"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-acidni-500 focus:ring-1 focus:ring-acidni-500 transition-colors resize-none"
                      placeholder="Tell us about your project or question..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'error' && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
                      {errorMessage || 'Something went wrong. Please try again.'}
                    </div>
                  )}

                  <p className="text-slate-500 text-xs text-center">
                    We'll respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Send us a message or email us directly — we're here to help.
          </p>
          <a 
            href="mailto:contact@acidni.net"
            className="btn-primary bg-white text-slate-900 hover:bg-slate-100"
          >
            📧 contact@acidni.net
          </a>
        </div>
      </section>
    </div>
    </>
  )
}
