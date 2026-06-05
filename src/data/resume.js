import { Settings } from "lucide-react";

/* =========================================================
   PERFIL
   ========================================================= */
export const profile = {
  name: "Juan Camilo Ballesteros Carmona",
  shortName: "Juan Camilo",
  roles: ["Frontend Developer", "Junior Cybersecurity Analyst"],
  about:
    "Desarrollador Web con +3 años de experiencia en Frontend, WordPress y optimización SEO. Con formación en ciberseguridad, enfocado en rendimiento, accesibilidad y resultados medibles.",
  social: {
    github: "https://github.com/Juan2033",
    linkedin:
      "https://www.linkedin.com/in/juan-camilo-ballesteros-carmona-113741211/",
    email: "jballesteroscarmona4@gmail.com",
    whatsapp: "573103763735",
    whatsappLabel: "+57 310 376 3735",
  },
};

/* =========================================================
   PROYECTOS
   ========================================================= */
export const projects = [
  {
    title: "Portfolio Personal – React",
    desc: "SPA en React con animaciones propias, carrusel con drag e inercia, sistema dinámico de experiencia y UI moderna enfocada en rendimiento y microinteracciones.",
    tags: ["React", "JavaScript (ES6+)", "CSS", "DOM APIs", "ResizeObserver", "POO"],
    github: "https://github.com/Juan2033/Buscador-de-vehiculos.git",
    demo: "https://juanballesteros.netlify.app/",
  },
  {
    title: "Cotizador de Préstamos – React",
    desc: "Cotizador de préstamos en tiempo real: selecciona monto y plazo y calcula automáticamente el total e intereses mensuales.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vite", "Hooks"],
    github: "https://github.com/Juan2033/cotizador-prestamos-react.git",
    demo: "https://cotizador-prestamos-react-jcbc.netlify.app/",
  },
  {
    title: "Administrador de citas + IndexedDB",
    desc: "Gestión de citas para una clínica veterinaria. Registra, edita y elimina pacientes usando IndexedDB para persistencia en el navegador.",
    tags: ["JavaScript", "IndexedDB", "CRUD", "DOM Manipulation"],
    github: "https://github.com/Juan2033/veterinary-crud-indexeddb.git",
    demo: "https://administrador-de-citas-indexdb.netlify.app/",
  },
  {
    title: "Buscador de autos",
    desc: "Buscador con filtros en tiempo real (marca, año, precio, puertas, transmisión y color) que actualiza el listado de forma dinámica.",
    tags: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
    github: "https://github.com/Juan2033/Buscador-de-vehiculos.git",
    demo: "https://buscador-vehiculos.netlify.app/",
  },
  {
    title: "Carrito de compras",
    desc: "Carrito para cursos con agregar/eliminar productos, control de cantidades y vaciado, renderizado dinámicamente en el DOM.",
    tags: ["JavaScript", "LocalStorage", "HTML", "CSS"],
    github: "https://github.com/Juan2033/Carrito-de-compras.git",
    demo: "https://carrito-compras-full.netlify.app/",
  },
  {
    title: "Cotizador de seguros",
    desc: "Cotizador de seguro de auto que calcula el precio según marca, año y tipo de cobertura, con resumen y loader antes del resultado.",
    tags: ["JavaScript", "HTML", "Tailwind CSS", "POO"],
    github: "https://github.com/Juan2033/Cotiza-seguros.git",
    demo: "https://cotizador-seguros-jcbc.netlify.app/",
  },
  {
    title: "Administrador de citas",
    desc: "Gestor de citas para una clínica/veterinaria: registra pacientes, lista y permite editar/eliminar con validación y notificaciones.",
    tags: ["JavaScript", "HTML", "Tailwind CSS"],
    github: "https://github.com/Juan2033/Administrador-De-Citas.git",
    demo: "https://administrador-de-citas-jcbc.netlify.app/",
  },
  {
    title: "Control de gastos",
    desc: "App de presupuesto que registra gastos, calcula el saldo restante en tiempo real y muestra alertas según el porcentaje consumido.",
    tags: ["JavaScript", "HTML", "Bootstrap", "POO"],
    github: "https://github.com/Juan2033/Control-de-gastos.git",
    demo: "https://control-de-gastos-jcbc.netlify.app/",
  },
];

export const apiProjects = [
  {
    title: "AI Chat Web App",
    desc: "App full-stack que permite conversar con un chat que genera respuestas dinámicas consumiendo una API externa.",
    tags: ["JavaScript", "HTML5", "CSS", "Node.js", "Express.js", "Render"],
    github: "https://github.com/Juan2033/AI-Chat-Web-App.git",
    demo: "https://ai-chat-web-app.onrender.com",
  },
  {
    title: "Buscador de clima",
    desc: "App que consulta información del clima por ciudad y país consumiendo la API de OpenWeatherMap.",
    tags: ["JavaScript", "HTML5", "Tailwind CSS", "OpenWeatherMap API"],
    github: "https://github.com/Juan2033/proyecto-clima.git",
    demo: "https://proyecto-clima-api-jcbc.netlify.app/",
  },
  {
    title: "Buscador de Recetas",
    desc: "App para buscar y explorar recetas, ver sus detalles e ingredientes y guardar favoritas con la API de TheMealDB.",
    tags: ["JavaScript", "HTML5", "Bootstrap 5", "TheMealDB API"],
    github: "https://github.com/Juan2033/buscador-recetas.git",
    demo: "https://buscador-recetas-api-jcbc.netlify.app/",
  },
];

