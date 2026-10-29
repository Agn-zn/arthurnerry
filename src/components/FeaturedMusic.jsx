import { useState } from 'react'
import { motion } from 'motion/react'
import { ExternalLink, Music, PlayCircle } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { releases } from '../data/releases.js'

// Platform icon SVGs as components
function SpotifyIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

function AppleMusicIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208A7.37 7.37 0 00.05 5.08C.017 5.343.006 5.61 0 5.875V18.13c.024.692.093 1.376.3 2.043.479 1.527 1.476 2.572 2.972 3.154.765.3 1.563.382 2.373.404.217.006.435.013.652.013h11.344c.63 0 1.258-.024 1.882-.107 1.33-.176 2.434-.74 3.276-1.768a5.465 5.465 0 001.065-2.34c.12-.58.17-1.173.18-1.768v-.39c0-.042.01-.082.01-.124V6.124zm-7.554 12.066c0 .55-.445.994-.994.994H8.554a.994.994 0 01-.994-.994V5.81c0-.55.445-.994.994-.994h6.892c.55 0 .994.445.994.994v12.38zM12 6.124a5.876 5.876 0 100 11.752A5.876 5.876 0 0012 6.124zm0 9.624a3.748 3.748 0 110-7.496 3.748 3.748 0 010 7.496zM12 9a3 3 0 100 6 3 3 0 000-6z" />
    </svg>
  )
}

function YouTubeIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  )
}

export default function FeaturedMusic({ featuredRelease }) {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <section id="music" className="bg-bg-secondary py-24 md:py-32" aria-labelledby="music-heading">
      <div className="section-wrapper">
        {/* Section header */}
        <Reveal>
          <p className="section-label mb-3">The Music</p>
          <h2
            id="music-heading"
            className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-text-primary mb-16"
          >
            Press Play.
          </h2>
        </Reveal>

        {/* Featured release */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Artwork */}
          <Reveal delay={0.1}>
            <div className="relative group">
              <motion.div
                className="relative overflow-hidden aspect-square max-w-sm mx-auto lg:max-w-none"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={featuredRelease.artworkUrl}
                  alt={`${featuredRelease.title} by ${featuredRelease.artist} — release artwork`}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  } group-hover:scale-105`}
                  loading="lazy"
                  onLoad={() => setImgLoaded(true)}
                />
                {/* Artwork overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              {/* Decorative border offset */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full border border-accent-wine/20 -z-10"
                aria-hidden="true"
              />
            </div>
          </Reveal>

          {/* Release info */}
          <Reveal delay={0.2} className="flex flex-col justify-center">
            <p className="section-number mb-6">
              {featuredRelease.type} · {featuredRelease.year}
            </p>
            <h3 className="font-serif text-5xl md:text-6xl text-text-primary mb-3 italic">
              {featuredRelease.title}
            </h3>
            <p className="text-sm tracking-widest uppercase text-text-secondary mb-6">
              {featuredRelease.artist}
            </p>
            <div className="divider mb-6" />
            <p className="text-text-secondary leading-relaxed mb-10 text-sm md:text-base">
              {featuredRelease.description}
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={featuredRelease.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label={`Listen to ${featuredRelease.title} on Spotify`}
              >
                <SpotifyIcon size={18} />
                LISTEN ON SPOTIFY
              </a>
              {featuredRelease.appleMusicUrl && (
                <a
                  href={featuredRelease.appleMusicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  aria-label={`Listen to ${featuredRelease.title} on Apple Music`}
                >
                  <AppleMusicIcon size={18} />
                  Apple Music
                </a>
              )}
            </div>

            {featuredRelease.youtubeUrl && (
              <a
                href={featuredRelease.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-4 self-start"
                aria-label={`Watch ${featuredRelease.title} on YouTube`}
              >
                <YouTubeIcon size={16} />
                Watch on YouTube
                <ExternalLink size={12} />
              </a>
            )}
          </Reveal>
        </div>

        {/* Spotify embed */}
        {featuredRelease.spotifyEmbedUrl && (
          <Reveal delay={0.1} className="mb-24">
            <div className="spotify-embed-container border border-border-subtle/30">
              <iframe
                src={featuredRelease.spotifyEmbedUrl}
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`Spotify player — ${featuredRelease.title} by ${featuredRelease.artist}`}
              />
            </div>
          </Reveal>
        )}

        {/* More releases */}
        <Reveal>
          <div className="border-t border-border-subtle/40 pt-12">
            <p className="section-label mb-8">More Releases</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
              {releases.map((release, i) => (
                <Reveal key={release.id} delay={i * 0.07}>
                  <a
                    href={release.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-wine"
                    aria-label={`Listen to ${release.title} on Spotify`}
                  >
                    <div className="relative overflow-hidden aspect-square mb-3">
                      <img
                        src={release.artworkUrl}
                        alt={`${release.title} artwork`}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <PlayCircle size={28} className="text-text-primary" />
                      </div>
                    </div>
                    <p className="text-xs font-medium text-text-primary truncate mb-0.5 group-hover:text-accent-champagne transition-colors duration-200">
                      {release.title}
                    </p>
                    <p className="text-xs text-text-secondary truncate">{release.type}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
