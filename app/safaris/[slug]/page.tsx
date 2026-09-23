import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { SiteShell, PageHero, EnquiryCta } from '@/components/site-shell'
import { ItineraryAccordion } from '@/components/itinerary-accordion'
import { journeyCountries, getSafari } from '@/lib/safari-data'

export function generateStaticParams() { return [...journeyCountries.map((country) => ({ slug: country.slug })), ...journeyCountries.flatMap((country) => country.journeys.map((journey) => ({ slug: journey.slug })))] }

function itineraryForCatalogJourney(title: string, duration: string) {
  const days = Number.parseInt(duration, 10)
  const route = title.toLowerCase()
  const plans: { title: string; details: string[] }[] = []
  const add = (dayTitle: string, details: string[]) => plans.push({ title: dayTitle, details })

  if (route.includes('ziwa') || route.includes('rhino')) add('Ziwa Rhino Sanctuary', ['Depart Kampala or Entebbe with your private guide and travel north through Uganda’s countryside.', 'Join trained sanctuary rangers for a guided walk in search of southern white rhinos.', 'Learn about rhino behaviour, habitat protection and Uganda’s conservation programme before returning or continuing to your overnight stop.'])
  if (route.includes('murchison')) {
    add('Journey to Murchison Falls', ['Travel north through Luwero, Nakasongola and Masindi towards Uganda’s largest national park.', 'Enjoy lunch en route, then check in and settle into your lodge near the park.'])
    add('Game Drive and Victoria Nile Cruise', ['Take an early game drive in the northern sector, looking for elephants, Rothschild’s giraffes, buffaloes, Uganda kob, hartebeest, lions and other wildlife.', 'After lunch, cruise the Victoria Nile towards the base of Murchison Falls for hippos, crocodiles, elephants and waterbirds.'])
    add('Top of the Falls and Scenic Transfer', ['Visit the Top of Murchison Falls, where the Nile is forced through a narrow gorge.', 'Continue through the Albertine Rift and western Uganda towards your next destination, with scenic and community stops where time allows.'])
  }
  if (route.includes('kibale') || route.includes('chimp')) {
    add('Kibale Forest and Chimpanzee Tracking', ['Attend the ranger briefing at the designated visitor centre before entering the forest.', 'Track a habituated chimpanzee community for approximately 2–5 hours, with up to one hour of viewing once the animals are located.', 'Look for red-tailed monkeys, colobus monkeys, baboons, forest birds and butterflies.'])
    add('Bigodi Wetland and Forest Communities', ['Join an optional guided Bigodi wetland walk for birdwatching, primates and wetland ecology.', 'Meet local community guides and learn about crafts, farming and community-based tourism before continuing to your lodge.'])
  }
  if (route.includes('semuliki')) add('Semuliki National Park and Sempaya Hot Springs', ['Travel into Semuliki’s lowland tropical forest, a distinctive Albertine Rift ecosystem with rich birdlife and primates.', 'Take a guided nature walk to Sempaya Hot Springs and learn about their geology, forest ecology and cultural significance.'])
  if (route.includes('queen') || route.includes('kazinga') || route.includes('lions') || route.includes('wildlife')) {
    add('Queen Elizabeth National Park', ['Explore the savannah, wetlands and crater-lake landscapes of Queen Elizabeth National Park.', 'Take a game drive in the Kasenyi area, searching for elephants, buffaloes, Uganda kob, lions, waterbucks, warthogs and other wildlife.'])
    add('Kazinga Channel and Ishasha Wildlife', ['Cruise the Kazinga Channel between Lake George and Lake Edward among hippos, crocodiles, elephants, buffaloes and waterbirds.', 'Where the route allows, explore Ishasha in search of its famous tree-climbing lions; sightings are wild and never guaranteed.'])
  }
  if (route.includes('gorilla') || route.includes('bwindi')) {
    add('Travel to Bwindi Impenetrable Forest', ['Travel through the hills and highlands of south-western Uganda to the lodge nearest your confirmed trekking sector.', 'Receive a trek briefing, prepare waterproof hiking gear and rest before the early start.'])
    add('Mountain Gorilla Trekking', ['Attend the Uganda Wildlife Authority briefing before entering the forest with ranger guides and trackers.', 'The trek may take approximately 2–7 hours over steep, muddy and uneven terrain; observe the habituated family according to current park rules.', 'Return to the lodge for lunch and rest after this exceptional forest encounter.'])
  }
  if (route.includes('mburo')) add('Lake Mburo Wildlife and Water', ['Explore Lake Mburo’s savannah on a game drive or guided nature walk, looking for zebra, impala, eland, topi, giraffe, buffalo and warthog.', 'Enjoy an optional boat cruise for hippos, crocodiles and wetland birds.'])
  if (route.includes('kidepo')) add('Kidepo Valley Wilderness', ['Explore the Narus and Kidepo valleys across remote Karamoja landscapes.', 'Search for elephants, buffaloes, lions, giraffes, zebras, cheetahs, ostriches and other northern savannah species, with an optional respectful community experience.'])
  if (route.includes('sipi') || route.includes('waterfall') || route.includes('jinja') || route.includes('eastern')) add('Eastern Uganda: Jinja, Sipi and Waterfalls', ['Visit the Source of the Nile, Sezibwa Falls or Bujagali according to the selected route.', 'Hike around Sipi Falls, visit a Mount Elgon coffee farm and learn about local growing, roasting and community life.'])
  if (route.includes('lake mburo') || route.includes('bunyonyi')) add('Lake Bunyonyi and Highland Scenery', ['Relax beside Lake Bunyonyi among terraced hills and island-dotted waters.', 'Choose a canoe or boat ride, birdwatching, photography or a community experience before the return journey.'])

  while (plans.length < days) {
    const index = plans.length
    add(index === 0 ? 'Arrival and Safari Briefing' : index === days - 1 ? 'Final Experience and Departure' : 'Scenic Transfer and Local Life', index === 0 ? ['Meet your Sinza Safaris guide at the agreed pickup point and review the route, permits, driving times and dietary or mobility needs.', 'Travel towards the first destination with a planned lunch stop and scenic views.', 'Check in, settle into your accommodation and confirm the following day’s meeting time.'] : index === days - 1 ? ['Enjoy breakfast and a final activity according to your departure time.', 'Transfer to Kampala, Entebbe or the next agreed destination with a comfortable airport buffer.'] : ['Travel between destinations through Uganda’s changing countryside, farms, communities and hills.', 'Pause for lunch and photographs where appropriate, then check in and relax at your lodge.', 'Dinner, overnight and briefing for the next day’s activity.'])
  }
  return plans.slice(0, days).map((day, index) => ({ day: `Day ${index + 1}`, ...day }))
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
  const detail = { ...detailBase, itinerary: detailBase.itinerary?.length ? detailBase.itinerary : itineraryForCatalogJourney(detailBase.title, detailBase.duration) }
  return <SiteShell><main><section className="detail-hero"><img src={detail.image} alt={detail.title} /><div><p className="eyebrow">{detail.duration} · {detail.category}</p><h1>{detail.title}</h1><p>{detail.summary}</p><Link href="/contact" className="button light">Enquire about this journey <ArrowRight size={16} /></Link></div></section><section className="section-wrap detail-layout"><article><p className="eyebrow">The journey</p><h2>Made around<br /><em>you.</em></h2><p className="large-copy">This considered itinerary brings together remarkable landscapes with the time and flexibility to experience them properly. Speak with our local journey designers to shape the route, lodge style and pace.</p></article><aside className="detail-aside"><p className="eyebrow">Highlights</p>{detail.highlights.map((highlight) => <p className="highlight" key={highlight}>{highlight}</p>)}</aside></section>{detail.itinerary && <section className="section-wrap itinerary-section"><div className="section-heading"><div><p className="eyebrow">Itinerary</p><h2>Day by day.</h2></div></div><ItineraryAccordion days={detail.itinerary} /></section>}<EnquiryCta /></main></SiteShell>
}
