import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Grid, Fade } from '@mui/material';
import { useNavigate } from "react-router-dom";
import templatesData from '../../assets/data/templates.json';
import TemplateCard from './TemplateCard';
import TemplateCategories from './TemplateCategories';
import TemplateSearch from './TemplateSearch';

const getCategories = (templates) => {
  const cats = templates.map((tpl) => tpl.category || 'Other');
  return ['All', ...Array.from(new Set(cats))];
};

const TemplatesGrid = () => {
  const navigate = useNavigate();
  const [copiedIdx, setCopiedIdx] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    setTemplates(templatesData);
  }, []);

  const categories = React.useMemo(() => getCategories(templates), [templates]);

  const handleCopy = useCallback((content, idx) => {
    navigator.clipboard.writeText(content);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  }, []);

  const handleUseTemplate = useCallback((content, idx) => {
    setSelectedIdx(idx);
    navigate("/shop", { state: { content } });
  }, [navigate]);

  const filteredTemplates = React.useMemo(() => {
    return templates.filter((tpl) => {
      const matchesSearch = search.trim() === '' || 
        tpl.label.toLowerCase().includes(search.toLowerCase()) ||
        tpl.description.toLowerCase().includes(search.toLowerCase()) ||
        tpl.content.toLowerCase().includes(search.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || tpl.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [templates, search, selectedCategory]);

  return (
    <Box sx={{ mt: 4, maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 3 } }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', fontSize: { xs: '1.5rem', sm: '2rem' } }}>
        README.md Templates
      </Typography>

      <TemplateCategories
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      <TemplateSearch 
        search={search}
        onSearchChange={setSearch}
      />

      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {filteredTemplates.length === 0 && (
          <Grid item xs={12}>
            <Typography variant="body1" color="text.secondary" align="center">
              No templates found.
            </Typography>
          </Grid>
        )}
        
        {filteredTemplates.map((template, idx) => (
          <Grid item xs={12} sm={6} md={4} key={template.label} sx={{ display: 'flex' }}>
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

export default TemplatesGrid;
