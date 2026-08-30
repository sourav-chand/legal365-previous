import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, TrendingUp, Heart } from "lucide-react";

const positions = [
  {
    title: "Legal Content Writer",
    department: "Content",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Academic Coordinator",
    department: "Academics",
    location: "Mumbai",
    type: "Full-time",
  },
  {
    title: "Legal Service Manager",
    department: "Operations",
    location: "Delhi",
    type: "Full-time",
  },
  {
    title: "Business Development Executive",
    department: "Sales",
    location: "Bangalore",
    type: "Full-time",
  },
];

const benefits = [
  {
    icon: Briefcase,
    title: "Career Growth",
    description: "Clear career progression paths and skill development opportunities",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with passionate professionals in the legal education space",
  },
  {
    icon: TrendingUp,
    title: "Competitive Compensation",
    description: "Industry-leading salaries and performance bonuses",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible work arrangements and comprehensive health benefits",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <div className="bg-ink-navy text-parchment py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-display text-5xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-parchment/80">
                Build your career at the intersection of legal education and technology. Help us democratize access to legal knowledge and services across India.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="py-20 bg-parchment">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-display text-4xl font-bold text-ink-navy text-center mb-12">
              Why Work With Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-brass/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-brass" />
                  </div>
                  <h3 className="font-bold text-lg text-ink-navy mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-display text-4xl font-bold text-ink-navy text-center mb-12">
              Open Positions
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:border-brass transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-ink-navy mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <Button variant="outline">Apply Now</Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Don't see the right position? Send us your resume anyway!
              </p>
              <Button variant="default">Submit General Application</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
