export type Region = 'UK' | 'US' | 'UAE' | 'AU'
export type Currency = '£' | '$' | 'AED' | 'AUD'

export interface RegionalPricing {
  currency: Currency
  symbol: Currency
  starter: number
  professional: number
  enterprise: number | string
  competitorPrice: number
}

export const REGIONAL_PRICING: Record<Region, RegionalPricing> = {
  UK: {
    currency: '£',
    symbol: '£',
    starter: 15,
    professional: 65,
    enterprise: 'Custom',
    competitorPrice: 300,
  },
  US: {
    currency: '$',
    symbol: '$',
    starter: 20,
    professional: 85,
    enterprise: 'Custom',
    competitorPrice: 400,
  },
  UAE: {
    currency: 'AED',
    symbol: 'AED',
    starter: 70,
    professional: 300,
    enterprise: 'Custom',
    competitorPrice: 1460,
  },
  AU: {
    currency: 'AUD',
    symbol: 'AUD',
    starter: 25,
    professional: 110,
    enterprise: 'Custom',
    competitorPrice: 500,
  },
}

export function formatPrice(amount: number, region: Region): string {
  const pricing = REGIONAL_PRICING[region]
  if (pricing.currency === 'AED') {
    return `${pricing.symbol} ${amount.toLocaleString()}`
  }
  return `${pricing.symbol}${amount.toLocaleString()}`
}

export function calculateSavings(region: Region, tier: 'starter' | 'professional' | 'enterprise'): {
  monthly: number
  annually: number
  percentage: number
} {
  const pricing = REGIONAL_PRICING[region]
  const bookbPrice = typeof pricing[tier] === 'number' ? pricing[tier] : 0
  const competitorPrice = pricing.competitorPrice

  return {
    monthly: competitorPrice - bookbPrice,
    annually: (competitorPrice - bookbPrice) * 12,
    percentage: Math.round(((competitorPrice - bookbPrice) / competitorPrice) * 100),
  }
}
