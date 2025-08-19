import React from 'react';
import Badges from '../components/Badges';
import Icons from '../components/Icons';
import SvgBanners from '../components/SvgBanners';
import GithubTrophies from '../components/GithubTrophies';
import GithubStats from '../components/GithubStats';
import { Container, Grid, Box } from '@mui/material';

const Components = () => (
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
      // Removed width and height to allow natural sizing
      overflow: 'hidden',
    }}
  >
    <SvgBanners />
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      sx={{
        width: '100%',
        flex: '1 1 auto',
        maxWidth: '1400px',
        margin: 0,
        flexWrap: { xs: 'wrap', md: 'nowrap' },
        alignItems: 'stretch',
        justifyContent: 'center',
        minHeight: 0,
        mx: 'auto',
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 0,
          // Removed height: '100%'
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            minHeight: 0,
            width: '100%',
          }}
        >
          <Icons />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 0,
          // Removed height: '100%'
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            minHeight: 0,
            width: '100%',
          }}
        >
          <Badges />
        </Box>
      </Grid>
    </Grid>
    <Box
      sx={{
        width: '100%',
        maxWidth: '1400px',
        mt: 2,
        flexShrink: 0,
        mx: 'auto',
      }}
    >
      <GithubTrophies />
      <GithubStats />
    </Box>
  </Container>
);

export default Components;
