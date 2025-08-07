import React from 'react';
import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useMarkdown } from '../context/MarkdownContext';
import { THEME_OPTIONS } from '../config/constants';

const PersonalizeForm = React.memo(() => {
  const { userName, setUserName, theme, setTheme } = useMarkdown();

  return (
    <Box sx={{ 
      display: 'flex', 
      gap: 2, 
      mb: 2,
      flexDirection: { xs: 'column', sm: 'row' }
    }}>
      <TextField
        id="userName"
        label="Name"
        value={userName}
        onChange={e => setUserName(e.target.value)}
        placeholder="Your name"
        size="small"
        fullWidth
      />
      <FormControl size="small" fullWidth>
        <InputLabel id="theme-label">Theme</InputLabel>
        <Select
          labelId="theme-label"
          id="theme"
          value={theme}
          label="Theme"
          onChange={e => setTheme(e.target.value)}
        >
          {THEME_OPTIONS.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
});

export default PersonalizeForm;
