import React from 'react';
import { TextField, Box, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import PropTypes from 'prop-types';

const TemplateSearch = ({ search, onSearchChange }) => (
  <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
    <TextField
      variant="outlined"
      placeholder="Search templates..."
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      sx={{ width: { xs: '100%', sm: 420 } }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {search ? (
              <IconButton
                size="small"
                onClick={() => onSearchChange('')}
                aria-label="Clear search"
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            ) : null}
          </InputAdornment>
        ),
      }}
    />
  </Box>
);

TemplateSearch.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default React.memo(TemplateSearch);
