import React from 'react';
import { Typography, Link as MuiLink, BottomNavigation } from '@mui/material';

const Footer = React.memo(() => (
  <BottomNavigation
    component="footer"
    sx={(theme) => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      p: 2,
      bgcolor:
        theme.palette.mode === 'dark'
          ? '#008cffff'
          : theme.palette.primary.main,
      color:
        theme.palette.mode === 'dark' ? theme.palette.text.primary : 'white',
      width: '100%',
      borderTop: `1px solid ${theme.palette.divider}`,
      fontSize: { xs: '0.85rem', sm: '1rem' },
      minHeight: 56,
      boxShadow:
        theme.palette.mode === 'dark' ? '0 -2px 8px rgba(0,0,0,0.15)' : 'none',
      transition: 'background 0.3s',
    })}
  >
    <Typography
      sx={{ fontWeight: 100, textAlign: 'center', width: '100%' }}
      variant="body2"
    >
      &#169; 2025 Open-Source Project -{' '}
      <MuiLink
        href="https://www.github.com/Wisdom-Fox/README-SHOP"
        color="inherit"
        target="_blank"
        rel="noopener"
        underline="hover"
        aria-label="GitHub Repository"
      >
        GitHub Repository
      </MuiLink>
      &nbsp; Developed By{' '}
      <MuiLink
        href="https://www.github.com/Wisdom-Fox"
        color="inherit"
        target="_blank"
        rel="noopener"
        underline="hover"
        aria-label="Wisdom Fox Community"
      >
        Wisdom Fox Community
      </MuiLink>
    </Typography>
  </BottomNavigation>
));

export default Footer;
