"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Martín Gutiérrez",
    role: "CEO · FreshMarket",
    quote:
      "El equipo de Nodo Bahiense superó todas nuestras expectativas. El e-commerce que desarrollaron triplicó nuestras ventas en el primer trimestre. La comunicación fue impecable de principio a fin.",
    stars: 5,
    initials: "MG",
    color: "#38BDF8",
  },
  {
    name: "Valeria Romero",
    role: "Fundadora · VidaFit Studio",
    quote:
      "Buscaba algo más que un sitio web, quería una experiencia para mis alumnos. Lo lograron con creces. Profesionalismo, puntualidad y un diseño que amo. Los recomiendo sin dudarlo.",
    stars: 5,
    initials: "VR",
    color: "#818CF8",
  },
  {
    name: "Rodrigo Pellegrini",
    role: "Abogado · Estudio Pellegrini",
    quote:
      "El sistema de gestión que nos hicieron ordenó todo nuestro estudio. Expedientes, turnos, facturación en un solo lugar. Increíble la diferencia que hizo en nuestra operatoria diaria.",
    stars: 5,
    initials: "RP",
    color: "#34D399",
  },
  {
    name: "Camila Torres",
    role: "Directora · Konstrux SA",
    quote:
      "La landing page que nos diseñaron es espectacular. Empezamos a recibir consultas de calidad desde el primer día. El ROI fue inmediato. Estamos planificando la segunda fase ya.",
    stars: 5,
    initials: "CT",
    color: "#F59E0B",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding relative" id="testimonios">
      <div className="absolute inset-0 bg-gradient-to-b from-[#040D1A] via-[#060F20] to-[#040D1A]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Glow center */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-60 bg-accent/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="tag-pill mx-auto mb-6">
            <span>✦</span> Testimonios
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Clientes que{" "}
            <span className="font-display italic gradient-text">confían</span>
            <br />
            en nuestro trabajo
          </h2>
          <p className="text-white/45 text-lg max-w-md mx-auto">
            Las palabras de quienes ya dieron el salto digital con nosotros.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass glass-hover rounded-3xl p-8 relative group"
            >
              {/* Quote icon */}
              <div
                className="absolute top-6 right-7 opacity-15 group-hover:opacity-25 transition-opacity"
                style={{ color: t.color }}
              >
                <Quote size={40} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    className="fill-[#F59E0B] text-[#F59E0B]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/70 text-base leading-relaxed mb-7 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}60, ${t.color}20)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mt-14"
        >
          <div className="flex -space-x-2">
            {["#38BDF8", "#818CF8", "#34D399", "#F59E0B"].map((c, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-[#040D1A]"
                style={{ background: `${c}40` }}
              />
            ))}
          </div>
          <p className="text-white/40 text-sm">
            Más de <strong className="text-white/70">50 clientes</strong> confían en Nodo Bahiense
          </p>
        </motion.div>
      </div>
    </section>
  );
}
