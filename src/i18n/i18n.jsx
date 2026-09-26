import { createContext, useContext, useEffect, useState } from "react";

const ui = {
  es: {
    "nav.about": "Sobre mí",
    "nav.ecommerce": "Ecommerce",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.kicker": "Hola 👋, soy",
    "stores.title": "Ecommerce · Shopify",
    "stores.lead": "Tiendas en las que he trabajado como Ecommerce Developer en Asylum Marketing.",
    "stores.built": "Desarrolladas desde cero",
    "stores.optimized": "Optimización y mantenimiento",
    "stores.optimizedLead": "Tiendas en producción donde implemento cambios, nuevas funcionalidades y mejoras de Core Web Vitals.",
    "stores.kind.built": "Desarrollo completo",
    "stores.kind.optimized": "Optimización",
    "card.dev": "En desarrollo",
    "hero.primary": "Conoce más de mí",
    "hero.contact": "Contacto",
    "about.title": "Sobre mí",
    "projects.title": "Proyectos",
    "projects.lead": "Algunos proyectos destacados (código + demo).",
    "websites.title": "Sitios web · WordPress",
    "websites.lead": "Sitios en vivo de clientes, desarrollados con WordPress.",
    "api.title": "Proyectos con APIs",
    "api.lead": "Proyectos que integran y consumen APIs externas para funcionalidades dinámicas.",
    "experience.title": "Experiencia",
    "education.title": "Educación",
    "certifications.title": "Certificaciones",
    "contact.title": "Contacto",
    "contact.lead": "¿Hablamos? Escríbeme y te respondo lo antes posible.",
    "card.demo": "Demo ↗",
    "card.visit": "Visitar ↗",
    "card.live": "Sitio en vivo",
    "card.credential": "Ver credencial ↗",
    "footer.made": "Hecho con",
    "footer.from": "desde Palmira, Colombia",
    "lang.label": "EN",
    "lang.aria": "Cambiar idioma a inglés",
  },
  en: {
    "nav.about": "About",
    "nav.ecommerce": "Ecommerce",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.kicker": "Hi 👋, I'm",
    "stores.title": "Ecommerce · Shopify",
    "stores.lead": "Stores I've worked on as an Ecommerce Developer at Asylum Marketing.",
    "stores.built": "Built from scratch",
    "stores.optimized": "Optimization & maintenance",
    "stores.optimizedLead": "Live stores where I ship changes, new features and Core Web Vitals improvements.",
    "stores.kind.built": "Full build",
    "stores.kind.optimized": "Optimization",
    "card.dev": "In development",
    "hero.primary": "Learn more about me",
    "hero.contact": "Contact",
    "about.title": "About me",
    "projects.title": "Projects",
    "projects.lead": "Some featured projects (code + demo).",
    "websites.title": "Websites · WordPress",
    "websites.lead": "Live client sites, built with WordPress.",
    "api.title": "API Projects",
    "api.lead": "Projects that integrate and consume external APIs for dynamic features.",
    "experience.title": "Experience",
    "education.title": "Education",
    "certifications.title": "Certifications",
    "contact.title": "Contact",
    "contact.lead": "Want to talk? Drop me a line and I'll get back to you as soon as possible.",
    "card.demo": "Demo ↗",
    "card.visit": "Visit ↗",
    "card.live": "Live site",
    "card.credential": "View credential ↗",
    "footer.made": "Made with",
    "footer.from": "from Palmira, Colombia",
    "lang.label": "ES",
    "lang.aria": "Switch language to Spanish",
  },
};

const LangContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "es" || saved === "en") return saved;
    } catch {
      /* localStorage no disponible */
    }
    return "es";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const t = (key) => ui[lang][key] ?? key;

  const tr = (value) =>
    value && typeof value === "object" && !Array.isArray(value) && "es" in value
      ? value[lang]
      : value;

  const toggle = () => setLang((l) => (l === "es" ? "en" : "es"));

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t, tr }}>
      {children}
    </LangContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang debe usarse dentro de <LanguageProvider>");
  return ctx;
}