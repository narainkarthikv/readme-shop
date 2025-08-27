import React from 'react';
import { Box, Chip } from '@mui/material';

const TemplateCategories = ({ categories, selectedCategory, onCategorySelect }) => (
  <Box 
    sx={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: 1, 
      mb: 3, 
      justifyContent: 'center' 
    }}
  >
    {categories.map(({ value, label }) => (
      <Chip
        key={value}
        label={label}
        onClick={() => onCategorySelect(value)}
        color={selectedCategory === value ? 'primary' : 'default'}
        variant={selectedCategory === value ? 'filled' : 'outlined'}
        sx={{ 
          borderRadius: 1,
          '&:hover': {
            backgroundColor: theme => selectedCategory === value 
              ? theme.palette.primary.main 
              : theme.palette.action.hover
          }
        }}
      />
    ))}
  </Box>
);

export default React.memo(TemplateCategories);
