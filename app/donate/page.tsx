'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Building2, CreditCard, GraduationCap, HeartHandshake, Smartphone, Trees } from 'lucide-react'
import { SiteShell, PageHero } from '@/components/site-shell'

const donationOptions = [
  { id: 'school', title: 'Sponsor School Fees', description: 'Help a child access school fees, supplies, and a stronger start.', icon: GraduationCap, suggested: [40, 100, 250] },
  { id: 'conservation', title: 'Protect Nature', description: 'Support conservation, habitat protection, and the people caring for wild places.', icon: Trees, suggested: [25, 75, 150] },
  { id: 'community', title: 'Community Care', description: 'Support healthcare, water, livelihoods, and practical community projects.', icon: HeartHandshake, suggested: [25, 50, 100] },
]
const currencies = ['USD', 'UGX', 'EUR']

export default function DonatePage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [currency, setCurrency] = useState('USD')
  const [amount, setAmount] = useState('')
  const [givingMethod, setGivingMethod] = useState<'mobile' | 'bank' | 'card' | 'paypal'>('mobile')
  const selectedOption = donationOptions.find((option) => option.id === selected)
  const SelectedIcon = selectedOption?.icon
  const startStripeCheckout = async () => { if (!amount || !selectedOption) return; const response = await fetch('/api/donations/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ amount: Math.round(Number(amount) * (currency === 'USD' || currency === 'EUR' ? 100 : 1)), currency, cause: selectedOption.title }) }); const result = await response.json(); if (result.url) window.location.href = result.url }
  const contactForGiving = () => { if (!amount || !selectedOption) return; const message = encodeURIComponent(`Hello Sinza, I would like to donate ${currency} ${amount} to ${selectedOption.title}. Please share the next steps.`); window.open(`https://wa.me/256702970065?text=${message}`, '_blank', 'noopener,noreferrer') }
  const continueGiving = givingMethod === 'card' ? startStripeCheckout : givingMethod === 'paypal' ? () => { if (amount) window.open('https://paypal.me/SinzaSafaris', '_blank', 'noopener,noreferrer') } : contactForGiving

  return <SiteShell><main className="donation-flow-page">
    <PageHero eyebrow="Community development" title={<>Give with<br /><em>purpose.</em></>} intro="Choose what you would like to support, select your currency, and we’ll show you the clearest way to give." image="/images/community-children.png" />
    <section className="donation-flow section-wrap">
      <Link href="/community" className="back-link"><ArrowLeft size={15} /> Back to community development</Link>
      <div className="donation-steps" aria-label="Donation steps"><span className="active">01 Choose support</span><i /><span className={selected ? 'active' : ''}>02 Choose amount</span><i /><span className={amount ? 'active' : ''}>03 Complete giving</span></div>
      <p className="eyebrow">Step {selected ? '02' : '01'} of 03</p>
      {!selected ? <>
        <div className="donation-story-card"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bill-wegener-8ldqRkOk5oo-unsplash-LXQ6vz0BjZZPjYlcLvMC1wc8INJteu.jpg" alt="Young people connected to Sinza community development work" /><div><p className="eyebrow">Your gift reaches people</p><h3>A practical way to travel with purpose.</h3><p>Choose one focus below and we&apos;ll show the giving details for that specific work, including bank transfer and mobile money guidance.</p></div></div>
        <h2>What would you like<br /><em>to support?</em></h2>
        <p className="large-copy">Choose one area and we’ll show you the payment details that fit your gift.</p>
        <div className="donation-option-grid">{donationOptions.map(({ id, title, description, icon: Icon }) => <button type="button" className="donation-option" onClick={() => setSelected(id)} key={id}><span className="donation-option-icon"><Icon size={28} /></span><h3>{title}</h3><p>{description}</p><strong>Choose this focus <ArrowRight size={16} /></strong></button>)}</div>
      </> : <>
        <button type="button" className="donation-change" onClick={() => { setSelected(null); setAmount('') }}><ArrowLeft size={14} /> Change support area</button>
        <div className="donation-selected"><span className="donation-option-icon">{SelectedIcon && <SelectedIcon size={28} />}</span><div><p className="eyebrow">You are supporting</p><h2>{selectedOption?.title}</h2><p>{selectedOption?.description}</p></div></div>
        <h3 className="donation-subheading">Choose your currency</h3><div className="currency-grid">{currencies.map((item) => <button type="button" className={currency === item ? 'selected' : ''} onClick={() => setCurrency(item)} key={item}>{item}</button>)}</div>
        <h3 className="donation-subheading">Enter your donation amount</h3><label className="donation-amount"><span>{currency}</span><input inputMode="decimal" value={amount} onChange={(event) => setAmount(event.target.value.replace(/[^0-9.]/g, ''))} placeholder="Enter amount" aria-label="Donation amount" /></label>
        <div className="giving-methods" role="tablist" aria-label="Ways to donate">{([['mobile', Smartphone, 'Mobile money'], ['bank', Building2, 'Bank transfer'], ['card', CreditCard, 'Card / Stripe'], ['paypal', CreditCard, 'PayPal']] as const).map(([id, Icon, label]) => <button type="button" role="tab" aria-selected={givingMethod === id} className={givingMethod === id ? 'selected' : ''} onClick={() => setGivingMethod(id)} key={id}><Icon size={18} />{label}</button>)}</div>
        <div className="donation-payment-card"><div className="donation-payment-card-icon">{givingMethod === 'mobile' ? <Smartphone size={24} /> : givingMethod === 'bank' ? <Building2 size={24} /> : <CreditCard size={24} />}</div><div>{givingMethod === 'mobile' ? <><h3>Mobile money</h3><div className="mobile-money-grid"><div className="mobile-money-card mtn"><strong>MTN Mobile Money</strong><span>0772905559</span><small>Names: Sinza Safaris</small></div><div className="mobile-money-card airtel"><strong>Airtel Money</strong><span>0752905559</span><small>Names: Sinza Safaris</small></div></div><p>Send any amount you choose, then message us with your reference.</p></> : givingMethod === 'bank' ? <><h3>Bank transfer</h3><p>Housing Finance Bank · SINZA SAFARIS LTD</p><p>Account number: <strong>1150021717840</strong></p><p>Use “{selectedOption?.title}” as your reference.</p></> : givingMethod === 'paypal' ? <><h3>PayPal</h3><p>PayPal giving opens in a secure PayPal window. Complete your donation there, then message us with the cause you selected.</p></> : <><h3>Card / Stripe</h3><p>Pay securely by card through Stripe. Your selected cause and amount are sent to Stripe at checkout.</p><p className="payment-config-note">Stripe checkout is available for USD, EUR, and UGX donations.</p></>}</div></div>
        <div className="button-row"><button type="button" className={`button dark ${!amount ? 'disabled' : ''}`} aria-disabled={!amount} onClick={continueGiving}>{givingMethod === 'card' ? 'Give securely with Stripe' : givingMethod === 'paypal' ? 'Give with PayPal' : 'Continue to give'} <ArrowRight size={16} /></button><a className="button outline-dark" href="https://wa.me/256702970065?text=Hello%20Sinza%2C%20I%20would%20like%20to%20make%20a%20donation." target="_blank" rel="noreferrer">Message us after donating</a></div>
      </>}
    </section>
  </main></SiteShell>
}
