"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CaseSeal } from "./ui/case-seal";
import { 
  Scale, 
  Home, 
  Building2, 
  FileText, 
  Users, 
  Shield,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

interface LegalService {
  id: string;
  icon: typeof Scale;
  category: string;
  title: string;
  description: string;
  startingPrice: string;
}

const services: LegalService[] = [
  {
    id: "1",
    icon: Users,
    category: "Family Law",
    title: "Divorce & Custody",
    description: "Complete divorce proceedings with child custody arrangements and settlement negotiations.",
    startingPrice: "15,000",
  },
  {
    id: "2",
    icon: Building2,
    category: "Corporate Law",
    title: "Company Registration",
    description: "End-to-end company incorporation, GST registration, and compliance documentation.",
    startingPrice: "8,999",
  },
  {
    id: "3",
    icon: Home,
    category: "Property Law",
    title: "Property Documentation",
    description: "Sale deed, title verification, and property dispute resolution services.",
    startingPrice: "12,000",
  },
  {
    id: "4",
    icon: FileText,
    category: "Civil Law",
    title: "Contract Drafting",
    description: "Professional drafting and review of business contracts and legal agreements.",
    startingPrice: "5,000",
  },
  {
    id: "5",
    icon: Shield,
    category: "Criminal Law",
    title: "Bail & Defense",
    description: "Criminal defense representation, bail applications, and court proceedings.",
    startingPrice: "20,000",
  },
  {
    id: "6",
    icon: Scale,
    category: "Litigation",
    title: "Civil Litigation",
    description: "Complete civil court representation for disputes, claims, and litigation matters.",
    startingPrice: "25,000",
  },
];

const trackingSteps = [
  { label: "Filed", status: "completed" },
  { label: "Under Review", status: "completed" },
  { label: "Advocate Assigned", status: "current" },
  { label: "Resolved", status: "pending" },
];

export function LegalServices() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-parchment">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-oxblood font-semibold text-sm uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Legal Services Marketplace
          </motion.p>
          <motion.h2
            className="text-display text-4xl lg:text-5xl font-bold text-ink-navy leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fixed-Fee Legal Services
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Transparent pricing, verified advocates, and complete case tracking. Get expert legal help with no hidden costs.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
            >
              <Card className="h-full group">
                <CardContent className="p-6">
                  {/* Icon & Category */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-oxblood/10 flex items-center justify-center group-hover:bg-oxblood/20 transition-colors">
                        <service.icon className="w-6 h-6 text-oxblood" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          {service.category}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-ink-navy mb-2 group-hover:text-oxblood transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <CaseSeal size={20} className="text-oxblood" />
                      <div>
                        <div className="text-xs text-gray-500">Starting From</div>
                        <div className="text-xl font-bold text-oxblood text-mono">
                          ₹{service.startingPrice}
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="oxblood" 
                      size="sm"
                      asChild
                    >
                      <Link href={`/legal-services/${service.id}`}>
                        Apply Now
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Ticket Tracking Preview */}
        <motion.div
          className="bg-white rounded-xl p-8 shadow-lg mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-ink-navy mb-2">
              Track Your Case in Real-Time
            </h3>
            <p className="text-gray-600">
              Complete transparency at every step of your legal matter
            </p>
          </div>

          {/* Progress Stepper */}
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between relative">
              {/* Progress Line */}
              <div className="absolute left-0 right-0 top-6 h-0.5 bg-gray-200">
                <motion.div
                  className="h-full bg-oxblood"
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "66%" } : {}}
                  transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                />
              </div>

              {/* Steps */}
              {trackingSteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  className="relative z-10 flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors ${
                      step.status === "completed"
                        ? "bg-oxblood text-white"
                        : step.status === "current"
                        ? "bg-brass text-ink-navy ring-4 ring-brass/20"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {step.status === "completed" ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <span className="text-sm font-bold">{index + 1}</span>
                    )}
                  </div>
                  <div
                    className={`text-sm font-medium text-center ${
                      step.status === "pending" ? "text-gray-400" : "text-ink-navy"
                    }`}
                  >
                    {step.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Browse Categories CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Button variant="oxblood" size="lg" asChild>
            <Link href="/legal-services" className="gap-2">
              Browse 12+ Legal Categories
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
