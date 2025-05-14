import React, { useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Output = () => {
  const [markdown, setMarkdown] = useState('');
  const createMarkup = () => ({
    __html: DOMPurify.sanitize(marked(markdown)),
  });

  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      gap={2}
      mt={2}
      width={{ xs: '100%', md: '80%' }}
      mx="auto"
    >
      <TextField
        label="Enter Markdown"
        multiline
        minRows={10}
        variant="outlined"
        fullWidth
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <Paper
        elevation={3}
        sx={{
          p: 2,
          width: '100%',
          maxHeight: 600,
          overflowY: 'auto',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Preview
        </Typography>
        <Box
          dangerouslySetInnerHTML={createMarkup()}
          sx={{
            '& h1, h2, h3, h4, h5, h6': {
              mt: '0.5em',
              mb: '0.5em',
            },
            '& p': {
              mb: '1em',
            },
          }}
        />
      </Paper>
    </Box>
  );
};

export default Output;
