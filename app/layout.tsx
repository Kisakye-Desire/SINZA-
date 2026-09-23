import { Analytics } from '@vercel/analytics/next'
import { Cormorant_Garamond, Geist } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant' })
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

export const metadata: Metadata = {
  title: 'Sinza Safaris | Wild places, deeply felt',
  description: 'Private safari journeys through Uganda and East Africa, shaped around your pace, your people and the moments you came to find.',
  generator: 'v0.app',
  icons: {
    icon: '/images/sinza-logo.png',
    apple: '/images/sinza-logo.png',
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
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
