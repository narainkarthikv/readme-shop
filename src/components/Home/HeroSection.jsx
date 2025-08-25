import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { sectionVariants } from './animations';

const HeroSection = () => {
  const theme = useTheme();

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      style={{ width: '100%' }}
      aria-label="Hero Section"
    >
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: 2,
          textAlign: 'center',
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderBottom: `1px solid ${theme.palette.divider}`,
          transition: 'background 0.3s, color 0.3s, border-color 0.3s',
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontWeight: 700, fontSize: '3.5rem', marginBottom: '1rem', letterSpacing: '-1px', color: theme.palette.primary.main, transition: 'color 0.3s' }}
        >
          Welcome to <span style={{ color: theme.palette.primary.main }}>README Shop</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ fontWeight: 400, fontSize: '2rem', marginBottom: '2rem', color: theme.palette.text.secondary, transition: 'color 0.3s' }}
        >
          The fastest way to create stunning, SEO-friendly README files for your projects.
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.08, backgroundColor: theme.palette.action.hover }}
          whileTap={{ scale: 0.96 }}
          style={{
            fontWeight: 600,
            background: theme.palette.button,
            color: theme.palette.buttonText,
            boxShadow: '0 2px 8px rgba(34,34,34,0.08)',
            border: 'none',
            borderRadius: '8px',
            padding: '1rem 2.5rem',
            fontSize: '1.2rem',
            cursor: 'pointer',
            marginTop: '1rem',
            transition: 'background 0.3s, color 0.3s',
          }}
          aria-label="Get Started"
          onClick={() => window.location.href = '/components'}
        >
          Get Started
        </motion.button>
      </Box>
    </motion.section>
  );
};

export default HeroSection;
