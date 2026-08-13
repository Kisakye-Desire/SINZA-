import { SiteShell, PageHero, EnquiryCta } from '@/components/site-shell'
import { ArticleFilter } from '@/components/safari-ui'
export default function BlogPage() { return <SiteShell><main><PageHero eyebrow="The field notes" title={<>Stories from<br /><em>the journey.</em></>} intro="Planning notes, field stories and thoughtful reasons to travel through Uganda." image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85" /><section className="section-wrap"><ArticleFilter /></section><EnquiryCta /></main></SiteShell> }
