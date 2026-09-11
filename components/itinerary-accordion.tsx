'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { SafariDay } from '@/lib/safari-data'
import './itinerary-accordion.css'

export function ItineraryAccordion({ days }: { days: SafariDay[] }) {
  const [activeDay, setActiveDay] = useState<number>(0)

  return (
    <div className="itinerary-accordion">
      {days.map((day, index) => (
        <div
          key={`${day.day}-${index}`}
          className={`accordion-item ${activeDay === index ? 'active' : ''}`}
        >
          <button
            className="accordion-trigger"
            onClick={() => setActiveDay(activeDay === index ? -1 : index)}
            aria-expanded={activeDay === index}
          >
            <div className="accordion-header">
              <span className="day-number">{day.day}</span>
              <h4 className="day-title">{day.title}</h4>
            </div>
            <ChevronDown
              size={20}
              className={`chevron ${activeDay === index ? 'open' : ''}`}
            />
          </button>

          {activeDay === index && (
            <div className="accordion-content">
              <ul className="details-list">
                {day.details.map((detail, idx) => (
                  <li key={idx}>
                    <span className="detail-bullet" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
