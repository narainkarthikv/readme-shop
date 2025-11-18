import React from 'react';
import { Typography } from '@mui/material';
import useMarkdownStore from '@/features/markdown/store/markdownStore';
import CardContainer from '@/components/ui/CardContainer';

const TROPHY_MARKDOWN = `<img src="https://github-profile-trophy.vercel.app/?username=narainkarthikv&theme=tokyonight&no-frame=true&margin-w=4" alt="GitHub Trophies" style="width:100%;max-width:100%;border-radius:8px;" />`;

const GithubTrophies = () => {
  const embedMarkdown = useMarkdownStore((state) => state.embedMarkdown);

  const handleClick = () => {
    embedMarkdown(TROPHY_MARKDOWN);
  };

  return (
    <CardContainer onClick={handleClick} sx={{ cursor: 'pointer', mb: 4 }}>
      <Typography variant="h5" sx={{ mb: 1, fontWeight: 500 }}>
        GitHub Trophies
      </Typography>
      <img
        src="https://github-profile-trophy.vercel.app/?username=narainkarthikv&theme=tokyonight&no-frame=true&margin-w=4"
        alt="GitHub Trophies"
        style={{ width: '100%', maxWidth: '100%', borderRadius: 8 }}
      />
    </CardContainer>
  );
};

export default GithubTrophies;
