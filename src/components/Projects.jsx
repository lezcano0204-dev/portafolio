import { projectsData } from '../data/portfolioData';
import { ExternalLink, GitBranch } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-2 text-center">Proyectos Destacados</h2>
      <p className="text-slate-400 text-center mb-12 max-w-lg mx-auto">
        Algunas de las aplicaciones y soluciones web que he construido recientemente.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div 
            key={project.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between shadow-xl group"
          >
            <div>
              {/* Imagen con zoom al pasar el cursor */}
              <div className="overflow-hidden h-48 bg-slate-950 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2.5 py-1 text-xs font-medium bg-slate-800 text-sky-400 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-6 py-4 bg-slate-900/50 border-t border-slate-800/80 text-sm font-medium">
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors"
              >
                Ver Demo <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                Código <GitBranch className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};