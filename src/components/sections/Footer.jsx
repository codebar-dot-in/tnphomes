import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6">
      <div className="container-main flex flex-col items-start justify-between gap-4 text-sm text-slate-600 md:flex-row md:items-center">
        <p>TNP HOMES | Chennai, Tamil Nadu | Residential & Commercial Construction</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/" className="font-semibold hover:text-brand-emerald">
            Back to top
          </Link>
          <Link to="/contact" className="font-semibold hover:text-brand-emerald">
            Book Appointment
          </Link>
        </div>
      </div>
    </footer>
  )
}
