"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "MercadoFresh",
    category: "E-commerce",
    description:
      "Tienda online para distribuidora de alimentos. Catálogo de más de 2.000 productos, integración con MercadoPago y gestión de pedidos en tiempo real.",
    accent: "#4DC8FF",
    year: "2024",
    metric: "+180% ventas",
  },
  {
    name: "LexPro",
    category: "Sistema a Medida",
    description:
      "Sistema de gestión para estudio jurídico. Control de expedientes, facturación, agenda y portal de clientes.",
    accent: "#93C5FD",
    year: "2024",
    metric: "−60% tiempo admin.",
  },
  {
    name: "Konstrux",
    category: "Landing Page",
    description:
      "Landing page de alta conversión para empresa constructora. +340% de leads en el primer mes.",
    accent: "#A5B4FC",
    year: "2023",
    metric: "+340% leads",
  },
  {
    name: "VidaFit Studio",
    category: "Web App",
    description:
      "Plataforma para gimnasio boutique. Reserva de clases, membresías, pagos online y PWA para usuarios.",
    accent: "#7DD3FC",
    year: "2023",
    metric: "PWA · pagos online",
  },
];

export default function Portfolio() {
  return (
    <section className="section-padding relative" id="portfolio">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <p className="section-label mb-5">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Proyectos que{" "}
              <span className="font-display italic gradient-text">hablan por sí solos</span>
            </h2>
          </div>
          <p className="text-white/35 text-sm max-w-xs md:text-right leading-relaxed">
            Cada proyecto es una historia de transformación digital con resultados medibles.
          </p>
        </motion.div>

        {/* List */}
        <div className="flex flex-col divide-y divide-white/6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group py-7 sm:py-8 cursor-pointer"
            >
              {/* Mobile layout */}
              <div className="md:hidden">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xs text-white/20 font-mono flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {project.name}
                      </h3>
                      <span
                        className="text-[9px] font-semibold uppercase tracking-widest px-1.5 py-0.5 rounded inline-block mt-1"
                        style={{ color: project.accent, background: `${project.accent}12`, border: `1px solid ${project.accent}20` }}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/25 group-hover:border-white/30 group-hover:text-white/60 transition-all flex-shrink-0 mt-0.5">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
                <p className="text-white/38 text-sm leading-relaxed mb-3 pl-7">
                  {project.description}
                </p>
                <div className="flex items-center gap-3 pl-7">
                  <span className="text-white/70 text-xs font-semibold">{project.metric}</span>
                  <span className="text-white/15 text-xs">·</span>
                  <span className="text-white/25 text-xs">{project.year}</span>
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden md:flex md:items-center gap-6">
                <span className="text-xs text-white/20 font-mono w-8 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                      {project.name}
                    </h3>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded"
                      style={{ color: project.accent, background: `${project.accent}12`, border: `1px solid ${project.accent}20` }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <p className="text-white/38 text-sm leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-white/80 text-sm font-semibold mb-1">{project.metric}</div>
                  <div className="text-white/25 text-xs">{project.year}</div>
                </div>
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/25 group-hover:border-white/30 group-hover:text-white/70 transition-all duration-200 flex-shrink-0">
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#contacto" className="btn-primary text-sm px-6 py-3">
            Hablemos de tu idea <ArrowUpRight size={15} />
          </a>
          <p className="text-white/25 text-sm">¿Querés tu proyecto aquí?</p>
        </motion.div>
      </div>
    </section>
  );
}
