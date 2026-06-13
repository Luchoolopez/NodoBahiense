"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Reunión inicial",
    description:
      "Escuchamos tus ideas, objetivos y necesidades. Definimos el alcance del proyecto y respondemos todas tus dudas. Sin compromiso.",
    duration: "1-2 días",
    color: "#38BDF8",
  },
  {
    number: "02",
    title: "Propuesta y diseño",
    description:
      "Elaboramos una propuesta detallada con presupuesto, timeline y wireframes. Iteramos hasta que el diseño te convenza al 100%.",
    duration: "3-7 días",
    color: "#818CF8",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Construimos tu proyecto con las mejores tecnologías. Tenés acceso a un entorno de pruebas para ver el avance en tiempo real.",
    duration: "2-6 semanas",
    color: "#34D399",
  },
  {
    number: "04",
    title: "Revisión y ajustes",
    description:
      "Revisamos juntos cada detalle. Hacemos todos los ajustes necesarios hasta que el resultado supere tus expectativas.",
    duration: "3-5 días",
    color: "#F59E0B",
  },
  {
    number: "05",
    title: "Lanzamiento",
    description:
      "Publicamos tu proyecto en producción. Configuramos dominio, hosting, SSL y todas las herramientas de analytics.",
    duration: "1 día",
    color: "#EC4899",
  },
];

export default function Process() {
  return (
    <section className="section-padding relative" id="proceso">
      <div className="absolute inset-0 bg-[#040D1A]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Right glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="tag-pill mx-auto mb-6">
            <span>✦</span> Cómo trabajamos
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Un proceso{" "}
            <span className="font-display italic gradient-text">transparente</span>
            <br />
            de principio a fin
          </h2>
          <p className="text-white/45 text-lg max-w-lg mx-auto">
            Sabemos que confiar en alguien con tu proyecto es un gran paso.
            Por eso te mantenemos informado en cada etapa.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line desktop */}
          <div className="hidden md:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent" />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.05 }}
                  className={`relative flex items-center gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  {/* Card */}
                  <div className="flex-1">
                    <div className="glass glass-hover rounded-2xl p-7 group relative overflow-hidden">
                      <div
                        className="absolute top-0 left-0 right-0 h-px"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${step.color}40, transparent)`,
                        }}
                      />
                      <div className="flex items-start gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <span
                              className="text-4xl font-black opacity-20 font-display"
                              style={{ color: step.color }}
                            >
                              {step.number}
                            </span>
                            <span
                              className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                              style={{
                                background: `${step.color}15`,
                                color: step.color,
                              }}
                            >
                              {step.duration}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {step.title}
                          </h3>
                          <p className="text-white/45 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative flex-shrink-0 z-10">
                    <div
                      className="w-5 h-5 rounded-full border-2 border-[#040D1A]"
                      style={{ background: step.color, boxShadow: `0 0 20px ${step.color}60` }}
                    />
                  </div>

                  {/* Empty side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
