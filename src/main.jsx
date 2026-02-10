import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';
import App from './App.jsx';
import './styles/index.css';
import { getTheme } from './theme/theme';
import { useShopStore, selectThemeMode } from '@store/useShopStore';
import { ErrorBoundary } from './components/ErrorBoundary';
import { logger } from '@utils/index';

/**
 * Theme wrapper component that provides MUI theme based on user preference
 * Memoized to prevent unnecessary re-renders
 */
const ThemeWrapper = React.memo(({ children }) => {
  const themeMode = useShopStore(selectThemeMode);
  const theme = React.useMemo(() => {
    logger.info('Creating theme:', themeMode);
    return getTheme(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
});

ThemeWrapper.displayName = 'ThemeWrapper';

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

// Initialize React app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// Report web vitals in development
if (import.meta.env.DEV) {
  import('web-vitals')
    .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(logger.log);
      getFID(logger.log);
      getFCP(logger.log);
      getLCP(logger.log);
      getTTFB(logger.log);
    })
    .catch(() => {
      // web-vitals not installed, skip
    });
}
