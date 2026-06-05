# Portafolio — Juan Camilo Ballesteros

Portafolio personal construido con **React 19 + Vite**, enfocado en rendimiento
(Core Web Vitals), accesibilidad y un enfoque **mobile-first**.

## Stack

- React 19 + Vite 7
- CSS plano con design tokens (variables CSS), sin frameworks
- `@fontsource/poppins` (subset latino, self-hosted)
- `lucide-react` para iconografía

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # entorno de desarrollo
npm run build    # build de producción (dist/)
npm run preview  # previsualizar el build
npm run lint     # ESLint
```

## Arquitectura

```
src/
├── main.jsx              # punto de entrada + carga de fuentes (subset latino)
├── App.jsx               # composición de la página (orquestador)
├── index.css             # reset + design tokens (mobile-first)
├── App.css               # estilos de componentes (mobile-first)
├── data/
│   └── resume.js         # única fuente de verdad (perfil, proyectos, experiencia…)
├── hooks/
│   ├── useDragScroll.js  # arrastre + inercia + snap del carrusel (reutilizable)
│   └── useTypewriter.js  # efecto máquina de escribir
└── components/
    ├── Carousel.jsx      # carrusel accesible (consume useDragScroll)
    ├── ProjectCard.jsx   # tarjeta de proyecto
    ├── WebsiteCard.jsx   # tarjeta de sitio web
    ├── Accordion.jsx     # acordeón accesible (aria-expanded / region)
    ├── TechMarquee.jsx   # marquesina de tecnologías
    └── GithubIcon.jsx    # icono SVG compartido
```

### Principios

- **DRY**: lógica de carrusel y tarjetas centralizada; contenido separado de la UI en `data/resume.js`.
- **Mobile-first**: los estilos base apuntan a móvil; los `@media (min-width)` escalan hacia arriba.
- **Accesibilidad**: foco visible, `aria-*`, `prefers-reduced-motion`, textos alternativos.
- **Rendimiento**: fuentes con subset latino, imagen del hero con prioridad de carga, sin dependencias pesadas.
