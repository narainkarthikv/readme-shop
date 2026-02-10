import { Container, Box } from '@mui/material';
import PropTypes from 'prop-types';
import SvgBanners from '../SvgBanners';
import ComponentsGrid from './ComponentsGrid';

const ComponentsLayout = ({ children }) => (
  <Box
    sx={{
      minHeight: '100vh',
      width: '100%',
      bgcolor: 'transparent',
    }}>
    <Container
      maxWidth='xl'
      sx={{
        py: { xs: 2, md: 3 },
        px: { xs: 2, md: 3 },
      }}>
      <SvgBanners />
      <ComponentsGrid />
      {children}
    </Container>
  </Box>
);

ComponentsLayout.propTypes = {
  children: PropTypes.node,
};

export default ComponentsLayout;
