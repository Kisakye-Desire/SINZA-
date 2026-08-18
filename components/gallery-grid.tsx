'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

type GalleryImage = { src: string; alt: string; label: string }
export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [page, setPage] = useState(0)
  const [active, setActive] = useState<number | null>(null)
  const perPage = 6
  const visible = images.slice(page * perPage, page * perPage + perPage)
  const pages = Math.max(1, Math.ceil(images.length / perPage))
  return <>
    <div className="gallery-collage">{visible.map((image, index) => <button className={`gallery-collage-tile gallery-collage-${index}`} key={image.src} onClick={() => setActive(page * perPage + index)}><img src={image.src} alt={image.alt} /><span>{image.label}</span><i>View story</i></button>)}</div>
    <div className="gallery-pagination"><button onClick={() => setPage(Math.max(0, page - 1))} disabled={page === 0} aria-label="Previous gallery page"><ChevronLeft size={18} /></button><span>{String(page + 1).padStart(2, '0')} / {String(pages).padStart(2, '0')}</span><button onClick={() => setPage(Math.min(pages - 1, page + 1))} disabled={page === pages - 1} aria-label="Next gallery page"><ChevronRight size={18} /></button></div>
    {active !== null && <div className="gallery-lightbox" role="dialog" aria-label="Gallery image" onClick={() => setActive(null)}><button onClick={() => setActive(null)} aria-label="Close image"><X /></button><img src={images[active].src} alt={images[active].alt} onClick={(event) => event.stopPropagation()} /><p>{images[active].label}</p></div>}
  </>
}
