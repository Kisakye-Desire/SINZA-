import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { SiteShell, PageHero, EnquiryCta } from '@/components/site-shell'
import { ItineraryAccordion } from '@/components/itinerary-accordion'
import { journeyCountries, getSafari } from '@/lib/safari-data'

export function generateStaticParams() { return [...journeyCountries.map((country) => ({ slug: country.slug })), ...journeyCountries.flatMap((country) => country.journeys.map((journey) => ({ slug: journey.slug })))] }

function buildItinerary(title: string, duration: string, country: string) {
  const days = Number.parseInt(duration, 10)
  const stops = title.split(/ & | and |, /).filter(Boolean)
  const themes = ['Arrival, briefing and route orientation', 'Travel into the first destination', 'Guided wildlife and landscape experience', 'A full day in the heart of the journey', 'Cultural encounter and local communities', 'Signature safari activity and photography', 'Second wildlife experience or relaxed exploration', 'Final game drive and onward travel']
  return Array.from({ length: days }, (_, index) => {
    const isLast = index === days - 1
    const theme = isLast ? 'Departure and onward travel' : themes[index % themes.length]
    const stop = stops[index % Math.max(stops.length, 1)]
    return {
      day: `Day ${index + 1}`,
      title: `${theme}${stop ? ` — ${stop}` : ''}`,
      details: isLast
        ? [`Enjoy a final breakfast and review the highlights of your ${title}.`, `Transfer onward from ${stop || country} with your guide.`]
        : [`Explore ${stop || country} with an experienced local guide.`, 'Allow time for wildlife viewing, photography and rest between activities.', `Overnight near ${stop || 'the next destination'}.`],
    }
  })
}

export default async function SafariDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const country = journeyCountries.find((item) => item.slug === slug)
  if (country) return <SiteShell><main><PageHero eyebrow="Our journeys" title={country.name} intro={`${country.tagline}. Discover journeys shaped around wildlife, landscape, culture and time.`} image={country.image} /><section className="section-wrap"><div className="section-heading"><div><p className="eyebrow">{country.name} Safaris</p><h2>Choose your way in.</h2></div><p>Every route can be extended, slowed down or made entirely your own. Open any itinerary for the full route, highlights and day-by-day plan.</p></div><div className="journey-country-list">{country.journeys.map((journey) => <article className="journey-country-card" key={journey.slug}><img src={journey.image} alt={journey.title} /><div><p className="eyebrow">{journey.duration}</p><h3>{journey.title}</h3><p>{`A guided ${journey.duration.split(' / ')[0]} journey through ${country.name}, combining wildlife, landscapes and local experiences.`}</p><Link className="button dark" href={`/safaris/${journey.slug}`}>View full itinerary <ArrowRight size={16} /></Link></div></article>)}</div></section><EnquiryCta /></main></SiteShell>
  const safari = getSafari(slug)
  const catalogJourney = journeyCountries.flatMap((item) => item.journeys).find((item) => item.slug === slug)
  if (!safari && !catalogJourney) notFound()
  const journeyCountry = journeyCountries.find((item) => item.journeys.some((journey) => journey.slug === slug))?.name ?? 'Uganda'
  const detailBase = safari ?? { ...catalogJourney!, category: `${journeyCountry} Safaris`, summary: `${catalogJourney!.title} is a thoughtfully paced journey combining the places and experiences named in the itinerary. Expect expert guiding, comfortable stays and time to experience each destination properly.`, destinations: catalogJourney!.title.split(/ & | and |, /).slice(0, 4), highlights: ['Expert local guiding throughout', 'Wildlife, landscapes and local culture', `Signature experiences from the ${catalogJourney!.title} route`, 'Comfortable accommodation and flexible pacing'], itinerary: undefined }
  const expectedDays = Number.parseInt(detailBase.duration, 10)
  const detail = { ...detailBase, itinerary: detailBase.itinerary?.length && detailBase.itinerary.length >= expectedDays ? detailBase.itinerary : buildItinerary(detailBase.title, detailBase.duration, journeyCountry) }
  return <SiteShell><main><section className="detail-hero"><img src={detail.image} alt={detail.title} /><div><p className="eyebrow">{detail.duration} · {detail.category}</p><h1>{detail.title}</h1><p>{detail.summary}</p><Link href="/contact" className="button light">Enquire about this journey <ArrowRight size={16} /></Link></div></section><section className="section-wrap detail-layout"><article><p className="eyebrow">The journey</p><h2>Made around<br /><em>you.</em></h2><p className="large-copy">This considered itinerary brings together remarkable landscapes with the time and flexibility to experience them properly. Speak with our local journey designers to shape the route, lodge style and pace.</p></article><aside className="detail-aside"><p className="eyebrow">Highlights</p>{detail.highlights.map((highlight) => <p className="highlight" key={highlight}>{highlight}</p>)}</aside></section>{detail.itinerary && <section className="section-wrap itinerary-section"><div className="section-heading"><div><p className="eyebrow">Day by day</p><h2>A route with<br /><em>room to breathe.</em></h2></div><p>Use this as a starting rhythm. Your guide will adjust the pace around weather, wildlife and what you want to linger on.</p></div><ItineraryAccordion days={detail.itinerary} /></section>}<EnquiryCta /></main></SiteShell>
}
