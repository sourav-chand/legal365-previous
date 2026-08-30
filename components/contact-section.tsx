"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { CaseSeal } from "./ui/case-seal";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  purpose: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const contactDetails = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "123 Legal Plaza, Law District, Mumbai - 400001",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    mono: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@legal365.in",
    mono: true,
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

const purposes = [
  "Academic Inquiry",
  "Legal Service Request",
  "Agent Partnership",
  "General Inquiry",
];

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    purpose: purposes[0],
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        email: "",
        purpose: purposes[0],
        message: "",
      });
      setIsSuccess(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-ink-navy text-parchment">
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
            Get in Touch
          </motion.p>
          <motion.h2
            className="text-display text-4xl lg:text-5xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Start a Conversation
          </motion.h2>
          <motion.p
            className="text-lg text-parchment/80"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Whether you're interested in our programs or need legal assistance, we're here to help.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Details */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center">
                      <detail.icon className="w-5 h-5 text-brass" />
                    </div>
                    <div>
                      <div className="text-sm text-parchment/70 mb-1">{detail.label}</div>
                      <div className={`font-medium ${detail.mono ? "text-mono" : ""}`}>
                        {detail.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <motion.div
              className="hidden lg:block pt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="relative p-8 bg-brass/10 rounded-lg border border-brass/20">
                <CaseSeal size={80} className="text-brass/30 mx-auto" />
                <p className="text-center mt-4 text-parchment/80 text-sm">
                  Trusted by thousands of students and clients across India
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-parchment rounded-xl p-8 shadow-2xl">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      placeholder="Enter your full name"
                      className="mt-2"
                    />
                    {errors.name && (
                      <p className="text-oxblood text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      error={!!errors.phone}
                      placeholder="+91 98765 43210"
                      className="mt-2 text-mono"
                    />
                    {errors.phone && (
                      <p className="text-oxblood text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      placeholder="your.email@example.com"
                      className="mt-2 text-mono"
                    />
                    {errors.email && (
                      <p className="text-oxblood text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Inquiry Purpose */}
                  <div>
                    <Label htmlFor="purpose">Inquiry Purpose</Label>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {purposes.map((purpose) => (
                        <button
                          key={purpose}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, purpose }))
                          }
                          className={`px-4 py-2.5 rounded-md text-sm font-medium transition-all ${
                            formData.purpose === purpose
                              ? "bg-brass text-ink-navy shadow-md"
                              : "bg-white text-gray-700 border border-gray-300 hover:border-brass"
                          }`}
                        >
                          {purpose}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      placeholder="Tell us how we can help you..."
                      className="mt-2"
                      rows={5}
                    />
                    {errors.message && (
                      <p className="text-oxblood text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="navy"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <CaseSeal size={20} />
                        </motion.div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <CaseSeal size={20} />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              ) : (
                <motion.div
                  className="py-12 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sage/20 mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <CheckCircle className="w-10 h-10 text-sage" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-ink-navy mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    We'll get back to you within 24 hours.
                  </p>
                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <CaseSeal size={48} className="text-brass mx-auto" animate />
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
