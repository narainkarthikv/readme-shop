import { createTheme } from '@mui/material/styles';
import { THEME_OPTIONS } from '@config/index';

/**
 * Design tokens for consistent theming
 */
export const themeTokens = {
  blue: '#007bff',
  blueDark: '#3399ff',
  blueLight: '#e6f0ff',
  black: '#181a1b',
  white: '#ffffff',
  gray: '#222326',
  grayLight: '#f8f9fa',
  borderLight: '#e5e7eb',
  borderDark: '#343a40',
  textLight: '#212529',
  textDark: '#f8f9fa',
  success: '#28a745',
  warning: '#ffc107',
  error: '#dc3545',
  info: '#17a2b8',
};

/**
 * Base typography configuration
 * Using Inter font family with appropriate weights
 */
const baseTypography = {
  fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  h1: {
    fontWeight: 700,
    fontSize: '2.5rem',
    lineHeight: 1.2,
    letterSpacing: '-0.01562em',
  },
  h2: {
    fontWeight: 600,
    fontSize: '2rem',
    lineHeight: 1.3,
    letterSpacing: '-0.00833em',
  },
  h3: {
    fontWeight: 600,
    fontSize: '1.75rem',
    lineHeight: 1.4,
  },
  h4: {
    fontWeight: 500,
    fontSize: '1.5rem',
    lineHeight: 1.4,
  },
  h5: {
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: 1.5,
  },
  h6: {
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.43,
  },
  button: {
    textTransform: 'none',
    fontWeight: 500,
  },
};

/**
 * Common component overrides with enhanced modern styling
 */
const getComponentOverrides = (mode) => ({
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 6,
        padding: '8px 20px',
        fontSize: '0.9rem',
        fontWeight: 600,
        textTransform: 'none',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-1px)',
        },
        '&:active': {
          transform: 'translateY(0)',
        },
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        },
      },
      outlined: {
        borderWidth: 2,
        '&:hover': {
          borderWidth: 2,
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        boxShadow: 'none',
        border: `1px solid ${mode === THEME_OPTIONS.DARK ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          boxShadow: mode === THEME_OPTIONS.DARK
            ? '0 4px 16px rgba(0,0,0,0.4)'
            : '0 4px 16px rgba(0,0,0,0.1)',
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 6,
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderWidth: 2,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: 2,
          },
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      elevation0: {
        boxShadow: 'none',
      },
      elevation1: {
        boxShadow: mode === THEME_OPTIONS.DARK
          ? '0 2px 8px rgba(0,0,0,0.3)'
          : '0 2px 8px rgba(0,0,0,0.08)',
      },
      elevation2: {
        boxShadow: mode === THEME_OPTIONS.DARK
          ? '0 4px 12px rgba(0,0,0,0.4)'
          : '0 4px 12px rgba(0,0,0,0.1)',
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        backdropFilter: 'blur(12px)',
        backgroundColor:
          mode === THEME_OPTIONS.DARK
            ? 'rgba(18, 18, 20, 0.95)'
            : 'rgba(255, 255, 255, 0.95)',
        borderBottom: `1px solid ${mode === THEME_OPTIONS.DARK ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
        boxShadow: 'none',
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        borderRadius: 0,
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: 0,
      },
    },
  },
});

/**
 * Light theme configuration - High contrast for readability
 */
