import React from 'react';
import { Paper, Typography } from '@mui/material';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

const MarkdownPreview = ({ markdown }) => {
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
        overflow: 'hidden',
        '& img': {
          maxWidth: '100%',
          height: 'auto'
        }
      }}
    >
      <Typography variant="h6" sx={{ mb: 1 }}>
        Preview
      </Typography>
      <div
        className="markdown-preview"
        style={{
          fontFamily: 'inherit',
          fontSize: 16,
          flex: 1,
          overflowY: 'auto',
          paddingRight: '8px'
        }}
        dangerouslySetInnerHTML={createMarkup()}
      />
    </Paper>
  );
};

export default React.memo(MarkdownPreview);
