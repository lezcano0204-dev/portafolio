import { Code, Layout, Server, Database, GitBranch, Cpu, Globe, Terminal, FileCheck } from 'lucide-react';

export const personalInfo = {
  name: "Miguel Lezcano",
  role: "Desarrollador Web Frontend",
  location: "Colombia",
  about: "Desarrollador Web en formación (Aprendiz ADSO - SENA) en búsqueda de patrocinio / contrato de aprendizaje. Combino mi formación académica en desarrollo de software con la creación práctica de interfaces modernas, catálogos web interactivos y herramientas automatizadas para optimizar la atención de negocios locales. Orientado al código limpio, el aprendizaje continuo y la entrega de soluciones de alto impacto.",
  github: "https://github.com/lezcano0204-dev",
  linkedin: "https://linkedin.com/in/tu-usuario",
  whatsapp: "https://wa.me/573126720648",
  email: "lezcano0204@gmail.com",
  cvFileName: "Hoja de Vida SENA - Miguel lezcano.pdf"
};

export const skillsData = [
  // Frontend & Herramientas
  { name: "React", icon: Code },
  { name: "Next.js", icon: Globe },
  { name: "JavaScript (ES6+)", icon: Code },
  { name: "TypeScript", icon: Code },
  { name: "Tailwind CSS", icon: Layout },
  { name: "Vite", icon: Cpu },

  // Backend & Lenguajes
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Terminal },
  { name: "Java", icon: Code },

  // Bases de Datos & Pruebas
  { name: "SQL Server", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Postman", icon: FileCheck },
  { name: "Git & GitHub", icon: GitBranch }
];

export const projectsData = [
  {
    id: 1,
    title: "Catálogo Web con WhatsApp",
    description: "Plataforma interactiva para comercios locales con gestión de productos, carrito dinámico y pedido directo al chat de WhatsApp.",
    tags: ["React", "Tailwind CSS", "Node.js"],
    image: "https://images.unsplash.com/photo-1556742049-0a67d5e462c4?auto=format&fit=crop&w=600&q=80",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Landing Page Automatizada",
    description: "Sitio web optimizado para conversión con integración de respuestas rápidas, diseño responsive y excelente rendimiento.",
    tags: ["React", "Vite", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    demoUrl: "#",
    githubUrl: "#",
  },
];