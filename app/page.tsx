import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { AcademicPrograms } from "@/components/academic-programs";
import { LegalServices } from "@/components/legal-services";
import { BlogSection } from "@/components/blog-section";
import { AgentCTA } from "@/components/agent-cta";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <WhyChooseSection />
        <AcademicPrograms />
        <LegalServices />
        <BlogSection />
        <AgentCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
