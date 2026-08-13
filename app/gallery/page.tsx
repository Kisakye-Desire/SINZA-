import { SiteShell, PageHero, EnquiryCta } from '@/components/site-shell'
import { GalleryGrid } from '@/components/gallery-grid'
import { galleryImages } from '@/lib/safari-data'
export default function GalleryPage() { return <SiteShell><main><PageHero eyebrow="Field notes" title={<>A life lived<br /><em>outside.</em></>} intro="A few frames from the roads, forests, plains and conversations that stay with us." image={galleryImages[0].src} /><section className="section-wrap gallery-section"><GalleryGrid images={galleryImages} /></section><EnquiryCta /></main></SiteShell> }
