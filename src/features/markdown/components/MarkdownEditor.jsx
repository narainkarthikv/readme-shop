import React from 'react';
import { TextField, Paper, Typography } from '@mui/material';

const MarkdownEditor = ({ value, onChange }) => (
  <Paper 
    elevation={3} 
    sx={{ 
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      p: 2,
      minHeight: 0,
      maxWidth: '50%',
      position: 'relative',
      '& .MuiInputBase-root': {
        fontFamily: 'monospace',
        height: '100%'
      }
    }}
  >
    <Typography variant="h6" sx={{ mb: 1, flexShrink: 0 }}>
      Markdown Editor
    </Typography>
    <TextField
      multiline
      value={value}
      onChange={onChange}
      fullWidth
      variant="outlined"
      placeholder="Write your README markdown here..."
      sx={{ 
        flex: 1,
        '& .MuiInputBase-root': {
          height: '100%',
          display: 'flex',
          '& textarea': {
            flex: 1,
            resize: 'none',
            overflowY: 'auto'
          }
        }
      }}
    />
  </Paper>
);

export default React.memo(MarkdownEditor);
