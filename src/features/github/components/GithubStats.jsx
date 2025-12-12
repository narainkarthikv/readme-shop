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

const STATS_MARKDOWN = [
  `<img src="https://github-readme-stats.vercel.app/api?username=narainkarthikv&theme=tokyonight&hide_border=true" alt="GitHub Stats" style="width:100%;max-width:400px;margin-right:8px;border-radius:8px;" />`,
  `<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=narainkarthikv&layout=compact&theme=tokyonight&count_private=true&hide_border=true" alt="Top Languages" style="width:100%;max-width:300px;border-radius:8px;" />`,
].join('\n');

const GithubStats = () => {
  const embedMarkdown = useMarkdownStore((state) => state.embedMarkdown);

  const handleClick = () => embedMarkdown(STATS_MARKDOWN);

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
        GitHub Stats
      </Typography>

      <Stack
        spacing={2}
        direction={{ xs: 'column', sm: 'row' }}
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          component="img"
          src="https://github-readme-stats.vercel.app/api?username=narainkarthikv&theme=tokyonight&hide_border=true"
          alt="GitHub contribution stats for narainkarthikv"
          sx={{
            width: '100%',
            maxWidth: { xs: 520, sm: 420 },
            borderRadius: 2,
            boxShadow: (theme) => theme.shadows[2],
          }}
        />

        <Box
          component="img"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=narainkarthikv&layout=compact&theme=tokyonight&count_private=true&hide_border=true"
          alt="Top languages used by narainkarthikv"
          sx={{
            width: '100%',
            maxWidth: { xs: 520, sm: 300 },
            borderRadius: 2,
            boxShadow: (theme) => theme.shadows[2],
          }}
        />
      </Stack>

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

export default GithubStats;
