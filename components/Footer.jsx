export default function Footer() {
  return (
    <footer className="py-6 bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
        <p>© {new Date().getFullYear()} SkyManage. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-sky-400 transition-all">
            Privacy
          </a>
          <a href="#" className="hover:text-sky-400 transition-all">
            Terms
          </a>
          <a href="#" className="hover:text-sky-400 transition-all">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
