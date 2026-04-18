import { useEffect, useState } from 'react';
import { ArrowRight, Code2 } from 'lucide-react';

export function Hero() {
  const [text, setText] = useState('');
  const fullText = "React, Node.js, MongoDB, REST APIs";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length + 10) {
        clearInterval(timer); // stop roughly after done
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-900/10 via-background to-background -z-10" />
      
      <div className="max-w-5xl mx-auto px-6 text-center z-10 relative">
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm font-medium text-zinc-300">Available for freelance work</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] animate-slide-up" style={{ animationDelay: '0.1s' }}>
          I Build Fast, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-400 to-emerald-600">Scalable Web Apps</span>
          <br className="hidden md:block" /> That Grow Businesses
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Freelance Full Stack Developer helping startups and businesses launch high-performance web products.
        </p>
        
        <div className="h-8 mb-10 text-emerald-400 font-mono text-sm md:text-base animate-slide-up flex items-center justify-center" style={{ animationDelay: '0.3s' }}>
          <span>&gt; specialties: {text}</span>
          <span className="w-2 h-5 bg-emerald-400 ml-1 animate-pulse"></span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a href="#contact" className="group flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all w-full sm:w-auto">
            Hire Me
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a href="#projects" className="group flex items-center justify-center px-8 py-4 bg-white/5 text-white font-semibold rounded-full hover:bg-white/10 border border-white/10 transition-all w-full sm:w-auto backdrop-blur-sm">
            <Code2 className="mr-2" size={20} />
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
