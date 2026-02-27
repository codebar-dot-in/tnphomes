import Reveal from '../ui/Reveal'
import { services } from '../../data/content'

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-main">
        <Reveal>
          <p className="section-kicker">Services</p>
          <h2 className="section-title">Construction solutions designed around Tamil Nadu project realities.</h2>
          <p className="section-subtitle">
            Every service package includes engineer-led planning, local authority workflow handling, and practical material recommendations for climate and usage.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={idx * 0.05} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-emerald-100 p-3 text-brand-emerald">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-slate">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

