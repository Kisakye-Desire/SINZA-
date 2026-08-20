import { SiteShell, PageHero, EnquiryCta } from '@/components/site-shell'
import { TeamSection } from '@/components/team-section'

export default function TeamPage() {
  return <SiteShell><main><PageHero eyebrow="Our team" title={<>The people who make<br /><em>the difference.</em></>} intro="A small, deeply local team with the patience to listen, the experience to guide and the care to make your time in Uganda feel entirely your own." image="/images/sinza-gorilla.jpg" /><TeamSection /><section className="team-note section-wrap"><p className="eyebrow">What you can expect</p><h2>Clear advice. Warm welcome.<br /><em>No hand-offs.</em></h2><p>From your first message to your final goodbye, you will always know who is looking after your journey.</p></section><EnquiryCta /></main></SiteShell>
}
