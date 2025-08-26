import React from 'react';
import { Box, Typography, Button, IconButton, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CardContainer from '@/components/ui/CardContainer';

const TemplateCard = ({ 
  template, 
  index, 
  selectedIdx,
  copiedIdx,
  onUseTemplate,
  onCopy 
}) => {
  const isSelected = selectedIdx === index;
  const isCopied = copiedIdx === index;

  return (
    <CardContainer>
      <Typography variant="h6" sx={{ mb: 1 }}>
        {template.label}
      </Typography>
      
      <Typography 
        variant="body2" 
        color="text.secondary" 
        sx={{ mb: 2, minHeight: 40 }}
      >
        {template.description}
      </Typography>

      <Box sx={{ 
        mt: 'auto', 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center' 
      }}>
        <Button
          variant={isSelected ? "contained" : "outlined"}
          color="primary"
          onClick={() => onUseTemplate(template.content, index)}
          sx={{ minWidth: 100 }}
        >
          {isSelected ? 'Added!' : 'Use'}
        </Button>

        <Tooltip title={isCopied ? 'Copied!' : 'Copy to clipboard'}>
          <IconButton 
            onClick={() => onCopy(template.content, index)}
            color={isCopied ? "success" : "default"}
          >
            {isCopied ? <CheckCircleIcon /> : <ContentCopyIcon />}
          </IconButton>
        </Tooltip>
      </Box>
    </CardContainer>
  );
};

export default React.memo(TemplateCard);
