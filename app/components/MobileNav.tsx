'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-6 right-6 z-50 md:hidden flex flex-col gap-1.5 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className={`w-6 h-0.5 bg-slate-900 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-slate-900 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-slate-900 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Side Navigation */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-white border-r border-slate-200 z-40 transform transition-transform flex flex-col md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo / Branding */}
        <div className="border-b border-slate-200 p-8">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-blue-800 transition-colors">
              <span className="text-white font-semibold text-sm">S</span>
            </div>
            <div>
              <div className="font-semibold text-slate-950 leading-tight text-sm">Simpli</div>
              <div className="font-semibold text-blue-700 text-xs leading-tight">Care</div>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-8">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-2.5 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-950 font-medium transition-all text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="border-t border-slate-200 p-4">
          <Link
            href="/contact"
            className="block bg-blue-700 text-white px-4 py-2.5 rounded-lg text-center font-medium hover:bg-blue-800 transition-colors w-full text-sm"
            onClick={() => setIsOpen(false)}
          >
            Get in Touch
          </Link>
        </div>

        {/* Footer Info */}
        <div className="border-t border-slate-200 px-4 py-4 text-xs text-slate-500">
          <p>© 2026 SympliCare AI</p>
          <p className="mt-2">Shaping care home operations.</p>
        </div>
      </aside>
    </>
  );
}
