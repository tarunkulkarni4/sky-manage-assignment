export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aarav Mehta",
      role: "Product Manager, NovaPay",
      quote:
        "SkyManage helped our team cut project delays by almost 40%. The clarity is insane.",
    },
    {
      name: "Sara Thompson",
      role: "Founder, Bright Studio",
      quote:
        "Finally a tool my team actually enjoys using. The UI is clean, fast, and intuitive.",
    },
    {
      name: "Rohan Patel",
      role: "Engineering Lead, CloudSquare",
      quote:
        "Our standups are shorter, and our delivery is faster. Everything lives in one place now.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-950 border-t border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-4xl font-bold">Loved by modern teams</h2>
          <p className="text-gray-400">
            Teams across startups and SaaS companies rely on SkyManage every
            day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-slate-900 p-6 rounded-2xl border border-white/10 shadow-lg shadow-sky-900/10 flex flex-col justify-between"
            >
              <p className="text-sm text-gray-300 mb-4">“{t.quote}”</p>
              <figcaption>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-gray-400">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
