'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteShell, SectionHeading, PageHero, EnquiryCta } from '@/components/site-shell'

const communityProjects = [
  {
    title: 'Education & Scholarship',
    location: 'Kibale and Queen Elizabeth regions',
    description: 'Supporting local youth through education initiatives, scholarship programs, and skills training that create lasting opportunity in communities near our safari destinations.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bill-wegener-8ldqRkOk5oo-unsplash-LXQ6vz0BjZZPjYlcLvMC1wc8INJteu.jpg',
    impact: 'Scholarships awarded',
  },
  {
    title: 'Primate Conservation',
    location: 'Bwindi, Kibale, Murchison Falls',
    description: "Partnering with conservation organizations to protect habitats, support anti-poaching efforts, and ensure sustainable wildlife management across Uganda's protected areas.",
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/roman-nguyen-TBdSTcSwXxo-unsplash-I5IvWCVddkdZUum3BiQZeZeKJz47aS.jpg',
    impact: 'Hectares protected',
  },
  {
    title: 'Healthcare Access',
    location: 'Remote communities',
    description: 'Funding medical clinics and health awareness programs in areas where safari tourism has limited infrastructure, bringing basic healthcare and emergency services to underserved populations.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/andrew-s-QeEK1g70vdQ-unsplash-16YYnYnE59XpaUe2a7XWXLIb8IQAc9.jpg',
    impact: 'Communities served',
  },
  {
    title: 'Water & Sanitation',
    location: 'Village communities',
    description: 'Installing fresh water systems and sanitation facilities in villages, reducing waterborne disease and improving quality of life for families living near protected areas.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/andrew-s-qteTc4nGuc0-unsplash-EQ4jsT7Ch4hO6w0l6paju74YCMbPQI.jpg',
    impact: 'Wells installed',
  },
  {
    title: 'Local Guide Employment',
    location: 'Across Uganda',
    description: 'Training and employing local guides, rangers, and hospitality staff, creating dignified employment and ensuring communities directly benefit from tourism revenue.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zach-wear-zOoiOzayjK4-unsplash-nAMqmgXXB9d45lBNYAZ1XxOE8GvywF.jpg',
    impact: 'Jobs created',
  },
  {
    title: "Women's Economic Groups",
    location: 'Surrounding villages',
    description: "Supporting women's cooperatives with microfinance, craft training, and market access, enabling economic independence and entrepreneurship at the grassroots level.",
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lisa-marie-theck-j9HZWSKAgrA-unsplash-aUSHIoeZdJhgb82QjPV05KV7gTRjxW.jpg',
    impact: 'Women entrepreneurs',
  },
]

