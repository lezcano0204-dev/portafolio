import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Sobre Mí</h2>
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          {personalInfo.about}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>Enfoque: Frontend y Automatización Web</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>Ubicación: {personalInfo.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};