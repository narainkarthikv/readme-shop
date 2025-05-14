import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography
        variant="h6"
        component={Link}
        to="/"
        sx={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}
      >
        README SHOP
      </Typography>
      <IconButton component={Link} to="/shop" color="inherit">
        <FaShoppingCart />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Navbar;
