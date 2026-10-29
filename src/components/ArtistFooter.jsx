import { ChevronUp } from 'lucide-react'

const year = new Date().getFullYear()

function SpotifyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  )
}

export default function ArtistFooter({ artist }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-bg-primary border-t border-border-subtle/30 py-12 md:py-16" role="contentinfo">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
          {/* Artist monogram + tagline */}
          <div className="text-center md:text-left">
            <p className="font-serif text-5xl text-accent-champagne italic mb-2 leading-none">
              {artist.firstName[0]}{artist.lastName[0]}
            </p>
            <p className="text-xs tracking-widest uppercase text-text-secondary">
              {artist.name}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            {artist.social.spotify && (
              <a
                href={artist.social.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-champagne transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-wine"
                aria-label="Spotify"
              >
                <SpotifyIcon />
              </a>
            )}
            {artist.social.instagram && (
              <a
                href={artist.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-champagne transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-wine"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            )}
            {artist.social.youtube && (
              <a
                href={artist.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-champagne transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-wine"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
            )}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex flex-col items-center gap-2 text-text-secondary hover:text-text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-wine group"
            aria-label="Back to top"
          >
            <ChevronUp size={18} className="group-hover:-translate-y-1 transition-transform duration-200" />
            <span className="text-xs tracking-widest uppercase">Top</span>
          </button>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-subtle/20 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-secondary/40 text-center sm:text-left">
            &copy; {year} {artist.name}. This is an independent concept demonstration.
            Not affiliated with or endorsed by the artist.
          </p>
          <p className="text-xs text-text-secondary/30 tracking-widest uppercase text-center">
            Powered by <span className="text-accent-wine/60">ARTIST ID</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
