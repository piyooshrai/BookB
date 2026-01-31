'use client'

import { useCurrency } from './CurrencyDetector'
import { REGIONAL_PRICING, formatPrice } from '@/lib/pricing'

interface ComparisonTableProps {
  competitorName: string
  competitorPrice?: number
}

export function ComparisonTable({ competitorName, competitorPrice }: ComparisonTableProps) {
  const { region, isLoading } = useCurrency()
  const pricing = REGIONAL_PRICING[region]
  const competitorMonthly = competitorPrice || pricing.competitorPrice

  const features = [
    { name: 'Monthly Price', bookb: formatPrice(pricing.starter, region), competitor: formatPrice(competitorMonthly, region) },
    { name: 'Setup Fee', bookb: formatPrice(0, region), competitor: formatPrice(500, region) },
    { name: 'Contract Length', bookb: 'Month-to-month', competitor: 'Annual contract' },
    { name: 'Queue Management', bookb: '✓', competitor: '✓' },
    { name: 'Online Booking', bookb: '✓', competitor: '✓' },
    { name: 'POS System', bookb: '✓', competitor: '✓' },
    { name: 'Analytics Dashboard', bookb: '✓', competitor: '✓' },
    { name: 'Mobile App', bookb: '✓', competitor: '✓' },
    { name: 'SMS Reminders', bookb: '✓', competitor: '✓' },
    { name: 'Staff Management', bookb: '✓', competitor: '✓' },
    { name: '24/7 Support', bookb: '✓', competitor: 'Business hours only' },
    { name: 'Free Data Migration', bookb: '✓', competitor: '✗' },
  ]

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-96 bg-gray-200 rounded-lg"></div>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-surface">
            <th className="text-left p-4 font-bold text-primary">Feature</th>
            <th className="text-center p-4 font-bold text-accent">BookB</th>
            <th className="text-center p-4 font-bold text-gray-600">{competitorName}</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-white' : 'bg-surface'}
            >
              <td className="p-4 text-gray-700 font-medium">{feature.name}</td>
              <td className="p-4 text-center">
                {feature.bookb === '✓' ? (
                  <span className="text-success text-xl">✓</span>
                ) : feature.bookb === '✗' ? (
                  <span className="text-danger text-xl">✗</span>
                ) : (
                  <span className="font-mono font-bold text-accent">{feature.bookb}</span>
                )}
              </td>
              <td className="p-4 text-center">
                {feature.competitor === '✓' ? (
                  <span className="text-success text-xl">✓</span>
                ) : feature.competitor === '✗' ? (
                  <span className="text-danger text-xl">✗</span>
                ) : (
                  <span className="font-mono text-gray-600">{feature.competitor}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
