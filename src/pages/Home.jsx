import React from 'react';
import { Fade, Grow } from '@mui/material';
import { Helmet } from 'react-helmet';
import { Box, Typography, Button, Grid, Paper, Avatar } from '@mui/material';

const features = [
  {
    title: 'Instant README Generation',
    description: 'Create beautiful, informative README files for your projects in seconds.',
    icon: '⚡',
  },
  {
    title: 'Customizable Badges & Icons',
    description: 'Showcase your project stats and achievements with a rich badge library.',
    icon: '🏅',
  },
  {
    title: 'SEO Optimized Templates',
    description: 'Boost your project visibility with templates designed for discoverability.',
    icon: '🔍',
  },
];

const testimonials = [
  {
    name: 'Alex J.',
    text: 'README Shop made my open-source project stand out. The templates are top-notch!',
    avatar: '', // Add avatar image path if available
  },
  {
    name: 'Priya S.',
    text: 'Super easy to use and the badge selection is amazing. Highly recommend!',
    avatar: '',
  },
];

const Home = () => (
  <Box
    component="main"
    sx={{
      bgcolor: 'background.default',
      minHeight: '100vh',
      width: '100%',
      color: 'text.primary',
      fontFamily: 'Clash Grotesk, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 0,
    }}
    aria-label="Landing Page Main Content"
  >
    {/* SEO Meta Tags */}
    <Helmet>
      <title>README Shop - Create Stunning Project READMEs</title>
      <meta name="description" content="README Shop helps you create beautiful, SEO-optimized README files for your open-source projects. Try our templates, badges, and icons!" />
      <meta name="keywords" content="readme-shop, README generator, open-source, badges, icons, SEO, templates" />
      <meta property="og:title" content="README Shop - Create Stunning Project READMEs" />
      <meta property="og:description" content="Create beautiful, SEO-optimized README files for your open-source projects." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://readme-shop.com" />
      <meta property="og:image" content="/public/favicon.svg" />
    </Helmet>

    {/* Hero Section with Fade-in Animation */}
    <Fade in timeout={1200}>
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: 2,
          textAlign: 'center',
          bgcolor: 'background.paper',
          color: 'text.primary',
          borderBottom: '1px solid #e0e0e0',
        }}
        aria-label="Hero Section"
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2.2rem', md: '3.5rem' },
            mb: 2,
            letterSpacing: '-1px',
            color: 'inherit',
          }}
        >
          Welcome to <span style={{ color: '#222' }}>README Shop</span>
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 400,
            fontSize: { xs: '1.2rem', md: '2rem' },
            mb: 4,
            color: '#555',
          }}
        >
          The fastest way to create stunning, SEO-friendly README files for your projects.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/output"
          sx={{
            fontWeight: 600,
            bgcolor: '#222',
            color: '#fff',
            boxShadow: 2,
            transition: 'background 0.3s',
            '&:hover': { bgcolor: '#555' },
          }}
          aria-label="Get Started"
        >
          Get Started
        </Button>
      </Box>
    </Fade>

    {/* Features Section with Grow Animation */}
    <Grow in timeout={1000}>
      <Box component="section" sx={{ py: { xs: 5, md: 8 }, px: 2, maxWidth: 1200, mx: 'auto' }} aria-label="Features Section">
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontWeight: 600, mb: 3, textAlign: 'center', color: '#222' }}
        >
          Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, idx) => (
            <Grid item xs={12} sm={6} md={4} key={feature.title}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  bgcolor: '#f5f5f5',
                  color: '#222',
                  border: '1px solid #e0e0e0',
                  boxShadow: 'none',
                  transition: 'box-shadow 0.3s, border-color 0.3s',
                  '&:hover': {
                    boxShadow: 4,
                    borderColor: '#bbb',
                  },
                }}
                aria-label={feature.title}
              >
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{ fontSize: '2.5rem', mb: 2, color: '#555' }}
                  aria-label={feature.title + ' icon'}
                >
                  {feature.icon}
                </Typography>
                <Typography variant="h4" component="h4" sx={{ fontWeight: 500, mb: 1, color: '#222' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grow>

    {/* How It Works Section with Fade-in Animation */}
    <Fade in timeout={1200}>
      <Box component="section" sx={{ py: { xs: 5, md: 8 }, px: 2, maxWidth: 1000, mx: 'auto' }} aria-label="How It Works Section">
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontWeight: 600, mb: 3, textAlign: 'center', color: '#222' }}
        >
          How It Works
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" component="h3" sx={{ fontWeight: 500, mb: 1, color: '#222' }}>
              1. Choose a Template
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              Browse our SEO-optimized templates and pick one that fits your project.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" component="h3" sx={{ fontWeight: 500, mb: 1, color: '#222' }}>
              2. Personalize Your README
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              Add badges, icons, and your project details for a unique touch.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" component="h3" sx={{ fontWeight: 500, mb: 1, color: '#222' }}>
              3. Export & Share
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              Download your README and boost your project’s discoverability.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Fade>

    {/* Testimonials Section with Fade-in Animation */}
    <Fade in timeout={1200}>
      <Box component="section" sx={{ py: { xs: 5, md: 8 }, px: 2, maxWidth: 900, mx: 'auto' }} aria-label="Testimonials Section">
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontWeight: 600, mb: 3, textAlign: 'center', color: '#222' }}
        >
          What Our Users Say
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((t, idx) => (
            <Grid item xs={12} sm={6} key={t.name}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  bgcolor: '#f5f5f5',
                  color: '#222',
                  border: '1px solid #e0e0e0',
                  boxShadow: 'none',
                  transition: 'box-shadow 0.3s, border-color 0.3s',
                  '&:hover': {
                    boxShadow: 4,
                    borderColor: '#bbb',
                  },
                }}
                aria-label={t.name + ' testimonial'}
              >
                <Avatar
                  src={t.avatar}
                  alt={t.name + ' avatar'}
                  sx={{ width: 56, height: 56, mr: 2, bgcolor: '#bbb', color: '#fff' }}
                  aria-label={t.name + ' avatar'}
                >
                  {t.avatar ? null : t.name[0]}
                </Avatar>
                <Box>
                  <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 1, color: '#555' }}>
                    “{t.text}”
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#222' }}>
                    {t.name}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fade>

    {/* Call to Action Section with Fade-in Animation */}
    <Fade in timeout={1200}>
      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 10 },
          px: 2,
          textAlign: 'center',
          bgcolor: '#222',
          color: '#fff',
          borderRadius: 2,
          boxShadow: 2,
          mt: 4,
        }}
        aria-label="Call to Action Section"
      >
        <Typography variant="h2" component="h2" sx={{ fontWeight: 700, mb: 2, color: '#fff' }}>
          Ready to Make Your Project Shine?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: '#bbb' }}>
          Start building your perfect README now and boost your open-source presence!
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="/output"
          sx={{
            fontWeight: 600,
            bgcolor: '#fff',
            color: '#222',
            boxShadow: 2,
            transition: 'background 0.3s',
            '&:hover': { bgcolor: '#bbb', color: '#222' },
          }}
          aria-label="Start Now"
        >
          Start Now
        </Button>
      </Box>
    </Fade>

  </Box>
);

export default Home;
