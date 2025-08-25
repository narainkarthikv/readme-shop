import React from 'react';
import { TextField, Box } from '@mui/material';

const TemplateSearch = ({ search, onSearchChange }) => (
  <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
    <TextField
      variant="outlined"
      placeholder="Search templates..."
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      sx={{ width: { xs: '100%', sm: 400 } }}
    />
  </Box>
);

export default React.memo(TemplateSearch);
