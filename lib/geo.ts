import { Region } from './pricing'

export interface GeoLocation {
  country: string
  countryCode: string
  region: Region
}

export async function detectLocation(): Promise<GeoLocation> {
  try {
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()

    const countryCode = data.country_code
    let region: Region = 'UK' // default

    switch (countryCode) {
      case 'GB':
        region = 'UK'
        break
      case 'US':
        region = 'US'
        break
      case 'AE':
      case 'SA':
        region = 'UAE'
        break
      case 'AU':
      case 'NZ':
        region = 'AU'
        break
      default:
        region = 'UK'
    }

    return {
      country: data.country_name,
      countryCode,
      region,
    }
  } catch (error) {
    // Fallback to UK if detection fails
    return {
      country: 'United Kingdom',
      countryCode: 'GB',
      region: 'UK',
    }
  }
}

export function getRegionFromCountryCode(countryCode: string): Region {
  switch (countryCode) {
    case 'GB':
      return 'UK'
    case 'US':
      return 'US'
    case 'AE':
    case 'SA':
      return 'UAE'
    case 'AU':
    case 'NZ':
      return 'AU'
    default:
      return 'UK'
  }
}
