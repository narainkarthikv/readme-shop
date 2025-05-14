import React from 'react';
import Badges from '../components/Badges';
import Icons from '../components/Icons';
import { Container, Box } from '@mui/material';

const Body = () => (
  <Container
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%',
      maxWidth: '100%',
      gap: 4,
      mt: 2,
    }}
  >
    <Box sx={{ flex: 1, overflow: 'auto', maxHeight: 400 }}>
      <Icons />
    </Box>
    <Box sx={{ flex: 1, overflow: 'auto', maxHeight: 400 }}>
      <Badges />
    </Box>
  </Container>
);

export default Body;
