import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-white mb-4">¡Trabajemos Juntos!</h2>
      <p className="text-slate-400 mb-8 max-w-xl mx-auto">
        ¿Tienes un proyecto en mente, necesitas una automatización o quieres hablar de tecnología? Mi bandeja de entrada está abierta.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href={`mailto:${personalInfo.email}`}
          className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-medium transition-all shadow-lg shadow-sky-500/20"
        >
          Enviar Correo
        </a>
        <a
          href={personalInfo.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all"
        >
          Escribir por WhatsApp
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 font-medium transition-all"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};