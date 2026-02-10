import { Box, Typography } from '@mui/material';
import CardContainer from '@/components/ui/CardContainer';
import DualActionButton from '@/components/ui/DualActionButton.jsx';

const PROFILE_VIEWS_MARKDOWN = `<img src="https://komarev.com/ghpvc/?username=narainkarthikv&color=blueviolet&style=flat-square&label=Profile+Views" alt="Profile Views" />`;

const ProfileViewsCounter = () => {
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
          Profile Views Counter
        </Typography>

        <DualActionButton
          content={PROFILE_VIEWS_MARKDOWN}
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
          src='https://komarev.com/ghpvc/?username=narainkarthikv&color=blueviolet&style=flat-square&label=Profile+Views'
          alt='Profile view counter for narainkarthikv'
          style={{ height: 28 }}
        />
      </Box>
    </CardContainer>
  );
};

export default ProfileViewsCounter;
