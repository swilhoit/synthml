'use client';

import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400 font-mono">SynthML</span>
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8 font-mono">
              <li><Link href="#features" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition">Features</Link></li>
              <li><Link href="#how-it-works" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition">How It Works</Link></li>
              <li><Link href="#pricing" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition">Pricing</Link></li>
            </ul>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <ThemeSwitcher />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition font-mono">
              Get Started
            </button>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <ThemeSwitcher />
            <button className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 