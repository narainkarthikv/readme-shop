import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import {
  HeroSection,
  InfoSection,
  FeaturesSection,
  HowItWorksSection,
  TrustSection,
  CtaSection,
  SupportSection,
  ThanksSection,
} from '../components/Home';

const Home = React.memo(() => {
  const theme = useTheme();

  return (
    <Box
      component='main'
      sx={{
        bgcolor: theme.palette.background.default,
        minHeight: '100vh',
        width: '100%',
        color: theme.palette.text.primary,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 0,
        transition: 'background 0.3s, color 0.3s',
      }}
      aria-label='Landing Page Main Content'>
      <Helmet>
        <title>Markdown Shop</title>
        <meta
          name='description'
          content='Markdown Shop helps developers build GitHub READMEs and profile pages with templates, prompt snippets, badges, icons, GitHub stats, live preview, and copy-ready Markdown.'
        />
        <meta
          name='keywords'
          content='markdown shop, README builder, GitHub profile README, markdown templates, prompt gallery, documentation, badges, icons, GitHub stats'
        />
        <meta
          property='og:title'
          content='Markdown Shop - GitHub README Builder'
        />
        <meta
          property='og:description'
          content='Build project READMEs and GitHub profile pages with templates, prompts, badges, icons, stats components, live preview, and clean Markdown output.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://markdownshop.netlify.app' />
        <meta property='og:image' content='/public/favicon.svg' />
      </Helmet>

      <HeroSection />
      <InfoSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TrustSection />
      <CtaSection />
      <ThanksSection />
      <SupportSection />
    </Box>
  );
});

Home.displayName = 'Home';

export default Home;
