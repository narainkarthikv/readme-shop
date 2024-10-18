import React, { useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Output = () => {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const createMarkup = () => {
    return { __html: DOMPurify.sanitize(marked(markdown)) };
  };

  return (
    <Box
      display="flex"
      gap={2}
      mt={2}
      width="50%"
      margin="0 auto" 
    >
      {/* Markdown input area */}
      <TextField
        label="Enter Markdown"
        multiline
        minRows={10}
        variant="outlined"
        fullWidth
        value={markdown}
        onChange={handleChange}
      />

      {/* Preview area */}
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          width: '100%',
          maxHeight: '600px',
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
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            '& p': {
              marginBottom: '1em',
              },
          }}
        />
      </Paper>
    </Box>
  );
};

export default Output;
