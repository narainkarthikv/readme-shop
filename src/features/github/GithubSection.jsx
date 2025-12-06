import { Box } from '@mui/material';
import GithubStats from './components/GithubStats';
import GithubTrophies from './components/GithubTrophies';

const GithubSection = () => (
  <Box sx={{ width: '100%', p: 2 }}>
    <GithubStats />
    <GithubTrophies />
  </Box>
);

export default GithubSection;
