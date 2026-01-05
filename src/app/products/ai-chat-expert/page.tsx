"use client"
import Link from 'next/link'
import Script from 'next/script'
 

export default function AIChatExpertPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const data = new FormData(form)
    const email = String(data.get('email') || '')
    const name = String(data.get('name') || '')

    try {
      // Ensure grecaptcha is ready
      // @ts-ignore
      await grecaptcha.ready()
      // @ts-ignore
      const token = await grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'waitlist' })

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject: 'Waitlist: AI Chat Expert',
          message: 'Please add me to the AI Chat Expert waitlist.',
          recaptchaToken: token,
        }),
      })

      if (!res.ok) throw new Error('Failed to submit')
      form.reset()
      alert('Thanks! You\'re on the waitlist.')
    } catch (err) {
      alert('Sorry, something went wrong. Please try again.')
    }
  }
  return (
    <div className="min-h-screen pt-20">
      <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} strategy="lazyOnload" />
      {/* Hero */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link href="/products" className="text-acidni-400 hover:text-acidni-300 text-sm font-medium mb-4 inline-flex items-center gap-2">
              ← Back to Products
            </Link>
              <div className="flex items-center gap-3 mt-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-3xl">🧠</span>
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold">Acidni AI Chat Expert</h1>
                  <p className="text-slate-400">Coming Soon</p>
                </div>
              </div>

              <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Coming Soon
              </span>

              <p className="text-xl text-slate-300 mb-6">
                Expert-designed AI workflows for developers. Opinionated, practical, and tuned for enterprise teams.
              </p>
              <p className="text-slate-400 mb-8">
                We are polishing the first release. If you7d like early access or to be notified when it goes live, join the waitlist.
              </p>

              <form onSubmit={handleSubmit} className="card p-6 bg-slate-800/60 backdrop-blur">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-slate-300 mb-2">Name (optional)</label>
                    <input name="name" className="input" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300 mb-2">Email</label>
                    <input name="email" type="email" required className="input" placeholder="you@example.com" />
                  </div>
                </div>
                <button type="submit" className="btn-primary">Join Waitlist</button>
                <p className="text-xs text-slate-500 mt-3">Protected by reCAPTCHA v3. The Google Privacy Policy and Terms of Service apply.</p>
              </form>
          </div>
        </div>
      </section>

      {/* Placeholder */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="card p-8 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-3">What to Expect</h2>
            <p className="text-slate-400">
              Task-focused prompts, context shaping, and guardrails designed by practitioners. Seamless VS Code integration and enterprise-ready defaults.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
