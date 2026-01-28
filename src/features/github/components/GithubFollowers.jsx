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

const USER = 'narainkarthikv';

const FOLLOWERS_MARKDOWN = `<img src="https://img.shields.io/github/followers/${USER}?label=Followers&style=social" alt="GitHub Followers" />`;

const GithubFollowers = () => {
  const embedMarkdown = useMarkdownStore((state) => state.embedMarkdown);

  const handleClick = () => embedMarkdown(FOLLOWERS_MARKDOWN);

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
      aria-label="Insert followers badge"
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
        Followers Badge
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
          src={`https://img.shields.io/github/followers/${USER}?label=Followers&style=social`}
          alt="GitHub followers badge"
          style={{ height: 24 }}
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

        <Tooltip title="View profile">
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              window.open(`https://github.com/${USER}`, '_blank', 'noopener');
            }}
            aria-label="Open GitHub profile"
          >
            <OpenInNewIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Stack>
    </CardContainer>
  );
};

export default GithubFollowers;
