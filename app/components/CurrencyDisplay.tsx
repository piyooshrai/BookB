'use client'

import { useEffect, useState } from 'react'

export function useCurrency() {
  const [currency, setCurrency] = useState('$')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Check if we already have currency in localStorage
    const stored = localStorage.getItem('user-currency')
    if (stored) {
      setCurrency(stored)
      setLoaded(true)
      return
    }

    // Detect timezone to infer location
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    let detectedCurrency = '$'

    if (timezone.includes('London') || timezone.includes('Europe/London')) {
      detectedCurrency = '£'
    } else if (timezone.includes('Australia')) {
      detectedCurrency = 'AUD'
    } else if (timezone.includes('Dubai') || timezone.includes('Asia/Dubai') || timezone.includes('Riyadh')) {
      detectedCurrency = 'AED'
    }

    setCurrency(detectedCurrency)
    localStorage.setItem('user-currency', detectedCurrency)
    setLoaded(true)
  }, [])

  return { currency, loaded }
}

export function CurrencyDisplay({ amount }: { amount: number | string }) {
  const { currency, loaded } = useCurrency()

  // Prevent hydration mismatch by showing default until loaded
  if (!loaded) {
    return <>{amount}</>
  }

  return <>{currency}{amount}</>
}
