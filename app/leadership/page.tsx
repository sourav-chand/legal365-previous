import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const leaders = [
  {
    name: "Dr. Rajesh Kapoor",
    role: "Founder & Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "30+ years of experience in legal education and practice. Former Dean of a leading law school.",
  },
  {
    name: "Adv. Priya Mehta",
    role: "Academic Head",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Supreme Court advocate with specialization in constitutional law and academic curriculum development.",
  },
  {
    name: "Prof. Arun Sharma",
    role: "Dean of Studies",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Published author and researcher in corporate law with PhD from Delhi University.",
  },
  {
    name: "Adv. Meera Desai",
    role: "Legal Services Head",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "15+ years managing legal service teams across multiple jurisdictions and practice areas.",
  },
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 bg-parchment">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-display text-5xl font-bold text-ink-navy mb-6">
              Leadership & Faculty
            </h1>
            <p className="text-xl text-gray-700">
              Meet the experienced professionals guiding Legal365's mission to democratize legal education and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-ink-navy mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-brass font-semibold mb-4">{leader.role}</p>
                  <p className="text-gray-700">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
