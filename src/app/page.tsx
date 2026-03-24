export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          Now in public beta
        </div>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-br from-white via-violet-200 to-violet-500 bg-clip-text text-transparent leading-tight">
          THE BEST OPENCLAW EVER
        </h1>
        <p className="max-w-2xl text-lg sm:text-xl text-zinc-400 mb-10 leading-relaxed">
          Aris AI optimizes your AI workflows so you can focus on what matters &mdash; shipping great products.
        </p>
        <button className="px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 transition-colors text-white font-semibold text-lg shadow-lg shadow-violet-900/40">
          Get Started Free
        </button>
      </section>

      {/* Features */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Everything you need to ship AI faster
        </h2>
        <p className="text-center text-zinc-500 mb-16 max-w-xl mx-auto">
          Aris AI handles the infrastructure complexity so your team can move at full speed.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "⚡",
              title: "Speed",
              description:
                "10x faster inference with intelligent caching and request batching.",
            },
            {
              icon: "🔒",
              title: "Security",
              description:
                "Enterprise-grade encryption and compliance built in from day one.",
            },
            {
              icon: "🚀",
              title: "Scale",
              description:
                "Auto-scale from prototype to production without changing a line of code.",
            },
          ].map(({ icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 hover:border-violet-500/50 hover:bg-zinc-900 transition-all group"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-violet-300 transition-colors">
                {title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-center text-zinc-500 mb-16 max-w-xl mx-auto">
          Start for free. Upgrade when you need more.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Free */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-10 flex flex-col">
            <h3 className="text-xl font-bold mb-1">Free</h3>
            <p className="text-zinc-500 text-sm mb-6">Perfect for side projects</p>
            <div className="flex items-end gap-1 mb-8">
              <span className="text-5xl font-extrabold">$0</span>
              <span className="text-zinc-500 mb-2">/mo</span>
            </div>
            <ul className="space-y-3 text-zinc-300 mb-10 flex-1">
              {[
                "1,000 API calls/month",
                "Basic analytics",
                "Community support",
                "1 project",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-violet-400">&#10003;</span> {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl border border-zinc-700 hover:border-violet-500 hover:text-violet-300 transition-colors font-semibold">
              Start Free
            </button>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-violet-500/60 bg-gradient-to-b from-violet-900/20 to-zinc-900/80 p-10 flex flex-col relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-violet-600 text-xs font-bold tracking-widest uppercase text-white shadow">
              Most Popular
            </span>
            <h3 className="text-xl font-bold mb-1">Pro</h3>
            <p className="text-zinc-400 text-sm mb-6">For teams shipping at scale</p>
            <div className="flex items-end gap-1 mb-8">
              <span className="text-5xl font-extrabold">$49</span>
              <span className="text-zinc-500 mb-2">/mo</span>
            </div>
            <ul className="space-y-3 text-zinc-300 mb-10 flex-1">
              {[
                "Unlimited API calls",
                "Advanced analytics",
                "Priority support",
                "Unlimited projects",
                "Custom integrations",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-violet-400">&#10003;</span> {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 transition-colors font-semibold text-white shadow-lg shadow-violet-900/40">
              Start Pro Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-600 text-sm">
        &copy; 2026 Aris AI. Built for developers, by developers.
      </footer>
    </main>
  );
}
