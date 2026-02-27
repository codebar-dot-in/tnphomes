import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, Building2, Check, ArrowRight } from 'lucide-react'

const tiles = [
  {
    icon: Home,
    label: 'Residential',
    to: '/packages/residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    tagline: 'Independent Homes · Villas · Row Houses',
    points: [
      'Standard, Premium, Luxury & Ultra-Luxury tiers',
      'Custom architectural plans for every plot',
      'Vastu-compliant design options',
      'Milestone-based billing with full transparency',
    ],
    cta: 'View Residential Packages',
  },
  {
    icon: Building2,
    label: 'Commercial',
    to: '/packages/commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    tagline: 'Offices · Retail · Medical · Mixed-Use',
    points: [
      'Packages scaled for G+1 to G+6 structures',
      'MEP design, fire safety & facade engineering',
      'Phased handover support for early tenant fit-out',
      'Dedicated site engineer throughout execution',
    ],
    cta: 'View Commercial Packages',
  },
]

const fadeUp = (i) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 } },
})

export default function PackageHighlightSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container-main">

        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-widest text-brand-slate sm:text-3xl">
            Construction Packages
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-12 bg-brand-yellow" />
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
            We offer tailored packages for residential and commercial projects.
            Costs, inclusions, and execution plans vary by type — choose yours below.
          </p>
        </div>

        {/* Two tiles */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {tiles.map((tile, i) => {
            const Icon = tile.icon
            return (
              <motion.div
                key={tile.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp(i)}
                className="group relative overflow-hidden rounded-xl shadow-soft"
              >
                {/* Background image */}
                <img
                  src={tile.image}
                  alt={tile.label}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />

                {/* Content */}
                <div className="relative flex h-full min-h-[420px] flex-col justify-between p-8">
                  {/* Top */}
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/20 text-brand-yellow backdrop-blur-sm">
                      <Icon size={24} strokeWidth={1.6} />
                    </div>
                    <h3 className="mt-4 text-2xl font-extrabold uppercase tracking-widest text-white">
                      {tile.label}
                    </h3>
                    <div className="mt-1 h-0.5 w-8 bg-brand-yellow" />
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-yellow">
                      {tile.tagline}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <ul className="mt-6 space-y-2.5">
                    {tile.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-slate-200">
                        <Check size={15} className="mt-0.5 shrink-0 text-brand-yellow" strokeWidth={2.5} />
                        {p}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to={tile.to}
                    className="mt-8 inline-flex items-center gap-2 self-start rounded bg-brand-yellow px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-yellow-400"
                  >
                    {tile.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
