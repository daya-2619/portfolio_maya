import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/sonner"
import dynamic from "next/dynamic"

const ContactSection = dynamic(() => import("@/components/contact-section"), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </main>
  );
}
