export interface FAQItem {
  question: string
  answer: string
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateSoftwareApplicationSchema(
  name: string,
  description: string,
  price: string,
  rating: number = 4.8
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'GBP',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      ratingCount: 247,
    },
  }
}

export function generateLocalBusinessSchema(
  city: string,
  country: string,
  latitude: number,
  longitude: number
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `BookB - ${city}`,
    description: `Professional salon management software serving salons in ${city}, ${country}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressCountry: country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
    url: `https://bookb.io`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@bookb.io',
    },
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BookB',
    url: 'https://bookb.io',
    logo: 'https://bookb.io/logo.png',
    description: 'Professional salon management software',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@bookb.io',
    },
    sameAs: [
      'https://twitter.com/bookb',
      'https://facebook.com/bookb',
      'https://linkedin.com/company/bookb',
    ],
  }
}
