import { createTheme } from '@mui/material/styles';
import { THEME_OPTIONS } from '@/utils/config/constants';

// Monochrome palette tokens
export const themeTokens = {
  blue: '#007bff',
  blueDark: '#3399ff',
  black: '#181a1b',
  white: '#ffffff',
  gray: '#222326',
  borderLight: '#e5e7eb',
  borderDark: '#343a40',
  textLight: '#212529',
  textDark: '#f8f9fa',
};

const baseTypography = {
  fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  h1: { fontWeight: 600 },
  h2: { fontWeight: 600 },
  h3: { fontWeight: 500 },
  h4: { fontWeight: 500 },
  h5: { fontWeight: 500 },
  h6: { fontWeight: 500 },
};

const lightTheme = {
  typography: baseTypography,
  palette: {
    mode: 'light',
    primary: {
      main: themeTokens.blue,
      contrastText: themeTokens.white,
    },
    background: {
      default: themeTokens.white,
      paper: themeTokens.white,
    },
    text: {
      primary: themeTokens.textLight,
      secondary: themeTokens.blue,
    },
    divider: themeTokens.borderLight,
    action: {
      hover: '#e6f0ff',
      selected: '#e6f0ff',
      focus: '#0056b3',
    },
    card: themeTokens.white,
    input: themeTokens.gray,
    button: themeTokens.blue,
    buttonText: themeTokens.white,
    border: themeTokens.borderLight,
  },
};

const darkTheme = {
  typography: baseTypography,
  palette: {
    mode: 'dark',
    primary: {
      main: themeTokens.blueDark,
      contrastText: themeTokens.black,
    },
    background: {
      default: themeTokens.black,
      paper: themeTokens.gray,
    },
    text: {
      primary: themeTokens.textDark,
      secondary: themeTokens.blueDark,
    },
    divider: themeTokens.borderDark,
    action: {
      hover: '#222e3a',
      selected: '#222e3a',
      focus: '#0056b3',
    },
    card: themeTokens.gray,
    input: themeTokens.black,
    button: themeTokens.blueDark,
    buttonText: themeTokens.black,
    border: themeTokens.borderDark,
  },
};

export const getTheme = (mode = THEME_OPTIONS.DEFAULT) => {
  return createTheme(mode === 'dark' ? darkTheme : lightTheme);
};
