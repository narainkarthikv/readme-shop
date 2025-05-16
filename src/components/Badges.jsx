import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Typography, Box } from '@mui/material';
import { loadAndFilter } from '../utils/loadAndFilter';
import badgeList from '../assets/data/badgesList.json';
import { useMarkdown } from '../context/MarkdownContext';

const STORAGE_KEY = 'selectedBadges';

const Badges = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selected, setSelected] = useState([]);
  const filteredBadges = loadAndFilter(badgeList, searchTerm);
  const { embedBadge, badgeLine } = useMarkdown();

  // Load selections from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setSelected(JSON.parse(saved));
  }, []);

  // Save selections to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
  }, [selected]);

  // Sync selected badges from markdown context (badgeLine) on mount or badgeLine change
  useEffect(() => {
    // If badgeLine is empty, clear selection
    if (badgeLine !== undefined && badgeLine !== null) {
      if (badgeLine.trim() === '') {
        if (selected.length > 0) setSelected([]);
        return;
      }
      // Extract badge URLs from badgeLine and match to badgeList names
      const parser = new DOMParser();
      const doc = parser.parseFromString(badgeLine, 'text/html');
      const imgs = Array.from(doc.querySelectorAll('img'));
      const badgeNames = imgs
        .map(img => {
          const found = badgeList.find(b => b.url === img.getAttribute('src'));
          return found ? found.name : null;
        })
        .filter(Boolean);

      // Only update if different from current selected
      if (
        badgeNames.length !== selected.length ||
        badgeNames.some((n, i) => n !== selected[i])
      ) {
        setSelected(badgeNames);
      }
    }
    // eslint-disable-next-line
  }, [badgeLine]);

  // Compose badges as HTML, side by side
  const badgesHtml = selected
    .map((name) => {
      const badge = badgeList.find((b) => b.name === name);
      return badge
        ? `<img src="${badge.url}" alt="${badge.name}" style="height:28px; margin-right:4px; vertical-align:middle;" />`
        : '';
    })
    .filter(Boolean)
    .join(' ');

  // Update badge line in context when selected badges change
  useEffect(() => {
    embedBadge(badgesHtml);
    // eslint-disable-next-line
  }, [badgesHtml]);

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
      <Typography variant="h4" gutterBottom>
        Badges
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Search badges..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 3, maxWidth: 300 }}
      />
      <Box sx={{ mb: 2, overflowX: 'auto', whiteSpace: 'nowrap', textAlign: 'center' }}>
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
