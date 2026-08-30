"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import { CaseSeal } from "./ui/case-seal";
import { Award } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Years Active", value: 15, suffix: "+" },
  { label: "Graduates", value: 5000, suffix: "+" },
  { label: "Cases Resolved", value: 12000, suffix: "+" },
  { label: "Advocates", value: 250, suffix: "+" },
];

function CountUp({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="text-mono">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function Hero() {
  const [activeTrack, setActiveTrack] = useState<"college" | "marketplace">("college");

  return (
    <section className="relative min-h-screen bg-ink-navy text-parchment overflow-hidden">
      {/* Animated Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B08D57' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{
            x: [0, 60],
            y: [0, 60],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brass/30 bg-brass/10"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <CaseSeal size={20} />
              </motion.div>
              <span className="text-sm font-medium">Approved by Bar Council of India</span>
              <Award className="w-4 h-4 text-brass" />
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                className="text-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              >
                Master the Law.
              </motion.h1>
              <motion.h2
                className="text-display text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-brass"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.19, ease: "easeOut" }}
              >
                Solve Legal Matters 365 Days a Year.
              </motion.h2>
            </div>

            {/* Subheadline */}
            <motion.p
              className="text-lg lg:text-xl text-parchment/80 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
            >
              Premium law education with flexible deposits. Expert legal services with transparent fixed fees. One platform, two powerful solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.37, ease: "easeOut" }}
            >
              <Button size="lg" asChild>
                <Link href="/academics">Explore Law Courses</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/legal-services">Apply for Legal Service</Link>
              </Button>
            </motion.div>

            {/* Track Selector */}
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.46, ease: "easeOut" }}
            >
              <button
                onClick={() => setActiveTrack("college")}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTrack === "college"
                    ? "bg-brass text-ink-navy shadow-lg"
                    : "bg-brass/10 text-brass border border-brass/30 hover:bg-brass/20"
                }`}
              >
                Legal College
              </button>
              <button
                onClick={() => setActiveTrack("marketplace")}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTrack === "marketplace"
                    ? "bg-oxblood text-parchment shadow-lg"
                    : "bg-oxblood/10 text-oxblood border border-oxblood/30 hover:bg-oxblood/20"
                }`}
              >
                Services Marketplace
              </button>
            </motion.div>

            {/* Stats Strip */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="relative">
                  {index > 0 && (
                    <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-brass/30" />
                  )}
                  <div className="text-center lg:text-left">
                    <div className="text-2xl lg:text-3xl font-bold text-brass mb-1">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs lg:text-sm text-parchment/70 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative rounded-lg overflow-hidden border-4 border-parchment/20 shadow-2xl">
              {/* Placeholder image - replace with actual image */}
              <div className="aspect-[4/3] bg-slate">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop"
                  alt="Legal education and services"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Case Seal Badge Overlay */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-ink-navy p-4 rounded-lg border-2 border-brass shadow-xl"
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <CaseSeal size={48} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-parchment to-transparent" />
    </section>
  );
}
