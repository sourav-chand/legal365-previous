import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AcademicPrograms } from "@/components/academic-programs";

export default function AcademicsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 bg-parchment">
        <div className="container mx-auto px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-5xl font-bold text-ink-navy mb-6">
              Academic Programs
            </h1>
            <p className="text-xl text-gray-700">
              Pursue your legal education with Bar Council approved programs designed for flexibility and excellence. Choose from diploma, undergraduate, and postgraduate courses tailored for your career goals.
            </p>
          </div>
        </div>
        <AcademicPrograms />
      </main>
      <Footer />
    </div>
  );
}
