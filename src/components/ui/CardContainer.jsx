import { Box, Paper } from '@mui/material';
import PropTypes from 'prop-types';

const CardContainer = ({ children, sx = {}, ...props }) => (
  <Paper
    elevation={2}
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 2,
      overflow: 'hidden',
      transition: 'transform 0.2s, box-shadow 0.2s, outline 0.15s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 4,
      },
      '&:focus-visible': {
        outline: (theme) => `3px solid ${theme.palette.primary.main}33`,
        outlineOffset: '2px',
      },
      ...sx,
    }}
    {...props}
  >
    <Box sx={{ p: 2, flex: 1 }}>{children}</Box>
  </Paper>
);

CardContainer.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

export default CardContainer;
