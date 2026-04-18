import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia',
})

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  if (!sig) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    console.error('[stripe/webhook] Signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  console.log('[stripe/webhook] Event received:', event.type)

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      console.log('[stripe/webhook] Checkout completed:', session.id, 'mode:', session.mode)

      if (session.mode === 'payment') {
        // TODO: fulfill PDF download — email the guide PDF to session.customer_details?.email
      }

      if (session.mode === 'subscription') {
        // TODO: activate membership — provision access for session.customer_details?.email
      }
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      console.log('[stripe/webhook] Subscription cancelled:', subscription.id)
      // TODO: revoke membership access for this subscription's customer
      break
    }

    default:
      console.log('[stripe/webhook] Unhandled event type:', event.type)
  }

  return NextResponse.json({ received: true })
}
