import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const InfoItem = ({ icon, title, description }) => {
  const theme = useTheme();
  
  return (
    <Grid item xs={12} sm={4}>
      <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 500, transition: 'color 0.3s' }}>
        {icon} {title}
      </Typography>
      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, transition: 'color 0.3s' }}>
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
      description: 'Make your projects memorable with custom banners, badges, and icons.'
    },
    {
      icon: '🌐',
      title: 'Connect',
      description: 'Showcase your skills, achievements, and social links in one place.'
    },
    {
      icon: '💡',
      title: 'Inspire',
      description: 'Use our templates to inspire others and grow your open-source impact.'
    }
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, px: 2, maxWidth: 900, mx: 'auto', textAlign: 'center' }}>
      <Typography variant="h3" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main, transition: 'color 0.3s' }}>
        Why README Shop?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary, transition: 'color 0.3s' }}>
        Elevate your GitHub profile and project documentation with interactive, visually stunning READMEs. Our platform empowers you to:
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {infoItems.map((item) => (
          <InfoItem key={item.title} {...item} />
        ))}
      </Grid>
    </Box>
  );
};

export default InfoSection;
