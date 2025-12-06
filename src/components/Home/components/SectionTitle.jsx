import React from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const SectionTitle = React.memo(({ children, sx = {} }) => (
  <Typography
    variant="h2"
    component="h2"
    sx={{
      fontWeight: 600,
      mb: 3,
      textAlign: 'center',
      color: 'text.primary',
      transition: 'color 0.3s',
      ...sx,
    }}
  >
    {children}
  </Typography>
));

SectionTitle.displayName = 'SectionTitle';

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

export default SectionTitle;
