import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calculator } from 'lucide-react'

// ↓ Change this path to redirect wherever you need
const CTA_HREF = '/cost-estimator'

export default function CostEstimatorBanner() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background building image */}
      <img
        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2000&q=80"
        alt="Building background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Dark overlay — stronger on left for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-lg"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
            Free Estimation Tool
          </p>
          <h2 className="mt-2 text-2xl font-extrabold leading-snug text-white sm:text-3xl lg:text-4xl">
            Estimate Your Construction<br /> Cost Instantly
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            Get a quick, reliable cost estimate for your residential or commercial
            project in Chennai. No obligations — just clarity before you commit.
          </p>
          <Link
            to={CTA_HREF}
            className="mt-7 inline-flex items-center gap-2 rounded bg-brand-yellow px-7 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-yellow-400"
          >
            <Calculator size={16} />
            Calculate Cost Instantly
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
