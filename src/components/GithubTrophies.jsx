import React from 'react';
import { Box, Typography } from '@mui/material';
import { useMarkdown } from '../context/MarkdownContext';

const TROPHIES_MARKDOWN = `<a href="https://github-profile-trophy.vercel.app/" target="_blank"><img src="https://github-profile-trophy.vercel.app/?username=narainkarthikv&theme=tokyonight&no-frame=true&margin-w=15&margin-h=15" alt="GitHub Trophies" style="width:100%;max-width:600px;border-radius:12px;" /></a>`;

const GithubTrophies = () => {
  const { embedMarkdown } = useMarkdown();

  const handleClick = () => {
    embedMarkdown(TROPHIES_MARKDOWN);
  };

  return (
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography variant="h5" sx={{ mb: 1 }}>GitHub Trophies</Typography>
      <span style={{ cursor: 'pointer', display: 'inline-block' }} onClick={handleClick}>
        <a href="https://github-profile-trophy.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://github-profile-trophy.vercel.app/?username=narainkarthikv&theme=tokyonight&no-frame=true&margin-w=15&margin-h=15"
            alt="GitHub Trophies"
            style={{ width: '100%', maxWidth: 600, borderRadius: 12 }}
          />
        </a>
      </span>
    </Box>
  );
};

export default GithubTrophies;
