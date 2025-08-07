import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ROUTES } from './config/constants';
import { MarkdownProvider } from './context/MarkdownContext';
import { LoadingSpinner } from './components/common/LoadingSpinner';
import { ErrorBoundary } from './components/ErrorBoundary';

// Components that are part of the main layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load page components
const Body = lazy(() => import('./pages/Body'));
const Output = lazy(() => import('./pages/Output'));
const TemplatesPage = lazy(() => import('./pages/TemplatesPage'));

const App = () => {
  const theme = useTheme();

  return (
    <ErrorBoundary>
      <MarkdownProvider>
        <Router>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              bgcolor: theme.palette.background.default,
              color: theme.palette.text.primary,
            }}
          >
            <Navbar />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
                bgcolor: theme.palette.background.paper,
                color: theme.palette.text.primary,
              }}
            >
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path={ROUTES.HOME} element={<Body />} />
                  <Route path={ROUTES.SHOP} element={<Output />} />
                  <Route path={ROUTES.TEMPLATES} element={<TemplatesPage />} />
                </Routes>
              </Suspense>
            </Box>
            <Footer />
          </Box>
        </Router>
      </MarkdownProvider>
    </ErrorBoundary>
  );
};

export default App;
