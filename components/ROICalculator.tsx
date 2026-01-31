'use client'

import { useState } from 'react'
import { useCurrency } from './CurrencyDetector'
import { REGIONAL_PRICING, formatPrice } from '@/lib/pricing'
import { trackCalculatorUse } from '@/lib/analytics'

export function ROICalculator() {
  const { region, isLoading } = useCurrency()
  const pricing = REGIONAL_PRICING[region]

  const [currentSoftware, setCurrentSoftware] = useState(pricing.competitorPrice)
  const [stylists, setStylists] = useState(3)

  const bookbCost = pricing.starter * stylists
  const currentCost = currentSoftware * stylists
  const monthlySavings = currentCost - bookbCost
  const annualSavings = monthlySavings * 12
  const savingsPercentage = Math.round((monthlySavings / currentCost) * 100)

  const handleCalculate = () => {
    trackCalculatorUse(annualSavings)
  }

  if (isLoading) {
    return (
      <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-accent/10 to-success/10 rounded-xl p-8 border-2 border-accent/20">
      <h3 className="text-2xl font-bold text-primary mb-6 text-center">
        Calculate Your Savings
      </h3>

      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Software Cost (per stylist/month)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-mono">
              {pricing.symbol}
            </span>
            <input
              type="number"
              value={currentSoftware}
              onChange={(e) => setCurrentSoftware(Number(e.target.value))}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-accent focus:outline-none font-mono"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Stylists
          </label>
          <input
            type="number"
            value={stylists}
            onChange={(e) => setStylists(Number(e.target.value))}
            min="1"
            max="100"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-accent focus:outline-none font-mono"
          />
        </div>
      </div>

      <button
        onClick={handleCalculate}
        className="w-full bg-accent text-white py-3 rounded-lg font-medium mb-8 hover:bg-accent/90 transition-colors"
      >
        Calculate Savings
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-6 text-center border-2 border-border">
          <div className="text-3xl font-bold font-mono text-success mb-2">
            {formatPrice(monthlySavings, region)}
          </div>
          <div className="text-sm text-gray-600">Monthly Savings</div>
        </div>

        <div className="bg-white rounded-lg p-6 text-center border-2 border-accent">
          <div className="text-3xl font-bold font-mono text-accent mb-2">
            {formatPrice(annualSavings, region)}
          </div>
          <div className="text-sm text-gray-600">Annual Savings</div>
        </div>

        <div className="bg-white rounded-lg p-6 text-center border-2 border-border">
          <div className="text-3xl font-bold font-mono text-primary mb-2">
            {savingsPercentage}%
          </div>
          <div className="text-sm text-gray-600">Cost Reduction</div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
        <p className="text-center text-sm text-gray-700">
          <span className="font-bold text-success">Save {formatPrice(annualSavings, region)}/year</span> by switching to BookB.
          That's enough for {Math.floor(annualSavings / 1000)} months of extra marketing budget!
        </p>
      </div>
    </div>
  )
}
