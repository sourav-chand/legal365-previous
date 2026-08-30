import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhyChooseSection } from "@/components/why-choose-section";

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <WhyChooseSection />
      </main>
      <Footer />
    </div>
  );
}
