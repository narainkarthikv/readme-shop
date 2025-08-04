
import { createTheme } from '@mui/material/styles';

export const getTheme = (mode = 'light') => {
  const palette =
    mode === 'light'
      ? {
          primary: { main: '#1976d2' },
          background: { default: '#f5f5f5', paper: '#fff' },
          text: { primary: '#222', secondary: '#555' },
        }
      : {
          primary: { main: '#90caf9' },
          background: { default: '#121212', paper: '#1e1e1e' },
          text: { primary: '#fff', secondary: '#bbb' },
        };
  return createTheme({
    palette: { mode, ...palette },
    typography: {
      fontFamily: `'Clash Grotesk', sans-serif`,
    },
  });
};
