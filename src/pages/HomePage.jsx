import HeroSection from '../components/sections/HeroSection'
import ServicesHighlightSection from '../components/sections/ServicesHighlightSection'
import ProcessSection from '../components/sections/ProcessSection'
import StatsBannerSection from '../components/sections/StatsBannerSection'
import WhyChooseSection from '../components/sections/WhyChooseSection'
import TrustBadgeSection from '../components/sections/TrustBadgeSection'
import CostEstimatorBanner from '../components/sections/CostEstimatorBanner'
import FeaturedProjectsSection from '../components/sections/FeaturedProjectsSection'
import PackageHighlightSection from '../components/sections/PackageHighlightSection'
import ContactFormSection from '../components/sections/ContactFormSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesHighlightSection />
      <ProcessSection />
      <StatsBannerSection />
      <WhyChooseSection />
      <TrustBadgeSection />
      <CostEstimatorBanner />
      <FeaturedProjectsSection />
      <PackageHighlightSection />
      <ContactFormSection />
    </>
  )
}
