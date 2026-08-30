import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LegalServices } from "@/components/legal-services";

export default function LegalServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-5xl font-bold text-ink-navy mb-6">
              Legal Services Marketplace
            </h1>
            <p className="text-xl text-gray-700">
              Connect with verified advocates for all your legal needs. Transparent pricing, expert representation, and complete case tracking from start to finish.
            </p>
          </div>
        </div>
        <LegalServices />
      </main>
      <Footer />
    </div>
  );
}
