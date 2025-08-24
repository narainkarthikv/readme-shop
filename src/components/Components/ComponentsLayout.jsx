import React from 'react';
import { Container } from '@mui/material';
import SvgBanners from '../SvgBanners';
import ComponentsGrid from './ComponentsGrid';
import StatsSection from './StatsSection';

const ComponentsLayout = () => (
  <Container
    maxWidth="xl"
    disableGutters
    sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      px: { xs: 1, md: 3 },
      py: 2,
      boxSizing: 'border-box',
      flexGrow: 1,
      overflow: 'hidden',
    }}
  >
    <SvgBanners />
    <ComponentsGrid />
    <StatsSection />
  </Container>
);

export default ComponentsLayout;
