import { skillsData } from '../data/portfolioData';
import { Code } from 'lucide-react'; // Icono por defecto de respaldo

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-2 text-center">Habilidades & Tecnologías</h2>
      <p className="text-slate-400 text-center mb-12 max-w-md mx-auto">
        Herramientas y tecnologías que utilizo para dar vida a los proyectos.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skillsData.map((skill, index) => {
          // Si por alguna razón el icono no existe, usamos el icono 'Code' por defecto
          const IconComponent = skill.icon || Code;
          return (
            <div 
              key={index}
              className="bg-slate-900 border border-slate-800 hover:border-sky-500/50 rounded-xl p-5 text-center transition-all group flex flex-col items-center gap-3 shadow-md"
            >
              <div className="p-3 bg-slate-800/80 rounded-lg group-hover:bg-sky-500/10 transition-colors">
                <IconComponent className="w-6 h-6 text-sky-400" />
              </div>
              <span className="text-slate-200 font-medium group-hover:text-sky-400 transition-colors text-sm">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};