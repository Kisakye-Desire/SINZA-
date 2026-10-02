'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Building2, GraduationCap, HeartHandshake, Trees } from 'lucide-react'
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
  const selectedOption = donationOptions.find((option) => option.id === selected)
  const SelectedIcon = selectedOption?.icon

  return <SiteShell><main className="donation-flow-page">
    <PageHero eyebrow="Community development" title={<>Give with<br /><em>purpose.</em></>} intro="Choose what you would like to support, select your currency, and we’ll show you the clearest way to give." image="/images/sinza-gorilla.jpg" />
    <section className="donation-flow section-wrap">
      <Link href="/community" className="back-link"><ArrowLeft size={15} /> Back to community development</Link>
      <div className="donation-steps" aria-label="Donation steps"><span className="active">01 Choose support</span><i /><span className={selected ? 'active' : ''}>02 Choose amount</span><i /><span className={amount ? 'active' : ''}>03 Complete giving</span></div>
      <p className="eyebrow">Step {selected ? '02' : '01'} of 03</p>
      {!selected ? <>
        <h2>What would you like<br /><em>to support?</em></h2>
        <p className="large-copy">Choose one area and we’ll show you the payment details that fit your gift.</p>
        <div className="donation-option-grid">{donationOptions.map(({ id, title, description, icon: Icon, suggested }) => <button type="button" className="donation-option" onClick={() => setSelected(id)} key={id}><span className="donation-option-icon"><Icon size={28} /></span><h3>{title}</h3><p>{description}</p><strong>{currency} {suggested[0]} and up <ArrowRight size={16} /></strong></button>)}</div>
      </> : <>
        <button type="button" className="donation-change" onClick={() => { setSelected(null); setAmount('') }}><ArrowLeft size={14} /> Change support area</button>
        <div className="donation-selected"><span className="donation-option-icon">{SelectedIcon && <SelectedIcon size={28} />}</span><div><p className="eyebrow">You are supporting</p><h2>{selectedOption?.title}</h2><p>{selectedOption?.description}</p></div></div>
        <h3 className="donation-subheading">Choose your currency</h3><div className="currency-grid">{currencies.map((item) => <button type="button" className={currency === item ? 'selected' : ''} onClick={() => setCurrency(item)} key={item}>{item}</button>)}</div>
        <h3 className="donation-subheading">Enter your donation amount</h3><label className="donation-amount"><span>{currency}</span><input inputMode="decimal" value={amount} onChange={(event) => setAmount(event.target.value.replace(/[^0-9.]/g, ''))} placeholder="Enter amount" aria-label="Donation amount" /></label>
        <div className="suggested-amounts">{selectedOption?.suggested.map((value) => <button type="button" onClick={() => setAmount(String(value))} key={value}>{currency} {value}</button>)}</div>
        <div className="donation-payment-card"><Building2 size={24} /><div><h3>Bank transfer</h3><p>Housing Finance Bank · SINZA SAFARIS LTD</p><p>Account number: <strong>1150021717840</strong></p><p>Use “{selectedOption?.title}” as your reference.</p></div></div>
        <div className="button-row"><a className={`button dark ${!amount ? 'disabled' : ''}`} aria-disabled={!amount} href={amount ? `mailto:sinzasafaris@gmail.com?subject=${encodeURIComponent(`${selectedOption?.title} donation confirmation`)}&body=${encodeURIComponent(`I would like to donate ${currency} ${amount} to ${selectedOption?.title}.`)}` : undefined}>Continue to give <ArrowRight size={16} /></a><a className="button outline-dark" href="https://wa.me/256702970065?text=Hello%20Sinza%2C%20I%20would%20like%20to%20make%20a%20donation." target="_blank" rel="noreferrer">Message us after donating</a></div>
      </>}
    </section>
  </main></SiteShell>
}
