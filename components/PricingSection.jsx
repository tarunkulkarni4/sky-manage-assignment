export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individuals and side projects.",
      popular: false,
      features: ["Up to 3 projects", "Basic analytics", "Email support"],
    },
    {
      name: "Pro",
      price: "₹499/mo",
      description: "Great for growing product and dev teams.",
      popular: true,
      features: [
        "Unlimited projects",
        "Advanced reports",
        "Team permissions",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "Let’s talk",
      description: "Custom solutions for large organizations.",
      popular: false,
      features: [
        "Dedicated success manager",
        "Custom integrations",
        "SSO & Security reviews",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 bg-slate-950 border-t border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-4xl font-bold">Simple, transparent pricing</h2>
          <p className="text-gray-400">
            Start free, upgrade only when your team is ready.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-slate-900 p-6 rounded-2xl border shadow-lg shadow-sky-900/10 flex flex-col justify-between ${
                plan.popular
                  ? "border-sky-500/70 scale-[1.02]"
                  : "border-white/10"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-sky-500 text-slate-900 px-3 py-1 rounded-full font-semibold">
                  Most Popular
                </span>
              )}

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-2xl font-bold">{plan.price}</p>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {plan.features.map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-6 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-sky-500 hover:bg-sky-400 text-slate-900"
                    : "border border-gray-600 hover:border-gray-400"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
