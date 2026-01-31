export type Region = 'UK' | 'US' | 'UAE' | 'AU'
export type Currency = '£' | '$' | 'AED' | 'AUD'

export interface RegionalPricing {
  currency: Currency
  symbol: Currency
  starter: number
  professional: number
  business: number
  enterprise: number
  competitorPrice: number
}

export const REGIONAL_PRICING: Record<Region, RegionalPricing> = {
  UK: {
    currency: '£',
    symbol: '£',
    starter: 15,
    professional: 45,
    business: 75,
    enterprise: 125,
    competitorPrice: 300,
  },
  US: {
    currency: '$',
    symbol: '$',
    starter: 20,
    professional: 60,
    business: 100,
    enterprise: 165,
    competitorPrice: 400,
  },
  UAE: {
    currency: 'AED',
    symbol: 'AED',
    starter: 70,
    professional: 220,
    business: 365,
    enterprise: 600,
    competitorPrice: 1460,
  },
  AU: {
    currency: 'AUD',
    symbol: 'AUD',
    starter: 25,
    professional: 75,
    business: 125,
    enterprise: 210,
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

export function calculateSavings(region: Region, tier: 'starter' | 'professional' | 'business' | 'enterprise'): {
  monthly: number
  annually: number
  percentage: number
} {
  const pricing = REGIONAL_PRICING[region]
  const bookbPrice = pricing[tier]
  const competitorPrice = pricing.competitorPrice

  return {
    monthly: competitorPrice - bookbPrice,
    annually: (competitorPrice - bookbPrice) * 12,
    percentage: Math.round(((competitorPrice - bookbPrice) / competitorPrice) * 100),
  }
}
