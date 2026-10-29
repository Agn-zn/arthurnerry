import { Calendar, MapPin, Ticket, ExternalLink } from 'lucide-react'
import Reveal from './Reveal.jsx'

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00')
  return {
    day: date.toLocaleDateString('en-PH', { day: '2-digit' }),
    month: date.toLocaleDateString('en-PH', { month: 'short' }).toUpperCase(),
    year: date.toLocaleDateString('en-PH', { year: 'numeric' }),
    full: date.toLocaleDateString('en-PH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
  }
}

function isPastDate(dateStr) {
  return new Date(dateStr + 'T00:00:00') < new Date()
}

export default function LiveShows({ events, bookingUrl }) {
  const upcomingEvents = events.filter((e) => !isPastDate(e.date))
  const hasEvents = upcomingEvents.length > 0

  return (
    <section
      id="shows"
      className="bg-bg-secondary py-24 md:py-32"
      aria-labelledby="shows-heading"
    >
      <div className="section-wrapper">
        <Reveal>
          <p className="section-label mb-3">Live &amp; Inquiries</p>
          <h2
            id="shows-heading"
            className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-text-primary mb-16"
          >
            Let&rsquo;s make something happen.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Events list */}
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-xs tracking-widest uppercase text-text-secondary mb-6">
                Upcoming Shows
              </p>
            </Reveal>

            {!hasEvents ? (
              <Reveal delay={0.1}>
                <div className="border border-border-subtle/40 px-6 py-10 text-center">
                  <Calendar size={28} className="text-text-secondary mx-auto mb-4 opacity-40" />
                  <p className="text-text-secondary text-sm">
                    No upcoming shows announced at this time.
                  </p>
                  <p className="text-text-secondary/50 text-xs mt-2">
                    Check back soon or follow on social media for updates.
                  </p>
                </div>
              </Reveal>
            ) : (
              <div className="space-y-px">
                {upcomingEvents.map((event, i) => {
                  const d = formatDate(event.date)
                  return (
                    <Reveal key={event.id} delay={i * 0.08}>
                      <div
                        className={`group flex items-start gap-5 p-5 border border-border-subtle/40 hover:border-accent-wine/30 hover:bg-bg-primary/30 transition-all duration-300 ${
                          event.isHeadline ? 'border-l-2 border-l-accent-wine' : ''
                        }`}
                      >
                        {/* Date block */}
                        <div className="flex-shrink-0 w-14 text-center">
                          <p className="text-2xl font-serif font-bold text-accent-champagne leading-none">
                            {d.day}
                          </p>
                          <p className="text-xs tracking-widest uppercase text-text-secondary mt-0.5">
                            {d.month}
                          </p>
                          <p className="text-xs text-text-secondary/60">{d.year}</p>
                        </div>

                        {/* Event info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-text-primary mb-1 group-hover:text-accent-champagne transition-colors duration-200">
                            {event.name}
                          </p>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                            <span className="flex items-center gap-1 text-xs text-text-secondary">
                              <MapPin size={11} />
                              {event.venue}
                            </span>
                            <span className="text-xs text-text-secondary/60">{event.location}</span>
                          </div>
                        </div>

                        {/* Ticket link */}
                        <div className="flex-shrink-0">
                          {event.isSoldOut ? (
                            <span className="text-xs tracking-widest uppercase text-text-secondary/50 border border-border-subtle/40 px-3 py-1.5">
                              Sold Out
                            </span>
                          ) : (
                            <a
                              href={event.ticketUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent-champagne hover:text-text-primary border border-accent-wine/40 hover:border-accent-champagne px-3 py-1.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-wine"
                              aria-label={`Get tickets for ${event.name}`}
                            >
                              <Ticket size={12} />
                              Tickets
                            </a>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            )}
          </div>

          {/* Booking / Professional inquiries */}
          <div className="lg:col-span-2">
            <Reveal delay={0.15}>
              <p className="text-xs tracking-widest uppercase text-text-secondary mb-6">
                Professional Inquiries
              </p>
              <div className="border border-border-subtle/40 p-6 md:p-8">
                <p className="text-sm text-text-secondary leading-relaxed mb-8">
                  For bookings, events, festival appearances, brand partnerships, and media
                  inquiries — reach out through the official channel.
                </p>

                {/* Inquiry types */}
                <ul className="space-y-3 mb-8" role="list">
                  {[
                    'Concert & Festival Bookings',
                    'Brand Partnerships',
                    'Media & Press Inquiries',
                    'Music Collaborations',
                    'Corporate Events',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-xs text-text-secondary">
                      <span
                        className="w-1 h-1 rounded-full bg-accent-wine flex-shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={bookingUrl}
                  target={bookingUrl.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                  aria-label="Contact for booking and inquiries"
                >
                  <ExternalLink size={15} />
                  BOOKING &amp; INQUIRIES
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
