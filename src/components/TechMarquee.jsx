export default function TechMarquee({ items = [], speed = 28 }) {
  // Duplicamos la fila para un loop infinito sin cortes.
  const row = [...items, ...items];

  return (
    <div
      className="marquee"
      style={{ "--marquee-speed": `${speed}s` }}
      aria-hidden="true"
    >
      <div className="marquee__fade marquee__fade--left" />
      <div className="marquee__fade marquee__fade--right" />

      <ul className="marquee__track">
        {row.map((tech, idx) => (
          <li className="marquee__item" key={`${tech.label}-${idx}`}>
            <img src={tech.icon} alt={tech.label} loading="lazy" width="40" height="40" />
            <span>{tech.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
