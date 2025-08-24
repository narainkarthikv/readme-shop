import React from 'react';
import { Box, Chip } from '@mui/material';

const TemplateCategories = ({ categories, selectedCategory, onCategorySelect }) => (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2, justifyContent: 'center' }}>
    {categories.map((category) => (
      <Chip
        key={category}
        label={category}
        color={selectedCategory === category ? 'primary' : 'default'}
        onClick={() => onCategorySelect(category)}
        clickable
        sx={{ fontWeight: selectedCategory === category ? 700 : 400 }}
      />
    ))}
  </Box>
);

export default React.memo(TemplateCategories);
