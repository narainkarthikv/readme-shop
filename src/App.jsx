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
const Home = lazy(() => import('./pages/Home'));
const Components = lazy(() => import('./pages/Components'));
const Output = lazy(() => import('./pages/Output'));
const TemplatesPage = lazy(() => import('./pages/TemplatesPage'));

// ...existing code...
// SEO meta tags for landing page
const SEO = () => (
  <>
    <title>Readme Shop - Create Beautiful README.md Files Instantly</title>
    <meta name="description" content="Readme Shop helps you create, customize, and copy beautiful README.md files for your projects. Discover templates, features, and testimonials." />
    <meta name="keywords" content="readme-shop, README generator, markdown, templates, open source, documentation" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
);

import { useLocation } from 'react-router-dom';

const AppLayout = ({ children }) => {
  const theme = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      {/* Only show Navbar on non-home routes */}
      {!isHome && <Navbar />}
      {/* SEO meta tags for home/landing page */}
      {isHome && <SEO />}
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
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <MarkdownProvider>
        <Router>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route
                path={ROUTES.HOME}
                element={
                  <AppLayout>
                    <Home />
                  </AppLayout>
                }
              />
              <Route
                path={ROUTES.COMPONENTS}
                element={
                  <AppLayout>
                    <Components />
                  </AppLayout>
                }
              />
              <Route
                path={ROUTES.SHOP}
                element={
                  <AppLayout>
                    <Output />
                  </AppLayout>
                }
              />
              <Route
                path={ROUTES.TEMPLATES}
                element={
                  <AppLayout>
                    <TemplatesPage />
                  </AppLayout>
                }
              />
            </Routes>
          </Suspense>
        </Router>
      </MarkdownProvider>
    </ErrorBoundary>
  );
}

export default App;
