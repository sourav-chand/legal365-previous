"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Eye, Calendar } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  views: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    id: "1",
    category: "Family Law",
    categoryColor: "slate",
    title: "Understanding Child Custody Laws in India: A Complete Guide",
    excerpt: "Navigate the complexities of child custody arrangements with insights from experienced family law advocates.",
    author: "Adv. Priya Sharma",
    date: "Dec 15, 2024",
    views: "2.4k",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "2",
    category: "Corporate Law",
    categoryColor: "brass",
    title: "GST Compliance: Essential Checklist for New Companies",
    excerpt: "A practical guide to GST registration, filing requirements, and common pitfalls for startups and businesses.",
    author: "Adv. Rajesh Kumar",
    date: "Dec 12, 2024",
    views: "1.8k",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "3",
    category: "Criminal Law",
    categoryColor: "oxblood",
    title: "Your Rights During Police Investigation: What You Should Know",
    excerpt: "Understanding your legal rights and protections during criminal investigations and arrests in India.",
    author: "Adv. Meera Desai",
    date: "Dec 10, 2024",
    views: "3.1k",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=600&auto=format&fit=crop",
  },
];

export function BlogSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getCategoryColor = (color: string) => {
    const colors = {
      slate: "bg-slate/10 text-slate",
      brass: "bg-brass/10 text-brass-dark",
      oxblood: "bg-oxblood/10 text-oxblood",
    };
    return colors[color as keyof typeof colors] || colors.brass;
  };

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <motion.p
              className="text-brass font-semibold text-sm uppercase tracking-wider mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Latest Insights
            </motion.p>
            <motion.h2
              className="text-display text-4xl lg:text-5xl font-bold text-ink-navy leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Legal Knowledge & Updates
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button variant="outline" asChild>
              <Link href="/blogs" className="gap-2">
                View All Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <Card className="h-full group overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold ${getCategoryColor(
                        post.categoryColor
                      )}`}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 text-mono mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {post.views}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-display text-xl font-bold text-ink-navy mb-3 line-clamp-2 group-hover:text-brass transition-colors">
                    <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Author & Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-700">{post.author}</span>
                    <Link
                      href={`/blogs/${post.id}`}
                      className="text-sm font-medium text-brass hover:text-brass-dark transition-colors flex items-center gap-1 group/link"
                    >
                      Read Article
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
