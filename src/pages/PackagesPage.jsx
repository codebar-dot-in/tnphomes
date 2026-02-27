import PageHero from '../components/sections/PageHero'
import PackagesSection from '../components/sections/PackagesSection'
import ProcessSection from '../components/sections/ProcessSection'

export default function PackagesPage() {
  return (
    <>
      <PageHero
        title="Packages and Pricing"
        subtitle="Choose a package based on finish quality, engineering support, and project scale."
      />
      <PackagesSection />
      <ProcessSection />
    </>
  )
}

