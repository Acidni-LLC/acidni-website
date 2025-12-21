'use client'

import { useState, useEffect } from 'react'

type FeedbackType = 'bug' | 'feedback' | 'feature'

interface FormData {
  type: FeedbackType
  title: string
  description: string
  email: string
  acceptTerms: boolean
}

interface Metadata {
  app: string
  version: string
  userId: string
  platform: string
  sessionId: string
  userAgent: string
  screenResolution: string
  timestamp: string
  referrer: string
  [key: string]: string
}

function getUrlParams(): URLSearchParams {
  if (typeof window === 'undefined') return new URLSearchParams()
  return new URLSearchParams(window.location.search)
}

function detectPlatform(): string {
  if (typeof window === 'undefined') return 'Unknown'
  const ua = window.navigator.userAgent
  if (ua.includes('VSCode')) return 'VS Code'
  if (ua.includes('Electron')) return 'Desktop App'
  if (ua.includes('Windows')) return 'Windows'
  if (ua.includes('Mac')) return 'macOS'
  if (ua.includes('Linux')) return 'Linux'
  if (ua.includes('Android')) return 'Android'
  if (ua.includes('iPhone') || ua.includes('iPad')) return 'iOS'
  return 'Web'
}

function generateSessionId(): string {
  return 'sess_' + Math.random().toString(36).substring(2, 15)
}

