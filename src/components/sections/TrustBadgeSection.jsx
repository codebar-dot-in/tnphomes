import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay } },
})

// One ruler segment — repeated to fill the strip
function RulerSegment() {
  return (
    <div className="flex shrink-0 items-end" style={{ width: 600 }}>
      {Array.from({ length: 60 }).map((_, i) => {
        const isMajor = i % 10 === 0
        const isMid   = i % 5 === 0
        return (
          <div key={i} className="flex flex-1 flex-col items-center">
            {isMajor && (
              <span className="mb-0.5 text-[9px] font-semibold text-slate-400">
                {i}
              </span>
            )}
            <div
              className={`w-px ${
                isMajor ? 'h-5 bg-slate-400' : isMid ? 'h-3 bg-slate-300' : 'h-1.5 bg-slate-200'
              }`}
            />
          </div>
        )
      })}
    </div>
  )
}

export default function TrustBadgeSection() {
  return (
    <section className="bg-white py-14">
      <div className="container-main">

        {/* Section title */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp(0)}
          className="mb-10 text-center text-2xl font-extrabold uppercase tracking-widest text-brand-slate sm:text-3xl"
        >
          Residential &amp; Commercial Construction Services
        </motion.p>

        {/* Badge + text row */}
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-center sm:gap-12">

          {/* Yellow years badge */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp(0.1)}
            className="flex h-44 w-44 shrink-0 flex-col items-center justify-center rounded-lg bg-brand-yellow text-brand-slate"
          >
            <span className="text-6xl font-black leading-none">20<sup className="text-3xl">+</sup></span>
            <span className="mt-1 text-lg font-extrabold uppercase tracking-widest">Years</span>
            <span className="text-xs font-semibold uppercase tracking-widest">Experience</span>
            <span className="mt-1 text-xs font-bold text-slate-700">Since 2004</span>
          </motion.div>

          {/* Right text block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp(0.18)}
          >
            <h2 className="text-3xl font-light uppercase leading-tight tracking-wide text-brand-slate sm:text-4xl lg:text-5xl">
              Expert Builders<br />
              for Homes &amp;<br />
              <span className="font-black">Businesses !!</span>
            </h2>

            {/* Document link */}
            <a
              href="/tnp_homes_registation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-brand-slate transition hover:border-brand-yellow hover:bg-brand-yellow/10"
            >
              <FileText size={14} className="text-brand-yellow" />
              Company Registration Certificate
            </a>
          </motion.div>

        </div>
      </div>

      {/* Scrolling ruler */}
      <div className="mt-12 overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: [0, -600] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        >
          {/* 4 copies so the loop is seamless */}
          <RulerSegment />
          <RulerSegment />
          <RulerSegment />
          <RulerSegment />
        </motion.div>
      </div>
    </section>
  )
}
