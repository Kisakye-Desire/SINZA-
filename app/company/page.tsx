import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero, SectionHeading, SiteShell, EnquiryCta } from '@/components/site-shell'
import { TeamSection } from '@/components/team-section'

const chapters = [
  ['Our Story', 'Sinza Safaris Ltd is a Ugandan-owned travel company rooted in Christian mission and community development. We design transformational journeys that promote sustainability, support conservation, and strengthen the communities that make Uganda extraordinary.', '/images/sinza-boat-safari.jpg'],
  ['Our Mission', 'Sinza Safaris Ltd exists to create unique, meaningful travel experiences across Uganda and East Africa—transforming lives and communities through responsible tourism, guided by Christian values and a heart for service.', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%286%29-lvA1iier3MW0omOtfIAaJRl4TUMV5S.jpg'],
  ['Our Vision', 'To become East Africa’s leading purpose-driven travel company—transforming lives through unforgettable experiences that connect people, nature, and communities.', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%2839%29-1aZGCHYI0Seye4VkhwvFKf5q6SmnN9.jpg'],
]

const coreValues = [
  ['Faith & Integrity', 'We lead with compassion, honesty, and responsible stewardship.'],
  ['Sustainability', 'We protect the landscapes and wildlife that make every journey possible.'],
  ['Community Empowerment', 'We keep tourism practical, local, and beneficial to the people who host us.'],
  ['Safety & Security', 'We plan carefully so every traveller can explore with confidence.'],
  ['Authenticity', 'We create grounded experiences shaped by real places and local voices.'],
  ['Excellence', 'We bring care, clarity, and thoughtful service to every detail.'],
]

const reasons = [
  ['Tailor-Made Itineraries', 'Your safari is built from scratch based on your purpose, travel style, and interests.'],
  ['Unbiased Lodge Selection', 'From budget to luxury, we hand-pick the best stays to match your comfort and vision.'],
  ['Expert Safari Guides', 'Friendly, professional, and conservation-aware—our guides bring Uganda to life safely.'],
  ['Giving Back – 15% for Impact', 'We reinvest 15% of our annual income into education, health, and conservation projects. When you travel with Sinza, you travel with purpose.'],
]

export default function CompanyPage() {
  return <SiteShell><main>
    <PageHero eyebrow="About Sinza Safaris" title={<>Travel with<br /><em>meaning.</em></>} intro="Sinza Safaris Ltd is a Ugandan-owned travel company rooted in Christian mission and community development. We believe nature is one of God’s greatest gifts—meant to refresh the soul, inspire the spirit, and renew the heart." image="/images/sinza-boat-safari.jpg" />
    <section className="company-story section-wrap">
      <SectionHeading eyebrow="Who we are" title={<>Uganda first.<br /><em>Always personal.</em></>} intro="We approach travel as a blessing—for both the traveler and the communities we serve. We design more than tours—we create transformational journeys that promote sustainability, support conservation, and strengthen the people and places that make Uganda extraordinary." />
      <div className="company-chapters">{chapters.map(([title, copy, image], index) => <article className="company-chapter" key={title}><div className="company-chapter-image"><img src={image} alt={`${title} illustration`} /><span>0{index + 1}</span></div><div><p className="eyebrow">Purpose 0{index + 1}</p><h3>{title}</h3><p>{copy}</p><Link href="/contact" className="text-link">Talk to our team <ArrowRight size={14} /></Link></div></article>)}</div>
    </section>
    <section className="company-values section-wrap"><SectionHeading eyebrow="Core Values" title={<>What guides<br /><em>every journey.</em></>} intro="Six principles shape how we host, travel, and invest in the places we call home." /><ol className="company-values-list">{coreValues.map(([title, copy], index) => <li key={title}><span className="company-value-number">0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></section>
    <section className="section-wrap company-reasons"><SectionHeading eyebrow="Why Travel With Us?" title={<>Travel well.<br /><em>Travel with purpose.</em></>} /><div className="reasons-grid">{reasons.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="service-list section-wrap"><SectionHeading eyebrow="What we offer" title={<>Routes made<br /><em>for you.</em></>} intro="From the misty forests to the wild north, our trips are shaped around your interests and travelling style." /><div className="service-list-grid">{['Gorilla & Chimpanzee Trekking','Big Five Game Drives','Birding Safaris','Boat Cruises','Camping Safaris','Fly-Out Safaris'].map((service, index) => <div key={service}><span>{String(index + 1).padStart(2, '0')}</span><p>{service}</p><ArrowRight size={15} /></div>)}</div></section>
    <TeamSection compact /><EnquiryCta />
  </main></SiteShell>
}
