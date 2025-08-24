import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useMarkdown } from '../context/MarkdownContext';
import MarkdownEditor from '../components/Output/MarkdownEditor';
import MarkdownPreview from '../components/Output/MarkdownPreview';

const Output = React.memo(() => {
  const { markdown, setMarkdown } = useMarkdown();
  const [localMarkdown, setLocalMarkdown] = useState(markdown);
  const location = useLocation();

  useEffect(() => {
    const passedContent = location.state?.content;
    if (passedContent) {
      setMarkdown(passedContent);
      setLocalMarkdown(passedContent);
    } else {
      setLocalMarkdown(markdown);
    }
  }, []);

  useEffect(() => {
    setLocalMarkdown(markdown);
  }, [markdown]);

  const handleChange = React.useCallback((e) => {
    setMarkdown(e.target.value);
  }, [setMarkdown]);

  return (
    <Box sx={{ width: '100%', maxWidth: 900, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
        README Output
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
        <MarkdownEditor value={markdown} onChange={handleChange} />
        <MarkdownPreview markdown={markdown} />
      </Box>
    </Box>
  );
});

Output.displayName = 'Output';

export default Output;