const lightTheme = {
  typography: baseTypography,
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb', // Vibrant blue
      light: '#3b82f6',
      dark: '#1d4ed8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#7c3aed', // Purple accent
      light: '#8b5cf6',
      dark: '#6d28d9',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f9fafb', // Soft light gray background
      paper: '#ffffff',
    },
    text: {
      primary: '#111827', // Dark gray - excellent contrast
      secondary: '#4b5563', // Medium gray - still readable
    },
    divider: '#e5e7eb',
    action: {
      hover: 'rgba(37, 99, 235, 0.08)',
      selected: 'rgba(37, 99, 235, 0.12)',
      focus: 'rgba(37, 99, 235, 0.16)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626',
    },
    info: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 20px 40px rgba(0,0,0,0.1)',
    '0 24px 48px rgba(0,0,0,0.1)',
    '0 28px 56px rgba(0,0,0,0.1)',
    '0 32px 64px rgba(0,0,0,0.1)',
    '0 36px 72px rgba(0,0,0,0.1)',
    '0 40px 80px rgba(0,0,0,0.1)',
    '0 44px 88px rgba(0,0,0,0.1)',
    '0 48px 96px rgba(0,0,0,0.1)',
    '0 52px 104px rgba(0,0,0,0.1)',
    '0 56px 112px rgba(0,0,0,0.1)',
    '0 60px 120px rgba(0,0,0,0.1)',
    '0 64px 128px rgba(0,0,0,0.1)',
    '0 68px 136px rgba(0,0,0,0.1)',
    '0 72px 144px rgba(0,0,0,0.1)',
    '0 76px 152px rgba(0,0,0,0.1)',
    '0 80px 160px rgba(0,0,0,0.1)',
    '0 84px 168px rgba(0,0,0,0.1)',
    '0 88px 176px rgba(0,0,0,0.1)',
    '0 92px 184px rgba(0,0,0,0.1)',
  ],
};

/**
 * Dark theme configuration - Consistent single-accent design
 */
const darkTheme = {
  typography: baseTypography,
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b82f6', // Single consistent blue accent
      light: '#60a5fa',
      dark: '#2563eb',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8b5cf6', // Subtle purple accent
      light: '#a78bfa',
      dark: '#7c3aed',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0f1419', // Deep dark background
      paper: '#1a1f2e', // Slightly lighter for contrast
    },
    text: {
      primary: '#e5e7eb',
      secondary: '#9ca3af',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
    action: {
      hover: 'rgba(59, 130, 246, 0.08)',
      selected: 'rgba(59, 130, 246, 0.12)',
      focus: 'rgba(59, 130, 246, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626',
    },
    info: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 2px 4px rgba(0,0,0,0.3)',
    '0 4px 8px rgba(0,0,0,0.3)',
    '0 8px 16px rgba(0,0,0,0.3)',
    '0 12px 24px rgba(0,0,0,0.3)',
    '0 16px 32px rgba(0,0,0,0.3)',
    '0 20px 40px rgba(0,0,0,0.3)',
    '0 24px 48px rgba(0,0,0,0.3)',
    '0 28px 56px rgba(0,0,0,0.3)',
    '0 32px 64px rgba(0,0,0,0.3)',
    '0 36px 72px rgba(0,0,0,0.3)',
    '0 40px 80px rgba(0,0,0,0.3)',
    '0 44px 88px rgba(0,0,0,0.3)',
    '0 48px 96px rgba(0,0,0,0.3)',
    '0 52px 104px rgba(0,0,0,0.3)',
    '0 56px 112px rgba(0,0,0,0.3)',
    '0 60px 120px rgba(0,0,0,0.3)',
    '0 64px 128px rgba(0,0,0,0.3)',
    '0 68px 136px rgba(0,0,0,0.3)',
    '0 72px 144px rgba(0,0,0,0.3)',
    '0 76px 152px rgba(0,0,0,0.3)',
    '0 80px 160px rgba(0,0,0,0.3)',
    '0 84px 168px rgba(0,0,0,0.3)',
    '0 88px 176px rgba(0,0,0,0.3)',
    '0 92px 184px rgba(0,0,0,0.3)',
  ],
};

/**
 * Get theme based on mode
 * @param {string} mode - 'light' or 'dark'
 * @returns {Theme} MUI theme object
 */
export const getTheme = (mode = THEME_OPTIONS.DEFAULT) => {
  const isDark = mode === THEME_OPTIONS.DARK;
  const themeConfig = isDark ? darkTheme : lightTheme;

  return createTheme({
    ...themeConfig,
    components: getComponentOverrides(mode),
  });
};
