export default function StoreCard({
  name,
  brand,
  desc,
  tags,
  url,
  image,
  kindLabel,
  featured = false,
  liveLabel = "Sitio en vivo",
  devLabel = "En desarrollo",
  visitLabel = "Visitar ↗",
}) {
  const host = url ? new URL(url).hostname.replace(/^www\./, "") : null;

  return (
    <article
      className={`card storeCard${featured ? " storeCard--featured" : ""}`}
      role="listitem"
      data-card
    >
      <div className="card__body storeCard__body">
        <div className="storeCard__shot">
          <img
            src={image}
            alt={`Captura de la tienda ${name}`}
            loading="lazy"
            decoding="async"
            width="800"
            height="450"
            draggable="false"
          />
          <span className="storeCard__kind">{kindLabel}</span>
        </div>

        <h3 className="card__title storeCard__title">{name}</h3>
        <p className="storeCard__brand">{brand ?? host}</p>
        <p className="card__desc">{desc}</p>

        <ul className="tags">
          {tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>

        <div className="websiteCard__footer">
          {url ? (
            <>
              <span className="statusBadge">
                <span className="statusBadge__dot" aria-hidden="true" />
                {liveLabel}
              </span>
              <a
                className="btn btn--ghost websiteCard__cta"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {visitLabel}
              </a>
            </>
          ) : (
            <span className="statusBadge statusBadge--dev">
              <span className="statusBadge__dot" aria-hidden="true" />
              {devLabel}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
