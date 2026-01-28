/* eslint-disable react/prop-types */
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import {
  sectionVariants,
  staggerVariants,
  cardVariants,
  floatVariants,
} from './animations';

const features = [
  {
    title: 'Instant README Generation',
    description:
      'Create beautiful, informative README files for your projects in seconds.',
    icon: '⚡',
  },
  {
    title: 'Customizable Badges & Icons',
    description:
      'Showcase your project stats and achievements with a rich badge library.',
    icon: '🏅',
  },
  {
    title: 'SEO Optimized Templates',
    description:
      'Boost your project visibility with templates designed for discoverability.',
    icon: '🔍',
  },
];

const FeatureCard = ({ feature }) => {
  const theme = useTheme();

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
      style={{ height: '100%', display: 'flex' }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 4,
          textAlign: 'center',
          height: '100%',
          width: '100%',
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: 'none',
          borderRadius: 3,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          backdropFilter: 'blur(8px)',
          '&:hover': {
            borderColor: theme.palette.primary.main + '40',
            boxShadow: `0 8px 32px ${theme.palette.primary.main}15`,
          },
        }}
        aria-label={feature.title}
      >
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ display: 'inline-block', marginBottom: '1.5rem' }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontSize: '3rem',
              color: theme.palette.primary.main,
              transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))',
            }}
            aria-label={`${feature.title} icon`}
          >
            {feature.icon}
          </Typography>
        </motion.div>

        <Typography
          variant="h4"
          component="h4"
          sx={{
            fontWeight: 500,
            mb: 1,
            color: theme.palette.text.primary,
            transition: 'color 0.3s',
          }}
        >
          {feature.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.text.secondary, transition: 'color 0.3s' }}
        >
          {feature.description}
        </Typography>
      </Paper>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const theme = useTheme();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      style={{ width: '100%' }}
      aria-label="Features Section"
    >
      <Box
        component="section"
        sx={{ py: { xs: 5, md: 8 }, px: 2, maxWidth: 1200, mx: 'auto' }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 600,
            mb: 3,
            textAlign: 'center',
            color: theme.palette.text.primary,
            transition: 'color 0.3s',
          }}
        >
          Features
        </Typography>
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature) => (
              <Grid item xs={12} sm={6} md={4} key={feature.title}>
                <FeatureCard feature={feature} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </motion.section>
  );
};

export default FeaturesSection;
