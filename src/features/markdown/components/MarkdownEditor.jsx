import React from 'react';
import { Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

const MarkdownEditor = ({ value, onChange }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        minHeight: 0,
        minWidth: 0,
        overflow: 'hidden',
        position: 'relative',
        bgcolor: theme.palette.background.default,
      }}>
      <Typography variant='h6' sx={{ mb: 1, flexShrink: 0 }}>
        Markdown Editor
      </Typography>
      <textarea
        value={value}
        onChange={onChange}
        placeholder='Write your README markdown here...'
        style={{
          flex: 1,
          minHeight: 0,
          width: '100%',
          padding: '12px',
          fontFamily: 'monospace',
          fontSize: '14px',
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: '4px',
          resize: 'none',
          overflowY: 'auto',
          boxSizing: 'border-box',
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
      />
    </Paper>
  );
};

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default React.memo(MarkdownEditor);
