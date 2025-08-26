import React from 'react';
import { Box, Paper } from '@mui/material';

const CardContainer = ({ children, sx = {}, ...props }) => (
  <Paper
    elevation={2}
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 2,
      overflow: 'hidden',
      transition: 'transform 0.2s, box-shadow 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 4,
      },
      ...sx
    }}
    {...props}
  >
    <Box sx={{ p: 2, flex: 1 }}>
      {children}
    </Box>
  </Paper>
);

export default CardContainer;
