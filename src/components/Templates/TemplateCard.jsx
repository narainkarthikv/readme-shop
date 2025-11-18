import React from 'react';
import {
  Typography,
  Paper,
  IconButton,
  Tooltip,
  Card,
  CardContent,
  Button,
  Box,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useTheme } from '@mui/material/styles';

const TemplateCardHeader = React.memo(
  ({ template, selectedIdx, index, copiedIdx, onUseTemplate, onCopy }) => (
    <Box
      sx={{
        p: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h6"
        component="h3"
        sx={{
          fontWeight: 600,
          fontSize: { xs: '1.1rem', sm: '1.2rem' },
          color: 'primary.main',
        }}
        itemProp="name"
      >
        {template.label}
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          variant={selectedIdx === index ? 'contained' : 'outlined'}
          color="primary"
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            onUseTemplate(template.content, index);
          }}
          sx={{ minWidth: 110, fontWeight: 500, borderRadius: 2 }}
          aria-label={
            selectedIdx === index ? 'Template selected' : 'Use template'
          }
        >
          {selectedIdx === index ? 'Selected' : 'Use Template'}
        </Button>
        <Tooltip title={copiedIdx === index ? 'Copied!' : 'Copy to clipboard'}>
          <span>
            <IconButton
              color={copiedIdx === index ? 'success' : 'primary'}
              onClick={(e) => {
                e.stopPropagation();
                onCopy(template.content, index);
              }}
              size="small"
              sx={{ borderRadius: 2 }}
              aria-label="Copy template to clipboard"
            >
              <ContentCopyIcon />
            </IconButton>
          </span>
        </Tooltip>
      </Box>
    </Box>
  )
);

TemplateCardHeader.displayName = 'TemplateCardHeader';

const TemplatePreview = React.memo(({ content }) => {
  const theme = useTheme();

  return (
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
        transition: 'background-color 0.3s, color 0.3s',
      }}
      role="textbox"
      aria-readonly="true"
      tabIndex={0}
    >
      <Box
        component="pre"
        itemProp="text"
        sx={{
          margin: 0,
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}
      >
        {content}
      </Box>
    </Paper>
  );
});

TemplatePreview.displayName = 'TemplatePreview';

const TemplateCard = ({
  template,
  index,
  selectedIdx,
  copiedIdx,
  onUseTemplate,
  onCopy,
}) => {
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
        transition: 'background-color 0.3s, transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.shadows[4],
        },
      }}
      component="article"
      itemScope
      itemType="https://schema.org/CreativeWork"
      aria-label={`Template: ${template.label}`}
    >
      <TemplateCardHeader
        template={template}
        selectedIdx={selectedIdx}
        index={index}
        copiedIdx={copiedIdx}
        onUseTemplate={onUseTemplate}
        onCopy={onCopy}
      />
      <CardContent
        sx={{
          pt: 1,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            mb: 2,
            minHeight: 40,
            color: theme.palette.text.secondary,
            transition: 'color 0.3s',
          }}
          itemProp="description"
        >
          {template.description}
        </Typography>
        <TemplatePreview content={template.content} />
      </CardContent>
    </Card>
  );
};

TemplateCard.displayName = 'TemplateCard';

export default React.memo(TemplateCard);
