import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteShell, PageHero, EnquiryCta } from '@/components/site-shell'
import { journeyCountries } from '@/lib/safari-data'

export default function SafarisPage() {
  return <SiteShell><main><PageHero eyebrow="Our journeys" title={<>Where will you go?<br /><em>Begin here.</em></>} intro="Start with a country, then let us shape the route around your pace, curiosity and the places you want to feel." image="/images/elephants-wetland.jpg" /><section className="country-choice-section"><div><p className="eyebrow">Choose your starting point</p><h2>Four countries.<br /><em>Many ways in.</em></h2></div><div className="country-choice-list"><Link className="country-choice-all" href="/safaris"><span>See every safari</span><ArrowRight size={18} /></Link>{journeyCountries.map((country) => <Link className="country-choice-row" href={`/safaris/${country.slug}`} key={country.slug}><span><strong>{country.name}</strong><small>{country.tagline}</small></span><ArrowRight size={18} /></Link>)}</div></section><section className="section-wrap centered-section"><p className="eyebrow">Not sure where to begin?</p><h2>Tell us what you want to feel.</h2><Link className="button dark" href="/contact">Plan my safari <ArrowRight size={16} /></Link></section><EnquiryCta /></main></SiteShell>
}
