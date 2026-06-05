import { useEffect, useRef } from "react";

const FRICTION = 0.92;
const MIN_VELOCITY = 0.2;
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

/* Mide el ancho real de una tarjeta + gap para hacer snap exacto
   en cualquier breakpoint (mobile-first), en lugar de un valor fijo. */
const stepSize = (track) => {
  const card = track.querySelector("[data-card]");
  if (!card) return track.clientWidth;
  const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
  return card.getBoundingClientRect().width + gap;
};

/**
 * Encapsula el arrastre con inercia + snap de un carrusel horizontal.
 * Una sola fuente de verdad reutilizada por cada carrusel.
 */
export function useDragScroll() {
  const trackRef = useRef(null);
  const s = useRef({
    down: false,
    startX: 0,
    startLeft: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
    raf: 0,
  });

  // Cancela el frame pendiente al desmontar.
  useEffect(() => () => cancelAnimationFrame(s.current.raf), []);

  const momentum = () => {
    const track = trackRef.current;
    if (!track) return;

    s.current.velocity *= FRICTION;

    if (Math.abs(s.current.velocity) < MIN_VELOCITY) {
      cancelAnimationFrame(s.current.raf);
      s.current.raf = 0;
      const step = stepSize(track);
      track.scrollTo({
        left: Math.round(track.scrollLeft / step) * step,
        behavior: "smooth",
      });
      return;
    }

    track.scrollLeft -= s.current.velocity;
    s.current.raf = requestAnimationFrame(momentum);
  };

  const onMouseDown = (e) => {
    const track = trackRef.current;
    if (!track) return;
    cancelAnimationFrame(s.current.raf);
    Object.assign(s.current, {
      down: true,
      startX: e.pageX,
      startLeft: track.scrollLeft,
      lastX: e.pageX,
      lastTime: performance.now(),
      velocity: 0,
    });
    track.classList.add("is-dragging");
  };

  const onMouseMove = (e) => {
    const track = trackRef.current;
    if (!track || !s.current.down) return;
    e.preventDefault();

    track.scrollLeft = s.current.startLeft - (e.pageX - s.current.startX);

    const now = performance.now();
    const dt = now - s.current.lastTime;
    if (dt > 0) {
      s.current.velocity = clamp(((e.pageX - s.current.lastX) / dt) * 18, -60, 60);
    }
    s.current.lastX = e.pageX;
    s.current.lastTime = now;
  };

  const stopDrag = () => {
    const track = trackRef.current;
    if (!track || !s.current.down) return;
    s.current.down = false;
    track.classList.remove("is-dragging");
    s.current.raf = requestAnimationFrame(momentum);
  };

  /* Flechas: avanza exactamente una tarjeta. */
  const page = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * stepSize(track), behavior: "smooth" });
  };

  return { trackRef, onMouseDown, onMouseMove, stopDrag, page };
}
