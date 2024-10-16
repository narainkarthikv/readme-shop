import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './pages/Body';
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Navbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1, // Allows the main content to grow and push the footer down
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
          }}
        >
          <Routes>
            <Route path="/" element={<Body />} />
            {/* <Route path="/shop" element={<Output />} /> */}
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
