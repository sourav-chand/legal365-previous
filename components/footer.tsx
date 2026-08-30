"use client";

import Link from "next/link";
import { CaseSeal } from "./ui/case-seal";
import { 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const footerLinks = {
  about: [
    { label: "About Us", href: "/about" },
    { label: "Leadership & Faculty", href: "/leadership" },
    { label: "Accreditation & BCI", href: "/accreditation" },
    { label: "Careers", href: "/careers" },
    { label: "Testimonials", href: "/testimonials" },
  ],
  academics: [
    { label: "Diploma Programs", href: "/academics/diploma" },
    { label: "BA LLB Programs", href: "/academics/ballb" },
    { label: "LLM Programs", href: "/academics/llm" },
    { label: "Admissions", href: "/admissions" },
    { label: "Fee Structure", href: "/fee-structure" },
  ],
  services: [
    { label: "Family Law", href: "/legal-services/family" },
    { label: "Corporate Law", href: "/legal-services/corporate" },
    { label: "Property Law", href: "/legal-services/property" },
    { label: "Criminal Law", href: "/legal-services/criminal" },
    { label: "All Services", href: "/legal-services" },
  ],
  agent: [
    { label: "Agent Registration", href: "/agent-registration" },
    { label: "Agent Login", href: "/agent-login" },
    { label: "Commission Structure", href: "/agent-commission" },
    { label: "Contact Support", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Mail, href: "https://facebook.com", label: "Facebook" },
  { icon: Phone, href: "https://twitter.com", label: "Twitter" },
  { icon: MapPin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "https://instagram.com", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-ink-navy text-parchment relative overflow-hidden">
      {/* Large Watermark Seal */}
      <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
        <CaseSeal size={400} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Block */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-brass flex items-center justify-center">
                <span className="text-ink-navy font-bold">L365</span>
              </div>
              <span className="text-display text-xl font-bold">Legal365</span>
            </Link>
            <p className="text-sm text-parchment/70 mb-6 leading-relaxed">
              Empowering legal education and delivering accessible justice across India.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm text-parchment/80 hover:text-brass transition-colors text-mono"
              >
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <a
                href="mailto:info@legal365.in"
                className="flex items-center gap-2 text-sm text-parchment/80 hover:text-brass transition-colors text-mono"
              >
                <Mail className="w-4 h-4" />
                info@legal365.in
              </a>
              <div className="flex items-start gap-2 text-sm text-parchment/80">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>123 Legal Plaza, Mumbai - 400001</span>
              </div>
            </div>
          </div>

          {/* About & Links */}
          <div>
            <h3 className="font-bold text-brass mb-4 uppercase text-sm tracking-wider">
              About & Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-parchment/80 hover:text-brass transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="font-bold text-brass mb-4 uppercase text-sm tracking-wider">
              Academics
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.academics.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-parchment/80 hover:text-brass transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Services */}
          <div>
            <h3 className="font-bold text-brass mb-4 uppercase text-sm tracking-wider">
              Legal Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-parchment/80 hover:text-brass transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Agent & Contact */}
          <div>
            <h3 className="font-bold text-brass mb-4 uppercase text-sm tracking-wider">
              Agent & Support
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.agent.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-parchment/80 hover:text-brass transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-brass/30 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-sm text-parchment/70 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Legal365. All rights reserved.{" "}
              <span className="text-parchment/50">|</span> Approved by Bar Council of India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-brass/10 hover:bg-brass/20 flex items-center justify-center transition-colors group"
              >
                <social.icon className="w-4 h-4 text-brass group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-xs text-parchment/70">
            <Link href="/privacy-policy" className="hover:text-brass transition-colors">
              Privacy Policy
            </Link>
            <span className="text-parchment/50">|</span>
            <Link href="/terms-of-service" className="hover:text-brass transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
