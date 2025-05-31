import  { useState, useEffect } from 'react';
import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useMarkdown } from '../context/MarkdownContext';
import Badge from '@mui/material/Badge';
import {useLocation} from "react-router-dom";

const Output = React.memo(() => {
  const { markdown, setMarkdown } = useMarkdown();
  const [localMarkdown, setLocalMarkdown] = useState(markdown);
  const location = useLocation();
  const [count,setCount]=useState(0);

  const passedContent = location.state?.content;

  useEffect(() =>{
    if (passedContent) {
    setMarkdown(passedContent);
    setLocalMarkdown(passedContent);
  } else {
    setLocalMarkdown(markdown);
  }
 },[])


  // Sync context markdown to local state when it changes
  useEffect(() => {
    setLocalMarkdown(markdown);
  }, [markdown]);

  const handleChange = React.useCallback((e) => {
    setMarkdown(e.target.value);
  }, [setMarkdown]);

  const createMarkup = React.useCallback(() => ({
    __html: DOMPurify.sanitize(
      marked.parse(markdown),
      {
        ADD_TAGS: ['img'],
        ADD_ATTR: ['src', 'alt', 'width', 'height', 'style'],
      }
    ),
  }), [markdown]);

  return (
    <Box sx={{ width: '100%', maxWidth: 900, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
        README Output
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
        <Paper elevation={3} sx={{ flex: 1, p: 2, minHeight: 400 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Markdown Editor
          </Typography>
          <TextField
            multiline
            minRows={16}
            value={markdown}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            placeholder="Write your README markdown here..."
            sx={{ fontFamily: 'monospace', fontSize: 16 }}
          />
        </Paper>
        <Paper elevation={3} sx={{ flex: 1, p: 2, minHeight: 400, overflow: 'auto' }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Preview
          </Typography>
          <div
            style={{ fontFamily: 'inherit', fontSize: 16 }}
            dangerouslySetInnerHTML={createMarkup()}
          />
        </Paper>
      </Box>
    </Box>
  );
});

export default Output;
