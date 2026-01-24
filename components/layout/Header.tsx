'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  Bars3Icon,
  XMarkIcon,
  PrinterIcon,
} from '@heroicons/react/24/outline';

const navItems = [
  { name: 'The Case', href: '/' },
  { name: 'Timeline', href: '/timeline' },
  { name: 'Legal', href: '/legal-analysis' },
  { name: 'Assessment', href: '/comprehensive-assessment' },
  { name: 'Evidence', href: '/evidence' },
  { name: 'Entities', href: '/entities' },
  { name: 'Financial', href: '/financial' },
  { name: 'Precedents', href: '/precedents' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-neutral-100 sticky top-0 z-40 no-print">
      <div className="flex items-center justify-between px-4 py-3 lg:px-6">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 -ml-2 text-neutral-500 hover:bg-neutral-100 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="w-5 h-5" />
          ) : (
            <Bars3Icon className="w-5 h-5" />
          )}
        </button>

        {/* Title - mobile */}
        <Link href="/" className="lg:hidden">
          <h1 className="text-base font-serif font-bold text-neutral-900">
            V/MC Liability
          </h1>
        </Link>

        {/* Spacer for desktop */}
        <div className="hidden lg:block" />

        {/* Right side actions */}
        <button
          onClick={() => window.print()}
          className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-md transition-colors flex items-center gap-2"
          title="Print this page"
        >
          <PrinterIcon className="w-4 h-4" />
          <span className="hidden sm:inline text-xs">Print</span>
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-neutral-100 bg-white">
          <ul className="py-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname.startsWith(item.href));
              
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      isActive 
                        ? 'bg-neutral-100 text-neutral-900 font-medium'
                        : 'text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
