import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2000&q=85',
    alt: 'Luxury villa exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    alt: 'Modern home with pool',
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85',
    alt: 'Contemporary residential building',
  },
  {
    src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=2000&q=85',
    alt: 'Premium home construction',
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-[88vh] overflow-hidden text-white">

      {/* Slides — instant swap, no animation */}
      <img
        key={current}
        src={slides[current].src}
        alt={slides[current].alt}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Light gradient — keeps text readable without darkening image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      {/* Content */}
      <div className="container-main relative flex h-full min-h-[88vh] items-center py-24">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[3.25rem]"
          >
            Crafting Homes<br />Chennai Families<br />Trust for Over<br />20 Years
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-base leading-relaxed text-slate-100 sm:text-lg"
          >
            TNP Homes — over 20 years of trusted home building in Chennai,
            delivering expert architecture, interior design, and renovation services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <Link
              to="/contact"
              className="inline-block rounded bg-brand-yellow px-7 py-3.5 text-sm font-bold tracking-widest text-white-900 transition hover:bg-yellow-400"
            >
              Contact Us for a Free Consultation
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-7 bg-brand-yellow' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
