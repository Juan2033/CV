import { useId, useState } from "react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const uid = useId();

  return (
    <div className="acc">
      {items.map((it, idx) => {
        const isOpen = openIndex === idx;
        const contentId = `${uid}-content-${idx}`;

        const toggle = () => {
          setOpenIndex((prev) => (prev === idx ? null : idx));
        };

        return (
          <div key={`${it.title}-${idx}`} className="accItem">
            <button
              className="accHeader"
              type="button"
              onClick={toggle}
              aria-expanded={isOpen}
              aria-controls={contentId}
            >
              <div className="accHeaderLeft">
                {it.logo && (
                  <>
                    <div className="accLogo">
                      <img src={it.logo} alt={it.title} />
                    </div>
                    <div className="accDividerLine" />
                  </>
                )}

                <div>
                  <div className="accTitle">{it.title}</div>
                  <div className="accSub">{it.subtitle}</div>
                </div>
              </div>

              <div className={`chev ${isOpen ? "open" : ""}`}>▾</div>
            </button>

            <div
              id={contentId}
              className={`accBody ${isOpen ? "open" : ""}`}
              role="region"
            >
              <div className="accBodyInner">{it.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
