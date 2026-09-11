'use client'

import { useState, useRef, useEffect } from 'react'
import './review-marquee.css'

interface Review {
  quote: string
  name: string
  detail?: string
  rating?: number
}

export function ReviewMarquee({ reviews }: { reviews: Review[] }) {
  const [isPaused, setIsPaused] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews]

  return (
    <div
      className="review-marquee-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`review-marquee-track ${isPaused ? 'paused' : ''}`} ref={trackRef}>
        {duplicatedReviews.map((review, index) => (
          <div key={`${index}-${review.name}`} className="review-marquee-item">
            <div className="review-marquee-content">
              <p className="review-quote">"{review.quote}"</p>
              <div className="review-meta">
                <p className="review-name">{review.name}</p>
                {review.detail && <p className="review-detail">{review.detail}</p>}
                {review.rating && (
                  <p className="review-rating">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
