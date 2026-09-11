import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { SiteShell, PageHero, EnquiryCta } from '@/components/site-shell'
import { ItineraryAccordion } from '@/components/itinerary-accordion'
import { journeyCountries, getSafari } from '@/lib/safari-data'

export function generateStaticParams() { return [...journeyCountries.map((country) => ({ slug: country.slug })), ...journeyCountries.flatMap((country) => country.journeys.map((journey) => ({ slug: journey.slug })))] }

export default async function SafariDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const country = journeyCountries.find((item) => item.slug === slug)
  if (country) return <SiteShell><main><PageHero eyebrow="Our journeys" title={country.name} intro={`${country.tagline}. Discover journeys shaped around wildlife, landscape, culture and time.`} image={country.image} /><section className="section-wrap"><div className="section-heading"><div><p className="eyebrow">{country.name} safaris</p><h2>Choose your way in.</h2></div><p>Every route can be extended, slowed down or made entirely your own.</p></div><div className="journey-country-list">{country.journeys.map((journey) => <article className="journey-country-card" key={journey.slug}><img src={journey.image} alt={journey.title} /><div><p className="eyebrow">{journey.duration}</p><h3>{journey.title}</h3><Link className="button dark" href={`/safaris/${journey.slug}`}>View journey <ArrowRight size={16} /></Link></div></article>)}</div></section><EnquiryCta /></main></SiteShell>
  const safari = getSafari(slug)
  if (!safari) notFound()
  return <SiteShell><main><section className="detail-hero"><img src={safari.image} alt={safari.title} /><div><p className="eyebrow">{safari.duration} · {safari.category}</p><h1>{safari.title}</h1><p>{safari.summary}</p><Link href="/contact" className="button light">Enquire about this journey <ArrowRight size={16} /></Link></div></section><section className="section-wrap detail-layout"><article><p className="eyebrow">The journey</p><h2>Made around<br /><em>you.</em></h2><p className="large-copy">This considered itinerary brings together remarkable landscapes with the time and flexibility to experience them properly. Speak with our local journey designers to shape the route, lodge style and pace.</p></article><aside className="detail-aside"><p className="eyebrow">Highlights</p>{safari.highlights.map((highlight) => <p className="highlight" key={highlight}>{highlight}</p>)}</aside></section>{safari.itinerary && <section className="section-wrap itinerary-section"><div className="section-heading"><div><p className="eyebrow">Day by day</p><h2>A route with<br /><em>room to breathe.</em></h2></div><p>Use this as a starting rhythm. Your guide will adjust the pace around weather, wildlife and what you want to linger on.</p></div><ItineraryAccordion days={safari.itinerary} /></section>}<EnquiryCta /></main></SiteShell>
}
