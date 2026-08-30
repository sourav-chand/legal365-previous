"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { GraduationCap, Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

type CourseCategory = "all" | "diploma" | "bachelor" | "llm";

interface Course {
  id: string;
  category: CourseCategory;
  title: string;
  duration: string;
  mode: string;
  eligibility: string;
  fee: string;
  image: string;
}

const courses: Course[] = [
  {
    id: "1",
    category: "diploma",
    title: "Diploma in Cyber Law",
    duration: "1 Year",
    mode: "Online",
    eligibility: "Graduate in any discipline",
    fee: "₹45,000",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "2",
    category: "bachelor",
    title: "BA LLB (Hons.)",
    duration: "5 Years",
    mode: "Hybrid",
    eligibility: "10+2 with 45% marks",
    fee: "₹2,50,000/year",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "3",
    category: "llm",
    title: "LLM in Corporate Law",
    duration: "2 Years",
    mode: "Online",
    eligibility: "LLB degree",
    fee: "₹1,80,000/year",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "4",
    category: "diploma",
    title: "Diploma in Criminal Law",
    duration: "1 Year",
    mode: "Online",
    eligibility: "Graduate in any discipline",
    fee: "₹40,000",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "5",
    category: "bachelor",
    title: "BBA LLB (Hons.)",
    duration: "5 Years",
    mode: "Hybrid",
    eligibility: "10+2 with 45% marks",
    fee: "₹2,75,000/year",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "6",
    category: "llm",
    title: "LLM in Intellectual Property",
    duration: "2 Years",
    mode: "Online",
    eligibility: "LLB degree",
    fee: "₹1,90,000/year",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=400&auto=format&fit=crop",
  },
];

const categories = [
  { id: "all" as const, label: "All Programs" },
  { id: "diploma" as const, label: "Diplomas" },
  { id: "bachelor" as const, label: "Bachelor's" },
  { id: "llm" as const, label: "LLM" },
];

export function AcademicPrograms() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>("all");
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-brass font-semibold text-sm uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Academic Programs
          </motion.p>
          <motion.h2
            className="text-display text-4xl lg:text-5xl font-bold text-ink-navy leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Accredited Law Degree Programs
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Choose from diploma, undergraduate, and postgraduate programs designed for working professionals and aspiring lawyers.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "text-ink-navy"
                  : "text-gray-600 hover:text-brass"
              }`}
            >
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-brass rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Course Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onHoverStart={() => setHoveredCourse(course.id)}
                onHoverEnd={() => setHoveredCourse(null)}
              >
                <Card className="h-full overflow-hidden group">
                  {/* Course Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <motion.img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredCourse === course.id ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-ink-navy/90 text-parchment text-xs font-medium rounded-full backdrop-blur-sm">
                        Law Program
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2.5 py-1 bg-brass/10 text-brass text-xs font-medium rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </span>
                      <span className="px-2.5 py-1 bg-slate/10 text-slate text-xs font-medium rounded-full flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {course.mode}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-display text-xl font-bold text-ink-navy mb-2 group-hover:text-brass transition-colors">
                      {course.title}
                    </h3>

                    {/* Eligibility */}
                    <p className="text-sm text-gray-600 mb-4">
                      <span className="font-medium">Eligibility:</span> {course.eligibility}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <div className="text-xs text-gray-500 mb-0.5">Starting From</div>
                        <div className="text-lg font-bold text-brass text-mono">
                          {course.fee}
                        </div>
                      </div>
                      <Link
                        href={`/academics/${course.id}`}
                        className="text-sm font-medium text-ink-navy hover:text-brass transition-colors flex items-center gap-1 group/link"
                      >
                        View Details
                        <motion.div
                          animate={{
                            x: hoveredCourse === course.id ? 4 : 0,
                          }}
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
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/academics" className="gap-2">
              <GraduationCap className="w-5 h-5" />
              View All Academics
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
