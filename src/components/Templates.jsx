import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid, IconButton, Tooltip, Card, CardContent, CardActions, Button } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import templatesData from '../assets/data/templates.json';

const Templates = () => {
  const [copiedIdx, setCopiedIdx] = useState(null);
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    setTemplates(templatesData);
  }, []);

  const handleCopy = async (content, idx) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1500);
    } catch (e) {
      alert('Failed to copy!');
    }
  };

  return (
    <Box sx={{ mt: 4, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
        README.md Templates
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {templates.map((tpl, idx) => (
          <Grid item xs={12} sm={6} md={4} key={tpl.label}>
            <Card sx={{ minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {tpl.label}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {tpl.description}
                </Typography>
                <Paper
                  variant="outlined"
                  sx={{
                    background: '#f5f5f5',
                    p: 2,
                    borderRadius: 2,
                    overflowX: 'auto',
                    fontSize: '0.95rem',
                    minHeight: 160,
                    maxHeight: 220,
                    mb: 1,
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {tpl.content}
                </Paper>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Tooltip title={copiedIdx === idx ? "Copied!" : "Copy to clipboard"}>
                  <span>
                    <IconButton
                      color={copiedIdx === idx ? "success" : "primary"}
                      onClick={() => handleCopy(tpl.content, idx)}
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </span>
                </Tooltip>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Templates;
