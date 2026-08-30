import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ClientsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 bg-parchment">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-5xl font-bold text-ink-navy mb-6">
              Our Clients
            </h1>
            <p className="text-xl text-gray-700 mb-12">
              Trusted by thousands of individuals, businesses, and organizations across India for legal education and services.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-brass text-mono mb-2">5,000+</div>
                <div className="text-gray-700">Students Enrolled</div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-brass text-mono mb-2">12,000+</div>
                <div className="text-gray-700">Cases Resolved</div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-brass text-mono mb-2">500+</div>
                <div className="text-gray-700">Corporate Clients</div>
              </div>
            </div>

            <div className="mt-16 text-left">
              <h2 className="text-3xl font-bold text-ink-navy mb-6">Client Categories</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>Individuals:</strong> Students pursuing law degrees, professionals seeking legal services for personal matters</p>
                <p><strong>Businesses:</strong> Startups and SMEs requiring corporate legal services, compliance, and documentation</p>
                <p><strong>Educational Institutions:</strong> Colleges partnering for continuing legal education programs</p>
                <p><strong>Government Bodies:</strong> Collaboration on legal awareness and capacity building initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
