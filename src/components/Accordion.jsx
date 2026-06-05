import { useId, useState } from "react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const uid = useId();

  const toggle = (idx) => setOpenIndex((prev) => (prev === idx ? null : idx));

  return (
    <div className="acc">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const contentId = `${uid}-panel-${idx}`;
        const headerId = `${uid}-header-${idx}`;

        return (
          <div key={`${item.title}-${idx}`} className="acc__item">
            <button
              id={headerId}
              className="acc__header"
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              aria-controls={contentId}
            >
              <span className="acc__headerLeft">
                {item.logo && (
                  <>
                    <span className="acc__logo">
                      <img src={item.logo} alt={item.title} />
                    </span>
                    <span className="acc__sep" aria-hidden="true" />
                  </>
                )}
                <span>
                  <span className="acc__title">{item.title}</span>
                  <span className="acc__sub">{item.subtitle}</span>
                </span>
              </span>

              <span className={`acc__chev ${isOpen ? "is-open" : ""}`} aria-hidden="true">
                ▾
              </span>
            </button>

            <div
              id={contentId}
              role="region"
              aria-labelledby={headerId}
              className={`acc__panel ${isOpen ? "is-open" : ""}`}
            >
              <div className="acc__panelInner">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
