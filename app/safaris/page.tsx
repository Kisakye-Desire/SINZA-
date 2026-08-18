import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteShell, PageHero, EnquiryCta } from '@/components/site-shell'
import { journeyCountries } from '@/lib/safari-data'

export default function SafarisPage() {
  return <SiteShell><main><PageHero eyebrow="Our journeys" title={<>Where will you go?<br /><em>Begin here.</em></>} intro="Start with a country, then let us shape the route around your pace, curiosity and the places you want to feel." image="/images/elephants-wetland.jpg" /><section className="country-journey-grid">{journeyCountries.map((country) => <Link className="country-journey-card" href={`/safaris/${country.slug}`} key={country.slug}><img src={country.image} alt={`${country.name} safari landscape`} /><div className="country-journey-overlay"><p className="eyebrow">{country.tagline}</p><h2>{country.name}</h2><span>Explore journeys <ArrowRight size={16} /></span></div></Link>)}</section><section className="section-wrap centered-section"><p className="eyebrow">Not sure where to begin?</p><h2>Tell us what you want to feel.</h2><Link className="button dark" href="/contact">Plan my safari <ArrowRight size={16} /></Link></section><EnquiryCta /></main></SiteShell>
}
