"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { 
  Users, 
  Award, 
  CheckCircle, 
  GraduationCap, 
  Briefcase, 
  MessageSquare,
  Building,
  UserCheck,
  Menu,
  X
} from "lucide-react";

const aboutItems = [
  { icon: Building, label: "About Us", href: "/about" },
  { icon: Users, label: "Leadership & Faculty", href: "/leadership" },
  { icon: CheckCircle, label: "Why Choose Us", href: "/why-choose-us" },
  { icon: Award, label: "Accreditation & BCI", href: "/accreditation" },
  { icon: Briefcase, label: "Careers", href: "/careers" },
  { icon: MessageSquare, label: "Testimonials", href: "/testimonials" },
  { icon: Building, label: "Affiliations", href: "/affiliations" },
  { icon: UserCheck, label: "Clients", href: "/clients" },
  { icon: Users, label: "Staff", href: "/staff" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-150 ease-out",
          "bg-ink-navy text-parchment",
          isScrolled ? "h-14 shadow-lg" : "h-18"
        )}
        initial={false}
        animate={{
          height: isScrolled ? "56px" : "72px",
        }}
      >
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-px bg-brass opacity-0 transition-opacity duration-150",
            isScrolled && "opacity-100"
          )}
        />

      <div className="container mx-auto h-full px-6 lg:px-8">
          <div className="flex h-full items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-2 text-xl font-bold tracking-tight hover:text-brass transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-brass flex items-center justify-center">
                  <span className="text-ink-navy font-bold text-sm">L365</span>
                </div>
                <span className="text-display">Legal365</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link 
                href="/" 
                className="text-sm font-medium hover:text-brass transition-colors relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brass transition-all group-hover:w-full" />
              </Link>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button className="text-sm font-medium hover:text-brass transition-colors relative group flex items-center gap-1">
                  About
                  <motion.svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    animate={{ rotate: aboutOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brass transition-all group-hover:w-full" />
                </button>

                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-ink-navy border border-brass/30 rounded-lg shadow-2xl overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-px bg-brass/20 p-4">
                        {aboutItems.map((item, index) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 p-3 bg-ink-navy hover:bg-slate rounded-md transition-colors group"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brass/10 flex items-center justify-center group-hover:bg-brass/20 transition-colors">
                              <item.icon className="w-4 h-4 text-brass" />
                            </div>
                            <span className="text-sm font-medium text-parchment group-hover:text-brass transition-colors">
                              {item.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                href="/academics" 
                className="text-sm font-medium hover:text-brass transition-colors relative group"
              >
                Academics
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brass transition-all group-hover:w-full" />
              </Link>

              <Link 
                href="/legal-services" 
                className="text-sm font-medium hover:text-brass transition-colors relative group"
              >
                Legal Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brass transition-all group-hover:w-full" />
              </Link>

              <Link 
                href="/careers" 
                className="text-sm font-medium hover:text-brass transition-colors relative group"
              >
                Careers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brass transition-all group-hover:w-full" />
              </Link>

              <Link 
                href="/blogs" 
                className="text-sm font-medium hover:text-brass transition-colors relative group"
              >
                Blogs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brass transition-all group-hover:w-full" />
              </Link>

              <Link 
                href="/gallery" 
                className="text-sm font-medium hover:text-brass transition-colors relative group"
              >
                Gallery
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brass transition-all group-hover:w-full" />
              </Link>

              <Link 
                href="/contact" 
                className="text-sm font-medium hover:text-brass transition-colors relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brass transition-all group-hover:w-full" />
              </Link>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button variant="default" size="sm" asChild>
                <Link href="/register">Register</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-parchment hover:text-brass transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ink-navy lg:hidden pt-[72px]"
          >
            <div className="container mx-auto px-6 lg:px-8 py-8 h-full overflow-y-auto">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-lg font-medium text-parchment hover:text-brass transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>

                <div className="border-t border-brass/20 pt-4">
                  <p className="text-sm font-semibold text-brass mb-3">About</p>
                  <div className="flex flex-col gap-2 pl-4">
                    {aboutItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 text-parchment hover:text-brass transition-colors py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/academics"
                  className="text-lg font-medium text-parchment hover:text-brass transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Academics
                </Link>

                <Link
                  href="/legal-services"
                  className="text-lg font-medium text-parchment hover:text-brass transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Legal Services
                </Link>

                <Link
                  href="/careers"
                  className="text-lg font-medium text-parchment hover:text-brass transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Careers
                </Link>

                <Link
                  href="/blogs"
                  className="text-lg font-medium text-parchment hover:text-brass transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blogs
                </Link>

                <Link
                  href="/gallery"
                  className="text-lg font-medium text-parchment hover:text-brass transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </Link>

                <Link
                  href="/contact"
                  className="text-lg font-medium text-parchment hover:text-brass transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="border-t border-brass/20 pt-4 mt-4 flex flex-col gap-3">
                  <Button variant="ghost" asChild className="w-full">
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button variant="default" asChild className="w-full">
                    <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                      Register
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
