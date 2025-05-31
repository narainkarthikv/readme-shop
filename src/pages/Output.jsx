import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useMarkdown } from '../context/MarkdownContext';
import Badge from '@mui/material/Badge';


const Output = () => {
  const { markdown, setMarkdown } = useMarkdown();
  const [localMarkdown, setLocalMarkdown] = useState(markdown);
  const [count,setCount]=useState(0);

  // Sync context markdown to local state when it changes
  useEffect(() => {
    setLocalMarkdown(markdown);
  }, [markdown]);

  const handleChange = (e) => {
    setLocalMarkdown(e.target.value);
    setMarkdown(e.target.value);
  };
  
  const createMarkup = () => ({
    __html: DOMPurify.sanitize(
      marked(localMarkdown),
      {
        ADD_TAGS: ['img'],
        ADD_ATTR: ['src', 'alt', 'width', 'height', 'style'],
      }
    ),
  });

useEffect(() => {
  const html = document.createElement('div');
  html.innerHTML = marked(localMarkdown);
  const img = html.querySelector('img');
  if (!img) return; // skips if img is null
  const src = img.getAttribute('src');
  const url = new URL(src);
  const iParam = url.searchParams.get("i");
  if (!iParam) return; // skips if iparam is null
  const Paramcount = iParam.split(',').length;
  setCount(Paramcount);
}, [localMarkdown]);

  

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
        value={localMarkdown}
        onChange={handleChange}
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
         <Badge badgeContent={count} style={{padding:3}} color="error">
        </Badge>
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
