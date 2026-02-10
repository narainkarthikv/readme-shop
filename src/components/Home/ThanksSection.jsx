/* eslint-disable react/prop-types */
import { Box, Link, Paper, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Section from './components/Section';

const thanks = [
  {
    name: 'Ileriayo',
    url: 'https://github.com/Ileriayo',
    note: 'Markdown badges that power our badge library.',
  },
  {
    name: 'tandpfun',
    url: 'https://github.com/tandpfun',
    note: 'Skill icons that make tech stacks readable at a glance.',
  },
  {
    name: 'React Community',
    url: 'https://react.dev',
    note: 'The foundation for fast, dependable UI.',
  },
  {
    name: 'Material UI Community',
    url: 'https://mui.com',
    note: 'Design primitives that keep the interface consistent.',
  },
];

const ThanksSection = () => {
  const theme = useTheme();

  return (
    <Section aria-label='Thanks Section'>
      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          border: `1px solid ${theme.palette.divider}`,
          bgcolor: theme.palette.background.paper,
          p: { xs: 3, md: 4 },
        }}>
        <Typography
          variant='overline'
          sx={{ letterSpacing: '0.3em', color: theme.palette.text.secondary }}>
          OPEN-SOURCE CREDITS
        </Typography>
        <Typography variant='h3' sx={{ fontWeight: 700, mb: 1.5 }}>
          Built with the open-source ecosystem
        </Typography>
        <Typography
          variant='body1'
          sx={{ color: theme.palette.text.secondary, maxWidth: 680, mb: 3 }}>
          README Shop stands on the shoulders of incredible open-source work. We
          are grateful to the projects and communities that make this possible.
        </Typography>
        <Stack spacing={2}>
          {thanks.map((item) => (
            <Box
              key={item.name}
              sx={{
                p: 2,
                borderRadius: 3,
                border: `1px solid ${theme.palette.divider}`,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 1,
                alignItems: { sm: 'center' },
                justifyContent: 'space-between',
              }}>
              <Box>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  {item.name}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{ color: theme.palette.text.secondary }}>
                  {item.note}
                </Typography>
              </Box>
              <Link
                href={item.url}
                target='_blank'
                rel='noreferrer'
                underline='hover'
                sx={{ fontWeight: 600 }}>
                Learn more
              </Link>
            </Box>
          ))}
        </Stack>
      </Paper>
    </Section>
  );
};

export default ThanksSection;
