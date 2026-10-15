import { Analytics } from '@vercel/analytics/next'
import { Cormorant_Garamond, Geist } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import './theme-overrides.css'
import { Header } from '@/components/site-shell'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant' })
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

const siteUrl = 'https://www.sinzasafaries.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sinza Safaris | Uganda and Rwanda Safaris',
    template: '%s | Sinza Safaris',
  },
  description: 'Private Uganda and Rwanda safari journeys with expert local guides, gorilla trekking, chimpanzee tracking and thoughtful wildlife travel across East Africa.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Sinza Safaris',
    title: 'Sinza Safaris | Uganda and Rwanda Safaris',
    description: 'Thoughtfully planned safari journeys through Uganda, Rwanda and East Africa.',
    images: [{ url: '/images/wildlife-chimp-rainforest.jpg', width: 1200, height: 800, alt: 'Chimpanzee in Uganda rainforest' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sinza Safaris | Uganda and Rwanda Safaris',
    description: 'Thoughtfully planned safari journeys through Uganda, Rwanda and East Africa.',
    images: ['/images/wildlife-chimp-rainforest.jpg'],
  },
  generator: 'v0.app',
  icons: {
    icon: '/images/sinza-safaris-logo.png',
    apple: '/images/sinza-safaris-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f3f0e8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${cormorant.variable} ${geist.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TravelAgency',
          name: 'Sinza Safaris',
          url: 'https://www.sinzasafaries.com',
          description: 'Private safari journeys through Uganda, Rwanda and East Africa.',
          areaServed: ['Uganda', 'Rwanda', 'East Africa'],
          sameAs: [],
        }) }} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
