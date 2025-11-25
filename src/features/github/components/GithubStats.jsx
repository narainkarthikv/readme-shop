import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import useMarkdownStore from '@/features/markdown/store/markdownStore';
import CardContainer from '@/components/ui/CardContainer';

const STATS_MARKDOWN = [
  `<img src="https://github-readme-stats.vercel.app/api?username=narainkarthikv&theme=tokyonight&hide_border=true" alt="GitHub Stats" style="width:100%;max-width:400px;margin-right:8px;border-radius:8px;" />`,
  `<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=narainkarthikv&layout=compact&theme=tokyonight&count_private=true&hide_border=true" alt="Top Languages" style="width:100%;max-width:300px;border-radius:8px;" />`,
].join('\n');

const GithubStats = () => {
  const embedMarkdown = useMarkdownStore((state) => state.embedMarkdown);

  const handleClick = () => embedMarkdown(STATS_MARKDOWN);

  return (
    <CardContainer
      onClick={handleClick}
      sx={{
        cursor: 'pointer',
        mb: 4,
        p: 3,
        borderRadius: 3,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: (theme) => theme.shadows[6],
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          fontWeight: 600,
          textAlign: 'center',
          letterSpacing: 0.5,
        }}
      >
        GitHub Stats
      </Typography>

      <Stack
        spacing={2}
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          component="img"
          src="https://github-readme-stats.vercel.app/api?username=narainkarthikv&theme=tokyonight&hide_border=true"
          alt="GitHub Stats"
          sx={{
            width: '100%',
            maxWidth: 400,
            borderRadius: 2,
            boxShadow: (theme) => theme.shadows[2],
          }}
        />

        <Box
          component="img"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=narainkarthikv&layout=compact&theme=tokyonight&count_private=true&hide_border=true"
          alt="Top Languages"
          sx={{
            width: '100%',
            maxWidth: 300,
            borderRadius: 2,
            boxShadow: (theme) => theme.shadows[2],
          }}
        />
      </Stack>
    </CardContainer>
  );
};

export default GithubStats;
