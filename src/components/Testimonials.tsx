"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Martín Gutiérrez",
    role: "CEO · FreshMarket",
    quote:
      "El equipo de Nodo Bahiense superó todas nuestras expectativas. El e-commerce que desarrollaron triplicó nuestras ventas en el primer trimestre. La comunicación fue impecable.",
    stars: 5,
    initials: "MG",
  },
  {
    name: "Valeria Romero",
    role: "Fundadora · VidaFit Studio",
    quote:
      "Buscaba algo más que un sitio web, quería una experiencia para mis alumnos. Lo lograron con creces. Profesionalismo, puntualidad y un diseño que amo.",
    stars: 5,
    initials: "VR",
  },
  {
    name: "Rodrigo Pellegrini",
    role: "Abogado · Estudio Pellegrini",
    quote:
      "El sistema de gestión que nos hicieron ordenó todo nuestro estudio. Expedientes, turnos y facturación en un solo lugar. Increíble la diferencia en nuestra operatoria.",
    stars: 5,
    initials: "RP",
  },
  {
    name: "Camila Torres",
    role: "Directora · Konstrux SA",
    quote:
      "La landing page que nos diseñaron es espectacular. Empezamos a recibir consultas de calidad desde el primer día. El ROI fue inmediato.",
    stars: 5,
    initials: "CT",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding relative" id="testimonios">
      <div className="absolute inset-0 bg-[#0B2038]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-5">Testimonios</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl">
            Clientes que{" "}
            <span className="font-display italic gradient-text">confían</span>{" "}
            en nuestro trabajo
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl p-7 flex flex-col gap-5"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={12} className="fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/65 text-sm leading-relaxed flex-1">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/6">
                <div className="w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-xs font-bold text-white/60 flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/30 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/25 text-sm mt-14"
        >
          Más de <strong className="text-white/50">50 clientes</strong> confían en Nodo Bahiense
        </motion.p>
      </div>
    </section>
  );
}
