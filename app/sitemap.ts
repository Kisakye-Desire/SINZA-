import type { MetadataRoute } from 'next'
import { articles, destinations, experiences, journeyCountries, safaris } from '@/lib/safari-data'

const siteUrl = 'https://www.sinzasafaries.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes = ['', '/about', '/destinations', '/experiences', '/safaris', '/offers', '/gallery', '/safari-intel', '/safari-guide', '/safari-pricing', '/packing-list', '/how-we-work', '/dmc', '/community', '/contact', '/donate', '/company', '/blog', '/terms-conditions']
  const destinationRoutes = destinations.map((item) => `/destinations/${item.slug}`)
  const countryRoutes = journeyCountries.map((item) => `/safaris/${item.slug}`)
  const journeyRoutes = journeyCountries.flatMap((country) => country.journeys.map((journey) => `/safaris/${journey.slug}`))
  const safariRoutes = safaris.map((item) => `/safaris/${item.slug}`)
  const experienceRoutes = experiences.map((item) => `/experiences/${item.slug}`)
  const articleRoutes = articles.map((item) => `/blog/${item.slug}`)
  const routes = [...staticRoutes, ...destinationRoutes, ...countryRoutes, ...journeyRoutes, ...safariRoutes, ...experienceRoutes, ...articleRoutes]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route.startsWith('/blog/') ? 'monthly' : 'weekly',
    priority: route === '' ? 1 : route.startsWith('/destinations/') || route.startsWith('/safaris/') ? 0.8 : 0.6,
  }))
}
