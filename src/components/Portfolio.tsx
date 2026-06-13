"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "MercadoFresh",
    category: "E-commerce",
    description:
      "Tienda online para distribuidora de alimentos. Catálogo de más de 2.000 productos, integración con MercadoPago y gestión de pedidos en tiempo real.",
    gradient: "from-[#0EA5E9] to-[#6366F1]",
    tag: "E-commerce",
    year: "2024",
    size: "large",
  },
  {
    name: "LexPro",
    category: "Sistema a Medida",
    description:
      "Sistema de gestión para estudio jurídico. Control de expedientes, facturación, agenda y portal de clientes.",
    gradient: "from-[#10B981] to-[#0EA5E9]",
    tag: "Sistema",
    year: "2024",
    size: "small",
  },
  {
    name: "Konstrux",
    category: "Landing Page",
    description:
      "Landing page de alta conversión para empresa constructora. +340% de leads en el primer mes.",
    gradient: "from-[#F59E0B] to-[#EC4899]",
    tag: "Landing",
    year: "2023",
    size: "small",
  },
  {
    name: "VidaFit Studio",
    category: "Desarrollo Web",
    description:
      "Plataforma para gimnasio boutique. Reserva de clases, membresías, pagos online y app PWA para usuarios.",
    gradient: "from-[#EC4899] to-[#6366F1]",
    tag: "Web App",
    year: "2023",
    size: "large",
  },
];

export default function Portfolio() {
  return (
    <section className="section-padding relative" id="portfolio">
      <div className="absolute inset-0 bg-[#040D1A]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="tag-pill mb-6">
              <span>✦</span> Portfolio
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Proyectos que
              <br />
              <span className="font-display italic gradient-text">hablan por sí solos</span>
            </h2>
          </div>
          <p className="text-white/45 text-base max-w-xs md:text-right leading-relaxed">
            Cada proyecto es una historia de transformación digital.
            Diseño, desarrollo y resultados medibles.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                project.size === "large" ? "md:row-span-1" : ""
              }`}
            >
              {/* Image / Gradient placeholder */}
              <div
                className={`relative bg-gradient-to-br ${project.gradient} p-8 flex flex-col justify-between min-h-[280px]`}
              >
                {/* Noise overlay */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
                  }}
                />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 grid-pattern opacity-20" />

                {/* Top meta */}
                <div className="relative flex items-center justify-between z-10">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-white/70 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.tag}
                  </span>
                  <span className="text-[11px] text-white/50">{project.year}</span>
                </div>

                {/* Floating shapes */}
                <div className="absolute top-12 right-8 w-20 h-20 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute bottom-16 left-8 w-16 h-16 rounded-full bg-black/20 blur-xl" />

                {/* Decorative pattern */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                  <div className="w-64 h-64 rounded-full border-2 border-white" />
                  <div className="absolute w-48 h-48 rounded-full border border-white" />
                  <div className="absolute w-32 h-32 rounded-full border border-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-3">
                    <span className="text-xs text-white/60 font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                    {project.description}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-3 rounded-full font-semibold text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Ver proyecto <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-white/40 text-sm mb-4">¿Quieres tu proyecto aquí?</p>
          <a href="#contacto" className="btn-primary">
            Hablemos de tu idea <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
