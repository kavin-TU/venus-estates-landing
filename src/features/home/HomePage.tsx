import { AboutSection } from './AboutSection'
import { BlogsSection } from './BlogsSection'
import { EnquiryFormSection } from './EnquiryFormSection'
import { FaqSection } from './FaqSection'
import { HeroSection } from './HeroSection'
import { MosaicSection } from './MosaicSection'
import { ProjectsSection } from './ProjectsSection'
import { ReasonSection } from './ReasonSection'
import { StatementSection } from './StatementSection'
import { TestimonialsSection } from './TestimonialsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ReasonSection />
      <StatementSection />
      <MosaicSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogsSection />
      <EnquiryFormSection />
    </>
  )
}
