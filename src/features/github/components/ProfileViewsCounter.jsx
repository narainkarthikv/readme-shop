import {
  Box,
  Typography,
  Stack,
  Button,
  Tooltip,
  IconButton,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import useMarkdownStore from '@/features/markdown/store/markdownStore';
import CardContainer from '@/components/ui/CardContainer';

const PROFILE_VIEWS_MARKDOWN = `<img src="https://komarev.com/ghpvc/?username=narainkarthikv&color=blueviolet&style=flat-square&label=Profile+Views" alt="Profile Views" />`;

const ProfileViewsCounter = () => {
  const embedMarkdown = useMarkdownStore((state) => state.embedMarkdown);

  const handleClick = () => embedMarkdown(PROFILE_VIEWS_MARKDOWN);

  return (
    <CardContainer
      onClick={handleClick}
      sx={{
        cursor: 'pointer',
        mb: 3,
        p: 2,
        borderRadius: 2,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: (theme) => theme.shadows[4],
        },
      }}
      role="button"
      tabIndex={0}
      aria-label="Insert profile views counter"
    >
      <Typography
        variant="h6"
        sx={{
          mb: 1.5,
          fontWeight: 600,
          textAlign: 'center',
          fontSize: '1.125rem',
        }}
      >
        Profile Views Counter
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 2,
        }}
      >
        <img
          src="https://komarev.com/ghpvc/?username=narainkarthikv&color=blueviolet&style=flat-square&label=Profile+Views"
          alt="Profile view counter for narainkarthikv"
          style={{ height: 28 }}
        />
      </Box>

      <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 1 }}>
        <Tooltip title="Insert into editor">
          <Button
            startIcon={<InsertDriveFileIcon />}
            size="small"
            variant="contained"
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            Insert
          </Button>
        </Tooltip>

        <Tooltip title="Learn more">
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              window.open('https://github.com/antonkomarev/github-profile-views-counter', '_blank', 'noopener');
            }}
            aria-label="Learn more about profile views counter"
          >
            <OpenInNewIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Stack>
    </CardContainer>
  );
};

export default ProfileViewsCounter;
