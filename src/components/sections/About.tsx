export function About() {
  return (
    <section id="about" className="py-24 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">About Me</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-zinc-400 leading-relaxed font-light mb-6">
            I’m a Computer Science undergraduate with strong engineering fundamentals in Data Structures, Algorithms, system design, and production-ready full-stack development.
          </p>
          <p className="text-xl text-zinc-400 leading-relaxed font-light">
            I specialize in building modern SaaS products, dashboards, marketplaces, internal tools, and real-time systems. My approach combines robust backend architectures with meticulously crafted, animated frontends to deliver truly premium user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
