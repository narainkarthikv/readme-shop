import {
  Box,
  Paper,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';
import { SectionSelector } from '@/components/SectionSelector';
import { useShopStore } from '@/store/useShopStore';
import useMarkdownStore from './store/markdownStore';
import { useSectionPresets } from '@/hooks/useSectionPresets';

const MarkdownLayout = () => {
  const { markdown, setMarkdown, userName, setUserName, resetDraft } =
    useMarkdownStore();
  const clearSections = useShopStore((state) => state.clearSections);
  useSectionPresets();

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleClearDraft = () => {
    resetDraft();
    clearSections();
  };

  return (
    <Box
      sx={{
        height: 'calc(100vh - 100px)', // Account for navbar and padding
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        width: '100%',
      }}>
      <Paper
        elevation={2}
        sx={{
          p: { xs: 1.5, md: 2 },
          mb: 2,
          borderRadius: 2,
        }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          alignItems={{ xs: 'stretch', md: 'center' }}
          justifyContent='space-between'>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant='subtitle2' sx={{ mb: 0.5 }}>
              GitHub username
            </Typography>
            <TextField
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder='octocat'
              size='small'
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>@</InputAdornment>
                ),
              }}
              helperText='Used to personalize GitHub components and embeds'
            />
          </Box>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ maxWidth: 360 }}>
            Drafts save automatically in this browser, including markdown,
            username, icons, and selected sections.
          </Typography>
          <Button
            variant='outlined'
            color='error'
            startIcon={<DeleteOutlineIcon />}
            onClick={handleClearDraft}
            sx={{ alignSelf: { xs: 'flex-start', md: 'center' } }}>
            Clear Draft
          </Button>
        </Stack>
      </Paper>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexDirection: { xs: 'column', md: 'row' },
          flex: 1,
          minHeight: 0, // Important for proper scrolling
        }}>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0,
          }}>
          <SectionSelector />
          <MarkdownEditor value={markdown} onChange={handleMarkdownChange} />
        </Box>
        <MarkdownPreview markdown={markdown} />
      </Box>
    </Box>
  );
};

export default MarkdownLayout;
