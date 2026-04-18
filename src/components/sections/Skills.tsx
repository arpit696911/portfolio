import { Code, Database, Globe, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Globe className="text-emerald-400 mb-4" size={32} />,
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'UI/UX']
  },
  {
    title: 'Backend',
    icon: <Database className="text-emerald-500 mb-4" size={32} />,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth']
  },
  {
    title: 'Database',
    icon: <Code className="text-teal-400 mb-4" size={32} />,
    skills: ['MongoDB', 'MySQL']
  },
  {
    title: 'Tools',
    icon: <Wrench className="text-teal-500 mb-4" size={32} />,
    skills: ['GitHub', 'CI/CD', 'Linux', 'Testing', 'Agile', 'Scrum']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative border-t border-white/5 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-colors">
              {category.icon}
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-zinc-400 font-medium text-sm flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
