import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "BA LLB Graduate, 2023",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    content: "Legal365's flexible online program allowed me to complete my LLB while working full-time. The faculty support was exceptional, and the curriculum was comprehensive.",
    rating: 5,
  },
  {
    name: "Priya Singh",
    role: "Legal Service Client",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    content: "The property documentation service was transparent and efficient. My advocate kept me updated throughout the process. Highly recommend!",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "LLM in Corporate Law",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    content: "The LLM program exceeded my expectations. The case studies were relevant, and the networking opportunities with practicing advocates were invaluable.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Referral Agent Partner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    content: "The agent program has been a great income source. The commission structure is fair, and the wallet system makes tracking earnings simple.",
    rating: 5,
  },
  {
    name: "Vikram Malhotra",
    role: "Diploma in Cyber Law",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    content: "As an IT professional, this diploma perfectly complemented my career. The online format fit my schedule, and the content was up-to-date.",
    rating: 5,
  },
  {
    name: "Anjali Sharma",
    role: "Divorce Case Client",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
    content: "During a difficult time, Legal365 connected me with a compassionate and skilled advocate. The fixed fee structure removed financial stress.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 bg-parchment">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-display text-5xl font-bold text-ink-navy mb-6">
              What Our Community Says
            </h1>
            <p className="text-xl text-gray-700">
              Hear from students, clients, and partners who have experienced Legal365 firsthand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-ink-navy">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-brass text-brass"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
