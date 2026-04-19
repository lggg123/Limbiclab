declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args)
  }
}

export function trackEbookConversion() {
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_EBOOK_LABEL
  const id = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  if (!id || !label) return
  gtag('event', 'conversion', { send_to: `${id}/${label}` })
}

export function trackPurchaseConversion(value?: number, currency = 'USD') {
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_PURCHASE_LABEL
  const id = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  if (!id || !label) return
  gtag('event', 'conversion', {
    send_to: `${id}/${label}`,
    value,
    currency,
  })
}
