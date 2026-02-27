import { useState } from 'react'
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, PhoneCall } from 'lucide-react'
import Reveal from '../ui/Reveal'
import { budgetOptions, initialForm } from '../../data/content'

export default function ContactSection() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const inputClass = (name) =>
    `mt-1 w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 ${
      errors[name] ? 'border-red-400' : 'border-slate-300'
    }`

  const validate = () => {
    const nextErrors = {}
    const phoneRegex = /^(?:\+91|0)?[6-9]\d{9}$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (formData.name.trim().length < 2) nextErrors.name = 'Enter your full name.'
    if (!phoneRegex.test(formData.phone.trim())) nextErrors.phone = 'Enter a valid Indian mobile number.'
    if (!emailRegex.test(formData.email.trim())) nextErrors.email = 'Enter a valid email address.'
    if (!formData.city.trim()) nextErrors.city = 'City is required.'
    if (!formData.projectType.trim()) nextErrors.projectType = 'Please select a project type.'
    if (!formData.budget.trim()) nextErrors.budget = 'Please select a budget range.'

    return nextErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }

    setSubmitted(true)
    setFormData(initialForm)
  }

  return (
    <section id="contact" className="section-padding bg-brand-bg">
      <div className="container-main">
        <Reveal>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Book a consultation and get a detailed quotation.</h2>
          <p className="section-subtitle">
            Share your details and our team will call you within one business day. For urgent requests, use WhatsApp or direct call.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          <Reveal className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-bold">Office & appointment details</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-700">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-emerald" />
                No. 42, 2nd Street, Anna Nagar, Chennai, Tamil Nadu 600040
              </p>
              <p className="flex items-center gap-2">
                <PhoneCall size={16} className="shrink-0 text-brand-emerald" />
                <a href="tel:+919876543210" className="font-semibold hover:text-brand-emerald">
                  +91 98765 43210
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-brand-emerald" />
                <a href="mailto:hello@tnphomes.com" className="font-semibold hover:text-brand-emerald">
                  hello@tnphomes.com
                </a>
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="https://wa.me/919876543210?text=Hi%20TNP%20Homes%2C%20I%20want%20to%20book%20a%20free%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-bold text-white hover:bg-emerald-600"
              >
                <MessageCircle size={16} />
                WhatsApp Now
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-slate px-4 py-3 text-sm font-bold text-white hover:bg-slate-800"
              >
                <Phone size={16} />
                Click to Call
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-bold">Project enquiry form</h3>
            <form className="mt-4 space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass('name')}
                  placeholder="Your full name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-1 text-xs text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass('phone')}
                    placeholder="+91 98765 43210"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" role="alert" className="mt-1 text-xs text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass('email')}
                    placeholder="name@email.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="city" className="text-sm font-semibold text-slate-700">
                    City
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    className={inputClass('city')}
                    placeholder="Chennai"
                    aria-invalid={Boolean(errors.city)}
                    aria-describedby={errors.city ? 'city-error' : undefined}
                  />
                  {errors.city && (
                    <p id="city-error" role="alert" className="mt-1 text-xs text-red-600">
                      {errors.city}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="projectType" className="text-sm font-semibold text-slate-700">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={inputClass('projectType')}
                    aria-invalid={Boolean(errors.projectType)}
                    aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                  >
                    <option value="">Select project type</option>
                    <option value="Residential Construction">Residential Construction</option>
                    <option value="Commercial Construction">Commercial Construction</option>
                    <option value="Architectural Design">Architectural Design</option>
                    <option value="Interior Solutions">Interior Solutions</option>
                    <option value="Renovation & Extension">Renovation & Extension</option>
                  </select>
                  {errors.projectType && (
                    <p id="projectType-error" role="alert" className="mt-1 text-xs text-red-600">
                      {errors.projectType}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="text-sm font-semibold text-slate-700">
                  Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={inputClass('budget')}
                  aria-invalid={Boolean(errors.budget)}
                  aria-describedby={errors.budget ? 'budget-error' : undefined}
                >
                  <option value="">Select budget range</option>
                  {budgetOptions.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p id="budget-error" role="alert" className="mt-1 text-xs text-red-600">
                    {errors.budget}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-slate px-4 py-3 text-sm font-bold text-white hover:bg-slate-800"
              >
                Submit Enquiry
                <ArrowRight size={16} />
              </button>

              {submitted && (
                <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700" role="status">
                  Thank you. Our Chennai team will contact you shortly to schedule your consultation.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

