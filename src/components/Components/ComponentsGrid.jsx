import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Box } from '@mui/material';
import Icons from '../Icons';

const ComponentsGrid = () => (
  <Grid
    container
    spacing={{ xs: 2, md: 4 }}
    sx={{
      width: '100%',
      maxWidth: '1400px',
      margin: 0,
      flexWrap: { xs: 'wrap', md: 'nowrap' },
      alignItems: 'stretch',
      justifyContent: 'center',
      minHeight: 0,
      mx: 'auto',
    }}
  >
    <ComponentPanel>
      <Icons />
    </ComponentPanel>
  </Grid>
);

const ComponentPanel = React.memo(({ children }) => (
  <Grid
    item
    xs={12}
    md={6}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
    }}
  >
    <Box
      sx={{
        flexGrow: 1,
        minHeight: 0,
        width: '100%',
      }}
    >
      {children}
    </Box>
  </Grid>
));

ComponentPanel.displayName = 'ComponentPanel';
ComponentsGrid.displayName = 'ComponentsGrid';

export default ComponentsGrid;

ComponentPanel.propTypes = {
  children: PropTypes.node,
};
