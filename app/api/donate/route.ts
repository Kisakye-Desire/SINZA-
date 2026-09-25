import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const allowedAmounts = new Set([2500, 5000, 10000])

export async function GET(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) return NextResponse.json({ error: 'Stripe is not configured.' }, { status: 503 })

  const amount = Number(new URL(request.url).searchParams.get('amount'))
  if (!allowedAmounts.has(amount)) return NextResponse.json({ error: 'Choose a valid donation amount.' }, { status: 400 })

  const stripe = new Stripe(secretKey)
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price_data: { currency: 'usd', product_data: { name: 'Sinza community development donation' }, unit_amount: amount }, quantity: 1 }],
    success_url: `${new URL(request.url).origin}/donate?success=1`,
    cancel_url: `${new URL(request.url).origin}/donate?cancelled=1`,
    integration_identifier: `sinza_donation_${Math.random().toString(36).slice(2, 10)}`,
  })

  return NextResponse.redirect(session.url ?? '/donate')
}

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'
