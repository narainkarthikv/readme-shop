import React from 'react';
import { Box, Typography } from '@mui/material';
import { useMarkdown } from '../context/MarkdownContext';

const SVG_BANNER_MARKDOWN = `<a href="https://github.com/narainkarthikv/svg-banners" target="_blank"><img src="https://svg-banners.vercel.app/api?type=luminance&text1=README%20SHOP&width=1000&height=200" alt="SVG Banner" style="width:100%;max-width:600px;border-radius:12px;" /></a>`;

const SvgBanners = () => {
  const { embedMarkdown } = useMarkdown();

  const handleClick = () => {
    embedMarkdown(SVG_BANNER_MARKDOWN);
  };

  return (
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography variant="h5" sx={{ mb: 1 }}>SVG Banner</Typography>
      <span style={{ cursor: 'pointer', display: 'inline-block' }} onClick={handleClick}>
        <a href="https://github.com/narainkarthikv/svg-banners" target="_blank" rel="noopener noreferrer">
          <img
            src="https://svg-banners.vercel.app/api?type=luminance&text1=README%20SHOP&width=1000&height=200"
            alt="SVG Banner"
            style={{ width: '100%', maxWidth: 600, borderRadius: 12 }}
          />
        </a>
      </span>
    </Box>
  );
};

export default SvgBanners;
