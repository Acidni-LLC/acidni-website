'use client'

import { useState, useEffect } from 'react'

type SupportPriority = 'low' | 'medium' | 'high' | 'urgent'
type SupportCategory = 'technical' | 'billing' | 'general' | 'partnership' | 'other'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  product: string
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

const products = [
  { value: 'terprint', label: 'Terprint', desc: 'Cannabis Analytics Platform' },
  { value: 'gridsight', label: 'GridSight', desc: 'Utility Monitoring' },
  { value: 'ai-sdo', label: 'AI SDO', desc: 'Software Development Organization' },
  { value: 'fl-wetlands-mapper', label: 'FL Wetlands Mapper', desc: 'Wetlands Mapping Tool' },
  { value: 'mobilemech', label: 'MobileMech', desc: 'Mobile Mechanic Platform' },
  { value: 'solar-reporting', label: 'Solar Reporting', desc: 'Solar Energy Analytics' },
  { value: 'cdes', label: 'CDES', desc: 'Compliance & Data Exchange' },
  { value: 'copilot-chat-manager', label: 'Copilot Chat Manager', desc: 'VS Code Extension' },
  { value: 'textatruck', label: 'TextATruck', desc: 'Trucking Communication' },
  { value: 'gowild-finder', label: 'GoWild Finder', desc: 'Wildlife Discovery' },
  { value: 'veterans-building-solutions', label: 'Veterans Building Solutions', desc: 'Construction Services' },
  { value: 'other', label: 'Other', desc: 'General Inquiry' },
]

