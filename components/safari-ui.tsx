'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { ArrowDownRight, ArrowRight, Check, ChevronDown, Search, X } from 'lucide-react'
import { safaris, articles, type Safari } from '@/lib/safari-data'

export function HeroCarousel() {
  const slides = [
    { image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=90', caption: 'Meaningful journeys across East Africa' },
    { image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1800&q=90', caption: 'Into ancient forests' },
    { image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1800&q=90', caption: 'Wildlife, your way' },
  ]
  const [active, setActive] = useState(0)
  useEffect(() => { const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 6000); return () => window.clearInterval(timer) }, [slides.length])
  const go = (delta: number) => setActive((value) => (value + delta + slides.length) % slides.length)
  return <div className="hero-image"><img src={slides[active].image} alt={slides[active].caption} /><span className="image-caption">{slides[active].caption}</span><div className="hero-controls"><button aria-label="Previous hero image" onClick={() => go(-1)}>←</button>{slides.map((slide, index) => <button aria-label={`Show hero image ${index + 1}`} className={active === index ? 'active' : ''} key={slide.image} onClick={() => setActive(index)} />)}<button aria-label="Next hero image" onClick={() => go(1)}>→</button></div></div>
}

const purposeCards = [
  { label: 'For the curious', title: 'Wildlife & nature', copy: 'Gorilla and chimpanzee trekking, Big Five game drives, birding, Nile cruises and wild nights under canvas.', href: '/experiences/wildlife-safaris' },
  { label: 'For the connected', title: 'Faith & outreach', copy: 'Mission trips, prayer walks, church fellowship and community ministry woven into a thoughtful safari route.', href: '/contact' },
  { label: 'For the celebratory', title: 'Honeymoons & private escapes', copy: 'Slow mornings, beautiful lodges and the space to mark a new chapter in a place that feels extraordinary.', href: '/offers' },
  { label: 'For the builders', title: 'Teams & communities', copy: 'Team-building journeys, school visits, cultural workshops and experiences that leave a positive legacy.', href: '/contact' },
]

export function PurposeExplorer() {
  const [active, setActive] = useState(0)
  const card = purposeCards[active]
  return <div className="purpose-explorer"><div className="purpose-tabs" role="tablist" aria-label="Choose your travel purpose">{purposeCards.map((item, index) => <button key={item.title} role="tab" aria-selected={active === index} className={active === index ? 'purpose-tab active' : 'purpose-tab'} onClick={() => setActive(index)}><span>{String(index + 1).padStart(2, '0')}</span>{item.label}</button>)}</div><div className="purpose-result"><div><p className="eyebrow">{card.label}</p><h3>{card.title}</h3><p>{card.copy}</p><Link href={card.href} className="card-link">Explore this way <ArrowRight size={15} /></Link></div><div className="purpose-stat"><strong>15%</strong><span>of annual income reinvested into education, health and conservation projects.</span></div></div></div>
}

export function SafariGrid({ items = safaris }: { items?: Safari[] }) { return <div className="safari-grid">{items.map((safari, index) => <article className="safari-card" key={safari.slug}><Link className="card-image" href={`/safaris/${safari.slug}`}><img src={safari.image} alt={safari.title} /><span className="card-index">{String(index + 1).padStart(2, '0')}</span><span className="card-arrow"><ArrowDownRight /></span></Link><div className="card-meta"><span>{safari.duration}</span><span>{safari.category}</span></div><h3>{safari.title}</h3><p>{safari.summary}</p><Link className="card-link" href={`/safaris/${safari.slug}`}>View journey <ArrowRight size={15} /></Link></article>)}</div> }

export function SafariExplorer() { const [query, setQuery] = useState(''); const [category, setCategory] = useState('All'); const categories = ['All', ...Array.from(new Set(safaris.map((item) => item.category)))]; const filtered = useMemo(() => safaris.filter((item) => (category === 'All' || item.category === category) && `${item.title} ${item.summary}`.toLowerCase().includes(query.toLowerCase())), [category, query]); return <><div className="explorer-controls"><label className="search-box"><Search size={16} /><input aria-label="Search safaris" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search journeys" /></label><div className="filter-row">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={category === item ? 'filter active' : 'filter'}>{item}</button>)}</div></div>{filtered.length ? <SafariGrid items={filtered} /> : <div className="empty-state"><h3>No journey found.</h3><p>Try another destination, experience or category.</p></div>}</> }

export function FaqList({ items }: { items: string[] }) { const [active, setActive] = useState<number | null>(null); return <div className="faq-list">{items.map((item, index) => <button className="faq-item" key={item} onClick={() => setActive(active === index ? null : index)}><span>{item}</span>{active === index ? <ChevronDown /> : <ArrowRight />}{active === index && <p>Our journey designers will talk through the details with you, then provide a considered itinerary, accommodation options and transparent next steps.</p>}</button>)}</div> }

const steps = ['Where', 'When', 'Who', 'Budget', 'You']
const choices = [
  ['Uganda', 'Gorillas, forests and wide savannahs'], ['Rwanda', 'Volcanoes, lakes and intimate encounters'], ['Kenya', 'Classic plains, big skies and wildlife'], ['Tanzania', 'The Serengeti, crater country and coast'],
]
export function EnquiryWizard() {
  const [step, setStep] = useState(1); const [done, setDone] = useState(false); const [selection, setSelection] = useState<Record<number, string[]>>({})
  const toggle = (value: string) => setSelection((current) => ({ ...current, [step]: current[step]?.includes(value) ? current[step].filter((item) => item !== value) : [...(current[step] ?? []), value] }))
  const canContinue = step === 5 || Boolean(selection[step]?.length)
  const next = () => canContinue && (step === 5 ? setDone(true) : setStep((value) => value + 1))
  return <div className="wizard">{done ? <div className="form-success"><Check size={28} /><p className="eyebrow">Enquiry received</p><h3>Thank you for reaching out.</h3><p>We&apos;ll be in touch with thoughtful ideas within 24 hours.</p><button className="button dark" onClick={() => { setDone(false); setStep(1); setSelection({}) }}>Send another enquiry</button></div> : <><div className="wizard-progress">{steps.map((label, index) => <span className={step >= index + 1 ? 'active' : ''} key={label}>{String(index + 1).padStart(2, '0')} {label}</span>)}</div><div className="wizard-fields"><p className="eyebrow">Step {String(step).padStart(2, '0')} of 05</p>{step === 1 && <><h3>Where are you dreaming of?</h3><p className="section-intro">Choose any destinations that call to you.</p><div className="choice-grid">{choices.map(([title, copy]) => <button className={selection[step]?.includes(title) ? 'choice active' : 'choice'} key={title} onClick={() => toggle(title)}><strong>{title}</strong><span>{copy}</span><Check size={15} /></button>)}</div></>}{step === 2 && <><h3>When would you like to travel?</h3><p className="section-intro">A rough idea is perfect. We can help with the rest.</p><div className="choice-grid compact">{['January – March', 'April – May', 'June – October', 'November – December'].map((item) => <button className={selection[step]?.includes(item) ? 'choice active' : 'choice'} key={item} onClick={() => toggle(item)}><strong>{item}</strong><span>Seasonal possibilities</span><Check size={15} /></button>)}</div></>}{step === 3 && <><h3>Who are you travelling with?</h3><div className="choice-grid compact">{['Just me', 'Two travellers', 'Family', 'Friends or group'].map((item) => <button className={selection[step]?.includes(item) ? 'choice active' : 'choice'} key={item} onClick={() => toggle(item)}><strong>{item}</strong><span>We&apos;ll match the pace</span><Check size={15} /></button>)}</div></>}{step === 4 && <><h3>What feels comfortable?</h3><div className="choice-grid compact">{['Under $3,000 pp', '$3,000 – $5,000 pp', '$5,000 – $8,000 pp', 'Let&apos;s discuss'].map((item) => <button className={selection[step]?.includes(item) ? 'choice active' : 'choice'} key={item} onClick={() => toggle(item)}><strong>{item}</strong><span>Indicative, not fixed</span><Check size={15} /></button>)}</div></>}{step === 5 && <><h3>And finally, who are you?</h3><div className="form-row"><label>First name<input placeholder="Your first name" onChange={(event) => setSelection((current) => ({ ...current, 5: event.target.value ? [event.target.value] : [] }))} /></label><label>Email<input type="email" placeholder="you@example.com" /></label></div><label>Anything else we should know?<textarea rows={4} placeholder="Tell us what you are imagining..." /></label></>}<div className="wizard-actions">{step > 1 && <button className="button outline-dark" onClick={() => setStep((value) => value - 1)}>Back</button>}<button className="button dark" disabled={!canContinue} onClick={next}>{step === 5 ? 'Send enquiry' : 'Continue'} <ArrowRight size={16} /></button></div></div></>}</div>
}

export function GalleryGrid({ images }: { images: { src: string; alt: string; label: string }[] }) { const [active, setActive] = useState<number | null>(null); return <><div className="gallery-grid">{images.map((image, index) => <button className={`gallery-tile gallery-tile-${index % 5}`} key={image.src} onClick={() => setActive(index)}><img src={image.src} alt={image.alt} /><span>{image.label}</span></button>)}</div>{active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image" onClick={() => setActive(null)}><button className="lightbox-close" aria-label="Close image" onClick={() => setActive(null)}><X /></button><img src={images[active].src} alt={images[active].alt} onClick={(event) => event.stopPropagation()} /></div>}</> }

export function ArticleFilter() { const [filter, setFilter] = useState('All'); const cats = ['All', ...Array.from(new Set(articles.map((article) => article.category)))]; const visible = filter === 'All' ? articles : articles.filter((article) => article.category === filter); return <><div className="filter-row">{cats.map((cat) => <button key={cat} className={filter === cat ? 'filter active' : 'filter'} onClick={() => setFilter(cat)}>{cat}</button>)}</div><div className="article-grid">{visible.map((article) => <Link className="article-card" key={article.slug} href={`/blog/${article.slug}`}><img src={article.image} alt="" /><div><p className="eyebrow">{article.category}</p><h3>{article.title}</h3><p>{article.excerpt}</p><span className="card-link">Read story <ArrowRight size={15} /></span></div></Link>)}</div></> }

export function GalleryIntro() { return null }
export function CloseButton() { return null }

export function ReviewCarousel({ reviews }: { reviews: { quote: string; name: string; detail: string }[] }) {
  const [active, setActive] = useState(0)
  const review = reviews[active]
  const move = (direction: number) => setActive((current) => (current + direction + reviews.length) % reviews.length)
  return <div className="review-carousel"><div className="review-card"><span className="review-mark">“</span><blockquote>{review.quote}</blockquote><p className="review-name">{review.name}</p><p className="review-detail">{review.detail}</p></div><div className="review-controls"><button aria-label="Previous review" onClick={() => move(-1)}>←</button><span>{String(active + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}</span><button aria-label="Next review" onClick={() => move(1)}>→</button></div></div>
}

