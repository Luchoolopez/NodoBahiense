"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Código de calidad",
    desc: "Escribimos código limpio, escalable y documentado. Tu proyecto puede crecer sin límites.",
  },
  {
    icon: Palette,
    title: "Diseño que enamora",
    desc: "La estética importa. Cada pixel tiene un propósito. Creamos experiencias visuales que convierten.",
  },
  {
    icon: Rocket,
    title: "Entrega a tiempo",
    desc: "Cumplimos los plazos acordados. Tu lanzamiento es nuestra prioridad.",
  },
  {
    icon: Users,
    title: "Comunicación directa",
    desc: "Sin intermediarios. Trabajás directamente con los devs. Transparencia total en cada etapa.",
  },
];

const highlights = [
  { number: "50+", label: "proyectos lanzados" },
  { number: "3+", label: "años en el mercado" },
  { number: "15+", label: "tecnologías dominadas" },
  { number: "∞", label: "compromiso con tu proyecto" },
];

export default function About() {
  return (
    <section className="section-padding relative" id="nosotros">
      <div className="absolute inset-0 bg-black/15" />
      <div className="section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-5">Quiénes somos</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              Un equipo de{" "}
              <span className="font-display italic gradient-text">apasionados</span>{" "}
              por la web
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-4">
              Somos <strong className="text-white/80">Nodo Bahiense</strong>, un estudio
              digital nacido en Bahía Blanca con alcance nacional. Nos especializamos
              en crear soluciones web que no solo se ven bien, sino que generan
              resultados tangibles.
            </p>
            <p className="text-white/35 text-sm leading-relaxed mb-14">
              Combinamos diseño UX/UI de alto nivel con desarrollo técnico sólido.
              Cada proyecto lo tratamos como si fuera nuestro propio emprendimiento.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-px bg-white/6 rounded-xl overflow-hidden">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                  className="bg-[#0B0A12] p-6"
                >
                  <div className="text-3xl font-bold text-white mb-1">{h.number}</div>
                  <div className="text-white/35 text-xs uppercase tracking-wide">{h.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-0 divide-y divide-white/6 border border-white/7 rounded-xl overflow-hidden"
          >
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                  className="group flex gap-5 items-start p-6 hover:bg-white/3 transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={17} className="text-white/40 group-hover:text-white/70 transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1.5">{v.title}</h4>
                    <p className="text-white/38 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
