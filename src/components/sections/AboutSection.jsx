import { CheckCircle2 } from 'lucide-react'
import Reveal from '../ui/Reveal'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-main grid items-start gap-8 lg:grid-cols-2">
        <Reveal>
          <p className="section-kicker">About TNP Homes</p>
          <h2 className="section-title">A Tamil Nadu-rooted team focused on dependable engineering and craftsmanship.</h2>
          <p className="section-subtitle">
            TNP Homes started in Chennai with one goal: make construction less stressful for property owners. Our architects, planning engineers, and
            site teams work together so you see steady progress, practical decisions, and clear communication.
          </p>
          <div className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
            <p>Our mission is to deliver structures that perform well in real Indian conditions: heat, humidity, and long-term usage.</p>
            <p>From urban plots in Chennai to villa layouts in tier-2 cities, we adapt design and execution to site realities instead of template plans.</p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="rounded-2xl border border-slate-200 bg-brand-bg p-6">
          <h3 className="text-xl font-bold">Team and execution ethos</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-emerald" />
              Civil engineers and project managers with experience across residential and commercial sites.
            </li>
            <li className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-emerald" />
              Weekly quality checklist reviews for reinforcement, shuttering, waterproofing, and finishing.
            </li>
            <li className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-emerald" />
              Vendor network across Chennai and nearby districts for predictable material procurement.
            </li>
            <li className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-emerald" />
              Client communication via milestone updates, call reviews, and WhatsApp reports.
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

