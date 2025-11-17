import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import App from './App.jsx';
import './styles/index.css';
import { getTheme } from './theme/theme';
import { useShopStore } from './store/useShopStore';
import { ErrorBoundary } from './components/ErrorBoundary';

const ThemeWrapper = React.memo(({ children }) => {
  const themeMode = useShopStore((state) => state.themeMode);
  const theme = React.useMemo(() => getTheme(themeMode), [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </ThemeProvider>
  );
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </React.StrictMode>
);
