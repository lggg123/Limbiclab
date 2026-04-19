create extension if not exists pgcrypto;
create extension if not exists citext;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email citext not null unique,
  product text not null default 'newsletter' check (product = 'newsletter'),
  status text not null default 'pending' check (
    status in ('pending', 'trialing', 'active', 'past_due', 'canceled', 'unpaid', 'incomplete', 'incomplete_expired', 'paused')
  ),
  stripe_customer_id text unique,
  stripe_subscription_id text unique,
  stripe_checkout_session_id text,
  stripe_price_id text,
  last_payment_status text,
  trial_started_at timestamptz,
  trial_ends_at timestamptz,
  current_period_ends_at timestamptz,
  canceled_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists newsletter_subscribers_status_idx
  on public.newsletter_subscribers (status);

create index if not exists newsletter_subscribers_checkout_session_idx
  on public.newsletter_subscribers (stripe_checkout_session_id);

create table if not exists public.stripe_webhook_events (
  stripe_event_id text primary key,
  event_type text not null,
  livemode boolean not null default false,
  payload jsonb not null,
  processed_at timestamptz not null default timezone('utc', now())
);

alter table public.newsletter_subscribers enable row level security;
alter table public.stripe_webhook_events enable row level security;

drop trigger if exists set_newsletter_subscribers_updated_at on public.newsletter_subscribers;

create trigger set_newsletter_subscribers_updated_at
before update on public.newsletter_subscribers
for each row
execute function public.set_updated_at();
