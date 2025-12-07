import { Box, Typography } from '@mui/material';
import useMarkdownStore from '@/features/markdown/store/markdownStore';
import CardContainer from '@/components/ui/CardContainer';

const TROPHY_MARKDOWN = `<img src="https://github-profile-trophy.vercel.app/?username=narainkarthikv&theme=tokyonight&no-frame=true&margin-w=4" alt="GitHub Trophies" style="width:100%;max-width:100%;border-radius:8px;" />`;

const GithubTrophies = () => {
  const embedMarkdown = useMarkdownStore((state) => state.embedMarkdown);

  const handleClick = () => embedMarkdown(TROPHY_MARKDOWN);

  return (
    <CardContainer
      onClick={handleClick}
      sx={{
        cursor: 'pointer',
        mb: 4,
        p: 3,
        borderRadius: 3,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: (theme) => theme.shadows[6],
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          fontWeight: 600,
          textAlign: 'center',
          letterSpacing: 0.5,
        }}
      >
        GitHub Trophies
      </Typography>

      <Box
        component="img"
        src="https://github-profile-trophy.vercel.app/?username=narainkarthikv&theme=tokyonight&no-frame=true&margin-w=4"
        alt="GitHub Trophies"
        sx={{
          width: '100%',
          maxWidth: '100%',
          borderRadius: 2,
          display: 'block',
          mx: 'auto',
          boxShadow: (theme) => theme.shadows[2],
        }}
      />
    </CardContainer>
  );
};

export default GithubTrophies;
