import { Box, Grid } from '@mui/material';
import GithubStats from './components/GithubStats';
import GithubTrophies from './components/GithubTrophies';
import GithubBadges from './components/GithubBadges';
import GithubContributors from './components/GithubContributors';
import GithubStreak from './components/GithubStreak';
import GithubActivityGraph from './components/GithubActivityGraph';
import ProfileViewsCounter from './components/ProfileViewsCounter';
import GithubMetrics from './components/GithubMetrics';
import GithubSnakeContribution from './components/GithubSnakeContribution';
import GithubRepoPin from './components/GithubRepoPin';
import GithubFollowers from './components/GithubFollowers';
import GithubCommitGraph from './components/GithubCommitGraph';

const GithubSection = () => (
  <Box sx={{ width: '100%', px: { xs: 1, md: 2 }, py: 2 }}>
    <Grid container spacing={2}>
      {/* Row 1: Stats and Streak - Most important metrics */}
      <Grid item xs={12} lg={6}>
        <GithubStats />
      </Grid>
      <Grid item xs={12} lg={6}>
        <GithubStreak />
      </Grid>

      {/* Row 2: Smaller badges - 3 columns on larger screens */}
      <Grid item xs={12} sm={6} md={4}>
        <ProfileViewsCounter />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <GithubBadges />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <GithubFollowers />
      </Grid>

      {/* Row 3: Trophies - Full width for visual impact */}
      <Grid item xs={12}>
        <GithubTrophies />
      </Grid>

      {/* Row 4: Activity Graph - Full width */}
      <Grid item xs={12}>
        <GithubActivityGraph />
      </Grid>

      {/* Row 5: Repo Pin and Commit Graph */}
      <Grid item xs={12} md={6}>
        <GithubRepoPin />
      </Grid>
      <Grid item xs={12} md={6}>
        <GithubCommitGraph />
      </Grid>

      {/* Row 6: Metrics and Contributors */}
      <Grid item xs={12} lg={6}>
        <GithubMetrics />
      </Grid>
      <Grid item xs={12} lg={6}>
        <GithubContributors />
      </Grid>

      {/* Row 7: Snake Animation - Full width finale */}
      <Grid item xs={12}>
        <GithubSnakeContribution />
      </Grid>
    </Grid>
  </Box>
);

export default GithubSection;
