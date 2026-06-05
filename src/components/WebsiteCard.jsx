const faviconUrl = (url) =>
  `https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(url)}`;

export default function WebsiteCard({ name, url }) {
  const host = new URL(url).hostname.replace(/^www\./, "");

  return (
    <article className="card" role="listitem" data-card>
      <div className="card__body">
        <h3 className="card__title card__title--withIcon">
          <img
            className="favicon"
            src={faviconUrl(url)}
            alt=""
            loading="lazy"
            width="28"
            height="28"
          />
          {name}
        </h3>
        <p className="card__desc card__desc--tight">{host}</p>

        <div className="websiteCard__footer">
          <span className="statusBadge">
            <span className="statusBadge__dot" aria-hidden="true" />
            Sitio en vivo
          </span>
          
            <a className="btn btn--ghost websiteCard__cta" href={url} target="_blank" rel="noopener noreferrer">
            Visitar ↗
          </a>
        </div>
      </div>
    </article>
  );
}