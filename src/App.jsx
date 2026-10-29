import ArtistNavbar from './components/ArtistNavbar.jsx'
import ArtistHero from './components/ArtistHero.jsx'
import FeaturedMusic from './components/FeaturedMusic.jsx'
import ArtistStory from './components/ArtistStory.jsx'
import VisualJournal from './components/VisualJournal.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import LiveShows from './components/LiveShows.jsx'
import SaveContact from './components/SaveContact.jsx'
import ArtistFooter from './components/ArtistFooter.jsx'

import { artist } from './data/artist.js'
import { featuredRelease } from './data/releases.js'
import { events } from './data/events.js'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <a
        href="#music"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-wine focus:text-white focus:text-sm"
      >
        Skip to main content
      </a>

      <ArtistNavbar artistName={artist.name} />

      <main id="main">
        <ArtistHero artist={artist} featuredRelease={featuredRelease} />
        <FeaturedMusic featuredRelease={featuredRelease} />
        <ArtistStory artist={artist} />
        <VisualJournal />
        <SocialLinks social={artist.social} />
        <LiveShows events={events} bookingUrl={artist.contact.bookingUrl} />
        <SaveContact artist={artist} />
      </main>

      <ArtistFooter artist={artist} />
    </div>
  )
}
