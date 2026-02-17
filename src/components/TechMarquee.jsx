export default function TechMarquee({ items = [], speed = 28 }) {
  // Duplicamos para efecto infinito sin cortes
  const row = [...items, ...items];

  return (
    <div className="techMarquee" style={{ ['--speed']: `${speed}s` }}>
      <div className="techMarquee__fadeLeft" />
      <div className="techMarquee__fadeRight" />

      <div className="techMarquee__track" aria-label="Tecnologías">
        {row.map((t, idx) => (
          <div className="techMarquee__item" key={`${t.label}-${idx}`}>
            <img
              src={t.icon}
              alt={t.label}
              loading="lazy"
              width="46"
              height="46"
            />
            <span>{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
