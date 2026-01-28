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

const ACTIVITY_MARKDOWN = `<img src="https://github-readme-activity-graph.vercel.app/graph?username=narainkarthikv&theme=tokyo-night&hide_border=true" alt="GitHub Activity Graph" style="width:100%;border-radius:8px;" />`;

const GithubActivityGraph = () => {
  const embedMarkdown = useMarkdownStore((state) => state.embedMarkdown);

  const handleClick = () => embedMarkdown(ACTIVITY_MARKDOWN);

  const openInNewTab = () => {
    window.open('https://github.com/narainkarthikv', '_blank', 'noopener');
  };

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
      aria-label="Insert GitHub activity graph"
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
        Activity Graph
      </Typography>

      <Box
        component="img"
        src="https://github-readme-activity-graph.vercel.app/graph?username=narainkarthikv&theme=tokyo-night&hide_border=true"
        alt="GitHub activity graph for narainkarthikv"
        sx={{
          width: '100%',
          borderRadius: 1,
          display: 'block',
        }}
      />

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
              openInNewTab();
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

export default GithubActivityGraph;
