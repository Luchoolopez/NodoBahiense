"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Código de calidad",
    desc: "Escribimos código limpio, escalable y documentado. Nos importa que tu proyecto pueda crecer sin límites.",
  },
  {
    icon: Palette,
    title: "Diseño que enamora",
    desc: "La estética importa. Cada pixel tiene un propósito. Creamos experiencias visuales que convierten.",
  },
  {
    icon: Rocket,
    title: "Entrega a tiempo",
    desc: "Cumplimos los plazos acordados. Tu lanzamiento es nuestra prioridad y nos comprometemos con cada fecha.",
  },
  {
    icon: Users,
    title: "Comunicación directa",
    desc: "Sin intermediarios. Trabajás directamente con los devs. Transparencia total en cada etapa del proyecto.",
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#040D1A] via-[#060F20] to-[#040D1A]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Decorative glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="tag-pill mb-6">
              <span>✦</span> Quiénes somos
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Un equipo de{" "}
              <span className="font-display italic gradient-text">
                apasionados
              </span>{" "}
              por la web
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-6">
              Somos <strong className="text-white/80">Nodo Bahiense</strong>, un estudio
              digital nacido en Bahía Blanca con alcance nacional. Nos especializamos
              en crear soluciones web que no solo se ven bien, sino que generan
              resultados tangibles para nuestros clientes.
            </p>
            <p className="text-white/40 text-base leading-relaxed mb-10">
              Combinamos diseño UX/UI de alto nivel con desarrollo técnico
              sólido. Cada proyecto lo tratamos como si fuera nuestro propio
              emprendimiento: con dedicación, estrategia y atención al detalle.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="glass rounded-2xl p-5"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">{h.number}</div>
                  <div className="text-white/45 text-sm">{h.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-5"
          >
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                  className="glass glass-hover rounded-2xl p-6 flex gap-5 items-start group"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1.5">{v.title}</h4>
                    <p className="text-white/45 text-sm leading-relaxed">{v.desc}</p>
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
