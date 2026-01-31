import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Get country from Cloudflare header (works on Vercel, Netlify, Cloudflare)
  const country = request.headers.get('cf-ipcountry') ||
                  request.headers.get('x-vercel-ip-country') ||
                  request.geo?.country ||
                  'US'

  // Set currency based on country
  let currency = '$'
  let countryCode = 'us'

  if (country === 'GB' || country === 'UK') {
    currency = '£'
    countryCode = 'uk'
  } else if (country === 'AU') {
    currency = 'AUD'
    countryCode = 'au'
  } else if (country === 'AE' || country === 'SA') {
    currency = 'AED'
    countryCode = 'ae'
  }

  // Set cookies for client-side access
  response.cookies.set('user-currency', currency, { path: '/' })
  response.cookies.set('user-country', countryCode, { path: '/' })

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
