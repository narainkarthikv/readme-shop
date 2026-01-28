import { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';

/**
 * Custom hook for scroll-triggered animations
 * @param {number} threshold - Scroll threshold (0-1) to trigger animation
 * @param {boolean} once - Whether to trigger only once
 * @returns {Object} - Animation controls and in-view state
 */
export const useScrollAnimation = (threshold = 0.1, once = true) => {
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate if element should be in view based on scroll position
      const scrollProgress = scrollY / (documentHeight - windowHeight);

      if (scrollProgress > threshold && (!once || !isInView)) {
        setIsInView(true);
        controls.start('visible');
      } else if (!once && scrollProgress <= threshold) {
        setIsInView(false);
        controls.start('hidden');
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, threshold, once, isInView]);

  return { controls, isInView };
};

/**
 * Hook for staggered animations
 * @param {number} itemCount - Number of items to animate
 * @param {number} staggerDelay - Delay between each item animation
 * @returns {Array} - Array of animation variants for each item
 */
export const useStaggeredAnimation = (itemCount, staggerDelay = 0.1) => {
  return Array.from({ length: itemCount }, (_, index) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * staggerDelay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }));
};

/**
 * Hook for parallax scrolling effect
 * @param {number} speed - Parallax speed multiplier
 * @returns {Object} - Transform style object
 */
export const useParallax = (speed = 0.5) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return {
    transform: `translateY(${offsetY}px)`,
  };
};
