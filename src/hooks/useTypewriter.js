import { useEffect, useState } from "react";

const DEFAULTS = {
  typingSpeed: 105,
  deletingSpeed: 70,
  endPause: 1600,
  startPause: 550,
};

/**
 * Efecto máquina de escribir cíclico.
 * Devuelve el texto actual y el índice de la palabra activa.
 */
export function useTypewriter(words, options = {}) {
  const { typingSpeed, deletingSpeed, endPause, startPause } = { ...DEFAULTS, ...options };
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    let delay;

    if (!deleting) {
      delay = typed.length < current.length ? typingSpeed : endPause;
    } else {
      delay = typed.length > 0 ? deletingSpeed : startPause;
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        if (typed.length < current.length) setTyped(current.slice(0, typed.length + 1));
        else setDeleting(true);
      } else if (typed.length > 0) {
        setTyped(current.slice(0, typed.length - 1));
      } else {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [typed, deleting, index, words, typingSpeed, deletingSpeed, endPause, startPause]);

  return { typed, index };
}
