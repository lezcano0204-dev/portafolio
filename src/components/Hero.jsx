import { personalInfo } from '../data/portfolioData';
import { FileText, ArrowRight, GitBranch } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 text-center overflow-hidden">
      {/* Efecto de luz de fondo (Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[450px] h-[450px] bg-sky-500/15 rounded-full blur-[130px] pointer-events-none" />
      
      <span className="px-3 py-1 text-xs font-semibold tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800/80 rounded-full mb-4 shadow-sm">
        Disponible para proyectos
      </span>
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
        Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">{personalInfo.name}</span>
      </h1>
      <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
        {personalInfo.about}
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-medium transition-all shadow-lg shadow-sky-500/20 flex items-center gap-2"
        >
          Ver Proyectos <ArrowRight className="w-4 h-4" />
        </a>
        
        {/* Botón de Descargar CV */}
        <a
          href={`/${personalInfo.cvFileName}`}
          download={personalInfo.cvFileName}
          className="px-6 py-3 rounded-lg border border-slate-700 hover:border-sky-500/50 text-slate-300 hover:text-white font-medium transition-all flex items-center gap-2 bg-slate-900/50 backdrop-blur-sm"
        >
          <FileText className="w-4 h-4 text-sky-400" /> Descargar CV
        </a>

        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 font-medium transition-all flex items-center gap-2"
        >
          <GitBranch className="w-4 h-4" /> GitHub
        </a>
      </div>
    </section>
  );
};