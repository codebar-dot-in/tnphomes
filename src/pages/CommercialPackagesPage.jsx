import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/sections/PageHero'

const packages = [
  {
    tier: '01',
    title: 'Standard Commercial',
    rate: '₹2,100 / sq.ft',
    badge: 'Entry Level',
    badgeColor: 'bg-slate-100 text-slate-600',
    includes: [
      'Structural RCC frame with load-bearing design',
      'Standard MEP routing and basic electrical',
      'Vitrified flooring and plastered finish',
      'Fire safety compliance consultation',
      'Weekly progress updates and stage billing',
    ],
  },
  {
    tier: '02',
    title: 'Premium Commercial',
    rate: '₹2,600 / sq.ft',
    badge: 'Most Popular',
    badgeColor: 'bg-brand-yellow/20 text-yellow-700',
    highlight: true,
    includes: [
      'Enhanced facade with glazing and cladding options',
      'Dedicated MEP design engineer on-site',
      'Dedicated project coordinator throughout',
      'Basement ventilation and drainage planning',
      'Bi-weekly quality audit and progress reports',
    ],
  },
  {
    tier: '03',
    title: 'Luxury Commercial',
    rate: '₹3,200 / sq.ft',
    badge: 'High Spec',
    badgeColor: 'bg-slate-100 text-slate-600',
    includes: [
      'Custom architectural design with 3D visualization',
      'Premium facade — glass curtain wall or stone',
      'Full MEP + BMS integration support',
      'Phased handover for early tenant fit-out',
      'Private site engineer + senior architect reviews',
    ],
  },
  {
    tier: '04',
    title: 'Flagship Commercial',
    rate: 'From ₹4,000 / sq.ft',
    badge: 'Bespoke',
    badgeColor: 'bg-slate-100 text-slate-600',
    includes: [
      'Bespoke design and premium specification throughout',
      'Senior architect and structural engineer ownership',
      'Advanced fire, safety & compliance engineering',
      'Concierge-style project management',
      'Full documentation, as-built drawings & handover',
    ],
  },
]

const fadeUp = (i) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 } },
})

export default function CommercialPackagesPage() {
  return (
    <>
      <PageHero
        title="Commercial Construction Packages"
        subtitle="Offices, retail complexes, medical facilities, and mixed-use developments — built to specification and delivered on schedule."
      />

      <section className="bg-white py-16">
        <div className="container-main">

          <div className="mb-10 text-center">
            <h2 className="text-2xl font-extrabold uppercase tracking-widest text-brand-slate sm:text-3xl">
              Choose Your Package
            </h2>
            <div className="mx-auto mt-2 h-0.5 w-12 bg-brand-yellow" />
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
              All commercial packages include regulatory compliance support, dedicated engineers, and transparent milestone-based billing.
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
                <span className={`text-5xl font-black leading-none ${pkg.highlight ? 'text-brand-yellow/30' : 'text-slate-100'}`}>
                  {pkg.tier}
                </span>

                <div className="mt-3">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${pkg.badgeColor}`}>
                    {pkg.badge}
                  </span>
                  <h3 className={`mt-2 text-lg font-extrabold leading-snug ${pkg.highlight ? 'text-white' : 'text-brand-slate'}`}>
                    {pkg.title}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-brand-yellow">{pkg.rate}</p>
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

          <p className="mt-10 text-center text-xs text-slate-400">
            Commercial rates are indicative. Final pricing depends on floor count, structural complexity, MEP scope, and site conditions.
            Contact us for a project-specific BOQ.
          </p>

        </div>
      </section>
    </>
  )
}
