"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden" id="contacto">
      <div className="absolute inset-0 bg-[#0B2038]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-70" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Status */}
          <div className="inline-flex items-center gap-2 mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/35 uppercase tracking-widest font-medium">
              Disponibles para nuevos proyectos
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            ¿Listo para llevar tu negocio
            <br />
            al{" "}
            <span className="font-display italic gradient-text">siguiente nivel?</span>
          </h2>

          <p className="text-white/40 text-lg max-w-lg mx-auto mb-12 leading-relaxed">
            Contanos tu idea y te respondemos en menos de 24 horas con una propuesta
            personalizada. La primera consulta es gratuita.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <a
              href="https://wa.me/5492921000000?text=Hola!%20Quiero%20consultar%20sobre%20un%20proyecto%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-7 py-3.5 group"
            >
              <MessageCircle size={17} />
              Escribinos por WhatsApp
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="mailto:hola@nodobahiense.com" className="btn-secondary text-sm px-7 py-3.5">
              <Mail size={16} />
              hola@nodobahiense.com
            </a>
          </div>

          {/* Trust */}
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {["Sin compromiso", "Respuesta en 24hs", "Presupuesto gratis"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/25 text-xs">
                <div className="w-px h-3 bg-white/15" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
