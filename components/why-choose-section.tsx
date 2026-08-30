"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CaseSeal } from "./ui/case-seal";
import { Card } from "./ui/card";
import { DollarSign, UserCheck, Wallet } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Flexible Deposits",
    description: "Begin your legal education journey with partial deposit options. Pay in installments while you study, making quality legal education accessible to all.",
    color: "brass",
  },
  {
    icon: UserCheck,
    title: "Empaneled Advocates",
    description: "Access verified, experienced advocates across 12+ practice areas. Every legal professional is vetted and rated by real clients for your peace of mind.",
    color: "slate",
  },
  {
    icon: Wallet,
    title: "Agent Referral Wallet",
    description: "Become a Legal365 referral agent and earn 25% instant commission on every successful admission or service booking. Track earnings in real-time.",
    color: "oxblood",
  },
];

export function WhyChooseSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-parchment">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
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
            Why Choose Us
          </motion.p>
          <motion.h2
            className="text-display text-4xl lg:text-5xl font-bold text-ink-navy leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Built for Students, Clients & Partners
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Three unique value propositions that make Legal365 the trusted choice for legal education and services.
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="h-full p-8 bg-white relative overflow-hidden group">
                {/* Hover Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-brass/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-full bg-brass/10 flex items-center justify-center group-hover:bg-brass/20 transition-colors duration-300">
                      <feature.icon className="w-7 h-7 text-brass" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-display text-2xl font-bold text-ink-navy mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Case Seal - appears on hover */}
                  <motion.div
                    className="absolute top-6 right-6"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={
                      hoveredIndex === index
                        ? { opacity: 0.3, scale: 1, rotate: 0 }
                        : { opacity: 0, scale: 0, rotate: -180 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <CaseSeal size={32} className="text-brass" />
                  </motion.div>
                </div>

                {/* Border accent on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-brass"
                  initial={{ scaleX: 0 }}
                  animate={hoveredIndex === index ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Supporting Image Banner */}
        <motion.div
          className="relative rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="aspect-[21/9] relative">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop"
              alt="Legal365 community"
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink-navy/80 to-ink-navy/40" />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex items-center gap-3 mb-4"
                  >
                    <CaseSeal size={40} />
                    <div className="h-12 w-px bg-brass/50" />
                    <div>
                      <div className="text-4xl font-bold text-brass text-mono">15+</div>
                      <div className="text-sm text-parchment/80">Years of Excellence</div>
                    </div>
                  </motion.div>
                  
                  <motion.h3
                    className="text-display text-3xl lg:text-4xl font-bold text-parchment mb-3"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.1 }}
                  >
                    Join a Community of Legal Excellence
                  </motion.h3>
                  
                  <motion.p
                    className="text-parchment/90 text-lg"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    From aspiring law students to seasoned advocates, Legal365 brings together a diverse community committed to legal excellence and accessible justice.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
