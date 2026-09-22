'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, BookOpen, Search } from 'lucide-react'
import { PageHero, SectionHeading, SiteShell } from '@/components/site-shell'
import { articles } from '@/lib/safari-data'

const categories = [
  'Uganda Travel',
  'Rwanda Travel',
  'Gorilla Trekking',
  'Safari Planning',
  'Wildlife',
  'Travel Tips',
  'Comparisons',
]

export default function SafariIntelPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [query, setQuery] = useState('')

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = !activeCategory || article.category === activeCategory
    const haystack = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase()
    return matchesCategory && haystack.includes(query.toLowerCase())
  })

  const categorizedArticles = categories.map((cat) => ({
    category: cat,
    count: articles.filter((a) => a.category === cat).length,
  }))

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Safari Intel · The field journal"
          title={
            <>
              Good to know
              <br />
              <em>before you go.</em>
            </>
          }
          intro="A practical, visual guide to travelling well through East Africa — from the first question to the final campfire. Explore our comprehensive collection of travel guides, destination information, and safari preparation resources."
          image="/images/primates/chimp-forest-portrait.jpg"
        />

        {/* Category Filter */}
        <section className="section-wrap">
          <SectionHeading
            eyebrow="Safari planning guides"
            title={
              <>
                The details
                <br />
                <em>that matter.</em>
              </>
            }
            intro="Filter by topic to find exactly what you need for your East African journey."
          />

          <div className="intel-toolbar">
            <label className="intel-search"><Search size={16} /><span className="sr-only">Search Safari Intel</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search guides" /></label>
            <span className="intel-result-count">{filteredArticles.length} guide{filteredArticles.length === 1 ? '' : 's'}</span>
          </div>
          <div className="intel-category-filter">
            <button
              className={`category-pill ${activeCategory === null ? 'active' : ''}`}
              onClick={() => setActiveCategory(null)}
            >
              All Guides ({articles.length})
            </button>
            {categorizedArticles.map(({ category, count }) => (
              <button
                key={category}
                className={`category-pill ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category} ({count})
              </button>
            ))}
          </div>
        </section>

        {/* Featured Articles Grid */}
        <section className="section-wrap intel-articles-grid">
          {filteredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/safari-intel/${article.slug}`}
              className="intel-article-card"
            >
              <div className="intel-article-image">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="intel-article-content">
                <p className="eyebrow">{article.category}</p>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <span className="text-link">
                  Read guide <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </section>

        {/* Featured Destinations Section */}
        <section className="section-wrap intel-destinations">
          <SectionHeading
            eyebrow="Destination guides"
            title={
              <>
                Explore
                <br />
                <em>each country.</em>
              </>
            }
            intro="Deep-dive guides for Uganda, Rwanda, and their most extraordinary destinations."
          />
          <div className="destination-pills">
            <Link href="/destinations/uganda" className="destination-link">
              Uganda <ArrowRight size={14} />
            </Link>
            <Link href="/destinations/rwanda" className="destination-link">
              Rwanda <ArrowRight size={14} />
            </Link>
          </div>
        </section>


      </main>
    </SiteShell>
  )
}
