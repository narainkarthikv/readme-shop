import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@mui/material';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

const MarkdownPreview = React.memo(({ markdown }) => {
  const createMarkup = React.useCallback(
    () => ({
      __html: DOMPurify.sanitize(marked.parse(markdown), {
        ADD_TAGS: ['img'],
        ADD_ATTR: ['src', 'alt', 'width', 'height', 'style'],
      }),
    }),
    [markdown]
  );

  return (
    <Paper
      elevation={3}
      sx={{ flex: 1, p: 2, minHeight: 400, overflow: 'auto' }}>
      <Typography variant='h6' sx={{ mb: 1 }}>
        Preview
      </Typography>
      <div
        style={{ fontFamily: 'inherit', fontSize: 16 }}
        dangerouslySetInnerHTML={createMarkup()}
      />
    </Paper>
  );
});

MarkdownPreview.displayName = 'MarkdownPreview';

MarkdownPreview.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default MarkdownPreview;
