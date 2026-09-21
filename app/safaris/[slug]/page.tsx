import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { SiteShell, PageHero, EnquiryCta } from '@/components/site-shell'
import { ItineraryAccordion } from '@/components/itinerary-accordion'
import { journeyCountries, getSafari } from '@/lib/safari-data'

export function generateStaticParams() { return [...journeyCountries.map((country) => ({ slug: country.slug })), ...journeyCountries.flatMap((country) => country.journeys.map((journey) => ({ slug: journey.slug })))] }

const sourceItineraries: Record<string, { url: string; note: string }> = {
  'uganda-wildlife-18days': { url: 'https://adventure-travellers.com/18-days-uganda-wildlife.html', note: 'Source itinerary: Entebbe, Jinja, Sipi Falls, Kidepo, Murchison Falls, Kibale, Queen Elizabeth, Bwindi and Lake Bunyonyi.' },
  'uganda-adventure-16days': { url: 'https://adventure-travellers.com/16-days-uganda-adventure.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-wildlife-14days': { url: 'https://adventure-travellers.com/14-days-around-uganda.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-wildlife-gorillas-12days': { url: 'https://adventure-travellers.com/12-days-wildlife-gorillas.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-best-11days': { url: 'https://adventure-travellers.com/11-days-best-of-uganda.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-northwest-9days': { url: 'https://adventure-travellers.com/9-days-north-west-uganda.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-primates-wildlife-8days': { url: 'https://adventure-travellers.com/8-days-primates-wildlife.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-mburo-queen-kibale-8days': { url: 'https://adventure-travellers.com/8-days-mburo-queen-kibale.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-wildlife-chimp-6days': { url: 'https://adventure-travellers.com/6-days-wildlife-chimp.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-queen-murchison-6days': { url: 'https://adventure-travellers.com/6-days-queen-murchison.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-kidepo-6days': { url: 'https://adventure-travellers.com/6-days-kidepo.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-gorilla-wildlife-6days': { url: 'https://adventure-travellers.com/6-days-wildlife-gorilla-tracking-uganda.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-kidepo-5days': { url: 'https://adventure-travellers.com/5-days-kidepo.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-murchison-queen-5days': { url: 'https://adventure-travellers.com/5-days-murchison-queen.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-gorilla-mburo-5days': { url: 'https://adventure-travellers.com/5-days-gorilla-mburo.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-murchison-rhino-3days': { url: 'https://adventure-travellers.com/3-days-murchison-falls-rhino.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-murchison-safari-3days': { url: 'https://adventure-travellers.com/3-days-murchison-falls-safari.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-gorillas-3days': { url: 'https://adventure-travellers.com/3-days-gorillas.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-queen-safari-3days': { url: 'https://adventure-travellers.com/3-days-queen-safari.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-big-five-3days': { url: 'https://adventure-travellers.com/big-five-safaris-uganda.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-rhinos-chimpanzees-3days': { url: 'https://adventure-travellers.com/rhinos-chimpanzee-tours.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-lake-mburo-queen-3days': { url: 'https://adventure-travellers.com/3-days-lake-mburo-queen-elizabeth-national-parks.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-murchison-2days': { url: 'https://adventure-travellers.com/2-days-murchison-falls.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-lake-mburo-2days': { url: 'https://adventure-travellers.com/2-days-lake-mburo.html', note: 'Source itinerary from African Adventure Travellers.' },
  'uganda-queen-tour-2days': { url: 'https://adventure-travellers.com/2-days-queen-tour.html', note: 'Source itinerary from African Adventure Travellers.' },
  'gorilla-chimpanzee-big-five': { url: 'https://adventure-travellers.com/11-days-best-of-uganda.html', note: 'Source itinerary from African Adventure Travellers.' },
  'murchison-falls-2days': { url: 'https://adventure-travellers.com/2-days-murchison-falls.html', note: 'Source itinerary from African Adventure Travellers.' },
  'bwindi-gorilla-3days': { url: 'https://adventure-travellers.com/3-days-gorillas.html', note: 'Source itinerary from African Adventure Travellers.' },
  'murchison-queen-elizabeth-5days': { url: 'https://adventure-travellers.com/5-days-murchison-queen.html', note: 'Source itinerary from African Adventure Travellers.' },
  'gorillas-lions-5days': { url: 'https://adventure-travellers.com/5-days-gorilla-mburo.html', note: 'Source itinerary from African Adventure Travellers.' },
  'kidepo-murchison-6days': { url: 'https://adventure-travellers.com/6-days-kidepo.html', note: 'Source itinerary from African Adventure Travellers.' },
  'best-of-uganda-11days': { url: 'https://adventure-travellers.com/11-days-best-of-uganda.html', note: 'Source itinerary from African Adventure Travellers.' },
  'volcanoes-lake-kivu': { url: 'https://adventure-travellers.com/about-rwanda.html', note: 'Source itinerary from African Adventure Travellers.' },
  'rwanda-gorilla-safari-3days': { url: 'https://adventure-travellers.com/3-days-gorillas-rwanda.html', note: 'Source itinerary from African Adventure Travellers.' },
  'rwanda-primates-5days': { url: 'https://adventure-travellers.com/5-days-rwanda-primates.html', note: 'Source itinerary from African Adventure Travellers.' },
  'rwanda-gorilla-wildlife-6days': { url: 'https://adventure-travellers.com/6-days-gorillas-wildlife.html', note: 'Source itinerary from African Adventure Travellers.' },
  'nyungwe-forest-3days': { url: 'https://adventure-travellers.com/3-days-nyungwe-forest.html', note: 'Source itinerary from African Adventure Travellers.' },
  'rwanda-akagera-3days': { url: 'https://adventure-travellers.com/3-days-akagera-safari.html', note: 'Source itinerary from African Adventure Travellers.' },
  'rwanda-nyungwe-2days': { url: 'https://adventure-travellers.com/2-days-nyungwe-tour.html', note: 'Source itinerary from African Adventure Travellers.' },
  'rwanda-golden-monkey-2days': { url: 'https://adventure-travellers.com/2-days-golden-monkey-tracking.html', note: 'Source itinerary from African Adventure Travellers.' },
}

function sourceFor(slug: string) { return sourceItineraries[slug] }

async function getSourceCopy(source?: { url: string }) {
  if (!source) return ''
  try {
    const response = await fetch(source.url, { next: { revalidate: 86400 } })
    if (!response.ok) return ''
    const html = await response.text()
    const withoutScripts = html.replace(new RegExp('<script[^>]*>[\\s\\S]*?</script>', 'gi'), ' ').replace(new RegExp('<style[^>]*>[\\s\\S]*?</style>', 'gi'), ' ')
    const cleaned = withoutScripts.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim()
    const programme = cleaned.search(/Programme for|Day 1:/i)
    const duration = cleaned.search(/Duration/i)
    const start = programme >= 0 ? programme : duration >= 0 ? duration : 0
    const remainder = cleaned.slice(start)
    const end = remainder.search(/What is included|What you should carry|Start Planning Your Trip/i)
    return remainder.slice(0, end > 0 ? end : 18000)
  } catch { return '' }
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
  const source = sourceFor(slug)
  const sourceCopy = await getSourceCopy(source)
  const detail = { ...detailBase, itinerary: detailBase.itinerary?.length ? detailBase.itinerary : undefined }
  return <SiteShell><main><section className="detail-hero"><img src={detail.image} alt={detail.title} /><div><p className="eyebrow">{detail.duration} · {detail.category}</p><h1>{detail.title}</h1><p>{detail.summary}</p><Link href="/contact" className="button light">Enquire about this journey <ArrowRight size={16} /></Link></div></section><section className="section-wrap detail-layout"><article><p className="eyebrow">The journey</p><h2>Made around<br /><em>you.</em></h2><p className="large-copy">This considered itinerary brings together remarkable landscapes with the time and flexibility to experience them properly. Speak with our local journey designers to shape the route, lodge style and pace.</p></article><aside className="detail-aside"><p className="eyebrow">Highlights</p>{detail.highlights.map((highlight) => <p className="highlight" key={highlight}>{highlight}</p>)}</aside></section>{detail.itinerary && <section className="section-wrap itinerary-section"><div className="section-heading"><div><p className="eyebrow">Day by day</p><h2>A route with<br /><em>room to breathe.</em></h2></div><p>These are the verified details for this itinerary.</p></div><ItineraryAccordion days={detail.itinerary} /></section>}{source && <section className="section-wrap source-itinerary"><p className="eyebrow">Complete itinerary</p><h2>Day-by-day programme.</h2><p>{source.note}</p>{sourceCopy ? <div className="source-copy"><p>{sourceCopy}</p></div> : <p>Full itinerary details are being prepared for this journey.</p>}</section>}<EnquiryCta /></main></SiteShell>
}
