import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './pages/Body';
import Output from './pages/Output';
import TemplatesPage from './pages/TemplatesPage';
import { Box } from '@mui/material';
import { MarkdownProvider } from './context/MarkdownContext';

import { useTheme } from '@mui/material/styles';

function App() {
  const theme = useTheme();
  return (
    <MarkdownProvider>
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: theme.palette.background.default, color: theme.palette.text.primary }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, bgcolor: theme.palette.background.paper, color: theme.palette.text.primary }}>
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/shop" element={<Output />} />
              <Route path="/templates" element={<TemplatesPage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </MarkdownProvider>
  );
}

export default App;
