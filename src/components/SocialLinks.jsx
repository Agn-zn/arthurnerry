import { ExternalLink } from 'lucide-react'
import Reveal from './Reveal.jsx'

// Platform icon components
function SpotifyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 814 1000" fill="currentColor" aria-hidden="true">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.3-164-39.3c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.9 0 663.1 0 541.8 0 347.4 134.3 248 266.1 248c54 0 98.7 35.9 133.1 35.9 32.8 0 84.3-37.8 145.2-37.8 23.4 0 108.2 2.6 174.5 83.5zm-231-153.9c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

const platformConfig = [
  {
    key: 'spotify',
    label: 'Spotify',
    sublabel: 'Stream music',
    Icon: SpotifyIcon,
    color: '#1DB954',
  },
  {
    key: 'appleMusic',
    label: 'Apple Music',
    sublabel: 'Listen on Apple',
    Icon: AppleIcon,
    color: '#FC3C44',
  },
  {
    key: 'youtube',
    label: 'YouTube',
    sublabel: 'Watch & subscribe',
    Icon: YouTubeIcon,
    color: '#FF0000',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    sublabel: 'Follow along',
    Icon: InstagramIcon,
    color: '#E1306C',
  },
  {
    key: 'tiktok',
    label: 'TikTok',
    sublabel: 'Short videos',
    Icon: TikTokIcon,
    color: '#69C9D0',
  },
  {
    key: 'facebook',
    label: 'Facebook',
    sublabel: 'Official page',
    Icon: FacebookIcon,
    color: '#1877F2',
  },
]

export default function SocialLinks({ social }) {
  return (
    <section
      id="connect"
      className="bg-bg-primary py-24 md:py-32"
      aria-labelledby="connect-heading"
    >
      <div className="section-wrapper">
        <Reveal>
          <p className="section-label mb-3">Stay Connected</p>
          <h2
            id="connect-heading"
            className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-text-primary mb-4"
          >
            Find me wherever you listen.
          </h2>
          <p className="text-text-secondary text-sm md:text-base mb-14 max-w-lg">
            Stream, follow, and stay up to date on all platforms.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {platformConfig.map((platform, i) => {
            const url = social[platform.key]
            if (!url) return null
            return (
              <Reveal key={platform.key} delay={i * 0.06}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 border border-border-subtle/50 bg-bg-secondary/30 hover:border-accent-wine/40 hover:bg-bg-secondary/60 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-wine"
                  aria-label={`${platform.label} — ${platform.sublabel}`}
                >
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-11 h-11 flex items-center justify-center transition-all duration-300"
                    style={{ color: platform.color }}
                  >
                    <platform.Icon />
                  </div>

                  {/* Labels */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary group-hover:text-accent-champagne transition-colors duration-200">
                      {platform.label}
                    </p>
                    <p className="text-xs text-text-secondary truncate">{platform.sublabel}</p>
                  </div>

                  {/* Arrow */}
                  <ExternalLink
                    size={14}
                    className="flex-shrink-0 text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
