import Reveal from './Reveal.jsx'

export default function ArtistStory({ artist }) {
  // Split longBio on \n for paragraph rendering
  const bioParagraphs = artist.longBio.split('\n').filter(Boolean)

  return (
    <section
      id="story"
      className="bg-bg-primary py-24 md:py-32"
      aria-labelledby="story-heading"
    >
      <div className="section-wrapper">
        {/* Section header */}
        <Reveal>
          <p className="section-label mb-3">Behind the Music</p>
          <h2
            id="story-heading"
            className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-text-primary mb-16"
          >
            The person behind the songs.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <Reveal className="lg:col-span-2" delay={0.1}>
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src={artist.portraitImage}
                  alt={`${artist.name} — artist portrait`}
                  className="w-full object-cover object-top aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] grayscale contrast-110"
                  loading="lazy"
                  style={{ filter: 'grayscale(30%) contrast(1.05) brightness(0.92)' }}
                />
              </div>
              {/* Accent frame */}
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 border border-accent-wine/30"
                aria-hidden="true"
              />
              {/* Genre badge */}
              <div className="absolute top-4 right-4 bg-bg-primary/80 backdrop-blur-sm px-3 py-2 border border-border-subtle/60">
                <p className="text-xs tracking-widest uppercase text-accent-champagne">
                  {artist.genre}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Bio content */}
          <div className="lg:col-span-3 flex flex-col justify-start pt-0 lg:pt-4">
            <Reveal delay={0.15}>
              <div className="space-y-6 mb-10">
                {bioParagraphs.map((para, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed ${
                      i === 0
                        ? 'text-base md:text-lg text-text-primary font-light'
                        : 'text-sm md:text-base text-text-secondary'
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="border-l-2 border-accent-wine pl-6 mb-10">
                <p className="font-serif italic text-lg md:text-xl text-text-primary leading-relaxed">
                  &ldquo;I write for people who feel things deeply and quietly.&rdquo;
                </p>
                <p className="text-xs tracking-widest uppercase text-text-secondary mt-3">
                  — Representative quote for concept purposes
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-border-subtle/40 pt-8">
                <div>
                  <p className="text-xs tracking-widest uppercase text-text-secondary mb-1">Origin</p>
                  <p className="text-sm text-text-primary font-medium">{artist.origin}</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-text-secondary mb-1">Genre</p>
                  <p className="text-sm text-text-primary font-medium">R&B · Soul</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-text-secondary mb-1">Language</p>
                  <p className="text-sm text-text-primary font-medium">Filipino · English</p>
                </div>
              </div>
            </Reveal>

            {/* Disclaimer */}
            <Reveal delay={0.35}>
              <p className="text-xs text-text-secondary/50 mt-8 leading-relaxed border-t border-border-subtle/20 pt-6">
                This is an independent concept demonstration. Biography based on verified public information. 
                Not affiliated with or endorsed by Arthur Nery or his management.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
