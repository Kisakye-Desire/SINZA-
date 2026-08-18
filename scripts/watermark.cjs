const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const OUT = '/vercel/share/v0-project/public/images'
fs.mkdirSync(OUT, { recursive: true })

const LOGO_URL = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-logo-1-3r8t6i2tjT6OT9Qfam68EDOBU3jgPf.png'

const photos = [
  ['rhino-single',        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5628.JPG-muDKjnxRImj1xVsCn3gyXDkK2PILtE.jpeg'],
  ['giraffe-portrait',    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5627.JPG-yGASb9jxEPjlCvD4A4hJ1Zg3qeNpwo.jpeg'],
  ['lioness-walking',     'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5631.JPG-rS59UZELQy0LewL1zwyEryIs0fCgIO.jpeg'],
  ['lions-pair-grass',    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5638.JPG-zU1Hi2FnX0jlIZj0TkeRbgurbDXR4T.jpeg'],
  ['lion-lioness-resting','https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5641.JPG-RjHG1D8HIjSWvORKYbFBd2tcdg5KZu.jpeg'],
  ['giraffe-trees',       'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5629.JPG-ZydkgjXulhcx07d4waUeIM7aPwWWVf.jpeg'],
  ['lions-ridge',         'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5642.JPG-wYa478mcqQzRJ0kkcNkkflGv5jitxD.jpeg'],
  ['lion-lioness-ridge',  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5640.JPG-BkTejPAhxfDH9TDqgvgP9EWGd4Tocl.jpeg'],
  ['elephants-wetland',   'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5645.JPG-XXFHWJGoh01GxfrOVC6NBCwqJtLdJs.jpeg'],
  ['rhinos-pair',         'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5626.JPG-8lBCJcLIfxBYwPJRz1f7PwKxumyNPV.jpeg'],
  ['lions-tree',          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5635.JPG-7OLDQg8KiAysnqQNQgcFupv8qC1vIQ.jpeg'],
  ['lions-resting-pair',  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5637.JPG-jx5CxLlJIS9M93MhnEKJIYUCi2UFMI.jpeg'],
  ['elephants-palms',     'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5643.JPG-qMx6NSsURCT3ylxkDqA0wpAeTxVmZf.jpeg'],
  ['lions-tree-tall',     'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5632.JPG-oP2rlm6GRBbGxjHslargp943H2l961.jpeg'],
  ['baboon',              'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5623.JPG-TJn4NHMwQRtKvZp9aS8cG1FjrsYXDa.jpeg'],
  ['lioness-stalking',    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5630.JPG-tdhW88vZzl9b5sEVu5PVjqAFRKYD5I.jpeg'],
  ['lioness-antelope',    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5636.JPG-ghfH7hpNHt0hkzDR2HbpggsavT4QjG.jpeg'],
  ['elephants-family-bw', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5644.JPG-axlJ9YHAejexIpyZDfBNzxN3Kgr7IF.jpeg'],
]

async function buf(url) {
  const r = await fetch(url)
  if (!r.ok) throw new Error('fetch failed ' + r.status + ' ' + url)
  return Buffer.from(await r.arrayBuffer())
}

async function main() {
  const logoBuf = await buf(LOGO_URL)

  for (const [name, url] of photos) {
    const src = await buf(url)
    let img = sharp(src).rotate()
    const meta = await img.metadata()
    const maxEdge = 1800
    let W = meta.width, H = meta.height
    if (Math.max(W, H) > maxEdge) {
      const scale = maxEdge / Math.max(W, H)
      W = Math.round(W * scale); H = Math.round(H * scale)
      img = img.resize(W, H)
    }
    const base = await img.jpeg({ quality: 88 }).toBuffer()
    const bm = await sharp(base).metadata()
    W = bm.width; H = bm.height

    const logoSize = Math.max(56, Math.round(Math.min(W, H) * 0.11))
    const pad = Math.round(logoSize * 0.28)
    const panelW = logoSize + pad * 2
    const panelH = logoSize + pad * 2
    const radius = Math.round(panelH * 0.22)

    const panelSvg = Buffer.from(
      `<svg width="${panelW}" height="${panelH}" xmlns="http://www.w3.org/2000/svg">
         <rect x="0" y="0" width="${panelW}" height="${panelH}" rx="${radius}" ry="${radius}"
               fill="#ffffff" fill-opacity="0.72"/>
       </svg>`
    )
    const logoResized = await sharp(logoBuf)
      .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer()

    const watermark = await sharp(panelSvg)
      .composite([{ input: logoResized, top: pad, left: pad }])
      .png()
      .toBuffer()

    const wmMeta = await sharp(watermark).metadata()
    const margin = Math.round(Math.min(W, H) * 0.03)
    const out = await sharp(base)
      .composite([{ input: watermark, top: H - wmMeta.height - margin, left: W - wmMeta.width - margin, opacity: 0.92 }])
      .jpeg({ quality: 86 })
      .toBuffer()

    fs.writeFileSync(path.join(OUT, name + '.jpg'), out)
    console.log('wrote', name + '.jpg', W + 'x' + H)
  }
  console.log('DONE')
}

main().catch((e) => { console.error(e); process.exit(1) })
