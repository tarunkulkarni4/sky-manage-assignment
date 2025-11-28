import DashboardCard from "./DashboardPreview";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Work Smarter.
            <span className="block text-sky-400">Manage Better.</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-lg">
            SkyManage helps teams collaborate, organize work, automate tasks,
            and complete projects faster — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold text-lg transition-all">
              Get Started Free
            </button>

            <button className="px-6 py-3 rounded-xl border border-gray-600 hover:border-gray-400 text-lg transition-all">
              Watch Demo ▶
            </button>
          </div>

          <p className="text-sm text-gray-400">
            🚀 No credit card required — free trial available
          </p>
        </div>

        {/* Dashboard preview placeholder */}
        <div className="flex-1">
          <div className="rounded-2xl border border-gray-700 bg-slate-900 p-6 shadow-xl shadow-sky-900/40">
            <div className="h-64 md:h-80 bg-slate-800 rounded-xl flex items-center justify-center text-gray-500 text-sm">
              <DashboardCard/>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
