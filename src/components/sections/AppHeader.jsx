import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from '../../data/content'

export default function AppHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-main flex h-20 items-center justify-between gap-4">
        <Link to="/" className="shrink-0" aria-label="TNP Homes Home">
          <img src="/logo/tnp-homes-logo.jpg" alt="TNP Homes logo" className="h-12 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-xs font-bold uppercase tracking-widest transition ${
                  isActive ? 'text-brand-yellow' : 'text-slate-700 hover:text-brand-yellow'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-2 text-sm font-bold tracking-widest text-black transition hover:bg-yellow-400"
          >
            Get Free Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-nav" className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-main grid gap-2 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-2 py-2 text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-brand-yellow hover:bg-slate-50"
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-slate px-4 py-2 text-sm font-semibold text-white"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
