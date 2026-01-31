'use client'

import Script from 'next/script'

export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    return null // Don't load GA if ID not set
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  )
}
