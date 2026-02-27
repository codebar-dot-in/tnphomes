import { motion } from 'framer-motion'
import { HardHat, CalendarCheck, LayoutDashboard, Users, Home } from 'lucide-react'
import Counter from '../ui/Counter'

const stats = [
  { icon: CalendarCheck, value: 20,     suffix: '+',  label: 'Years of Experience' },
  { icon: HardHat,       value: 500,    suffix: '+',  label: 'Happy Families' },
  { icon: LayoutDashboard, value: 15,   suffix: 'L+', label: 'Sq.ft Delivered' },
  { icon: Users,         value: 200,    suffix: '+',  label: 'Projects Completed' },
  { icon: Home,          value: 40,     suffix: '+',  label: 'Expert Engineers' },
]

export default function StatsBannerSection() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2000&q=80"
        alt="Construction site"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-slate/80" />

      <div className="container-main relative">
        <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                className="flex flex-col items-center gap-3 px-4 text-center"
              >
                {/* Icon circle */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow">
                  <Icon size={26} strokeWidth={1.4} />
                </div>

                {/* Number */}
                <p className="text-3xl font-extrabold leading-none text-white sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>

                {/* Label */}
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-yellow">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
