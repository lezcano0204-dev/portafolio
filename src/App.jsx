// importaciones
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-xs text-slate-500 border-t border-slate-900">
        Diseñado y desarrollado con React, Vite y Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;