export default function CommunityPage() {
  const [galleryPage, setGalleryPage] = useState(0)
  const galleryPages = Array.from({ length: 3 }, (_, page) => communityProjects.map((project, index) => communityProjects[(index + page * 2) % communityProjects.length]))

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Our commitment"
          title={
            <>
              Travel with<br />
              <em>purpose.</em>
            </>
          }
          intro="Every safari with Sinza supports meaningful community development, conservation, and local opportunity across East Africa."
        />

        <section className="section-wrap">
          <SectionHeading
            eyebrow="Why we do this"
            title={
              <>
                Tourism that leaves<br />
                <em>something good.</em>
              </>
            }
            intro="Tourism changes communities. We believe it should change them for the better. Since 2015, Sinza has invested 15% of annual income into education, health, conservation, and economic opportunity in the regions where we work."
          />
          <div className="community-intro-text">
            <p>
              We don't believe in "corporate charity" or performative giving. Our approach is straightforward: listen to communities, partner with trusted organizations, fund practical projects, and measure real impact.
            </p>
            <p>
              When you travel with Sinza, you&apos;re directly contributing to scholarships, healthcare, water systems, wildlife protection, and dignified employment for families in Uganda and Rwanda.
            </p>
          </div>
        </section>

        <section className="section-wrap community-projects">
          <SectionHeading
            eyebrow="What we support"
            title={
              <>
                Practical work,<br />
                <em>real communities.</em>
              </>
            }
            intro="These are not photo-op projects. They're long-term commitments to the places and people who make our work possible."
          />
          <div className="community-grid">
            {communityProjects.map((project) => (
              <article className="community-card" key={project.title}>
                <img src={project.image} alt={project.title} />
                <div className="community-card-content">
                  <h3>{project.title}</h3>
                  <p className="community-location">{project.location}</p>
                  <p className="community-description">{project.description}</p>
                  <span className="community-impact-label">{project.impact}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap community-stories">
          <SectionHeading
            eyebrow="Stories from the field"
            title={
              <>
                Change takes<br />
                <em>many forms.</em>
              </>
            }
          />
          <div className="stories-grid">
            <article className="story-card">
              <div className="story-image">
                <img src="/images/wildlife-chimp-rainforest.jpg" alt="Education project" />
              </div>
              <h4>Education Beyond the Classroom</h4>
              <p>
                Through our scholarship program, over 150 students in Kibale have attended secondary school who otherwise could not afford it. Many are now teachers, healthcare workers, and community leaders themselves.
              </p>
            </article>

            <article className="story-card">
              <div className="story-image">
                <img src="/images/wildlife-hippos-water.jpg" alt="Water project" />
              </div>
              <h4>A Well Changes Everything</h4>
              <p>
                When we installed water systems in villages near Queen Elizabeth, children no longer walked hours each day for water. School attendance rose. Waterborne illness dropped 70%. One well. One massive difference.
              </p>
            </article>

            <article className="story-card">
              <div className="story-image">
                <img src="/images/wildlife-giraffe-safari.jpg" alt="Conservation project" />
              </div>
              <h4>Rhinos Return</h4>
              <p>
                Ziwa Rhino Sanctuary began with zero rhinos in Uganda. Through conservation partnership and anti-poaching support, the population has grown to over 30 — creating jobs, hope, and proof that recovery is possible.
              </p>
            </article>
          </div>
        </section>

        <section className="section-wrap community-gallery">
          <SectionHeading eyebrow="Community gallery" title={<>Small moments.<br /><em>Shared progress.</em></>} intro="A closer look at the people, places, and practical work behind Sinza’s purpose." />
          <div className={`community-gallery-grid collage-page-${galleryPage + 1}`}>
            {galleryPages[galleryPage].map((project, index) => <a className="community-gallery-tile" href={project.image} target="_blank" rel="noreferrer" key={`${project.title}-${galleryPage}-${index}`}><img src={project.image} alt={`${project.title} community project`} /><span>0{index + 1} · {project.title}</span></a>)}
          </div>
          <p className="gallery-page-label" aria-live="polite">Page {galleryPage + 1} of 3 · Showing the community story through a different collage</p>
          <div className="gallery-pagination" aria-label="Community gallery pages">
            <button type="button" className="gallery-arrow" onClick={() => setGalleryPage((galleryPage + 2) % 3)} aria-label="Previous gallery page">←</button>
            {[0, 1, 2].map((page) => <button type="button" className={galleryPage === page ? 'is-active' : ''} onClick={() => setGalleryPage(page)} aria-label={`Gallery page ${page + 1}`} aria-current={galleryPage === page ? 'page' : undefined} key={page}>{String(page + 1).padStart(2, '0')}</button>)}
            <button type="button" className="gallery-arrow" onClick={() => setGalleryPage((galleryPage + 1) % 3)} aria-label="Next gallery page">→</button>
          </div>
        </section>

        <section className="section-wrap community-get-involved">
          <div className="cta-block">
            <h2>Join the journey</h2>
            <p>
              Your safari with Sinza supports community development. You don't need to do anything extra — simply traveling thoughtfully means you're investing in education, conservation, healthcare, and opportunity.
            </p>
            <p>
              Want to do more? Bring a colleague, recommend Sinza to friends, or let us know if you'd like to support a specific community project during your visit.
            </p>
            <div className="button-row">
              <Link href="/donate" className="button dark">
                Donate to community work <ArrowRight size={16} />
              </Link>
              <a href="mailto:sinzasafaris@gmail.com" className="button outline-dark">
                Ask about community projects <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

      </main>
    </SiteShell>
  )
}
