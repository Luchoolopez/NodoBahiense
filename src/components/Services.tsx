"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Cpu,
  Layout,
  Zap,
  HeadphonesIcon,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Sitios web modernos, veloces y optimizados para SEO. Construidos con las últimas tecnologías para garantizar rendimiento y escalabilidad.",
    tags: ["React", "Next.js", "TypeScript"],
    color: "#38BDF8",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Tiendas online que convierten visitantes en clientes. Integración con medios de pago locales e internacionales, gestión de stock.",
    tags: ["WooCommerce", "Shopify", "Custom"],
    color: "#818CF8",
  },
  {
    icon: Cpu,
    title: "Sistemas a Medida",
    description:
      "Software diseñado para tu flujo de trabajo específico. Dashboards, paneles de administración, CRMs y ERPs personalizados.",
    tags: ["Node.js", "PostgreSQL", "REST API"],
    color: "#34D399",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "Páginas de aterrizaje de alta conversión. Diseño orientado a resultados con A/B testing, analíticas y optimización continua.",
    tags: ["Diseño UX", "CRO", "Analytics"],
    color: "#F59E0B",
  },
  {
    icon: Zap,
    title: "Automatizaciones",
    description:
      "Automatizamos tus procesos repetitivos. Integraciones entre sistemas, bots, flujos de trabajo y notificaciones inteligentes.",
    tags: ["n8n", "Zapier", "API"],
    color: "#EC4899",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte Técnico",
    description:
      "Mantenimiento preventivo, actualizaciones de seguridad y soporte continuo para que tu sitio siempre esté funcionando.",
    tags: ["24/7", "SLA", "Monitoring"],
    color: "#06B6D4",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Services() {
  return (
    <section className="section-padding relative" id="servicios">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040D1A] via-[#060F20] to-[#040D1A]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="tag-pill mx-auto mb-6">
            <span>✦</span> Nuestros servicios
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Todo lo que tu negocio
            <br />
            <span className="font-display italic gradient-text">necesita online</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Desde una landing page hasta un sistema empresarial completo,
            construimos soluciones digitales a la medida de tus objetivos.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="glass glass-hover rounded-2xl p-7 group relative overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className="absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl"
                  style={{ background: service.color }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${service.color}15`,
                    border: `1px solid ${service.color}25`,
                  }}
                >
                  <Icon size={22} style={{ color: service.color }} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-md"
                      style={{
                        background: `${service.color}10`,
                        color: service.color,
                        border: `1px solid ${service.color}20`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
