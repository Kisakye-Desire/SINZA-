import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { SiteShell, EnquiryCta } from '@/components/site-shell'

export function IntelArticle({ eyebrow, title, intro, image, lead, sections }: { eyebrow: string; title: string; intro: string; image: string; lead: string; sections: { title: string; body: string }[] }) {
  return <SiteShell><main><section className="intel-cover" style={{ backgroundImage: `linear-gradient(90deg, #071b13e6, #071b1352), url(${image})` }}><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></div></section><section className="intel-content"><div className="intel-lead"><p className="eyebrow">Field notes</p><h2>{lead}</h2><Link className="text-link" href="/contact">Talk to a journey designer <ArrowRight size={16} /></Link></div><div className="intel-sections">{sections.map((section, index) => <article key={section.title}><span>0{index + 1}</span><div><h3>{section.title}</h3><p>{section.body}</p><div className="intel-check"><Check size={15} /> Practical guidance, always explained clearly</div></div></article>)}</div></section><section className="intel-callout"><p className="eyebrow">A considered beginning</p><h2>Your best safari starts with a conversation.</h2><Link className="button light" href="/contact">Plan my safari <ArrowRight size={15} /></Link></section><EnquiryCta /></main></SiteShell>
} 
