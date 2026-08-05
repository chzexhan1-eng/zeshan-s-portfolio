import { Variants } from "framer-motion";

// Premium easing curves matching reference site
export const EASING = {
  premium: [0.76, 0, 0.24, 1] as const,
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  spring: { type: "spring", stiffness: 300, damping: 30 },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Word/char reveal (from bottom)
export const wordReveal: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: EASING.premium,
    },
  },
};

// Fade + translate up
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASING.smooth,
    },
  },
};

// Fade in (opacity only)
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Scale + fade
export const scaleFade: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASING.smooth,
    },
  },
};

// Slide in from left
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: EASING.smooth,
    },
  },
};

// Slide in from right
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: EASING.smooth,
    },
  },
};

// Card hover animation
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.01,
    y: -4,
    transition: { duration: 0.3, ease: EASING.smooth },
  },
};

// Hero stagger (children)
export const heroStagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 1.2, // after loader
    },
  },
};

// Loader overlay
export const loaderVariants: Variants = {
  initial: { y: 0 },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.9,
      ease: EASING.premium,
      delay: 0.2,
    },
  },
};

// Clip path reveal
export const clipReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.8, ease: EASING.premium },
  },
};
