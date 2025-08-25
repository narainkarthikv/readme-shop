import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet';
import {
  HeroSection,
  InfoSection,
  FeaturesSection,
  HowItWorksSection,
} from '../components/Home';

const Home = React.memo(() => {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        bgcolor: theme.palette.background.default,
        minHeight: '100vh',
        width: '100%',
        color: theme.palette.text.primary,
        fontFamily: 'Clash Grotesk, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 0,
        transition: 'background 0.3s, color 0.3s',
      }}
      aria-label="Landing Page Main Content"
    >
      <Helmet>
        <title>README Shop - Create Stunning Project READMEs</title>
        <meta
          name="description"
          content="README Shop helps you create beautiful, SEO-optimized README files for your open-source projects. Try our templates, badges, and icons!"
        />
        <meta
          name="keywords"
          content="readme-shop, README generator, open-source, badges, icons, SEO, templates"
        />
        <meta
          property="og:title"
          content="README Shop - Create Stunning Project READMEs"
        />
        <meta
          property="og:description"
          content="Create beautiful, SEO-optimized README files for your open-source projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://readme-shop.com" />
        <meta property="og:image" content="/public/favicon.svg" />
      </Helmet>

      <HeroSection />
      <InfoSection />
      <FeaturesSection />
      <HowItWorksSection />
    </Box>
  );
});

export default Home;
