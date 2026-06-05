import "./App.css";

import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";
import ProjectCard from "./components/ProjectCard";
import TechMarquee from "./components/TechMarquee";
import WebsiteCard from "./components/WebsiteCard";
import GithubIcon from "./components/GithubIcon";

import { useTypewriter } from "./hooks/useTypewriter";
import {
  profile,
  projects,
  apiProjects,
  websites,
  experience,
  education,
  certifications,  
  techStack,
} from "./data/resume";
import profileImg from "./assets/profile.jpeg";

import { GraduationCap, Award, Briefcase, Linkedin } from "lucide-react";


export default function App() {
  const { typed, index } = useTypewriter(profile.roles);
  const nextRole = profile.roles[(index + 1) % profile.roles.length];

  return (
    <>
      <header className="nav">
        <div className="nav__inner">
          <a className="nav__logo" href="#top">
            {profile.shortName}
          </a>
          <nav className="nav__links" aria-label="Navegación principal">
            <a href="#about">Sobre mí</a>
            <a href="#projects">Proyectos</a>
            <a href="#contact">Contacto</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ===================== HERO ===================== */}
        <section className="hero">
          <div className="hero__inner">
            <div className="hero__media">
              <div className="avatar">
                <img
                  src={profileImg}
                  alt={`Retrato de ${profile.name}`}
                  width="440"
                  height="440"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>

            <div className="hero__content">
              <p className="hero__kicker">Hola 👋, soy</p>
              <h1 className="hero__title">{profile.name}</h1>

              <p className="hero__role" aria-label={profile.roles.join(", ")}>
                <span className="hero__roleActive">{typed}</span>
                <span className="hero__dot" aria-hidden="true">·</span>
                <span className="hero__roleNext" aria-hidden="true">{nextRole}</span>
                <span className="hero__cursor" aria-hidden="true">|</span>
              </p>

              <div className="hero__social">
                <a
                  className="iconBtn"
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon />
                </a>
                <a
                  className="iconBtn"
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>

              <div className="hero__cta">
                <a className="btn btn--primary" href="#about">Conoce más de mí</a>
                <a className="btn btn--ghost" href="#contact">Contacto</a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== ABOUT ===================== */}
        <section id="about" className="section">
          <div className="section__inner">
            <h2 className="section__title">Sobre mí</h2>
            <p className="section__lead">{profile.about}</p>
          </div>
        </section>

        <TechMarquee items={techStack} speed={26} />

        {/* ===================== PROJECTS ===================== */}
        <section id="projects" className="section">
          <div className="section__inner">
            <h2 className="section__title">Proyectos</h2>
            <p className="section__lead">Algunos proyectos destacados (código + demo).</p>

            <Carousel label="Proyectos destacados">
              {projects.map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
            </Carousel>

            <div className="subsection">
              <h3 className="subsection__title">Sitios web</h3>
              <p className="section__lead">Sitios en vivo de clientes.</p>

              <Carousel label="Sitios web de clientes">
                {websites.map((s) => (
                  <WebsiteCard key={s.url} {...s} />
                ))}
              </Carousel>
            </div>
          </div>
        </section>

        {/* ===================== API PROJECTS ===================== */}
        <section id="api-projects" className="section">
          <div className="section__inner">
            <h2 className="section__title">Proyectos con APIs</h2>
            <p className="section__lead">
              Proyectos que integran y consumen APIs externas para funcionalidades dinámicas.
            </p>

            <Carousel label="Proyectos con APIs">
              {apiProjects.map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
            </Carousel>
          </div>
        </section>

        {/* ===================== EXPERIENCE ===================== */}
        <section id="experience" className="section">
          <div className="section__inner">
            <h2 className="section__title section__title--icon">
              <Briefcase size={32} aria-hidden="true" />
              Experiencia
            </h2>

            <div className="exp">
              {experience.map((c, idx) => (
                <div key={c.company} className="exp__block">
                  <div className="exp__head">
                    <div className="exp__logo">
                      {c.logo ? (
                        <img src={c.logo} alt={c.company} className="exp__logoImg" />
                      ) : (
                        c.company.slice(0, 1)
                      )}
                    </div>
                    <div className="exp__meta">
                      <h3 className="exp__company">{c.company}</h3>
                      <span className="exp__period">{c.period}</span>
                    </div>
                  </div>

                  <div className="exp__divider" />

                  <div className="exp__roles">
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

                  {idx !== experience.length - 1 && <div className="exp__divider" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== EDUCATION ===================== */}
        <section id="education" className="section">
          <div className="section__inner">
            <h2 className="section__title section__title--icon">
              <GraduationCap size={32} aria-hidden="true" />
              Educación
            </h2>

            <div className="grid grid--cards">
              {education.map((e) => (
                <div key={e.title + e.institution} className="miniCard">
                  <div className="miniCard__logo">
                    {e.logo ? (
                      <e.logo size={36} aria-hidden="true" />
                    ) : (
                      <span className="miniCard__fallback">{e.institution?.slice(0, 1)}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="miniCard__title">{e.title}</h3>
                    <p className="miniCard__meta miniCard__meta--accent">{e.institution}</p>
                    <p className="miniCard__meta">{e.dates}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== CERTIFICATIONS ===================== */}
        <section id="certifications" className="section">
          <div className="section__inner">
            <h2 className="section__title section__title--icon">
              <Award size={32} aria-hidden="true" />
              Certificaciones
            </h2>

            <div className="grid grid--cards">
              {certifications.map((c) => (
                <div key={c.title} className="miniCard">
                  <div className="miniCard__logo">
                    {c.logo ? (
                      <img src={c.logo} alt={c.issuer} />
                    ) : (
                      <span className="miniCard__fallback">{c.issuer?.slice(0, 1)}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="miniCard__title">{c.title}</h3>
                    <p className="miniCard__meta miniCard__meta--accent">{c.issuer}</p>
                    <p className="miniCard__meta">{c.year}</p>
                    {c.url && (
                      <a
                        className="miniCard__link"
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver credencial ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>        

        {/* ===================== CONTACT ===================== */}
        <section id="contact" className="section">
          <div className="section__inner">
            <h2 className="section__title">Contacto</h2>
            <p className="section__lead">¿Hablamos? Escríbeme y te respondo lo antes posible.</p>

            <div className="contact">
              <div className="contact__row">
                <span className="contact__label">Email</span>
                <a className="contact__value" href={`mailto:${profile.social.email}`}>
                  {profile.social.email}
                </a>
              </div>
              <div className="contact__divider" />
              <div className="contact__row">
                <span className="contact__label">WhatsApp</span>
                <a
                  className="contact__value"
                  href={`https://wa.me/${profile.social.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.social.whatsappLabel}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <p className="footer__copy">© {new Date().getFullYear()} {profile.shortName}</p>
          <p className="footer__made">
            Hecho con <span className="footer__heart" aria-hidden="true">❤</span> desde Palmira, Colombia
          </p>
        </div>
      </footer>
    </>
  );
}
