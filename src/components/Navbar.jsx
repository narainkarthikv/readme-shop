import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShopStore } from '../store/useShopStore';
import { FaMoon, FaSun, FaShoppingCart, FaObjectGroup } from 'react-icons/fa';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CustomDrawer from './CustomDrawer';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const themeMode = useShopStore((state) => state.themeMode);
  const setThemeMode = useShopStore((state) => state.setThemeMode);

  const handleThemeToggle = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  const handleDrawerToggle = () => setDrawerOpen((open) => !open);

  // Only Home and Templates
  const drawerItems = ['Github components', 'Templates'];
  const drawerIcons = [<FaObjectGroup />, <MenuBookIcon />];
  const drawerLinks = ['/components', '/templates'];

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          edge="start"
          className="myiconbutton"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          className="myiconbutton"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            flexGrow: 1,
            fontWeight: 400,
            fontSize: 30,
          }}
        >
          README SHOP
        </Typography>
        <IconButton
          className="myiconbutton"
          onClick={handleThemeToggle}
          color="inherit"
          sx={{ mr: 1 }}
        >
          {themeMode === 'light' ? <FaMoon /> : <FaSun />}
        </IconButton>
        <IconButton
          className="myiconbutton"
          component={Link}
          to="/shop"
          color="inherit"
        >
          <FaShoppingCart />
        </IconButton>
        <CustomDrawer
          open={drawerOpen}
          onClose={handleDrawerToggle}
          anchor="left"
          items={drawerItems}
          itemIcons={drawerIcons}
          itemLinks={drawerLinks}
          title="Navigation"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
