'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, ChevronDown, Menu, MessageCircle, X } from 'lucide-react'
import { destByRegion, journeysByRegion, navItems } from '@/lib/safari-data'

const intelLinks = [['Safari Pricing', '/safari-pricing'], ['Safari FAQs', '/safari-intel/faqs'], ['Packing List', '/packing-list'], ['Safari Guide', '/safari-guide'], ['Booking Terms', '/terms-conditions'], ['Privacy Policy', '/privacy-policy'], ['The Team', '/team'], ['How We Work', '/how-we-work']]
const companyLinks = [['About Orika', '/company'], ['Our Story', '/company/our-story'], ['Conservation', '/company/conservation'], ['The Team', '/company/team'], ['DMC', '/dmc']]

function MenuGroup({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return <div className="menu-group" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}><button className={open ? 'menu-trigger active' : 'menu-trigger'} onClick={() => setOpen((value) => !value)}>{label}<ChevronDown size={13} className={open ? 'rotate-180' : ''} /></button>{open && <div className="mega-menu">{children}</div>}</div>
}

export function Header() {
  const [mobile, setMobile] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const toggle = (label: string) => setMobileSection((value) => value === label ? null : label)
  return <header className="site-header">
    <Link href="/" className="brand" onClick={() => setMobile(false)}>SINZA <span>SAFARIS</span></Link>
    <nav className={mobile ? 'nav-links open' : 'nav-links'}>
      <MenuGroup label="Our Journeys"><div className="mega-columns"><div><p className="mega-heading">Explore journeys</p><Link href="/safaris">All Safaris <ArrowRight size={14} /></Link>{Object.entries(journeysByRegion).map(([region, items]) => <div className="mega-subgroup" key={region}><p>{region}</p>{items.slice(0, 3).map((item) => <Link key={item.slug} href={`/safaris/${item.slug}`}>{item.title}</Link>)}</div>)}</div><div className="mega-feature"><p className="mega-heading">Travel your way</p><p>Private journeys, designed around the people you travel with, the places you are curious about, and the pace that feels right.</p><Link href="/contact" className="mega-arrow">Start planning <ArrowRight size={14} /></Link></div></div></MenuGroup>
      <MenuGroup label="Destinations"><div className="mega-columns"><div><p className="mega-heading">Where do you want to go?</p>{Object.entries(destByRegion).map(([region, items]) => <div className="mega-subgroup" key={region}><p>{region}</p>{items.slice(0, 4).map((item) => <Link key={item.slug} href={`/destinations/${item.slug}`}>{item.name}</Link>)}</div>)}</div><div className="mega-feature destination-mega"><p className="mega-heading">Unforgettable journeys</p><p>From Uganda's misty forests to Kenya's open plains, discover East Africa one considered route at a time.</p><Link href="/destinations">Explore destinations <ArrowRight size={14} /></Link></div></div></MenuGroup>
      <Link href="/offers" onClick={() => setMobile(false)}>Special Offers</Link><Link href="/gallery" onClick={() => setMobile(false)}>Gallery</Link>
      <MenuGroup label="Company"><div className="mega-columns compact"><div><p className="mega-heading">Our story</p>{companyLinks.slice(0, 4).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div><div><p className="mega-heading">Plan your safari</p>{companyLinks.slice(4).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<Link href="/contact">Contact our team</Link></div></div></MenuGroup>
      <MenuGroup label="Safari Intel"><div className="mega-columns compact"><div><p className="mega-heading">Useful information</p>{intelLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div><div className="mega-feature"><p className="mega-heading">The field notes</p><p>Practical answers and thoughtful context for your time in East Africa.</p><Link href="/safari-intel">Explore Safari Intel <ArrowRight size={14} /></Link></div></div></MenuGroup>
      <Link href="/blog" onClick={() => setMobile(false)}>Blog</Link><Link className="nav-cta" href="/contact" onClick={() => setMobile(false)}>Enquire <ArrowRight size={15} /></Link>
    </nav>
    <a className="header-phone" href="https://wa.me/256702970065">+256 702 970065</a>
    <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMobile((value) => !value)}>{mobile ? <X /> : <Menu />}</button>
  </header>
}

export function Footer() { return <>
  <section className="footer-enquire"><p>We build private gorilla trekking safaris in Uganda and Rwanda, wildlife journeys in Kenya and Tanzania, and multi-country itineraries, because no two people want the same safari.</p><div><Link href="/contact" className="button dark">Enquire <ArrowRight size={15} /></Link><a href="https://wa.me/256702970065" className="whatsapp-link"><MessageCircle size={22} /> +256 702 970065</a></div></section>
  <section className="partner-strip"><div className="partner-marquee-block"><p className="eyebrow">Partners & associations</p><div className="partner-marquee" aria-label="Sinza Safaris partners"><div className="partner-marquee-track"><span>UR SEASONS</span><span>LABA LABA</span><span>AMREF</span><span>ASILIA</span><span>EXPLORE UGANDA</span><span>UWA</span><span>YOUR AFRICAN SAFARI</span><span>UR SEASONS</span><span>LABA LABA</span><span>AMREF</span><span>ASILIA</span><span>EXPLORE UGANDA</span><span>UWA</span><span>YOUR AFRICAN SAFARI</span></div></div></div></section>
  <footer><div className="footer-brand"><Link className="brand" href="/">SINZA <span>SAFARIS</span></Link><p>Meaningful journeys through East Africa.</p><a href="mailto:sinzasafaris@gmail.com">sinzasafaris@gmail.com</a><a href="tel:+256702970065">+256 702 970065</a><a href="https://www.google.com/maps/search/?api=1&query=Bwebajja%2C%20Entebbe%20Road%2C%20Kampala%2C%20Uganda" target="_blank" rel="noreferrer">Bwebajja, Entebbe Road, Kampala →</a><span>Mon–Sat · 08:00–17:30</span></div><div className="footer-column"><p>Discover</p><Link href="/about">About Sinza</Link><Link href="/company/team">The Team</Link><Link href="/company/conservation">Conservation</Link><Link href="/dmc">DMC</Link><Link href="/offers">Special Offers</Link><Link href="/gallery">Gallery</Link></div><div className="footer-column"><p>Plan</p><Link href="/safaris">Our Journeys</Link><Link href="/contact">Plan a Safari</Link><Link href="/safari-intel/faqs">Safari FAQs</Link><Link href="/safari-pricing">Safari Pricing</Link><Link href="/packing-list">Packing List</Link><Link href="/blog">Safari Journal</Link></div><div className="footer-column footer-contact"><p>Get in touch</p><span>Email</span><a href="mailto:sinzasafaris@gmail.com">sinzasafaris@gmail.com</a><span>WhatsApp</span><a className="footer-whatsapp" href="https://wa.me/256702970065">+256 702 970065</a><small>Usually replies within minutes</small><span>Location</span><a href="https://www.google.com/maps/search/?api=1&query=Bwebajja%2C%20Entebbe%20Road%2C%20Kampala%2C%20Uganda" target="_blank" rel="noreferrer">Kampala, Uganda ↗</a></div><small>© 2026 Sinza Safaris Ltd. All rights reserved. Travel with purpose.</small></footer>
  <Link href="/contact" className="floating-chat" aria-label="Chat with Sinza Safaris"><MessageCircle size={25} /></Link>
</> }

export function SiteShell({ children }: { children: React.ReactNode }) { return <><Header />{children}<Footer /></> }
export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: React.ReactNode; intro?: string; image?: string }) { return <section className="page-hero"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{intro && <p className="hero-lede">{intro}</p>}</div>{image && <img src={image} alt="" />}</section> }
export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: React.ReactNode; intro?: string }) { return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{intro && <p className="section-intro">{intro}</p>}</div> }
export function EnquiryCta() { return <section className="statement"><p className="eyebrow">Start with a conversation</p><h2>Let&apos;s make<br /><em>your journey.</em></h2><p>Tell us what you&apos;re imagining and our Uganda-based team will shape thoughtful ideas around you.</p><Link href="/contact" className="button light">Plan my safari <ArrowRight size={16} /></Link></section> }
