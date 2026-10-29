import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ChevronDown, Play, UserPlus } from 'lucide-react'

export default function ArtistHero({ artist, featuredRelease }) {
  const [loaded, setLoaded] = useState(false)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    const img = new Image()
    img.src = artist.heroImage
    img.onload = () => setLoaded(true)
    img.onerror = () => setLoaded(true)
  }, [artist.heroImage])

  const scrollToMusic = () => {
    document.querySelector('#music')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToConnect = () => {
    document.querySelector('#connect')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 0.1, 0.25, 1] } },
  }

  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden"
      aria-label="Artist hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-full h-full"
          initial={{ scale: prefersReduced ? 1 : 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeOut' }}
        >
          <img
            src={artist.heroImage}
            alt={`${artist.name} — artist portrait`}
            className={`w-full h-full object-cover object-top transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            fetchpriority="high"
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/70 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 20% 50%, #8F344730 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-16 md:px-12 lg:px-20 xl:px-32 max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Label */}
          <motion.p variants={itemVariants} className="section-label mb-4">
            ARTIST ID — Concept Demo
          </motion.p>

          {/* Artist name */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight text-text-primary mb-4"
            style={{ textShadow: '0 2px 40px rgba(0,0,0,0.6)' }}
          >
            <span className="block italic text-gradient-champagne">
              {artist.firstName}
            </span>
            <span className="block text-text-primary">
              {artist.lastName.toUpperCase()}
            </span>
          </motion.h1>

          {/* Descriptor */}
          <motion.p
            variants={itemVariants}
            className="text-sm font-medium tracking-widest uppercase text-text-secondary mb-3"
          >
            {artist.descriptor}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-text-secondary font-light max-w-md mb-10 leading-relaxed"
          >
            {artist.heroTagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <button
              onClick={scrollToMusic}
              className="btn-primary group"
              aria-label="Listen to Arthur Nery's music"
            >
              <Play
                size={16}
                className="transition-transform duration-200 group-hover:scale-110"
                fill="currentColor"
              />
              LISTEN NOW
            </button>
            <button
              onClick={scrollToConnect}
              className="btn-secondary"
              aria-label="Connect with Arthur Nery"
            >
              <UserPlus size={16} />
              CONNECT
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          className="absolute bottom-8 right-6 md:right-12 lg:right-20 flex flex-col items-center gap-2 text-text-secondary hover:text-text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-wine"
          onClick={scrollToMusic}
          aria-label="Scroll to music section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <span className="text-xs tracking-widest uppercase rotate-90 origin-center mb-1 hidden sm:block">
            Scroll
          </span>
          <motion.div
            animate={prefersReduced ? {} : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.button>
      </div>

      {/* Bottom edge fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent z-10"
        aria-hidden="true"
      />
    </section>
  )
}
