"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Reunión inicial",
    description:
      "Escuchamos tus ideas, objetivos y necesidades. Definimos el alcance del proyecto y respondemos todas tus dudas. Sin compromiso.",
    duration: "1–2 días",
  },
  {
    number: "02",
    title: "Propuesta y diseño",
    description:
      "Elaboramos una propuesta detallada con presupuesto, timeline y wireframes. Iteramos hasta que el diseño te convenza al 100%.",
    duration: "3–7 días",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Construimos tu proyecto con las mejores tecnologías. Tenés acceso a un entorno de pruebas para ver el avance en tiempo real.",
    duration: "2–6 semanas",
  },
  {
    number: "04",
    title: "Revisión y ajustes",
    description:
      "Revisamos juntos cada detalle. Hacemos todos los ajustes necesarios hasta que el resultado supere tus expectativas.",
    duration: "3–5 días",
  },
  {
    number: "05",
    title: "Lanzamiento",
    description:
      "Publicamos tu proyecto. Configuramos dominio, hosting, SSL y todas las herramientas de analytics.",
    duration: "1 día",
  },
];

export default function Process() {
  return (
    <section className="section-padding relative" id="proceso">
      <div className="section-divider" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="section-label mb-5">Cómo trabajamos</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Un proceso{" "}
            <span className="font-display italic gradient-text">transparente</span>{" "}
            de principio a fin
          </h2>
        </motion.div>

        {/* Column headers — desktop only */}
        <div className="hidden md:grid md:grid-cols-[56px_220px_1fr_96px] gap-x-10 pb-4 border-b border-white/6 mb-0">
          <span />
          <span className="section-label">Etapa</span>
          <span className="section-label">Descripción</span>
          <span className="section-label text-right">Duración</span>
        </div>

        {/* Steps */}
        <div className="flex flex-col divide-y divide-white/6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              {/* Desktop layout */}
              <div className="hidden md:grid md:grid-cols-[56px_220px_1fr_96px] gap-x-10 items-baseline py-8">
                <span className="text-[28px] font-black text-white/10 font-display leading-none">
                  {step.number}
                </span>
                <span className="text-base font-semibold text-white">
                  {step.title}
                </span>
                <p className="text-[15px] text-white/45 leading-relaxed">
                  {step.description}
                </p>
                <span className="text-sm text-white/30 font-medium text-right whitespace-nowrap">
                  {step.duration}
                </span>
              </div>

              {/* Mobile layout */}
              <div className="md:hidden py-7">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black text-white/10 font-display leading-none w-10">
                      {step.number}
                    </span>
                    <span className="text-base font-semibold text-white">
                      {step.title}
                    </span>
                  </div>
                  <span className="text-xs text-white/30 font-medium whitespace-nowrap ml-4">
                    {step.duration}
                  </span>
                </div>
                <p className="text-[15px] text-white/45 leading-relaxed pl-14">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
