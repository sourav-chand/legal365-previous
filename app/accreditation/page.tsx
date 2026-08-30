import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Award, CheckCircle, FileText, Shield } from "lucide-react";

export default function AccreditationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="bg-ink-navy text-parchment py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Award className="w-16 h-16 text-brass mx-auto mb-6" />
              <h1 className="text-display text-5xl font-bold mb-6">
                Accreditation & Recognition
              </h1>
              <p className="text-xl text-parchment/80">
                Legal365 is proud to be recognized and approved by India's premier legal education regulatory bodies.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-brass" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ink-navy mb-3">
                  Bar Council of India (BCI) Approved
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  All our law degree programs are approved and recognized by the Bar Council of India, ensuring that graduates can practice law across India. Our curriculum meets BCI standards for legal education excellence.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-brass" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ink-navy mb-3">
                  UGC Recognized
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our institution is recognized by the University Grants Commission (UGC), ensuring that our degrees are valid for higher education, government jobs, and international applications.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-brass" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ink-navy mb-3">
                  NAAC Accredited
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We have achieved NAAC (National Assessment and Accreditation Council) accreditation with an 'A' grade, demonstrating our commitment to quality education, infrastructure, and student outcomes.
                </p>
              </div>
            </div>

            <div className="bg-brass/10 border-l-4 border-brass p-6 rounded-r-lg">
              <h3 className="font-bold text-lg text-ink-navy mb-2">
                What This Means For You
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brass flex-shrink-0 mt-0.5" />
                  <span>Your degree is recognized nationwide and internationally</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brass flex-shrink-0 mt-0.5" />
                  <span>Eligible to practice law after completing your LLB</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brass flex-shrink-0 mt-0.5" />
                  <span>Qualify for government legal positions and judicial services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brass flex-shrink-0 mt-0.5" />
                  <span>Pursue higher studies (LLM, PhD) in India and abroad</span>
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
