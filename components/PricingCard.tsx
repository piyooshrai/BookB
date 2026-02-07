'use client'

import { useCurrency } from './CurrencyDetector'
import { REGIONAL_PRICING, formatPrice } from '@/lib/pricing'
import { trackPricingView } from '@/lib/analytics'

interface PricingCardProps {
  tier: 'starter' | 'professional' | 'enterprise'
  features: string[]
  featured?: boolean
}

const tierNames = {
  starter: 'Starter',
  professional: 'Professional',
  enterprise: 'Enterprise',
}

const tierDescriptions = {
  starter: 'Perfect for solo stylists',
  professional: 'Best for most salons',
  enterprise: 'For large salon groups',
}

export function PricingCard({ tier, features, featured = false }: PricingCardProps) {
  const { region, isLoading } = useCurrency()
  const pricing = REGIONAL_PRICING[region]
  const price = pricing[tier]

  const handleClick = () => {
    trackPricingView(tier)
  }

  return (
    <div
      className={`relative rounded-lg border-2 p-8 ${
        featured
          ? 'border-accent bg-accent/5 shadow-lg scale-105'
          : 'border-border bg-white'
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-primary mb-2">
          {tierNames[tier]}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{tierDescriptions[tier]}</p>

        {isLoading ? (
          <div className="h-16 flex items-center justify-center">
            <div className="animate-pulse bg-gray-200 h-12 w-32 rounded"></div>
          </div>
        ) : (
          <div className="mb-2">
            <span className="text-5xl font-bold font-mono text-primary">
              {typeof price === 'string' ? price : formatPrice(price, region)}
            </span>
            <span className="text-gray-600 text-lg">
              {typeof price === 'string' ? '' : '/month'}
            </span>
          </div>
        )}

        <p className="text-sm text-gray-500">No setup fees • Cancel anytime</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleClick}
        className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
          featured
            ? 'bg-accent text-white hover:bg-accent/90'
            : 'bg-primary text-white hover:bg-primary/90'
        }`}
      >
        Start Free Trial
      </button>
    </div>
  )
}
