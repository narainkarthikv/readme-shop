import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const LoadingSpinner = React.memo(({ message = 'Loading...' }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 4,
        gap: 3,
      }}>
      {/* Modern animated spinner */}
      <Box sx={{ position: 'relative' }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            width: 48,
            height: 48,
            border: `3px solid ${theme.palette.divider}`,
            borderTop: `3px solid ${theme.palette.primary.main}`,
            borderRadius: '50%',
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 16,
            height: 16,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </Box>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}>
        <Typography
          variant='body2'
          sx={{
            color: theme.palette.text.secondary,
            fontWeight: 500,
            textAlign: 'center',
          }}>
          {message}
        </Typography>
      </motion.div>

      {/* Subtle dots animation */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
            style={{
              width: 6,
              height: 6,
              backgroundColor: theme.palette.primary.main,
              borderRadius: '50%',
            }}
          />
        ))}
      </Box>
    </Box>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

LoadingSpinner.propTypes = {
  message: PropTypes.string,
};

export { LoadingSpinner };
