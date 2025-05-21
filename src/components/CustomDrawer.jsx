import React from 'react';
import { Drawer, IconButton, List, ListItemIcon, ListItemText, ListItemButton, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';

const CustomDrawer = ({
  open,
  onClose,
  anchor = 'left',
  items = [],
  itemIcons = [],
  itemLinks = [],
  title = 'Menu',
  renderItem,
  sx = {},
}) => (
  <Drawer
    anchor={anchor}
    open={open}
    onClose={onClose}
    sx={sx}
    PaperProps={{
      sx: {
        bgcolor: 'background.default',
        color: 'text.primary',
      }
    }}
  >
    <Box
      sx={{
        width: 250,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      role="presentation"
    >
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {items.length === 0 ? (
          <ListItemButton disabled>
            <ListItemText primary="No items" />
          </ListItemButton>
        ) : (
          items.map((item, idx) =>
            renderItem ? (
              renderItem(item, itemIcons[idx], itemLinks[idx], idx)
            ) : (
              <ListItemButton
                key={idx}
                component={Link}
                to={itemLinks[idx] || "/"}
                onClick={onClose}
                sx={{
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                  color: 'text.primary',
                }}
              >
                <ListItemIcon sx={{ color: 'text.secondary' }}>
                  {itemIcons[idx] ? itemIcons[idx] : <MenuBookIcon />}
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItemButton>
            )
          )
        )}
      </List>
    </Box>
  </Drawer>
);

export default CustomDrawer;
