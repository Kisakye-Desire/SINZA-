'use client'

import { Check, Heart, Leaf, Users, Globe } from 'lucide-react'
import Link from 'next/link'
import { SiteShell, PageHero, SectionHeading, EnquiryCta } from '@/components/site-shell'

export default function AboutPage() {
  const values = [
    ['Tailor-made itineraries', 'Built around your purpose, style and interests.'],
    ['Local expertise', 'Uganda-based team who know every detail that matters.'],
    ['Responsible travel', 'Journeys that respect wildlife, culture and community.'],
    ['15% for impact', 'A portion of annual income supports local projects.'],
  ]

  const philosophy = [
    {
      icon: Heart,
      title: 'Meaningful Connection',
      text: 'We believe safaris are more than wildlife viewing—they&apos;re about genuine connection with people, places, and nature.',
    },
    {
      icon: Leaf,
      title: 'Conservation First',
      text: 'Every journey we design prioritizes wildlife protection and habitat preservation across East Africa&apos;s greatest ecosystems.',
    },
    {
      icon: Users,
      title: 'Community Benefit',
      text: 'We partner with local guides and enterprises, ensuring tourism directly supports the communities we visit.',
    },
    {
      icon: Globe,
      title: 'Sustainable Practice',
      text: 'From carbon-neutral operations to responsible wildlife encounters, we travel with intention.',
    },
  ]

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Our story"
          title={
            <>
              Travel that
              <br />
              <em>leaves good behind.</em>
            </>
          }
          intro="Sinza Safaris is a Ugandan-owned travel company creating meaningful journeys through East Africa. We believe the best safaris transform people, protect wildlife, and strengthen communities."
          image="/images/primates/chimp-forest-portrait.jpg"
        />

        {/* Company Story */}
        <section className="section-wrap">
          <div className="story-grid">
            <div>
              <SectionHeading
                eyebrow="Our Journey"
                title={
                  <>
                    Born in the
                    <br />
                    <em>heart of Uganda.</em>
                  </>
                }
                intro="Sinza Safaris began with a simple belief: that authentic, purposeful travel can change lives—for travelers and communities alike."
              />
              <div className="story-content">
                <p>
                  Founded by Ugandan conservationists and hospitality experts, Sinza Safaris emerged from years of guiding, conservation work, and a deep frustration with extractive tourism. We saw travelers hungry for real connection and communities who deserved better than tourism passing them by.
                </p>
                <p>
                  Every safari we craft is a conversation—not a checklist. We listen to what moves you, where your curiosity leads, and what kind of impact you want to make. Then we design a journey that meets you there.
                </p>
                <p>
                  Today, we&apos;re proud to lead private safaris across Uganda and Rwanda, with a team of field guides, conservation partners, and local specialists who live the destinations we share.
                </p>
              </div>
            </div>
            <img
              src="/images/primates/chimps-family-road.jpg"
              alt="Chimpanzee family walking through forest"
              className="story-image"
            />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-wrap mission-vision-wrap">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <p className="eyebrow">Our Mission</p>
              <h3>Create transformative travel experiences</h3>
              <p>
                We craft personalized safari journeys that connect travelers with Africa&apos;s wild places while supporting conservation, strengthening communities, and living out our commitment to Christian values of stewardship and service.
              </p>
            </div>
            <div className="vision-card">
              <p className="eyebrow">Our Vision</p>
              <h3>Lead the future of purpose-driven tourism</h3>
              <p>
                To become East Africa&apos;s most trusted safari company—known for transformative experiences, genuine community partnership, and unwavering commitment to conservation and sustainability.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Sinza */}
        <section className="section-wrap">
          <SectionHeading
            eyebrow="Why Sinza"
            title={
              <>
                Good journeys
                <br />
                <em>matter.</em>
              </>
            }
            intro="We believe travel can refresh the soul, inspire the spirit, and positively impact the places we visit. Here&apos;s what sets us apart:"
          />
          <div className="value-grid">
            {values.map(([title, text]) => (
              <div className="value-card" key={title}>
                <Check size={18} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Travel Philosophy */}
        <section className="section-wrap philosophy-wrap">
          <SectionHeading
            eyebrow="Our Philosophy"
            title={
              <>
                Safari as
                <br />
                <em>transformation.</em>
              </>
            }
            intro="Four principles guide everything we do:"
          />
          <div className="philosophy-grid">
            {philosophy.map(({ icon: Icon, title, text }, idx) => (
              <div className="philosophy-card" key={idx}>
                <Icon size={28} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Responsible Tourism */}
        <section className="section-wrap responsible-wrap">
          <div className="responsible-grid">
            <img
              src="/images/big-five/giraffe-single.jpg"
              alt="Giraffe in natural habitat"
              className="responsible-image"
            />
            <div>
              <SectionHeading
                eyebrow="Responsible Tourism"
                title={
                  <>
                    Conservation is
                    <br />
                    <em>core to everything.</em>
                  </>
                }
                intro="Our commitment to East Africa&apos;s ecosystems isn&apos;t separate from our business—it is our business."
              />
              <div className="responsible-content">
                <div className="responsible-item">
                  <h4>Wildlife Protection</h4>
                  <p>We partner with conservation organizations and protected areas. Your safari fees directly support habitat protection and anti-poaching efforts.</p>
                </div>
                <div className="responsible-item">
                  <h4>Community Partnership</h4>
                  <p>15% of our annual income funds education, healthcare, and economic initiatives in the communities we visit. Local guides and enterprises are central to every journey.</p>
                </div>
                <div className="responsible-item">
                  <h4>Sustainable Practice</h4>
                  <p>Small group sizes, ethical wildlife encounters, and low-impact operations mean we leave places better than we found them.</p>
                </div>
                <div className="responsible-item">
                  <h4>Long-term Impact</h4>
                  <p>We measure success not by bookings, but by the families educated, the animals protected, and the relationships deepened.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Teaser */}
        <section className="section-wrap team-teaser-wrap">
          <div className="team-teaser">
            <SectionHeading
              eyebrow="Our Team"
              title={
                <>
                  Guides who
                  <br />
                  <em>know the way.</em>
                </>
              }
              intro="Our team of field naturalists, conservationists, and hospitality experts bring decades of East African experience to every journey."
            />
            <Link href="/company/team" className="button dark">
              Meet the team
            </Link>
          </div>
        </section>

        <EnquiryCta />
      </main>
    </SiteShell>
  )
}
