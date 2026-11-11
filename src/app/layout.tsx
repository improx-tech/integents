import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Improx Integents | Global Enterprise Management Consulting & Digital Intelligence",
  description: "Senior Partner-led business advisory and production engineering. Strategy & Transformation, Agentic AI Control Planes, Enterprise Operations, and Industry 4.0 for Global Market Leaders.",
  keywords: ["Management Consulting", "Enterprise AI", "Agentic Systems", "Supply Chain Modernization", "CFO Advisory", "Digital Transformation", "Improx Ecosystem"],
  icons: {
    icon: "/improx-logo.png",
    shortcut: "/improx-logo.png",
    apple: "/improx-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-white text-slate-900 selection:bg-[#1e60b5] selection:text-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white text-slate-900 font-sans`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
