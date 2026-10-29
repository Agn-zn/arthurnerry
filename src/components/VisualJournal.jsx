import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { galleryImages, galleryCategories } from '../data/gallery.js'

function LightboxModal({ images, currentIndex, onClose, onPrev, onNext }) {
  const prefersReduced = useReducedMotion()
  const image = images[currentIndex]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <motion.div
      className="fixed inset-0 z-50 lightbox-overlay flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: prefersReduced ? 0 : 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Lightbox — ${image.alt}`}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-5 z-10 p-3 text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-wine"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      {/* Counter */}
      <p
        className="absolute top-5 left-5 text-xs tracking-widest text-text-secondary"
        aria-live="polite"
      >
        {currentIndex + 1} / {images.length}
      </p>

      {/* Prev */}
      <button
        className="absolute left-4 z-10 p-3 text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-wine"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={image.id}
          className="max-w-4xl max-h-[85vh] mx-16 flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: prefersReduced ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: prefersReduced ? 1 : 0.96 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[75vh] max-w-full object-contain"
          />
          {image.caption && (
            <p className="text-xs tracking-widest uppercase text-text-secondary">
              {image.caption}
            </p>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Next */}
      <button
        className="absolute right-4 z-10 p-3 text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-wine"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next image"
      >
        <ChevronRight size={28} />
      </button>
    </motion.div>
  )
}

export default function VisualJournal() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const prefersReduced = useReducedMotion()

  const filtered = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = useCallback((idx) => setLightboxIndex(idx), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevImage = useCallback(() =>
    setLightboxIndex((i) => (i === 0 ? filtered.length - 1 : i - 1)), [filtered.length])
  const nextImage = useCallback(() =>
    setLightboxIndex((i) => (i === filtered.length - 1 ? 0 : i + 1)), [filtered.length])

  return (
    <>
      <section
        id="gallery"
        className="bg-bg-secondary py-24 md:py-32"
        aria-labelledby="gallery-heading"
      >
        <div className="section-wrapper">
          {/* Header */}
          <Reveal>
            <p className="section-label mb-3">Through the Lens</p>
            <h2
              id="gallery-heading"
              className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-text-primary mb-10"
            >
              Moments in between.
            </h2>
          </Reveal>

          {/* Category filter */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-12" role="tablist" aria-label="Gallery categories">
              {galleryCategories.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs tracking-widest uppercase font-medium transition-all duration-200 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-wine ${
                    activeCategory === cat.id
                      ? 'bg-accent-wine border-accent-wine text-text-primary'
                      : 'bg-transparent border-border-subtle text-text-secondary hover:border-text-secondary hover:text-text-primary'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Masonry grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="gallery-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.3 }}
            >
              {filtered.map((image, i) => (
                <div key={image.id} className="gallery-item">
                  <motion.button
                    className="group relative w-full block overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-wine"
                    onClick={() => openLightbox(i)}
                    whileHover={{ scale: prefersReduced ? 1 : 1.015 }}
                    transition={{ duration: 0.3 }}
                    aria-label={`Open photo: ${image.alt}`}
                  >
                    <img
                      src={image.thumb}
                      alt={image.alt}
                      className="w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-90"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ZoomIn size={24} className="text-text-primary" />
                    </div>
                    {/* Caption */}
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-bg-primary/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-xs text-text-secondary tracking-wide">{image.caption}</p>
                      </div>
                    )}
                  </motion.button>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <LightboxModal
            images={filtered}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </>
  )
}
