import { memo } from 'react';
import { useShopStore } from '@/context/store/useShopStore';
import iconList from '../assets/data/iconsList.json';
import { loadAndFilter } from '../utils/loadAndFilter';
import useMarkdownStore from '@/features/markdown/store/markdownStore';
import { TextField, Typography, Box, Paper, useTheme, alpha } from '@mui/material';

const IconItem = memo(({ icon, isSelected, onClick }) => {
  const theme = useTheme();
  
  return (
    <Box
      onClick={() => onClick(icon)}
      sx={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 1,
        borderRadius: 1,
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        bgcolor: isSelected ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
        border: `2px solid ${isSelected ? theme.palette.primary.main : 'transparent'}`,
        '&:hover': {
          bgcolor: alpha(theme.palette.primary.main, 0.08),
          transform: 'translateY(-2px)',
          boxShadow: theme.shadows[2],
        },
        '&:active': {
          transform: 'translateY(0)',
        },
      }}
      role="button"
      tabIndex={0}
      aria-label={`${isSelected ? 'Remove' : 'Add'} ${icon.name} icon`}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(icon);
        }
      }}
    >
      <Box
        component="img"
        src={icon.url}
        alt={icon.name}
        loading="lazy"
        sx={{
          width: 48,
          height: 48,
          objectFit: 'contain',
          mb: 0.5,
        }}
      />
      <Typography
        variant="caption"
        noWrap
        sx={{
          width: '100%',
          textAlign: 'center',
          fontSize: '0.7rem',
          fontWeight: isSelected ? 600 : 400,
          color: isSelected ? 'primary.main' : 'text.secondary',
        }}
      >
        {icon.name}
      </Typography>
    </Box>
  );
});

IconItem.displayName = 'IconItem';

const Icons = () => {
  const theme = useTheme();
  const searchTerm = useShopStore((state) => state.iconSearchTerm);
  const setSearchTerm = useShopStore((state) => state.setIconSearchTerm);
  const embedIcon = useMarkdownStore((state) => state.embedIcon);
  const removeIcon = useMarkdownStore((state) => state.removeIcon);
  const iconNames = useMarkdownStore((state) => state.iconNames);
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
      elevation={0}
      sx={{
        textAlign: 'center',
        mt: 0,
        p: 3,
        width: '100%',
        maxWidth: '100%',
        minHeight: 400,
        maxHeight: 700,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        bgcolor: 'background.paper',
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mb: 2,
          fontSize: '1.25rem',
        }}
      >
        Tech Stack Icons
      </Typography>
      
      <TextField
        variant="outlined"
        placeholder="Search icons..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        size="small"
        sx={{
          mb: 2,
          maxWidth: 320,
          mx: 'auto',
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
          },
        }}
      />
      
      {skilliconsUrl && (
        <Box sx={{ mb: 2, minHeight: 60 }}>
          <img
            src={skilliconsUrl}
            alt="Selected icons preview"
            style={{ maxWidth: '100%', maxHeight: 60, objectFit: 'contain' }}
          />
        </Box>
      )}

      {/* Responsive icon grid using CSS grid - optimized for space efficiency */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          minHeight: 0,
          px: 1,
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            bgcolor: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            bgcolor: alpha(theme.palette.text.primary, 0.2),
            borderRadius: '4px',
            '&:hover': {
              bgcolor: alpha(theme.palette.text.primary, 0.3),
            },
          },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(72px, 1fr))',
            gap: 1.5,
            pb: 2,
          }}
        >
          {filteredIcons.map((icon, index) => (
            <IconItem
              key={`${icon.name}-${index}`}
              icon={icon}
              isSelected={iconNames.includes(icon.name.toLowerCase())}
              onClick={handleIconClick}
            />
          ))}
        </Box>
      </Box>
      
      {filteredIcons.length === 0 && (
        <Box sx={{ py: 4 }}>
          <Typography variant="body2" color="text.secondary">
            No icons found matching &quot;{searchTerm}&quot;
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default memo(Icons);
