'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

type GalleryImage = { src: string; alt: string; label: string }
export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [page, setPage] = useState(0)
  const [active, setActive] = useState<number | null>(null)
  const perPage = 6
  const visible = images.slice(page * perPage, page * perPage + perPage)
  const pages = Math.max(1, Math.ceil(images.length / perPage))
  const previous = () => setActive((value) => value === null ? null : (value - 1 + images.length) % images.length)
  const next = () => setActive((value) => value === null ? null : (value + 1) % images.length)
  useEffect(() => {
    if (active === null) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowLeft') previous()
      if (event.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active])
  return <>
    <div className="gallery-collage">{visible.map((image, index) => <button className={`gallery-collage-tile gallery-collage-${index}`} key={image.src} onClick={() => setActive(page * perPage + index)}><img src={image.src} alt={image.alt} loading="lazy" decoding="async" /><span>{image.label}</span><i>View story</i></button>)}</div>
    <div className="gallery-pagination"><button onClick={() => setPage(Math.max(0, page - 1))} disabled={page === 0} aria-label="Previous gallery page"><ChevronLeft size={18} /></button><span>{String(page + 1).padStart(2, '0')} / {String(pages).padStart(2, '0')}</span><button onClick={() => setPage(Math.min(pages - 1, page + 1))} disabled={page === pages - 1} aria-label="Next gallery page"><ChevronRight size={18} /></button></div>
    {active !== null && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`${images[active].label} gallery image`} onClick={() => setActive(null)}><button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close image"><X /></button><button className="lightbox-prev" onClick={(event) => { event.stopPropagation(); previous() }} aria-label="Previous image"><ChevronLeft /></button><figure onClick={(event) => event.stopPropagation()}><img src={images[active].src} alt={images[active].alt} /><figcaption>{images[active].label}<span>Image {active + 1} of {images.length}</span></figcaption></figure><button className="lightbox-next" onClick={(event) => { event.stopPropagation(); next() }} aria-label="Next image"><ChevronRight /></button></div>}
  </>
}
