/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import {
  sectionVariants,
  blobVariants,
  textRevealVariants,
  buttonHoverVariants,
} from './animations';

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
      filter: 'blur(32px) saturate(1.1)',
      opacity: 0.15,
      right,
      left,
      top,
      background: `radial-gradient(circle, ${color}20 0%, ${color}05 70%)`,
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
          py: { xs: 10, md: 16 },
          px: 2,
          textAlign: 'center',
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderBottom: `1px solid ${theme.palette.divider}`,
          transition:
            'background 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Enhanced decorative animated blobs with more subtle movement */}
        <Blob
          color={theme.palette.primary.main}
          size={400}
          left="-10%"
          top="-8%"
          i={0}
        />
        <Blob
          color={theme.palette.secondary.main}
          size={300}
          right="-8%"
          top="8%"
          i={1}
        />
        <Blob
          color={theme.palette.info.main || theme.palette.primary.light}
          size={200}
          left="15%"
          top="45%"
          i={2}
          style={{ opacity: 0.08 }}
        />

        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            maxWidth: 1200,
            mx: 'auto',
            px: { xs: 2, md: 4 },
          }}
        >
          <motion.div
            variants={textRevealVariants}
            custom={0}
            style={{ marginBottom: '1rem' }}
          >
            <Typography
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '4rem', lg: '4.5rem' },
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: theme.palette.text.primary,
                background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.text.secondary} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 3,
              }}
            >
              Welcome to{' '}
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                README Shop
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            variants={textRevealVariants}
            custom={1}
            style={{ marginBottom: '2rem' }}
          >
            <Typography
              component="p"
              sx={{
                fontWeight: 400,
                fontSize: { xs: '1.125rem', md: '1.375rem', lg: '1.5rem' },
                lineHeight: 1.6,
                color: theme.palette.text.secondary,
                maxWidth: 600,
                mx: 'auto',
                mb: 4,
              }}
            >
              The fastest way to create stunning, SEO-friendly README files for
              your projects with professional templates and tools.
            </Typography>
          </motion.div>

          <motion.div variants={textRevealVariants} custom={2}>
            <motion.button
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
              style={{
                fontWeight: 600,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                color: theme.palette.getContrastText(
                  theme.palette.primary.main
                ),
                boxShadow: `0 4px 20px ${theme.palette.primary.main}30`,
                border: 'none',
                borderRadius: '12px',
                padding: '1rem 2.5rem',
                fontSize: '1.125rem',
                cursor: 'pointer',
                marginTop: '1rem',
                zIndex: 3,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
              }}
              aria-label="Get Started"
              onClick={() => (window.location.href = '/components')}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>
                Get Started
              </span>
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'rgba(255,255,255,0.2)',
                }}
                whileHover={{ left: '100%' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </motion.button>
          </motion.div>

          {/* Subtle static decorative elements */}
          <div
            style={{
              position: 'absolute',
              top: '20%',
              right: '10%',
              opacity: 0.4,
              fontSize: '2rem',
            }}
          >
            ✨
          </div>
          <div
            style={{
              position: 'absolute',
              top: '60%',
              left: '8%',
              opacity: 0.3,
              fontSize: '1.5rem',
            }}
          >
            🚀
          </div>
        </Box>
      </Box>
    </motion.section>
  );
};

export default HeroSection;
