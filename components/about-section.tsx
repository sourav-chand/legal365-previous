"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Users, Award } from "lucide-react";
import { CaseSeal } from "./ui/case-seal";

const features = [
  {
    icon: Shield,
    title: "Accredited Excellence",
    description: "Bar Council of India approved programs ensuring the highest standards of legal education and practice.",
  },
  {
    icon: Users,
    title: "Expert Faculty & Advocates",
    description: "Learn from seasoned legal professionals and work with verified advocates across multiple practice areas.",
  },
  {
    icon: Award,
    title: "Flexible & Transparent",
    description: "Partial deposit admissions for students. Fixed-fee legal services with no hidden costs for clients.",
  },
];

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-parchment">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <motion.p
                className="text-brass font-semibold text-sm uppercase tracking-wider mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                About Legal365
              </motion.p>
              <motion.h2
                className="text-display text-4xl lg:text-5xl font-bold text-ink-navy leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Empowering Legal Minds, Delivering Justice
              </motion.h2>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 border-l-2 border-brass pl-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-brass/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-brass" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-ink-navy mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden border-4 border-ink-navy/10 shadow-xl">
              <div className="aspect-[4/3] bg-slate/20">
                <img
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=700&auto=format&fit=crop"
                  alt="Legal education environment"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Case Seal Overlay */}
              <motion.div
                className="absolute -top-3 -right-3 bg-brass p-3 rounded-lg shadow-xl"
                initial={{ rotate: -180, scale: 0 }}
                animate={isInView ? { rotate: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <CaseSeal size={40} className="text-ink-navy" />
              </motion.div>
            </div>

            {/* Stats Callout */}
            <motion.div
              className="absolute -bottom-6 left-6 right-6 bg-ink-navy text-parchment p-6 rounded-lg shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-brass flex items-center justify-center">
                    <Award className="w-6 h-6 text-ink-navy" />
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-brass text-mono">98%</div>
                  <div className="text-sm text-parchment/80">Student Satisfaction Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
