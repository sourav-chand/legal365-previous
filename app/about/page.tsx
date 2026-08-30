import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-display text-5xl font-bold text-ink-navy mb-6">
              About Legal365
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                Legal365 is India's premier platform combining quality legal education with accessible legal services. We bridge the gap between aspiring legal professionals and those seeking expert legal assistance.
              </p>

              <h2 className="text-display text-3xl font-bold text-ink-navy mt-12 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-6">
                To democratize legal education and make professional legal services accessible to everyone across India, 365 days a year.
              </p>

              <h2 className="text-display text-3xl font-bold text-ink-navy mt-12 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 mb-6">
                To become the most trusted platform for legal education and services in India, empowering individuals with knowledge and connecting them with expert advocates.
              </p>

              <h2 className="text-display text-3xl font-bold text-ink-navy mt-12 mb-4">
                Why Choose Legal365?
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-brass text-xl">•</span>
                  <span><strong>Bar Council Approved:</strong> All our programs are recognized and approved by the Bar Council of India</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass text-xl">•</span>
                  <span><strong>Flexible Learning:</strong> Online and hybrid programs designed for working professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass text-xl">•</span>
                  <span><strong>Expert Faculty:</strong> Learn from experienced legal professionals and practicing advocates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass text-xl">•</span>
                  <span><strong>Verified Advocates:</strong> Access to 250+ empaneled advocates across 12+ practice areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass text-xl">•</span>
                  <span><strong>Transparent Pricing:</strong> Fixed fees for legal services with no hidden costs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
