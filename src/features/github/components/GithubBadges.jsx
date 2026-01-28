import {
  Typography,
  Stack,
  Button,
  Tooltip,
  IconButton,
  Box,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import useMarkdownStore from '@/features/markdown/store/markdownStore';
import CardContainer from '@/components/ui/CardContainer';

const USER = 'narainkarthikv';

const BADGES_MD = [
  `![GitHub stars](https://img.shields.io/github/stars/${USER}?style=for-the-badge&logo=github)`,
  `![GitHub forks](https://img.shields.io/github/forks/${USER}/readme-shop?style=for-the-badge&logo=github)`,
  `![Issues](https://img.shields.io/github/issues/${USER}/readme-shop?style=for-the-badge&logo=github)`,
].join(' ');

const GithubBadges = () => {
  const embedMarkdown = useMarkdownStore((state) => state.embedMarkdown);

  const handleClick = () => embedMarkdown(BADGES_MD);

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
      aria-label="Insert GitHub badges"
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
        GitHub Badges
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        sx={{ mb: 1 }}
      >
        <Box
          component="img"
          src={`https://img.shields.io/github/stars/${USER}?style=for-the-badge&logo=github`}
          alt="GitHub stars badge"
          sx={{ height: 28 }}
        />
        <Box
          component="img"
          src={`https://img.shields.io/github/forks/${USER}/readme-shop?style=for-the-badge&logo=github`}
          alt="GitHub forks badge"
          sx={{ height: 28 }}
        />
        <Box
          component="img"
          src={`https://img.shields.io/github/issues/${USER}/readme-shop?style=for-the-badge&logo=github`}
          alt="GitHub issues badge"
          sx={{ height: 28 }}
        />
      </Stack>

      <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 1.5 }}>
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

        <Tooltip title="View on GitHub">
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

export default GithubBadges;
