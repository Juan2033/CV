import { Settings } from "lucide-react";

export const profile = {
  name: "Juan Camilo Ballesteros Carmona",
  shortName: "Juan Camilo",
  roles: ["Frontend Developer", "Junior Cybersecurity Analyst"],
  about: {
    es: "Desarrollador Web con +3 años de experiencia en Frontend, WordPress y optimización SEO. Con formación en ciberseguridad, enfocado en rendimiento, accesibilidad y resultados medibles.",
    en: "Web developer with 3+ years of experience in Frontend, WordPress and SEO optimization. With a background in cybersecurity, focused on performance, accessibility and measurable results.",
  },
  social: {
    github: "https://github.com/Juan2033",
    linkedin: "https://www.linkedin.com/in/juan-camilo-ballesteros-carmona-113741211/",
    email: "juanballesterosfrontend@gmail.com",
    whatsapp: "573103763735",
    whatsappLabel: "+57 310 376 3735",
  },
};

export const projects = [
  {
    title: { es: "Portfolio Personal – React", en: "Personal Portfolio – React" },
    desc: {
      es: "SPA en React con animaciones propias, carrusel con drag e inercia, sistema dinámico de experiencia y UI moderna enfocada en rendimiento y microinteracciones.",
      en: "React SPA with custom animations, a drag-and-inertia carousel, a dynamic experience system and a modern UI focused on performance and micro-interactions.",
    },
    tags: ["React", "JavaScript (ES6+)", "CSS", "DOM APIs", "ResizeObserver", "POO"],
    github: "https://github.com/Juan2033/Buscador-de-vehiculos.git",
    demo: "https://juanballesteros.netlify.app/",
  },
  {
    title: { es: "Cotizador de Préstamos – React", en: "Loan Calculator – React" },
    desc: {
      es: "Cotizador de préstamos en tiempo real: selecciona monto y plazo y calcula automáticamente el total e intereses mensuales.",
      en: "Real-time loan calculator: pick the amount and term and it automatically computes the total and monthly interest.",
    },
    tags: ["React", "JavaScript", "Tailwind CSS", "Vite", "Hooks"],
    github: "https://github.com/Juan2033/cotizador-prestamos-react.git",
    demo: "https://cotizador-prestamos-react-jcbc.netlify.app/",
  },
  {
    title: { es: "Administrador de citas + IndexedDB", en: "Appointment Manager + IndexedDB" },
    desc: {
      es: "Gestión de citas para una clínica veterinaria. Registra, edita y elimina pacientes usando IndexedDB para persistencia en el navegador.",
      en: "Appointment management for a veterinary clinic. Create, edit and delete patients using IndexedDB for in-browser persistence.",
    },
    tags: ["JavaScript", "IndexedDB", "CRUD", "DOM Manipulation"],
    github: "https://github.com/Juan2033/veterinary-crud-indexeddb.git",
    demo: "https://administrador-de-citas-indexdb.netlify.app/",
  },
  {
    title: { es: "Buscador de autos", en: "Car Finder" },
    desc: {
      es: "Buscador con filtros en tiempo real (marca, año, precio, puertas, transmisión y color) que actualiza el listado de forma dinámica.",
      en: "Finder with real-time filters (make, year, price, doors, transmission and color) that updates the listing dynamically.",
    },
    tags: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
    github: "https://github.com/Juan2033/Buscador-de-vehiculos.git",
    demo: "https://buscador-vehiculos.netlify.app/",
  },
  {
    title: { es: "Carrito de compras", en: "Shopping Cart" },
    desc: {
      es: "Carrito para cursos con agregar/eliminar productos, control de cantidades y vaciado, renderizado dinámicamente en el DOM.",
      en: "Cart for courses with add/remove items, quantity control and clearing, rendered dynamically in the DOM.",
    },
    tags: ["JavaScript", "LocalStorage", "HTML", "CSS"],
    github: "https://github.com/Juan2033/Carrito-de-compras.git",
    demo: "https://carrito-compras-full.netlify.app/",
  },
  {
    title: { es: "Cotizador de seguros", en: "Insurance Calculator" },
    desc: {
      es: "Cotizador de seguro de auto que calcula el precio según marca, año y tipo de cobertura, con resumen y loader antes del resultado.",
      en: "Car insurance calculator that computes the price by make, year and coverage type, with a summary and a loader before the result.",
    },
    tags: ["JavaScript", "HTML", "Tailwind CSS", "POO"],
    github: "https://github.com/Juan2033/Cotiza-seguros.git",
    demo: "https://cotizador-seguros-jcbc.netlify.app/",
  },
  {
    title: { es: "Administrador de citas", en: "Appointment Manager" },
    desc: {
      es: "Gestor de citas para una clínica/veterinaria: registra pacientes, lista y permite editar/eliminar con validación y notificaciones.",
      en: "Appointment manager for a clinic/vet: register patients, list them and edit/delete with validation and notifications.",
    },
    tags: ["JavaScript", "HTML", "Tailwind CSS"],
    github: "https://github.com/Juan2033/Administrador-De-Citas.git",
    demo: "https://administrador-de-citas-jcbc.netlify.app/",
  },
  {
    title: { es: "Control de gastos", en: "Expense Tracker" },
    desc: {
      es: "App de presupuesto que registra gastos, calcula el saldo restante en tiempo real y muestra alertas según el porcentaje consumido.",
      en: "Budget app that logs expenses, computes the remaining balance in real time and shows alerts based on the percentage spent.",
    },
    tags: ["JavaScript", "HTML", "Bootstrap", "POO"],
    github: "https://github.com/Juan2033/Control-de-gastos.git",
    demo: "https://control-de-gastos-jcbc.netlify.app/",
  },
];

