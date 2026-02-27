import { CheckCircle2, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'
import { packages } from '../../data/content'

export default function PackagesSection() {
  return (
    <section id="packages" className="section-padding bg-brand-bg" aria-labelledby="packages-title">
      <div className="container-main">
        <Reveal>
          <p className="section-kicker">Packages & Pricing</p>
          <h2 id="packages-title" className="section-title">
            Package tiers that reflect material quality, finish level, and engineering support.
          </h2>
          <p className="section-subtitle">
            Starting costs are indicative and final quotation is based on soil condition, design complexity, and local approvals.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, idx) => (
            <Reveal key={pkg.title} delay={idx * 0.06} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-bold">{pkg.title}</h3>
              <p className="mt-3 text-lg font-semibold text-brand-emerald">{pkg.cost}</p>
              <ul className="mt-4 space-y-2">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-brand-emerald" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-slate px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Enquire Now
                <ChevronRight size={14} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
