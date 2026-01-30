import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CardContainer from '@/components/ui/CardContainer';
import DualActionButton from '@/components/ui/DualActionButton.jsx';

const ACTIVITY_MARKDOWN = `<img src="https://github-readme-activity-graph.vercel.app/graph?username=narainkarthikv&theme=tokyo-night&hide_border=true" alt="GitHub Activity Graph" style="width:100%;border-radius:8px;" />`;

const GithubActivityGraph = () => {
  const openInNewTab = () => {
    window.open('https://github.com/narainkarthikv', '_blank', 'noopener');
  };

  return (
    <CardContainer
      sx={{
        p: 2,
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 1.5,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: '1.125rem',
          }}
        >
          Activity Graph
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <DualActionButton
            content={ACTIVITY_MARKDOWN}
            contentType="markdown"
            variant="compact"
            size="small"
          />
          <Tooltip title="View on GitHub">
            <IconButton
              size="small"
              onClick={openInNewTab}
              aria-label="Open GitHub profile"
            >
              <OpenInNewIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

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
    </CardContainer>
  );
};

export default GithubActivityGraph;