export const websites = [
  { name: "Ugga Street Burger", url: "https://www.uggastreetburger.com/" },
  { name: "Concepta", url: "https://www.conceptacollective.es/" },
  { name: "Centro Horitzo", url: "https://www.centrohoritzo.es/" },
  { name: "Dairys Marquez", url: "https://www.dairysmarquezbellezaintegral.com/" },
  { name: "Fran & Moreno", url: "https://franymoreno.com/" },
  { name: "Taco and Roll", url: "https://www.tacoandroll.pro/" },
  { name: "Flavia Karina", url: "https://www.flaviaquirogacomunicacion.com/" },
  { name: "Ous La Salut", url: "https://www.ouslasalut.com/" },
  { name: "Glia", url: "https://www.gliaformaciones.es/" },
  { name: "Musica Tarragona", url: "https://www.musicatarragona.net/" },
];

/* =========================================================
   EXPERIENCIA
   ========================================================= */
export const experience = [
  {
    logo: "/logos/ORBIDI.png",
    company: "Orbidi",
    period: "2024 – Actualidad",
    url: "https://orbidi.com",
    roles: [
      {
        title: "Implementador Web / SEO",
        dates: "2024 – Actualidad",
        bullets: [
          "Desarrollé e implementé sitios web según los requerimientos del cliente, aplicando estándares de calidad, buenas prácticas y optimización para motores de búsqueda.",
          "Configuré, personalicé y mantuve CMS como WordPress, Shopify, PrestaShop y Wix para distintos tipos de proyectos.",
          "Administré dominios, DNS, correos corporativos y hosting para garantizar la operación de los sitios.",
          "Optimicé rendimiento y velocidad mejorando indicadores de Core Web Vitals y métricas clave de SEO.",
          "Implementé estrategias de SEO On Page y SEO Técnico mediante auditorías con SE Ranking y Google Search Console.",
          "Desarrollé plantillas reutilizables con Elementor y Crocoblock (JetEngine), reduciendo el tiempo de desarrollo en ~40%.",
          "Realicé pruebas cross-browser, soporte técnico y resolución de incidencias en producción.",
        ],
      },
    ],
  },
  {
    company: "Helm Brand LLC",
    period: "2023 – 2024",
    url: "https://orbidi.com",
    roles: [
      {
        title: "Desarrollador Web",
        dates: "2023 – 2024",
        bullets: [
          "Desarrollé más de 12 sitios web con WordPress y soluciones personalizadas, desde la implementación inicial hasta producción.",
          "Optimicé sitios existentes en rendimiento, UX y SEO técnico, reduciendo la tasa de rebote promedio en un 25%.",
          "Implementé mejoras de velocidad, usabilidad y posicionamiento SEO para clientes de distintos sectores.",
        ],
      },
    ],
  },
  {
    company: "Biolab Diagnostica",
    period: "2022 – 2023",
    url: "https://orbidi.com",
    roles: [
      {
        title: "Desarrollador Web",
        dates: "2022 – 2023",
        bullets: [
          "Desarrollé más de 5 aplicaciones web internas para digitalizar procesos operativos del laboratorio clínico.",
          "Automaticé flujos con Google Apps Script, reduciendo el tiempo manual en procesos administrativos en ~30%.",
          "Mantuve y actualicé el sitio web corporativo según los requerimientos de las áreas administrativa y de comunicación.",
        ],
      },
    ],
  },
];

/* =========================================================
   EDUCACIÓN / CERTIFICACIONES / CURSOS
   ========================================================= */
export const education = [
  {
    title: "Ingeniero de Software",
    institution: "Corporación Universitaria Iberoamericana",
    dates: "2019 – 2025",
    logo: Settings,
  },
];

export const certifications = [
  { title: "JavaScript Moderno", issuer: "Udemy", year: "2025", logo: "/logos/udemy.svg" },
  { title: "CSS: La guía completa", issuer: "Udemy", year: "2025", logo: "/logos/udemy.svg" },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic Education",
    year: "2025",
    url: "http://verify.skilljar.com/c/dn6xggg7h6vz",
    logo: "/logos/claude.png",
  },
  {
    title: "Desarrollo con IA",
    issuer: "BIG school",
    year: "2025",
    url: "https://drive.google.com/file/d/1VrSDT0x1GmUu6L5QQZJ1ML6Yw0q_fUvv/view?usp=sharing",
    logo: "/logos/big-school.svg",
  },
];

export const courses = [
  {
    provider: "Udemy",
    count: 2,
    logo: "/logos/udemy.svg",
    items: ["JavaScript Moderno", "CSS: La guía completa"],
  },
  {
    provider: "Anthropic Education",
    count: 1,
    logo: "/logos/claude.png",
    items: ["Claude Code in Action"],
  },
  {
    provider: "BIG school",
    count: 1,
    logo: "/logos/big-school.svg",
    items: ["Desarrollo con IA"],
  },
];

/* =========================================================
   STACK TECNOLÓGICO  (label = texto alternativo accesible)
   ========================================================= */
export const techStack = [
  { label: "HTML5", icon: "/assets/tech/html5.svg" },
  { label: "CSS3", icon: "/assets/tech/css.svg" },
  { label: "JavaScript", icon: "/assets/tech/javascript.svg" },
  { label: "React", icon: "/assets/tech/react.svg" },
  { label: "Git", icon: "/assets/tech/git.svg" },
  { label: "GitHub", icon: "/assets/tech/github.svg" },
  { label: "Elementor", icon: "/assets/tech/elementor.svg" },
  { label: "WordPress", icon: "/assets/tech/wordpress.svg" },
  { label: "MongoDB", icon: "/assets/tech/mongodb.svg" },
];
