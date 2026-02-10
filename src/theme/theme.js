import { createTheme } from '@mui/material/styles';
import { THEME_OPTIONS } from '@config/index';
import {
  lightTokens,
  darkTokens,
  typography as designTypography,
  animation,
} from './tokens';

/**
 * Base typography configuration
 * Sora is the brand font across the product
 */
const baseTypography = {
  fontFamily: designTypography.fontFamily.sans,
  h1: {
    fontWeight: designTypography.fontWeight.bold,
    fontSize: '2.75rem',
    lineHeight: 1.12,
    letterSpacing: designTypography.letterSpacing.tight,
  },
  h2: {
    fontWeight: designTypography.fontWeight.semibold,
    fontSize: '2.125rem',
    lineHeight: 1.18,
    letterSpacing: designTypography.letterSpacing.tight,
  },
  h3: {
    fontWeight: designTypography.fontWeight.semibold,
    fontSize: '1.75rem',
    lineHeight: 1.25,
  },
  h4: {
    fontWeight: designTypography.fontWeight.semibold,
    fontSize: '1.5rem',
    lineHeight: 1.3,
  },
  h5: {
    fontWeight: designTypography.fontWeight.medium,
    fontSize: '1.25rem',
    lineHeight: 1.35,
  },
  h6: {
    fontWeight: designTypography.fontWeight.medium,
    fontSize: '1rem',
    lineHeight: 1.4,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
  button: {
    textTransform: 'none',
    fontWeight: designTypography.fontWeight.semibold,
  },
};

const buildShadows = (tokens) => [
  'none',
  tokens.shadow.sm,
  tokens.shadow.md,
  tokens.shadow.lg,
  tokens.shadow.xl,
  tokens.shadow.xl,
  tokens.shadow.xl,
  tokens.shadow.xl,
  tokens.shadow.xl,
  tokens.shadow.xl,
  tokens.shadow.xl,
  tokens.shadow.xl,
  tokens.shadow.xl,
  tokens.shadow.xl,
  tokens.shadow.xl,
  tokens.shadow.xl,
  tokens.shadow.xl,
  tokens.shadow.xl,
  tokens.shadow.xl,
  tokens.shadow.xl,
  tokens.shadow.xl,
  tokens.shadow.xl,
  tokens.shadow.xl,
  tokens.shadow.xl,
  tokens.shadow.xl,
];

/**
 * Common component overrides with enhanced modern styling
 */
const getComponentOverrides = (mode, tokens) => ({
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        padding: '8px 20px',
        fontSize: '0.9rem',
        fontWeight: designTypography.fontWeight.semibold,
        textTransform: 'none',
        transition: `transform ${animation.duration.base} ${animation.easing.out}, box-shadow ${animation.duration.base} ${animation.easing.out}`,
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
          boxShadow: tokens.shadow.md,
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
        borderRadius: 14,
        boxShadow: 'none',
        border: `1px solid ${tokens.borderSubtle}`,
        transition: `transform ${animation.duration.base} ${animation.easing.out}, box-shadow ${animation.duration.base} ${animation.easing.out}, border-color ${animation.duration.base} ${animation.easing.out}`,
        '&:hover': {
          boxShadow: tokens.shadow.lg,
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 10,
          transition: `border-color ${animation.duration.base} ${animation.easing.out}, box-shadow ${animation.duration.base} ${animation.easing.out}`,
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
        borderRadius: 12,
        transition: `box-shadow ${animation.duration.base} ${animation.easing.out}`,
      },
      elevation0: {
        boxShadow: 'none',
      },
      elevation1: {
        boxShadow: tokens.shadow.sm,
      },
      elevation2: {
        boxShadow: tokens.shadow.md,
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        transition: `transform ${animation.duration.fast} ${animation.easing.out}, background-color ${animation.duration.fast} ${animation.easing.out}`,
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
            ? 'rgba(15, 23, 42, 0.9)'
            : 'rgba(255, 255, 255, 0.9)',
        borderBottom: `1px solid ${tokens.borderSubtle}`,
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

const buildPalette = (tokens, mode) => ({
  mode,
  primary: {
    main: tokens.primary,
    light: tokens.primaryMuted,
    dark: tokens.primaryActive,
    contrastText: tokens.textInverse,
  },
  secondary: {
    main: tokens.accent,
    light: tokens.accentMuted,
    dark: tokens.accentStrong,
    contrastText: tokens.textInverse,
  },
  background: {
    default: tokens.background,
    paper: tokens.surface,
  },
  text: {
    primary: tokens.textPrimary,
    secondary: tokens.textSecondary,
  },
  divider: tokens.borderSubtle,
  action: {
    hover: tokens.primarySubtle,
    selected: tokens.primaryMuted,
    focus: tokens.primaryMuted,
    disabled:
      mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(17, 24, 39, 0.3)',
    disabledBackground:
      mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(17, 24, 39, 0.08)',
  },
  success: {
    main: tokens.success,
  },
  warning: {
    main: tokens.warning,
  },
  error: {
    main: tokens.error,
  },
  info: {
    main: tokens.info,
  },
});

/**
 * Light theme configuration - High contrast for readability
 */
const lightTheme = {
  typography: baseTypography,
  palette: buildPalette(lightTokens, 'light'),
  shape: {
    borderRadius: 12,
  },
  shadows: buildShadows(lightTokens),
};

/**
 * Dark theme configuration - Consistent single-accent design
 */
const darkTheme = {
  typography: baseTypography,
  palette: buildPalette(darkTokens, 'dark'),
  shape: {
    borderRadius: 12,
  },
  shadows: buildShadows(darkTokens),
};

/**
 * Get theme based on mode
 * @param {string} mode - 'light' or 'dark'
 * @returns {Theme} MUI theme object
 */
export const getTheme = (mode = THEME_OPTIONS.DEFAULT) => {
  const isDark = mode === THEME_OPTIONS.DARK;
  const themeConfig = isDark ? darkTheme : lightTheme;
  const tokens = isDark ? darkTokens : lightTokens;

  return createTheme({
    ...themeConfig,
    transitions: {
      duration: {
        shortest: parseInt(animation.duration.fast, 10),
        shorter: parseInt(animation.duration.base, 10),
        short: parseInt(animation.duration.base, 10) + 50,
        standard: parseInt(animation.duration.slow, 10),
        complex: parseInt(animation.duration.slower, 10),
        enteringScreen: parseInt(animation.duration.slow, 10),
        leavingScreen: parseInt(animation.duration.base, 10),
      },
      easing: {
        easeInOut: animation.easing.inOut,
        easeOut: animation.easing.out,
        easeIn: animation.easing.in,
        sharp: animation.easing.default,
      },
    },
    components: getComponentOverrides(mode, tokens),
  });
};
