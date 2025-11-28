export default function FeaturesSection() {
  const features = [
    {
      title: "Real-Time Collaboration",
      description:
        "Work together with your team seamlessly. Comment, tag, and update tasks instantly.",
      icon: "⚡",
    },
    {
      title: "Smart Automation",
      description:
        "Automate repetitive workflows using triggers and rules to save time and reduce mistakes.",
      icon: "🤖",
    },
    {
      title: "Advanced Analytics",
      description:
        "Track goals, progress, and performance with beautiful data visualizations.",
      icon: "📊",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-slate-950 border-t border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-14 space-y-4">
          <h2 className="text-4xl font-bold">Powerful Features</h2>
          <p className="text-gray-400">
            Tools to help teams stay aligned and move faster together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-900 p-6 rounded-2xl border border-white/10 hover:border-sky-500/50 hover:-translate-y-1 transition-all shadow-lg shadow-sky-900/10"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
