"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import { CaseSeal } from "./ui/case-seal";
import { Wallet, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export function AgentCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-ink-navy text-parchment overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(176, 141, 87, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brass/10 border border-brass/30 mb-6"
          >
            <Wallet className="w-4 h-4 text-brass" />
            <span className="text-sm font-medium text-brass">Agent Partnership Program</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="text-display text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Earn{" "}
            <span className="text-brass">25% Instant Commission</span>{" "}
            on Every Referral
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="text-lg lg:text-xl text-parchment/80 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join our referral network and earn commissions on both academic admissions and legal service bookings. Track your earnings in real-time with our dedicated wallet system.
          </motion.p>

          {/* Benefits */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              {
                icon: Wallet,
                value: "25%",
                label: "Instant Commission",
              },
              {
                icon: TrendingUp,
                value: "₹15k+",
                label: "Avg. Monthly Earning",
              },
              {
                icon: Users,
                value: "500+",
                label: "Active Agents",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.label}
                className="bg-slate/30 backdrop-blur-sm rounded-lg p-6 border border-brass/20"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-brass/20 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-brass" />
                </div>
                <div className="text-3xl font-bold text-brass text-mono mb-1">
                  {benefit.value}
                </div>
                <div className="text-sm text-parchment/70">{benefit.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button size="lg" variant="default" asChild className="gap-2">
              <Link href="/agent-registration">
                <CaseSeal size={20} />
                Become an Agent Partner
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
