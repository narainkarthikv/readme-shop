import React from 'react';
import { Typography, Link as MuiLink, BottomNavigation } from '@mui/material';

const Footer = () => {
  return (
    <BottomNavigation
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: 'primary.main',
        color: 'white',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2">
        &#169; 2024 Open-Source Project -{' '}
        <MuiLink href="https://www.github.com/Wisdom-Fox/README-SHOP" color="inherit" target="_blank" rel="noopener">
          GitHub Repository
        </MuiLink>
        &nbsp; Developed By{' '}
        <MuiLink href="https://www.github.com/Wisdom-Fox" color="inherit" target="_blank" rel="noopener">
          Wisdom Fox Community
        </MuiLink>
      </Typography>
    </BottomNavigation>
  );
};

export default Footer;
