import Reveal from '../ui/Reveal'

export default function PageHero({ title, subtitle }) {
  return (
    <section className="bg-brand-slate py-14 text-white md:py-16">
      <div className="container-main">
        <Reveal>
          <p className="section-kicker text-emerald-300">TNP HOMES</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h1>
          {subtitle && <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  )
}

