import React from 'react';
import { Box, Typography } from '@mui/material';
import { useMarkdown } from '../context/MarkdownContext';

const STATS_MARKDOWN = [
  `<img src="https://github-readme-stats.vercel.app/api?username=narainkarthikv&theme=tokyonight&hide_border=true" alt="GitHub Stats" style="width:100%;max-width:400px;margin-right:8px;border-radius:8px;" />`,
  `<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=narainkarthikv&layout=compact&theme=tokyonight&count_private=true&hide_border=true" alt="Top Languages" style="width:100%;max-width:300px;border-radius:8px;" />`
].join('\n');

const GithubStats = () => {
  const { embedMarkdown } = useMarkdown();

  const handleClick = () => {
    embedMarkdown(STATS_MARKDOWN);
  };

  return (
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography variant="h5" sx={{ mb: 1 }}>GitHub Stats</Typography>
      <span style={{ cursor: 'pointer', display: 'inline-block' }} onClick={handleClick}>
        <img
          src="https://github-readme-stats.vercel.app/api?username=narainkarthikv&theme=tokyonight&hide_border=true"
          alt="GitHub Stats"
          style={{ width: '100%', maxWidth: 400, marginRight: 8, borderRadius: 8 }}
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=narainkarthikv&layout=compact&theme=tokyonight&count_private=true&hide_border=true"
          alt="Top Languages"
          style={{ width: '100%', maxWidth: 300, borderRadius: 8 }}
        />
      </span>
    </Box>
  );
};

export default GithubStats;
