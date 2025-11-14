export const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const staggerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.04, boxShadow: "0 4px 24px rgba(34,34,34,0.08)" },
};

export const floatVariants = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export const blobVariants = {
  idle: (i = 0) => ({
    scale: [1, 1.06, 1],
    rotate: [0, i % 2 === 0 ? 4 : -4, 0],
    transition: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
  }),
};
