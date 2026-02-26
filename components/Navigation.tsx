'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'MISSION', href: '/mission' },
    { name: 'WHITEPAPER', href: '/whitepaper' },
    { name: 'NEWS', href: '/news' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0e1a]/95 backdrop-blur-md border-b border-[#00f0ff]/20 grid-lines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 border border-[#00f0ff]/40 flex items-center justify-center">
              <span className="text-[#00f0ff] font-mono text-xs font-bold">{'/>'}</span>
            </div>
            <h1 className="font-mono font-bold text-lg tracking-wider gradient-text">
              SPACE CREDITS
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-mono text-xs tracking-widest text-gray-400 hover:text-[#00f0ff] transition-colors duration-300 px-4 py-2 flex items-center gap-2"
              >
                <span className="status-dot opacity-40" />
                {link.name}
              </Link>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
            <a href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=B7Wz6HcG3XoYEqPUYmLu97gHMk4xifVRr6J3bJZ9u9Aj" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary text-xs px-5 py-2 ml-2">
                BUY NOW
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#00f0ff] p-2 border border-[#00f0ff]/20 hover:bg-[#00f0ff]/5 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0e1a]/98 backdrop-blur-md border-t border-[#00f0ff]/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block font-mono text-xs tracking-widest text-gray-400 hover:text-[#00f0ff] transition-colors py-3 flex items-center gap-2 border-b border-white/5"
              >
                <span className="status-dot opacity-40" />
                {link.name}
              </Link>
            ))}
            <a href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=B7Wz6HcG3XoYEqPUYmLu97gHMk4xifVRr6J3bJZ9u9Aj" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary w-full text-xs mt-4">
                BUY NOW
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
