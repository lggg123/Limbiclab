import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

import { supabaseAdmin } from '@/lib/supabase-admin'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia',
})

type SubscriberStatus =
  | 'pending'
  | 'trialing'
  | 'active'
  | 'past_due'
  | 'canceled'
  | 'unpaid'
  | 'incomplete'
  | 'incomplete_expired'
  | 'paused'

function fromUnixTimestamp(timestamp: number | null | undefined) {
  return timestamp ? new Date(timestamp * 1000).toISOString() : null
}

function normalizeSubscriptionStatus(status: Stripe.Subscription.Status): SubscriberStatus {
  switch (status) {
    case 'trialing':
    case 'active':
    case 'past_due':
    case 'canceled':
    case 'unpaid':
    case 'incomplete':
    case 'incomplete_expired':
    case 'paused':
      return status
    default:
      return 'pending'
  }
}

async function recordWebhookEvent(event: Stripe.Event) {
  const { error } = await supabaseAdmin
    .from('stripe_webhook_events')
    .insert({
      stripe_event_id: event.id,
      event_type: event.type,
      livemode: event.livemode,
      payload: event,
    })

  if (!error) {
    return { duplicate: false }
  }

  if (error.code === '23505') {
    return { duplicate: true }
  }

  throw error
}

async function upsertNewsletterSubscriber(data: {
  email: string
  status: SubscriberStatus
  stripeCustomerId?: string | null
  stripeSubscriptionId?: string | null
  stripeCheckoutSessionId?: string | null
  stripePriceId?: string | null
  lastPaymentStatus?: string | null
  trialStartedAt?: string | null
  trialEndsAt?: string | null
  currentPeriodEndsAt?: string | null
  canceledAt?: string | null
  metadata?: Record<string, unknown>
}) {
  const payload = {
    email: data.email,
    product: 'newsletter',
    status: data.status,
    stripe_customer_id: data.stripeCustomerId ?? null,
    stripe_subscription_id: data.stripeSubscriptionId ?? null,
    stripe_checkout_session_id: data.stripeCheckoutSessionId ?? null,
    stripe_price_id: data.stripePriceId ?? null,
    last_payment_status: data.lastPaymentStatus ?? null,
    trial_started_at: data.trialStartedAt ?? null,
    trial_ends_at: data.trialEndsAt ?? null,
    current_period_ends_at: data.currentPeriodEndsAt ?? null,
    canceled_at: data.canceledAt ?? null,
    metadata: data.metadata ?? {},
  }

  const { error } = await supabaseAdmin
    .from('newsletter_subscribers')
    .upsert(payload, { onConflict: 'email' })

  if (error) {
    throw error
  }
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  if (session.mode !== 'subscription') {
    return
  }

  const email = session.customer_details?.email || session.customer_email
  const subscriptionId =
    typeof session.subscription === 'string' ? session.subscription : session.subscription?.id
  const customerId = typeof session.customer === 'string' ? session.customer : session.customer?.id

  if (!email || !subscriptionId) {
    console.warn('[stripe/webhook] Missing email or subscription id for session:', session.id)
    return
  }

  const subscription = await stripe.subscriptions.retrieve(subscriptionId)
  const firstItem = subscription.items.data[0]

  await upsertNewsletterSubscriber({
    email,
    status: normalizeSubscriptionStatus(subscription.status),
    stripeCustomerId: customerId,
    stripeSubscriptionId: subscription.id,
    stripeCheckoutSessionId: session.id,
    stripePriceId: firstItem?.price?.id ?? null,
    lastPaymentStatus: session.payment_status ?? null,
    trialStartedAt: fromUnixTimestamp(subscription.trial_start),
    trialEndsAt: fromUnixTimestamp(subscription.trial_end),
    currentPeriodEndsAt: fromUnixTimestamp(subscription.items.data[0]?.current_period_end),
    canceledAt: fromUnixTimestamp(subscription.canceled_at),
    metadata: {
      checkout_session_id: session.id,
      customer_id: customerId,
      subscription_status: subscription.status,
    },
  })
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const customerId = typeof subscription.customer === 'string' ? subscription.customer : subscription.customer?.id
  const firstItem = subscription.items.data[0]

  let email: string | null = null

  if (customerId) {
    const customer = await stripe.customers.retrieve(customerId)
    if (!('deleted' in customer) && customer.email) {
      email = customer.email
    }
  }

  if (!email) {
    console.warn('[stripe/webhook] Missing customer email for subscription:', subscription.id)
    return
  }

  await upsertNewsletterSubscriber({
    email,
    status: normalizeSubscriptionStatus(subscription.status),
    stripeCustomerId: customerId,
    stripeSubscriptionId: subscription.id,
    stripePriceId: firstItem?.price?.id ?? null,
    trialStartedAt: fromUnixTimestamp(subscription.trial_start),
    trialEndsAt: fromUnixTimestamp(subscription.trial_end),
    currentPeriodEndsAt: fromUnixTimestamp(firstItem?.current_period_end),
    canceledAt: fromUnixTimestamp(subscription.canceled_at),
    metadata: {
      customer_id: customerId,
      subscription_status: subscription.status,
      cancel_at_period_end: subscription.cancel_at_period_end,
    },
  })
}

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

  try {
    const recorded = await recordWebhookEvent(event)

    if (recorded.duplicate) {
      return NextResponse.json({ received: true, duplicate: true })
    }
  } catch (err) {
    console.error('[stripe/webhook] Failed to record event:', err)
    return NextResponse.json({ error: 'Webhook persistence failed' }, { status: 500 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        console.log('[stripe/webhook] Checkout completed:', session.id, 'mode:', session.mode)

        if (session.mode === 'payment') {
          // TODO: fulfill PDF download — email the guide PDF to session.customer_details?.email
        }

        await handleCheckoutSessionCompleted(session)
        break
      }

      case 'customer.subscription.updated':
      case 'customer.subscription.created':
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        console.log('[stripe/webhook] Subscription event:', event.type, subscription.id)
        await handleSubscriptionUpdated(subscription)
        break
      }

      default:
        console.log('[stripe/webhook] Unhandled event type:', event.type)
    }
  } catch (err) {
    console.error('[stripe/webhook] Handler failed:', err)
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
