
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { ThemeProvider } from '@mui/material/styles';
import { getTheme } from './theme';
import { useShopStore } from './store/useShopStore';

// ThemeWrapper as a custom hook for better separation
function ThemeWrapper({ children }) {
  const themeMode = useShopStore((state) => state.themeMode);
  const theme = React.useMemo(() => getTheme(themeMode), [themeMode]);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </React.StrictMode>
);
