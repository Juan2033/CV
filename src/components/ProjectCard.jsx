import GithubIcon from "./GithubIcon";

export default function ProjectCard({ title, desc, tags, github, demo, demoLabel = "Demo ↗" }) {
  return (
    <article className="card" role="listitem" data-card>
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{desc}</p>

        <ul className="tags">
          {tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>

        <div className="card__actions">
          <a
            className="iconBtn"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub: ${title}`}
          >
            <GithubIcon />
          </a>
          <a
            className="btn btn--ghost card__demo"
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            {demoLabel}
          </a>
        </div>
      </div>
    </article>
  );
}