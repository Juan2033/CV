import "./App.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import Accordion from "./components/Accordion";
import TechMarquee from "./components/TechMarquee";

import { experience, education, certifications, courses, techStack } from "./data/resume";
import profileImg from "./assets/profile.jpeg";

import { GraduationCap, Award, BookOpen, Briefcase, Github, Linkedin } from "lucide-react";

const roles = ["Frontend Developer", "Junior Cybersecurity Analyst"];

export default function App() {
  // ===== Projects carousel refs + controls =====
  const trackRef = useRef(null);

  const scrollByAmount = (amount) => {
    trackRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  // ===== DRAG + INERCIA (mouse) =====
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const rafRef = useRef(0);

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  const stopMomentum = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = 0;
  };

  const momentumScroll = () => {
    const el = trackRef.current;
    if (!el) return;

    velocityRef.current *= 0.92;

    if (Math.abs(velocityRef.current) < 0.2) {
      stopMomentum();

      const cardWidth = 360 + 18; // 360 card + 18 gap (igual a tu CSS)
      const snapped = Math.round(el.scrollLeft / cardWidth) * cardWidth;

      el.scrollTo({ left: snapped, behavior: "smooth" });
      return;
    }

    el.scrollLeft -= velocityRef.current;
    rafRef.current = requestAnimationFrame(momentumScroll);
  };

  const onMouseDown = (e) => {
    const el = trackRef.current;
    if (!el) return;

    stopMomentum();

    isDownRef.current = true;
    el.classList.add("dragging");

    startXRef.current = e.pageX;
    startScrollLeftRef.current = el.scrollLeft;

    lastXRef.current = e.pageX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const onMouseMove = (e) => {
    const el = trackRef.current;
    if (!el || !isDownRef.current) return;

    e.preventDefault();

    const dx = e.pageX - startXRef.current;
    el.scrollLeft = startScrollLeftRef.current - dx;

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 0) {
      const dx2 = e.pageX - lastXRef.current;
      velocityRef.current = clamp((dx2 / dt) * 18, -60, 60);
    }

    lastXRef.current = e.pageX;
    lastTimeRef.current = now;
  };

  const stopDrag = () => {
    const el = trackRef.current;
    if (!el) return;
    if (!isDownRef.current) return;

    isDownRef.current = false;
    el.classList.remove("dragging");

    rafRef.current = requestAnimationFrame(momentumScroll);
  };

  // ===== Typewriter (roles) =====
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [isDeletingRole, setIsDeletingRole] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    const typingSpeed = 105;
    const deletingSpeed = 70;
    const endPause = 1600;
    const startPause = 550;

    let timer;

    if (!isDeletingRole) {
      if (typed.length < current.length) {
        timer = setTimeout(() => {
          setTyped(current.slice(0, typed.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setIsDeletingRole(true), endPause);
      }
    } else {
      if (typed.length > 0) {
        timer = setTimeout(() => {
          setTyped(current.slice(0, typed.length - 1));
        }, deletingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeletingRole(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, startPause);
      }
    }

    return () => clearTimeout(timer);
  }, [typed, isDeletingRole, roleIndex]);

  // ===== “Flip” para que belowRole no salte con el typewriter =====
  const belowRef = useRef(null);
  const prevHeightRef = useRef(null);

  useLayoutEffect(() => {
    const el = belowRef.current;
    const typeEl = document.querySelector(".role.typeRole");
    if (!el || !typeEl) return;

    const runFlip = () => {
      const newHeight = typeEl.offsetHeight;

      if (prevHeightRef.current == null) {
        prevHeightRef.current = newHeight;
        return;
      }

      const diff = newHeight - prevHeightRef.current;
      prevHeightRef.current = newHeight;

      if (Math.abs(diff) < 2) return;

      el.style.transition = "none";
      el.style.transform = `translateY(${diff}px)`;
      el.getBoundingClientRect();

      el.style.transition = "transform 180ms ease-out";
      el.style.transform = "translateY(0)";
    };

    const ro = new ResizeObserver(runFlip);
    ro.observe(typeEl);

    return () => ro.disconnect();
  }, []);

  return (
    <>
      <header className="nav">
        <div className="navInner">
          <div className="logo">Juan Camilo</div>

          <nav className="links">
            <a href="#about">Sobre mí</a>
            <a href="#projects">Proyectos</a>
            <a href="#contact">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="heroInner">
            <div className="heroLeft">
              <div className="avatarWrap">
                <img
                  className="avatar"
                  src={profileImg}
                  alt="Foto de Juan Camilo"
                  width="420"
                  height="420"
                />
              </div>
            </div>

            <div className="heroRight">
              <p className="kicker">Hola 👋, soy</p>
              <h1 className="title">Juan Camilo Ballesteros Carmona</h1>

              <p className="role typeRole">
                <span className="typeLeft">{typed}</span>
                <span className="dot">·</span>
                <span className="typeRight">{roles[(roleIndex + 1) % roles.length]}</span>
                <span className="cursor" aria-hidden="true">
                  |
                </span>
              </p>

              <div className="belowRole" ref={belowRef}>
                <div className="socialRow">
                  <a
                    className="socialBtn"
                    href="https://github.com/Juan2033"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <Github size={18} />
                  </a>

                  <a
                    className="socialBtn"
                    href="https://www.linkedin.com/in/juan-camilo-ballesteros-carmona-113741211/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>

                <div className="cta">
                  <a className="btn primary" href="#about">
                    Conoce más de mí
                  </a>
                  <a className="btn" href="#contact">
                    Contacto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="sectionInner">
            <h2>Sobre mí</h2>
            <p>
              Desarrollador Web con +3 años de experiencia en Frontend, WordPress y optimización SEO.
              Con formación en ciberseguridad, enfocado en rendimiento, accesibilidad y resultados medibles.
            </p>
          </div>
        </section>

        <TechMarquee items={techStack} speed={26} />

        <section id="projects" className="section">
          <div className="sectionInner">
            <h2>Proyectos</h2>
            <p style={{ color: "var(--muted)", marginTop: 6 }}>
              Algunos proyectos destacados (código + demo).
            </p>

            <div className="projectsCarousel">
              <button
                className="carouselBtn"
                type="button"
                aria-label="Anterior"
                onClick={() => scrollByAmount(-380)}
              >
                ‹
              </button>

              <div
                className="projectsTrack"
                ref={trackRef}
                role="list"
                onMouseDown={onMouseDown}
                onMouseUp={stopDrag}
                onMouseLeave={stopDrag}
                onMouseMove={onMouseMove}
                onDragStart={(e) => e.preventDefault()}
              >
                {[
                  {
                    title: "Portfolio Personal – React",
                    desc: "Aplicación SPA desarrollada en React con animaciones personalizadas, carrusel con drag e inercia, sistema dinámico de experiencia profesional y diseño UI moderno enfocado en rendimiento y microinteracciones.",
                    tags: ["React", "JavaScript (ES6+)", "CSS", "DOM APIs", "ResizeObserver", "POO", "Event handling"],
                    github: "https://github.com/Juan2033/Buscador-de-vehiculos.git",
                    demo: "https://buscador-vehiculos.netlify.app/",
                  },
                  {
                    title: "Buscador de autos",
                    desc: "Buscador de autos con filtros en tiempo real (marca, año, precio, puertas, transmisión y color) que actualiza el listado dinámicamente y muestra un mensaje cuando no hay resultados.",
                    tags: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
                    github: "https://github.com/Juan2033/Buscador-de-vehiculos.git",
                    demo: "https://buscador-vehiculos.netlify.app/",
                  },
                  {
                    title: "Carrito de compras",
                    desc: "Carrito de compras para cursos con agregar/eliminar productos, control de cantidades y vaciado del carrito, todo renderizado dinámicamente en el DOM.",
                    tags: ["JavaScript", "LocalStorage", "HTML", "CSS", "DOM Manipulation"],
                    github: "https://github.com/Juan2033/Carrito-de-compras.git",
                    demo: "https://carrito-compras-full.netlify.app/",
                  },
                  {
                    title: "Cotizador de seguros",
                    desc: "Cotizador de seguro de auto que calcula el precio según marca, año y tipo de cobertura, mostrando un resumen y un loader antes del resultado.",
                    tags: ["JavaScript", "HTML", "CSS (Tailwind CSS)", "POO", "DOM Manipulation"],
                    github: "https://github.com/Juan2033/Cotiza-seguros.git",
                    demo: "https://cotizador-seguros-jcbc.netlify.app/",
                  },
                  {
                    title: "Administrador de citas",
                    desc: "Gestor de citas para una clínica/veterinaria: registra pacientes, muestra listados y permite editar/eliminar registros con validación y notificaciones.",
                    tags: ["JavaScript", "Html", "Css (Tailwind CSS)"],
                    github: "https://github.com/Juan2033/Administrador-De-Citas.git",
                    demo: "https://administrador-de-citas-jcbc.netlify.app/",
                  },
                  {
                    title: "Control de gastos",
                    desc: "Aplicación de control de presupuesto que permite registrar gastos, calcular saldo restante en tiempo real y mostrar alertas visuales según el porcentaje consumido.",
                    tags: ["JavaScript", "Html", "Css (Bootstrap)", "POO", "DOM Manipulation"],
                    github: "https://github.com/Juan2033/Control-de-gastos.git",
                    demo: "https://control-de-gastos-jcbc.netlify.app/",
                  },
                ].map((p) => (
                  <article key={p.title} className="projectCard projectCard--slide" role="listitem">
                    <div className="projectBody">
                      <h3 className="projectTitle">{p.title}</h3>
                      <p className="projectDesc">{p.desc}</p>

                      <div className="tags">
                        {p.tags.map((t) => (
                          <span key={t} className="tag">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="projectActions">
                        <a
                          className="ghIcon"
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub: ${p.title}`}
                          title="Ver en GitHub"
                        >
                          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                            <path
                              fill="currentColor"
                              d="M12 .5C5.73.5.75 5.6.75 12c0 5.2 3.44 9.6 8.2 11.17.6.12.82-.27.82-.6
                              0-.3-.01-1.1-.02-2.16-3.34.75-4.04-1.66-4.04-1.66-.54-1.4-1.33-1.78-1.33-1.78-1.09-.77.08-.76.08-.76
                              1.2.09 1.83 1.27 1.83 1.27 1.07 1.87 2.8 1.33 3.48 1.02.11-.8.42-1.33.76-1.63-2.66-.31-5.46-1.36-5.46-6.06
                              0-1.34.46-2.43 1.22-3.29-.12-.31-.53-1.56.12-3.25 0 0 1-.33 3.3 1.26.96-.27 1.99-.4 3.01-.4
                              1.02 0 2.05.14 3.01.4 2.3-1.59 3.3-1.26 3.3-1.26.65 1.69.24 2.94.12 3.25.76.86 1.22 1.95 1.22 3.29
                              0 4.71-2.8 5.74-5.47 6.05.43.38.81 1.12.81 2.26 0 1.63-.02 2.94-.02 3.34 0 .33.22.72.83.6
                              4.76-1.57 8.2-5.97 8.2-11.17C23.25 5.6 18.27.5 12 .5Z"
                            />
                          </svg>
                        </a>

                        <a className="demoBtn" href={p.demo} target="_blank" rel="noopener noreferrer">
                          Demo
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <button
                className="carouselBtn"
                type="button"
                aria-label="Siguiente"
                onClick={() => scrollByAmount(380)}
              >
                ›
              </button>
            </div>

            <div className="websitesBlock">
              <h3 className="subTitle">Sitios web</h3>
              <p className="subDesc" style={{ color: "var(--muted)", marginTop: 6 }}>
                Sitios en vivo (clientes).
              </p>

              <div className="websitesGrid">
                {[
                  { name: "Ugga Street Burger", url: "https://www.uggastreetburger.com/", stack: "Website" },
                  { name: "Concepta", url: "https://www.conceptacollective.es/", stack: "Website" },
                  { name: "Centro Horitzo", url: "https://www.centrohoritzo.es/", stack: "Website" },
                  { name: "Dairys Marquez", url: "https://www.dairysmarquezbellezaintegral.com/", stack: "Website" },
                  { name: "Fran & Moreno", url: "https://franymoreno.com/", stack: "Website" },
                  { name: "Taco and Roll", url: "https://www.tacoandroll.pro/", stack: "Website" },
                  { name: "Flavia Karina", url: "https://www.flaviaquirogacomunicacion.com/", stack: "Website" },
                  { name: "Ous La Salut", url: "https://www.ouslasalut.com/", stack: "Website" },
                  { name: "Glia", url: "https://www.gliaformaciones.es/", stack: "Website" },
                ].map((s) => {
                  const host = new URL(s.url).hostname.replace("www.", "");
                  return (
                    <article key={s.url} className="websiteCard">
                      <div className="websiteTop">
                        <img
                          className="websiteFavicon"
                          src={`https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(s.url)}`}
                          alt=""
                          loading="lazy"
                        />

                        <div className="websiteTopText">
                          <h4 className="websiteTitle">{s.name}</h4>
                          <p className="websiteHost">{host}</p>
                        </div>

                        {s.stack ? <span className="websitePill">{s.stack}</span> : null}
                      </div>

                      <div className="websiteActions">
                        <a className="websiteBtn" href={s.url} target="_blank" rel="noopener noreferrer">
                          Visitar ↗
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="sectionInner">
            <h2 className="sectionTitleWithIcon">
              <Briefcase size={40} />
              Experiencia
            </h2>

            <div className="expWrap">
              {experience.map((c, idx) => (
                <div key={c.company} className="expBlock">
                  <div className="expCompanyRow">
                    <div className="expLogo">{c.company.slice(0, 1)}</div>

                    <div className="expCompanyMeta">
                      <div className="expCompanyTop">
                        <h3 className="expCompanyName">{c.company}</h3>
                        <div className="expCompanyPeriod">{c.period}</div>
                      </div>
                    </div>
                  </div>

                  <div className="expDivider" />

                  <div className="expRoles">
                    <Accordion
                      items={c.roles.map((r) => ({
                        title: r.title,
                        subtitle: r.dates,
                        content: (
                          <ul className="bullets">
                            {r.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        ),
                      }))}
                    />
                  </div>

                  {idx !== experience.length - 1 ? <div className="expDivider" /> : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="sectionInner">
            <div className="sectionTitleRow">
              <h2 className="sectionTitleWithIcon">
                <GraduationCap size={40} />
                Educación
              </h2>
            </div>

            <div className="eduGrid">
              {education.map((e) => (
                <div key={e.title + e.institution} className="miniCard miniCard--edu">
                  <div className="miniLogo">
                    {e.logo ? (
                      <e.logo size={40} />
                    ) : (
                      <span className="miniLogoFallback">{e.institution?.slice(0, 1)}</span>
                    )}
                  </div>

                  <div className="miniText">
                    <h3 className="miniTitle">{e.title}</h3>
                    <p className="miniMeta miniMeta--accent">{e.institution}</p>
                    <p className="miniMeta">{e.dates}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="sectionInner">
            <div className="sectionTitleRow">
              <h2 className="sectionTitleWithIcon">
                <Award size={40} />
                Certificaciones
              </h2>
            </div>

            <div className="certGrid">
              {certifications.map((c) => (
                <div key={c.title} className="miniCard miniCard--cert">
                  <div className="miniLogo">
                    {c.logo ? (
                      <img src={c.logo} alt={c.issuer} />
                    ) : (
                      <span className="miniLogoFallback">{c.issuer?.slice(0, 1)}</span>
                    )}
                  </div>

                  <div className="miniText">
                    <h3 className="miniTitle">{c.title}</h3>
                    <p className="miniMeta miniMeta--accent">{c.issuer}</p>
                    <p className="miniMeta">{c.year}</p>                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="courses" className="section">
          <div className="sectionInner">
            <div className="sectionTitleRow">
              <h2 className="sectionTitleWithIcon">
                <BookOpen size={40} />
                Cursos
              </h2>
            </div>

            <p className="coursesMeta">
              Total cursos finalizados:{" "}
              <span className="kpi">{courses.reduce((acc, c) => acc + c.count, 0)}</span>
            </p>

            <Accordion
              items={courses.map((c) => ({
                logo: c.logo,
                title: c.provider,
                subtitle: `${c.count} cursos finalizados`,
                content: (
                  <ul className="bullets">
                    {c.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                ),
              }))}
            />
          </div>
        </section>

        <section id="contact" className="section">
          <div className="sectionInner">
            <h2>Contacto</h2>
            <p className="contactLead">¿Hablamos? Escríbeme y te respondo lo antes posible.</p>

            <div className="contactCard">
              <div className="contactRow">
                <span className="contactLabel">Email</span>
                <a className="contactValue" href="mailto:jballesteroscarmona4@gmail.com">
                  jballesteroscarmona4@gmail.com
                </a>
              </div>

              <div className="contactDivider" />

              <div className="contactRow">
                <span className="contactLabel">WhatsApp</span>
                <a
                  className="contactValue"
                  href="https://wa.me/573103763735"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +57 310 376 3735
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footerInner">
          <p className="footerCopy">© {new Date().getFullYear()} Juan Camilo</p>
          <p className="footerMade">
            Hecho con <span className="heart">❤</span> desde Palmira, Colombia
          </p>
        </div>
      </footer>
    </>
  );
}
