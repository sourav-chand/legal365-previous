import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AffiliationsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 bg-parchment">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-display text-5xl font-bold text-ink-navy mb-12 text-center">
              Our Affiliations & Partners
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                Legal365 is proud to collaborate with leading institutions and organizations to deliver excellence in legal education and services.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-ink-navy mb-4">Bar Council of India</h3>
                  <p className="text-gray-700">Official recognition and approval for all our law degree programs.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-ink-navy mb-4">National Law Universities</h3>
                  <p className="text-gray-700">Academic partnerships for curriculum development and faculty exchange.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-ink-navy mb-4">State Bar Associations</h3>
                  <p className="text-gray-700">Collaboration with bar associations across multiple states.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-ink-navy mb-4">Legal Aid Organizations</h3>
                  <p className="text-gray-700">Partnership for pro bono services and community legal education.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
