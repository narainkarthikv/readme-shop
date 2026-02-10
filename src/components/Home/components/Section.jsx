import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { sectionVariants } from '../animations';

const Section = React.memo(({ children, ...props }) => (
  <motion.section
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionVariants}
    style={{ width: '100%' }}
    {...props}>
    <Box
      component='section'
      sx={{
        py: { xs: 5, md: 8 },
        px: 2,
        maxWidth: 1200,
        mx: 'auto',
      }}>
      {children}
    </Box>
  </motion.section>
));

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

Section.displayName = 'Section';

export default Section;
