// Enhanced animations for a more polished SaaS experience
export const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: 'blur(2px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth entrance
      staggerChildren: 0.1,
    },
  },
};

export const staggerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    y: -2,
    scale: 1.005,
    boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

export const floatVariants = {
  animate: {
    y: [0, -2, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const blobVariants = {
  idle: (i = 0) => ({
    scale: [1, 1.02, 1],
    rotate: [0, i % 2 === 0 ? 0.5 : -0.5, 0],
    x: [0, i % 2 === 0 ? 2 : -2, 0],
    transition: {
      duration: 12 + i * 2,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: i * 0.5,
    },
  }),
};

// New subtle animations for enhanced UX
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

export const buttonHoverVariants = {
  hover: {
    scale: 1.005,
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.99,
    transition: {
      duration: 0.1,
    },
  },
};

export const iconFloatVariants = {
  animate: {
    y: [0, -1, 0],
    rotate: [0, 0.5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export const pageTransitionVariants = {
  initial: {
    opacity: 0,
    scale: 0.99,
    filter: 'blur(1px)',
  },
  in: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },
  out: {
    opacity: 0,
    scale: 1.005,
    filter: 'blur(0.5px)',
  },
};

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};
