"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Twitter, MessageCircle, Mail, MapPin } from "lucide-react";

const links = {
  servicios: [
    { label: "Desarrollo Web", href: "#servicios" },
    { label: "E-commerce", href: "#servicios" },
    { label: "Sistemas a Medida", href: "#servicios" },
    { label: "Landing Pages", href: "#servicios" },
    { label: "Automatizaciones", href: "#servicios" },
  ],
  empresa: [
    { label: "Quiénes somos", href: "#nosotros" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Proceso de trabajo", href: "#proceso" },
    { label: "Testimonios", href: "#testimonios" },
  ],
};

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter / X" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#030A15] border-t border-white/5">
      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-navy-800 flex items-center justify-center">
                <span className="text-white font-bold text-sm font-display">N</span>
              </div>
              <div>
                <span className="font-bold text-white text-lg">Nodo</span>
                <span className="font-light text-accent text-lg ml-1">Bahiense</span>
              </div>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-7">
              Estudio digital especializado en desarrollo web, e-commerce y
              sistemas a medida. Creamos experiencias digitales que generan resultados.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-8">
              <a
                href="mailto:hola@nodobahiense.com"
                className="flex items-center gap-3 text-white/40 hover:text-accent transition-colors text-sm group"
              >
                <Mail size={15} className="text-accent/50 group-hover:text-accent transition-colors" />
                hola@nodobahiense.com
              </a>
              <a
                href="https://wa.me/5492921000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/40 hover:text-accent transition-colors text-sm group"
              >
                <MessageCircle size={15} className="text-accent/50 group-hover:text-accent transition-colors" />
                +54 9 2921 00-0000
              </a>
              <div className="flex items-center gap-3 text-white/30 text-sm">
                <MapPin size={15} className="text-accent/30" />
                Bahía Blanca, Argentina
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/30 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-5 uppercase tracking-widest">
              Servicios
            </h4>
            <ul className="flex flex-col gap-3">
              {links.servicios.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    className="text-white/35 hover:text-white/80 text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-5 uppercase tracking-widest">
              Empresa
            </h4>
            <ul className="flex flex-col gap-3">
              {links.empresa.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    className="text-white/35 hover:text-white/80 text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-white/80 font-semibold text-sm mb-5 uppercase tracking-widest">
                Estado
              </h4>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/35 text-sm">Disponibles para proyectos</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Nodo Bahiense. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/20 hover:text-white/50 text-xs transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="text-white/20 hover:text-white/50 text-xs transition-colors">
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
