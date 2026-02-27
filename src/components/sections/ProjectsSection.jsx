import { useMemo, useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { Building2, CheckCircle2, MapPin, PlayCircle, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'
import { projects } from '../../data/projects'

const statusTabs = [
  { value: 'completed', label: 'Completed' },
  { value: 'near_completion', label: 'Near Completion' },
  { value: 'active', label: 'Active' },
]

const walkthroughs = [
  {
    title: 'ECR Villa Walkthrough',
    location: 'ECR, Chennai',
    duration: '06:48',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Urban Home Site Story',
    location: 'Mogappair, Chennai',
    duration: '05:22',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Commercial Build Progress',
    location: 'Velachery, Chennai',
    duration: '07:10',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  },
]

const statusClasses = {
  completed: 'bg-emerald-100 text-emerald-700',
  near_completion: 'bg-yellow-100 text-yellow-700',
  active: 'bg-sky-100 text-sky-700',
}

export default function ProjectsSection() {
  const [statusFilter, setStatusFilter] = useState('completed')
  const [segmentFilter, setSegmentFilter] = useState('all')

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchStatus = project.status === statusFilter
      const matchSegment = segmentFilter === 'all' || project.category === segmentFilter
      return matchStatus && matchSegment
    })
  }, [statusFilter, segmentFilter])

  return (
    <section id="projects" className="section-padding bg-white" aria-labelledby="projects-title">
      <div className="container-main">
        <Reveal>
          <p className="section-kicker">Project Walkthroughs</p>
          <h2 className="section-title">Real project stories from our active and completed sites.</h2>
          <p className="section-subtitle">
            See how planning decisions translate on site, from structure stage to final handover.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {walkthroughs.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
              <div className="relative">
                <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-700">{item.duration}</span>
                <button
                  type="button"
                  className="absolute inset-0 flex items-center justify-center text-white opacity-85 transition group-hover:opacity-100"
                  aria-label={`Play ${item.title}`}
                >
                  <span className="rounded-full bg-black/35 p-3">
                    <PlayCircle size={30} />
                  </span>
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-brand-slate">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.location}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <p className="section-kicker">Our Projects</p>
          <h2 id="projects-title" className="section-title">
            Completed, near-completion, and active projects.
          </h2>
        </Reveal>

        <Tabs.Root value={statusFilter} onValueChange={setStatusFilter} className="mt-8">
          <Tabs.List className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1">
            {statusTabs.map((tab) => (
              <Tabs.Trigger
                key={tab.value}
                value={tab.value}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 data-[state=active]:bg-white data-[state=active]:text-brand-slate"
              >
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <div className="mt-4 flex flex-wrap gap-2">
            {['all', 'residential', 'commercial'].map((segment) => (
              <button
                key={segment}
                type="button"
                onClick={() => setSegmentFilter(segment)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
                  segmentFilter === segment
                    ? 'border-brand-slate bg-brand-slate text-white'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                }`}
              >
                {segment}
              </button>
            ))}
          </div>

          {statusTabs.map((tab) => (
            <Tabs.Content key={tab.value} value={tab.value} className="mt-8">
              {filteredProjects.length === 0 ? (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-600">
                  No projects in this filter. Try another category.
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {filteredProjects.map((project) => (
                    <Link
                      key={project.id}
                      to={`/projects/${project.id}`}
                      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-soft transition hover:-translate-y-0.5"
                    >
                      <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
                      <div className="p-5">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${statusClasses[project.status]}`}>
                            {project.statusLabel}
                          </span>
                          <span className="text-xs font-medium text-slate-500">Target {project.year}</span>
                        </div>

                        <h3 className="text-xl font-bold text-brand-slate">{project.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.summary}</p>

                        <div className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
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
                        </div>

                        <div className="mt-4">
                          <div className="mb-1 flex items-center justify-between text-xs font-semibold text-slate-500">
                            <span>Progress</span>
                            <span>{project.statusLabel}</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-slate-200">
                            <div className={`h-full rounded-full bg-brand-emerald ${project.progressClass}`} />
                          </div>
                        </div>

                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-emerald">
                          View Project Story
                          <CheckCircle2 size={16} />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </Tabs.Content>
          ))}
        </Tabs.Root>

        <div className="mt-14 rounded-3xl bg-brand-slate p-6 text-white md:p-8">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="section-kicker text-emerald-300">Project Tracking</p>
              <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">We build your project. You track progress with full visibility.</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-300" />
                  Stage-wise updates shared with photos and milestone notes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-300" />
                  Engineer checkpoints documented throughout execution
                </li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-5 py-3 text-sm font-bold text-slate-900 hover:bg-yellow-400"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

