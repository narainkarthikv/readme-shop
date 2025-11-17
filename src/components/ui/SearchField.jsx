import React from 'react';
import { TextField } from '@mui/material';

const SearchField = ({ value, onChange, placeholder, sx = {}, ...props }) => (
  <TextField
    fullWidth
    size="small"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    sx={{
      mb: 3,
      '& .MuiOutlinedInput-root': {
        borderRadius: 2,
      },
      ...sx,
    }}
    {...props}
  />
);

export default SearchField;
