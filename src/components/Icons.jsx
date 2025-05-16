import React, { useState } from 'react';
import { Container, Grid, TextField, Typography, Box } from '@mui/material';
import { loadAndFilter } from '../utils/loadAndFilter';
import iconList from '../assets/data/iconsList.json';
import { useMarkdown } from '../context/MarkdownContext';

const Icons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { embedIcon, removeIcon, iconNames } = useMarkdown();
  const filteredIcons = loadAndFilter(iconList, searchTerm);

  const handleIconClick = (icon) => {
    embedIcon(icon.name.toLowerCase());
  };

  const skilliconsUrl =
    iconNames.length > 0
      ? `https://skillicons.dev/icons?i=${iconNames.join(',')}`
      : '';

  return (
    <Container sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Icons
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Search icons..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 3, maxWidth: 300 }}
      />
      {skilliconsUrl && (
        <Box sx={{ mb: 3 }}>
          <img src={skilliconsUrl} alt="Selected icons" style={{ maxWidth: 300 }} />
        </Box>
      )}
      <Grid container spacing={2} justifyContent="center">
        {filteredIcons.map((icon, index) => (
          <Grid item key={index} xs={4} sm={2} lg={2}>
            <Box onClick={() => handleIconClick(icon)} sx={{ cursor: 'pointer' }}>
              <img src={icon.url} alt={icon.name} style={{ width: '100%', maxWidth: 60 }} />
              <Typography variant="body1">{icon.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Icons;
