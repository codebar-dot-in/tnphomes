import { Building2, CalendarDays, CheckCircle2, Layers3, MapPin, Wrench } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import { getProjectById } from '../data/projects'

export default function ProjectDetailPage() {
  const { projectId } = useParams()
  const project = getProjectById(projectId)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link to="/" className="hover:text-brand-emerald">
            Home
          </Link>
          <span>/</span>
          <Link to="/projects" className="hover:text-brand-emerald">
            Projects
          </Link>
          <span>/</span>
          <span className="font-medium text-slate-700">{project.title}</span>
        </nav>

        <Reveal className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="section-kicker">Project Story</p>
            <h1 className="mt-3 text-3xl font-bold text-brand-slate sm:text-4xl">{project.title}</h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.summary}</p>
            <img src={project.image} alt={project.title} className="mt-6 h-[380px] w-full rounded-2xl object-cover shadow-soft" />
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-brand-slate">Project Details</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-700">
              <p className="flex items-center gap-2">
                <MapPin size={15} className="text-brand-emerald" />
                {project.location}
              </p>
              <p className="flex items-center gap-2">
                <Building2 size={15} className="text-brand-emerald" />
                {project.type}
              </p>
              <p className="flex items-center gap-2">
                <Wrench size={15} className="text-brand-emerald" />
                {project.area}
              </p>
              <p className="flex items-center gap-2">
                <Layers3 size={15} className="text-brand-emerald" />
                {project.floors}
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays size={15} className="text-brand-emerald" />
                Target {project.year}
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Construction Package</p>
              <p className="mt-2 text-sm font-semibold text-brand-slate">{project.package}</p>
            </div>

            <div className="mt-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Progress</p>
              <div className="h-2 w-full rounded-full bg-slate-200">
                <div className={`h-full rounded-full bg-brand-emerald ${project.progressClass}`} />
              </div>
            </div>
          </aside>
        </Reveal>

        <Reveal className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-brand-slate">How It All Started</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">{project.story}</p>

            <h3 className="mt-8 text-xl font-bold text-brand-slate">Execution Highlights</h3>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-emerald" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <aside className="rounded-2xl bg-brand-slate p-6 text-white">
            <p className="section-kicker text-emerald-300">Let's Build</p>
            <h3 className="mt-2 text-2xl font-bold text-white">Start your home construction with full visibility.</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              Share your plot details and budget. Our team will schedule a consultation and prepare a transparent quotation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-brand-yellow px-4 py-2 text-sm font-bold text-slate-900 hover:bg-yellow-400"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center rounded-full border border-slate-400 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                Call +91 98765 43210
              </a>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}

