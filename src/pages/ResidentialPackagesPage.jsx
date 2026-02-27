import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/sections/PageHero'

const packages = [
  {
    tier: '01',
    title: 'Standard',
    rate: '₹1,850 / sq.ft',
    badge: 'Most Affordable',
    badgeColor: 'bg-slate-100 text-slate-600',
    includes: [
      'Architectural plan + structural design',
      'Certified steel and OPC cement',
      'Standard vitrified flooring + basic joinery',
      'Branded plumbing and basic electrical',
      'Weekly progress photos and stage billing',
    ],
  },
  {
    tier: '02',
    title: 'Premium',
    rate: '₹2,250 / sq.ft',
    badge: 'Most Popular',
    badgeColor: 'bg-brand-yellow/20 text-yellow-700',
    highlight: true,
    includes: [
      'Everything in Standard + facade upgrade',
      'Premium sanitary fittings and branded switches',
      'Detailed interior layout support',
      'Dedicated project coordinator',
      'Bi-weekly quality audit reports',
    ],
  },
  {
    tier: '03',
    title: 'Luxury',
    rate: '₹2,850 / sq.ft',
    badge: 'Premium Finish',
    badgeColor: 'bg-slate-100 text-slate-600',
    includes: [
      'Custom design development and 3D views',
      'Imported finish options and premium woodwork',
      'Smart-home ready electrical planning',
      'Private site engineer + architect reviews',
      'Comprehensive snag closure before handover',
    ],
  },
  {
    tier: '04',
    title: 'Ultra-Luxury',
    rate: 'From ₹3,650 / sq.ft',
    badge: 'Bespoke',
    badgeColor: 'bg-slate-100 text-slate-600',
    includes: [
      'Bespoke architecture and high-end interiors',
      'Marble/stone facade and custom metal detailing',
      'Concierge-style project management',
      'Senior architect sign-off at every milestone',
      'End-to-end handover with full documentation',
    ],
  },
]

const fadeUp = (i) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 } },
})

export default function ResidentialPackagesPage() {
  return (
    <>
      <PageHero
        title="Residential Construction Packages"
        subtitle="From compact urban homes to sprawling villas — choose the right package for your family's vision and budget."
      />

      <section className="bg-white py-16">
        <div className="container-main">

          <div className="mb-10 text-center">
            <h2 className="text-2xl font-extrabold uppercase tracking-widest text-brand-slate sm:text-3xl">
              Choose Your Package
            </h2>
            <div className="mx-auto mt-2 h-0.5 w-12 bg-brand-yellow" />
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
              All packages include engineer-led supervision, transparent billing, and a dedicated point of contact throughout construction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp(i)}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(15,23,42,0.18)' }}
                className={`relative flex flex-col rounded-xl border p-6 transition-shadow ${
                  pkg.highlight
                    ? 'border-brand-yellow bg-brand-slate text-white'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {/* Tier number */}
                <span className={`text-5xl font-black leading-none ${pkg.highlight ? 'text-brand-yellow/30' : 'text-slate-100'}`}>
                  {pkg.tier}
                </span>

                <div className="mt-3">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${pkg.badgeColor}`}>
                    {pkg.badge}
                  </span>
                  <h3 className={`mt-2 text-xl font-extrabold ${pkg.highlight ? 'text-white' : 'text-brand-slate'}`}>
                    {pkg.title}
                  </h3>
                  <p className={`mt-1 text-sm font-bold ${pkg.highlight ? 'text-brand-yellow' : 'text-brand-yellow'}`}>
                    {pkg.rate}
                  </p>
                  <div className="my-4 h-px bg-current opacity-10" />
                </div>

                <ul className="flex-1 space-y-2.5">
                  {pkg.includes.map((item) => (
                    <li key={item} className={`flex items-start gap-2 text-xs leading-relaxed ${pkg.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                      <Check size={13} className="mt-0.5 shrink-0 text-brand-yellow" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded py-2.5 text-sm font-bold transition ${
                    pkg.highlight
                      ? 'bg-brand-yellow text-slate-900 hover:bg-yellow-400'
                      : 'bg-brand-slate text-white hover:bg-slate-700'
                  }`}
                >
                  Get Quote <ArrowRight size={13} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <p className="mt-10 text-center text-xs text-slate-400">
            Rates are indicative and vary based on plot size, location, soil conditions, and design complexity.
            Contact us for a detailed, site-specific quotation.
          </p>

        </div>
      </section>
    </>
  )
}
