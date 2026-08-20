'use client'

import { Mail as MailIcon } from 'lucide-react'

const team = [
  { name: 'Desire Kisakye', role: 'Founder & Journey Director', bio: 'Builds thoughtful routes around Uganda’s wild places, people and possibilities.' },
  { name: 'Brian Kato', role: 'Lead Safari Guide', bio: 'A patient naturalist who reads tracks, weather and the quiet language of the bush.' },
  { name: 'Sarah Namirembe', role: 'Guest Experience Manager', bio: 'Makes every detail feel easy, from the first conversation to the final airport transfer.' },
  { name: 'Moses Ssentongo', role: 'Community & Conservation Lead', bio: 'Connects journeys with local partners, conservation work and lasting community value.' },
]

export function TeamSection({ compact = false }: { compact?: boolean }) {
  return <section className={compact ? 'team-section team-section-compact section-wrap' : 'team-section section-wrap'}>
    <div className="section-heading"><div><p className="eyebrow">The people behind the journey</p><h2>Local knowledge.<br /><em>Open-hearted hosting.</em></h2></div><p>Sinza is a small Uganda-based team. You get real people, honest advice and a guide who has spent years learning these landscapes.</p></div>
    <div className="team-grid">{team.map((person, index) => <article className="team-card" key={person.name}><div className="team-card-top"><span className="team-number">0{index + 1}</span><div className="team-socials"><a href="#contact" aria-label={`Email ${person.name}`}><MailIcon /></a><a href="#instagram" aria-label={`${person.name} on Instagram`}><span aria-hidden="true">ig</span></a><a href="#linkedin" aria-label={`${person.name} on LinkedIn`}><span aria-hidden="true">in</span></a></div></div><div className="team-avatar-placeholder" aria-hidden="true"><span>{person.name.split(' ').map((part) => part[0]).join('')}</span></div><p className="eyebrow">{person.role}</p><h3>{person.name}</h3><p>{person.bio}</p></article>)}</div>
  </section>
}

export { team }
