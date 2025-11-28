"use client";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-lg">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center font-bold text-sm">
            SM
          </div>
          <span className="text-lg font-semibold tracking-tight">
            SkyManage
          </span>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#features" className="hover:text-sky-400 transition-all">Features</a>
          <a href="#pricing" className="hover:text-sky-400 transition-all">Pricing</a>
          <a href="#testimonials" className="hover:text-sky-400 transition-all">Testimonials</a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm rounded-lg border border-gray-600 hover:border-gray-400 transition-all">
            Sign In
          </button>
          <button className="px-4 py-2 text-sm rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold transition-all">
            Get Started
          </button>
        </div>

        {/* Mobile Menu */}
        <button className="md:hidden px-3 py-2 rounded-lg border border-gray-700">
          ☰
        </button>
      </nav>
    </header>
  );
}
