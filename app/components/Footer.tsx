import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo2.jpeg" alt="SympliCare AI Logo" width={32} height={32} className="rounded-lg" />
              <span className="text-base font-semibold text-slate-950">SympliCare AI</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Supporting care teams with practical, structured operations management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-950 mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 hover:text-slate-950 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-slate-950 mb-4 text-sm">Get in Touch</h4>
            <p className="text-sm text-slate-600 mb-4">
              Interested in early access or learning more?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#77bdda] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#5a9bb3] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 pt-8">
          {/* Disclaimer */}
          <p className="text-xs text-slate-600 mb-6 leading-relaxed">
            <strong>Disclaimer:</strong> SympliCare AI is a technology platform intended to support operational workflows. It does not provide clinical advice or replace regulatory responsibilities.
          </p>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-xs text-slate-500">
            <p>&copy; {currentYear} SympliCare AI. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-700 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-700 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
