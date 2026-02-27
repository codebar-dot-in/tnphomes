import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, IndianRupee, Info, ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/sections/PageHero'

// ── Calculation constants ─────────────────────────────────────────────────────
const BASE_RATES = {
  standard: 1850,
  premium:  2400,
  luxury:   3200,
}

const LOCATION_MULT = {
  anna_nagar: 1.08,
  t_nagar:    1.08,
  ecr:        1.05,
  omr:        1.05,
  velachery:  1.03,
  others:     1.00,
}

const FLOOR_MULT = {
  g:  1.00,
  g1: 1.04,
  g2: 1.08,
  g3: 1.12,
}

const TYPE_MULT = {
  residential: 1.00,
  commercial:  1.12,
}

const PACKAGE_LABELS = { standard: 'Standard', premium: 'Premium', luxury: 'Luxury' }
const LOCATION_LABELS = {
  anna_nagar: 'Anna Nagar',
  t_nagar:    'T. Nagar',
  ecr:        'ECR',
  omr:        'OMR',
  velachery:  'Velachery',
  others:     'Other / Suburbs',
}
const FLOOR_LABELS = { g: 'Ground (G)', g1: 'G + 1', g2: 'G + 2', g3: 'G + 3' }

function fmt(n) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`
  if (n >= 100000)   return `₹${(n / 100000).toFixed(2)} L`
  return `₹${n.toLocaleString('en-IN')}`
}

// ── Breakdown percentages ─────────────────────────────────────────────────────
const BREAKDOWN = [
  { label: 'Material Cost',         pct: 0.55, color: 'bg-brand-slate' },
  { label: 'Labour & Site Work',    pct: 0.28, color: 'bg-brand-yellow' },
  { label: 'Architecture & Design', pct: 0.10, color: 'bg-slate-400' },
  { label: 'Miscellaneous',         pct: 0.07, color: 'bg-slate-200' },
]

export default function CostEstimatorPage() {
  const [form, setForm] = useState({
    plotSize:  '',
    floors:    'g',
    location:  'others',
    type:      'residential',
    package:   'standard',
  })
  const [result, setResult] = useState(null)

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }))

  const handleCalculate = (e) => {
    e.preventDefault()
    const size = parseFloat(form.plotSize)
    if (!size || size <= 0) return

    const rate   = BASE_RATES[form.package]
    const locM   = LOCATION_MULT[form.location]
    const floorM = FLOOR_MULT[form.floors]
    const typeM  = TYPE_MULT[form.type]

    const base = size * rate * locM * floorM * typeM
    const low  = Math.round(base * 0.92)
    const high = Math.round(base * 1.08)

    setResult({ base: Math.round(base), low, high, size })
  }

  return (
    <>
      <PageHero
        title="Construction Cost Estimator"
        subtitle="Get an instant ballpark estimate for your residential or commercial project in Chennai. No sign-up required."
      />

      <section className="bg-slate-50 py-14">
        <div className="container-main">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

            {/* ── Form ──────────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-xl border border-slate-200 bg-white p-8 shadow-soft"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/15 text-brand-yellow">
                  <Calculator size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-brand-slate">Enter Project Details</h2>
                  <p className="text-xs text-slate-500">All fields are required for an accurate estimate</p>
                </div>
              </div>

              <form onSubmit={handleCalculate} className="space-y-5">

                {/* Plot size */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-600">
                    Built-up Area (sq.ft)
                  </label>
                  <input
                    type="number"
                    min="100"
                    max="50000"
                    placeholder="e.g. 1200"
                    value={form.plotSize}
                    onChange={e => set('plotSize', e.target.value)}
                    required
                    className="w-full rounded border border-slate-200 px-4 py-2.5 text-sm text-brand-slate outline-none transition focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20"
                  />
                </div>

                {/* Construction type */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-600">
                    Construction Type
                  </label>
                  <div className="flex gap-3">
                    {[['residential', 'Residential'], ['commercial', 'Commercial']].map(([val, lbl]) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => set('type', val)}
                        className={`flex-1 rounded border py-2.5 text-sm font-bold transition ${
                          form.type === val
                            ? 'border-brand-yellow bg-brand-yellow text-slate-900'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-brand-yellow/50'
                        }`}
                      >
                        {lbl}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Floors */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-600">
                    Number of Floors
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {Object.entries(FLOOR_LABELS).map(([val, lbl]) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => set('floors', val)}
                        className={`rounded border py-2 text-xs font-bold transition ${
                          form.floors === val
                            ? 'border-brand-yellow bg-brand-yellow text-slate-900'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-brand-yellow/50'
                        }`}
                      >
                        {lbl}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-600">
                    Location
                  </label>
                  <select
                    value={form.location}
                    onChange={e => set('location', e.target.value)}
                    className="w-full rounded border border-slate-200 px-4 py-2.5 text-sm text-brand-slate outline-none transition focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20"
                  >
                    {Object.entries(LOCATION_LABELS).map(([val, lbl]) => (
                      <option key={val} value={val}>{lbl}</option>
                    ))}
                  </select>
                </div>

                {/* Package */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-600">
                    Package
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(PACKAGE_LABELS).map(([val, lbl]) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => set('package', val)}
                        className={`rounded border py-2.5 text-sm font-bold transition ${
                          form.package === val
                            ? 'border-brand-yellow bg-brand-yellow text-slate-900'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-brand-yellow/50'
                        }`}
                      >
                        {lbl}
                        <span className="mt-0.5 block text-[10px] font-normal">
                          ₹{BASE_RATES[val].toLocaleString('en-IN')}/sq.ft
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded bg-brand-slate py-3 text-sm font-bold text-white transition hover:bg-slate-700"
                >
                  <Calculator size={16} />
                  Calculate Estimate
                </button>
              </form>
            </motion.div>

            {/* ── Result panel ──────────────────────────────────────────── */}
            <div className="flex flex-col gap-6">
              <AnimatePresence mode="wait">
                {result ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-xl border border-slate-200 bg-white p-8 shadow-soft"
                  >
                    {/* Estimated range */}
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
                      Estimated Construction Cost
                    </p>
                    <div className="mt-2 flex items-end gap-3">
                      <span className="text-4xl font-black text-brand-slate sm:text-5xl">
                        {fmt(result.low)}
                      </span>
                      <span className="mb-1 text-lg font-bold text-slate-400">–</span>
                      <span className="text-4xl font-black text-brand-slate sm:text-5xl">
                        {fmt(result.high)}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">
                      For {result.size.toLocaleString('en-IN')} sq.ft ·{' '}
                      {PACKAGE_LABELS[form.package]} package ·{' '}
                      {LOCATION_LABELS[form.location]} ·{' '}
                      {FLOOR_LABELS[form.floors]}
                    </p>

                    {/* Bar breakdown */}
                    <div className="mt-6 space-y-3">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Cost Breakdown</p>
                      {BREAKDOWN.map(item => (
                        <div key={item.label}>
                          <div className="flex justify-between text-xs font-semibold text-slate-600">
                            <span>{item.label}</span>
                            <span>{fmt(Math.round(result.base * item.pct))}</span>
                          </div>
                          <div className="mt-1 h-1.5 w-full rounded-full bg-slate-100">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${item.pct * 100}%` }}
                              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                              className={`h-full rounded-full ${item.color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-5 flex items-start gap-2 rounded-lg bg-slate-50 p-3 text-xs text-slate-500">
                      <Info size={13} className="mt-0.5 shrink-0 text-brand-yellow" />
                      This is an indicative estimate only. Final cost depends on soil condition, actual material selections, design complexity, and site access. Contact us for a detailed BOQ.
                    </div>

                    {/* CTA */}
                    <Link
                      to="/contact"
                      className="mt-5 flex items-center justify-center gap-2 rounded bg-brand-yellow py-3 text-sm font-bold text-slate-900 transition hover:bg-yellow-400"
                    >
                      Get a Detailed Quote <ArrowRight size={15} />
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-white p-12 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-yellow/10 text-brand-yellow">
                      <IndianRupee size={30} strokeWidth={1.4} />
                    </div>
                    <p className="mt-4 text-base font-extrabold text-brand-slate">Your estimate will appear here</p>
                    <p className="mt-2 text-sm text-slate-400">Fill in the details on the left and click Calculate.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact nudge */}
              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-brand-slate p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow/20 text-brand-yellow">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-white">Prefer to talk to someone?</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    Our team is available Mon–Sat, 9am–7pm. Call us for a free consultation and on-site visit.
                  </p>
                  <a
                    href="tel:+917708668707"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-yellow hover:text-yellow-400"
                  >
                    +91 77086 68707 <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
