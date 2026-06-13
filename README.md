# Nodo Bahiense — Landing Page

Landing page del estudio digital **Nodo Bahiense**. Construida con Next.js, Tailwind CSS y Framer Motion.

## Tecnologías

- [Next.js 14](https://nextjs.org/) — framework React con App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) — estilos utilitarios
- [Framer Motion](https://www.framer.com/motion/) — animaciones
- [Lucide React](https://lucide.dev/) — iconos

## Requisitos

- Node.js 18+
- npm 9+

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/nodo-bahiense.git
cd nodo-bahiense

# Instalar dependencias
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build para producción

```bash
npm run build
npm run start
```

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx       # Layout global, fuentes y metadata
│   ├── page.tsx         # Página principal
│   └── globals.css      # Estilos base y variables CSS
└── components/
    ├── Navbar.tsx        # Navegación sticky con glassmorphism
    ├── Hero.tsx          # Sección principal con animaciones
    ├── Services.tsx      # Tarjetas de servicios
    ├── Portfolio.tsx     # Proyectos destacados
    ├── About.tsx         # Sobre nosotros y valores
    ├── Process.tsx       # Proceso de trabajo
    ├── Testimonials.tsx  # Testimonios de clientes
    ├── CTA.tsx           # Call to action
    └── Footer.tsx        # Footer con links y contacto
```

## Deploy

El proyecto está listo para deployar en [Vercel](https://vercel.com/):

```bash
npm install -g vercel
vercel
```

---

© 2025 Nodo Bahiense. Todos los derechos reservados.
