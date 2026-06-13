"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

const stats = [
  { value: "50+", label: "Proyectos entregados" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "3", label: "Años de experiencia" },
];

const techBadges = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "AWS"
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#040D1A]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      {/* Glow orbs */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="glow-orb absolute top-[-10%] left-[10%] w-[500px] h-[500px] opacity-20"
          style={{ background: "radial-gradient(circle, #0EA5E9, #0A2540)" }}
        />
        <div
          className="glow-orb absolute top-[20%] right-[-5%] w-[400px] h-[400px] opacity-15 animate-float-delay"
          style={{ background: "radial-gradient(circle, #6366F1, #0A2540)" }}
        />
        <div
          className="glow-orb absolute bottom-[10%] left-[30%] w-[350px] h-[350px] opacity-10 animate-float-slow"
          style={{ background: "radial-gradient(circle, #38BDF8, #040D1A)" }}
        />
      </motion.div>

      {/* Floating tech orb decoration */}
      <div className="absolute top-1/4 right-[8%] hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-48 h-48 rounded-full border border-accent/10 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-accent/50" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="w-72 h-72 rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-400/60" />
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-32 pb-20"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20">
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">
              Estudio Digital · Bahía Blanca
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.08] tracking-tight mb-8"
        >
          <span className="text-white">Transformamos</span>
          <br />
          <span className="text-white">ideas en </span>
          <span className="font-display italic gradient-text">
            experiencias
          </span>
          <br />
          <span className="text-white">digitales</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Creamos sitios web, e-commerce y sistemas a medida que impulsan
          el crecimiento de tu negocio. Diseño premium, código limpio, resultados reales.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a href="#contacto" className="btn-primary text-base px-8 py-4 group">
            Solicitar presupuesto
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#portfolio" className="btn-secondary text-base px-8 py-4">
            Ver proyectos
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-12 mb-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-white/40 uppercase tracking-widest font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tech badges marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="relative overflow-hidden py-4"
        >
          <div className="flex gap-4 animate-[marquee_20s_linear_infinite] whitespace-nowrap w-max">
            {[...techBadges, ...techBadges].map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/8 text-white/30 text-xs font-medium tracking-wide"
              >
                <span className="w-1 h-1 rounded-full bg-accent/40" />
                {tech}
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#040D1A] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#040D1A] to-transparent z-10" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/25 uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  );
}
