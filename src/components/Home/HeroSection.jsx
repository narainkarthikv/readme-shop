/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { sectionVariants, blobVariants } from './animations';

const Blob = ({
  color,
  size = 220,
  right = 'auto',
  left = 'auto',
  top = '10%',
  style = {},
  i = 0,
}) => (
  <motion.div
    aria-hidden
    custom={i}
    variants={blobVariants}
    animate="idle"
    style={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      filter: 'blur(28px) saturate(1.05)',
      opacity: 0.18,
      right,
      left,
      top,
      background: color,
      pointerEvents: 'none',
      zIndex: 0,
      transform: 'translate3d(0,0,0)',
      ...style,
    }}
  />
);

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
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 8, md: 12 },
          px: 2,
          textAlign: 'center',
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderBottom: `1px solid ${theme.palette.divider}`,
          transition: 'background 0.3s, color 0.3s, border-color 0.3s',
        }}
      >
        {/* decorative animated blobs */}
        <Blob
          color={theme.palette.primary.main}
          size={360}
          left="-8%"
          top="-6%"
          i={0}
        />
        <Blob
          color={theme.palette.secondary.main}
          size={260}
          right="-6%"
          top="6%"
          i={1}
        />
        <Blob
          color={theme.palette.info.main || theme.palette.primary.light}
          size={180}
          left="20%"
          top="40%"
          i={2}
          style={{ opacity: 0.12 }}
        />

        <Box
          sx={{ position: 'relative', zIndex: 2, maxWidth: 1100, mx: 'auto' }}
        >
          <Typography
            component={motion.h1}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.25rem', md: '3.5rem' },
              lineHeight: 1.04,
              mb: 2,
              letterSpacing: '-0.5px',
              color: theme.palette.text.primary,
            }}
          >
            Welcome to{' '}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              README Shop
            </Box>
          </Typography>

          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            sx={{
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.25rem' },
              mb: 3,
              color: theme.palette.text.secondary,
            }}
          >
            The fastest way to create stunning, SEO-friendly README files for
            your projects.
          </Typography>

          <motion.button
            whileHover={{
              scale: 1.04,
              boxShadow: '0 8px 30px rgba(15,23,42,0.12)',
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              fontWeight: 700,
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              color: theme.palette.getContrastText(theme.palette.primary.main),
              boxShadow: '0 6px 20px rgba(34,34,34,0.08)',
              border: 'none',
              borderRadius: '12px',
              padding: '0.85rem 2rem',
              fontSize: '1rem',
              cursor: 'pointer',
              marginTop: '0.5rem',
              zIndex: 3,
              transition: 'transform 0.2s ease',
            }}
            aria-label="Get Started"
            onClick={() => (window.location.href = '/components')}
          >
            Get Started
          </motion.button>
        </Box>
      </Box>
    </motion.section>
  );
};

export default HeroSection;