export const apiProjects = [
  {
    title: { es: "AI Chat Web App", en: "AI Chat Web App" },
    desc: {
      es: "App full-stack que permite conversar con un chat que genera respuestas dinámicas consumiendo una API externa.",
      en: "Full-stack app that lets users chat with a bot generating dynamic responses by consuming an external API.",
    },
    tags: ["JavaScript", "HTML5", "CSS", "Node.js", "Express.js", "Render"],
    github: "https://github.com/Juan2033/AI-Chat-Web-App.git",
    demo: "https://ai-chat-web-app.onrender.com",
  },
  {
    title: { es: "Buscador de clima", en: "Weather Finder" },
    desc: {
      es: "App que consulta información del clima por ciudad y país consumiendo la API de OpenWeatherMap.",
      en: "App that looks up weather information by city and country using the OpenWeatherMap API.",
    },
    tags: ["JavaScript", "HTML5", "Tailwind CSS", "OpenWeatherMap API"],
    github: "https://github.com/Juan2033/proyecto-clima.git",
    demo: "https://proyecto-clima-api-jcbc.netlify.app/",
  },
  {
    title: { es: "Buscador de Recetas", en: "Recipe Finder" },
    desc: {
      es: "App para buscar y explorar recetas, ver sus detalles e ingredientes y guardar favoritas con la API de TheMealDB.",
      en: "App to search and explore recipes, view details and ingredients and save favorites using the TheMealDB API.",
    },
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

export const experience = [
  {
    logo: "/logos/ORBIDI.png",
    company: "Orbidi",
    period: "2024 – 2026",
    url: "https://orbidi.com",
    roles: [
      {
        title: { es: "Implementador Web / SEO", en: "Web Implementer / SEO" },
        dates: "2024 – 2026",
        bullets: {
          es: [
            "Desarrollé e implementé sitios web según los requerimientos del cliente, aplicando estándares de calidad, buenas prácticas y optimización para motores de búsqueda.",
            "Configuré, personalicé y mantuve CMS como WordPress, Shopify, PrestaShop y Wix para distintos tipos de proyectos.",
            "Administré dominios, DNS, correos corporativos y hosting para garantizar la operación de los sitios.",
            "Optimicé rendimiento y velocidad mejorando indicadores de Core Web Vitals y métricas clave de SEO.",
            "Implementé estrategias de SEO On Page y SEO Técnico mediante auditorías con SE Ranking y Google Search Console.",
            "Desarrollé plantillas reutilizables con Elementor y Crocoblock (JetEngine), reduciendo el tiempo de desarrollo en ~40%.",
            "Realicé pruebas cross-browser, soporte técnico y resolución de incidencias en producción.",
          ],
          en: [
            "Built and deployed websites to client requirements, applying quality standards, best practices and search engine optimization.",
            "Set up, customized and maintained CMS platforms such as WordPress, Shopify, PrestaShop and Wix for different project types.",
            "Managed domains, DNS, corporate email and hosting to keep sites running reliably.",
            "Optimized performance and speed, improving Core Web Vitals and key SEO metrics.",
            "Implemented On-Page and Technical SEO strategies through audits with SE Ranking and Google Search Console.",
            "Built reusable templates with Elementor and Crocoblock (JetEngine), cutting development time by ~40%.",
            "Ran cross-browser testing, provided technical support and resolved production incidents.",
          ],
        },
      },
    ],
  },
  {
    company: "Helm Brand LLC",
    period: "2023 – 2024",
    url: "https://orbidi.com",
    roles: [
      {
        title: { es: "Desarrollador Web", en: "Web Developer" },
        dates: "2023 – 2024",
        bullets: {
          es: [
            "Desarrollé más de 12 sitios web con WordPress y soluciones personalizadas, desde la implementación inicial hasta producción.",
            "Optimicé sitios existentes en rendimiento, UX y SEO técnico, reduciendo la tasa de rebote promedio en un 25%.",
            "Implementé mejoras de velocidad, usabilidad y posicionamiento SEO para clientes de distintos sectores.",
          ],
          en: [
            "Developed 12+ websites with WordPress and custom solutions, from initial build to production.",
            "Optimized existing sites for performance, UX and technical SEO, reducing the average bounce rate by 25%.",
            "Implemented speed, usability and SEO ranking improvements for clients across different sectors.",
          ],
        },
      },
    ],
  },
  {
    company: "Biolab Diagnostica",
    period: "2022 – 2023",
    url: "https://orbidi.com",
    roles: [
      {
        title: { es: "Desarrollador Web", en: "Web Developer" },
        dates: "2022 – 2023",
        bullets: {
          es: [
            "Desarrollé más de 5 aplicaciones web internas para digitalizar procesos operativos del laboratorio clínico.",
            "Automaticé flujos con Google Apps Script, reduciendo el tiempo manual en procesos administrativos en ~30%.",
            "Mantuve y actualicé el sitio web corporativo según los requerimientos de las áreas administrativa y de comunicación.",
          ],
          en: [
            "Built 5+ internal web apps to digitize the clinical lab's operational processes.",
            "Automated workflows with Google Apps Script, reducing manual time in administrative processes by ~30%.",
            "Maintained and updated the corporate website per the requirements of the administrative and communications teams.",
          ],
        },
      },
    ],
  },
];

export const education = [
  {
    title: { es: "Ingeniero de Software", en: "Software Engineer" },
    institution: "Corporación Universitaria Iberoamericana",
    dates: "2022 – 2025",
    logo: Settings,
  },
  {
    title: { es: "Análisis y desarrollo de sistemas de información.", en: "Analysis and development of information systems." },
    institution: "Servicio Nacional de Aprendizaje",
    dates: "2020 – 2022",
    logo: Settings,  
  }
];

// ⚠️ AQUÍ van TUS certificaciones. Dejé las 4 originales; vuelve a
// agregar las demás (Ethical Hacker, Excel, SG-SST, C++…).
// Regla: si el título cambia entre idiomas usa { es, en };
// si es igual en ambos (Ethical Hacker, C++…), déjalo como texto plano.
export const certifications = [
  { title: { es: "JavaScript Moderno", 
    en: "Modern JavaScript" }, 
    issuer: "Udemy", 
    year: "2025", 
    url: "https://www.udemy.com/certificate/UC-84e6c162-fe39-4c68-a74c-78a781950e04/",
    logo: "/logos/udemy.svg" },

  { title: { es: "CSS: La guía completa", en: "CSS: The Complete Guide" }, 
  issuer: "Udemy", 
  year: "2025", 
  url:"https://www.udemy.com/certificate/UC-d2cf7bb8-6c72-490a-ad43-720c26038528/",
  logo: "/logos/udemy.svg" },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic Education",
    year: "2025",
    url: "http://verify.skilljar.com/c/dn6xggg7h6vz",
    logo: "/logos/claude.png",
  },
  {
    title: { es: "Desarrollo con IA", en: "Development with AI" },
    issuer: "BIG school",
    year: "2025",
    url: "https://drive.google.com/file/d/1VrSDT0x1GmUu6L5QQZJ1ML6Yw0q_fUvv/view?usp=sharing",
    logo: "/logos/big-school.svg",
  },  
  {
    title: { es: "Ethical Hacker", en: "Ethical Hacker" },
    issuer: "Cisco Networking Academy",
    year: "2025",
    url: "https://www.credly.com/badges/69a65fb5-c4c5-4201-9cf6-87525f755e43/linked_in_profile",
    logo: "/logos/cisco.png",
  },  
  {
    title: { es: "Uso de Microsoft Excel ", en: "Using Microsoft Excel" },
    issuer: "Servicio Nacional de Aprendizaje (SENA)",
    year: "2022",
    url: "https://certificados.sena.edu.co/CertificadoDigital/com.sena.consultacer",
    logo: "/logos/sena.png",
  },  
  {
    title: { es: "SG-SST ", en: "SG-SST" },
    issuer: "Servicio Nacional de Aprendizaje (SENA)",
    year: "2021",
    url: "https://certificados.sena.edu.co/CertificadoDigital/com.sena.consultacer",
    logo: "/logos/sena.png",
  },
  {
    title: { es: "C++ ", en: "C++" },
    issuer: "Servicio Nacional de Aprendizaje (SENA)",
    year: "2023",
    url: "https://certificados.sena.edu.co/CertificadoDigital/com.sena.consultacer",
    logo: "/logos/sena.png",
  },
  {
    title: { es: "C++ (Nivel I) ", en: "C++ (Nivel I)" },
    issuer: "Servicio Nacional de Aprendizaje (SENA)",
    year: "2023",
    url: "https://certificados.sena.edu.co/CertificadoDigital/com.sena.consultacer",
    logo: "/logos/sena.png",
  },
  {
    title: { es: "C++ (Nivel II) ", en: "C++ (Nivel II)" },
    issuer: "Servicio Nacional de Aprendizaje (SENA)",
    year: "2023",
    url: "https://certificados.sena.edu.co/CertificadoDigital/com.sena.consultacer",
    logo: "/logos/sena.png",
  },
];

export const techStack = [
  { label: "HTML5", icon: "/assets/tech/html5.svg" },
  { label: "CSS3", icon: "/assets/tech/css.svg" },
  { label: "JavaScript", icon: "/assets/tech/javascript.svg" },
  { label: "React", icon: "/assets/tech/react.svg" },
  { label: "Git", icon: "/assets/tech/git.svg" },
  { label: "GitHub", icon: "/assets/tech/github.svg" },
  { label: "Elementor", icon: "/assets/tech/wordpress.svg" },
  { label: "WordPress", icon: "/assets/tech/wordpress.svg" },
  { label: "MongoDB", icon: "/assets/tech/mongodb.svg" },
];