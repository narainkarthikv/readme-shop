import React from 'react';
import { Typography, Paper, IconButton, Tooltip, Card, CardContent, Button, Box } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useTheme } from '@mui/material/styles';

const TemplateCard = ({ template, index, selectedIdx, copiedIdx, onUseTemplate, onCopy }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: '100%',
        minWidth: 280,
        maxWidth: 400,
        minHeight: 340,
        height: { xs: 340, sm: 380 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        bgcolor: theme.palette.background.paper,
        transition: 'background 0.3s, transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', sm: '1.2rem' }, color: 'primary.main' }}>
          {template.label}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant={selectedIdx === index ? 'contained' : 'outlined'}
            color="primary"
            size="small"
            onClick={(e) => { e.stopPropagation(); onUseTemplate(template.content, index); }}
            sx={{ minWidth: 110, fontWeight: 500, borderRadius: 2 }}
          >
            {selectedIdx === index ? 'Selected' : 'Use Template'}
          </Button>
          <Tooltip title={copiedIdx === index ? 'Copied!' : 'Copy to clipboard'}>
            <span>
              <IconButton
                color={copiedIdx === index ? 'success' : 'primary'}
                onClick={(e) => { e.stopPropagation(); onCopy(template.content, index); }}
                tabIndex={-1}
                size="small"
                sx={{ borderRadius: 2 }}
              >
                <ContentCopyIcon />
              </IconButton>
            </span>
          </Tooltip>
        </Box>
      </Box>
      <CardContent sx={{ pt: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        <Typography variant="body2" sx={{ mb: 2, minHeight: 40, color: theme.palette.text.secondary }}>
          {template.description}
        </Typography>
        <Paper
          variant="outlined"
          sx={{
            background: theme.palette.background.paper,
            color: theme.palette.text.primary,
            p: 2,
            borderRadius: 2,
            overflowX: 'auto',
            touchAction: 'pan-x',
            overscrollBehavior: 'contain',
            fontSize: '0.95rem',
            minHeight: 120,
            maxHeight: 180,
            mb: 1,
            whiteSpace: 'pre-wrap',
            flexGrow: 1,
          }}
        >
          {template.content}
        </Paper>
      </CardContent>
    </Card>
  );
};

export default React.memo(TemplateCard);
