'use client';

import Link from 'next/link';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      {/* Banner for dashboard access */}
      <div className="bg-indigo-600 text-white text-center py-2 font-mono">
        <div className="container mx-auto max-w-[1400px] px-4">
          <p className="text-sm">
            Existing users: 
            <Link href="/dashboard" className="font-bold underline ml-2 hover:text-indigo-200 transition">
              Access your dashboard
            </Link>
          </p>
        </div>
      </div>
      
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </main>
  );
}
