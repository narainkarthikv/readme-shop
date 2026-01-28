/* eslint-disable react/prop-types */
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import {
  sectionVariants,
  floatVariants,
  slideInLeftVariants,
  slideInRightVariants,
} from './animations';

const steps = [
  {
    title: '1. Choose a Template',
    description:
      'Browse our SEO-optimized templates and pick one that fits your project.',
  },
  {
    title: '2. Personalize Your README',
    description:
      'Add badges, icons, and your project details for a unique touch.',
  },
  {
    title: '3. Export & Share',
    description:
      "Download your README and boost your project's discoverability.",
  },
];

const Step = ({ title, description, delay, index }) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} md={4}>
      <motion.div
        variants={index % 2 === 0 ? slideInLeftVariants : slideInRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay }}
      >
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          <motion.div
            variants={floatVariants}
            animate="animate"
            style={{ minWidth: 64 }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                bgcolor: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette.getContrastText(
                  theme.palette.primary.main
                ),
                fontWeight: 700,
                fontSize: '1.5rem',
                boxShadow: `0 8px 24px ${theme.palette.primary.main}30`,
                border: `2px solid ${theme.palette.background.paper}`,
              }}
              aria-hidden
            >
              {index + 1}
            </Box>
          </motion.div>

          <Box>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 600,
                mb: 1,
                color: theme.palette.text.primary,
                transition: 'color 0.3s',
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                transition: 'color 0.3s',
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Grid>
  );
};

const HowItWorksSection = () => {
  const theme = useTheme();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      style={{ width: '100%' }}
      aria-label="How It Works Section"
    >
      <Box
        component="section"
        sx={{ py: { xs: 5, md: 8 }, px: 2, maxWidth: 1000, mx: 'auto' }}
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
          How It Works
        </Typography>
        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Step
              key={step.title}
              {...step}
              delay={0.12 * (index + 1)}
              index={index}
            />
          ))}
        </Grid>
      </Box>
    </motion.section>
  );
};

export default HowItWorksSection;
