import React, { useEffect } from 'react';
import { Container, Grid, TextField, Typography, Box } from '@mui/material';
import { loadAndFilter } from '../utils/loadAndFilter';
import badgeList from '../assets/data/badgesList.json';
import useMarkdownStore from '@/features/markdown/store/markdownStore';
import { useShopStore } from '@/context/store/useShopStore';

const STORAGE_KEY = 'selectedBadges';

const Badges = () => {
  const selected = useShopStore((state) => state.selectedBadges);
  const setSelected = useShopStore((state) => state.setSelectedBadges);
  const searchTerm = useShopStore((state) => state.badgeSearchTerm);
  const setSearchTerm = useShopStore((state) => state.setBadgeSearchTerm);
  const filteredBadges = loadAndFilter(badgeList, searchTerm);
  const embedBadge = useMarkdownStore(state => state.embedBadge);
  const badgeLine = useMarkdownStore(state => state.badgeLine);

  // Load selections from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setSelected(JSON.parse(stored));
  }, [setSelected]);

  // Save selections to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
  }, [selected]);

  // Sync selected badges from markdown context (badgeLine) on mount or badgeLine change
  useEffect(() => {
    if (badgeLine) {
      // Optionally parse badgeLine to update selected badges
    }
  }, [badgeLine]);

  // Compose badges as HTML, side by side
  const badgesHtml = selected
    .map((name) => {
      const badge = badgeList.find((b) => b.name === name);
      return badge ? `<img src="${badge.url}" alt="${badge.name}" style="height:28px;margin:2px;" />` : null;
    })
    .filter(Boolean)
    .join(' ');

  // Update badge line in context when selected badges change
  useEffect(() => {
    embedBadge(badgesHtml);
  }, [badgesHtml, embedBadge]);

  const handleBadgeClick = (badge) => {
    setSelected((prev) =>
      prev.includes(badge.name)
        ? prev.filter((n) => n !== badge.name)
        : [...prev, badge.name]
    );
  };

  // Get selected badge objects for display
  const selectedBadges = badgeList.filter((b) => selected.includes(b.name));

  return (
    <Container sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" sx={{fontWeight:500}} gutterBottom>
        Badges
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Search badges..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 3, maxWidth: 300 }}
      />
  <Box sx={{ mb: 2, overflowX: 'auto', whiteSpace: 'nowrap', textAlign: 'center', touchAction: 'pan-x', overscrollBehavior: 'contain' }}>
        {selectedBadges.map((badge) => (
          <span
            key={badge.name}
            style={{
              display: 'inline-block',
              marginRight: 4,
              cursor: 'pointer',
              verticalAlign: 'middle',
            }}
            title={badge.name}
            onClick={() => handleBadgeClick(badge)}
            dangerouslySetInnerHTML={{
              __html: `<img src="${badge.url}" alt="${badge.name}" style="height:28px; vertical-align:middle;" />`,
            }}
          />
        ))}
      </Box>
      <Grid container spacing={2} justifyContent="center">
        {filteredBadges.slice(0, 15).map((badge, index) => (
          <Grid item key={index} xs={4} sm={2}>
            <Box>
              <span
                style={{
                  cursor: 'pointer',
                  display: 'inline-block',
                }}
                onClick={() => handleBadgeClick(badge)}
                title={badge.name}
                dangerouslySetInnerHTML={{
                  __html: `<img src="${badge.url}" alt="${badge.name}" style="height:28px; margin-right:4px; vertical-align:middle;" />`,
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Badges;
