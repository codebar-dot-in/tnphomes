import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageSquare,
  FileCheck2,
  DraftingCompass,
  HardHat,
  KeyRound,
  Check,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: 'Discussion',
    bullets: [
      'Initial meeting to understand your scope and vision.',
      'Discuss design preferences, functional needs, and timelines.',
      'Explore preliminary budget considerations.',
    ],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: FileCheck2,
    title: 'Signing Agreement',
    bullets: [
      'Detailed project scope and pricing reviewed together.',
      'Construction agreement signed with clear milestones.',
      'Transparent payment schedule shared upfront.',
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: DraftingCompass,
    title: 'Design Finalization',
    bullets: [
      'Architectural drawings and floor plans finalized.',
      'Interior design concepts and materials confirmed.',
      'Plans submitted for regulatory approvals.',
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: HardHat,
    title: 'Execution',
    bullets: [
      'Site preparation and foundation work commences.',
      'Regular progress updates with milestone tracking.',
      'Quality checks conducted at every construction stage.',
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: KeyRound,
    title: 'Handover',
    bullets: [
      'Final inspection and full snag list resolved.',
      'All documentation and warranties handed over.',
      'Move-in ready home delivered on schedule.',
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
  },
]

export default function ProcessSection() {
  const [active, setActive] = useState(0)

  const goNext = () => setActive((p) => Math.min(p + 1, steps.length - 1))
  const goPrev = () => setActive((p) => Math.max(p - 1, 0))

  const current = steps[active]

  return (
    <section className="bg-white py-16">
      <div className="container-main">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-widest text-brand-slate sm:text-3xl">
            Our Construction Process
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-12 bg-brand-yellow" />
          <p className="mt-4 text-sm text-slate-500 sm:text-base">
            A transparent, step-by-step journey — from your first conversation to handing you the keys.
          </p>
        </div>

        {/* Stepper */}
        <div className="flex items-start">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isCompleted = i < active
            const isActive = i === active

            return (
              <div key={step.title} className="flex flex-1 flex-col items-center">
                <div className="flex w-full items-center">
                  {/* Left connector line */}
                  <div
                    className={`h-0.5 flex-1 transition-colors duration-500 ${
                      i === 0 ? 'invisible' : i <= active ? 'bg-brand-slate' : 'bg-slate-200'
                    }`}
                  />

                  {/* Circle */}
                  <button
                    onClick={() => setActive(i)}
                    className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isCompleted || isActive
                        ? 'border-brand-slate bg-brand-slate'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isCompleted ? (
                      <Check size={18} className="text-brand-yellow" strokeWidth={2.5} />
                    ) : (
                      <Icon
                        size={18}
                        className={isActive ? 'text-brand-yellow' : 'text-slate-400'}
                        strokeWidth={1.6}
                      />
                    )}
                  </button>

                  {/* Right connector line */}
                  <div
                    className={`h-0.5 flex-1 transition-colors duration-500 ${
                      i === steps.length - 1 ? 'invisible' : i < active ? 'bg-brand-slate' : 'bg-slate-200'
                    }`}
                  />
                </div>

                {/* Step label */}
                <span
                  className={`mt-2 text-center text-xs font-semibold transition-colors duration-300 ${
                    isActive ? 'text-brand-slate' : 'text-slate-400'
                  }`}
                >
                  {step.title}
                </span>
              </div>
            )
          })}
        </div>

        {/* Step content */}
        <div className="mt-10 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 items-center gap-10 md:grid-cols-2"
            >
              {/* Text */}
              <div>
                <h3 className="text-2xl font-extrabold text-brand-slate">{current.title}</h3>
                <div className="mt-2 h-0.5 w-8 bg-brand-yellow" />
                <ul className="mt-6 space-y-4">
                  {current.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-brand-emerald"
                        strokeWidth={2}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="overflow-hidden rounded-xl bg-slate-100">
                <img
                  src={current.image}
                  alt={current.title}
                  className="h-64 w-full object-cover md:h-72"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Prev / Next */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={goPrev}
            disabled={active === 0}
            className="flex items-center gap-2 rounded bg-brand-slate px-5 py-2.5 text-sm font-bold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={16} /> Prev
          </button>
          <span className="text-xs text-slate-400">
            {active + 1} / {steps.length}
          </span>
          <button
            onClick={goNext}
            disabled={active === steps.length - 1}
            className="flex items-center gap-2 rounded bg-brand-slate px-5 py-2.5 text-sm font-bold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
