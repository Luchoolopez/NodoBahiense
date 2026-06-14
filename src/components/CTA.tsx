"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Build mailto link with form data
    const subject = encodeURIComponent(`Consulta de ${form.name}`);
    const body = encodeURIComponent(`Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:hola@nodobahiense.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section className="relative py-32 overflow-hidden" id="contacto">
      <div className="absolute inset-0 grid-pattern opacity-80" />
      <div className="section-divider" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* Status */}
          <div className="inline-flex items-center gap-2 mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="section-label">Disponibles para nuevos proyectos</span>
          </div>

          <h2 className="text-[34px] sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            ¿Listo para llevar tu negocio
            <span className="hidden sm:inline">
              <br />
            </span>
            {" "}al{" "}
            <span className="font-display italic gradient-text">siguiente nivel?</span>
          </h2>

          <p className="text-white/40 text-lg max-w-lg mx-auto mb-12 leading-relaxed">
            La primera consulta es gratuita. Te respondemos en menos de 24 horas.
          </p>

          {/* WhatsApp button */}
          <a
            href="https://wa.me/5492921000000?text=Hola!%20Quiero%20consultar%20sobre%20un%20proyecto%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm group w-full sm:w-auto justify-center"
          >
            <MessageCircle size={18} />
            Escribinos por WhatsApp
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-6 mb-14"
        >
          <div className="h-px flex-1 bg-white/8" />
          <span className="section-label">o escribinos por correo</span>
          <div className="h-px flex-1 bg-white/8" />
        </motion.div>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Tu nombre"
              required
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              className="form-input"
            />
            <input
              type="email"
              placeholder="Tu email"
              required
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              className="form-input"
            />
          </div>
          <textarea
            placeholder="Contanos tu proyecto, idea o consulta..."
            required
            rows={5}
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            className="form-input resize-none"
          />
          <div className="flex items-center justify-between gap-4 mt-1">
            <p className="text-white/25 text-sm">
              Sin spam. Solo te escribimos si tenés algo en curso.
            </p>
            <button
              type="submit"
              className="btn-primary flex-shrink-0"
              disabled={sent}
            >
              {sent ? "¡Enviado!" : "Enviar mensaje"}
              <Send size={15} />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
