"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden" id="contacto">
      {/* Background */}
      <div className="absolute inset-0 bg-[#040D1A]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #0EA5E9 0%, #6366F1 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-20%] right-[5%] w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, #818CF8 0%, #0EA5E9 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Glowing border card */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Border glow */}
          <div className="absolute inset-0 rounded-3xl p-px bg-gradient-to-br from-accent/40 via-purple-500/20 to-accent/10">
            <div className="absolute inset-0 rounded-3xl bg-[#060F20]" />
          </div>

          <div className="relative z-10 p-12 md:p-20 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div className="tag-pill">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Disponibles para nuevos proyectos
              </div>
            </motion.div>

            {/* Headline */}
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ¿Listo para llevar
              <br />
              tu negocio al{" "}
              <span className="font-display italic gradient-text">
                siguiente nivel?
              </span>
            </h2>

            <p className="text-white/50 text-xl max-w-xl mx-auto mb-12 leading-relaxed">
              Contanos tu idea y te respondemos en menos de 24 horas con
              una propuesta personalizada. La primera consulta es gratuita.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://wa.me/5492921000000?text=Hola!%20Quiero%20consultar%20sobre%20un%20proyecto%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4 group"
              >
                <MessageCircle size={20} />
                Escribinos por WhatsApp
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="mailto:hola@nodobahiense.com"
                className="btn-secondary text-base px-8 py-4"
              >
                <Mail size={18} />
                hola@nodobahiense.com
              </a>
            </div>

            {/* Trust line */}
            <div className="flex items-center justify-center gap-6 flex-wrap">
              {["Sin compromiso", "Respuesta en 24hs", "Presupuesto gratis"].map(
                (item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/35 text-sm">
                    <div className="w-1 h-1 rounded-full bg-accent/50" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
