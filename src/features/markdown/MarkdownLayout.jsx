import React from 'react';
import { Box } from '@mui/material';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';
import useMarkdownStore from './store/markdownStore';
import PersonalizeForm from './components/PersonalizeForm';

const MarkdownLayout = () => {
  const { markdown, setMarkdown } = useMarkdownStore();

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <Box
      sx={{
        height: 'calc(100vh - 100px)', // Account for navbar and padding
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        width: '100%',
      }}
    >
      <Box sx={{ mb: 2 }}>
        <PersonalizeForm />
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexDirection: { xs: 'column', md: 'row' },
          flex: 1,
          minHeight: 0, // Important for proper scrolling
        }}
      >
        <MarkdownEditor value={markdown} onChange={handleMarkdownChange} />
        <MarkdownPreview markdown={markdown} />
      </Box>
    </Box>
  );
};

export default MarkdownLayout;
