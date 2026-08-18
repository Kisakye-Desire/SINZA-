import { SiteShell, PageHero, EnquiryCta } from '@/components/site-shell'
import { ArticleFilter } from '@/components/safari-ui'
export default function BlogPage() { return <SiteShell><main><PageHero eyebrow="The field notes" title={<>Stories from<br /><em>the journey.</em></>} intro="Planning notes, field stories and thoughtful reasons to travel through Uganda." image="/images/lioness-antelope.jpg" /><section className="section-wrap"><ArticleFilter /></section><EnquiryCta /></main></SiteShell> }
