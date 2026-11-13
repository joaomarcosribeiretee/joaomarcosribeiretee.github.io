// Motion SSoT. CSS mirror lives in src/styles/tokens.css (--ease-*, --dur-*).
// Never hardcode a cubic-bezier or a duration in a component: import from here.

export const EASE_OUT = [0.23, 1, 0.32, 1];
export const EASE_IN_OUT = [0.77, 0, 0.175, 1];
export const EASE_DRAWER = [0.32, 0.72, 0, 1];

// seconds
export const DUR = {
  press: 0.12,
  fast: 0.16,
  base: 0.2,
  slow: 0.3,
  reveal: 0.6,
};

export const transitions = {
  fast: { duration: DUR.fast, ease: EASE_OUT },
  base: { duration: DUR.base, ease: EASE_OUT },
  slow: { duration: DUR.slow, ease: EASE_OUT },
  reveal: { duration: DUR.reveal, ease: EASE_OUT },
  drawer: { duration: 0.45, ease: EASE_DRAWER },
  layout: { duration: DUR.slow, ease: EASE_IN_OUT },
};

// Short, capped stagger for list items.
export const itemEnter = (i, step = 0.05, cap = 0.4) => ({
  ...transitions.reveal,
  delay: Math.min(i * step, cap),
});

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: itemEnter(i, 0.08) }),
};

export const pressable = {
  whileTap: { scale: 0.97, transition: { duration: DUR.press, ease: EASE_OUT } },
};
