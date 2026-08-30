"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function AgentRegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
    referralSource: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Agent registration:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 bg-parchment">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-display text-5xl font-bold text-ink-navy mb-6">
                Become an Agent Partner
              </h1>
              <p className="text-xl text-gray-700">
                Earn 25% commission on every successful referral. Join our growing network of agents across India.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="mt-2"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Your city"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="experience">
                    Relevant Experience (Optional)
                  </Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Tell us about your experience in sales, education, or legal services"
                    className="mt-2"
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="referralSource">
                    How did you hear about us?
                  </Label>
                  <Input
                    id="referralSource"
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={handleChange}
                    placeholder="Social media, friend, advertisement, etc."
                    className="mt-2"
                  />
                </div>

                <div className="bg-brass/10 border-l-4 border-brass p-4 rounded-r">
                  <h3 className="font-bold text-ink-navy mb-2">
                    Agent Benefits:
                  </h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 25% instant commission on all referrals</li>
                    <li>• Real-time wallet tracking</li>
                    <li>• Dedicated support team</li>
                    <li>• Marketing materials provided</li>
                  </ul>
                </div>

                <Button type="submit" variant="default" className="w-full">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
