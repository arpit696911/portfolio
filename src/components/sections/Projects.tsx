import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Real-Time Chat Application',
    description: 'Highly scalable chat application supporting real-time messaging, secure login, and reliable socket syncing with optimized database queries.',
    stack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    link: '#',
    github: '#'
  },
  {
    title: 'AI Safety Equipment Detection System',
    description: 'Industrial deployment ready computer vision system for live camera feed detection of safety gear under varied lighting conditions.',
    stack: ['YOLOv8', 'OpenCV', 'Python'],
    link: '#',
    github: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">Featured Work</h2>
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface/30 p-8 md:p-12 rounded-3xl border border-white/5 hover:bg-surface/50 transition-all">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-white/5 text-emerald-300 text-sm rounded-full font-medium border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <a href={project.github} className="flex items-center text-zinc-400 hover:text-white transition-colors">
                    <FaGithub className="mr-2" size={20} /> Code
                  </a>
                  <a href={project.link} className="flex items-center text-zinc-400 hover:text-white transition-colors">
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 hidden lg:block">
                <div className="aspect-[4/3] rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 opacity-50 transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
