/* eslint-disable react/prop-types */
import { Box, Typography, Grid, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { floatVariants } from './animations';

const InfoItem = ({ icon, title, description }) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} sm={4}>
      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{ display: 'inline-block' }}
      >
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 500,
            transition: 'color 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <Box
            component="span"
            sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, lineHeight: 1 }}
          >
            {icon}
          </Box>
          {title}
        </Typography>
      </motion.div>

      <Typography
        variant="body2"
        sx={{
          color: theme.palette.text.secondary,
          transition: 'color 0.3s',
          mt: 1,
        }}
      >
        {description}
      </Typography>
    </Grid>
  );
};

const InfoSection = () => {
  const theme = useTheme();

  const infoItems = [
    {
      icon: '🚀',
      title: 'Stand Out',
      description:
        'Make your projects memorable with custom banners, badges, and icons.',
    },
    {
      icon: '🌐',
      title: 'Connect',
      description:
        'Showcase your skills, achievements, and social links in one place.',
    },
    {
      icon: '💡',
      title: 'Inspire',
      description:
        'Use our templates to inspire others and grow your open-source impact.',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        px: 2,
        maxWidth: 900,
        mx: 'auto',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 600,
          mb: 2,
          color: theme.palette.primary.main,
          transition: 'color 0.3s',
        }}
      >
        Why README Shop?
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 2,
          color: theme.palette.text.secondary,
          transition: 'color 0.3s',
        }}
      >
        Elevate your GitHub profile and project documentation with interactive,
        visually stunning READMEs. Our platform empowers you to:
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {infoItems.map((item) => (
          <InfoItem key={item.title} {...item} />
        ))}
      </Grid>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="center"
        sx={{ mt: 3 }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => (window.location.href = '/templates')}
        >
          Browse Templates
        </Button>

        <Button
          variant="outlined"
          color="primary"
          onClick={() => (window.location.href = '/components')}
        >
          Components Library
        </Button>
      </Stack>
    </Box>
  );
};

export default InfoSection;
