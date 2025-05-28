import { useState, useEffect } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useMarkdown } from '../context/MarkdownContext';
import {useLocation} from "react-router-dom";

const Output = () => {
  const { markdown, setMarkdown } = useMarkdown();
  const [localMarkdown, setLocalMarkdown] = useState(markdown);
  const location = useLocation();

  const passedContent = location.state?.content;

  useEffect(() =>{
    if (passedContent) {
    setMarkdown(passedContent);
    setLocalMarkdown(passedContent);
  } else {
    setLocalMarkdown(markdown);
  }
 },[])


  // Sync context markdown changes to local state (original code)
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
