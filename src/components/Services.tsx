"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingCart, Cpu, Layout, Zap, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Sitios modernos, veloces y optimizados para SEO. Construidos con las últimas tecnologías para garantizar rendimiento y escalabilidad.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Tiendas online que convierten visitantes en clientes. Integración con medios de pago locales e internacionales, gestión de stock.",
    tags: ["WooCommerce", "Shopify", "Custom"],
  },
  {
    icon: Cpu,
    title: "Sistemas a Medida",
    description:
      "Software diseñado para tu flujo de trabajo. Dashboards, paneles de administración, CRMs y ERPs personalizados.",
    tags: ["Node.js", "PostgreSQL", "REST API"],
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "Páginas de alta conversión orientadas a resultados con analíticas, A/B testing y optimización continua.",
    tags: ["Diseño UX", "CRO", "Analytics"],
  },
  {
    icon: Zap,
    title: "Automatizaciones",
    description:
      "Automatizamos tus procesos repetitivos. Integraciones entre sistemas, bots, flujos de trabajo e inteligencia.",
    tags: ["n8n", "Zapier", "API"],
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte Técnico",
    description:
      "Mantenimiento preventivo, actualizaciones de seguridad y soporte continuo para que tu sitio siempre funcione.",
    tags: ["24/7", "SLA", "Monitoring"],
  },
];

export default function Services() {
  return (
    <section className="section-padding relative" id="servicios">
      <div className="absolute inset-0 bg-black/20" />
      <div className="section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="section-label mb-5">Servicios</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl">
              Todo lo que tu negocio{" "}
              <span className="font-display italic gradient-text">necesita online</span>
            </h2>
            <p className="text-white/40 text-base max-w-xs leading-relaxed md:text-right">
              Desde una landing hasta un sistema empresarial completo, construimos
              soluciones a medida de tus objetivos.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative bg-[#0B0A12] hover:bg-white/[0.03] transition-colors duration-200 p-6 md:p-8"
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon size={22} className="text-white/50 group-hover:text-white/80 transition-colors duration-200" />
                </div>

                <h3 className="text-base font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/38 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded text-white/30 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
