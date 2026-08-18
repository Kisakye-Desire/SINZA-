import Link from 'next/link'
import { ArrowRight, MoveUpRight } from 'lucide-react'
import { SiteShell, SectionHeading, EnquiryCta } from '@/components/site-shell'
import { HeroCarousel, PurposeExplorer, ReviewCarousel } from '@/components/safari-ui'
import { articles, destinations, experiences, journeyCountries } from '@/lib/safari-data'

const reviews = [
  { quote: 'Sinza made every day feel considered, unhurried and completely ours.', name: 'Maya & Daniel', detail: 'Private Uganda journey' },
  { quote: 'The forest, the guides, the small details — a trip we will talk about forever.', name: 'Amara Lewis', detail: 'Gorilla and chimpanzee safari' },
  { quote: 'A thoughtful team with a real feel for place, people and the rhythm of travel.', name: 'The Okello family', detail: 'East Africa escape' },
]

export default function Home() {
  return <SiteShell><main>
    <section className="hero hero-fullbleed home-hero"><HeroCarousel /><div className="hero-copy"><p className="eyebrow">Sinza Safaris · Since 2015</p><h1>Travel with<br /><em>purpose.</em></h1><p className="hero-lede">Tailor-made, purpose-driven safaris across Uganda and East Africa — connecting you with nature, culture and community.</p><div className="button-row"><Link href="/contact" className="button light">Start your journey <ArrowRight size={17} /></Link><Link href="#escape" className="hero-text-link">Scroll to explore <MoveUpRight size={15} /></Link></div></div><div className="scroll-cue">Scroll to discover <span /></div></section>

    <section id="escape" className="escape-section"><div className="escape-copy"><p className="eyebrow">Your East African escape</p><h2>Travel slowly.<br /><em>Look closely.</em></h2><div className="rule" /><p>From the quiet green of Bwindi to the wide skies of the savannah, we create journeys that feel personal from the first conversation to the final sundowner.</p><p>A gorilla encounter in <Link href="/destinations/bwindi">Uganda</Link>. A chimpanzee trail in <Link href="/destinations/kibale">Kibale</Link>. The Nile, the crater lakes, and the people who make every place feel alive.</p><Link href="/about" className="text-link">Why Sinza <ArrowRight size={15} /></Link></div><div className="escape-image"><img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85" alt="Golden light over an East African landscape" /><span>Not a template. Not a brochure. Just you and Africa as it really is.</span></div></section>

    <section className="section-wrap destinations-home"><SectionHeading eyebrow="Our destinations" title={<>Wild places,<br /><em>one continent.</em></>} intro="Uganda, Rwanda, Kenya and Tanzania. Each with a character entirely its own." /><div className="destination-home-grid">{journeyCountries.map((country, index) => <Link className={`destination-home-card destination-home-card-${index}`} href={`/destinations/${country.slug}`} key={country.slug}><img src={country.image} alt={country.name} /><div><p>{String(index + 1).padStart(2, '0')} · {country.tagline}</p><h3>{country.name}</h3><span>Explore country <ArrowRight size={15} /></span></div></Link>)}</div><Link href="/destinations" className="button outline-dark centered-button">Discover all destinations <ArrowRight size={15} /></Link></section>

    <section className="purpose-section"><div className="section-wrap"><SectionHeading eyebrow="Built around your purpose" title={<>Travel with <em>meaning.</em></>} intro="Since 2015, our Uganda-based team has shaped tailor-made journeys that connect nature, culture and community." /><PurposeExplorer /></div></section>

    <section className="experiences-home"><div className="section-wrap"><SectionHeading eyebrow="What awaits you" title={<>The experiences that<br /><em>stay with you.</em></>} intro="Not highlights on a brochure. These are mornings you will never stop talking about." /><div className="experience-mosaic">{experiences.map((experience, index) => <Link className={`experience-mosaic-card experience-mosaic-${index}`} href={`/experiences/${experience.slug}`} key={experience.slug}><img src={experience.image} alt={experience.title} /><div><p>0{index + 1}</p><h3>{experience.title}</h3><span>{experience.description}</span></div></Link>)}</div></div></section>

    <section className="section-wrap journey-home"><SectionHeading eyebrow="Signature journeys" title={<>Safari, <em>your way.</em></>} intro="Thoughtfully designed routes for curious travellers who want more than a checklist." /><div className="journey-feature-grid">{[...destinations.slice(0, 3)].map((place, index) => <Link href={`/destinations/${place.slug}`} className="journey-feature-card" key={place.slug}><img src={place.image} alt={place.name} /><div><p className="eyebrow">{index === 0 ? 'Most loved' : index === 1 ? 'Forest & wildlife' : 'A slower route'}</p><h3>{place.name}</h3><p>{place.description}</p><span className="card-link">Explore the journey <ArrowRight size={15} /></span></div></Link>)}</div><Link href="/safaris" className="button outline-dark centered-button">View all journeys <ArrowRight size={15} /></Link></section>

    <section className="review-home"><div className="review-overlay"><p className="eyebrow">Real experiences, real travellers</p><h2>Our guests <em>remember.</em></h2><ReviewCarousel reviews={reviews} /></div></section>

    <section className="section-wrap intel-home"><SectionHeading eyebrow="Safari Intel" title={<>Notes from<br /><em>East Africa.</em></>} intro="Practical advice, destination insight and stories shaped by the people who live and work across the region." /><div className="intel-home-grid">{articles.map((article) => <Link href={`/blog/${article.slug}`} className="intel-home-card" key={article.slug}><img src={article.image} alt="" /><div><p className="eyebrow">{article.category}</p><h3>{article.title}</h3><p>{article.excerpt}</p><span className="card-link">Read story <ArrowRight size={15} /></span></div></Link>)}</div><Link href="/safari-intel" className="button outline-dark centered-button">Explore Safari Intel <ArrowRight size={15} /></Link></section>

    <EnquiryCta />
  </main></SiteShell>
}

