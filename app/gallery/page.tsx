import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    title: "Campus Event",
    category: "Events",
  },
  {
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    title: "Law Library",
    category: "Facilities",
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    title: "Student Collaboration",
    category: "Student Life",
  },
  {
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
    title: "Lecture Hall",
    category: "Facilities",
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    title: "Group Discussion",
    category: "Student Life",
  },
  {
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
    title: "Graduation Ceremony",
    category: "Events",
  },
  {
    url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
    title: "Study Area",
    category: "Facilities",
  },
  {
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
    title: "Seminar",
    category: "Events",
  },
  {
    url: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop",
    title: "Research Library",
    category: "Facilities",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 bg-parchment">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-display text-5xl font-bold text-ink-navy mb-6">
              Gallery
            </h1>
            <p className="text-xl text-gray-700">
              Explore our campus, facilities, and the vibrant community that makes Legal365 a premier destination for legal education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-brass text-sm font-medium">
                      {image.category}
                    </span>
                    <h3 className="text-parchment text-xl font-bold mt-1">
                      {image.title}
                    </h3>
                  </div>
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
