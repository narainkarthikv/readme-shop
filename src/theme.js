import { createTheme } from '@mui/material/styles';
import { 
  lightTokens, 
  darkTokens, 
  typography, 
  spacing,
  borderRadius,
  animation 
} from './theme/tokens';

/**
 * Modern Theme Generator - 2025+ Design System
 * Inspired by Vercel, Linear, GitHub, and Raycast
 * Implements semantic color tokens for consistent, accessible theming
 */
export const getTheme = (mode = 'light') => {
  const tokens = mode === 'light' ? lightTokens : darkTokens;
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      
      // Primary brand color
      primary: {
        main: tokens.primary,
        light: tokens.primaryHover,
        dark: tokens.primaryActive,
        contrastText: isDark ? tokens.textInverse : tokens.textInverse,
      },
      
      // Backgrounds
      background: {
        default: tokens.background,
        paper: tokens.surface,
      },
      
      // Text
      text: {
        primary: tokens.textPrimary,
        secondary: tokens.textSecondary,
        disabled: tokens.textTertiary,
      },
      
      // Dividers and borders
      divider: tokens.border,
      
      // Semantic colors
      success: {
        main: tokens.success,
        light: tokens.success,
        dark: tokens.success,
        contrastText: isDark ? tokens.textInverse : tokens.textInverse,
      },
      error: {
        main: tokens.error,
        light: tokens.error,
        dark: tokens.error,
        contrastText: isDark ? tokens.textInverse : tokens.textInverse,
      },
      warning: {
        main: tokens.warning,
        light: tokens.warning,
        dark: tokens.warning,
        contrastText: isDark ? tokens.textInverse : tokens.textInverse,
      },
      info: {
        main: tokens.info,
        light: tokens.info,
        dark: tokens.info,
        contrastText: isDark ? tokens.textInverse : tokens.textInverse,
      },
      
      // Custom tokens accessible via theme.palette
      action: {
        hover: tokens.surfaceHover,
        selected: tokens.surfaceActive,
        disabled: tokens.textTertiary,
        disabledBackground: tokens.surfaceHover,
      },
    },

    typography: {
      fontFamily: typography.fontFamily.sans,
      fontSize: 16,
      
      h1: {
        fontSize: typography.fontSize['4xl'],
        fontWeight: typography.fontWeight.bold,
        lineHeight: typography.lineHeight.tight,
        letterSpacing: typography.letterSpacing.tight,
      },
      h2: {
        fontSize: typography.fontSize['3xl'],
        fontWeight: typography.fontWeight.bold,
        lineHeight: typography.lineHeight.tight,
      },
      h3: {
        fontSize: typography.fontSize['2xl'],
        fontWeight: typography.fontWeight.semibold,
        lineHeight: typography.lineHeight.tight,
      },
      h4: {
        fontSize: typography.fontSize.xl,
        fontWeight: typography.fontWeight.semibold,
        lineHeight: typography.lineHeight.normal,
      },
      h5: {
        fontSize: typography.fontSize.lg,
        fontWeight: typography.fontWeight.semibold,
        lineHeight: typography.lineHeight.normal,
      },
      h6: {
        fontSize: typography.fontSize.base,
        fontWeight: typography.fontWeight.semibold,
        lineHeight: typography.lineHeight.normal,
      },
      body1: {
        fontSize: typography.fontSize.base,
        lineHeight: typography.lineHeight.relaxed,
      },
      body2: {
        fontSize: typography.fontSize.sm,
        lineHeight: typography.lineHeight.normal,
      },
      button: {
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.medium,
        textTransform: 'none',
        letterSpacing: typography.letterSpacing.normal,
      },
      caption: {
        fontSize: typography.fontSize.xs,
        lineHeight: typography.lineHeight.normal,
        color: tokens.textSecondary,
      },
      overline: {
        fontSize: typography.fontSize.xs,
        fontWeight: typography.fontWeight.semibold,
        letterSpacing: typography.letterSpacing.wide,
        textTransform: 'uppercase',
      },
    },

    shape: {
      borderRadius: 8, // Default, components can override
    },

    shadows: [
      'none',
      tokens.shadow.sm,
      tokens.shadow.sm,
      tokens.shadow.md,
      tokens.shadow.md,
      tokens.shadow.md,
      tokens.shadow.lg,
      tokens.shadow.lg,
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
    ],

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarWidth: 'thin',
            scrollbarColor: `${tokens.border} ${tokens.background}`,
            '&::-webkit-scrollbar': {
              width: '8px',
              height: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: tokens.background,
            },
            '&::-webkit-scrollbar-thumb': {
              background: tokens.border,
              borderRadius: '4px',
              '&:hover': {
                background: tokens.borderStrong,
              },
            },
          },
        },
      },
      
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: borderRadius.md,
            padding: `${spacing[2]} ${spacing[4]}`,
            fontWeight: typography.fontWeight.medium,
            transition: `all ${animation.duration.base} ${animation.easing.default}`,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
              transform: 'translateY(-1px)',
            },
            '&:active': {
              transform: 'translateY(0)',
            },
          },
          contained: {
            backgroundColor: tokens.primary,
            color: tokens.textInverse,
            '&:hover': {
              backgroundColor: tokens.primaryHover,
            },
            '&:active': {
              backgroundColor: tokens.primaryActive,
            },
          },
          outlined: {
            borderColor: tokens.border,
            color: tokens.textPrimary,
            '&:hover': {
              borderColor: tokens.borderStrong,
              backgroundColor: tokens.surfaceHover,
            },
          },
          text: {
            color: tokens.textSecondary,
            '&:hover': {
              backgroundColor: tokens.surfaceHover,
              color: tokens.textPrimary,
            },
          },
          sizeSmall: {
            padding: `${spacing[1]} ${spacing[3]}`,
            fontSize: typography.fontSize.xs,
          },
          sizeLarge: {
            padding: `${spacing[3]} ${spacing[6]}`,
            fontSize: typography.fontSize.base,
          },
        },
      },
      
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: borderRadius.md,
            transition: `all ${animation.duration.base} ${animation.easing.default}`,
            '&:hover': {
              backgroundColor: tokens.surfaceHover,
            },
          },
        },
      },
      
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: tokens.surface,
            borderRadius: borderRadius.lg,
            border: `1px solid ${tokens.borderSubtle}`,
          },
          elevation1: {
            boxShadow: tokens.shadow.sm,
          },
          elevation2: {
            boxShadow: tokens.shadow.md,
          },
          elevation3: {
            boxShadow: tokens.shadow.lg,
          },
        },
      },
      
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: borderRadius.lg,
            border: `1px solid ${tokens.borderSubtle}`,
            backgroundColor: tokens.surface,
            transition: `all ${animation.duration.base} ${animation.easing.default}`,
          },
        },
      },
      
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: borderRadius.md,
              backgroundColor: tokens.surface,
              transition: `all ${animation.duration.base} ${animation.easing.default}`,
              '& fieldset': {
                borderColor: tokens.border,
              },
              '&:hover fieldset': {
                borderColor: tokens.borderStrong,
              },
              '&.Mui-focused fieldset': {
                borderColor: tokens.borderFocus,
                borderWidth: '2px',
              },
            },
          },
        },
      },
      
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: isDark ? tokens.surfaceElevated : tokens.textPrimary,
            color: isDark ? tokens.textPrimary : tokens.textInverse,
            fontSize: typography.fontSize.xs,
            borderRadius: borderRadius.sm,
            padding: `${spacing[1]} ${spacing[2]}`,
            boxShadow: tokens.shadow.md,
          },
          arrow: {
            color: isDark ? tokens.surfaceElevated : tokens.textPrimary,
          },
        },
      },
      
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: borderRadius.md,
            fontWeight: typography.fontWeight.medium,
          },
          filled: {
            backgroundColor: tokens.surfaceHover,
            color: tokens.textPrimary,
          },
          outlined: {
            borderColor: tokens.border,
          },
        },
      },
      
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: tokens.borderSubtle,
          },
        },
      },
      
      MuiAlert: {
        styleOverrides: {
          root: {
            borderRadius: borderRadius.md,
            border: `1px solid ${tokens.border}`,
          },
          standardSuccess: {
            backgroundColor: tokens.successBg,
            color: tokens.textPrimary,
          },
          standardError: {
            backgroundColor: tokens.errorBg,
            color: tokens.textPrimary,
          },
          standardWarning: {
            backgroundColor: tokens.warningBg,
            color: tokens.textPrimary,
          },
          standardInfo: {
            backgroundColor: tokens.infoBg,
            color: tokens.textPrimary,
          },
        },
      },
    },
    
    // Custom tokens accessible throughout the app
    customTokens: tokens,
  });
};
