import { createTheme } from '@mui/material/styles';

export const getTheme = (mode = 'light') => {
  // Azure Fluent Color Tokens
  const AzureBlue = '#0078D4';
  const AzureBlueLight = '#5EB2F2';
  const AzureBlueDark = '#004E8C';

  const NeutralLighter = '#FAF9F8';
  const NeutralDark = '#1B1A19';
  const NeutralDarker = '#11100F';

  const palette =
    mode === 'light'
      ? {
          primary: {
            main: AzureBlue,
            light: AzureBlueLight,
            dark: AzureBlueDark,
          },
          background: {
            default: NeutralLighter,
            paper: '#FFFFFF',
          },
          text: {
            primary: '#242424',
            secondary: '#4A4A4A',
          },
          divider: '#D0D0D0',
        }
      : {
          primary: {
            main: AzureBlueLight,
            light: '#8ED8FF',
            dark: AzureBlue,
          },
          background: {
            default: NeutralDark,
            paper: NeutralDarker,
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#C6C6C6',
          },
          divider: '#3D3D3D',
        };

  return createTheme({
    palette: {
      mode,
      ...palette,
    },

    typography: {
      fontFamily: `'Clash Grotesk', 'Segoe UI', sans-serif`,
      h1: { fontWeight: 600 },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 600 },
      button: { textTransform: 'none' },
    },

    shape: {
      borderRadius: 10,
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            paddingInline: 20,
            fontWeight: 500,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          rounded: {
            borderRadius: 12,
          },
        },
      },
    },
  });
};
