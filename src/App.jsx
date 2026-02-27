import AppHeader from './components/sections/AppHeader'
import Footer from './components/sections/Footer'
import FloatingActions from './components/sections/FloatingActions'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import PackagesPage from './pages/PackagesPage'
import ContactPage from './pages/ContactPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import CostEstimatorPage from './pages/CostEstimatorPage'
import ResidentialPackagesPage from './pages/ResidentialPackagesPage'
import CommercialPackagesPage from './pages/CommercialPackagesPage'

function PageProgressBar() {
  const { pathname } = useLocation()
  const [width, setWidth] = useState(0)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setWidth(0)
    setOpacity(1)
    const t1 = setTimeout(() => setWidth(60), 30)
    const t2 = setTimeout(() => setWidth(90), 200)
    const t3 = setTimeout(() => setWidth(100), 400)
    const t4 = setTimeout(() => setOpacity(0), 550)
    const t5 = setTimeout(() => setWidth(0), 750)
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout)
  }, [pathname])

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-0.5 bg-brand-yellow"
      style={{ width: `${width}%`, opacity, transition: 'width 200ms ease, opacity 200ms ease' }}
    />
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <PageProgressBar />
      <AppHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/packages/residential" element={<ResidentialPackagesPage />} />
          <Route path="/packages/commercial" element={<CommercialPackagesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cost-estimator" element={<CostEstimatorPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
