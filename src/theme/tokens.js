/**
 * Design Tokens - Modern Semantic Color System
 * Inspired by Vercel, Linear, and GitHub 2026 design systems
 * Ensures WCAG AA contrast in both light and dark modes
 */

// Base palette - neutral grays
const neutral = {
  0: '#FFFFFF',
  50: '#FAFAFA',
  100: '#F5F5F5',
  200: '#E5E5E5',
  300: '#D4D4D4',
  400: '#A3A3A3',
  500: '#737373',
  600: '#525252',
  700: '#404040',
  800: '#262626',
  900: '#171717',
  950: '#0A0A0A',
};

// Brand colors - developer-focused blue with subtle accent
const brand = {
  50: '#EFF6FF',
  100: '#DBEAFE',
  200: '#BFDBFE',
  300: '#93C5FD',
  400: '#60A5FA',
  500: '#3B82F6', // Primary brand color
  600: '#2563EB',
  700: '#1D4ED8',
  800: '#1E40AF',
  900: '#1E3A8A',
};

// Semantic colors
const semantic = {
  success: {
    light: '#10B981',
    main: '#059669',
    dark: '#047857',
    bg: '#D1FAE5',
  },
  warning: {
    light: '#F59E0B',
    main: '#D97706',
    dark: '#B45309',
    bg: '#FEF3C7',
  },
  error: {
    light: '#EF4444',
    main: '#DC2626',
    dark: '#B91C1C',
    bg: '#FEE2E2',
  },
  info: {
    light: '#3B82F6',
    main: '#2563EB',
    dark: '#1D4ED8',
    bg: '#DBEAFE',
  },
};

/**
 * Light Mode Tokens
 * Designed for maximum readability and professional appearance
 */
export const lightTokens = {
  // Backgrounds
  background: neutral[50], // Main app background
  surface: neutral[0], // Card/panel background
  surfaceElevated: neutral[0], // Elevated cards (modals, popovers)
  surfaceHover: neutral[100], // Hover state for interactive surfaces
  surfaceActive: neutral[200], // Active/pressed state

  // Text
  textPrimary: neutral[900], // Primary text - high contrast
  textSecondary: neutral[600], // Secondary text, labels
  textTertiary: neutral[500], // Placeholder, disabled text
  textInverse: neutral[0], // Text on dark backgrounds

  // Borders
  border: neutral[200], // Default border
  borderSubtle: neutral[100], // Very subtle divider
  borderStrong: neutral[300], // Emphasized border
  borderFocus: brand[500], // Focus ring

  // Interactive elements
  primary: brand[600],
  primaryHover: brand[700],
  primaryActive: brand[800],
  primarySubtle: brand[50],
  primaryMuted: brand[100],

  // Accent (for highlights, badges)
  accent: brand[500],
  accentMuted: brand[100],
  accentStrong: brand[700],

  // Semantic
  success: semantic.success.main,
  successBg: semantic.success.bg,
  warning: semantic.warning.main,
  warningBg: semantic.warning.bg,
  error: semantic.error.main,
  errorBg: semantic.error.bg,
  info: semantic.info.main,
  infoBg: semantic.info.bg,

  // Shadows (for elevation)
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
};

/**
 * Dark Mode Tokens
 * Designed for reduced eye strain with proper contrast
 */
export const darkTokens = {
  // Backgrounds
  background: neutral[950], // Main app background
  surface: neutral[900], // Card/panel background
  surfaceElevated: neutral[800], // Elevated cards
  surfaceHover: neutral[800], // Hover state
  surfaceActive: neutral[700], // Active state

  // Text
  textPrimary: neutral[50], // Primary text - high contrast
  textSecondary: neutral[400], // Secondary text, labels
  textTertiary: neutral[500], // Placeholder, disabled
  textInverse: neutral[900], // Text on light backgrounds

  // Borders
  border: neutral[800], // Default border
  borderSubtle: neutral[850] || 'rgba(255, 255, 255, 0.05)', // Very subtle
  borderStrong: neutral[700], // Emphasized
  borderFocus: brand[400], // Focus ring

  // Interactive elements
  primary: brand[400],
  primaryHover: brand[300],
  primaryActive: brand[200],
  primarySubtle: 'rgba(59, 130, 246, 0.1)',
  primaryMuted: 'rgba(59, 130, 246, 0.2)',

  // Accent
  accent: brand[400],
  accentMuted: 'rgba(59, 130, 246, 0.15)',
  accentStrong: brand[300],

  // Semantic
  success: semantic.success.light,
  successBg: 'rgba(16, 185, 129, 0.1)',
  warning: semantic.warning.light,
  warningBg: 'rgba(245, 158, 11, 0.1)',
  error: semantic.error.light,
  errorBg: 'rgba(239, 68, 68, 0.1)',
  info: semantic.info.light,
  infoBg: 'rgba(59, 130, 246, 0.1)',

  // Shadows (more subtle in dark mode)
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.5)',
  },
};

/**
 * Typography Scale - Modern, readable hierarchy
 */
export const typography = {
  // Font families
  fontFamily: {
    sans: "'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', monospace",
    display: "'Sora', -apple-system, BlinkMacSystemFont, sans-serif",
  },

  // Font sizes (rem-based for accessibility)
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
  },

  // Font weights
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Line heights
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },

  // Letter spacing
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
  },
};

/**
 * Spacing Scale (8px base)
 */
export const spacing = {
  0: '0',
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  8: '2rem', // 32px
  10: '2.5rem', // 40px
  12: '3rem', // 48px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
};

/**
 * Border Radius (modern, subtle curves)
 */
export const borderRadius = {
  none: '0',
  sm: '0.375rem', // 6px
  md: '0.5rem', // 8px
  lg: '0.75rem', // 12px
  xl: '1rem', // 16px
  '2xl': '1.5rem', // 24px
  full: '9999px',
};

/**
 * Animation/Transition tokens
 */
export const animation = {
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

/**
 * Z-index layers
 */
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  modal: 1200,
  popover: 1300,
  tooltip: 1400,
  toast: 1500,
};
