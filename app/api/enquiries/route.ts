import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import {
  clientEnquiryEmail,
  enquiryConfirmationEmail,
  SUPPORT_EMAIL,
  type SafariEnquiryEmailData,
} from '@/lib/email-templates'

export const runtime = 'nodejs'

const MAX_BODY_BYTES = 12_000
const emailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/i
const destinations = ['Uganda', 'Rwanda']
const interests = ['Gorilla Trekking', 'Chimp Tracking', 'Big Five', 'Birdwatching', 'Photography', 'Cultural', 'Honeymoon', 'Family', 'Fly-In', 'Beach', 'Hiking']
const years = ['2026', '2027', '2028', 'Flexible']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const lengths = ['3 to 5 days', '6 to 9 days', '10 to 14 days', '15+ days']
const travellers = ['Just Me', 'Two of Us', 'Family', 'Group']
const budgets = ['Comfort', 'Premium', 'Luxury', 'Not sure yet']
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 10
const rateLimitBuckets = new Map<string, { count: number; expiresAt: number }>()

function getClientIp(request: Request) {
  return request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
}

function consumeRateLimit(ip: string) {
  const now = Date.now()
  for (const [key, bucket] of rateLimitBuckets) {
    if (bucket.expiresAt <= now) rateLimitBuckets.delete(key)
  }
  const current = rateLimitBuckets.get(ip)
  if (current && current.count >= RATE_LIMIT_MAX) return false
  if (current) {
    current.count += 1
    return true
  }
  if (rateLimitBuckets.size >= 2000) {
    const oldestKey = rateLimitBuckets.keys().next().value
    if (oldestKey) rateLimitBuckets.delete(oldestKey)
  }
  rateLimitBuckets.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS })
  return true
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get('origin')
  if (!origin) return true
  const host = request.headers.get('x-forwarded-host')?.split(',')[0]?.trim() || request.headers.get('host')
  if (!host) return false
  try {
    return new URL(origin).host.toLowerCase() === host.toLowerCase()
  } catch {
    return false
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function readText(value: unknown, maxLength: number) {
  if (typeof value !== 'string') return null
  const text = value.trim()
  return text.length <= maxLength ? text : null
}

function readOptionalText(body: Record<string, unknown>, key: string, maxLength: number) {
  if (body[key] === undefined || body[key] === null) return ''
  return readText(body[key], maxLength)
}

function readChoices(value: unknown, allowed: string[], maxItems: number) {
  if (!Array.isArray(value) || value.length < 1 || value.length > maxItems) return null
  if (!value.every((item) => typeof item === 'string' && allowed.includes(item))) return null
  return [...new Set(value as string[])]
}

function readChoice(value: unknown, allowed: string[]) {
  return typeof value === 'string' && allowed.includes(value) ? value : null
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: 'The request could not be verified.' }, { status: 403 })
  }
  if (!request.headers.get('content-type')?.toLowerCase().includes('application/json')) {
    return NextResponse.json({ error: 'The request format is not supported.' }, { status: 415 })
  }
  const rawBody = await request.text()
  if (Buffer.byteLength(rawBody, 'utf8') > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'The request is too large.' }, { status: 413 })
  }

  let parsedBody: unknown
  try {
    parsedBody = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: 'The enquiry could not be read.' }, { status: 400 })
  }

  if (!isRecord(parsedBody)) {
    return NextResponse.json({ error: 'The enquiry could not be read.' }, { status: 400 })
  }

  const honeypot = typeof parsedBody.website === 'string' ? parsedBody.website.trim() : ''
  if (honeypot) return NextResponse.json({ ok: true }, { status: 202 })
  const firstName = readText(parsedBody.firstName, 80)
  const lastName = readText(parsedBody.lastName, 80)
  const email = readText(parsedBody.email, 254)
  const phone = readOptionalText(parsedBody, 'phone', 40)
  const origin = readOptionalText(parsedBody, 'origin', 160)
  const residence = readOptionalText(parsedBody, 'residence', 160)
  const role = readOptionalText(parsedBody, 'role', 160)
  const source = readOptionalText(parsedBody, 'source', 160)
  const notes = readOptionalText(parsedBody, 'notes', 2000)
  const where = readChoices(parsedBody.where, destinations, destinations.length)
  const selectedInterests = readChoices(parsedBody.interests, interests, interests.length)
  const year = readChoice(parsedBody.year, years)
  const month = readChoice(parsedBody.month, months)
  const length = readChoice(parsedBody.length, lengths)
  const who = readChoice(parsedBody.who, travellers)
  const budget = readChoice(parsedBody.budget, budgets)
  const requestId = readText(parsedBody.requestId, 64)

  if (
    !firstName || firstName.length < 2 ||
    !lastName || lastName.length < 2 ||
    !email || !emailPattern.test(email) ||
    phone === null || origin === null || residence === null || role === null || source === null || notes === null ||
    !where || !selectedInterests || !year || !month || !length || !who || !budget ||
    !requestId || !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(requestId)
  ) {
    return NextResponse.json({ error: 'Please check the enquiry details and try again.' }, { status: 400 })
  }

  if (!consumeRateLimit(getClientIp(request))) {
    return NextResponse.json({ error: 'Too many enquiries from this connection. Please try again later.' }, { status: 429, headers: { 'Retry-After': String(RATE_LIMIT_WINDOW_MS / 1000) } })
  }

  const gmailUser = process.env.GMAIL_USER?.trim()
  const gmailPassword = process.env.GMAIL_APP_PASSWORD?.trim()
  const supportInbox = process.env.GMAIL_TO?.trim() || SUPPORT_EMAIL
  if (!gmailUser || !gmailPassword) {
    return NextResponse.json({ error: 'The enquiry email service is still being set up. Please email our team directly.' }, { status: 503 })
  }

  const enquiry: SafariEnquiryEmailData = {
    firstName,
    lastName,
    email,
    phone,
    where,
    interests: selectedInterests,
    year,
    month,
    length,
    who,
    budget,
    origin,
    residence,
    role,
    source,
    notes,
  }
  const notification = clientEnquiryEmail(enquiry)
  const confirmation = enquiryConfirmationEmail(enquiry)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: gmailUser, pass: gmailPassword },
  })

  try {
    await transporter.sendMail({
      from: `Sinza Safaris <${gmailUser}>`,
      to: supportInbox,
      replyTo: email,
      subject: 'New safari enquiry - Sinza Safaris',
      html: notification.html,
      text: notification.text,
      headers: { 'X-Entity-Ref-ID': `safari-enquiry/${requestId}` },
    })
    await transporter.sendMail({
      from: `Sinza Safaris <${gmailUser}>`,
      to: email,
      replyTo: supportInbox,
      subject: 'Your Sinza Safaris enquiry is with us',
      html: confirmation.html,
      text: confirmation.text,
      headers: { 'X-Entity-Ref-ID': `safari-confirmation/${requestId}` },
    })
  } catch (error) {
    console.error('[enquiries] Gmail rejected the email', { errorName: error instanceof Error ? error.name : 'UnknownError' })
    return NextResponse.json({ error: 'The enquiry email could not be sent. Please try again or email our team.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true }, { status: 202 })
}
