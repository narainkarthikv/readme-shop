import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Fade,
  ToggleButton,
  ToggleButtonGroup,
  Stack,
} from '@mui/material';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import TemplateCard from './TemplateCard';
import TemplateCategories from './TemplateCategories';
import TemplateSearch from './TemplateSearch';
import { useTemplates } from '../../hooks/useTemplates';

const TemplatesGrid = () => {
  const {
    templates,
    categories,
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    selectedIdx,
    copiedIdx,
    handleCopy,
    handleUseTemplate,
  } = useTemplates();

  const [view, setView] = React.useState('grid');

  const handleViewChange = (_, next) => {
    if (next) setView(next);
  };

  return (
    <Box sx={{ mt: 4, maxWidth: 1280, mx: 'auto', px: { xs: 2, sm: 3 } }}>
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          textAlign: 'center',
          fontSize: { xs: '1.35rem', sm: '1.8rem' },
          fontWeight: 700,
        }}
      >
        README.md Templates
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box sx={{ position: { md: 'sticky' }, top: { md: 96 } }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 1 }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Filters
              </Typography>
              <ToggleButtonGroup
                value={view}
                exclusive
                onChange={handleViewChange}
                size="small"
              >
                <ToggleButton value="grid" aria-label="Grid view">
                  <ViewModuleIcon fontSize="small" />
                </ToggleButton>
                <ToggleButton value="list" aria-label="List view">
                  <ViewListIcon fontSize="small" />
                </ToggleButton>
              </ToggleButtonGroup>
            </Stack>

            <TemplateCategories
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />

            <Box sx={{ mt: 1 }}>
              <TemplateSearch search={search} onSearchChange={setSearch} />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={9}>
          {templates.length === 0 && (
            <Typography
              variant="body1"
              color="text.secondary"
              align="center"
              sx={{ mt: 6 }}
            >
              No templates found.
            </Typography>
          )}

          <Grid
            container
            spacing={3}
            alignItems="stretch"
            sx={{
              mt: 0,
            }}
          >
            {templates.map((template, idx) => (
              <Grid
                item
                key={template.label}
                xs={12}
                sm={view === 'grid' ? 6 : 12}
                md={view === 'grid' ? 4 : 12}
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default TemplatesGrid;
