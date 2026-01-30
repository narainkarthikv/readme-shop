import {
  Box,
  Typography,
  Stack,
  IconButton,
  Tooltip,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import useMarkdownStore from '@/features/markdown/store/markdownStore';
import CardContainer from '@/components/ui/CardContainer';
import DualActionButton from '@/components/ui/DualActionButton.jsx';

const STATS_MARKDOWN = [
  `<img src="https://github-readme-stats.vercel.app/api?username=narainkarthikv&theme=tokyonight&hide_border=true" alt="GitHub Stats" style="width:100%;max-width:400px;margin-right:8px;border-radius:8px;" />`,
  `<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=narainkarthikv&layout=compact&theme=tokyonight&count_private=true&hide_border=true" alt="Top Languages" style="width:100%;max-width:300px;border-radius:8px;" />`,
].join('\n');

const GithubStats = () => {
  const embedMarkdown = useMarkdownStore((state) => state.embedMarkdown);

  const handleInsert = () => embedMarkdown(STATS_MARKDOWN);

  const openInNewTab = () => {
    window.open('https://github.com/narainkarthikv', '_blank', 'noopener');
  };

  return (
    <CardContainer
      sx={{
        mb: 3,
        p: 3,
        borderRadius: 2,
        border: (theme) => `1px solid ${theme.customTokens?.borderSubtle || theme.palette.divider}`,
        bgcolor: 'background.paper',
        transition: 'all 0.2s ease',
        '&:hover': {
          borderColor: (theme) => theme.customTokens?.border || theme.palette.divider,
          boxShadow: (theme) => theme.customTokens?.shadow.md || theme.shadows[3],
        },
      }}
      role="article"
      aria-label="GitHub Stats Component"
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: '1.125rem',
            color: (theme) => theme.customTokens?.textPrimary || theme.palette.text.primary,
          }}
        >
          GitHub Stats
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <DualActionButton
            content={STATS_MARKDOWN}
            onInsert={handleInsert}
            contentType="markdown"
            size="small"
            variant="compact"
          />
          <Tooltip title="View on GitHub" arrow>
            <IconButton
              size="small"
              onClick={openInNewTab}
              aria-label="Open GitHub profile"
              sx={{
                '&:hover': {
                  bgcolor: (theme) => theme.customTokens?.surfaceHover || theme.palette.action.hover,
                },
              }}
            >
              <OpenInNewIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <Stack
        spacing={2}
        direction={{ xs: 'column', sm: 'row' }}
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Box
          component="img"
          src="https://github-readme-stats.vercel.app/api?username=narainkarthikv&theme=tokyonight&hide_border=true"
          alt="GitHub contribution stats for narainkarthikv"
          sx={{
            width: '100%',
            maxWidth: { xs: 420, sm: 350 },
            borderRadius: 1.5,
            border: (theme) => `1px solid ${theme.customTokens?.borderSubtle || theme.palette.divider}`,
          }}
        />

        <Box
          component="img"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=narainkarthikv&layout=compact&theme=tokyonight&count_private=true&hide_border=true"
          alt="Top languages used by narainkarthikv"
          sx={{
            width: '100%',
            maxWidth: { xs: 420, sm: 280 },
            borderRadius: 1.5,
            border: (theme) => `1px solid ${theme.customTokens?.borderSubtle || theme.palette.divider}`,
          }}
        />
      </Stack>

    </CardContainer>
  );
};

export default GithubStats;
