# BookB - Salon Management Software Website

Professional Next.js 14 website for BookB salon management software with 100+ auto-generated SEO pages.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Auto-detected regional pricing (UK, US, UAE, Australia)
- ✅ 100+ statically generated pages
- ✅ Dynamic competitor alternative pages (10 pages)
- ✅ Dynamic city pages (32 cities across 4 regions)
- ✅ Vertical deep-dive pages (20+ pages)
- ✅ Blog system with markdown support
- ✅ SEO optimization (meta tags, schema markup, sitemap, robots.txt)
- ✅ Google Analytics 4 & GTM integration
- ✅ Currency auto-detection via IP
- ✅ Performance optimized

## Project Structure

```
/app
  /page.tsx                           # Homepage
  /pricing/page.tsx                   # Pricing page
  /contact/page.tsx                   # Contact form
  /[competitor]-alternative/page.tsx  # Dynamic competitor pages
  /[country]/[city]/page.tsx          # Dynamic city pages
  /barbershop-software/page.tsx       # Vertical pages
  /nail-salon-software/page.tsx
  /hair-salon-software/page.tsx
  /salon-booking-system/page.tsx
  /day-spa-software/page.tsx
  /mobile-hairdresser-software/page.tsx
  /beauty-therapist-software/page.tsx
  /salon-software-for-small-business/page.tsx
  /blog/page.tsx                      # Blog index
  /blog/[slug]/page.tsx               # Blog post pages
  /sitemap.ts                         # Auto-generated sitemap
  /robots.ts                          # Robots.txt
  /layout.tsx                         # Root layout
  /globals.css                        # Global styles

/components
  /CurrencyDetector.tsx               # IP-based currency detection
  /PricingCard.tsx                    # Pricing tier cards
  /ComparisonTable.tsx                # Feature comparison tables
  /FeatureShowcase.tsx                # Feature grid
  /ROICalculator.tsx                  # Interactive savings calculator
  /Header.tsx                         # Site header
  /Footer.tsx                         # Site footer

/lib
  /pricing.ts                         # Regional pricing logic
  /geo.ts                             # Geolocation detection
  /schema.ts                          # Structured data helpers
  /analytics.ts                       # GA4 & GTM integration
  /blog.ts                            # Blog utilities

/content
  /competitors.json                   # 10 competitor data
  /cities.json                        # 32 cities with coordinates
  /blog/
    /reduce-salon-no-shows.md
    /salon-queue-management-guide.md
    /salon-software-cost-guide-2026.md
    /bookb-vs-zenoti.md
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## Pages Overview

### Core Pages (3)
- Homepage `/`
- Pricing `/pricing`
- Contact `/contact`

### Competitor Alternative Pages (10)
- `/zenoti-alternative`
- `/fresha-alternative`
- `/phorest-alternative`
- `/boulevard-alternative`
- `/vagaro-alternative`
- `/square-appointments-alternative`
- `/salon-iris-alternative`
- `/millennium-alternative`
- `/shortcuts-alternative`
- `/timely-alternative`

### City Pages (32)
**UK (16):** London, Manchester, Birmingham, Glasgow, Leeds, Liverpool, Edinburgh, Bristol, Sheffield, Cardiff, Newcastle, Nottingham, Leicester, Belfast, Brighton, Southampton

**US (8):** New York, Los Angeles, Miami, Chicago, Dallas, Atlanta, Houston, Phoenix

**UAE (5):** Dubai, Abu Dhabi, Sharjah, Riyadh, Jeddah

**Australia (3):** Sydney, Melbourne, Brisbane

### Vertical Pages (8)
- `/barbershop-software`
- `/nail-salon-software`
- `/hair-salon-software`
- `/salon-booking-system`
- `/day-spa-software`
- `/mobile-hairdresser-software`
- `/beauty-therapist-software`
- `/salon-software-for-small-business`

### Blog Posts (4)
- How to Reduce Salon No-Shows by 40%
- Ultimate Guide to Salon Queue Management
- Salon Software Cost Guide 2026
- BookB vs Zenoti: Complete Comparison

**Total Pages:** 60+ (excluding blog archives and future posts)

## SEO Features

- ✅ Dynamic meta titles and descriptions
- ✅ Open Graph tags
- ✅ Schema.org structured data
  - FAQPage schema
  - SoftwareApplication schema
  - LocalBusiness schema
  - Organization schema
- ✅ Auto-generated sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs

## Performance Optimizations

- Next.js Image optimization
- Font optimization (Google Fonts)
- Static generation for all pages
- ISR for blog posts
- Optimized bundle size
- Tree shaking

## Deployment

### Vercel (Recommended)

```bash
vercel
```

### Build Output

```bash
npm run build
# Outputs to .next/
```

## Analytics

The site includes:
- Google Analytics 4
- Google Tag Manager
- Event tracking for:
  - Page views
  - Demo requests
  - Pricing page visits
  - Calculator usage

## Currency Detection

Auto-detects user location and shows appropriate pricing:
- 🇬🇧 UK: £ (GBP)
- 🇺🇸 US: $ (USD)
- 🇦🇪 UAE: AED
- 🇦🇺 Australia: AUD (Australian Dollar)

Detection uses ipapi.co and caches in localStorage.

## License

Proprietary - BookB

## Contact

For support: info@bookb.io
