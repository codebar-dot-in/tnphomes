import AboutSection from '../components/sections/AboutSection'
import WhyChooseSection from '../components/sections/WhyChooseSection'
import TestimonialSection from '../components/sections/TestimonialSection'
import PageHero from '../components/sections/PageHero'

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About TNP Homes"
        subtitle="Chennai-rooted builders focused on engineering quality, transparent costing, and dependable site delivery."
      />
      <AboutSection />
      <WhyChooseSection />
      <TestimonialSection />
    </>
  )
}