export default function SupportPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
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
  const [step, setStep] = useState(1)

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
        headers: { 'Content-Type': 'application/json' },
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
          message: data.message || 'Your support request has been submitted successfully. We will get back to you within 1-2 business days.',
        })
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          product: '',
          category: 'general',
          priority: 'medium',
          subject: '',
          description: '',
          acceptTerms: false,
        })
        setStep(1)
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

  const selectedProduct = products.find(p => p.value === formData.product)

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-acidni-500/10 border border-acidni-500/20 mb-6">
            <svg className="w-4 h-4 text-acidni-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="text-sm font-medium text-acidni-400">Support Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            How can we help?
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Select your product and describe your issue. Our team typically responds within 24 hours.
          </p>
        </div>

        {/* Success Message */}
        {submitStatus.type === 'success' && (
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-400 mb-1">Request Submitted!</h3>
                <p className="text-slate-300">{submitStatus.message}</p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus.type === 'error' && (
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-red-500/10 to-rose-500/10 border border-red-500/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-red-400 mb-1">Something went wrong</h3>
                <p className="text-slate-300">{submitStatus.message}</p>
              </div>
            </div>
          </div>
        )}

        {/* Main Form Card */}
        <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-800/50 shadow-2xl overflow-hidden">
          
          {/* Progress Steps */}
          <div className="px-8 py-6 bg-slate-800/30 border-b border-slate-800/50">
            <div className="flex items-center justify-between max-w-md mx-auto">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    step >= s 
                      ? 'bg-gradient-to-r from-acidni-500 to-accent-500 text-white shadow-lg shadow-acidni-500/30' 
                      : 'bg-slate-800 text-slate-500'
                  }`}>
                    {step > s ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : s}
                  </div>
                  {s < 3 && (
                    <div className={`w-16 md:w-24 h-1 mx-2 rounded-full transition-all ${
                      step > s ? 'bg-gradient-to-r from-acidni-500 to-accent-500' : 'bg-slate-800'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between max-w-md mx-auto mt-3 text-xs text-slate-500">
              <span className={step >= 1 ? 'text-acidni-400' : ''}>Product</span>
              <span className={step >= 2 ? 'text-acidni-400' : ''}>Details</span>
              <span className={step >= 3 ? 'text-acidni-400' : ''}>Submit</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            
            {/* Step 1: Product Selection */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white mb-6">Which product do you need help with?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {products.map((product) => (
                    <label
                      key={product.value}
                      className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-acidni-500/50 hover:bg-slate-800/50 ${
                        formData.product === product.value
                          ? 'border-acidni-500 bg-acidni-500/10'
                          : 'border-slate-700/50 bg-slate-800/30'
                      }`}
                    >
                      <input
                        type="radio"
                        name="product"
                        value={product.value}
                        checked={formData.product === product.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-white">{product.label}</div>
                        <div className="text-sm text-slate-400">{product.desc}</div>
                      </div>
                      {formData.product === product.value && (
                        <div className="w-6 h-6 rounded-full bg-acidni-500 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </label>
                  ))}
                </div>
                <button
                  type="button"
                  disabled={!formData.product}
                  onClick={() => setStep(2)}
                  className="w-full mt-6 py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-acidni-500 to-accent-500 hover:from-acidni-400 hover:to-accent-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-acidni-500/25 hover:shadow-acidni-500/40"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2: Contact & Issue Details */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Tell us about your issue</h2>
                  {selectedProduct && (
                    <span className="px-3 py-1 rounded-full bg-acidni-500/20 text-acidni-400 text-sm font-medium">
                      {selectedProduct.label}
                    </span>
                  )}
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-acidni-500/50 focus:border-acidni-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-acidni-500/50 focus:border-acidni-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-acidni-500/50 focus:border-acidni-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-acidni-500/50 focus:border-acidni-500 transition-all"
                    />
                  </div>
                </div>

                {/* Issue Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Category *</label>
                    <select
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white focus:outline-none focus:ring-2 focus:ring-acidni-500/50 focus:border-acidni-500 transition-all"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing & Licensing</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Priority *</label>
                    <select
                      name="priority"
                      required
                      value={formData.priority}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white focus:outline-none focus:ring-2 focus:ring-acidni-500/50 focus:border-acidni-500 transition-all"
                    >
                      <option value="low">Low - General question</option>
                      <option value="medium">Medium - Need assistance</option>
                      <option value="high">High - Affecting work</option>
                      <option value="urgent">Urgent - Critical issue</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Brief description of your issue"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-acidni-500/50 focus:border-acidni-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Description *</label>
                  <textarea
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Please provide as much detail as possible..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-acidni-500/50 focus:border-acidni-500 transition-all resize-none"
                  />
                  <p className="mt-2 text-sm text-slate-500">
                    {formData.description.length}/20 characters minimum
                  </p>
                </div>

                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-4 rounded-xl font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    disabled={!formData.name || !formData.email || !formData.subject || formData.description.length < 20}
                    onClick={() => setStep(3)}
                    className="flex-1 py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-acidni-500 to-accent-500 hover:from-acidni-400 hover:to-accent-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-acidni-500/25 hover:shadow-acidni-500/40"
                  >
                    Review & Submit
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review & Submit */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white mb-6">Review your request</h2>
                
                {/* Summary Card */}
                <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Product</span>
                    <span className="text-white font-medium">{selectedProduct?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Name</span>
                    <span className="text-white">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Email</span>
                    <span className="text-white">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Category</span>
                    <span className="text-white capitalize">{formData.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Priority</span>
                    <span className={`capitalize font-medium ${
                      formData.priority === 'urgent' ? 'text-red-400' :
                      formData.priority === 'high' ? 'text-orange-400' :
                      formData.priority === 'medium' ? 'text-yellow-400' : 'text-green-400'
                    }`}>{formData.priority}</span>
                  </div>
                  <div className="pt-4 border-t border-slate-700/50">
                    <span className="text-slate-400 text-sm">Subject</span>
                    <p className="text-white mt-1">{formData.subject}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 text-sm">Description</span>
                    <p className="text-white mt-1 whitespace-pre-wrap">{formData.description}</p>
                  </div>
                </div>

                {/* Terms */}
                <label className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 cursor-pointer hover:bg-slate-800/50 transition-all">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-slate-600 bg-slate-800 text-acidni-500 focus:ring-acidni-500 focus:ring-offset-slate-900"
                  />
                  <span className="text-sm text-slate-300">
                    I agree to the{' '}
                    <a href="/privacy" className="text-acidni-400 hover:text-acidni-300 underline">Privacy Policy</a>
                    {' '}and{' '}
                    <a href="/terms" className="text-acidni-400 hover:text-acidni-300 underline">Terms of Service</a>
                  </span>
                </label>

                {/* reCAPTCHA Notice */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/20 border border-slate-800/50">
                  <svg className="w-8 h-8 text-slate-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  <p className="text-xs text-slate-500">
                    Protected by reCAPTCHA. Google{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-400">Privacy Policy</a>
                    {' '}and{' '}
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-400">Terms</a>
                    {' '}apply.
                  </p>
                </div>

                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-4 rounded-xl font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.acceptTerms}
                    className="flex-1 py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-acidni-500 to-accent-500 hover:from-acidni-400 hover:to-accent-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-acidni-500/25 hover:shadow-acidni-500/40"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Submit Request'
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Quick Help Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-2">Email Support</h3>
            <p className="text-slate-400 text-sm mb-3">Reach us directly via email</p>
            <a href="mailto:support@acidni.net" className="text-acidni-400 hover:text-acidni-300 text-sm font-medium">
              support@acidni.net 
            </a>
          </div>
          
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-2">Documentation</h3>
            <p className="text-slate-400 text-sm mb-3">Browse our product guides</p>
            <a href="/products" className="text-acidni-400 hover:text-acidni-300 text-sm font-medium">
              View Products 
            </a>
          </div>
          
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-2">General Inquiries</h3>
            <p className="text-slate-400 text-sm mb-3">For partnerships and sales</p>
            <a href="mailto:contact@acidni.net" className="text-acidni-400 hover:text-acidni-300 text-sm font-medium">
              contact@acidni.net 
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
