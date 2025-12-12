import React from 'react';
import { Box, Chip, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

const TemplateCategories = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mb: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: { xs: 'flex-start', md: 'flex-start' },
        overflowX: 'auto',
        gap: 1,
        px: 0.5,
        py: 0.5,
        '&::-webkit-scrollbar': { display: 'none' },
      }}
      role="tablist"
      aria-label="Template categories"
    >
      {categories.map((category) => {
        const active = selectedCategory === category;
        return (
          <Chip
            key={category}
            label={category}
            color={active ? 'primary' : 'default'}
            onClick={() => onCategorySelect(category)}
            clickable
            role="tab"
            aria-selected={active}
            sx={{
              fontWeight: active ? 700 : 500,
              boxShadow: active
                ? `0 6px 18px ${theme.palette.primary.main}22`
                : 'none',
              border: active
                ? `1px solid ${theme.palette.primary.main}55`
                : 'none',
              height: 36,
            }}
          />
        );
      })}
    </Box>
  );
};

TemplateCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategorySelect: PropTypes.func.isRequired,
};

export default React.memo(TemplateCategories);
