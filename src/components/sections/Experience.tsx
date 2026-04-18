export function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-white/5 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center">Work Experience</h2>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          {/* Timeline Item */}
          <div className="relative pl-8 md:pl-0 mb-12">
            <div className="md:hidden absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1.5 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-12">
              <div className="md:w-1/3 md:text-right relative">
                <div className="hidden md:block absolute w-4 h-4 bg-emerald-500 rounded-full -right-[26px] top-1.5 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <h3 className="text-xl font-bold text-white">Full Stack Web Developer</h3>
                <p className="text-emerald-400 font-medium">Open Source CHD</p>
                <p className="text-zinc-500 text-sm mt-1">2024 - Present</p>
              </div>
              
              <div className="md:w-2/3">
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2 mt-1">▹</span>
                    Built scalable React frontend modules conforming to modern UI standards.
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2 mt-1">▹</span>
                    Integrated robust REST APIs ensuring tight frontend-backend coupling.
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2 mt-1">▹</span>
                    Debugged and resolved critical production issues rapidly.
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2 mt-1">▹</span>
                    Worked in a remote Git workflow team environment with stringent PR reviews.
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2 mt-1">▹</span>
                    Consistently improved codebase performance and quality benchmarks.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400">Why Hire Me for Your Next Project?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Fast Communication', 'Clean Scalable Code', 'Startup Speed Execution', 'Problem Solver Mindset', 'Reliable Delivery', 'Long-Term Collaboration'].map((trait, i) => (
              <span key={i} className="px-5 py-2.5 rounded-full bg-surface border border-white/5 text-zinc-300 font-medium shadow-sm hover:border-emerald-500/30 transition-colors">
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
