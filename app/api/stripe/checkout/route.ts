import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia',
})

export async function POST(req: NextRequest) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || req.nextUrl.origin
    const { product, email } = await req.json()

    if (product === 'guide') {
      const priceId = process.env.STRIPE_PRICE_GUIDE
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: [
          priceId
            ? { price: priceId, quantity: 1 }
            : {
                price_data: {
                  currency: 'usd',
                  product_data: { name: 'Dark Psychology Defense Guide' },
                  unit_amount: 2700,
                },
                quantity: 1,
              },
        ],
        success_url: `${baseUrl}/store/success?type=guide`,
        cancel_url: `${baseUrl}/store`,
      })
      return NextResponse.json({ url: session.url })
    }

    if (product === 'newsletter') {
      const priceId = process.env.STRIPE_PRICE_NEWSLETTER
      const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        ...(email ? { customer_email: email } : {}),
        subscription_data: { trial_period_days: 14 },
        line_items: [
          priceId
            ? { price: priceId, quantity: 1 }
            : {
                price_data: {
                  currency: 'usd',
                  product_data: { name: 'LimbicLab Newsletter' },
                  recurring: { interval: 'month' },
                  unit_amount: 999,
                },
                quantity: 1,
              },
        ],
        success_url: `${baseUrl}/store/success?type=newsletter`,
        cancel_url: `${baseUrl}/store`,
      })
      return NextResponse.json({ url: session.url })
    }

    return NextResponse.json({ error: 'Invalid product' }, { status: 400 })
  } catch (err) {
    console.error('[stripe/checkout]', err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Checkout failed' },
      { status: 500 }
    )
  }
}
