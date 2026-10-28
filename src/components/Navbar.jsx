import { personalInfo } from '../data/portfolioData';

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg text-white tracking-wider">
          {personalInfo.name.split(" ")[0]}<span className="text-sky-400">.dev</span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-sky-400 transition-colors">Sobre mí</a>
          <a href="#skills" className="hover:text-sky-400 transition-colors">Habilidades</a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">Proyectos</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">Contacto</a>
        </nav>
        <a
          href="#contact"
          className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-sky-500 hover:bg-sky-400 text-slate-950 rounded-lg transition-all shadow-md shadow-sky-500/20"
        >
          Hablemos
        </a>
      </div>
    </header>
  );
};