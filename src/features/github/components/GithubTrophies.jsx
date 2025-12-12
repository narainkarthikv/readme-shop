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

const TROPHY_MARKDOWN = `<img src="https://github-profile-trophy.vercel.app/?username=narainkarthikv&theme=tokyonight&no-frame=true&margin-w=4" alt="GitHub Trophies" style="width:100%;max-width:100%;border-radius:8px;" />`;

const GithubTrophies = () => {
  const embedMarkdown = useMarkdownStore((state) => state.embedMarkdown);

  const handleClick = () => embedMarkdown(TROPHY_MARKDOWN);

  const openInNewTab = () => {
    window.open('https://github.com/narainkarthikv', '_blank', 'noopener');
  };

  return (
    <CardContainer
      onClick={handleClick}
      sx={{
        cursor: 'pointer',
        mb: 4,
        p: 2,
        borderRadius: 3,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: (theme) => theme.shadows[6],
        },
      }}
      role="button"
      tabIndex={0}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 1,
          fontWeight: 700,
          textAlign: 'center',
          letterSpacing: 0.4,
        }}
      >
        GitHub Trophies
      </Typography>

      <Box
        component="img"
        src="https://github-profile-trophy.vercel.app/?username=narainkarthikv&theme=tokyonight&no-frame=true&margin-w=4"
        alt="GitHub trophies for narainkarthikv"
        sx={{
          width: '100%',
          maxWidth: '100%',
          borderRadius: 2,
          display: 'block',
          mx: 'auto',
          boxShadow: (theme) => theme.shadows[2],
        }}
      />

      <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
        <Tooltip title="Insert into editor">
          <Button
            startIcon={<InsertDriveFileIcon />}
            size="small"
            variant="contained"
            color="primary"
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            Insert
          </Button>
        </Tooltip>

        <Tooltip title="Open GitHub profile in new tab">
          <IconButton
            size="small"
            color="primary"
            onClick={(e) => {
              e.stopPropagation();
              openInNewTab();
            }}
            aria-label="Open GitHub profile"
          >
            <OpenInNewIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </CardContainer>
  );
};

export default GithubTrophies;
