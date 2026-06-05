import { useDragScroll } from "../hooks/useDragScroll";

/**
 * Carrusel horizontal accesible con arrastre, inercia y flechas.
 * El contenido (tarjetas) se inyecta como children.
 */
export default function Carousel({ children, label }) {
  const { trackRef, onMouseDown, onMouseMove, stopDrag, page } = useDragScroll();

  return (
    <div className="carousel">
      <button
        className="carousel__arrow"
        type="button"
        aria-label="Anterior"
        onClick={() => page(-1)}
      >
        ‹
      </button>

      <div
        className="carousel__track"
        ref={trackRef}
        role="list"
        aria-label={label}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onDragStart={(e) => e.preventDefault()}
      >
        {children}
      </div>

      <button
        className="carousel__arrow"
        type="button"
        aria-label="Siguiente"
        onClick={() => page(1)}
      >
        ›
      </button>
    </div>
  );
}
