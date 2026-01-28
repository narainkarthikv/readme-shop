import { Container, Box } from '@mui/material';
import PropTypes from 'prop-types';
import SvgBanners from '../SvgBanners';
import ComponentsGrid from './ComponentsGrid';
import StatsSection from './StatsSection';

const ComponentsLayout = ({ children }) => (
  <Box
    sx={{
      minHeight: '100vh',
      width: '100%',
      bgcolor: 'background.default',
    }}
  >
    <Container
      maxWidth="xl"
      sx={{
        py: { xs: 2, md: 3 },
        px: { xs: 2, md: 3 },
      }}
    >
      <SvgBanners />
      <ComponentsGrid />
      {children}
      <StatsSection />
    </Container>
  </Box>
);

ComponentsLayout.propTypes = {
  children: PropTypes.node,
};

export default ComponentsLayout;
