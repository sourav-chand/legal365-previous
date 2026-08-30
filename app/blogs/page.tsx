import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogSection } from "@/components/blog-section";

export default function BlogsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 bg-parchment">
        <div className="container mx-auto px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-5xl font-bold text-ink-navy mb-6">
              Legal Insights & Updates
            </h1>
            <p className="text-xl text-gray-700">
              Stay informed with the latest legal news, case studies, and expert analysis from our team of experienced advocates and legal professionals.
            </p>
          </div>
        </div>
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
