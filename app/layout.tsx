import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legal365 - Master the Law, Solve Legal Matters 365 Days",
  description: "Premium law education with flexible deposits and expert legal services with transparent fixed fees. Bar Council of India approved programs and verified advocates.",
  keywords: ["law education", "legal services", "BCI approved", "law degree", "legal consultation", "India"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
