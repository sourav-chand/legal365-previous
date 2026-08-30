import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function StaffPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 bg-parchment">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-display text-5xl font-bold text-ink-navy mb-6 text-center">
              Our Team
            </h1>
            <p className="text-xl text-gray-700 mb-12 text-center">
              Meet the dedicated professionals who make Legal365 a success every day.
            </p>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-ink-navy mb-6">Academic Team</h2>
                <p className="text-gray-700 mb-4">
                  Our academic team comprises experienced educators, curriculum designers, and student support coordinators who ensure quality education delivery.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 50+ Full-time Faculty Members</li>
                  <li>• 100+ Visiting Faculty and Industry Experts</li>
                  <li>• 20+ Academic Coordinators</li>
                  <li>• Dedicated Student Success Team</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-ink-navy mb-6">Legal Services Team</h2>
                <p className="text-gray-700 mb-4">
                  A robust team managing our legal services marketplace and ensuring quality service delivery.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 250+ Empaneled Advocates</li>
                  <li>• 15+ Service Coordinators</li>
                  <li>• Quality Assurance Specialists</li>
                  <li>• Client Support Team (24/7)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-ink-navy mb-6">Support Functions</h2>
                <p className="text-gray-700 mb-4">
                  Behind every successful operation are dedicated teams in technology, operations, and administration.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Technology & Platform Development</li>
                  <li>• Marketing & Communications</li>
                  <li>• Finance & Administration</li>
                  <li>• HR & Talent Management</li>
                </ul>
              </div>

              <div className="bg-brass/10 border-l-4 border-brass p-6 rounded-r-lg">
                <h3 className="font-bold text-lg text-ink-navy mb-2">
                  Join Our Team
                </h3>
                <p className="text-gray-700 mb-4">
                  We're always looking for passionate individuals to join our mission. Check our <a href="/careers" className="text-brass hover:text-brass-dark font-medium">Careers page</a> for current openings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
