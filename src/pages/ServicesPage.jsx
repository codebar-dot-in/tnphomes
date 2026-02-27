import PageHero from '../components/sections/PageHero'
import ServicesSection from '../components/sections/ServicesSection'
import ProcessSection from '../components/sections/ProcessSection'
import PackagesSection from '../components/sections/PackagesSection'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Construction Services"
        subtitle="Residential, commercial, architecture, interiors, renovation, and turnkey execution tailored to Tamil Nadu projects."
      />
      <ServicesSection />
      <ProcessSection />
      <PackagesSection />
    </>
  )
}

