'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { Region } from '@/lib/pricing'
import { detectLocation } from '@/lib/geo'

interface CurrencyContextType {
  region: Region
  isLoading: boolean
}

const CurrencyContext = createContext<CurrencyContextType>({
  region: 'UK',
  isLoading: true,
})

export function useCurrency() {
  return useContext(CurrencyContext)
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [region, setRegion] = useState<Region>('UK')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check localStorage first
    const cached = localStorage.getItem('bookb_region')
    if (cached && ['UK', 'US', 'UAE', 'AU'].includes(cached)) {
      setRegion(cached as Region)
      setIsLoading(false)
      return
    }

    // Detect location
    detectLocation().then(location => {
      setRegion(location.region)
      localStorage.setItem('bookb_region', location.region)
      setIsLoading(false)
    })
  }, [])

  return (
    <CurrencyContext.Provider value={{ region, isLoading }}>
      {children}
    </CurrencyContext.Provider>
  )
}
