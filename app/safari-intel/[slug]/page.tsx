import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { PageHero, SiteShell, EnquiryCta } from '@/components/site-shell'
import { articles } from '@/lib/safari-data'

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  // Get related articles from the same category
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3)

  const articleContent: Record<string, { body: string[]; tips: string[] }> = {
    'when-to-go-uganda': {
      body: [
        'Uganda offers year-round safari experiences, but understanding the seasons helps you plan the perfect trip. The country\'s location near the equator means temperatures remain relatively consistent, but rainfall patterns significantly affect trail conditions, wildlife viewing, and accessibility.',
        'The dry seasons (June to September and December to February) are traditionally considered the best times for gorilla trekking and wildlife viewing. During these months, trails are more passable, vegetation is less dense making wildlife spotting easier, and the weather is more predictable for outdoor activities.',
        'The wet seasons (March to May and September to November) bring lush green landscapes and excellent birdwatching opportunities. While gorilla trekking is still possible, trails can be muddy and challenging. However, fewer tourists visit during these months, meaning more intimate experiences and better rates.',
      ],
      tips: [
        'June to September: Ideal for gorilla trekking with excellent weather and clear views.',
        'December to February: Best for game drives with dry conditions and active wildlife.',
        'March to May: Lush landscapes, birdwatching paradise, fewer crowds.',
        'September to November: Green scenery returns, wildlife abundant, atmospheric conditions excellent.',
      ],
    },
    'uganda-safari-guide': {
      body: [
        'Uganda is one of Africa\'s most rewarding safari destinations, offering unparalleled access to mountain gorillas, wild chimpanzees, and diverse ecosystems. Whether you\'re seeking intimate primate encounters or expansive savannah experiences, Uganda delivers experiences that rival anywhere on the continent.',
        'The country\'s geography provides incredible diversity in a relatively compact area. From the ancient rainforests of Bwindi and Kibale to the vast savannahs of Queen Elizabeth and Murchison Falls, Uganda offers multiple distinct wildlife habitats within a few hours of each other.',
        'What sets Uganda apart is the authenticity of the experience. The infrastructure is well-developed enough to be comfortable, yet wild enough to feel genuinely adventurous. Your guide will have deep local knowledge, your accommodation will feel like a home away from home, and the connections you make with communities will be genuine.',
      ],
      tips: [
        'Book gorilla permits well in advance as they are limited and in high demand.',
        'Combine multiple parks to experience Uganda\'s full diversity.',
        'Go during dry seasons for the best wildlife viewing opportunities.',
        'Allow at least 10 days to experience Uganda\'s major highlights properly.',
      ],
    },
    'gorilla-trekking-guide': {
      body: [
        'Gorilla trekking is one of the world\'s most profound wildlife experiences. Standing before a mountain gorilla in its natural habitat creates a moment of connection that many describe as life-changing. Understanding what to expect and how to prepare ensures you get the most from this extraordinary encounter.',
        'The trek itself is an adventure through pristine rainforest. Your experienced ranger will lead you along forest trails, reading signs and listening for gorilla vocalizations. The hike can take anywhere from 30 minutes to 8 hours depending on where the gorilla family is located on any given day.',
        'Once you find the gorillas, you have one hour to observe them at a respectful distance. During this time, you\'ll witness their natural behavior: mothers caring for young, silverbacks maintaining order within the family, and juveniles at play. It\'s an intimate glimpse into a complex society that parallels our own.',
      ],
      tips: [
        'Wear neutral colors (greens, grays, blacks) to blend into the forest environment.',
        'Bring sturdy, waterproof hiking boots with good ankle support.',
        'Stay physically fit: the trek involves challenging terrain and high altitude.',
        'Listen carefully to your ranger\'s instructions about distance and behavior.',
      ],
    },
    'uganda-national-parks': {
      body: [
        'Uganda protects its natural heritage through a network of 10 national parks and numerous wildlife reserves. Each park offers distinct ecosystems, wildlife, and experiences, making Uganda a destination where you can tailor your safari to exactly what interests you most.',
        'Bwindi Impenetrable National Park is home to approximately half of the world\'s remaining mountain gorillas. The rainforest is ancient and complex, requiring technical forest navigation skills from experienced trackers. Gorilla encounters here feel intimate and profound.',
        'Queen Elizabeth National Park combines diverse landscapes: savannah grasslands, crater lakes, and the life-giving Kazinga Channel. The park is famous for its tree-climbing lions, massive hippo populations, and exceptional birdwatching opportunities.',
        'Murchison Falls National Park features Uganda\'s most dramatic waterfall where the Nile River thunders through a narrow cleft in the earth. The park offers excellent game drives, boat safaris, and hiking opportunities in a grand wilderness setting.',
      ],
      tips: [
        'Research each park\'s specialties and choose based on your interests.',
        'Allow 2-3 days per park to experience it thoroughly.',
        'Combine parks for diverse experiences in a single trip.',
        'Hire experienced guides who know their park intimately.',
      ],
    },
  }

  const content = articleContent[article.slug] || {
    body: [
      'Welcome to this comprehensive guide. This article provides detailed information, practical tips, and insider knowledge to help you plan an unforgettable East African safari experience. Read through the sections below to learn everything you need to know about this topic.',
      'Whether you\'re a first-time safari traveler or a seasoned adventurer, this guide offers valuable insights and practical advice. We\'ve compiled information from years of on-the-ground experience to ensure you have accurate, up-to-date information for your journey.',
      'Our goal is to help you make informed decisions, prepare thoroughly, and ultimately have the most meaningful experience possible during your time in Uganda, Rwanda, or East Africa more broadly.',
    ],
    tips: [
      'Plan ahead and book critical elements (permits, accommodations) in advance.',
      'Travel with experienced guides who know the territory well.',
      'Stay flexible to take advantage of unexpected opportunities.',
      'Respect local communities and wildlife conservation principles.',
    ],
  }

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Safari Intel · Field notes"
          title={
            <>
              {article.title.split(' ')[0]}
              <br />
              <em>{article.title.split(' ').slice(1).join(' ')}</em>
            </>
          }
          intro={article.excerpt}
          image={article.image}
        />

        <article className="article-body section-wrap">
          <div className="article-body-copy">
            {content.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside className="intel-tip-card">
            <p className="eyebrow">Keep this close</p>
            <h2>Practical tips.</h2>
            <ul>
              {content.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
            <Link href="/contact" className="button dark">
              Ask our team <ArrowRight size={15} />
            </Link>
          </aside>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="section-wrap related-articles">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Related guides</p>
                <h2>
                  More to explore
                  <br />
                  <em>in {article.category.toLowerCase()}.</em>
                </h2>
              </div>
            </div>

            <div className="related-articles-grid">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.slug}
                  href={`/safari-intel/${relatedArticle.slug}`}
                  className="related-article-card"
                >
                  <img src={relatedArticle.image} alt={relatedArticle.title} />
                  <div className="card-content">
                    <p className="eyebrow">{relatedArticle.category}</p>
                    <h3>{relatedArticle.title}</h3>
                    <span className="text-link">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <EnquiryCta />
      </main>
    </SiteShell>
  )
}
