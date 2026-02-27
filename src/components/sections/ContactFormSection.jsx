import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckSquare, Square, Send } from 'lucide-react'

const WHATSAPP_NUMBER = '917708668707'

export default function ContactFormSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', agreed: false })
  const [errors, setErrors] = useState({})

  const set = (key, val) => {
    setForm(f => ({ ...f, [key]: val }))
    setErrors(e => ({ ...e, [key]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.phone.trim())   e.phone   = 'Phone number is required'
    if (!form.message.trim()) e.message = 'Please enter a message'
    if (!form.agreed)         e.agreed  = 'Please agree to continue'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    const text = [
      `Hi TNP Homes! I'd like to start a project.`,
      ``,
      `Name: ${form.name}`,
      form.email ? `Email: ${form.email}` : null,
      `Phone: ${form.phone}`,
      ``,
      `Message: ${form.message}`,
    ].filter(l => l !== null).join('\n')

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section className="bg-white py-16">
      <div className="container-main">

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-brand-yellow" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
              Contact With Us
            </span>
          </div>
          <h2 className="text-2xl font-extrabold uppercase tracking-widest text-brand-slate sm:text-3xl">
            Start Your Project With Us
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-12 bg-brand-yellow" />
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Let's turn your vision into reality. Whether you're planning a residential or
            commercial project, our team is ready to guide you every step of the way.
          </p>
        </div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">

          {/* Left image with clip */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85"
              alt="Modern luxury home"
              className="h-full w-full object-cover"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 12% 100%, 0 88%)',
                borderRadius: '0.75rem 0.75rem 0 0.75rem',
                minHeight: '460px',
              }}
            />
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-slate-200 bg-white p-8 shadow-soft"
          >
            <h3 className="mb-6 text-lg font-extrabold text-brand-slate">Send a message</h3>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>

              {/* Name */}
              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-600">
                  Enter your full name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  value={form.name}
                  onChange={e => set('name', e.target.value)}
                  className={`w-full rounded border px-4 py-2.5 text-sm text-brand-slate outline-none transition focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 ${errors.name ? 'border-red-300' : 'border-slate-200'}`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-600">
                  Enter your email address
                </label>
                <input
                  type="email"
                  placeholder="demo@gmail.com"
                  value={form.email}
                  onChange={e => set('email', e.target.value)}
                  className="w-full rounded border border-slate-200 px-4 py-2.5 text-sm text-brand-slate outline-none transition focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-600">
                  Enter your phone number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={e => set('phone', e.target.value)}
                  className={`w-full rounded border px-4 py-2.5 text-sm text-brand-slate outline-none transition focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 ${errors.phone ? 'border-red-300' : 'border-slate-200'}`}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-600">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Type Here"
                  value={form.message}
                  onChange={e => set('message', e.target.value)}
                  className={`w-full resize-none rounded border px-4 py-2.5 text-sm text-brand-slate outline-none transition focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 ${errors.message ? 'border-red-300' : 'border-slate-200'}`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              {/* Terms */}
              <div>
                <button
                  type="button"
                  onClick={() => set('agreed', !form.agreed)}
                  className="flex items-start gap-2 text-left"
                >
                  {form.agreed
                    ? <CheckSquare size={18} className="mt-0.5 shrink-0 text-brand-yellow" />
                    : <Square size={18} className="mt-0.5 shrink-0 text-slate-300" />
                  }
                  <span className="text-xs text-slate-500">
                    I agree to the terms of service.
                  </span>
                </button>
                {errors.agreed && <p className="mt-1 text-xs text-red-400">{errors.agreed}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded bg-brand-slate py-3 text-sm font-bold text-white transition hover:bg-slate-700"
              >
                <Send size={15} />
                Submit via WhatsApp
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
