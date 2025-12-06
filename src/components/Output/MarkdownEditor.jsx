import React from 'react';
import { TextField, Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const MarkdownEditor = React.memo(({ value, onChange }) => (
  <Paper elevation={3} sx={{ flex: 1, p: 2, minHeight: 400 }}>
    <Typography variant="h6" sx={{ mb: 1 }}>
      Markdown Editor
    </Typography>
    <TextField
      multiline
      minRows={16}
      value={value}
      onChange={onChange}
      fullWidth
      variant="outlined"
      placeholder="Write your README markdown here..."
      sx={{ fontFamily: 'monospace', fontSize: 16 }}
    />
  </Paper>
));

MarkdownEditor.displayName = 'MarkdownEditor';

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MarkdownEditor;
