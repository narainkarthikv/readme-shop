import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Section = ({ children, sx = {}, ...props }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 4, md: 6 },
        px: 2,
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderBottom: `1px solid ${theme.palette.divider}`,
        transition: 'background 0.3s, color 0.3s, border-color 0.3s',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Section;
