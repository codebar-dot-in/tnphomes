import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'

const VISIBLE = 3 // cards shown at once on desktop

export default function FeaturedProjectsSection() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)

  const maxIndex = projects.length - VISIBLE

  const go = (step) => {
    setDir(step)
    setIndex((i) => Math.max(0, Math.min(i + step, maxIndex)))
  }

  const visible = projects.slice(index, index + VISIBLE)

  return (
    <section className="bg-white py-16">
      <div className="container-main">

        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-widest text-brand-slate sm:text-3xl">
            Our Featured Projects
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-12 bg-brand-yellow" />
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Discover our portfolio of residential and commercial projects — a testament to
            20+ years of quality craftsmanship across Chennai and Tamil Nadu.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev arrow */}
          <button
            onClick={() => go(-1)}
            disabled={index === 0}
            aria-label="Previous"
            className="absolute -left-5 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow transition hover:border-brand-yellow hover:text-brand-yellow disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                initial={{ opacity: 0, x: dir > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir > 0 ? -60 : 60 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {visible.map((project) => (
                  <Link
                    key={project.id}
                    to={`/projects/${project.id}`}
                    className="group block overflow-hidden rounded-xl border border-slate-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-md"
                  >
                    {/* Image */}
                    <div className="overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Info */}
                    <div className="px-4 py-4">
                      <p className="flex items-center gap-1.5 text-xs text-slate-400">
                        <MapPin size={12} className="text-brand-yellow" />
                        {project.location}
                      </p>
                      <h3 className="mt-1.5 text-sm font-extrabold text-brand-slate leading-snug">
                        {project.title}
                      </h3>
                      <div className="mt-2 h-0.5 w-6 bg-brand-yellow" />
                      <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-2">
                        {project.summary}
                      </p>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next arrow */}
          <button
            onClick={() => go(1)}
            disabled={index >= maxIndex}
            aria-label="Next"
            className="absolute -right-5 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow transition hover:border-brand-yellow hover:text-brand-yellow disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > index ? 1 : -1); setIndex(i) }}
              className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-brand-yellow' : 'w-2 bg-slate-200'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* View more */}
        <div className="mt-8 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-slate transition hover:text-brand-yellow"
          >
            View More Projects <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  )
}
