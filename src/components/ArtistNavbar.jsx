import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#music', label: 'Music' },
  { href: '#story', label: 'Story' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#shows', label: 'Shows' },
  { href: '#connect', label: 'Connect' },
]

export default function ArtistNavbar({ artistName }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change / resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle/40' : 'bg-transparent'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <nav
          className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 max-w-7xl mx-auto"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo / Artist name */}
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, '#top')}
            className="text-sm font-medium tracking-widest2 uppercase text-text-primary hover:text-accent-champagne transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-wine"
            aria-label={`${artistName} — back to top`}
          >
            <span className="font-serif italic text-accent-champagne mr-1">A</span>
            {artistName.split(' ')[1] || artistName}
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs font-medium tracking-widest uppercase text-text-secondary hover:text-text-primary transition-colors duration-200 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-wine"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent-wine transition-all duration-300 group-hover:w-full" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-wine"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-bg-primary/98 backdrop-blur-xl flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav>
              <ul className="flex flex-col items-center gap-8" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-3xl font-serif italic text-text-primary hover:text-accent-champagne transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-wine"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.p
              className="absolute bottom-10 text-xs tracking-widest uppercase text-text-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              ARTIST ID
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
