import { Star } from 'lucide-react'
import Reveal from '../ui/Reveal'
import { testimonials } from '../../data/content'

export default function TestimonialSection() {
  return (
    <section className="section-padding bg-brand-slate text-white">
      <div className="container-main">
        <Reveal>
          <p className="section-kicker text-emerald-300">Testimonials</p>
          <h2 className="section-title text-white">What clients from Chennai neighbourhoods say about working with us.</h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <Reveal key={item.name} delay={idx * 0.06} className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div className="mb-3 flex items-center gap-1 text-brand-yellow">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={`${item.name}-${starIndex}`} size={16} className="fill-current" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-slate-200">"{item.quote}"</p>
              <p className="mt-4 text-sm font-bold text-white">{item.name}</p>
              <p className="text-xs text-slate-300">{item.location}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

