import { Box, Typography, Grid, Fade } from '@mui/material';
import useTemplatesStore from './store/templatesStore';
import TemplateCard from './components/TemplateCard';
import TemplateCategories from './components/TemplateCategories';
import TemplateSearch from './components/TemplateSearch';
import useMarkdownStore from '../markdown/store/markdownStore';
import useClipboard from '@/hooks/useClipboard';

const TemplatesLayout = () => {
  const {
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    selectedIdx,
    setSelectedIdx,
    copiedIdx,
    setCopiedIdx,
    getFilteredTemplates,
    getCategories,
  } = useTemplatesStore();

  const { setMarkdown } = useMarkdownStore();
  const { copyToClipboard } = useClipboard();

  const templates = getFilteredTemplates();
  const categories = getCategories();

  const handleCopy = async (content, idx) => {
    await copyToClipboard(content);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const handleUseTemplate = (content, idx) => {
    setMarkdown(content);
    setSelectedIdx(idx);
    setTimeout(() => setSelectedIdx(null), 2000);
  };

  return (
    <Box sx={{ mt: 4, maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 3 } }}>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          textAlign: 'center',
          fontSize: { xs: '1.5rem', sm: '2rem' },
        }}
      >
        README.md Templates
      </Typography>

      <TemplateCategories
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      <TemplateSearch search={search} onSearchChange={setSearch} />

      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {templates.length === 0 && (
          <Grid item xs={12}>
            <Typography variant="body1" color="text.secondary" align="center">
              No templates found.
            </Typography>
          </Grid>
        )}

        {templates.map((template, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={template.label}
            sx={{ display: 'flex' }}
          >
            <Fade in timeout={400} style={{ width: '100%' }}>
              <div style={{ width: '100%' }}>
                <TemplateCard
                  template={template}
                  index={idx}
                  selectedIdx={selectedIdx}
                  copiedIdx={copiedIdx}
                  onUseTemplate={handleUseTemplate}
                  onCopy={handleCopy}
                />
              </div>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TemplatesLayout;
