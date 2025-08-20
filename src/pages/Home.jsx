import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Typography, Button, Grid, Paper, Avatar } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

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

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const staggerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.04, boxShadow: '0 4px 24px rgba(34,34,34,0.08)' },
};

const Home = () => {
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
        <meta name="description" content="README Shop helps you create beautiful, SEO-optimized README files for your open-source projects. Try our templates, badges, and icons!" />
        <meta name="keywords" content="readme-shop, README generator, open-source, badges, icons, SEO, templates" />
        <meta property="og:title" content="README Shop - Create Stunning Project READMEs" />
        <meta property="og:description" content="Create beautiful, SEO-optimized README files for your open-source projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://readme-shop.com" />
        <meta property="og:image" content="/public/favicon.svg" />
      </Helmet>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        style={{ width: '100%' }}
        aria-label="Hero Section"
      >
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            px: 2,
            textAlign: 'center',
            bgcolor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            borderBottom: `1px solid ${theme.palette.divider}`,
            transition: 'background 0.3s, color 0.3s, border-color 0.3s',
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontWeight: 700, fontSize: '3.5rem', marginBottom: '1rem', letterSpacing: '-1px', color: theme.palette.primary.main, transition: 'color 0.3s' }}
          >
            Welcome to <span style={{ color: theme.palette.primary.main }}>README Shop</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ fontWeight: 400, fontSize: '2rem', marginBottom: '2rem', color: theme.palette.text.secondary, transition: 'color 0.3s' }}
          >
            The fastest way to create stunning, SEO-friendly README files for your projects.
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.08, backgroundColor: theme.palette.action.hover }}
            whileTap={{ scale: 0.96 }}
            style={{
              fontWeight: 600,
              background: theme.palette.button,
              color: theme.palette.buttonText,
              boxShadow: '0 2px 8px rgba(34,34,34,0.08)',
              border: 'none',
              borderRadius: '8px',
              padding: '1rem 2.5rem',
              fontSize: '1.2rem',
              cursor: 'pointer',
              marginTop: '1rem',
              transition: 'background 0.3s, color 0.3s',
            }}
            aria-label="Get Started"
            onClick={() => window.location.href = '/components'}
          >
            Get Started
          </motion.button>
        </Box>
      </motion.section>

      {/* Engaging Info Section */}
      <Box sx={{ py: { xs: 4, md: 6 }, px: 2, maxWidth: 900, mx: 'auto', textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main, transition: 'color 0.3s' }}>
          Why README Shop?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary, transition: 'color 0.3s' }}>
          Elevate your GitHub profile and project documentation with interactive, visually stunning READMEs. Our platform empowers you to:
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 500, transition: 'color 0.3s' }}>
              🚀 Stand Out
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, transition: 'color 0.3s' }}>
              Make your projects memorable with custom banners, badges, and icons.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 500, transition: 'color 0.3s' }}>
              🌐 Connect
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, transition: 'color 0.3s' }}>
              Showcase your skills, achievements, and social links in one place.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 500, transition: 'color 0.3s' }}>
              💡 Inspire
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, transition: 'color 0.3s' }}>
              Use our templates to inspire others and grow your open-source impact.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      {/* Features Section with framer-motion staggered cards */}
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      style={{ width: '100%' }}
      aria-label="Features Section"
    >
      <Box component="section" sx={{ py: { xs: 5, md: 8 }, px: 2, maxWidth: 1200, mx: 'auto' }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontWeight: 600, mb: 3, textAlign: 'center', color: theme.palette.text.primary, transition: 'color 0.3s' }}
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
            {features.map((feature, idx) => (
              <Grid item xs={12} sm={6} md={4} key={feature.title}>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  style={{ height: '100%' }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      height: '100%',
                      bgcolor: theme.palette.card,
                      color: theme.palette.text.primary,
                      border: `1px solid ${theme.palette.border}`,
                      boxShadow: 'none',
                      transition: 'box-shadow 0.3s, border-color 0.3s, background 0.3s, color 0.3s',
                      '&:hover': {
                        boxShadow: 4,
                        borderColor: theme.palette.action.hover,
                        bgcolor: theme.palette.action.hover,
                      },
                    }}
                    aria-label={feature.title}
                  >
                    <Typography
                      variant="h3"
                      component="h3"
                      sx={{ fontSize: '2.5rem', mb: 2, color: theme.palette.text.secondary, transition: 'color 0.3s' }}
                      aria-label={feature.title + ' icon'}
                    >
                      {feature.icon}
                    </Typography>
                    <Typography variant="h4" component="h4" sx={{ fontWeight: 500, mb: 1, color: theme.palette.text.primary, transition: 'color 0.3s' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.text.secondary, transition: 'color 0.3s' }}>
                      {feature.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </motion.section>

    {/* How It Works Section with framer-motion fade-in */}
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      style={{ width: '100%' }}
      aria-label="How It Works Section"
    >
      <Box component="section" sx={{ py: { xs: 5, md: 8 }, px: 2, maxWidth: 1000, mx: 'auto' }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontWeight: 600, mb: 3, textAlign: 'center', color: theme.palette.text.primary, transition: 'color 0.3s' }}
        >
          How It Works
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Typography variant="h5" component="h3" sx={{ fontWeight: 500, mb: 1, color: theme.palette.text.primary, transition: 'color 0.3s' }}>
                1. Choose a Template
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, transition: 'color 0.3s' }}>
                Browse our SEO-optimized templates and pick one that fits your project.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Typography variant="h5" component="h3" sx={{ fontWeight: 500, mb: 1, color: theme.palette.text.primary, transition: 'color 0.3s' }}>
                2. Personalize Your README
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, transition: 'color 0.3s' }}>
                Add badges, icons, and your project details for a unique touch.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Typography variant="h5" component="h3" sx={{ fontWeight: 500, mb: 1, color: theme.palette.text.primary, transition: 'color 0.3s' }}>
                3. Export & Share
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, transition: 'color 0.3s' }}>
                Download your README and boost your project’s discoverability.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </motion.section>

    {/* Testimonials Section with framer-motion fade-in */}
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      style={{ width: '100%' }}
      aria-label="Testimonials Section"
    >
      <Box component="section" sx={{ py: { xs: 5, md: 8 }, px: 2, maxWidth: 900, mx: 'auto' }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontWeight: 600, mb: 3, textAlign: 'center', color: theme.palette.text.primary, transition: 'color 0.3s' }}
        >
          What Our Users Say
        </Typography>
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((t, idx) => (
              <Grid item xs={12} sm={6} key={t.name}>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  style={{ height: '100%' }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      bgcolor: theme.palette.card,
                      color: theme.palette.text.primary,
                      border: `1px solid ${theme.palette.border}`,
                      boxShadow: 'none',
                      transition: 'box-shadow 0.3s, border-color 0.3s, background 0.3s, color 0.3s',
                      '&:hover': {
                        boxShadow: 4,
                        borderColor: theme.palette.action.hover,
                        bgcolor: theme.palette.action.hover,
                      },
                    }}
                    aria-label={t.name + ' testimonial'}
                  >
                    <Avatar
                      src={t.avatar}
                      alt={t.name + ' avatar'}
                      sx={{ width: 56, height: 56, mr: 2, bgcolor: theme.palette.action.hover, color: theme.palette.buttonText, transition: 'background 0.3s, color 0.3s' }}
                      aria-label={t.name + ' avatar'}
                    >
                      {t.avatar ? null : t.name[0]}
                    </Avatar>
                    <Box>
                      <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 1, color: theme.palette.text.secondary, transition: 'color 0.3s' }}>
                        “{t.text}”
                      </Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: theme.palette.text.primary, transition: 'color 0.3s' }}>
                        {t.name}
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </motion.section>

    {/* Call to Action Section with framer-motion fade-in and button micro-interaction */}
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      style={{ width: '100%' }}
      aria-label="Call to Action Section"
    >
      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 10 },
          px: 2,
          textAlign: 'center',
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderRadius: 2,
          boxShadow: 2,
          mt: 4,
          transition: 'background 0.3s, color 0.3s',
        }}
      >
  <Typography variant="h2" component="h2" sx={{ fontWeight: 700, mb: 2, color: theme.palette.text.primary, transition: 'color 0.3s' }}>
          Ready to Make Your Project Shine?
        </Typography>
  <Typography variant="body1" sx={{ mb: 4, color: theme.palette.text.secondary, transition: 'color 0.3s' }}>
          Start building your perfect README now and boost your open-source presence!
        </Typography>
        <motion.button
          whileHover={{ scale: 1.08, backgroundColor: theme.palette.action.hover, color: theme.palette.buttonText }}
          whileTap={{ scale: 0.96 }}
          style={{
            fontWeight: 600,
            background: theme.palette.button,
            color: theme.palette.buttonText,
            boxShadow: '0 2px 8px rgba(34,34,34,0.08)',
            border: 'none',
            borderRadius: '8px',
            padding: '1rem 2.5rem',
            fontSize: '1.2rem',
            cursor: 'pointer',
            marginTop: '1rem',
            transition: 'background 0.3s, color 0.3s',
          }}
          aria-label="Start Now"
          onClick={() => window.location.href = '/components'}
        >
          Start Now
        </motion.button>
      </Box>
    </motion.section>

  </Box>
);

}
export default Home;
