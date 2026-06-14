"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { value: "50+", label: "Proyectos entregados" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "3", label: "Años de experiencia" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0C2240]" />
      <div className="absolute inset-0 grid-pattern opacity-100" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-36 pb-24"
      >
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-label mb-8 flex items-center justify-center gap-3"
        >
          <span className="w-8 h-px bg-white/20 inline-block" />
          Estudio Digital · Bahía Blanca
          <span className="w-8 h-px bg-white/20 inline-block" />
        </motion.p>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[82px] font-bold leading-[1.06] tracking-tight mb-8"
        >
          <span className="text-white">Transformamos ideas</span>
          <br />
          <span className="font-display italic gradient-text">
            en experiencias digitales
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg md:text-xl text-white/45 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Creamos sitios web, e-commerce y sistemas a medida que impulsan
          el crecimiento de tu negocio.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-24"
        >
          <a href="#contacto" className="btn-primary text-sm px-7 py-3.5 group">
            Solicitar presupuesto
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#portfolio" className="btn-secondary text-sm px-7 py-3.5">
            Ver proyectos
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-10 border-t border-white/8 pt-10"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/35 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
