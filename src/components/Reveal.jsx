import { useRef, useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

/**
 * Reveal — scroll-triggered entrance animation wrapper.
 * Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  y = 28,
  once = true,
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  if (prefersReduced) {
    return <div ref={ref} className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}
