'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { trackDemoRequest } from '@/lib/analytics'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    salonName: '',
    stylists: '',
    currentSoftware: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Track form submission
    trackDemoRequest('contact_form')

    // In production, this would send to your backend/email service
    // For now, we'll simulate the submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitted(true)
    setLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-surface py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-lg p-12 shadow-sm border border-border">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-primary mb-4">
                Thank You!
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                We've received your request and will get back to you within 24 hours.
              </p>
              <p className="text-gray-600 mb-8">
                Check your email ({formData.email}) for a confirmation and next steps.
              </p>
              <a
                href="/"
                className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Back to Home
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Start Your Free Trial
            </h1>
            <p className="text-xl text-gray-600">
              Get a personalized demo and see how BookB can transform your salon.
            </p>
            <p className="text-success font-medium mt-2">
              Response within 24 hours guaranteed
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="john@salon.com"
                />
              </div>

              <div>
                <label htmlFor="salonName" className="block text-sm font-medium text-gray-700 mb-2">
                  Salon Name *
                </label>
                <input
                  type="text"
                  id="salonName"
                  name="salonName"
                  required
                  value={formData.salonName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="Beautiful Hair Salon"
                />
              </div>

              <div>
                <label htmlFor="stylists" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Stylists *
                </label>
                <select
                  id="stylists"
                  name="stylists"
                  required
                  value={formData.stylists}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                >
                  <option value="">Select...</option>
                  <option value="1">1 stylist</option>
                  <option value="2-5">2-5 stylists</option>
                  <option value="6-15">6-15 stylists</option>
                  <option value="16+">16+ stylists</option>
                </select>
              </div>

              <div>
                <label htmlFor="currentSoftware" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Software (if any)
                </label>
                <select
                  id="currentSoftware"
                  name="currentSoftware"
                  value={formData.currentSoftware}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                >
                  <option value="">Select...</option>
                  <option value="none">No software currently</option>
                  <option value="zenoti">Zenoti</option>
                  <option value="fresha">Fresha</option>
                  <option value="phorest">Phorest</option>
                  <option value="boulevard">Boulevard</option>
                  <option value="vagaro">Vagaro</option>
                  <option value="square">Square Appointments</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="Tell us about your salon and what features you're most interested in..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Start Free Trial'}
              </button>

              <p className="text-sm text-gray-500 text-center">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </form>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center border border-border">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold text-primary mb-2">Email</h3>
              <a href="mailto:info@bookb.io" className="text-accent hover:text-accent/80">
                info@bookb.io
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-border">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-bold text-primary mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm">Available 24/7</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-border">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="font-bold text-primary mb-2">Response Time</h3>
              <p className="text-success font-medium">Within 24 hours</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
