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
      <div className="absolute inset-0 bg-[#0C2240]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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

        {/* Steps */}
        <div className="flex flex-col divide-y divide-white/6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group grid grid-cols-[4rem_1fr_auto] md:grid-cols-[5rem_1fr_1fr_auto] items-start gap-6 py-8"
            >
              {/* Number */}
              <span className="text-3xl font-black text-white/8 font-display leading-none pt-1">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-base font-semibold text-white pt-0.5 md:pt-0">
                {step.title}
              </h3>

              {/* Description — hidden on small */}
              <p className="hidden md:block text-white/38 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Duration */}
              <span className="text-xs text-white/30 font-medium pt-0.5 text-right whitespace-nowrap">
                {step.duration}
              </span>

              {/* Mobile description */}
              <p className="md:hidden text-white/38 text-sm leading-relaxed col-span-2 col-start-2">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
