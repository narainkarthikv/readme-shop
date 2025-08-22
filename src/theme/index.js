// Centralized MUI theme configuration
import { createTheme } from '@mui/material/styles';

const palette = {
  light: {
    mode: 'light',
    primary: { main: '#1976d2' }, // blue
    background: { default: '#fff', paper: '#f4f6f8' },
    text: { primary: '#000' },
  },
  dark: {
    mode: 'dark',
    primary: { main: '#1976d2' }, // blue
    background: { default: '#121212', paper: '#1e1e1e' },
    text: { primary: '#fff' },
  },
};

export const getTheme = (mode = 'light') =>
  createTheme({
    palette: palette[mode],
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
      h1: { fontWeight: 700 },
      // ...other typography
    },
    spacing: 8,
    breakpoints: {
      values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    },
    // ...component overrides
  });
