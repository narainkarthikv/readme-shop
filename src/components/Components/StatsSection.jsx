import React from 'react';
import { Box } from '@mui/material';
import GithubTrophies from '@/features/github/components/GithubTrophies';
import GithubStats from '@/features/github/components/GithubStats';

const StatsSection = React.memo(() => (
  <Box
    sx={{
      width: '100%',
      maxWidth: '1400px',
      mt: 2,
      flexShrink: 0,
      mx: 'auto',
    }}>
    <GithubTrophies />
    <GithubStats />
  </Box>
));

StatsSection.displayName = 'StatsSection';

export default StatsSection;
