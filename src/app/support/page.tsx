'use client'

import { useState, useEffect } from 'react'

type SupportPriority = 'low' | 'medium' | 'high' | 'urgent'
type SupportCategory = 'technical' | 'billing' | 'general' | 'partnership' | 'other'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  category: SupportCategory
  priority: SupportPriority
  subject: string
  description: string
  acceptTerms: boolean
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

export default function SupportPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    category: 'general',
    priority: 'medium',
    subject: '',
    description: '',
    acceptTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)

  // Load reCAPTCHA script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`
    script.async = true
    script.defer = true
    script.onload = () => setRecaptchaLoaded(true)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.acceptTerms) {
      setSubmitStatus({
        type: 'error',
        message: 'Please accept the terms and conditions to continue.'
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Get reCAPTCHA token
      let recaptchaToken = ''
      if (recaptchaLoaded && window.grecaptcha) {
        await window.grecaptcha.ready(async () => {
          recaptchaToken = await window.grecaptcha.execute(
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '',
            { action: 'support_request' }
          )
        })
      }

      const response = await fetch('/api/support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank you! Your support request has been submitted successfully. We\'ll get back to you within 1-2 business days.',
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          category: 'general',
          priority: 'medium',
          subject: '',
          description: '',
          acceptTerms: false,
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to submit support request. Please try again.',
        })
      }
    } catch (error) {
      console.error('Support request submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <div className="min-h-screen pt-20 bg-slate-950">
      <div className="container-custom section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-acidni-400 via-accent-400 to-acidni-500 bg-clip-text text-transparent">
              Support Request
            </h1>
            <p className="text-slate-400 text-lg">
              Need help? Submit a support request and our team will get back to you promptly.
            </p>
          </div>

          {/* Status Messages */}
          {submitStatus.type && (
            <div
              className={`mb-8 p-4 rounded-lg border ${
                submitStatus.type === 'success'
                  ? 'bg-green-500/10 border-green-500/50 text-green-400'
                  : 'bg-red-500/10 border-red-500/50 text-red-400'
              }`}
            >
              <p className="font-medium">{submitStatus.message}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Request Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-slate-300 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing & Licensing</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-slate-300 mb-2">
                  Priority <span className="text-red-500">*</span>
                </label>
                <select
                  id="priority"
                  name="priority"
                  required
                  value={formData.priority}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="low">Low - General question</option>
                  <option value="medium">Medium - Need assistance</option>
                  <option value="high">High - Issue affecting work</option>
                  <option value="urgent">Urgent - Critical issue</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="input-field"
                placeholder="Brief description of your request"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className="input-field resize-none"
                placeholder="Please provide as much detail as possible about your request..."
              />
              <p className="mt-2 text-sm text-slate-500">
                Minimum 20 characters ({formData.description.length}/20)
              </p>
            </div>

            {/* Terms */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-800 text-acidni-500 focus:ring-acidni-500 focus:ring-offset-slate-900"
              />
              <label htmlFor="acceptTerms" className="ml-2 text-sm text-slate-400">
                I agree to the{' '}
                <a href="/privacy" className="text-acidni-400 hover:text-acidni-300 underline">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="/terms" className="text-acidni-400 hover:text-acidni-300 underline">
                  Terms of Service
                </a>
                <span className="text-red-500 ml-1">*</span>
              </label>
            </div>

            {/* reCAPTCHA Notice */}
            <p className="text-xs text-slate-500">
              This site is protected by reCAPTCHA and the Google{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-slate-400"
              >
                Privacy Policy
              </a>{' '}
              and{' '}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-slate-400"
              >
                Terms of Service
              </a>{' '}
              apply.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.acceptTerms}
              className="btn-primary w-full py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit Support Request'
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-12 pt-12 border-t border-slate-800">
            <h2 className="text-xl font-semibold text-white mb-4">Other Ways to Reach Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-slate-400 mb-2">Email</h3>
                <a
                  href="mailto:support@acidni.net"
                  className="text-acidni-400 hover:text-acidni-300"
                >
                  support@acidni.net
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-400 mb-2">General Inquiries</h3>
                <a
                  href="mailto:contact@acidni.net"
                  className="text-acidni-400 hover:text-acidni-300"
                >
                  contact@acidni.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
