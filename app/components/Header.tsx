import Link from 'next/link';

export default function Header() {
  return (
    <header className="hidden md:block border-b border-slate-200 bg-white sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-blue-800 transition-colors">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <div>
            <div className="font-semibold text-slate-950 leading-tight text-sm">Simpli</div>
            <div className="font-semibold text-blue-700 text-xs leading-tight">Care</div>
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
            className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </nav>
    </header>
  );
}

