import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Clock, Eye, Compass } from 'lucide-react'

const left = [
  {
    icon: Award,
    title: 'Unmatched Expertise',
    desc: 'Over 20 years of experience with skilled architects, engineers, and site professionals on every build.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'Milestone-driven execution ensures your home is handed over on schedule — every single time.',
  },
]

const right = [
  {
    icon: Eye,
    title: '100% Transparency',
    desc: 'No hidden charges. Clear billing, open communication, and milestone-wise payment schedules throughout.',
  },
  {
    icon: Compass,
    title: 'One Stop Solution',
    desc: 'From design and approvals to construction and handover — everything under one roof, one team, zero hassle.',
  },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay } },
})

function FeatureCard({ icon: Icon, title, desc, delay, align = 'center' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp(delay)}
      className={`flex flex-col items-center gap-3 px-4 py-6 text-${align}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/15 text-brand-yellow">
        <Icon size={24} strokeWidth={1.6} />
      </div>
      <h3 className="text-base font-extrabold text-brand-slate">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-500">{desc}</p>
    </motion.div>
  )
}

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-16">
      <div className="container-main">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp(0)}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-extrabold uppercase tracking-widest text-brand-slate sm:text-3xl">
            Why Choose <span className="text-brand-yellow">Us</span>
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-12 bg-brand-yellow" />
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
            From foundation to finishing, TNP Homes brings 20+ years of expertise,
            transparency, and craftsmanship to every project.
          </p>
        </motion.div>

        {/* 3-col layout */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">

          {/* Left cards */}
          <div className="flex flex-col divide-y divide-slate-100">
            {left.map((item, i) => (
              <FeatureCard key={item.title} {...item} delay={i * 0.1} />
            ))}
          </div>

          {/* Center image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            {/* Offset accent box */}
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-xl bg-brand-yellow/20" />
            <img
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=85"
              alt="TNP Homes construction"
              className="relative rounded-xl object-cover shadow-soft"
              style={{ aspectRatio: '4/5' }}
            />
          </motion.div>

          {/* Right cards */}
          <div className="flex flex-col divide-y divide-slate-100">
            {right.map((item, i) => (
              <FeatureCard key={item.title} {...item} delay={0.1 + i * 0.1} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp(0.2)}
          className="mt-10 text-center"
        >
          <Link
            to="/contact"
            className="inline-block rounded bg-brand-yellow px-8 py-3 text-sm font-bold text-slate-900 transition hover:bg-yellow-400"
          >
            Get a Free Consultation
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
