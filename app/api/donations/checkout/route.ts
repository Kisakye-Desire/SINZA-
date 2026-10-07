import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) return NextResponse.json({ error: 'Stripe is not configured.' }, { status: 503 })
  const stripe = new Stripe(secretKey)
  const body = await request.json() as { amount?: number; currency?: string; cause?: string }
  const amount = Math.round(Number(body.amount))
  const currency = String(body.currency || 'USD').toLowerCase()
  const cause = String(body.cause || 'Community development').slice(0, 120)
  const supportedCurrencies = new Set(['usd', 'eur', 'ugx'])
  const minimumByCurrency = { usd: 100, eur: 100, ugx: 1000 } as const

  if (!Number.isInteger(amount) || amount < (minimumByCurrency[currency as keyof typeof minimumByCurrency] ?? Infinity) || amount > 100000000 || !supportedCurrencies.has(currency)) {
    return NextResponse.json({ error: 'Enter a valid donation amount and currency.' }, { status: 400 })
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price_data: { currency, product_data: { name: `Sinza Safaris donation · ${cause}` }, unit_amount: amount }, quantity: 1 }],
    success_url: `${request.headers.get('origin') || 'http://localhost:3000'}/donate?success=true`,
    cancel_url: `${request.headers.get('origin') || 'http://localhost:3000'}/donate?canceled=true`,
  })

  return NextResponse.json({ url: session.url })
}
