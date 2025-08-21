import React, { useState, useEffect } from 'react';
import { useShopStore } from '@/context/store/useShopStore';
import iconList from '../assets/data/iconsList.json';
import { loadAndFilter } from '../utils/loadAndFilter';
import { useMarkdown } from '../context/MarkdownContext';
import {  Grid, TextField, Typography, Box, Paper } from '@mui/material';

const Icons = () => {
  const searchTerm = useShopStore((state) => state.iconSearchTerm);
  const setSearchTerm = useShopStore((state) => state.setIconSearchTerm);
  const { embedIcon, iconNames, removeIcon } = useMarkdown();
  const filteredIcons = loadAndFilter(iconList, searchTerm);

  const handleIconClick = (icon) => {
    if (iconNames.includes(icon.name.toLowerCase())) {
      removeIcon(icon.name.toLowerCase());
    } else {
      embedIcon(icon.name.toLowerCase());
    }
  };

  const skilliconsUrl =
    iconNames.length > 0
      ? `https://skillicons.dev/icons?i=${iconNames.join(',')}`
      : '';

  return (
    <Paper
      elevation={2}
      sx={{
        textAlign: 'center',
        mt: 4,
        p: 2,
        width: { xs: '100%', sm: 400, md: 420 },
        maxWidth: '100%',
        minHeight: 420,
        maxHeight: 600,
  overflowY: 'auto',
  touchAction: 'pan-y',
  overscrollBehavior: 'contain',
        boxSizing: 'border-box',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
    
      <Typography variant="h4" sx={{fontWeight:500}} gutterBottom>
        Icons
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Search icons..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 3, maxWidth: 300, mx: 'auto' }}
      />
      {skilliconsUrl && (
        <Box sx={{ mb: 3 }}>
          <img src={skilliconsUrl} alt="Selected icons" style={{ maxWidth: 300 }} />
        </Box>
      )}
       
      {/* Make the icons grid scrollable and rest fixed */}
  <Box sx={{ flex: 1, overflowY: 'auto', minHeight: 0, touchAction: 'pan-y', overscrollBehavior: 'contain' }}>
        <Grid container spacing={2} justifyContent="center">
          {filteredIcons.map((icon, index) => (
            <Grid item key={index} xs={4} sm={3} md={3}>
              <Box onClick={() => handleIconClick(icon)} sx={{ cursor: 'pointer' }}>
                <img src={icon.url} alt={icon.name} style={{ width: '100%', maxWidth: 60 }} />
                <Typography variant="body1" noWrap>{icon.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};

export default Icons;
