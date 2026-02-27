import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, Building2, ClipboardList, DraftingCompass, Paintbrush } from 'lucide-react'

const tiles = [
  {
    icon: Home,
    title: 'Residential Construction',
    desc: 'You Dream, We Deliver! Let us build the home your family deserves.',
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    desc: 'Hassle-free execution by our expert team, on time and on budget.',
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    desc: 'Dedicated site engineers to deliver your project with zero compromise.',
  },
  {
    icon: DraftingCompass,
    title: 'Architecture & Structure',
    desc: 'Tailored, approval-ready designs by our in-house architects.',
  },
  {
    icon: Paintbrush,
    title: 'Interiors & Smart Home',
    desc: 'Beautiful, smart & fully customised interiors for modern living.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
}

export default function ServicesHighlightSection() {
  return (
    <section className="bg-white py-16">
      <div className="container-main">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-widest text-brand-slate sm:text-3xl">
            TNP Homes Services
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-12 bg-brand-yellow" />
          <p className="mt-4 text-sm text-slate-500 sm:text-base">
            <span className="font-semibold text-brand-slate">TNP Homes</span> — Chennai's trusted construction partner
            for over 20 years. One-stop solution for all your building needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {tiles.map((tile, i) => {
            const Icon = tile.icon
            return (
              <motion.div
                key={tile.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: '0 16px 40px -12px rgba(15,23,42,0.18)' }}
                className="flex flex-col items-center rounded border border-slate-200 px-5 py-8 text-center transition-shadow"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="mb-5 text-brand-yellow"
                >
                  <Icon size={44} strokeWidth={1.4} />
                </motion.div>

                <h3 className="text-base font-bold text-brand-slate">{tile.title}</h3>
                <div className="my-3 h-0.5 w-8 bg-brand-yellow" />
                <p className="mb-6 text-sm leading-relaxed text-slate-500">{tile.desc}</p>

                <Link
                  to="/contact"
                  className="mt-auto inline-block w-full rounded bg-brand-yellow py-2.5 text-sm font-bold text-white transition hover:bg-yellow-500"
                >
                  Book Now
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
