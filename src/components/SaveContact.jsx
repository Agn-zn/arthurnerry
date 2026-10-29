import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { UserPlus, Download, Check, Smartphone } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { downloadVCard } from '../utils/generateVCard.js'

export default function SaveContact({ artist }) {
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(false)

  const hasContactInfo = !!(artist.contact.email || artist.contact.phone)

  const handleSave = () => {
    if (!hasContactInfo || loading) return
    setLoading(true)
    try {
      downloadVCard({
        name: artist.contact.name || artist.name,
        email: artist.contact.email,
        phone: artist.contact.phone,
        org: artist.contact.org,
        website: artist.contact.website,
        title: artist.descriptor,
        instagram: artist.social.instagram,
        spotify: artist.social.spotify,
      })
      setSaved(true)
      setTimeout(() => setSaved(false), 3500)
    } catch (err) {
      console.error('vCard generation failed:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      className="bg-bg-primary border-t border-border-subtle/30 py-20 md:py-28"
      aria-labelledby="save-contact-heading"
    >
      <div className="section-wrapper">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full border border-accent-wine/30 flex items-center justify-center">
                <Smartphone size={28} className="text-accent-wine" />
              </div>
            </div>
            <p className="section-label mb-4">ARTIST ID Feature</p>
            <h2
              id="save-contact-heading"
              className="font-serif italic text-3xl md:text-4xl text-text-primary mb-4"
            >
              Save to your contacts.
            </h2>
            <p className="text-text-secondary text-sm md:text-base mb-10 leading-relaxed">
              Download a vCard to keep {artist.firstName}&rsquo;s professional details —
              email, links, and management info — right in your phone.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            {hasContactInfo ? (
              <button
                onClick={handleSave}
                disabled={loading || saved}
                className={`btn-primary mx-auto transition-all duration-300 ${
                  saved ? 'bg-green-800 border-green-700' : ''
                }`}
                aria-label={saved ? 'Contact saved' : `Save ${artist.name}'s contact`}
              >
                <AnimatePresence mode="wait">
                  {saved ? (
                    <motion.span
                      key="saved"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                    >
                      <Check size={16} />
                      CONTACT SAVED
                    </motion.span>
                  ) : (
                    <motion.span
                      key="save"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                    >
                      <Download size={16} />
                      SAVE CONTACT (.VCF)
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            ) : (
              <div className="inline-flex items-center gap-2 px-7 py-3.5 border border-border-subtle/40 text-text-secondary/50 text-sm tracking-widest uppercase cursor-not-allowed">
                <UserPlus size={16} />
                CONTACT INFO NOT CONFIGURED
              </div>
            )}
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xs text-text-secondary/40 mt-6">
              Compatible with iOS Contacts, Google Contacts, and most mobile address books.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