export default function FeedbackPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    type: 'feedback',
    title: '',
    description: '',
    email: '',
    acceptTerms: false,
  })
  
  const [metadata, setMetadata] = useState<Metadata>({
    app: 'Unknown',
    version: 'Unknown',
    userId: 'Anonymous',
    platform: 'Unknown',
    sessionId: '',
    userAgent: '',
    screenResolution: '',
    timestamp: '',
    referrer: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [ticketId, setTicketId] = useState('')

  // Collect metadata from URL params and browser on mount
  useEffect(() => {
    const params = getUrlParams()
    
    const collectedMetadata: Metadata = {
      app: params.get('app') || 'Unknown',
      version: params.get('version') || 'Unknown',
      userId: params.get('userId') || params.get('user') || 'Anonymous',
      platform: params.get('platform') || detectPlatform(),
      sessionId: params.get('sessionId') || generateSessionId(),
      userAgent: window.navigator.userAgent,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      timestamp: new Date().toISOString(),
      referrer: document.referrer,
    }

    // Collect any additional custom params
    params.forEach((value, key) => {
      if (!['app', 'version', 'userId', 'user', 'platform', 'sessionId', 'type'].includes(key)) {
        collectedMetadata[key] = value
      }
    })

    setMetadata(collectedMetadata)

    // Set initial type from URL if provided
    const typeParam = params.get('type') as FeedbackType
    if (typeParam && ['bug', 'feedback', 'feature'].includes(typeParam)) {
      setFormData(prev => ({ ...prev, type: typeParam }))
    }

    setIsLoaded(true)

    // Track page view in App Insights
    if ((window as any).appInsights) {
      (window as any).appInsights.trackPageView({
        name: 'Feedback Portal',
        properties: collectedMetadata
      })
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.type === 'feature' && !formData.acceptTerms) {
      setErrorMessage('You must accept the terms to submit a feature request.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    // Track submission attempt in App Insights
    if (typeof window !== 'undefined' && (window as any).appInsights) {
      (window as any).appInsights.trackEvent({
        name: 'FeedbackSubmission',
        properties: {
          type: formData.type,
          app: metadata.app,
          version: metadata.version,
        }
      })
    }

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          metadata,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit feedback')
      }

      setSubmitStatus('success')
      setTicketId(result.ticketId || '')
      
      // Track success in App Insights
      if (typeof window !== 'undefined' && (window as any).appInsights) {
        (window as any).appInsights.trackEvent({
          name: 'FeedbackSubmissionSuccess',
          properties: {
            type: formData.type,
            ticketId: result.ticketId,
          }
        })
      }

      // Reset form
      setFormData({
        type: 'feedback',
        title: '',
        description: '',
        email: '',
        acceptTerms: false,
      })
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred')
      
      // Track error in App Insights
      if (typeof window !== 'undefined' && (window as any).appInsights) {
        (window as any).appInsights.trackException({
          exception: error instanceof Error ? error : new Error('Feedback submission failed'),
          properties: { type: formData.type }
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const typeConfig = {
    bug: {
      label: 'Bug / Issue',
      icon: '🐛',
      color: 'red',
      placeholder: 'Describe the issue you encountered...',
      titlePlaceholder: 'Brief description of the bug',
    },
    feedback: {
      label: 'Feedback / Comment',
      icon: '💬',
      color: 'acidni',
      placeholder: 'Share your thoughts, suggestions, or comments...',
      titlePlaceholder: 'Subject of your feedback',
    },
    feature: {
      label: 'Feature Request',
      icon: '✨',
      color: 'accent',
      placeholder: 'Describe the feature you would like to see...',
      titlePlaceholder: 'Name of the feature',
    },
  }

  const currentType = typeConfig[formData.type]

  // Loading state
  if (!isLoaded) {
    return (
      <div className="min-h-screen pt-20 bg-slate-950">
        <div className="container-custom section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 w-64 bg-slate-800 rounded mx-auto mb-4"></div>
              <div className="h-4 w-96 bg-slate-800 rounded mx-auto mb-10"></div>
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="h-24 bg-slate-800 rounded-lg"></div>
                <div className="h-24 bg-slate-800 rounded-lg"></div>
                <div className="h-24 bg-slate-800 rounded-lg"></div>
              </div>
              <div className="space-y-4">
                <div className="h-12 bg-slate-800 rounded-lg"></div>
                <div className="h-12 bg-slate-800 rounded-lg"></div>
                <div className="h-32 bg-slate-800 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Success state
  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen pt-20 bg-slate-950">
        <div className="container-custom section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">✅</span>
            </div>
            <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
            <p className="text-slate-400 mb-6">
              Your {currentType.label.toLowerCase()} has been submitted successfully.
              {ticketId && (
                <span className="block mt-2 text-acidni-400">
                  Reference ID: <code className="bg-slate-800 px-2 py-1 rounded">{ticketId}</code>
                </span>
              )}
            </p>
            <p className="text-slate-500 text-sm mb-8">
              Our team will review your submission and may reach out if we need more information.
            </p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="btn-primary"
            >
              Submit Another
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Form
  return (
    <div className="min-h-screen pt-20 bg-slate-950">
      <div className="container-custom section-padding">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">
              App & Add-in Feedback
            </h1>
            <p className="text-slate-400">
              Help us improve our apps and add-ins by sharing your thoughts, reporting issues, or requesting features.
            </p>
            {metadata.app !== 'Unknown' && (
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-400">
                <span>📱</span>
                <span>{metadata.app}</span>
                {metadata.version !== 'Unknown' && (
                  <span className="text-slate-500">v{metadata.version}</span>
                )}
              </div>
            )}
          </div>

          {/* Type Selector */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {(Object.keys(typeConfig) as FeedbackType[]).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, type }))}
                className={`p-4 rounded-lg border-2 transition-all text-center ${
                  formData.type === type
                    ? 'border-acidni-500 bg-acidni-500/10'
                    : 'border-slate-700 hover:border-slate-600 bg-slate-800/50'
                }`}
              >
                <span className="text-2xl block mb-2">{typeConfig[type].icon}</span>
                <span className={`text-sm font-medium ${
                  formData.type === type ? 'text-white' : 'text-slate-400'
                }`}>
                  {typeConfig[type].label}
                </span>
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email Address <span className="text-slate-500">(optional)</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-acidni-500 focus:ring-1 focus:ring-acidni-500 outline-none"
                placeholder="your@email.com (for follow-up)"
              />
            </div>

            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-slate-300 mb-2">
                Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="title"
                required
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-acidni-500 focus:ring-1 focus:ring-acidni-500 outline-none"
                placeholder={currentType.titlePlaceholder}
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-2">
                Description <span className="text-red-400">*</span>
              </label>
              <textarea
                id="description"
                required
                rows={6}
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-acidni-500 focus:ring-1 focus:ring-acidni-500 outline-none resize-none"
                placeholder={currentType.placeholder}
              />
            </div>

            {/* Feature Request Terms */}
            {formData.type === 'feature' && (
              <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={(e) => setFormData(prev => ({ ...prev, acceptTerms: e.target.checked }))}
                    className="mt-1 w-4 h-4 rounded border-slate-600 bg-slate-700 text-acidni-500 focus:ring-acidni-500"
                  />
                  <span className="text-sm text-slate-300">
                    I understand that by submitting this feature request, I am granting Acidni LLC 
                    a perpetual, royalty-free, non-exclusive license to use, modify, and implement 
                    this idea in any products or services without compensation or attribution. 
                    I release all intellectual property rights related to this submission.
                  </span>
                </label>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                {errorMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full btn-primary py-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                `Submit ${currentType.label}`
              )}
            </button>
          </form>

          {/* Metadata Display (collapsed by default) */}
          <details className="mt-8 text-sm">
            <summary className="text-slate-500 cursor-pointer hover:text-slate-400">
              View collected metadata
            </summary>
            <div className="mt-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
              <pre className="text-xs text-slate-400 overflow-x-auto">
                {JSON.stringify(metadata, null, 2)}
              </pre>
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}
