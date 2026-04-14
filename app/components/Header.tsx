import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="hidden md:block border-b border-slate-200 bg-white sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <Image src="/logo2.jpeg" alt="SympliCare AI Logo" width={36} height={36} className="rounded-full" />
          <div>
            <div className="font-semibold text-slate-950 leading-tight text-sm">SympliCare <span className="font-semibold text-[#77bdda] text-xs leading-tight">AI</span></div>
            
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-slate-700 hover:text-slate-950 transition-colors font-medium text-sm"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-slate-700 hover:text-slate-950 transition-colors font-medium text-sm"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="bg-[#77bdda] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#5a9bb3] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </nav>
    </header>
  );
}

