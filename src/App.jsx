import "./App.css";

import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";
import ProjectCard from "./components/ProjectCard";
import TechMarquee from "./components/TechMarquee";
import WebsiteCard from "./components/WebsiteCard";
import StoreCard from "./components/StoreCard";
import GithubIcon from "./components/GithubIcon";

import { useTypewriter } from "./hooks/useTypewriter";
import { useLang } from "./i18n/i18n.jsx";
import {
  profile,
  projects,
  apiProjects,
  stores,
  websites,
  experience,
  education,
  certifications,
  techStack,
  aboutStats,
} from "./data/resume";
import profileImg from "./assets/profile.jpeg";

import { GraduationCap, Award, Briefcase, Linkedin, Languages, ShoppingBag } from "lucide-react";

const builtStores = stores.filter((s) => s.kind === "built");
const optimizedStores = stores.filter((s) => s.kind === "optimized");

export default function App() {
  const { t, tr, toggle } = useLang();
  const { typed, index } = useTypewriter(profile.roles);
  const nextRole = profile.roles[(index + 1) % profile.roles.length];

  return (
    <>
      <header className="nav">
        <div className="nav__inner">
          <a className="nav__logo" href="#top">
            {profile.shortName}
          </a>

          <div className="nav__right">
            <nav className="nav__links" aria-label="Navegación principal">
              <a href="#about">{t("nav.about")}</a>
              <a href="#ecommerce">{t("nav.ecommerce")}</a>
              <a href="#projects">{t("nav.projects")}</a>
              <a href="#contact">{t("nav.contact")}</a>
            </nav>

            <button
              className="langToggle"
              type="button"
              onClick={toggle}
              aria-label={t("lang.aria")}
              title={t("lang.aria")}
            >
              <Languages size={16} aria-hidden="true" />
              <span>{t("lang.label")}</span>
            </button>
          </div>
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
              <p className="hero__kicker">{t("hero.kicker")}</p>
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
                <a className="btn btn--primary" href="#about">{t("hero.primary")}</a>
                <a className="btn btn--ghost" href="#contact">{t("hero.contact")}</a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== ABOUT ===================== */}
        <section id="about" className="section">
          <div className="section__inner">
            <div className="about">
              <div>
                <h2 className="section__title">{t("about.title")}</h2>
                <p className="section__lead">{tr(profile.about)}</p>
              </div>

              <ul className="about__stats">
                {aboutStats.map((s) => (
                  <li key={s.value} className="about__stat">
                    <span className="about__statValue">{s.value}</span>
                    <span className="about__statLabel">{tr(s.label)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <TechMarquee items={techStack} speed={26} />

        {/* ===================== ECOMMERCE ===================== */}
        <section id="ecommerce" className="section">
          <div className="section__inner">
            <h2 className="section__title section__title--icon">
              <ShoppingBag size={32} aria-hidden="true" />
              {t("stores.title")}
            </h2>
            <p className="section__lead">{t("stores.lead")}</p>

            <h3 className="subsection__title stores__groupTitle">{t("stores.built")}</h3>
            <div className="stores__featured" role="list" aria-label={t("stores.built")}>
              {builtStores.map((s) => (
                <StoreCard
                  key={s.name}
                  featured
                  name={s.name}
                  brand={tr(s.brand)}
                  desc={tr(s.desc)}
                  tags={s.tags}
                  url={s.url}
                  image={s.image}
                  kindLabel={t("stores.kind.built")}
                  liveLabel={t("card.live")}
                  devLabel={t("card.dev")}
                  visitLabel={t("card.visit")}
                />
              ))}
            </div>

            <div className="subsection">
              <h3 className="subsection__title">{t("stores.optimized")}</h3>
              <p className="section__lead">{t("stores.optimizedLead")}</p>

              <Carousel label={t("stores.optimized")}>
                {optimizedStores.map((s) => (
                  <StoreCard
                    key={s.name}
                    name={s.name}
                    brand={tr(s.brand)}
                    desc={tr(s.desc)}
                    tags={s.tags}
                    url={s.url}
                    image={s.image}
                    kindLabel={t("stores.kind.optimized")}
                    liveLabel={t("card.live")}
                    devLabel={t("card.dev")}
                    visitLabel={t("card.visit")}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </section>

        {/* ===================== PROJECTS ===================== */}
        <section id="projects" className="section">
          <div className="section__inner">
            <h2 className="section__title">{t("projects.title")}</h2>
            <p className="section__lead">{t("projects.lead")}</p>

            <Carousel label={t("projects.title")}>
              {projects.map((p) => (
                <ProjectCard
                  key={p.demo}
                  title={tr(p.title)}
                  desc={tr(p.desc)}
                  tags={p.tags}
                  github={p.github}
                  demo={p.demo}
                  demoLabel={t("card.demo")}
                />
              ))}
            </Carousel>

            <div className="subsection">
              <h3 className="subsection__title">{t("websites.title")}</h3>
              <p className="section__lead">{t("websites.lead")}</p>

              <Carousel label={t("websites.title")}>
                {websites.map((s) => (
                  <WebsiteCard
                    key={s.url}
                    name={s.name}
                    url={s.url}
                    platform="WordPress"
                    liveLabel={t("card.live")}
                    visitLabel={t("card.visit")}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </section>

        {/* ===================== API PROJECTS ===================== */}
        <section id="api-projects" className="section">
          <div className="section__inner">
            <h2 className="section__title">{t("api.title")}</h2>
            <p className="section__lead">{t("api.lead")}</p>

            <Carousel label={t("api.title")}>
              {apiProjects.map((p) => (
                <ProjectCard
                  key={p.demo}
                  title={tr(p.title)}
                  desc={tr(p.desc)}
                  tags={p.tags}
                  github={p.github}
                  demo={p.demo}
                  demoLabel={t("card.demo")}
                />
              ))}
            </Carousel>
          </div>
        </section>

        {/* ===================== EXPERIENCE ===================== */}
        <section id="experience" className="section">
          <div className="section__inner">
            <h2 className="section__title section__title--icon">
              <Briefcase size={32} aria-hidden="true" />
              {t("experience.title")}
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
                      <span className="exp__period">{tr(c.period)}</span>
                    </div>
                  </div>

                  <div className="exp__divider" />

                  <div className="exp__roles">
                    <Accordion
                      items={c.roles.map((r) => ({
                        title: tr(r.title),
                        subtitle: tr(r.dates),
                        content: (
                          <ul className="bullets">
                            {tr(r.bullets).map((b) => (
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
              {t("education.title")}
            </h2>

            <div className="grid grid--cards">
              {education.map((e) => (
                <div key={e.institution} className="miniCard">
                  <div className="miniCard__logo">
                    {e.logo ? (
                      <e.logo size={36} aria-hidden="true" />
                    ) : (
                      <span className="miniCard__fallback">{e.institution?.slice(0, 1)}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="miniCard__title">{tr(e.title)}</h3>
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
              {t("certifications.title")}
            </h2>

            <div className="grid grid--cards">
              {certifications.map((c) => (
                <div key={tr(c.title)} className="miniCard">
                  <div className="miniCard__logo">
                    {c.logo ? (
                      <img src={c.logo} alt={c.issuer} />
                    ) : (
                      <span className="miniCard__fallback">{c.issuer?.slice(0, 1)}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="miniCard__title">{tr(c.title)}</h3>
                    <p className="miniCard__meta miniCard__meta--accent">{c.issuer}</p>
                    <p className="miniCard__meta">{c.year}</p>
                    {c.url && (
                      <a
                        className="miniCard__link"
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("card.credential")}
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
            <h2 className="section__title">{t("contact.title")}</h2>
            <p className="section__lead">{t("contact.lead")}</p>

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
            {t("footer.made")} <span className="footer__heart" aria-hidden="true">❤</span> {t("footer.from")}
          </p>
        </div>
      </footer>
    </>
  );
}