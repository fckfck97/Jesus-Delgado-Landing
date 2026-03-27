import { ContactSection } from "@/components/home/contact-section"
import { HeroSection } from "@/components/home/hero-section"
import { MarqueeSection } from "@/components/home/marquee-section"
import { ProjectsSection } from "@/components/home/projects-section"
import { SpecialtiesSection } from "@/components/home/specialties-section"
import { StackSection } from "@/components/home/stack-section"
import { StatsSection } from "@/components/home/stats-section"

export function HomePage() {
  return (
    <>
      <div className="container">
        <HeroSection />
        <StatsSection />
        <SpecialtiesSection />
      </div>
      <MarqueeSection />
      <div className="container">
        <StackSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  )
}
