import { Box, Typography } from '@mui/material';
import CardContainer from '@/components/ui/CardContainer';
import DualActionButton from '@/components/ui/DualActionButton.jsx';

const USER = 'narainkarthikv';

const FOLLOWERS_MARKDOWN = `<img src="https://img.shields.io/github/followers/${USER}?label=Followers&style=social" alt="GitHub Followers" />`;

const GithubFollowers = () => {
  return (
    <CardContainer
      sx={{
        p: 2,
        borderRadius: 2,
      }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 1.5,
        }}>
        <Typography
          variant='h6'
          sx={{
            fontWeight: 600,
            fontSize: '1.125rem',
          }}>
          Followers Badge
        </Typography>

        <DualActionButton
          content={FOLLOWERS_MARKDOWN}
          contentType='markdown'
          variant='compact'
          size='small'
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 2,
        }}>
        <img
          src={`https://img.shields.io/github/followers/${USER}?label=Followers&style=social`}
          alt='GitHub followers badge'
          style={{ height: 24 }}
        />
      </Box>
    </CardContainer>
  );
};

export default GithubFollowers;
